# ERP Kenya

A full-stack ERP application with a React frontend and FastAPI backend.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Local Development](#local-development)
- [VPS Deployment](#vps-deployment)
- [Connecting Domain on Namecheap](#connecting-domain-on-namecheap)

## Prerequisites

- Node.js (v18+)
- Yarn package manager
- Python 3.10+
- pip

## Local Development

### Frontend

```bash
cd frontend
yarn install
yarn start
```

### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn server:app --reload
```

## VPS Deployment

Follow these steps to deploy the application to a Virtual Private Server (VPS).

### 1. Initial Server Setup

Connect to your VPS via SSH:

```bash
ssh root@your_server_ip
```

**Security Note**: For production environments, it's recommended to create a non-root user with sudo privileges and use that for deployment operations.

Update the system and install required packages:

```bash
apt update && apt upgrade -y
apt install -y nginx python3 python3-pip python3-venv nodejs npm git certbot python3-certbot-nginx ufw
npm install -g yarn
```

Configure the firewall to allow HTTP, HTTPS, and SSH traffic:

```bash
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
```

### 2. Clone the Repository

```bash
cd /var/www
git clone https://github.com/francis450/erpkenya.git
cd erpkenya
```

Set proper ownership for the www-data user:

```bash
sudo chown -R www-data:www-data /var/www/erpkenya
```

### 3. Backend Setup

Create a virtual environment and install dependencies:

```bash
cd /var/www/erpkenya/backend
sudo -u www-data python3 -m venv venv
sudo -u www-data bash -c 'source venv/bin/activate && pip install -r requirements.txt'
```

**Environment Variables**: Create a `.env` file for any required environment variables:

```bash
sudo -u www-data nano /var/www/erpkenya/backend/.env
```

Add your configuration (adjust as needed for your setup):

```
DATABASE_URL=your_database_connection_string
SECRET_KEY=your_secret_key
```

Create a systemd service file for the backend:

```bash
sudo nano /etc/systemd/system/erpkenya-backend.service
```

Add the following content:

```ini
[Unit]
Description=ERP Kenya Backend
After=network.target

[Service]
User=www-data
Group=www-data
WorkingDirectory=/var/www/erpkenya/backend
Environment="PATH=/var/www/erpkenya/backend/venv/bin"
EnvironmentFile=/var/www/erpkenya/backend/.env
ExecStart=/var/www/erpkenya/backend/venv/bin/uvicorn server:app --host 127.0.0.1 --port 8000
Restart=always

[Install]
WantedBy=multi-user.target
```

Enable and start the service:

```bash
sudo systemctl daemon-reload
sudo systemctl enable erpkenya-backend
sudo systemctl start erpkenya-backend
```

Verify the service is running:

```bash
sudo systemctl status erpkenya-backend
```

### 4. Frontend Setup

Build the frontend:

```bash
cd /var/www/erpkenya/frontend
yarn install
yarn build
```

### 5. Nginx Configuration

Create an Nginx configuration file:

```bash
sudo nano /etc/nginx/sites-available/erpkenya
```

Add the following content (replace `yourdomain.com` with your actual domain):

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    # Frontend
    root /var/www/erpkenya/frontend/build;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Backend API proxy
    location /api {
        proxy_pass http://127.0.0.1:8000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable the site and restart Nginx:

```bash
sudo ln -s /etc/nginx/sites-available/erpkenya /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### 6. SSL Certificate (Required for Production)

Install an SSL certificate using Certbot to enable HTTPS:

```bash
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

Follow the prompts to complete the SSL setup. Certbot will automatically configure Nginx to use HTTPS and redirect HTTP traffic to HTTPS.

**Important**: SSL/HTTPS is essential for production environments to encrypt data in transit and protect user credentials.

## Connecting Domain on Namecheap

Follow these steps to connect your Namecheap domain to your VPS:

### 1. Get Your VPS IP Address

Note your VPS public IP address. You can find it by running:

```bash
curl ifconfig.me
```

### 2. Configure DNS Records on Namecheap

1. Log in to your [Namecheap account](https://www.namecheap.com/)
2. Go to **Domain List** and click **Manage** next to your domain
3. Navigate to the **Advanced DNS** tab
4. Remove any existing A records or CNAME records for `@` and `www`
5. Add the following DNS records:

| Type | Host | Value | TTL |
|------|------|-------|-----|
| A Record | @ | Your_VPS_IP_Address | Automatic |
| A Record | www | Your_VPS_IP_Address | Automatic |

### 3. Wait for DNS Propagation

DNS changes can take up to 24-48 hours to propagate globally, but usually complete within a few minutes to a few hours.

You can check DNS propagation status using:

```bash
nslookup yourdomain.com
```

Or use online tools like [DNS Checker](https://dnschecker.org/).

### 4. Verify the Connection

Once DNS has propagated, visit your domain in a browser:

- `http://yourdomain.com`
- `http://www.yourdomain.com`

If you configured SSL, access via HTTPS:

- `https://yourdomain.com`
- `https://www.yourdomain.com`

### Troubleshooting

- **Site not loading**: Check that Nginx is running with `sudo systemctl status nginx`
- **Backend API errors**: Check backend logs with `sudo journalctl -u erpkenya-backend -f`
- **DNS not resolving**: Verify DNS records on Namecheap and wait for propagation
- **SSL issues**: Re-run `sudo certbot --nginx -d yourdomain.com` and check for errors

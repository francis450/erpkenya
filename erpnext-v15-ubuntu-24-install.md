# ERPNext v15 on Ubuntu 24.04: A No-Nonsense Guide (That Actually Works)

> *Because life's too short for cryptic stack traces at 2am.*

Welcome, brave soul. You've decided to install ERPNext v15 on Ubuntu 24.04 — a noble pursuit. By the end of this guide, you'll have a fully operational ERP system running on your server. Let's get into it.

---

## On Windows? Start Here First (WSL2 Setup)

If you're on a Windows machine, don't close this tab — you're not left out. Windows Subsystem for Linux (WSL2) lets you run Ubuntu 24.04 natively without dual-booting or spinning up a VM. Here's how:

**Open PowerShell as Administrator** and run:

```powershell
wsl --install -d Ubuntu-24.04
```

Restart your machine when prompted. Once it's back up, launch **Ubuntu 24.04** from the Start menu and set up your Unix username and password.

Next time you want to jump into your Ubuntu environment, just run:

```powershell
wsl -d Ubuntu-24.04
```

And you're in. From here, follow the rest of this guide exactly as written — it's all the same from this point on.

---

## What You'll Need Before We Start

### Software Checklist
- Ubuntu 24.04 (updated, obviously)
- A user with `sudo` powers — because you're not a monster who SSHs as root
- Python 3.11+
- pip 20+
- MariaDB 10.3.x
- Node.js 18
- yarn 1.12+

---

## Step 1: Get Your Server in Shape

### Update Everything First (Yes, Everything)

```bash
sudo apt-get update -y
sudo apt-get upgrade -y
```

Grab a coffee. This might take a minute.

---

## Step 2: Create a Dedicated Bench User

Root user = too much power, too much risk. We create a separate user for Frappe Bench. Think of it as giving your ERP its own apartment instead of letting it live in the server's master bedroom.

```bash
sudo adduser [frappe-user]
usermod -aG sudo [frappe-user]
su [frappe-user]
cd /home/[frappe-user]
```

> Replace `[frappe-user]` with something sensible. `frappe` works great.

---

## Step 3: Install the Dependency Army

ERPNext doesn't travel light. Here's everything it needs:

### Git — The Non-Negotiable

```bash
sudo apt-get install git -y
```

### Python Goodies

ERPNext v15 requires Python 3.11+. Let's install the essentials:

```bash
# Python dev headers
sudo apt-get install python3-dev -y

# setuptools and pip
sudo apt-get install python3-setuptools python3-pip -y

# Virtual environments
sudo apt install python3.12-venv -y
```

### MariaDB — ERPNext's Database Soulmate

ERPNext was literally built to run on MariaDB. Don't fight it.

```bash
sudo apt-get install software-properties-common -y
sudo apt install mariadb-server -y
sudo mysql_secure_installation
```

When the setup wizard asks you questions, answer like this:

```
Enter current password for root: → (your SSH root password)
Switch to unix_socket authentication: → Y
Change the root password? → Y (set a strong one!)
Remove anonymous users? → Y
Disallow root login remotely? → N (you might need remote access for BI tools)
Remove test database? → Y
Reload privilege tables? → Y
```

### Configure MariaDB for UTF-8 (Don't Skip This!)

```bash
sudo nano /etc/mysql/my.cnf
```

Append this to the end of the file:

```ini
[mysqld]
character-set-client-handshake = FALSE
character-set-server = utf8mb4
collation-server = utf8mb4_unicode_ci

[mysql]
default-character-set = utf8mb4
```

Restart MariaDB to apply:

```bash
sudo service mysql restart
```

### Redis — The Speed Demon

```bash
sudo apt-get install redis-server -y
```

### Node.js, NPM & Yarn

```bash
# Install CURL first
sudo apt install curl

# Install NVM (Node Version Manager)
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
source ~/.profile

# Install Node 18
nvm install 18

# Install NPM
sudo apt-get install npm -y

# Install Yarn globally
sudo npm install -g yarn -y
```

---

## Step 4: Install wkhtmltopdf (The Right Way)

> **Heads up:** The version available via `apt` is broken on Ubuntu 24.04. Don't waste your time with it. Here's the fix:

First, install just the dependencies you actually need:

```bash
sudo apt-get install xvfb libfontconfig -y
```

Then grab the working `.deb` package directly from GitHub:

```bash
wget https://github.com/wkhtmltopdf/packaging/releases/download/0.12.6.1-2/wkhtmltox_0.12.6.1-2.jammy_amd64.deb
```

Install it:

```bash
sudo dpkg -i wkhtmltox_0.12.6.1-2.jammy_amd64.deb
```

Verify it actually works:

```bash
wkhtmltopdf --version
# Expected output: wkhtmltopdf 0.12.6.1 (with patched qt)
```

If you see that output — beautiful. You're good to go. 

---

## Step 5: Install Frappe Bench

The `-H` flag ensures installation lands in the right home directory. The `--break-system-packages` flag tells pip you know what you're doing (you do, now).

```bash
sudo -H pip3 install frappe-bench --break-system-packages
```

While we're at it:

```bash
sudo -H pip3 install ansible --break-system-packages
```

---

## Step 6: Initialize Frappe Bench

```bash
bench init frappe-bench --frappe-branch version-15
cd frappe-bench
```

Give your bench user the execution permissions it deserves:

```bash
chmod -R o+rx /home/[frappe-user]
```

---

## Step 7: Create a New Site

Every ERPNext deployment needs a site. This is where your data will live.

```bash
bench new-site [site-name]
```

---

## Step 8: Download & Install ERPNext Apps

### Get the Apps

```bash
# Payments app (required dependency)
bench get-app payments

# ERPNext itself
bench get-app --branch version-15 erpnext

# Optional: HR & Payroll module
bench get-app hrms
```

### Install onto Your Site

```bash
bench --site [site-name] install-app erpnext

# If you got hrms:
bench --site [site-name] install-app hrms
```

---

## Step 9: Fire It Up!

```bash
bench start
```

Visit `http://YOUR_SERVER_IP:8000` and you should see ERPNext v15 smiling back at you.

> **Note:** Dev mode doesn't survive a server reboot. You'll need to run `bench start` again after each restart. For something that stays alive on its own, keep reading.

---

## Going Production: Make It Permanent

Ready to stop babysitting your server? Let's set up production mode.

```bash
# Enable the task scheduler
bench --site [site-name] enable-scheduler

# Turn off maintenance mode
bench --site [site-name] set-maintenance-mode off

# Configure production settings
sudo bench setup production [frappe-user]

# Configure NGINX
bench setup nginx

# Restart everything and seal the deal
sudo supervisorctl restart all
sudo bench setup production [frappe-user]
```

If prompted to save config files, hit `Y`.

Your ERPNext instance now:
- Runs on port 80 (no more `:8000`)
- Starts automatically on server reboot
- Is managed by Supervisor

---

## Next Steps

Want HTTPS? You'll want to set up an SSL certificate — that's a whole other guide, but definitely worth doing before you put real data on this thing.

---

*Happy ERPing! May your ledgers balance and your stock counts never drift.* 

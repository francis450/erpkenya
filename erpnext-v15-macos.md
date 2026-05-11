# ERPNext v15 on macOS: A No-Nonsense Guide (That Actually Works)

> *Because life's too short for cryptic stack traces at 2am — and yes, this works on your Mac too.*

Welcome, brave soul. You've decided to install ERPNext v15 on macOS — excellent taste. We're going to use **Laravel Herd** for PHP/Node.js management and **DBngin** for MariaDB, keeping things clean and GUI-friendly where it counts. By the end of this guide, you'll have a fully operational ERPNext instance running locally.

Let's get into it.

---

## What You'll Need Before We Start

### Tools to Install (in order)

| Tool | Purpose | Link |
|------|---------|------|
| **Homebrew** | Package manager for macOS | [brew.sh](https://brew.sh) |
| **NVM** | Node.js version management | [github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm) |
| **DBngin** | One-click MariaDB/MySQL server | [dbngin.com](https://dbngin.com) |

### Software Checklist
- macOS 12 Monterey or later (Apple Silicon and Intel both work)
- Python 3.11+
- Node.js 18 (via Herd)
- yarn 1.12+
- MariaDB 10.6+ (via DBngin)
- Redis

---

## Step 1: Install Homebrew

If you don't have Homebrew yet, open **Terminal** and run:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Follow the prompts. After installation, make sure `brew` is on your PATH — the installer will tell you if you need to add anything to your shell profile (especially important on Apple Silicon Macs).

Verify it's working:

```bash
brew --version
```

---

## Step 2: Set Up Node.js 18 via NVM

### Install NVM

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

Once the install script finishes, reload your shell profile to activate NVM:

```bash
source ~/.zshrc
```

> **Using bash instead of zsh?** Run `source ~/.bash_profile` instead.

Verify NVM is available:

```bash
nvm --version
```

### Install and Use Node 18

```bash
nvm install 18
nvm use 18
```

Verify it worked:

```bash
node --version
# Expected: v18.x.x

npm --version
```

To make Node 18 your default across all new terminal sessions:

```bash
nvm alias default 18
```

### Install Yarn

```bash
npm install -g yarn
yarn --version
```

> **Note:** If you see permission errors, do **not** use `sudo` with npm. NVM installs Node in your home directory specifically to avoid permission issues — using `sudo` will bypass that and cause problems.

---

## Step 3: Set Up MariaDB via DBngin

### Install DBngin

Download **DBngin** from [dbngin.com](https://dbngin.com), install it, and open it.

### Create a MariaDB Server

1. Click the **+** button in DBngin
2. Choose **MariaDB** as the database type
3. Select version **10.6** or later
4. Leave the port as **3306** (default)
5. Click **Create Server**
6. Hit the **Start** button to start the server

DBngin manages the MariaDB process for you — no terminal commands needed to start/stop it.

### Add MariaDB to Your PATH

Before you can type `mariadb` like a normal person instead of the full `/Users/Shared/DBngin/...` path every single time, you need to tell your shell where DBngin's binaries live.

First, find your MariaDB binary path:

```bash
find /Users/Shared/DBngin -name "mariadb" -type f 2>/dev/null
```

You'll get back something like:

```
/Users/Shared/DBngin/mariadb/10.11.6_intel/bin/mariadb
```

Add that `bin` folder to your PATH (swap in your actual version number if it differs):

```bash
echo 'export PATH="/Users/Shared/DBngin/mariadb/10.11.6_intel/bin:$PATH"' >> ~/.zshrc && source ~/.zshrc
```

Verify it worked:

```bash
which mariadb
# Expected: /Users/Shared/DBngin/mariadb/10.11.6_intel/bin/mariadb
```

Now you can connect cleanly from anywhere.

### Connect to MariaDB and Configure it

DBngin ships with no root password by default. Connect via Terminal:

```bash
mariadb -u root -h 127.0.0.1 -P 3306
```

Once you're in the MariaDB shell, set a root password and configure UTF-8:

```sql
ALTER USER 'root'@'localhost' IDENTIFIED BY 'your-strong-password';
FLUSH PRIVILEGES;
EXIT;
```

### Configure MariaDB for UTF-8 (Don't Skip This!)

DBngin stores each server's config in a UUID-named folder. Write the config in one shot using this command — just replace the UUID with your actual server's UUID (visible in DBngin's server settings):

```bash
cat > ~/Library/Application\ Support/com.tinyapp.DBngin/Engines/mariadb/YOUR-SERVER-UUID/my.cnf << 'EOF'
[client]
default-character-set = utf8mb4

[mysql]
default-character-set = utf8mb4

[mysqld]
character-set-server = utf8mb4
collation-server = utf8mb4_unicode_ci
init-connect = 'SET NAMES utf8mb4'
EOF
```

> **Finding your UUID:** Open DBngin → right-click your server → **Show in Finder** (or check the server's Info panel). The folder name is your UUID — something like `287AC431-A063-4592-AA11-490DC4768F1E`.

Restart MariaDB from the DBngin interface (Stop → Start) to apply the changes.

---

## Step 4: Install Python 3.11+

macOS ships with Python 3, but it may be an older version. Install a fresh one via Homebrew:

```bash
brew install python@3.11
```

Make sure it's the active Python:

```bash
python3 --version
# Should show 3.11.x or higher

pip3 --version
```

If your system still defaults to an older Python, add this to your `~/.zshrc` (or `~/.bash_profile`):

```bash
export PATH="/opt/homebrew/opt/python@3.11/bin:$PATH"
```

Then reload:

```bash
source ~/.zshrc
```

---

## Step 5: Install Redis

```bash
brew install redis
brew services start redis
```

Verify Redis is running:

```bash
redis-cli ping
# Expected output: PONG
```

---

## Step 6: Install wkhtmltopdf

The Homebrew version can be hit-or-miss. Grab the official macOS package directly from the wkhtmltopdf downloads page:

👉 [https://wkhtmltopdf.org/downloads.html](https://wkhtmltopdf.org/downloads.html)

Under the **Stable** section, download the **macOS / Cocoa** package — it'll be named something like `wkhtmltox-0.12.6-2.macos-cocoa.pkg`.

Run the `.pkg` installer and follow the prompts.

Verify it works:

```bash
wkhtmltopdf --version
# Expected: wkhtmltopdf 0.12.6.1 (with patched qt)
```

---

### 🚨 "Apple could not verify wkhtmltox is free of malware"

If macOS throws you this message — breathe. That's just **Gatekeeper** doing its job. It blocks installers that aren't notarized by Apple, which is extremely common with older open-source tools like `wkhtmltopdf`. It doesn't mean the file is actually malicious.

You've got a few ways to handle it:

#### Option 1 (Recommended): Allow it via Security Settings

Since you're downloading directly from the official wkhtmltopdf site, this is completely safe to proceed:

1. Try running the `.pkg` again
2. When the warning appears — **don't close it**
3. Open **System Settings → Privacy & Security**
4. Scroll down and look for:
   > *"wkhtmltox was blocked from use because it is not from an identified developer."*
5. Click **Open Anyway**
6. Confirm with your password

That's it — the installer will proceed normally.

#### Option 2: Right-click to Open

1. In Finder, right-click the `.pkg` file
2. Select **Open** from the context menu (not double-click)
3. A different dialog will appear — this one has an **Open** button
4. Click it and proceed

#### Option 3: Bypass via Terminal

If you're comfortable in the terminal:

```bash
sudo xattr -rd com.apple.quarantine /path/to/wkhtmltox-0.12.6-2.macos-cocoa.pkg
```

Then double-click the `.pkg` and it'll open without complaint.

---

## Step 7: Install Frappe Bench

### The Python Version Problem (Read This First)

Before you touch `pip`, know this: Frappe Bench requires **Python 3.10 or higher**. macOS ships with Python 3.9.6, which will throw you this wall of sadness the moment you try to install:

```
ERROR: Package 'frappe-bench' requires a different Python
```

Don't fight the system Python. Fix it properly.

### Install Python 3.11 via Homebrew

```bash
brew install python@3.11
```

Verify it's there:

```bash
python3.11 --version
```

### Set Up a Clean Virtual Environment

If you've already fumbled through a failed install and have a stale virtual environment lying around, kill it first:

```bash
deactivate
rm -rf ~/bench-env
```

Now create a fresh one with Python 3.11:

```bash
python3.11 -m venv ~/bench-env
```

Activate it:

```bash
source ~/bench-env/bin/activate
```

Verify you're running the right Python inside the environment:

```bash
python --version
# Expected: Python 3.11.x
```

### Upgrade pip Before You Do Anything Else

Old pip versions choke on `pyproject.toml`-based packages — which Bench uses. Don't skip this:

```bash
python -m pip install --upgrade pip setuptools wheel
```

### Install Bench from Source

The `pip install frappe-bench` shortcut can be unreliable on macOS. Clone and install directly instead — this is the flow that actually works:

```bash
git clone https://github.com/frappe/bench.git
cd bench
pip install -e .
```

Verify Bench is installed:

```bash
bench --version
```

> **Heads up:** Make sure your virtual environment is still active (you'll see `(bench-env)` in your terminal prompt) every time you work with Bench. If you open a new terminal window, run `source ~/bench-env/bin/activate` again before doing anything.

---

## Step 8: Initialize Frappe Bench

Navigate to a directory where you want your bench to live (your home folder works fine):

```bash
cd ~
bench init frappe-bench --frappe-branch version-15
cd frappe-bench
```

This will take a few minutes — it's cloning repos and setting up a Python virtual environment.

---

## Step 9: Create a New Site

```bash
bench new-site mysite.local
```

You'll be prompted for the MariaDB root password you set in Step 3. Use it.

> **Tip:** Use a `.local` domain — it plays nicely with macOS networking and you won't need to touch `/etc/hosts` for local development.

---

## Step 10: Download & Install ERPNext Apps

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
bench --site mysite.local install-app erpnext

# If you got hrms:
bench --site mysite.local install-app hrms
```

---

## Step 11: Fire It Up!

```bash
bench start
```

Open your browser and visit:

```
http://localhost:8000
```

You should see the ERPNext v15 login screen. Default credentials:

- **Username:** `Administrator`
- **Password:** The password you set when creating the site

> **macOS Firewall Note:** If your browser can't connect, check **System Settings → Network → Firewall** and make sure incoming connections for Python are allowed.

---

## Keeping It Running Between Sessions

On macOS, `bench start` runs in the foreground. When you close the terminal, ERPNext stops. Here's how to handle that:

### Option A: Keep the Terminal Open (Dev Mode)

Just don't close it. Simple. Open a second terminal window for other work.

### Option B: Run in the Background with a Simple Script

Create a startup script:

```bash
nano ~/start-erpnext.sh
```

Add:

```bash
#!/bin/bash
cd ~/frappe-bench
bench start
```

Make it executable:

```bash
chmod +x ~/start-erpnext.sh
```

Run it anytime with `~/start-erpnext.sh`.

### Option C: Production Setup with Supervisor

If you want ERPNext to run in the background persistently (even after reboot):

```bash
# Install supervisor
brew install supervisor

# Configure production mode
bench --site mysite.local enable-scheduler
bench --site mysite.local set-maintenance-mode off
sudo bench setup production $(whoami)
bench setup nginx
sudo supervisorctl restart all
```

> **Note:** Supervisor-based production setup on macOS works but is less common than on Linux servers. For serious local dev, Option A or B is usually enough. For actual production deployments, consider a Linux VPS.

---

## Troubleshooting

### `bench` command not found
Make sure `~/.local/bin` is on your PATH:
```bash
export PATH="$HOME/.local/bin:$PATH"
```
Add that line to your `~/.zshrc` to make it permanent.

### MariaDB connection refused
Open DBngin and make sure your MariaDB server shows a green **Running** status. If it's stopped, hit Start.

### Node version issues
Run `nvm use 18` again. If NVM isn't recognized, run `source ~/.zshrc` first — NVM needs to be loaded into your current shell session. To make this permanent, ensure the NVM lines were added to your `~/.zshrc` by the install script (they should be at the bottom of the file).

### Python version conflicts
If `bench` is picking up the wrong Python, explicitly point it:
```bash
bench init frappe-bench --frappe-branch version-15 --python /opt/homebrew/opt/python@3.11/bin/python3.11
```

### Permission errors on Apple Silicon
If you hit permission errors during `bench init`, try:
```bash
sudo chown -R $(whoami) /opt/homebrew
```

### `bench start` crashes immediately — socketio exits with rc=127

If `bench start` dies within seconds and your logs look like this:

```
socketio.1 | /bin/sh: /Users/yourname/Library/Application: No such file or directory
system     | socketio.1 stopped (rc=127)
```

The culprit is the space in `Application Support`. The socketio line in your `Procfile` has a node binary path that `/bin/sh` can't handle unquoted. Check what's in there:

```bash
cat Procfile
```

You'll see something like:

```
socketio: /Users/yourname/Library/Application Support/Herd/config/nvm/versions/node/v18.20.8/bin/node apps/frappe/socketio.js
```

That space between `Application` and `Support` is the problem. You've got two ways to fix it:

#### Option 1 (Recommended): Symlink the node binary

Create a clean, space-free alias for your node binary:

```bash
sudo ln -s "/Users/yourname/Library/Application Support/Herd/config/nvm/versions/node/v18.20.8/bin/node" /usr/local/bin/node-herd
```

Then open the Procfile and update the socketio line:

```bash
nano Procfile
```

Change it to:

```
socketio: node-herd apps/frappe/socketio.js
```

Save with `Ctrl+O`, `Enter`, then `Ctrl+X`.

This is the cleaner fix — it won't get clobbered by `bench update`.

#### Option 2: Quote the path directly in the Procfile

If you'd rather not create a symlink, edit the Procfile and wrap the node binary path in quotes:

```bash
nano Procfile
```

Change the socketio line from:

```
socketio: /Users/yourname/Library/Application Support/Herd/.../node apps/frappe/socketio.js
```

To:

```
socketio: "/Users/yourname/Library/Application Support/Herd/.../node" apps/frappe/socketio.js
```

Save and run `bench start` again — everything should come up cleanly.

> **Why does this happen?** If you installed NVM through Laravel Herd, the node binary ends up inside `~/Library/Application Support/Herd/...` — a path with a space in it. Bench writes that path verbatim into the Procfile, and `/bin/sh` splits on spaces by default. The fix is either quoting it or getting node onto a space-free path.

### Restoring a Backup on macOS

Coming from a Linux/WSL setup? The `/mnt/c/Users/...` paths from Windows are not a thing on Mac. Your Downloads folder is just `~/Downloads`.

To restore a database backup:

```bash
bench --site local.erp restore \
  ~/Downloads/XXXXXXXX_XXXXXX-xxx_xxx_xxx-database.sql.gz
```

If you also have the files tarballs, include them:

```bash
bench --site local.erp restore \
  ~/Downloads/XXXXXXXX_XXXXXX-xxx_xxx_xxx-database.sql.gz \
  --with-public-files ~/Downloads/XXXXXXXX_XXXXXX-xxx_xxx_xxx-files.tar \
  --with-private-files ~/Downloads/XXXXXXXX_XXXXXX-xxx_xxx_xxx-private-files.tar
```

> `~/Downloads` expands correctly on Mac — no `/mnt/c/` needed, that's WSL (Windows) syntax. They're not the same thing.

---

### `http://127.0.0.1:8000` Returns "Not Found" or "Does Not Exist"

Frappe serves by **site name**, not by IP address. Hitting `127.0.0.1:8000` directly won't work — it doesn't know which site to load.

You need to access it via the site name you created:

```
http://local.erp:8000
```

But for that URL to resolve, the site name must be mapped in your `/etc/hosts` file. Check if it's already there:

```bash
cat /etc/hosts | grep local.erp
```

If nothing comes back, add it:

```bash
echo "127.0.0.1 local.erp" | sudo tee -a /etc/hosts
```

---

### "This site can't be reached" / `ERR_NAME_NOT_RESOLVED`

If your browser still can't find the site even after editing `/etc/hosts`, work through this checklist:

**1. Confirm your actual site name:**

```bash
ls sites/
```

Use whatever name appears there — not a guess. If your site is called `mysite.local`, that's the hostname you add to `/etc/hosts`.

**2. Edit `/etc/hosts` manually to be sure:**

```bash
sudo nano /etc/hosts
```

Add this line at the bottom (replace `local.erp` with your actual site name):

```
127.0.0.1    local.erp
```

Save with `Ctrl+O`, `Enter`, `Ctrl+X`.

**3. Flush macOS DNS cache:**

macOS caches DNS aggressively. Force it to pick up your changes:

```bash
sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
```

**4. Confirm `bench start` is actually running:**

Open a new terminal tab and check:

```bash
cd ~/frappe-bench && bench start
```

If it's not running, there's nothing to connect to — no amount of DNS tweaking will help.

**5. Then visit:**

```
http://local.erp:8000
```

That should land you on the ERPNext login screen.

---

## Quick Reference: Daily Dev Workflow

| Task | Command |
|------|---------|
| Start MariaDB | Open DBngin → click Start |
| Start Redis | `brew services start redis` |
| Start ERPNext | `cd ~/frappe-bench && bench start` |
| Stop ERPNext | `Ctrl + C` in the terminal |
| Stop Redis | `brew services stop redis` |
| Stop MariaDB | Open DBngin → click Stop |

---

*Happy ERPing on your Mac! May your ledgers balance and your M-series chip keep it blazing fast.*

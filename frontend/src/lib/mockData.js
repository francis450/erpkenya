// src/lib/mockData.js

const portableBlock = (text, style = "normal") => ({
  _type: "block",
  style,
  children: [{ _type: "span", text }],
});

const portableListItem = (text, listItem = "bullet") => ({
  _type: "block",
  style: "normal",
  listItem,
  children: [{ _type: "span", text }],
});

const portableCode = (code, language = "bash") => ({
  _type: "code",
  language,
  code,
});

export const mockBlogPosts = [
  {
    _id: "post-erpnext-v15-macos",
    _type: "blogPost",
    title: "ERPNext v15 on macOS: A No-Nonsense Guide (That Actually Works)",
    slug: { current: "install-erpnext-v15-macos" },
    mainImage: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=1200",
    publishedAt: "2026-05-11T09:00:00Z",
    updatedAt: "2026-05-11T09:00:00Z",
    readTime: "18 min read",
    excerpt: "A practical ERPNext v15 installation guide for macOS using Laravel Herd, DBngin, Homebrew, NVM, Redis, and Frappe Bench.",
    markdownPath: "/blog/erpnext-v15-macos.md",
    content: [
      portableBlock("A practical ERPNext v15 installation guide for macOS using Laravel Herd, DBngin, Homebrew, NVM, Redis, and Frappe Bench.")
    ]
  },
  {
    _id: "post-erpnext-v15-ubuntu-24-install",
    _type: "blogPost",
    title: "ERPNext v15 on Ubuntu 24.04: A No-Nonsense Guide (That Actually Works)",
    slug: { current: "install-erpnext-v15-ubuntu-24-04" },
    mainImage: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=1200",
    publishedAt: "2026-05-06T09:00:00Z",
    updatedAt: "2026-05-06T09:00:00Z",
    readTime: "11 min read",
    excerpt: "Because life's too short for cryptic stack traces at 2am. A no-nonsense ERPNext v15 installation guide for Ubuntu 24.04 that actually works.",
    markdownPath: "/blog/erpnext-v15-ubuntu-24-install.md",
    content: [
      portableBlock("This guide walks through installing ERPNext v15 on Ubuntu 24.04 from a clean server or WSL2 environment. It is written for teams that want the practical command sequence, the important version notes, and the production setup steps without digging through scattered forum threads."),
      portableBlock("Tested Environment", "h3"),
      portableListItem("Ubuntu 24.04 LTS"),
      portableListItem("Python 3.12 virtual environment support"),
      portableListItem("MariaDB 10.6.6+ recommended for Frappe v15"),
      portableListItem("Node.js 18+"),
      portableListItem("Yarn 1.12+"),
      portableListItem("wkhtmltopdf 0.12.6 with patched Qt"),
      portableBlock("On Windows? Start with WSL2", "h3"),
      portableBlock("If you are on Windows, install Ubuntu 24.04 through Windows Subsystem for Linux first. Open PowerShell as Administrator and run:"),
      portableCode("wsl --install -d Ubuntu-24.04", "powershell"),
      portableBlock("Restart when prompted, launch Ubuntu 24.04 from the Start menu, then create your Unix username and password. Later, you can jump back into the environment with:"),
      portableCode("wsl -d Ubuntu-24.04", "powershell"),
      portableBlock("Step 1: Update the Server", "h3"),
      portableBlock("Start by updating the package index and upgrading installed packages."),
      portableCode("sudo apt-get update -y\nsudo apt-get upgrade -y"),
      portableBlock("Step 2: Create a Dedicated Bench User", "h3"),
      portableBlock("Avoid running ERPNext as root. Create a dedicated user for Frappe Bench and give that user sudo access."),
      portableCode("sudo adduser frappe\nsudo usermod -aG sudo frappe\nsu frappe\ncd /home/frappe"),
      portableBlock("You can replace frappe with your preferred username, but keep it simple and consistent because you will reuse it during production setup."),
      portableBlock("Step 3: Install Core Dependencies", "h3"),
      portableBlock("Install Git, Python development packages, pip, setuptools, and Python virtual environment support."),
      portableCode("sudo apt-get install git -y\nsudo apt-get install python3-dev -y\nsudo apt-get install python3-setuptools python3-pip -y\nsudo apt install python3.12-venv -y"),
      portableBlock("Step 4: Install and Configure MariaDB", "h3"),
      portableBlock("ERPNext runs on MariaDB. Install the server package, then secure the installation."),
      portableCode("sudo apt-get install software-properties-common -y\nsudo apt install mariadb-server -y\nsudo mysql_secure_installation"),
      portableBlock("For the security prompts, use a strong root password, remove anonymous users, remove the test database, and reload privilege tables. Remote root login should generally stay disabled unless you have a specific administrative reason and a secure access model."),
      portableBlock("Next, configure MariaDB for utf8mb4 support. Open the config file:"),
      portableCode("sudo nano /etc/mysql/my.cnf"),
      portableBlock("Append this configuration:"),
      portableCode("[mysqld]\ncharacter-set-client-handshake = FALSE\ncharacter-set-server = utf8mb4\ncollation-server = utf8mb4_unicode_ci\n\n[mysql]\ndefault-character-set = utf8mb4", "ini"),
      portableBlock("Restart MariaDB after saving the file."),
      portableCode("sudo service mysql restart"),
      portableBlock("Step 5: Install Redis", "h3"),
      portableBlock("Redis handles caching and realtime updates for Frappe."),
      portableCode("sudo apt-get install redis-server -y"),
      portableBlock("Step 6: Install Node.js and Yarn", "h3"),
      portableBlock("ERPNext v15 uses Node.js 18+. A predictable way to install it is through NVM."),
      portableCode("sudo apt install curl -y\ncurl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash\nsource ~/.profile\nnvm install 18\nsudo apt-get install npm -y\nsudo npm install -g yarn"),
      portableBlock("Step 7: Install wkhtmltopdf", "h3"),
      portableBlock("wkhtmltopdf is required for PDF generation. Use the patched Qt build rather than relying blindly on the default Ubuntu package."),
      portableCode("sudo apt-get install xvfb libfontconfig -y\nwget https://github.com/wkhtmltopdf/packaging/releases/download/0.12.6.1-2/wkhtmltox_0.12.6.1-2.jammy_amd64.deb\nsudo dpkg -i wkhtmltox_0.12.6.1-2.jammy_amd64.deb\nwkhtmltopdf --version"),
      portableBlock("The expected version should show wkhtmltopdf 0.12.6.1 with patched Qt."),
      portableBlock("Step 8: Install Frappe Bench", "h3"),
      portableBlock("Install Frappe Bench with pip. On Ubuntu 24.04, the break-system-packages flag may be needed because of Python package management protections."),
      portableCode("sudo -H pip3 install frappe-bench --break-system-packages\nsudo -H pip3 install ansible --break-system-packages"),
      portableBlock("Step 9: Initialize Frappe Bench", "h3"),
      portableBlock("Create the bench using the Frappe version 15 branch."),
      portableCode("bench init frappe-bench --frappe-branch version-15\ncd frappe-bench\nchmod -R o+rx /home/frappe"),
      portableBlock("Step 10: Create a New Site", "h3"),
      portableBlock("Every ERPNext deployment needs at least one Frappe site. Replace the site name with your domain or local site name."),
      portableCode("bench new-site your-site-name.local"),
      portableBlock("Step 11: Download and Install ERPNext Apps", "h3"),
      portableBlock("Get the required apps, then install ERPNext on your site."),
      portableCode("bench get-app payments\nbench get-app --branch version-15 erpnext\nbench get-app hrms\nbench --site your-site-name.local install-app erpnext\nbench --site your-site-name.local install-app hrms"),
      portableBlock("If you do not need HR and payroll, skip HRMS. Keeping unused apps off the installation makes maintenance simpler."),
      portableBlock("Step 12: Start ERPNext in Development Mode", "h3"),
      portableBlock("Start Bench and open ERPNext in your browser."),
      portableCode("bench start"),
      portableBlock("Visit http://YOUR_SERVER_IP:8000 or http://localhost:8000 depending on your setup. Development mode is useful for setup and testing, but it does not automatically survive reboots."),
      {
        _type: "callToAction",
        title: "Need ERPNext Set Up for Kenya?",
        text: "ERP Kenya can help with installation, hosting, M-Pesa workflows, KRA eTIMS, payroll compliance, and production support.",
        buttonText: "Talk to ERP Kenya",
        url: "/contact"
      },
      portableBlock("Going Production", "h3"),
      portableBlock("When the site is ready to run without babysitting, enable the scheduler, turn off maintenance mode, configure production, and restart Supervisor."),
      portableCode("bench --site your-site-name.local enable-scheduler\nbench --site your-site-name.local set-maintenance-mode off\nsudo bench setup production frappe\nbench setup nginx\nsudo supervisorctl restart all\nsudo bench setup production frappe"),
      portableBlock("After production setup, ERPNext should run through NGINX on port 80 and start automatically when the server reboots."),
      portableBlock("Recommended Next Steps", "h3"),
      portableListItem("Add SSL before entering real business data."),
      portableListItem("Create scheduled backups and test restore procedures."),
      portableListItem("Document installed app branches and versions."),
      portableListItem("Add monitoring for disk space, memory, Redis, MariaDB, and Supervisor processes."),
      portableListItem("For Kenyan deployments, plan M-Pesa reconciliation, eTIMS integration, statutory payroll settings, and local chart of accounts early."),
      portableBlock("Common Issues to Check", "h3"),
      portableListItem("If PDF generation fails, confirm wkhtmltopdf is the patched Qt build."),
      portableListItem("If bench init fails, confirm Node.js, Python, pip, and yarn versions before retrying."),
      portableListItem("If database creation fails, recheck MariaDB root credentials and utf8mb4 configuration."),
      portableListItem("If the site works on port 8000 but not port 80, inspect NGINX and Supervisor status."),
      portableBlock("Related ERP Kenya Guides", "h3"),
      {
        _type: "block",
        markDefs: [
          { _key: "erp-comparison", _type: "link", href: "/resources/top-erp-software-kenya-2026-comparison" },
          { _key: "implementation", _type: "link", href: "/resources/erp-implementation-kenya-checklist" },
          { _key: "solutions", _type: "link", href: "/solutions" }
        ],
        children: [
          { _type: "span", text: "If you are still comparing platforms, read our " },
          { _type: "span", text: "ERP software in Kenya comparison", marks: ["erp-comparison"] },
          { _type: "span", text: ". If you are planning a company rollout, use the " },
          { _type: "span", text: "ERP implementation checklist", marks: ["implementation"] },
          { _type: "span", text: ". You can also explore " },
          { _type: "span", text: "ERP Kenya solutions", marks: ["solutions"] },
          { _type: "span", text: " for M-Pesa, KRA eTIMS, finance, inventory, and payroll workflows." }
        ]
      }
    ]
  },
  {
    _id: "post-1",
    _type: "blogPost",
    title: "How Automated ERP Integration Simplifies M-Pesa for Kenyan Businesses",
    slug: { current: "automated-mpesa-reconciliation" },
    mainImage: "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?auto=format&fit=crop&q=80&w=800",
    publishedAt: "2026-02-15T09:00:00Z",
    excerpt: "Stop wasting hours reconciling payments manually. Discover how automated rules match M-Pesa transactions to invoices instantly.",
    content: [
      {
        _type: "block",
        children: [
          { _type: "span", text: "You didn't start a business to spend your evenings staring at spreadsheets, trying to match M-Pesa reference codes to customer invoices. It’s tedious, prone to error, and frankly, a waste of your talent." }
        ]
      },
      {
        _type: "block",
        style: "h3",
        children: [{ _type: "span", text: "The Problem: The Reconciliation Nightmare" }]
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "For many Kenyan distributors, the 'end of day' means creating manual receipts for hundreds of small mobile money payments. One wrong digit, and your books are off. This chaos slows down deliveries and frustrates customers. " },
          { _type: "span", text: "A study by the Kenya Association of Manufacturers found that SMEs lose up to 15 hours a week on manual data entry." }
        ]
      },
      {
        _type: "block",
        style: "h3",
        children: [{ _type: "span", text: "The Solution: Automated Matching Rules" }]
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "ERP Kenya's Finance module automates this process. It imports the incoming M-Pesa SMS or API data, identifies the customer by phone number, matches it to the open invoice based on exact amount, and settles it. Automatically." }
        ]
      },
      {
        _type: "callToAction",
        title: "Ready to Automate?",
        text: "Stop wasting hours on manual reconciliation. See ERP Kenya in action today.",
        buttonText: "Book Free Demo",
        url: "/contact"
      },
      {
        _type: "block",
        style: "blockquote",
        children: [{ _type: "span", text: "\"We used to hire two interns just to do data entry. Now, the system does it instantly based on our preset rules.\"" }]
      },
      {
        _type: "block",
        style: "h3",
        children: [{ _type: "span", text: "Your 3-Step Plan to Freedom" }]
      },
      {
        _type: "block",
        style: "normal",
        listItem: "number",
        children: [{ _type: "span", text: "Connect your Paybill number to ERP Kenya." }]
      },
      {
        _type: "block",
        style: "normal",
        listItem: "number",
        children: [{ _type: "span", text: "Set your matching rules (e.g., exact amount matches)." }]
      },
      {
        _type: "block",
        style: "normal",
        listItem: "number",
        children: [{ _type: "span", text: "Watch your cash flow update in real-time." }]
      },
      {
        _type: "block",
        style: "h3",
        children: [{ _type: "span", text: "What's Next?" }]
      },
      {
        _type: "block",
        markDefs: [{ _key: "link-inventory", _type: "link", href: "/resources/inventory-management-strategies" }],
        children: [
          { _type: "span", text: "Once your payment collection is automated, the next bottleneck is usually inventory. " },
          {
            _type: "span",
            text: "Learn how automated inventory tracking prevents stock-outs",
            marks: ["link-inventory"]
          },
          { _type: "span", text: " and keeps your shelves full — especially during peak holiday seasons." }
        ]
      }
    ]
  },
  {
    _id: "post-2",
    _type: "blogPost",
    title: "Inventory Management: Staying Stocked in East Africa",
    slug: { current: "inventory-management-strategies" },
    mainImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    publishedAt: "2026-02-10T09:00:00Z",
    excerpt: "Don't let delays at Mombasa port catch you off guard. Learn how real-time inventory tracking helps you plan better.",
    content: [
      {
        _type: "block",
        children: [
          { _type: "span", text: "Supply chain surprises are the enemy of growth. Whether it's a delay at the port or a sudden fuel price hike, reacting late costs you money. In East Africa, where logistics can be unpredictable, having real-time data is necessary." }
        ]
      },
      {
        _type: "block",
        style: "h3",
        children: [{ _type: "span", text: "Stop Guessing, Start Knowing" }]
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "Traditional manual books look at what happened last month. ERP Kenya looks at what is happening now. By analyzing current stock levels and sales velocity, our system alerts you when you hit your re-order points." }
        ]
      },
      {
        _type: "callToAction",
        title: "Take Control of Stock",
        text: "Don't let stockouts lose you customers. Get full visibility now.",
        buttonText: "Explore Features",
        url: "/solutions"
      },
      {
        _type: "block",
        style: "h3",
        children: [{ _type: "span", text: "Case Study: City Supermarket" }]
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "Last year, one of our retail clients used our inventory tool. The system flagged low stock on essential grains just before a long holiday weekend. While competitors ran out, they had already restocked." }
        ]
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "The result? They captured all the holiday foot traffic, increasing their monthly sales by 15%." }
        ]
      },
      {
        _type: "block",
        style: "h3",
        children: [{ _type: "span", text: "Modernizing Your Payment Collection" }]
      },
      {
        _type: "block",
        markDefs: [{ _key: "link-mpesa", _type: "link", href: "/resources/automated-mpesa-reconciliation" }],
        children: [
          { _type: "span", text: "Great inventory management is only half the battle. If your payment collection is still manual, you're leaving money on the table. " },
          {
            _type: "span",
            text: "Discover how automated M-Pesa reconciliation eliminates manual data entry",
            marks: ["link-mpesa"]
          },
          { _type: "span", text: " and gives you real-time cash flow visibility." }
        ]
      }
    ]
  },
  {
    _id: "post-3",
    _type: "blogPost",
    title: "Top 7 ERP Software in Kenya: A 2026 Comparison Guide for Growing Businesses",
    slug: { current: "top-erp-software-kenya-2026-comparison" },
    mainImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    publishedAt: "2026-03-20T09:00:00Z",
    excerpt: "Comparing the best ERP systems available in Kenya for 2026 — from SAP and Oracle to ERPNext and local solutions. Find out which one fits your budget, compliance needs, and growth plans.",
    content: [
      {
        _type: "block",
        children: [
          { _type: "span", text: "Choosing the right ERP software in Kenya is one of the most important decisions a growing business can make. Get it right, and you unlock efficiency across finance, HR, inventory, and compliance. Get it wrong, and you're stuck with an expensive system that doesn't understand M-Pesa or KRA eTIMS." }
        ]
      },
      {
        _type: "block",
        style: "h3",
        children: [{ _type: "span", text: "Why Kenyan Businesses Are Moving to the Cloud in 2026" }]
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "The shift is clear: on-premise servers are expensive to maintain, vulnerable to power outages, and difficult to scale. Cloud ERP systems offer real-time access from anywhere — whether you're in your Nairobi office or visiting a supplier in Mombasa. According to industry reports, over 60% of Kenyan SMEs now prefer cloud-first solutions." }
        ]
      },
      {
        _type: "block",
        style: "h3",
        children: [{ _type: "span", text: "The 7 Top ERP Systems in Kenya" }]
      },
      {
        _type: "block",
        style: "h4",
        children: [{ _type: "span", text: "1. ERP Kenya (ERPKenya.com)" }]
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "Built specifically for the Kenyan market. Native M-Pesa reconciliation, KRA eTIMS compliance out of the box, NSSF/NHIF payroll deductions, and local support based in Nairobi. Best for: SMEs and mid-market companies who need a system that works without heavy customization." }
        ]
      },
      {
        _type: "block",
        style: "h4",
        children: [{ _type: "span", text: "2. ERPNext (Frappe)" }]
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "An open-source ERP with a strong community. Highly customizable but requires technical expertise to localize for Kenya. You'll need to build or find plugins for M-Pesa integration and KRA compliance. Best for: Tech-savvy companies with in-house developers." }
        ]
      },
      {
        _type: "block",
        style: "h4",
        children: [{ _type: "span", text: "3. SAP Business One" }]
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "The global enterprise standard. Powerful but expensive, with licensing costs that can exceed KES 5 million for SMEs. Kenyan localization is available through partners but adds to the cost. Best for: Large enterprises with dedicated IT budgets." }
        ]
      },
      {
        _type: "block",
        style: "h4",
        children: [{ _type: "span", text: "4. Oracle NetSuite" }]
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "Cloud-native and feature-rich, but pricing is opaque and generally premium. Good for multi-country operations but can feel over-engineered for a Kenyan SME. Best for: Companies with regional (East Africa) operations." }
        ]
      },
      {
        _type: "block",
        style: "h4",
        children: [{ _type: "span", text: "5. Zoho ERP (Zoho One)" }]
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "Affordable and user-friendly with a wide app ecosystem. However, M-Pesa and eTIMS integrations require third-party connectors. Best for: Small businesses looking for an all-in-one suite on a budget." }
        ]
      },
      {
        _type: "block",
        style: "h4",
        children: [{ _type: "span", text: "6. Sage 300 / Sage X3" }]
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "Well-known in East Africa with established local partners. Strong in accounting and distribution but the interface feels dated. Localization is decent but not as seamless as purpose-built solutions. Best for: Distribution and wholesale companies." }
        ]
      },
      {
        _type: "block",
        style: "h4",
        children: [{ _type: "span", text: "7. QuickBooks Enterprise" }]
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "Not a true ERP but many Kenyan businesses use it. Great for basic accounting, but lacks inventory depth, manufacturing modules, and HR/payroll with statutory compliance. Best for: Micro-businesses that only need accounting." }
        ]
      },
      {
        _type: "block",
        style: "h3",
        children: [{ _type: "span", text: "The Kenya Factor: What Global ERPs Get Wrong" }]
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "Here's the truth: most global ERP systems were not designed for the Kenyan business environment. They don't natively support:" }
        ]
      },
      {
        _type: "block",
        style: "normal",
        listItem: "bullet",
        children: [{ _type: "span", text: "M-Pesa Paybill/Till Number reconciliation — matching hundreds of mobile payments to invoices daily" }]
      },
      {
        _type: "block",
        style: "normal",
        listItem: "bullet",
        children: [{ _type: "span", text: "KRA eTIMS integration — automatic tax invoice submission to the Kenya Revenue Authority" }]
      },
      {
        _type: "block",
        style: "normal",
        listItem: "bullet",
        children: [{ _type: "span", text: "Statutory payroll deductions — PAYE, NSSF, NHIF, Housing Levy calculations that change with each Finance Act" }]
      },
      {
        _type: "block",
        style: "normal",
        listItem: "bullet",
        children: [{ _type: "span", text: "Multi-currency with KES as the base — handling USD/EUR supplier invoices alongside local shilling operations" }]
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "If your ERP can't handle these out of the box, you'll spend months (and millions of shillings) on custom integrations." }
        ]
      },
      {
        _type: "callToAction",
        title: "Skip the Guesswork",
        text: "See how ERP Kenya handles M-Pesa, eTIMS, and payroll compliance natively — no plugins required.",
        buttonText: "Book a Free Comparison Demo",
        url: "/contact"
      },
      {
        _type: "block",
        style: "h3",
        children: [{ _type: "span", text: "How to Choose: Our Recommendation" }]
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "If you're a Kenyan SME or mid-market company, prioritize local compliance and support over brand name. A system that works on day one — with M-Pesa, eTIMS, and NHIF built in — will save you more than a global brand that needs 6 months of customization." }
        ]
      },
      {
        _type: "block",
        style: "blockquote",
        children: [{ _type: "span", text: "\"We evaluated SAP, Sage, and ERPNext before choosing ERP Kenya. The difference? We were live in 3 weeks, not 6 months. And our accountant didn't need IT training to use it.\" — Finance Director, Nairobi Manufacturing Firm" }]
      }
    ]
  },
  {
    _id: "post-4",
    _type: "blogPost",
    title: "How to Successfully Implement an ERP System in Kenya: A 5-Step Checklist",
    slug: { current: "erp-implementation-kenya-checklist" },
    mainImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    publishedAt: "2026-03-25T09:00:00Z",
    excerpt: "ERP projects fail when they ignore local realities. This 5-step implementation checklist is designed specifically for Kenyan businesses — covering M-Pesa, KRA eTIMS, and staff training.",
    content: [
      {
        _type: "block",
        children: [
          { _type: "span", text: "Let's be honest: ERP implementation has a reputation for going wrong. Globally, studies show that up to 75% of ERP projects fail to meet expectations. In Kenya, the odds are even tougher — unreliable internet, resistance to change, and the unique demands of local compliance can derail even the best-funded project." }
        ]
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "But it doesn't have to be this way. We've helped hundreds of Kenyan businesses go live successfully. Here's the exact 5-step checklist we use." }
        ]
      },
      {
        _type: "block",
        style: "h3",
        children: [{ _type: "span", text: "Common Pitfalls in the Kenyan Market" }]
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "Before we get to the steps, let's address why ERP projects fail here specifically:" }
        ]
      },
      {
        _type: "block",
        style: "normal",
        listItem: "bullet",
        children: [{ _type: "span", text: "Choosing a global system with no local support — when something breaks on a Friday evening, you need someone in Nairobi, not San Francisco" }]
      },
      {
        _type: "block",
        style: "normal",
        listItem: "bullet",
        children: [{ _type: "span", text: "Underestimating data migration — years of spreadsheets, duplicates, and M-Pesa transaction history need careful cleaning" }]
      },
      {
        _type: "block",
        style: "normal",
        listItem: "bullet",
        children: [{ _type: "span", text: "Skipping staff training — the best ERP in the world fails if your warehouse team can't use it" }]
      },
      {
        _type: "block",
        style: "normal",
        listItem: "bullet",
        children: [{ _type: "span", text: "Ignoring compliance from day one — retrofitting KRA eTIMS or NHIF deductions after go-live is a nightmare" }]
      },
      {
        _type: "block",
        style: "h3",
        children: [{ _type: "span", text: "Step 1: Requirement Gathering — Know Your Pain Points" }]
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "Before you look at any software, sit down with every department head. Finance, HR, warehouse, sales, and manufacturing (if applicable) each have different needs. Document your current pain points, not your wish list. Focus on what's costing you money today: manual reconciliation, compliance penalties, stock losses, or payroll errors." }
        ]
      },
      {
        _type: "block",
        style: "blockquote",
        children: [{ _type: "span", text: "\"Tip: Create a simple spreadsheet with columns for Department, Current Process, Pain Point, and Desired Outcome. This becomes your ERP requirements document.\"" }]
      },
      {
        _type: "block",
        style: "h3",
        children: [{ _type: "span", text: "Step 2: Cloud vs. On-Premise — The Kenya Decision" }]
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "In 2026, cloud is the clear winner for most Kenyan businesses. Here's why:" }
        ]
      },
      {
        _type: "block",
        style: "normal",
        listItem: "bullet",
        children: [{ _type: "span", text: "No server room costs — KPLC power bills and backup generators are expensive enough" }]
      },
      {
        _type: "block",
        style: "normal",
        listItem: "bullet",
        children: [{ _type: "span", text: "Access from anywhere — your sales team in Kisumu can check stock in the Nairobi warehouse in real-time" }]
      },
      {
        _type: "block",
        style: "normal",
        listItem: "bullet",
        children: [{ _type: "span", text: "Automatic updates — compliance changes (like eTIMS updates) are pushed to you, not DIY" }]
      },
      {
        _type: "block",
        style: "normal",
        listItem: "bullet",
        children: [{ _type: "span", text: "Disaster recovery — your data survives even if your office doesn't" }]
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "The exception: highly regulated industries (like banking) may need on-premise or hybrid setups for data residency requirements." }
        ]
      },
      {
        _type: "block",
        style: "h3",
        children: [{ _type: "span", text: "Step 3: Data Migration & Local Integrations" }]
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "This is where most projects stall. Your new ERP needs to connect to:" }
        ]
      },
      {
        _type: "block",
        style: "normal",
        listItem: "number",
        children: [{ _type: "span", text: "M-Pesa (Paybill/Till) — for automatic payment matching and reconciliation" }]
      },
      {
        _type: "block",
        style: "normal",
        listItem: "number",
        children: [{ _type: "span", text: "KRA eTIMS — for real-time tax invoice submission" }]
      },
      {
        _type: "block",
        style: "normal",
        listItem: "number",
        children: [{ _type: "span", text: "Your bank feeds — for automated bank reconciliation" }]
      },
      {
        _type: "block",
        style: "normal",
        listItem: "number",
        children: [{ _type: "span", text: "Historical data — clean your customer list, product catalog, and opening balances before importing" }]
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "Plan for at least 2 weeks of data cleaning. Garbage in, garbage out — no ERP can fix dirty data." }
        ]
      },
      {
        _type: "block",
        style: "h3",
        children: [{ _type: "span", text: "Step 4: Staff Training — The Make-or-Break Phase" }]
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "Technology adoption in Kenya faces a unique challenge: the digital skills gap varies widely between departments. Your finance team may be Excel experts, but your warehouse staff might be more comfortable with paper logs." }
        ]
      },
      {
        _type: "block",
        style: "normal",
        listItem: "bullet",
        children: [{ _type: "span", text: "Train in small groups by department, not in one big session" }]
      },
      {
        _type: "block",
        style: "normal",
        listItem: "bullet",
        children: [{ _type: "span", text: "Use real data from your business, not generic examples" }]
      },
      {
        _type: "block",
        style: "normal",
        listItem: "bullet",
        children: [{ _type: "span", text: "Identify 'champions' in each department who can support their peers after go-live" }]
      },
      {
        _type: "block",
        style: "normal",
        listItem: "bullet",
        children: [{ _type: "span", text: "Plan for refresher training 30 days after launch" }]
      },
      {
        _type: "block",
        style: "h3",
        children: [{ _type: "span", text: "Step 5: Go-Live & Continuous Improvement" }]
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "Don't try to launch everything at once. A phased rollout works best: start with Finance and Inventory (the highest-impact modules), then add HR/Payroll, then CRM. Run old and new systems in parallel for 2 weeks to catch issues." }
        ]
      },
      {
        _type: "callToAction",
        title: "Ready to Start Your ERP Journey?",
        text: "Get a personalized implementation plan for your business — with timelines, costs, and a dedicated Nairobi-based project manager.",
        buttonText: "Get Your Free Implementation Plan",
        url: "/contact"
      },
      {
        _type: "block",
        style: "h3",
        children: [{ _type: "span", text: "The Bottom Line" }]
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "ERP implementation in Kenya doesn't have to be a horror story. With the right checklist — local compliance first, clean data, phased training, and a support partner who's actually in your time zone — you can be live and seeing ROI within weeks, not months." }
        ]
      }
    ]
  },
  {
    _id: "post-5",
    _type: "blogPost",
    title: "The Rise of AI Companies in Kenya: How ERP Automation is Changing the Game",
    slug: { current: "ai-companies-kenya-erp-automation" },
    mainImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    publishedAt: "2026-04-01T09:00:00Z",
    excerpt: "AI isn't just for Silicon Valley anymore. Discover how Kenyan businesses are using AI-powered ERP automation for inventory forecasting, payment reconciliation, and smarter decision-making.",
    content: [
      {
        _type: "block",
        children: [
          { _type: "span", text: "When people hear 'AI companies in Kenya,' they think of flashy startups in iHub or Silicon Savannah demos. But the real AI revolution in Kenya is quieter — and far more profitable. It's happening inside the ERP systems that run everyday businesses." }
        ]
      },
      {
        _type: "block",
        style: "h3",
        children: [{ _type: "span", text: "The AI Landscape in Nairobi and Beyond" }]
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "Kenya has emerged as East Africa's technology hub. With over 200 tech startups, a growing pool of data scientists graduating from local universities, and government initiatives like the Digital Economy Blueprint, the foundation for AI adoption is strong. Nairobi's tech ecosystem now rivals Lagos and Cape Town for AI investment." }
        ]
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "But here's what matters for business owners: AI is no longer a 'future technology.' It's being embedded into the tools you already use — including your ERP system." }
        ]
      },
      {
        _type: "block",
        style: "h3",
        children: [{ _type: "span", text: "How AI is Transforming Daily ERP Tasks" }]
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "Forget robots and sci-fi. In a business context, AI means software that learns from your data and makes predictions or automates decisions. Here's how it works in practice:" }
        ]
      },
      {
        _type: "block",
        style: "h4",
        children: [{ _type: "span", text: "Intelligent Inventory Forecasting" }]
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "Traditional reorder points are static — you set a number and hope it holds. AI-powered inventory looks at your sales velocity, seasonal patterns (like increased demand during holidays or back-to-school), supplier lead times, and even external factors like weather. The result: you order the right amount at the right time, every time." }
        ]
      },
      {
        _type: "block",
        style: "h4",
        children: [{ _type: "span", text: "Automated M-Pesa Reconciliation" }]
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "Matching hundreds of M-Pesa transactions to invoices used to take hours. AI-powered matching learns your payment patterns — recognizing repeat customers, handling partial payments, and flagging anomalies that might indicate fraud. What took a team of two now happens in seconds." }
        ]
      },
      {
        _type: "block",
        style: "h4",
        children: [{ _type: "span", text: "Predictive Cash Flow" }]
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "Instead of looking at last month's bank statement, AI analyzes your receivables, payables, seasonal trends, and historical payment behavior to predict your cash position 30, 60, or 90 days out. This means you can plan expansions, negotiate better supplier terms, and avoid cash crunches before they happen." }
        ]
      },
      {
        _type: "block",
        style: "h4",
        children: [{ _type: "span", text: "Smart Document Processing" }]
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "Supplier invoices, delivery notes, and purchase orders come in all formats — PDFs, WhatsApp photos, even handwritten notes. AI-powered document processing extracts the data, matches it to purchase orders, and creates the journal entries automatically." }
        ]
      },
      {
        _type: "block",
        style: "h3",
        children: [{ _type: "span", text: "Real-World Example: Asset Financing Automation" }]
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "Consider a Kenyan asset financing company processing hundreds of loan applications monthly. Previously, each application required manual credit scoring, document verification, and risk assessment — taking 3-5 days per application. With AI-powered ERP automation, the system now pre-scores applications using historical repayment data, flags high-risk applicants, and auto-generates financing schedules. Processing time dropped from days to hours." }
        ]
      },
      {
        _type: "block",
        style: "blockquote",
        children: [{ _type: "span", text: "\"We went from processing 50 applications a week to 200 — with the same team size. The AI handles the routine scoring and we focus on the complex cases.\" — Operations Manager, Nairobi Finance Company" }]
      },
      {
        _type: "block",
        style: "h3",
        children: [{ _type: "span", text: "The Future: What's Coming Next" }]
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "The next wave of AI in Kenyan business software includes:" }
        ]
      },
      {
        _type: "block",
        style: "normal",
        listItem: "bullet",
        children: [{ _type: "span", text: "Natural language queries — ask your ERP 'What were my top 5 selling products in Mombasa last quarter?' in plain English" }]
      },
      {
        _type: "block",
        style: "normal",
        listItem: "bullet",
        children: [{ _type: "span", text: "Automated compliance updates — AI monitors KRA regulatory changes and adjusts your tax calculations automatically" }]
      },
      {
        _type: "block",
        style: "normal",
        listItem: "bullet",
        children: [{ _type: "span", text: "Predictive maintenance for manufacturing — sensors + AI predict equipment failures before they happen" }]
      },
      {
        _type: "block",
        style: "normal",
        listItem: "bullet",
        children: [{ _type: "span", text: "Customer churn prediction — identify at-risk customers and trigger retention campaigns automatically" }]
      },
      {
        _type: "callToAction",
        title: "Experience AI-Powered ERP",
        text: "See how ERP Kenya uses intelligent automation to save Kenyan businesses 20+ hours per week on manual tasks.",
        buttonText: "Book a Demo",
        url: "/contact"
      },
      {
        _type: "block",
        style: "h3",
        children: [{ _type: "span", text: "You Don't Need to Be a Tech Company" }]
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "That's the key takeaway. AI in business isn't about hiring data scientists or building machine learning models. It's about choosing tools — like a modern ERP — that have intelligence built in. The manufacturer in Industrial Area, the distributor in Thika, the retailer in Westlands — they're all benefiting from AI without writing a single line of code." }
        ]
      }
    ]
  },
  {
    _id: "post-erp-cost-kenya",
    _type: "blogPost",
    title: "ERP Software Cost in Kenya: Pricing Guide & Implementation Factors",
    slug: { current: "erp-software-cost-kenya-pricing-guide" },
    mainImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200",
    publishedAt: "2026-07-20T09:00:00Z",
    updatedAt: "2026-07-20T09:00:00Z",
    readTime: "8 min read",
    excerpt: "There's no single sticker price for ERP software in Kenya. Here's exactly what drives the cost — users, modules, migration, and support — and how to get a real quote.",
    content: [
      portableBlock("\"How much does ERP software cost in Kenya?\" is one of the most common questions we get, and the honest answer is: it depends. A 5-person retail shop and a 200-employee manufacturer are buying fundamentally different amounts of software, so a single published price would be misleading for one of them either way. What follows is what actually moves the number, so you can budget realistically before you ever request a quote."),
      portableBlock("What Determines ERP Software Pricing in Kenya", "h3"),
      portableBlock("Every vendor quote, ours included, is built from the same handful of variables:"),
      portableListItem("Number of users — how many people need logins across finance, HR, warehouse, and self-service."),
      portableListItem("Modules selected — Finance, HR & Payroll, Inventory, Manufacturing, CRM, and Analytics can be licensed together or added incrementally."),
      portableListItem("Data migration complexity — years of spreadsheets or a legacy system take longer to migrate cleanly than a fresh start."),
      portableListItem("Customization and integrations — M-Pesa paybills, KRA eTIMS, bank feeds, and industry-specific workflows all add implementation scope."),
      portableListItem("Training and change management — moving a team off spreadsheets properly takes structured onboarding, not a login email."),
      portableListItem("Hosting and support tier — cloud subscriptions and on-premise deployments carry very different cost shapes."),
      portableBlock("Cloud vs. On-Premise ERP Cost in Kenya", "h3"),
      portableBlock("Cloud ERP has a lower upfront cost and predictable recurring billing — the vendor handles hosting, backups, and uptime, which suits businesses that don't want to run their own server infrastructure. On-premise ERP asks for a bigger upfront investment in servers and IT capacity, but keeps data fully in-house, which larger organizations with specific compliance requirements sometimes need. Neither is universally cheaper; the total cost of ownership depends on how long you run the system and how much IT capacity you already have."),
      portableBlock("Is There Really \"Free\" HR or Payroll Software in Kenya?", "h3"),
      portableBlock("Open-source ERP cores exist and can look free on paper, but hosting, statutory compliance configuration (PAYE, NSSF, SHIF, Housing Levy), data migration, integrations, and ongoing support still take real time and money — someone pays for that, whether it's a developer's hours or a vendor's implementation fee. \"Free\" software usually means you're trading a subscription fee for internal engineering time, which is a valid trade-off for some businesses and a bad one for others."),
      portableBlock("Typical Pricing Models You'll See", "h3"),
      portableListItem("Per-user, per-month subscriptions — the most common cloud ERP model, scales directly with headcount."),
      portableListItem("Tiered packages — bundles of modules and user counts (e.g. Starter, Growth, Enterprise) sold at fixed price points."),
      portableListItem("Flat project-based fees — common for on-premise deployments, priced around scope rather than seats."),
      portableListItem("Add-on modules — Manufacturing, Analytics, or industry-specific workflows priced separately from the core system."),
      {
        _type: "callToAction",
        title: "See What Actually Drives Your Quote",
        text: "Walk through the real cost factors for your business and request a custom quote — no invented numbers, no guesswork.",
        buttonText: "View Pricing Factors",
        url: "/pricing"
      },
      portableBlock("How to Get an Accurate Quote for Your Business", "h3"),
      portableBlock("Come to a vendor conversation with these five answers ready, and you'll get a far more accurate quote, faster:", "normal"),
      portableListItem("How many users need access, and in which departments?", "number"),
      portableListItem("Which modules do you actually need on day one versus later?", "number"),
      portableListItem("What existing systems or spreadsheets need to be migrated?", "number"),
      portableListItem("Which statutory or industry compliance requirements apply to you?", "number"),
      portableListItem("What's your target go-live date?", "number"),
      {
        _type: "block",
        markDefs: [
          { _key: "hr-payroll", _type: "link", href: "/solutions/hr-payroll" },
          { _key: "checklist", _type: "link", href: "/resources/erp-implementation-kenya-checklist" },
          { _key: "comparison", _type: "link", href: "/resources/top-erp-software-kenya-2026-comparison" }
        ],
        children: [
          { _type: "span", text: "If payroll compliance is part of your evaluation, see how " },
          { _type: "span", text: "ERP Kenya's HR & Payroll module", marks: ["hr-payroll"] },
          { _type: "span", text: " handles PAYE, NSSF, SHIF, and Housing Levy automatically. Planning a full rollout? Use our " },
          { _type: "span", text: "ERP implementation checklist", marks: ["checklist"] },
          { _type: "span", text: ", or read our " },
          { _type: "span", text: "2026 ERP software comparison", marks: ["comparison"] },
          { _type: "span", text: " if you're still weighing platforms." }
        ]
      }
    ]
  },
  {
    _id: "post-nssf-shif-housing-levy-automation",
    _type: "blogPost",
    title: "How to Automate NSSF, SHIF & Housing Levy Deductions in Kenya",
    slug: { current: "automate-nssf-shif-housing-levy-deductions-kenya" },
    mainImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200",
    publishedAt: "2026-07-22T09:00:00Z",
    updatedAt: "2026-07-22T09:00:00Z",
    readTime: "9 min read",
    excerpt: "NSSF, SHIF, and the Affordable Housing Levy all changed in the last two years — and a 2024 tax law amendment changed the order they're calculated in. Here's what compliant payroll actually requires, and how to stop doing it by hand.",
    faq: [
      {
        q: "Is SHIF calculated before or after PAYE tax?",
        a: "Before. Since the Tax Laws (Amendment) Act 2024, SHIF and the Affordable Housing Levy are both deducted from gross pay before PAYE is calculated, not after. Payroll processes that still compute PAYE on gross pay minus NSSF only will overstate tax and short-change employees."
      },
      {
        q: "What is the NSSF Tier II earnings limit in 2026?",
        a: "Kenya's NSSF Act phases in higher contribution limits over several years. As of Phase 4 (February 2026 to January 2027), the Tier I limit is KES 9,000 and the Tier II upper limit is KES 108,000, with a combined 6% employee contribution and a matching 6% employer contribution."
      },
      {
        q: "Is the Affordable Housing Levy tax deductible?",
        a: "Yes. Since December 27, 2024, both the employee's and employer's Affordable Housing Levy contributions are treated as pre-tax allowable deductions, reducing the taxable pay used to calculate PAYE."
      },
      {
        q: "Does my business need to remit the NITA levy separately?",
        a: "Yes. The National Industrial Training Authority levy is a flat, employer-paid amount per employee per month. It's never deducted from employee wages and is remitted alongside your other statutory filings."
      }
    ],
    content: [
      portableBlock("Kenyan payroll compliance hasn't stood still. NSSF contribution limits are rising on a multi-year schedule, NHIF was replaced by SHIF in 2024, the Affordable Housing Levy became a permanent fixture, and a 2024 tax law amendment quietly changed the order in which all of it gets calculated. If your payroll process still runs on a spreadsheet formula from a year or two ago, there's a good chance it's now wrong — not because anyone made an error, but because the rules moved underneath it."),
      portableBlock("The Three Statutory Deductions Employers Must Get Right", "h3"),
      portableBlock("Every Kenyan payslip has to account for National Social Security Fund (NSSF) pension contributions, Social Health Insurance Fund (SHIF) healthcare contributions, and the Affordable Housing Levy (AHL) — on top of PAYE income tax. Each is governed by its own legislation, administered by a different authority, and has its own rate, floor, or cap. Getting the order of operations wrong on any one of them cascades into every number below it on the payslip."),
      portableBlock("NSSF Tier I & Tier II in 2026 (Phase 4)", "h3"),
      portableBlock("The NSSF Act No. 45 of 2013 replaced Kenya's old flat KES 200 pension contribution with a tiered, earnings-related model, phased in gradually so employers and employees could adjust. As of Phase 4, covering February 2026 to January 2027:"),
      portableListItem("Tier I applies to the first KES 9,000 of pensionable earnings, at 6% employee / 6% employer."),
      portableListItem("Tier II applies to earnings between KES 9,000 and KES 108,000, also at 6% employee / 6% employer."),
      portableListItem("Combined, an employee earning KES 108,000 or more contributes up to KES 6,480 a month, matched by the employer."),
      portableListItem("Employers can \"contract out\" Tier II into an approved private retirement scheme; Tier I must always go directly to NSSF."),
      portableBlock("These limits rise again in Phase 5 (from February 2027), tied to gazetted minimum wage figures rather than a fixed number — a payroll system that hardcodes NSSF limits needs a manual update when that happens."),
      portableBlock("SHIF Replaced NHIF — What Changed", "h3"),
      portableBlock("The Social Health Insurance Fund (SHIF) replaced NHIF on October 1, 2024, under the Social Health Insurance Act of 2023. Instead of NHIF's old stepped bracket scale (capped at KES 1,700 for higher earners), SHIF charges a flat 2.75% of gross monthly pay with no upper cap, subject to a statutory minimum of KES 300 a month — meaning even very low earners still pay at least KES 300."),
      portableBlock("Affordable Housing Levy (AHL)", "h3"),
      portableBlock("The Affordable Housing Levy charges 1.5% of gross monthly pay from the employee, matched by another 1.5% from the employer — 3% combined, with no cap. It funds public housing infrastructure and, since December 27, 2024, both the employee and employer portions are treated as pre-tax allowable deductions rather than a post-tax charge."),
      portableBlock("The 2024 Tax Law Change That Catches Payroll Teams Out", "h3"),
      portableBlock("The Tax Laws (Amendment) Act 2024, effective December 27, 2024, amended Section 15(2) of the Income Tax Act and reclassified both SHIF and AHL as pre-tax deductions — the same treatment NSSF already had. Under the old regime, health contributions were a post-tax insurance relief instead. The practical effect: NSSF, SHIF, and AHL are all now subtracted from gross pay before PAYE is calculated on what's left, which lowers the taxable base and, for most employees, lowers PAYE too. A payroll process still computing PAYE on gross pay minus NSSF alone will systematically overstate tax owed."),
      {
        _type: "callToAction",
        title: "Try the Interactive Payroll Calculator",
        text: "See a full gross-to-net breakdown — PAYE, NSSF, SHIF, Housing Levy, and employer Cost to Company — computed against current 2026 rates.",
        buttonText: "Open the Payroll Calculator",
        url: "/solutions/hr-payroll"
      },
      portableBlock("How to Automate This Without Manual Spreadsheets", "h3"),
      portableBlock("The fix isn't a smarter spreadsheet — it's separating the rules from the calculation. A payroll engine built around a parametric rules configuration (tax bands, statutory caps, and contribution percentages stored as versioned, dated data rather than hardcoded formulas) can apply the correct rules automatically, including historical payroll runs against past regimes when needed. That's the architecture behind ERP Kenya's HR & Payroll module: PAYE bands, NSSF tiers, SHIF, and Housing Levy update centrally, so every payslip reflects current law without anyone editing a formula by hand."),
      {
        _type: "block",
        markDefs: [
          { _key: "hr-payroll", _type: "link", href: "/solutions/hr-payroll" },
          { _key: "pricing", _type: "link", href: "/pricing" }
        ],
        children: [
          { _type: "span", text: "Explore the full " },
          { _type: "span", text: "HR & Payroll solution", marks: ["hr-payroll"] },
          { _type: "span", text: " for employee self-service, P9 generation, and statutory reporting, or see " },
          { _type: "span", text: "what drives implementation cost", marks: ["pricing"] },
          { _type: "span", text: " if you're ready to move off manual payroll." }
        ]
      }
    ]
  }
];

export const mockSuccessStories = [
  {
    _id: "story-1",
    company: "Westlands Supermarket",
    industry: "Retail",
    metric: "Reduced Shrinkage by 40%",
    quote: "The inventory tracking helps us see exactly what's on the shelf versus what was sold. We stopped theft immediately.",
    author: "Jane Kimani, Store Manager",
    image: "https://images.unsplash.com/photo-1604719312566-8912e9227f6a?auto=format&fit=crop&q=80&w=800"
  },
  {
    _id: "story-2",
    company: "Nairobi Metal Works Ltd",
    industry: "Manufacturing",
    metric: "20 Hours Saved Weekly",
    quote: "We used to spend Monday to Wednesday just reconciling bank and M-Pesa statements. Now, the system does it instantly.",
    author: "David Ochieng, CEO",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
  }
];

export const mockResources = [
  {
      _id: "res-1",
      title: "5 Automation Strategies for Kenyan SMEs",
      type: "Guide (PDF)",
      downloadLink: "#"
  },
  {
      _id: "res-2",
      title: "KRA Compliance Checklist 2026",
      type: "Checklist",
      downloadLink: "#"
  }
];

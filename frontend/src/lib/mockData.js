// src/lib/mockData.js

export const mockBlogPosts = [
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

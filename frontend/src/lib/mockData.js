// src/lib/mockData.js

export const mockBlogPosts = [
  {
    _id: "post-1",
    _type: "blogPost",
    title: "How AI-ERP Automates M-Pesa for Kenyan Businesses",
    slug: { current: "ai-erp-mpesa-automation" },
    mainImage: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800",
    publishedAt: "2026-02-15T09:00:00Z",
    excerpt: "Stop wasting hours reconciling payments manually. Discover how AI matches M-Pesa transactions to invoices instantly.",
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
          { _type: "span", text: "For many Kenyan distributors, the 'end of day' means creating manual receipts for hundreds of small mobile money payments. One wrong digit, and your books are off. This chaos slows down deliveries and frustrates customers." }
        ]
      },
      {
        _type: "block",
        style: "h3",
        children: [{ _type: "span", text: "The Solution: Intelligent Process Automation" }]
      },
      {
        _type: "block",
        children: [
          { _type: "span", text: "ERP Kenya's AI module doesn't just record payments; it understands them. It scans the incoming M-Pesa SMS or API data, identifies the customer by phone number or account number, matches it to the open invoice, and closes it. Automatically." }
        ]
      },
      {
        _type: "block",
        style: "h3",
        children: [{ _type: "span", text: "Your 3-Step Plan to Freedom" }]
      },
      {
        _type: "block",
        children: [
            { _type: "span", text: "1. Connect your Paybill number to ERP Kenya.\n2. Set your matching rules (e.g., exact amount matches).\n3. Watch your cash flow update in real-time."}
        ]
      }
    ]
  },
  {
    _id: "post-2",
    _type: "blogPost",
    title: "Predictive Analytics: Surviving Supply Chain Issues in East Africa",
    slug: { current: "predictive-analytics-supply-chain" },
    mainImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    publishedAt: "2026-02-10T09:00:00Z",
    excerpt: "Don't let delays at Mombasa port catch you off guard. Learn how AI forecasts disruptions before they impact your bottom line.",
    content: [
      {
        _type: "block",
        children: [
          { _type: "span", text: "Supply chain surprises are the enemy of growth. Whether it's a delay at the port or a sudden fuel price hike, reacting late costs you money." }
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
          { _type: "span", text: "Traditional ERPs look at what happened yesterday. AI-Powered ERP looks at what will happen tomorrow. By analyzing historical trends and external data, our system warns you of potential stockouts weeks in advance." }
        ]
      }
    ]
  }
];

export const mockSuccessStories = [
  {
    _id: "story-1",
    company: "Rift Valley Tea Exporters",
    industry: "Agriculture",
    metric: "Reduced Waste by 35%",
    quote: "The AI forecasting tool predicted a surplus in Q3, allowing us to adjust our harvest schedule. We saved millions in potential spoilage.",
    author: "Sarah Kamau, Operations Director",
    image: "https://images.unsplash.com/photo-1595838788869-591d8ce4a7e9?auto=format&fit=crop&q=80&w=800"
  },
  {
    _id: "story-2",
    company: "Nairobi Metal Works Ltd",
    industry: "Manufacturing",
    metric: "20 Hours Saved Weekly",
    quote: "We used to spend Monday to Wednesday just reconciling bank and M-Pesa statements. Now, the AI does it instantly.",
    author: "David Ochieng, CEO",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
  }
];

export const mockResources = [
  {
      _id: "res-1",
      title: "5 AI Automations for Kenyan SMEs",
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

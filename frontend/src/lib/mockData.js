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

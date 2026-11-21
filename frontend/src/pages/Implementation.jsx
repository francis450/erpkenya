import React from 'react';
import { ContentPage } from '@/components/ContentPage';

export default function Implementation() {
  return (
    <ContentPage
      seo={{
        title: "ERP Implementation in Kenya: How We Work",
        description: "How ERP Kenya implements ERPNext: scoping, set-up, data migration, testing, training and go-live, with what you do and what we do at each step.",
        canonical: "/implementation",
        breadcrumbs: [
          { name: "Home", url: "/" },
          { name: "Implementation" },
        ],
      }}
      hero={{
        badge: "Implementation",
        title: "A Clear Plan From Quote to Go-Live.",
        text: "Every implementation follows the same steps, with a dated plan agreed upfront. Here's what happens at each stage, and who is responsible for what.",
      }}
      sections={[
        {
          type: "steps",
          title: "The Steps",
          intro: "You get a dated version of this plan with your quote.",
          items: [
            { title: "Scoping and quote", you: "Share how you trade: users, companies, currencies, stock, payroll and any approvals.", we: "Send an itemised quote and plan, with every assumption written down for you to confirm." },
            { title: "Design", you: "Confirm the chart of accounts, item structure, approval rules and reports you need.", we: "Map your processes onto ERPNext and agree the set-up with you in writing." },
            { title: "Configuration", you: "Answer questions as they come up.", we: "Set up the modules, tax templates, workflows, print formats and dashboards." },
            { title: "Data migration", you: "Provide exports from your current system and do a stock count.", we: "Clean, import and reconcile opening balances, customers, suppliers and items." },
            { title: "Testing", you: "Run your real transactions in a test copy and sign off.", we: "Fix anything that doesn't match how you work." },
            { title: "Training", you: "Make each team available for its sessions.", we: "Train each team on its own daily tasks, with short written guides." },
            { title: "Parallel run", you: "Run the last period on both systems, typically payroll.", we: "Compare the results and resolve any differences." },
            { title: "Go-live and support", you: "Start trading in ERPNext.", we: "Stay close through the first month-end close, then move you onto your support plan." },
          ],
        },
        {
          type: "text",
          title: "Why We Recommend a Year-End Go-Live",
          paragraphs: [
            "Going live at the start of your financial year keeps things clean. Payroll starts with the PAYE year, so P9s are not split across two systems. Opening stock comes from the year-end count, and opening balances start at the year boundary.",
            "If your year end is too far away, finance can go live first, with stock and payroll following at the year end. We set out both options in your plan.",
          ],
        },
        {
          type: "table",
          title: "What Keeps a Project on Track",
          rows: [
            { label: "One decision-maker", text: "A named person on your side who can confirm set-up choices quickly." },
            { label: "Written assumptions", text: "Users, items, locations and companies agreed in writing, so the quote and the plan stay fixed." },
            { label: "Clean data early", text: "Customer PINs, item details and opening balances checked before migration, not during testing." },
            { label: "Training before the holidays", text: "If go-live is in January, training is finished before mid-December, when staff availability drops." },
          ],
        },
      ]}
      faqs={[
        { q: "How long does implementation take?", a: "It depends on the modules, locations and companies in scope. You get a dated plan with your quote, and we agree the go-live date with you before work starts." },
        { q: "Do we need custom development?", a: "Usually not. Most Kenyan businesses run on ERPNext's standard features, set up for how they work. If something needs custom work, it is scoped and priced separately so you can decide." },
        { q: "What happens after go-live?", a: "We support you through the first month-end close, then you move onto a monthly support plan with a named contact." },
        { q: "Can we implement in phases?", a: "Yes. Many clients start with finance and add stock, point of sale and payroll later. Each phase gets its own plan and quote." },
      ]}
      related={[
        { label: "Moving from QuickBooks", to: "/quickbooks-to-erpnext" },
        { label: "Deployment & data", to: "/deployment" },
        { label: "ERP implementation checklist", to: "/resources/erp-implementation-kenya-checklist" },
        { label: "What drives ERP cost", to: "/pricing" },
      ]}
      cta={{
        title: "Get a Dated Plan for Your Business",
        text: "Tell us your scope and target go-live, and we'll send an itemised quote with a step-by-step plan.",
      }}
    />
  );
}

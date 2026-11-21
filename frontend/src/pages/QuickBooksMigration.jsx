import React from 'react';
import { Database, Users, Boxes, Coins } from 'lucide-react';
import { ContentPage } from '@/components/ContentPage';

export default function QuickBooksMigration() {
  return (
    <ContentPage
      seo={{
        title: "QuickBooks to ERPNext Migration in Kenya",
        description: "Outgrown QuickBooks? How Kenyan businesses move to ERPNext: what gets migrated, why year end is the best cut-over, and what the process looks like.",
        canonical: "/quickbooks-to-erpnext",
        breadcrumbs: [
          { name: "Home", url: "/" },
          { name: "QuickBooks to ERPNext" },
        ],
      }}
      hero={{
        badge: "QuickBooks to ERPNext",
        title: "Outgrown QuickBooks? Move to One System.",
        text: "QuickBooks is a good place to start. When stock, payroll, two currencies and related companies all live outside it, it's time for a system that holds them together. Here's how the move works.",
      }}
      sections={[
        {
          type: "list",
          title: "Signs You've Outgrown QuickBooks",
          intro: "If two or more of these sound familiar, your accounting software has become the bottleneck.",
          items: [
            "You bill in KES and USD, and month-end is spent fixing exchange rates.",
            "Stock and serial numbers are tracked in Excel, not in your books.",
            "Payroll, leave and statutory deductions are done in a separate tool or spreadsheet.",
            "Related companies invoice each other, and the balances never quite agree.",
            "You need more people in the system than your current plan allows.",
          ],
        },
        {
          type: "cards",
          title: "What We Bring Across",
          intro: "We migrate what you need to carry on reporting without a gap, and leave behind what only clutters the new system.",
          items: [
            { icon: Database, title: "Opening Balances", text: "Your balance sheet at the cut-over date: bank, receivables, payables, stock and fixed assets." },
            { icon: Coins, title: "Current-Year Balances", text: "Monthly account balances for the year so far, so comparisons and year-end reports still work." },
            { icon: Users, title: "Customers & Suppliers", text: "Names, contacts, KRA PINs, credit terms and currencies, cleaned up as they come across." },
            { icon: Boxes, title: "Items & Stock", text: "Item lists with units, tax categories and serial or batch details, with opening stock from a physical count." },
          ],
          note: "Full transaction history usually stays in QuickBooks for reference. If you need it in ERPNext, we scope and quote it separately.",
        },
        {
          type: "text",
          title: "Why Switch at Year End",
          paragraphs: [
            "A cut-over at the start of your financial year is the cleanest way to move. Payroll starts at the beginning of the PAYE year, so employees' P9 figures are not split across two systems.",
            "Opening stock comes from the year-end stock count, and opening balances start at the year boundary, which makes reconciliation far simpler. December payroll can even be run on both systems as a final check.",
            "If you need to start sooner, finance can go live first, with stock and payroll following at the year end.",
          ],
        },
        {
          type: "steps",
          title: "How the Move Works",
          items: [
            { title: "Scoping call", you: "Walk us through how you trade today.", we: "Send an itemised quote with every assumption written down." },
            { title: "Set-up", you: "Confirm the chart of accounts, items and approval rules.", we: "Configure ERPNext around your business." },
            { title: "Migration", you: "Export reports from QuickBooks and do the stock count.", we: "Clean, import and reconcile the data against QuickBooks." },
            { title: "Testing & training", you: "Run real transactions in a test copy.", we: "Train each team on its own daily tasks." },
            { title: "Go-live", you: "Start trading in ERPNext.", we: "Support you through the first month-end close." },
          ],
        },
      ]}
      faqs={[
        { q: "Will we lose our QuickBooks history?", a: "No. Your QuickBooks file stays available for reference. We bring across opening balances and current-year monthly balances so reporting continues, and full transaction history can be migrated if you need it." },
        { q: "Can we keep using QuickBooks until go-live?", a: "Yes. You keep trading in QuickBooks until the cut-over date. Payroll can be run on both systems for the last month as a check." },
        { q: "Is ERPNext harder to use than QuickBooks?", a: "It does more, so there is more to learn, but each person only sees the parts of the system their role needs. Training is done per team, on the tasks they actually do." },
        { q: "What does the move cost?", a: "There are no licence fees. You pay a one-time implementation fee that includes migration and training, then monthly hosting and support. We send an itemised quote after a short scoping call." },
      ]}
      related={[
        { label: "Financial Management", to: "/solutions/finance" },
        { label: "How we implement", to: "/implementation" },
        { label: "Year-end tax checklist", to: "/resources/year-end-tax-checklist-kenya-2026" },
      ]}
      cta={{
        title: "Plan Your Move From QuickBooks",
        text: "We'll scope the migration, suggest a cut-over date and send an itemised quote.",
      }}
    />
  );
}

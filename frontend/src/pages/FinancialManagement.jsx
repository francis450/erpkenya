import React from 'react';
import { BookOpen, Coins, Building2, Landmark, PackageCheck, ReceiptText, Scale, FileBarChart, LayoutDashboard } from 'lucide-react';
import { ContentPage } from '@/components/ContentPage';

export default function FinancialManagement() {
  return (
    <ContentPage
      seo={{
        title: "Financial Management ERP Kenya: ERPNext Accounting",
        description: "ERPNext accounting for Kenyan businesses: KES and USD, inter-company invoicing, fixed assets, three-way matching, bank and M-Pesa reconciliation, and reports.",
        canonical: "/solutions/finance",
        breadcrumbs: [
          { name: "Home", url: "/" },
          { name: "Solutions", url: "/solutions" },
          { name: "Financial Management" },
        ],
      }}
      hero={{
        badge: "Financial Management",
        title: "Accounting That Keeps Up With How You Trade.",
        text: "General ledger, payables, receivables, KES and USD, related companies and fixed assets in one set of books. Built on ERPNext, set up for Kenyan businesses, with no licence fees.",
      }}
      sections={[
        {
          type: "cards",
          title: "Everything Finance Runs On",
          intro: "The core of your books, set up around your chart of accounts and the way your business already works.",
          items: [
            { icon: BookOpen, title: "General Ledger", text: "Your chart of accounts, journals, cost centres and period closing, with every posting traceable to the document that created it." },
            { icon: ReceiptText, title: "Payables & Receivables", text: "Supplier and customer invoices, payments, credit notes, ageing and statements, linked to the sale or purchase behind them." },
            { icon: Coins, title: "Multi-Currency", text: "Invoice and pay in USD while reporting in KES. Exchange gains and losses are calculated and posted, not worked out in a spreadsheet." },
            { icon: Building2, title: "Inter-Company", text: "Invoices between related companies, and money collected on behalf of a sister company, recorded so both sides of the balance agree." },
            { icon: Landmark, title: "Bank & M-Pesa Reconciliation", text: "Import bank statements and match them to payments. M-Pesa payments are matched to invoices by account number." },
            { icon: Scale, title: "Fixed Asset Register", text: "Assets recorded with location and custodian, depreciation schedules posted automatically, and disposals tracked." },
            { icon: PackageCheck, title: "Three-Way Matching", text: "Purchase order, goods received and supplier invoice compared before you pay, so you only pay for what arrived." },
            { icon: FileBarChart, title: "Kenyan Tax Setup", text: "VAT templates, withholding tax and eTIMS-ready invoicing, with KRA PINs on customer and supplier records." },
            { icon: LayoutDashboard, title: "Reports & Dashboards", text: "Profit and loss, balance sheet, cash flow and management dashboards for directors, without the day-to-day detail." },
          ],
        },
        {
          type: "list",
          title: "What Changes After You Move",
          items: [
            "Month-end is a review of numbers the system already holds, not a week of rebuilding them.",
            "USD purchases and KES sales sit in one set of books, with exchange differences calculated for you.",
            "Stock, payroll and sales post to the ledger as they happen, so the accounts are never a month behind.",
            "Every figure on a report can be drilled down to the invoice, payment or journal behind it.",
          ],
        },
        {
          type: "text",
          title: "Finance First, Then the Rest",
          paragraphs: [
            "Most of our clients start with finance. It is where the pain is sharpest and where clean opening balances matter most. Inventory, point of sale and payroll can follow in later phases, or go live at the same time if you prefer one cut-over.",
            "Because everything runs on ERPNext, adding a module later does not mean a second system or a second migration. The stock, payroll and sales you add simply start posting into the same ledger.",
          ],
        },
      ]}
      faqs={[
        { q: "Can ERPNext handle KES and USD in the same company?", a: "Yes. Each customer, supplier and bank account can have its own currency, while the company reports in KES. Exchange rates are recorded on each transaction, and unrealised gains and losses can be revalued at period end." },
        { q: "We have a related company abroad on a different system. Is that a problem?", a: "No. Invoices between the companies and money collected on the other company's behalf are recorded in ERPNext as inter-company transactions, so your side of the balance is always clear. An automatic link to the other system can be added later if needed." },
        { q: "Do we need to buy licences for our finance team?", a: "No. ERPNext is open source and has no licence fees for any number of users. You pay for implementation, and then monthly hosting and support." },
        { q: "Can we keep our current chart of accounts?", a: "Usually, yes. We map your existing accounts during setup and only suggest changes where they make reporting or tax easier." },
      ]}
      related={[
        { label: "Moving from QuickBooks", to: "/quickbooks-to-erpnext" },
        { label: "How we implement", to: "/implementation" },
        { label: "M-Pesa reconciliation", to: "/resources/automated-mpesa-reconciliation" },
        { label: "What drives ERP cost", to: "/pricing" },
      ]}
      cta={{
        title: "See Your Own Accounts in ERPNext",
        text: "Tell us how your business trades, and we'll send an itemised quote with every assumption written down.",
      }}
    />
  );
}

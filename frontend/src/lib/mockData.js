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
    _id: "post-erp-vendor-questions-kenya",
    _type: "blogPost",
    title: "12 Questions to Ask Before Choosing an ERP in Kenya",
    slug: { current: "questions-to-ask-erp-vendor-kenya" },
    mainImage: "https://erpkenya.com/images/erp-vendor-questions.png",
    publishedAt: "2026-11-21T09:00:00Z",
    updatedAt: "2026-11-21T09:00:00Z",
    readTime: "9 min read",
    excerpt: "Sending out an ERP request for quotes? The 12 questions that separate a solid proposal from an expensive surprise, and the answers to listen for.",
    faq: [
      {
        q: "How many ERP vendors should we ask for quotes?",
        a: "Three is usually enough to compare. Send each one the same written summary of your business (users, companies, currencies, stock, payroll and target go-live) so the quotes can be compared line by line."
      },
      {
        q: "Should we ask for a demo before or after the quote?",
        a: "Before you decide, always. A demo set up around your own processes, such as your currencies, your stock and your approvals, tells you far more than a generic product tour."
      },
      {
        q: "What is a reasonable payment structure for an ERP implementation?",
        a: "Payments tied to milestones, such as design sign-off, data migration and go-live, protect both sides. Some vendors also offer a smaller upfront payment with the balance spread over the first year."
      }
    ],
    content: [
      portableBlock("The proposals arrive on the same afternoon. One is two pages long with a single number at the bottom. Another runs to forty pages and somehow never says what happens to your data if you leave. A third looks perfect until you notice the licence fee is per user, per year, and goes up every January."),
      portableBlock("Choosing an ERP is rarely about features. Most systems can post a journal and print an invoice. What matters more is the scope, the assumptions, the people and the small print. These are the twelve questions we would ask if we were in your seat."),

      portableBlock("Cost and Commitment", "h3"),
      portableBlock("1. What will this cost over three years, not just year one?", "h4"),
      portableBlock("Ask for every recurring cost in writing: licences, hosting, support, and any annual increases. Listen for a clear split between one-time costs and monthly or annual ones. Be wary of a low first-year price that hides per-user licences which grow every time you hire."),
      portableBlock("2. Is the price fixed, and what are the assumptions behind it?", "h4"),
      portableBlock("Every quote rests on assumptions: how many users, items, locations and companies; how much data moves across. Good vendors write these down so you can confirm or correct them. Without them, a fixed price is only fixed until the first disagreement."),
      portableBlock("3. What is not included?", "h4"),
      portableBlock("Customisation, integrations, extra training days, travel and third-party fees are the usual exclusions. A vendor who lists them clearly is easier to work with than one who discovers them halfway through the project."),

      portableBlock("Your Data", "h3"),
      portableBlock("4. Who owns our data, and how do we get it out?", "h4"),
      portableBlock("The answer you want is short: it is your data, and you can take a full copy at any time, including if you leave. Ask what format it comes in and whether another provider could run it. With open-source systems such as ERPNext, any capable provider can host your database, which keeps everyone honest."),
      portableBlock("5. What exactly will be migrated?", "h4"),
      portableBlock("Opening balances only? Current-year monthly balances? Full transaction history? Customer and supplier lists with KRA PINs? Each option has a different cost. Agree it upfront and agree who cleans the data, because migrating messy records only moves the mess."),
      portableBlock("6. Where will the system run, and what happens when the internet goes down?", "h4"),
      portableBlock("Cloud, on-premise or hybrid each suit different businesses. Ask how backups work, where copies are kept, and how your team keeps working during an outage. If a vendor offers only one option, ask why it is right for you specifically."),

      {
        _type: "callToAction",
        title: "Ask Us These Questions",
        text: "We'll answer all twelve in writing, with an itemised quote and every assumption listed.",
        buttonText: "Request an Itemised Quote",
        url: "/contact"
      },

      portableBlock("Kenyan Compliance", "h3"),
      portableBlock("7. How is eTIMS handled, and who is responsible for what?", "h4"),
      portableBlock("Connecting a business system to KRA's eTIMS involves an approved integration. Ask who provides it, who supports it when an invoice is rejected, and how its fees are charged. A clear answer names each party's role: your team, the ERP vendor, the integrator and KRA."),
      portableBlock("8. Who updates payroll when the law changes?", "h4"),
      portableBlock("PAYE bands, NSSF limits, SHIF and the Housing Levy have all changed in the last few years, and they will change again. Ask whether updates are included in support, how quickly they are applied, and whether you can see the rules the system is using."),

      portableBlock("The Project", "h3"),
      portableBlock("9. Who will actually do the work?", "h4"),
      portableBlock("Meet the people who will configure your system and train your team, not only the person who sold it. Ask how many other projects they are running at the same time as yours."),
      portableBlock("10. What does the plan look like, and when do we go live?", "h4"),
      portableBlock("A good plan has dates, owners and sign-off points. Ask when they recommend going live and why. For most Kenyan businesses, the start of the financial year is cleanest: payroll begins with the PAYE year and opening stock comes from the year-end count."),
      portableBlock("11. How much customisation are you proposing?", "h4"),
      portableBlock("Custom code can be useful, but every piece of it has to be maintained through future upgrades. Prefer a vendor who shows how standard features cover your process first, and prices anything custom separately so you can decide."),
      portableBlock("12. What happens after go-live?", "h4"),
      portableBlock("Ask what support covers, how you raise an issue, how fast they respond, and whether there is a named person who knows your setup. The first month-end close on a new system is where support matters most."),

      portableBlock("Red Flags", "h3"),
      portableListItem("A single number with no breakdown or assumptions."),
      portableListItem("Vague answers about data ownership or exporting your data."),
      portableListItem("Claims that compliance is handled with no explanation of how, or by whom."),
      portableListItem("Pressure to sign before you have seen the system set up for your business."),
      portableListItem("Heavy customisation proposed before standard features have been explored."),

      portableBlock("Before You Send Your Request", "h3"),
      portableBlock("Vendors can only quote accurately on what they know. Include the number of system users, employees on payroll, legal entities, currencies, stock items and locations, your current system, the modules you need, and your target go-live date. Rough figures are fine. The more you share, the more comparable the quotes will be."),
      {
        _type: "block",
        markDefs: [
          { _key: "l-impl", _type: "link", href: "/implementation" },
          { _key: "l-price", _type: "link", href: "/pricing" },
          { _key: "l-dep", _type: "link", href: "/deployment" }
        ],
        children: [
          { _type: "span", text: "To see how we answer these questions, read " },
          { _type: "span", text: "how we implement", marks: ["l-impl"] },
          { _type: "span", text: ", " },
          { _type: "span", text: "what's in our quotes", marks: ["l-price"] },
          { _type: "span", text: ", and " },
          { _type: "span", text: "where your system can run", marks: ["l-dep"] },
          { _type: "span", text: "." }
        ]
      }
    ]
  },
  {
    _id: "post-multi-currency-kes-usd",
    _type: "blogPost",
    title: "Running Your Books in KES and USD: A Practical Guide",
    slug: { current: "multi-currency-accounting-kes-usd" },
    mainImage: "https://erpkenya.com/images/multi-currency-kes-usd.png",
    publishedAt: "2026-11-21T08:00:00Z",
    updatedAt: "2026-11-21T08:00:00Z",
    readTime: "8 min read",
    excerpt: "Buying in dollars and selling in shillings? How to set up KES and USD properly, handle exchange gains and losses, and close the month without a spreadsheet.",
    faq: [
      {
        q: "What is the difference between realised and unrealised exchange gains?",
        a: "A realised gain or loss happens when a foreign-currency invoice is paid at a different rate from the one it was raised at. An unrealised gain or loss is the change in value of balances that are still open at month end. ERPNext posts realised differences when the payment is matched, and revalues open balances when you run an exchange rate revaluation."
      },
      {
        q: "Can one customer have invoices in both KES and USD?",
        a: "In ERPNext, each customer or supplier uses one currency per company, because their balance is held in a single receivable or payable account. If you genuinely bill the same customer in both currencies, the usual approach is to set them up twice, once for each currency."
      },
      {
        q: "Which exchange rate should we use?",
        a: "Agree a policy with your auditor and apply it consistently. Many Kenyan businesses use the Central Bank of Kenya rate for the transaction date. ERPNext can fetch rates automatically or let you record them yourself."
      }
    ],
    content: [
      portableBlock("Picture a Nairobi importer at month end. The supplier invoices are in dollars, the customer invoices are in shillings, and the bank statement has both. Somewhere between the rate on the invoice and the rate on the day the money moved, a few hundred thousand shillings have appeared or vanished, and nobody is quite sure which account they belong in."),
      portableBlock("This is one of the most common reasons Kenyan businesses outgrow entry-level accounting software. Multi-currency is not hard in principle, but it has to be set up properly from the start. This guide walks through how it works and how to set it up in ERPNext."),

      portableBlock("One Company, Two Currencies", "h3"),
      portableBlock("Your company reports in one currency: KES. Your financial statements and tax returns are in KES. You can still buy, sell and bank in USD, but every USD transaction is also recorded in KES at an exchange rate."),
      portableBlock("In practice, that means three things need a currency:"),
      portableListItem("Bank accounts. A USD account at your bank becomes a USD account in your books, so its balance matches the statement in dollars."),
      portableListItem("Customers and suppliers. A US supplier you pay in dollars is set up with USD as its currency, with its balance held in a USD payables account."),
      portableListItem("Invoices and payments. Each records the foreign amount and the rate, so the KES value is always known."),

      portableBlock("Where Exchange Differences Come From", "h3"),
      portableBlock("Suppose you receive a supplier invoice for USD 10,000 when the rate is 130, so it goes into your books as KES 1,300,000. A month later you pay it, and the rate is 129. The payment costs KES 1,290,000. The KES 10,000 difference is a realised exchange gain."),
      portableBlock("In a spreadsheet, someone has to notice that difference, calculate it and post it. In ERPNext, when the payment is matched to the invoice, the difference is calculated and posted automatically to the exchange gain and loss account you set for the company."),
      portableBlock("At month end there is a second kind of difference. Unpaid USD invoices and USD bank balances are now worth a different amount in KES than when you recorded them. These are unrealised gains and losses. ERPNext's exchange rate revaluation works them out for every open USD balance and prepares the journal for you to check and post."),

      {
        _type: "callToAction",
        title: "See KES and USD in One Set of Books",
        text: "We'll show you multi-currency purchasing, payments and revaluation set up around your own business.",
        buttonText: "Book a Demo",
        url: "/contact"
      },

      portableBlock("Setting It Up Properly", "h3"),
      portableListItem("Decide your exchange rate policy with your auditor, and write it down.", "number"),
      portableListItem("Create a separate bank account in the books for each currency you hold.", "number"),
      portableListItem("Set up receivable and payable accounts for each foreign currency, such as Debtors - USD and Creditors - USD.", "number"),
      portableListItem("Set each customer and supplier's currency before their first transaction. It is much harder to change afterwards.", "number"),
      portableListItem("Set the exchange gain and loss account on the company, so realised differences have somewhere to go.", "number"),
      portableListItem("Choose whether rates are fetched automatically or entered by your team, and who checks them.", "number"),

      portableBlock("Imports: Getting the True Cost in Shillings", "h3"),
      portableBlock("For importers, the supplier invoice is only part of the cost. Freight, insurance, duty and clearing are usually paid in shillings, often weeks later. ERPNext's landed cost feature adds these charges to the items in the shipment, so your stock shows what the goods really cost to bring in."),
      portableBlock("The result is a cost price you can trust when setting selling prices, instead of a supplier price converted at whatever rate was handy."),

      portableBlock("Closing the Month", "h3"),
      portableListItem("Reconcile each foreign bank account against its statement in the foreign currency."),
      portableListItem("Match payments to invoices so realised differences are posted."),
      portableListItem("Run the exchange rate revaluation for open balances at the month-end rate."),
      portableListItem("Review the exchange gain and loss account. A large or unexpected number usually points to a wrong rate on a single transaction."),

      portableBlock("What Your Reports Show", "h3"),
      portableBlock("With currencies set up properly, the general ledger can show any account in its own currency and in KES, customer and supplier statements come out in the currency they trade in, and your financial statements are in KES with exchange differences on their own line. Month end becomes a review of numbers the system already holds."),
      {
        _type: "block",
        markDefs: [
          { _key: "l-fin", _type: "link", href: "/solutions/finance" },
          { _key: "l-ic", _type: "link", href: "/resources/inter-company-accounting-kenya" }
        ],
        children: [
          { _type: "span", text: "See everything else in " },
          { _type: "span", text: "ERPNext Financial Management", marks: ["l-fin"] },
          { _type: "span", text: ", or read how to handle " },
          { _type: "span", text: "invoices between related companies", marks: ["l-ic"] },
          { _type: "span", text: ", which often come in a foreign currency too." }
        ]
      }
    ]
  },
  {
    _id: "post-inter-company-accounting-kenya",
    _type: "blogPost",
    title: "Inter-Company Accounting for Kenyan Groups, Made Simple",
    slug: { current: "inter-company-accounting-kenya" },
    mainImage: "https://erpkenya.com/images/inter-company-accounting.png",
    publishedAt: "2026-11-20T09:00:00Z",
    updatedAt: "2026-11-20T09:00:00Z",
    readTime: "8 min read",
    excerpt: "A sister company abroad, a property company charging rent, money collected on someone else's behalf. How to keep inter-company balances clean and agreed.",
    faq: [
      {
        q: "Do both companies need to be on ERPNext?",
        a: "No. If both companies are in the same ERPNext system, inter-company invoices can be created on both sides automatically. If one company uses a different system, you record your side in ERPNext against an internal customer or supplier, and agree the balance with the other company each month."
      },
      {
        q: "Is money we collect for a related company our income?",
        a: "Usually not. If you collect payments on another company's behalf, the money is owed to that company, so it belongs in a liability account until it is passed on. Recording it as income overstates your revenue and your tax."
      },
      {
        q: "Are there tax rules for transactions between related companies?",
        a: "Yes. Transactions between related parties, especially across borders, are covered by Kenya's transfer pricing rules and need to be priced and documented as if the companies were independent. Agree the approach with your tax adviser."
      }
    ],
    content: [
      portableBlock("Two finance teams, one relationship, and a balance that never matches. The Kenyan company says the sister company owes it KES 4.2 million. The sister company says the figure is closer to 3.6. Somewhere in between are a rent invoice nobody posted, a payment recorded in the wrong month, and a deposit collected on the other company's behalf that one side booked as sales."),
      portableBlock("If this sounds familiar, the problem is rarely the arithmetic. It is that inter-company transactions are being recorded as if they were ordinary sales and purchases, by two teams who never compare notes until year end."),

      portableBlock("What Counts as Inter-Company", "h3"),
      portableBlock("Any transaction between companies under common ownership: a parent and its subsidiary, two sister companies, or a property company owned by the same shareholders. Common examples in Kenyan groups include:"),
      portableListItem("Goods or services sold from one company to another."),
      portableListItem("Rent charged by a property company to the trading company."),
      portableListItem("Management fees or shared costs recharged between companies."),
      portableListItem("Loans and advances between companies."),
      portableListItem("Money collected by one company on another's behalf, such as customer deposits for an overseas sister company."),

      portableBlock("The Golden Rule: Both Sides Must Match", "h3"),
      portableBlock("Every inter-company transaction appears twice: money owed to one company, and money owed by the other. The two figures should always agree. When the group's accounts are combined they cancel out, and if they don't match, someone has to find out why before the accounts can be finished."),
      portableBlock("The way to keep them matching is to treat related companies differently from ordinary customers and suppliers from the start, and to agree the balance every month rather than every year."),

      portableBlock("How ERPNext Handles It", "h3"),
      portableBlock("In ERPNext, a related company is set up as an internal customer or supplier, linked to the company it represents. That link changes how transactions behave:"),
      portableListItem("When both companies are in the same ERPNext system, a sales invoice raised by one company can create the matching purchase invoice in the other, so both sides are recorded from the same document."),
      portableListItem("Inter-company journal entries post to both companies at once, for loans, recharges and other adjustments."),
      portableListItem("Group reports combine the companies' accounts, so you can see the whole group at a glance."),
      portableBlock("When the related company runs a different system, which is common for an overseas sister company, you still set it up as an internal customer or supplier. Your side is recorded in ERPNext, and the monthly balance confirmation does the rest."),

      {
        _type: "callToAction",
        title: "Untangle Your Inter-Company Balances",
        text: "We'll show you how your group's transactions would be recorded in ERPNext, on both sides.",
        buttonText: "Book a Demo",
        url: "/contact"
      },

      portableBlock("Money Collected on Someone Else's Behalf", "h3"),
      portableBlock("This is where most mistakes happen. If your Kenyan company collects a deposit from a client for work your sister company will do, that money is not your income. It belongs to the sister company until you pass it on."),
      portableBlock("Record it in a liability account for amounts due to the related company, then clear that account when the money is transferred. Your revenue stays accurate, and the inter-company balance shows exactly what is owed."),

      portableBlock("A Monthly Routine That Works", "h3"),
      portableListItem("Agree a cut-off date with the other company's finance team.", "number"),
      portableListItem("Each side runs a statement of its balance with the other.", "number"),
      portableListItem("Compare the two and list every difference: usually timing, missing invoices or wrong rates.", "number"),
      portableListItem("Post the corrections in the right month, then confirm the agreed balance in writing.", "number"),
      portableBlock("Fifteen minutes a month is far cheaper than a week of unpicking at year end, with auditors waiting."),

      portableBlock("Different Currencies, Different Countries", "h3"),
      portableBlock("Inter-company balances with an overseas company are often in USD, so exchange differences appear on both sides. Agree which rate each side uses, and expect small differences that come purely from exchange rates."),
      portableBlock("Kenya's transfer pricing rules also apply. Related companies, especially in different countries, must charge each other fair market prices and keep records to show it. Some payments to related companies abroad may also attract withholding tax. Your tax adviser will guide you on both, and clean inter-company records make that conversation much easier."),
      {
        _type: "block",
        markDefs: [
          { _key: "l-mc", _type: "link", href: "/resources/multi-currency-accounting-kes-usd" },
          { _key: "l-fin", _type: "link", href: "/solutions/finance" }
        ],
        children: [
          { _type: "span", text: "Read our guide to " },
          { _type: "span", text: "running your books in KES and USD", marks: ["l-mc"] },
          { _type: "span", text: ", or see how " },
          { _type: "span", text: "ERPNext Financial Management", marks: ["l-fin"] },
          { _type: "span", text: " brings the whole group into one system." }
        ]
      }
    ]
  },
  {
    _id: "post-serial-number-tracking-erpnext",
    _type: "blogPost",
    title: "Serial Number Tracking for Electronics in ERPNext",
    slug: { current: "serial-number-tracking-erpnext" },
    mainImage: "https://erpkenya.com/images/serial-number-tracking.png",
    publishedAt: "2026-11-20T08:00:00Z",
    updatedAt: "2026-11-20T08:00:00Z",
    readTime: "7 min read",
    excerpt: "Selling laptops, phones or equipment? How serial number tracking in ERPNext follows every unit from the supplier to the customer, and through warranty.",
    faq: [
      {
        q: "Do we have to type every serial number by hand?",
        a: "No. Serial numbers can be scanned with a barcode scanner when goods are received and sold, or imported from the supplier's packing list. Scanning is faster and avoids typing mistakes."
      },
      {
        q: "Can we track warranty by serial number?",
        a: "Yes. Set a warranty period on the item, and each serial number records when it was sold and when its warranty expires. When a customer brings a unit back, you can see straight away whether it is still covered."
      },
      {
        q: "What is the difference between serial and batch tracking?",
        a: "A serial number identifies one individual unit, such as a laptop. A batch identifies a group of units made or received together, such as a production run of medicine with one expiry date. Electronics usually need serial numbers; pharmaceuticals and food usually need batches."
      }
    ],
    content: [
      portableBlock("A customer walks in with a laptop that will not start. They say they bought it from you eight months ago and it is under warranty. Your stock sheet says you sold forty of that model this year. Which one was theirs? Who supplied it? Is the supplier's warranty still running? Without serial numbers in your system, the answer is a long search through invoices and boxes."),
      portableBlock("For anyone selling electronics, quantity alone is not enough. Two laptops of the same model are not interchangeable once one has been sold, returned, repaired or claimed under warranty. Serial number tracking gives every unit its own history."),

      portableBlock("What Serial Tracking Gives You", "h3"),
      portableListItem("Every unit's full story: which supplier it came from, when it arrived, where it is now, and who bought it."),
      portableListItem("Warranty answers in seconds, from the date of sale and the warranty period."),
      portableListItem("Stock counts that check actual units, not just quantities, so a missing laptop is a specific missing laptop."),
      portableListItem("Faster returns and supplier claims, because the serial links straight to the original purchase."),

      portableBlock("How It Works in ERPNext", "h3"),
      portableBlock("Serial tracking is switched on per item. Once an item is marked as having serial numbers, ERPNext will not let it move without them, which is exactly the discipline you want."),
      portableListItem("Receiving. When goods arrive, each unit's serial number is scanned on the purchase receipt. Each serial is now in stock, in a specific warehouse, linked to the supplier and the purchase.", "number"),
      portableListItem("Moving. Transfers between stores or branches move specific serials, so you always know which units are where.", "number"),
      portableListItem("Selling. On the delivery note, sales invoice or point-of-sale screen, the serial of the unit going out is scanned. Only serials actually in stock at that location can be sold.", "number"),
      portableListItem("After the sale. The serial now shows the customer and the date of sale, and its warranty expiry if a warranty period is set on the item.", "number"),
      portableBlock("At any time, the serial number record and stock reports show where a unit is and every transaction it has been part of."),

      {
        _type: "callToAction",
        title: "Track Every Unit, Not Just Every Model",
        text: "See serial tracking set up for your products, from receiving to warranty.",
        buttonText: "Book a Demo",
        url: "/contact"
      },

      portableBlock("Warranty and Returns", "h3"),
      portableBlock("When the customer from the opening walks in, you scan or type the serial number. ERPNext shows the sale date, the customer and whether the warranty is still running. If the unit is faulty and covered, a warranty claim can be logged against that serial, and if it goes back to the supplier, the serial links you to the original purchase for your own claim."),
      portableBlock("Returns work the same way: a credit note for a returned unit brings that exact serial back into stock, so it cannot quietly be sold twice."),

      portableBlock("Setting It Up Well", "h3"),
      portableListItem("Decide which items need serials. Laptops, phones and equipment usually do; cables and accessories usually do not."),
      portableListItem("Use the manufacturer's serial number, or IMEI for phones, rather than inventing your own, so it matches the label on the box."),
      portableListItem("Set warranty periods on items so expiry dates are calculated automatically."),
      portableListItem("Get barcode scanners for receiving and sales. Scanning is the difference between a system staff use and one they work around."),
      portableListItem("Load opening stock from a physical count of serials, so the system starts with the units actually on your shelves."),

      portableBlock("Counting Serialised Stock", "h3"),
      portableBlock("A serial-tracked stock count is a list of serials scanned on the shelf, compared with the serials the system expects in that location. Differences are specific: a named unit missing, or one in the wrong store. That makes shrinkage far easier to investigate than a count that is simply three laptops short."),
      {
        _type: "block",
        markDefs: [
          { _key: "l-inv", _type: "link", href: "/resources/inventory-management-strategies" },
          { _key: "l-qb", _type: "link", href: "/quickbooks-to-erpnext" }
        ],
        children: [
          { _type: "span", text: "For reorder levels, landed costs and stock across branches, read our " },
          { _type: "span", text: "inventory management guide", marks: ["l-inv"] },
          { _type: "span", text: ". Tracking serials in a spreadsheet today? See " },
          { _type: "span", text: "how the move from QuickBooks works", marks: ["l-qb"] },
          { _type: "span", text: "." }
        ]
      }
    ]
  },
  {
    _id: "post-year-end-tax-checklist-2026",
    _type: "blogPost",
    title: "Year-End Tax Checklist for Kenyan Businesses (2026)",
    slug: { current: "year-end-tax-checklist-kenya-2026" },
    mainImage: "https://erpkenya.com/images/year-end-tax-checklist-2026.png",
    publishedAt: "2026-11-18T09:00:00Z",
    updatedAt: "2026-11-18T09:00:00Z",
    readTime: "9 min read",
    excerpt: "KRA's tax amnesty closes on 31 December and every 2026 expense now needs an eTIMS invoice. What to do before year end, with all the key dates.",
    faq: [
      {
        q: "When does the KRA tax amnesty end?",
        a: "The 2026 tax amnesty runs from 1 July to 31 December 2026. It waives penalties, interest and fines on tax debts for periods up to 31 December 2025, provided the principal tax is paid in full by 31 December 2026, either as a lump sum or through an iTax payment plan that is fully cleared by that date."
      },
      {
        q: "Can I still claim 2026 business expenses that have no eTIMS invoice?",
        a: "Generally, no. KRA allowed a one-time concession for 2025 returns. For the 2026 year of income, expenses must be supported by a valid eTIMS or TIMS invoice that carries your KRA PIN, unless they fall into an excluded category such as salaries, imports or interest. Check KRA's income and expense validation guide for the full list."
      },
      {
        q: "Does the tax amnesty cover customs duty?",
        a: "No. The amnesty covers penalties, interest and fines under the Tax Procedures Act. Customs duties under the East African Community Customs Management Act are excluded."
      },
      {
        q: "When is the last instalment tax payment for a company with a December year end?",
        a: "Instalment tax is paid on the 20th day of the 4th, 6th, 9th and 12th months of the company's financial year. For a December year end, the final instalment is due on 20 December. Any balance of tax is due by the end of the fourth month after year end, which is 30 April."
      }
    ],
    content: [
      portableBlock("Most years, December is about closing the books and planning for January. This year there is more at stake. KRA's tax amnesty closes on 31 December, the 2026 year is the first in which every expense you claim must be backed by an eTIMS invoice, and KRA has told businesses to keep proper stock records ahead of a new eTIMS stock feature. Each of these is much easier to deal with now than after the year has closed."),
      portableBlock("This checklist covers what to do before 31 December, and the deadlines that follow in early 2027. It assumes a business with a December year end; if yours is different, the same steps apply to your own year end."),

      portableBlock("1. Clear Old Tax Debts Before the Amnesty Closes", "h3"),
      portableBlock("The 2026 tax amnesty, re-introduced by the Finance Act 2026, waives 100% of penalties, interest and fines on tax debts for periods up to 31 December 2025. The window runs from 1 July to 31 December 2026. The condition is simple: the principal tax has to be paid in full."),
      portableListItem("If you owe only penalties and interest, with no principal outstanding, the waiver is automatic."),
      portableListItem("If you owe principal, pay it in full before 31 December, or apply on iTax for a payment plan. Under a plan, all the principal must still be cleared by 31 December 2026."),
      portableListItem("If you have unfiled returns for past periods, file them within the window. Late-filing penalties are waived where no principal is due."),
      portableListItem("Customs duties are not covered, and penalties and interest for periods from 1 January 2026 are payable in full."),
      portableBlock("On iTax, KRA's guidance is to generate the payment for the relevant tax and period, reduce the amount to the principal only, and pay. The penalties and interest are reversed once the principal is settled. Interest keeps building up on unpaid principal while the window is open, and anything left unpaid after 31 December becomes fully recoverable, so the earlier you check your iTax ledger, the better."),

      portableBlock("2. Collect an eTIMS Invoice for Every 2026 Expense", "h3"),
      portableBlock("Since 1 January 2026, KRA has been checking the income and expenses declared in income tax returns against three sources: TIMS and eTIMS invoices, withholding tax records, and customs import records. For 2025 returns, KRA allowed a one-time concession for valid expenses without eTIMS invoices. That concession has ended. For the 2026 year of income, an expense that isn't backed by a valid electronic tax invoice carrying your KRA PIN is likely to be disallowed, which increases your taxable profit."),
      portableBlock("Some expenses are excluded from this check, including salaries, imports and interest. KRA's income and expense validation guide has the full list. For everything else, the work is best done now, while suppliers can still issue invoices for this year:"),
      portableListItem("Run a report of every 2026 purchase and expense, and mark which ones have an eTIMS invoice number against them.", "number"),
      portableListItem("Ask suppliers for any missing invoices now, not in March. Many will need time to issue them.", "number"),
      portableListItem("Check that each invoice carries your KRA PIN. An invoice issued without your PIN is recorded as a sale to a final consumer and won't count as your expense. eTIMS invoices can't be edited or cancelled, so the supplier has to issue a credit note and a new invoice with your PIN.", "number"),
      portableListItem("For purchases from small suppliers or farmers who can't issue eTIMS invoices, use buyer-initiated invoicing, where you raise the invoice and the seller approves it.", "number"),
      portableListItem("Ask your KRA account manager for your TIMS and eTIMS schedule for the year, and compare it with your own records.", "number"),

      portableBlock("3. Make Sure Your Sales Match What KRA Sees", "h3"),
      portableBlock("The same validation works on the income side. KRA can see every eTIMS invoice you issued and the withholding tax your customers deducted from payments to you. If the sales in your accounts don't match those figures, expect questions."),
      portableListItem("Reconcile total sales in your accounts with the total of eTIMS invoices you issued for the year."),
      portableListItem("Make sure every return, discount or cancelled sale went through eTIMS as a credit note. Voiding a sale in your own system doesn't change KRA's records."),
      portableListItem("Match the withholding tax certificates you received against your customer receipts, and chase customers for any that are missing."),

      {
        _type: "callToAction",
        title: "Keep eTIMS and Your Books in Step",
        text: "ERP Kenya sets up ERPNext so invoices and credit notes reach eTIMS through an approved integrator, keeping your sales and KRA's records in step.",
        buttonText: "How eTIMS Works With ERPNext",
        url: "/kra-etims"
      },

      portableBlock("4. Pay the Final Instalment Tax by 20 December", "h3"),
      portableBlock("Companies pay income tax in four instalments during the year, on the 20th day of the 4th, 6th, 9th and 12th months of their financial year. For a December year end, the last instalment is due on 20 December. Each instalment is a quarter of the year's expected tax, calculated either on this year's estimate or on last year's tax plus 10%; your accountant can confirm which basis suits you. Any balance is due by 30 April, four months after year end."),
      portableBlock("If the year has gone better or worse than planned, now is the time to update your estimate, before the final instalment is paid."),

      portableBlock("5. Count Your Stock Properly", "h3"),
      portableBlock("In a public notice issued in September 2026, KRA told all businesses using TIMS and eTIMS to keep proper records of stock that is purchased or received, sold, transferred, returned, adjusted or otherwise disposed of. KRA is preparing a stock management feature within eTIMS and has held consultations with businesses. It hasn't confirmed a start date, but the direction is clear: KRA will increasingly compare your stock movements with your invoices."),
      portableBlock("A careful year-end count is the best preparation. It fixes the closing stock figure in your accounts, which feeds straight into cost of sales and profit, and gives you a clean starting point for 2027."),
      portableListItem("Count every location, including branches, vehicles and stock held by third parties."),
      portableListItem("Post the differences as stock adjustments with a reason, rather than quietly editing quantities."),
      portableListItem("Write off expired, damaged or obsolete stock with supporting records, so the adjustment can be explained if KRA asks."),
      {
        _type: "block",
        markDefs: [{ _key: "link-inventory", _type: "link", href: "/resources/inventory-management-strategies" }],
        children: [
          { _type: "span", text: "Our " },
          { _type: "span", text: "inventory management guide", marks: ["link-inventory"] },
          { _type: "span", text: " covers cycle counting, multi-branch stock and landed costs in more detail." }
        ]
      },

      portableBlock("6. Close the Payroll Year Cleanly", "h3"),
      portableBlock("December payroll has its usual deadlines, and two things change early in 2027:"),
      portableListItem("PAYE, SHIF and NSSF for December are due by 9 January 2027, and the Affordable Housing Levy by the ninth working day of January."),
      portableListItem("Employers issue P9 forms to employees, showing the year's pay and tax, by the end of February. Since December 2024, SHIF and the Housing Levy have been deducted before PAYE is calculated, so check that your 2026 P9 figures reflect this."),
      portableListItem("The next phase of NSSF contribution limits is scheduled from February 2027. Wait for the official figures to be gazetted, then update your payroll before the February run."),
      {
        _type: "block",
        markDefs: [
          { _key: "link-nssf", _type: "link", href: "/resources/automate-nssf-shif-housing-levy-deductions-kenya" },
          { _key: "link-calc", _type: "link", href: "/solutions/hr-payroll" }
        ],
        children: [
          { _type: "span", text: "For how NSSF, SHIF and the Housing Levy are calculated, see " },
          { _type: "span", text: "our guide to automating statutory deductions", marks: ["link-nssf"] },
          { _type: "span", text: ", or check a payslip with the " },
          { _type: "span", text: "payroll calculator", marks: ["link-calc"] },
          { _type: "span", text: "." }
        ]
      },

      portableBlock("7. Watch the New Nil Return Deadline", "h3"),
      portableBlock("If you have a dormant company or another entity with no income in 2026, note the change in the Finance Act 2026: nil returns are now due within one month of the end of the year of income, instead of six months. For the 2026 year, that means 31 January 2027. The Act also changed other filing deadlines, so check KRA's current guidance for each of your returns rather than relying on last year's dates."),

      portableBlock("Key Dates at a Glance", "h3"),
      portableListItem("20 December 2026: final instalment tax for companies with a December year end."),
      portableListItem("31 December 2026: tax amnesty closes. Principal must be paid in full for penalties and interest to be waived."),
      portableListItem("9 January 2027: December PAYE, SHIF and NSSF due. The Housing Levy is due by the ninth working day."),
      portableListItem("20 January 2027: December VAT return and payment due."),
      portableListItem("31 January 2027: nil returns for the 2026 year of income."),
      portableListItem("February 2027: P9 forms to employees, and the next NSSF phase once gazetted."),
      portableListItem("30 April 2027: balance of company income tax for a December year end."),

      portableBlock("This checklist is a general guide based on KRA notices and the Finance Act 2026 as of November 2026. Tax rules change, and your situation may differ, so confirm the details with KRA or your tax adviser before you act.", "blockquote"),

      {
        _type: "block",
        markDefs: [
          { _key: "link-etims", _type: "link", href: "/kra-etims" },
          { _key: "link-contact", _type: "link", href: "/contact" }
        ],
        children: [
          { _type: "span", text: "Most of this list comes down to one thing: your books, your eTIMS records and your stock need to tell the same story. If they live in separate systems, year end is when the gaps show. See how " },
          { _type: "span", text: "eTIMS works with ERPNext", marks: ["link-etims"] },
          { _type: "span", text: ", or " },
          { _type: "span", text: "book a demo", marks: ["link-contact"] },
          { _type: "span", text: " to see it on your own processes." }
        ]
      }
    ]
  },
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
    title: "M-Pesa Reconciliation: How to Automate It in Your ERP",
    slug: { current: "automated-mpesa-reconciliation" },
    mainImage: "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?auto=format&fit=crop&q=80&w=800",
    publishedAt: "2026-02-15T09:00:00Z",
    updatedAt: "2026-11-18T09:00:00Z",
    readTime: "7 min read",
    excerpt: "How M-Pesa payments reach your ERP through Safaricom's Daraja API, the matching rules that work, and how to close each day without a spreadsheet.",
    faq: [
      {
        q: "Can an ERP receive M-Pesa payments automatically, without forwarding SMS messages?",
        a: "Yes. Safaricom's Daraja API sends a notification to your ERP for every payment made to your Paybill or Till number, usually within seconds. It includes the M-Pesa transaction ID, amount, time, payer name and, for Paybill, the account number the customer typed. No SMS forwarding or statement download is needed."
      },
      {
        q: "Does automated reconciliation work with a Till (Buy Goods) number?",
        a: "Yes, but Till payments carry no account number, so there is nothing that ties a payment to a specific invoice. Till payments are best matched at the point of sale, or collected with an STK Push prompt sent from the invoice, where the result comes back linked to that invoice."
      },
      {
        q: "What happens when a customer types the wrong account number?",
        a: "The payment is still recorded against your M-Pesa account in the ERP, but it goes into an unmatched queue instead of being applied to an invoice. Someone reviews the queue, assigns the payment to the right customer, and the invoice is settled. Nothing is lost and nothing is applied to the wrong customer."
      },
      {
        q: "Do M-Pesa sales still need a KRA eTIMS invoice?",
        a: "Yes. The eTIMS requirement applies to the sale, not the payment method. Whether the customer pays by M-Pesa, cash or bank transfer, the invoice must be issued through eTIMS. In ERPNext, the invoice goes to eTIMS through an approved integrator when it is raised, and the M-Pesa payment is matched to it afterwards."
      }
    ],
    content: [
      portableBlock("For most Kenyan businesses, M-Pesa is the main way customers pay. That is good for cash flow and bad for bookkeeping. Every payment arrives as a separate transaction with a reference code, and someone has to work out which customer it came from and which invoice it settles. At a few payments a day that is a chore. At a few hundred, it is a full-time job, and the books are always a day or two behind."),
      portableBlock("Automating it is mostly a matter of getting the payment data into your ERP directly, then letting clear rules do the matching. This guide covers how that works and how to set it up."),

      portableBlock("Why Manual M-Pesa Reconciliation Breaks Down", "h3"),
      portableBlock("The problem isn't that matching one payment is hard. It's that the exceptions pile up:"),
      portableListItem("Customers type the wrong account number, or their own name, or leave it blank."),
      portableListItem("One invoice is paid in three instalments over two weeks."),
      portableListItem("One payment covers several invoices, with no indication of which."),
      portableListItem("Till (Buy Goods) payments carry no account number at all."),
      portableListItem("The M-Pesa statement is downloaded hours later and re-keyed into the accounts, adding a second chance for errors."),
      portableBlock("Each exception needs a person to investigate it, and while they do, the customer's balance is wrong. That leads to chasing customers who have already paid, or releasing goods to customers who haven't."),

      portableBlock("How M-Pesa Payments Reach Your ERP", "h3"),
      portableBlock("Safaricom's Daraja API is the official way for business systems to connect to M-Pesa. For incoming payments, your business registers a confirmation URL for its Paybill or Till number. From then on, every payment to that number is posted to your ERP automatically, usually within seconds of the customer receiving their confirmation SMS."),
      portableBlock("Each notification includes the M-Pesa transaction ID, the amount, the time, the payer's name and, for Paybill payments, the account number the customer entered. Safaricom partially masks the customer's phone number in these notifications, so the account number, not the phone number, is the reliable way to identify who paid."),
      portableBlock("Daraja also supports STK Push (Lipa na M-Pesa Online). Instead of waiting for the customer to pay, your ERP sends a payment prompt to their phone from the invoice itself. The customer enters their PIN, and the result comes back linked to that exact invoice. There is nothing to match, which makes STK Push the cleanest option for B2B collections and online orders."),

      portableBlock("Matching Rules That Actually Work", "h3"),
      portableBlock("Good rules are strict at the top and cautious at the bottom. Apply them in this order:"),
      portableListItem("Account number equals an open invoice number: apply the payment to that invoice.", "number"),
      portableListItem("Account number equals a customer code: apply the payment to that customer's oldest open invoices first.", "number"),
      portableListItem("Payer name and amount closely match an open invoice: suggest the match for someone to confirm, but don't apply it automatically.", "number"),
      portableListItem("Anything else goes to an unmatched queue for review.", "number"),
      portableBlock("Partial payments leave the invoice part-paid, with the balance still showing. Overpayments are held as a credit on the customer's account, ready to apply to the next invoice. Either way, the customer's statement is correct the moment the payment arrives."),
      portableBlock("Most of the work is in rule 1. If customers reliably use the invoice number as their account number, the large majority of payments match with no human involvement. Print the Paybill number and \"Account no: invoice number\" on every invoice, quotation and payment reminder SMS."),

      {
        _type: "callToAction",
        title: "See M-Pesa Matching Live",
        text: "We'll connect a test Paybill and show payments landing on invoices in real time.",
        buttonText: "Book Free Demo",
        url: "/contact"
      },

      portableBlock("Paybill or Till: Which Should You Use?", "h3"),
      portableBlock("Use a Paybill number wherever customers pay against an invoice, such as distributors, wholesalers, schools, landlords and service businesses. The account number field is what makes automatic matching possible."),
      portableBlock("A Till number suits walk-in sales, where the customer pays at the counter and the cashier can see the payment arrive. Because there is no account number, Till payments should be matched at the point of sale, not reconciled later. Many businesses run both: a Till for the shop, and a Paybill for credit customers."),

      portableBlock("Closing the Day", "h3"),
      portableBlock("Automation doesn't remove the daily check. It makes it take minutes instead of hours. At the end of each day, compare your M-Pesa account balance in the ERP with the balance on the M-Pesa organisation portal, then clear anything left in the unmatched queue."),
      portableBlock("Two items regularly trip people up. M-Pesa transaction charges should be booked as an expense, not netted off sales. And when money is moved from M-Pesa to your bank account, it should be recorded as a transfer between two of your own accounts, not as income or a payment."),

      portableBlock("Setting It Up", "h3"),
      portableListItem("Apply for Daraja production access for your Paybill or Till number. Safaricom's approval can take some time, so start early.", "number"),
      portableListItem("Link the shortcode to an M-Pesa account in your ERP, so every incoming payment is posted there.", "number"),
      portableListItem("Put your Paybill number and the invoice number on every invoice and payment reminder.", "number"),
      portableListItem("Configure the matching rules above, and decide who owns the unmatched queue.", "number"),
      portableListItem("Run the automated matching alongside your existing process for a couple of weeks, then switch over.", "number"),

      portableBlock("What's Next?", "h3"),
      {
        _type: "block",
        markDefs: [
          { _key: "link-inventory", _type: "link", href: "/resources/inventory-management-strategies" },
          { _key: "link-etims", _type: "link", href: "/kra-etims" }
        ],
        children: [
          { _type: "span", text: "Once collections are automated, the next bottleneck is usually stock. " },
          { _type: "span", text: "Read how to set reorder points around real import lead times", marks: ["link-inventory"] },
          { _type: "span", text: ", or see how " },
          { _type: "span", text: "KRA eTIMS invoicing", marks: ["link-etims"] },
          { _type: "span", text: " fits into the same sales flow." }
        ]
      }
    ]
  },
  {
    _id: "post-2",
    _type: "blogPost",
    title: "Inventory Management in Kenya: Staying Stocked",
    slug: { current: "inventory-management-strategies" },
    mainImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    publishedAt: "2026-02-10T09:00:00Z",
    updatedAt: "2026-11-18T09:00:00Z",
    readTime: "8 min read",
    excerpt: "Long import lead times, seasonal demand and stock spread across branches. How Kenyan businesses set reorder points, cost imports and keep stock accurate.",
    faq: [
      {
        q: "How do I calculate a reorder point?",
        a: "Multiply your average daily sales by your full lead time in days, from placing the order to the stock being available to sell, then add safety stock. For example, selling 40 units a day with a 50-day lead time and 10 days of safety stock gives a reorder point of (40 × 50) + (40 × 10) = 2,400 units."
      },
      {
        q: "Should I use FIFO or moving average stock valuation?",
        a: "Both are accepted. FIFO values stock at the cost of the most recent purchases, which tracks replacement cost more closely when prices and exchange rates are rising. Moving average smooths out price swings between shipments. ERPNext lets you choose the method per item, but pick one per item and keep it consistent."
      },
      {
        q: "Can one system track stock across several branches?",
        a: "Yes. Each branch, store and vehicle is set up as its own warehouse, with its own stock levels and reorder levels. Moving stock between them is recorded as a transfer, so you always know what is at each location and what is in transit."
      },
      {
        q: "How often should we count stock?",
        a: "Instead of one big annual count, count a small group of items every week, with fast-moving and high-value items counted most often. Differences are posted as a stock reconciliation, so shrinkage shows up within days instead of at year end."
      }
    ],
    content: [
      portableBlock("Running out of stock costs you the sale, and often the customer. Holding too much ties up cash that a growing business needs elsewhere. Getting the balance right is hard anywhere, but Kenyan businesses face a few problems that make it harder, and most spreadsheets don't account for them."),

      portableBlock("Why Stock Planning Is Harder Here", "h3"),
      portableListItem("Long, variable lead times. Imported goods spend weeks at sea, then time at Mombasa port, in customs clearance and in transport inland. The gap between ordering and selling is often measured in months."),
      portableListItem("Currency movements. Goods bought in US dollars cost more to replace when the shilling weakens, even if the supplier's price hasn't changed."),
      portableListItem("Seasonal demand. December, back-to-school in January, and the long and short rains for agricultural inputs all shift demand sharply."),
      portableListItem("Stock in several places. A Nairobi warehouse, upcountry branches and delivery vehicles each hold stock, and the totals rarely match unless every movement is recorded."),

      portableBlock("Set Reorder Points from Your Real Lead Time", "h3"),
      portableBlock("A reorder point is the stock level at which you place the next order. The formula is simple: average daily sales × lead time in days + safety stock. The mistake most businesses make is using the supplier's shipping time as the lead time. The real figure runs from the day you place the order to the day the stock is on your shelf, including production, shipping, port clearance and transport."),
      portableBlock("For example, if you sell 40 units a day, your real lead time is 50 days, and you want 10 days of safety stock, your reorder point is (40 × 50) + (40 × 10) = 2,400 units. Order when stock falls to 2,400, not when you notice the shelf looking empty."),
      portableBlock("ERP Kenya is built on ERPNext, which stores a reorder level and reorder quantity for each item in each warehouse. When stock falls below that level, the system raises a material request automatically, so the order is placed on time even in a busy week. Review the levels before each peak season. A reorder point based on an average month will be too low for December."),

      portableBlock("Plan with Projected Stock, Not Stock on Hand", "h3"),
      portableBlock("The number on the shelf isn't the number that matters. If 500 units are on hand but 300 are already promised to customers and another 1,000 are on a ship, your planning position is very different from what a physical count suggests. ERPNext tracks projected quantity: what you have, plus what is on order, minus what is already reserved for customers. Base reorder decisions on that figure, and you avoid both double-ordering and false alarms."),

      portableBlock("Know the Landed Cost of Every Item", "h3"),
      portableBlock("The supplier's invoice is only part of what an imported item costs. Freight, insurance, import duty, clearing and forwarding fees, port charges and inland transport can add a large share on top. If those costs go straight to expenses, your stock is undervalued and your margins look better than they are."),
      portableBlock("A landed cost voucher spreads these charges across the items in a shipment, by value or by quantity, and adds them to the cost of the stock. Your stock valuation, cost of sales and gross margin then reflect what the goods actually cost to bring in, which is the number you need when setting prices."),

      {
        _type: "callToAction",
        title: "Take Control of Stock",
        text: "See reorder levels, landed costs and multi-branch stock working on your own item list.",
        buttonText: "Explore Features",
        url: "/solutions"
      },

      portableBlock("Focus Attention with ABC Analysis", "h3"),
      portableBlock("Not every item deserves the same attention. Rank your items by the value they sell each year. Typically a small group, the A items, accounts for most of your sales value. Those get the tightest reorder levels, the most frequent counts and the closest supplier follow-up. C items, the long tail of low-value lines, can be ordered in larger, less frequent batches."),

      portableBlock("Track Batches, Expiry Dates and Serial Numbers", "h3"),
      portableBlock("For pharmaceuticals, food, agro-chemicals and veterinary products, knowing which batch is on the shelf matters as much as knowing the quantity. Batch tracking records the batch number and expiry date of every unit received, so stock can be picked first-expiry-first-out, and expired stock is flagged before it reaches a customer. If a supplier recalls a batch, you can see exactly who it was sold to."),
      portableBlock("For electronics, machinery and anything sold with a warranty, serial numbers do the same job for individual units, linking each one to its purchase, sale and any warranty claim."),

      portableBlock("Manage Stock Across Locations", "h3"),
      portableBlock("Set up each warehouse, branch and vehicle as its own location. Moving stock between them is recorded as a transfer, and using a goods-in-transit location for stock on the road keeps it visible while it is between sites. Each branch then has its own reorder levels, so a shortage in Kisumu is caught even when Nairobi is fully stocked."),

      portableBlock("Count Little and Often", "h3"),
      portableBlock("An annual stock-take tells you what went wrong a year ago. Cycle counting, where a small group of items is counted every week, tells you this week. Differences between the count and the system are posted as a stock reconciliation, with the adjustment recorded against a reason. Patterns, such as the same items or the same branch coming up short, become visible quickly."),

      portableBlock("Modernising Your Payment Collection", "h3"),
      {
        _type: "block",
        markDefs: [{ _key: "link-mpesa", _type: "link", href: "/resources/automated-mpesa-reconciliation" }],
        children: [
          { _type: "span", text: "Accurate stock is half the picture. The other half is knowing who has paid for it. " },
          { _type: "span", text: "See how to automate M-Pesa reconciliation", marks: ["link-mpesa"] },
          { _type: "span", text: " so customer balances are right the moment a payment arrives." }
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
          { _type: "span", text: "Built specifically for the Kenyan market. M-Pesa reconciliation, KRA eTIMS through an approved integrator, NSSF/SHIF payroll deductions, and local support based in Nairobi. Best for: SMEs and mid-market companies who need a system that works without heavy customization." }
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
          { _type: "span", text: "Affordable and user-friendly with a wide app ecosystem. M-Pesa and eTIMS connections come from third-party add-ons, so check who supports them locally. Best for: Small businesses looking for an all-in-one suite on a budget." }
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
        children: [{ _type: "span", text: "Statutory payroll deductions — PAYE, NSSF, SHIF, Housing Levy calculations that change with each Finance Act" }]
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
        text: "See how ERP Kenya handles M-Pesa, eTIMS, and payroll compliance for Kenyan businesses.",
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
          { _type: "span", text: "If you're a Kenyan SME or mid-market company, prioritize local compliance and support over brand name. A system that works on day one — with M-Pesa, eTIMS, and SHIF handled from day one — will save you more than a global brand that needs 6 months of customization." }
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
        children: [{ _type: "span", text: "Ignoring compliance from day one — retrofitting KRA eTIMS or SHIF deductions after go-live is a nightmare" }]
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

// Real, client-approved stories only. The Success Stories page shows
// industry use cases until this list (or Sanity "successStory") has entries.
export const mockSuccessStories = [];

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

import React from 'react';
import { Cloud, Server, Network, KeyRound, History, ShieldCheck, DatabaseBackup, Download } from 'lucide-react';
import { ContentPage } from '@/components/ContentPage';

export default function Deployment() {
  return (
    <ContentPage
      seo={{
        title: "ERP Hosting in Kenya: Cloud, On-Premise or Hybrid",
        description: "Run ERPNext in the cloud, on your own server or both. Who owns the data, how backups work, how it's secured, and what happens if the internet goes down.",
        canonical: "/deployment",
        breadcrumbs: [
          { name: "Home", url: "/" },
          { name: "Deployment & Data" },
        ],
      }}
      hero={{
        badge: "Deployment & Data",
        title: "Your System, Your Data, Your Choice of Where It Runs.",
        text: "ERPNext can run in the cloud, on a server in your office, or both. Whichever you choose, the database belongs to you and you can take a full copy at any time.",
      }}
      sections={[
        {
          type: "cards",
          title: "Three Ways to Run ERPNext",
          intro: "The right option depends on your internet reliability, IT capacity and where your teams work.",
          items: [
            { icon: Cloud, title: "Cloud", text: "Hosted and maintained for you. Access from any office or from the road, with no servers to look after. Best when your teams work from several places." },
            { icon: Server, title: "On-Premise", text: "Runs on a server in your office, on your network. Full physical control of the data. Best when internet is unreliable or policy requires data on site." },
            { icon: Network, title: "Hybrid", text: "A mix of the two, for example a local server for the office with a cloud copy for remote access and off-site backup." },
          ],
        },
        {
          type: "cards",
          title: "Who Owns the Data",
          items: [
            { icon: KeyRound, title: "It's Your Database", text: "Your data belongs to your business, not to us. There is no licence that expires and locks you out." },
            { icon: Download, title: "Full Export, Any Time", text: "You can take a complete copy of your database and files whenever you ask, including if you move to another provider." },
            { icon: DatabaseBackup, title: "Backups Agreed in Writing", text: "How often backups run and where copies are kept is agreed before go-live, and backups are restored in testing so we know they work." },
          ],
        },
        {
          type: "cards",
          title: "How It's Secured",
          items: [
            { icon: ShieldCheck, title: "Role-Based Access", text: "Each person sees only what their role needs. Salaries, for example, can be limited to payroll and directors." },
            { icon: History, title: "Audit Trail", text: "Changes to documents are recorded with who made them and when, so every figure can be traced." },
            { icon: KeyRound, title: "Secure Sign-In", text: "Encrypted connections, strong password rules and optional two-factor sign-in for users who need it." },
          ],
        },
        {
          type: "table",
          title: "What If the Internet Goes Down?",
          rows: [
            { label: "Cloud", text: "The system needs an internet connection. A backup connection, such as a mobile data router, keeps key users working during an outage." },
            { label: "On-premise", text: "Staff on your office network keep working during an internet outage, because the server is in the building." },
            { label: "Hybrid", text: "The office keeps working on the local server, and remote access returns when the connection does." },
          ],
          note: "We look at your connectivity and how your teams work before recommending an option.",
        },
      ]}
      faqs={[
        { q: "Which option is cheapest?", a: "Cloud usually has the lowest upfront cost, with a predictable monthly fee. On-premise needs a server and someone to look after it, but no hosting fee. We set out the costs of each option in your quote." },
        { q: "Can we start in the cloud and move on-premise later, or the other way round?", a: "Yes. ERPNext runs the same way in both, so moving between them is a planned migration of your database and files, not a new implementation." },
        { q: "Where is cloud data hosted?", a: "We agree the hosting location with you, including any data residency requirements your business has, before go-live." },
        { q: "What happens to our data if we stop working with ERP Kenya?", a: "You keep it. We hand over a full copy of your database and files, and because ERPNext is open source, any capable provider can host and support it." },
      ]}
      related={[
        { label: "How we implement", to: "/implementation" },
        { label: "What drives ERP cost", to: "/pricing" },
        { label: "Financial Management", to: "/solutions/finance" },
      ]}
      cta={{
        title: "Not Sure Which Option Fits?",
        text: "Tell us about your offices and connectivity, and we'll recommend a set-up and include it in an itemised quote.",
      }}
    />
  );
}

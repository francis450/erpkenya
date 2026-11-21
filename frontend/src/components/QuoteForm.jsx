import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { API } from '@/lib/api';

const MODULES = ["Finance & Accounting", "Multi-Currency / Multi-Company", "Inventory & Purchasing", "Point of Sale", "HR & Payroll", "Manufacturing", "CRM & Sales", "eTIMS"];
const DEPLOYMENT = ["Not sure yet", "Cloud", "On-premise", "Hybrid"];

const EMPTY = {
  name: '', email: '', company: '', phone: '',
  users: '', employees: '', companies: '', currencies: '',
  items: '', locations: '', currentSystem: '', deployment: DEPLOYMENT[0], goLive: '', notes: '',
};

// Itemised-quote request: asks for the details needed to price an implementation.
export function QuoteForm() {
  const [form, setForm] = useState(EMPTY);
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(false);

  const set = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const toggle = (m) => setModules(modules.includes(m) ? modules.filter((x) => x !== m) : [...modules, m]);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const message = [
      `System users: ${form.users || '-'}`,
      `Employees on payroll: ${form.employees || '-'}`,
      `Companies / legal entities: ${form.companies || '-'}`,
      `Currencies: ${form.currencies || '-'}`,
      `Stock items (approx.): ${form.items || '-'}`,
      `Warehouses / branches / tills: ${form.locations || '-'}`,
      `Current system: ${form.currentSystem || '-'}`,
      `Deployment: ${form.deployment}`,
      `Target go-live: ${form.goLive || '-'}`,
      `Modules: ${modules.join(', ') || '-'}`,
      form.notes ? `Notes: ${form.notes}` : '',
    ].filter(Boolean).join('\n');
    try {
      await axios.post(`${API}/leads`, {
        name: form.name, email: form.email, company: form.company, phone: form.phone,
        message, form_type: 'quote', interests: modules,
      });
      toast.success("Thanks! We'll send your itemised quote shortly.");
      setForm(EMPTY);
      setModules([]);
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please email contact@erpkenya.com or call +254 757 185 189.");
    } finally {
      setLoading(false);
    }
  };

  const field = (name, label, props = {}) => (
    <div className="grid gap-2">
      <Label htmlFor={`q-${name}`}>{label}</Label>
      <Input id={`q-${name}`} name={name} value={form[name]} onChange={set} {...props} />
    </div>
  );

  return (
    <form onSubmit={submit} className="grid gap-6 bg-white dark:bg-slate-900 border rounded-2xl p-6 md:p-8 shadow-sm">
      <div className="grid sm:grid-cols-2 gap-4">
        {field('name', 'Name', { required: true, placeholder: 'Jane Wanjiru' })}
        {field('email', 'Work email', { required: true, type: 'email', placeholder: 'jane@company.co.ke' })}
        {field('company', 'Company', { required: true, placeholder: 'Company Ltd' })}
        {field('phone', 'Phone', { placeholder: '+254...' })}
      </div>

      <div>
        <h3 className="font-semibold mb-1">About your business</h3>
        <p className="text-sm text-muted-foreground mb-4">Rough figures are fine. We'll confirm them with you before the quote is final.</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {field('users', 'People who need a login', { placeholder: 'e.g. 5' })}
          {field('employees', 'Employees on payroll', { placeholder: 'e.g. 25' })}
          {field('companies', 'Companies / legal entities', { placeholder: 'e.g. 1, plus a sister company abroad' })}
          {field('currencies', 'Currencies you trade in', { placeholder: 'e.g. KES and USD' })}
          {field('items', 'Stock items (approx.)', { placeholder: 'e.g. 300, serial-tracked' })}
          {field('locations', 'Warehouses, branches or tills', { placeholder: 'e.g. 1 warehouse, 2 tills' })}
          {field('currentSystem', 'Current system', { placeholder: 'e.g. QuickBooks, Excel' })}
          {field('goLive', 'Target go-live', { placeholder: 'e.g. January 2027' })}
        </div>
      </div>

      <div>
        <Label className="mb-3 block">Modules you're interested in</Label>
        <div className="grid sm:grid-cols-2 gap-2">
          {MODULES.map((m) => (
            <label key={m} className="flex items-center gap-2 text-sm cursor-pointer">
              <input type="checkbox" checked={modules.includes(m)} onChange={() => toggle(m)} className="h-4 w-4 accent-blue-600" />
              {m}
            </label>
          ))}
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="q-deployment">Where should it run?</Label>
        <select id="q-deployment" name="deployment" value={form.deployment} onChange={set} className="h-10 rounded-md border border-input bg-background px-3 text-sm">
          {DEPLOYMENT.map((d) => <option key={d}>{d}</option>)}
        </select>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="q-notes">Anything else we should know?</Label>
        <Textarea id="q-notes" name="notes" value={form.notes} onChange={set} placeholder="Approvals, integrations, reports you rely on..." />
      </div>

      <Button type="submit" disabled={loading} className="w-full h-12 text-base bg-primary hover:bg-primary/90">
        {loading ? "Sending..." : "Request My Itemised Quote"}
      </Button>
    </form>
  );
}

import React, { useMemo, useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calculator } from 'lucide-react';
import { CalendlyButton, CALENDLY_URLS } from '@/components/CalendlyWidget';
import { grossToNet, netToGross, formatKES } from '@/lib/kenyaPayroll';

function toNumber(value) {
  const n = Number(value);
  return Number.isFinite(n) && n >= 0 ? n : 0;
}

function ResultRow({ label, value, negative, bold, muted }) {
  return (
    <div className={`flex justify-between py-1.5 ${bold ? '' : 'border-b border-slate-200'}`}>
      <span className={bold ? 'font-semibold text-slate-900' : muted ? 'text-xs text-slate-400' : 'text-sm text-slate-500'}>
        {label}
      </span>
      <span className={`font-mono ${bold ? 'text-lg font-bold text-purple-600' : negative ? 'text-sm text-red-500' : muted ? 'text-xs text-slate-400' : 'text-sm text-slate-700'}`}>
        {negative ? '- ' : ''}{value}
      </span>
    </div>
  );
}

export function PayrollCalculator() {
  const [basic, setBasic] = useState('80000');
  const [allowancesGross, setAllowancesGross] = useState('15000');
  const [targetNet, setTargetNet] = useState('60000');
  const [allowancesNet, setAllowancesNet] = useState('15000');

  const grossResult = useMemo(
    () => grossToNet({ basic: toNumber(basic), allowances: toNumber(allowancesGross) }),
    [basic, allowancesGross]
  );

  const netResult = useMemo(
    () => netToGross({ targetNet: toNumber(targetNet), allowances: toNumber(allowancesNet) }),
    [targetNet, allowancesNet]
  );

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 w-full text-slate-900">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-9 h-9 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
          <Calculator size={18} />
        </div>
        <h2 className="font-semibold text-slate-900">Payroll Calculator</h2>
      </div>

      <Tabs defaultValue="gross-to-net">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="gross-to-net">Gross → Net</TabsTrigger>
          <TabsTrigger value="net-to-gross">Net → Gross</TabsTrigger>
        </TabsList>

        <TabsContent value="gross-to-net" className="mt-4">
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div>
              <Label htmlFor="basic-salary" className="text-xs text-slate-500">Basic Salary (KES)</Label>
              <Input
                id="basic-salary"
                type="number"
                min="0"
                value={basic}
                onChange={(e) => setBasic(e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="allowances-gross" className="text-xs text-slate-500">Allowances (KES)</Label>
              <Input
                id="allowances-gross"
                type="number"
                min="0"
                value={allowancesGross}
                onChange={(e) => setAllowancesGross(e.target.value)}
                className="mt-1"
              />
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl p-4">
            <ResultRow label="Gross Pay" value={formatKES(grossResult.gross)} />
            <ResultRow label="NSSF (Tier I + II)" value={formatKES(grossResult.nssf.total)} negative />
            <ResultRow label="SHIF" value={formatKES(grossResult.shif)} negative />
            <ResultRow label="PAYE" value={formatKES(grossResult.paye)} negative />
            <ResultRow label="Housing Levy" value={formatKES(grossResult.housingLevy)} negative />
            <ResultRow label="Net Pay" value={formatKES(grossResult.net)} bold />
          </div>
        </TabsContent>

        <TabsContent value="net-to-gross" className="mt-4">
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div>
              <Label htmlFor="target-net" className="text-xs text-slate-500">Desired Net Pay (KES)</Label>
              <Input
                id="target-net"
                type="number"
                min="0"
                value={targetNet}
                onChange={(e) => setTargetNet(e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="allowances-net" className="text-xs text-slate-500">Allowances (KES)</Label>
              <Input
                id="allowances-net"
                type="number"
                min="0"
                value={allowancesNet}
                onChange={(e) => setAllowancesNet(e.target.value)}
                className="mt-1"
              />
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl p-4">
            <ResultRow label="Required Basic Salary" value={formatKES(netResult.basic)} />
            <ResultRow label="Required Gross Pay" value={formatKES(netResult.gross)} />
            <ResultRow label="NSSF (Tier I + II)" value={formatKES(netResult.nssf.total)} negative />
            <ResultRow label="SHIF" value={formatKES(netResult.shif)} negative />
            <ResultRow label="PAYE" value={formatKES(netResult.paye)} negative />
            <ResultRow label="Housing Levy" value={formatKES(netResult.housingLevy)} negative />
            <ResultRow label="Net Pay" value={formatKES(netResult.net)} bold />
          </div>
        </TabsContent>
      </Tabs>

      <p className="text-xs text-slate-400 mt-4 leading-relaxed">
        Illustrative estimate using 2026 KRA PAYE, SHIF, NSSF, and Affordable Housing Levy rates. Applies standard personal relief only — excludes mortgage, insurance, or other reliefs. Consult your accountant for definitive figures.
      </p>

      <CalendlyButton
        text="Book a Payroll Demo"
        url={CALENDLY_URLS.demo}
        className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white"
      />
    </div>
  );
}

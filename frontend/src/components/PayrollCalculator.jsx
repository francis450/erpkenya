import React, { useMemo, useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calculator, AlertTriangle } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { CalendlyButton, CALENDLY_URLS } from '@/components/CalendlyWidget';
import { grossToNet, netToGross, formatKES, HOUSING_LEVY_RATE, SHIF_MIN } from '@/lib/kenyaPayroll';

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
      <span className={`font-mono ${bold ? 'text-lg font-bold text-primary' : negative ? 'text-sm text-red-500' : muted ? 'text-xs text-slate-400' : 'text-sm text-slate-700'}`}>
        {negative ? '- ' : ''}{value}
      </span>
    </div>
  );
}

function EmployerCostSection({ result }) {
  return (
    <div className="mt-3 pt-3 border-t border-dashed border-slate-200">
      <p className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-1">Employer Cost (on top of gross)</p>
      <ResultRow label="NSSF Match" value={formatKES(result.employer.nssf)} muted />
      <ResultRow label={`Housing Levy Match (${HOUSING_LEVY_RATE * 100}%)`} value={formatKES(result.employer.housingLevy)} muted />
      <ResultRow label="NITA Levy" value={formatKES(result.employer.nita)} muted />
      <ResultRow label="Total Cost to Company" value={formatKES(result.ctc)} bold />
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
        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
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

          {grossResult.net < 0 ? (
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Gross pay too low to calculate</AlertTitle>
              <AlertDescription>
                SHIF has a statutory minimum of {formatKES(SHIF_MIN)}/month regardless of income, so a gross pay
                of {formatKES(grossResult.gross)} isn't enough to cover deductions. Enter a realistic monthly salary.
              </AlertDescription>
            </Alert>
          ) : (
            <div className="bg-slate-50 rounded-xl p-4">
              <ResultRow label="Gross Pay" value={formatKES(grossResult.gross)} />
              <ResultRow label="NSSF (Tier I + II)" value={formatKES(grossResult.nssf.total)} negative />
              <ResultRow label="SHIF" value={formatKES(grossResult.shif)} negative />
              <ResultRow label="PAYE" value={formatKES(grossResult.paye)} negative />
              <ResultRow label="Housing Levy" value={formatKES(grossResult.housingLevy)} negative />
              <ResultRow label="Net Pay" value={formatKES(grossResult.net)} bold />
              <EmployerCostSection result={grossResult} />
            </div>
          )}
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
            <EmployerCostSection result={netResult} />
          </div>
        </TabsContent>
      </Tabs>

      <p className="text-xs text-slate-400 mt-4 leading-relaxed">
        Illustrative estimate using 2026 KRA PAYE, SHIF, NSSF, and Affordable Housing Levy rates. Applies standard personal relief only — excludes mortgage, insurance, or other reliefs. Consult your accountant for definitive figures.
      </p>

      <CalendlyButton
        text="Book a Payroll Demo"
        url={CALENDLY_URLS.demo}
        className="w-full mt-4 bg-primary hover:bg-primary/90 text-white"
      />
    </div>
  );
}

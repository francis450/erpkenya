// Kenyan statutory payroll rates (2026). Single source of truth used by both
// the interactive calculator and any illustrative examples on the site, so
// they never drift apart. Rates change periodically via the Finance Act —
// review against KRA/NSSF/SHIF guidance when they do.

export const PERSONAL_RELIEF = 2400;

export const NSSF_TIER_I_LIMIT = 9000;
export const NSSF_TIER_II_LIMIT = 108000;
export const NSSF_RATE = 0.06;

export const SHIF_RATE = 0.0275;
export const SHIF_MIN = 300;

export const HOUSING_LEVY_RATE = 0.015;

// Monthly PAYE bands: each band taxes the slice of income up to `limit`
// (Infinity for the top band) at `rate`. Cumulative, not marginal-on-total.
export const PAYE_BANDS = [
  { limit: 24000, rate: 0.10 },
  { limit: 32333, rate: 0.25 },
  { limit: 500000, rate: 0.30 },
  { limit: 800000, rate: 0.325 },
  { limit: Infinity, rate: 0.35 },
];

export function computeNSSF(gross) {
  const tierI = NSSF_RATE * Math.min(gross, NSSF_TIER_I_LIMIT);
  const tierII = NSSF_RATE * Math.min(Math.max(gross - NSSF_TIER_I_LIMIT, 0), NSSF_TIER_II_LIMIT - NSSF_TIER_I_LIMIT);
  return { tierI, tierII, total: tierI + tierII };
}

export function computeSHIF(gross) {
  if (gross <= 0) return 0;
  return Math.max(gross * SHIF_RATE, SHIF_MIN);
}

export function computeHousingLevy(gross) {
  return gross * HOUSING_LEVY_RATE;
}

export function computePAYE(taxablePay) {
  let tax = 0;
  let previousLimit = 0;
  for (const band of PAYE_BANDS) {
    if (taxablePay <= previousLimit) break;
    const bandAmount = Math.min(taxablePay, band.limit) - previousLimit;
    tax += bandAmount * band.rate;
    previousLimit = band.limit;
  }
  return Math.max(tax - PERSONAL_RELIEF, 0);
}

export function grossToNet({ basic = 0, allowances = 0 }) {
  const gross = Math.max(basic, 0) + Math.max(allowances, 0);
  const nssf = computeNSSF(gross);
  const shif = computeSHIF(gross);
  const housingLevy = computeHousingLevy(gross);
  // Matches KRA's eCitizen PAYE calculator: NSSF, SHIF, and Housing Levy are
  // all deducted before PAYE is computed on the remaining taxable pay.
  const taxablePay = Math.max(gross - nssf.total - shif - housingLevy, 0);
  const paye = computePAYE(taxablePay);
  const net = gross - nssf.total - shif - paye - housingLevy;

  return { basic, allowances, gross, nssf, shif, taxablePay, paye, housingLevy, net };
}

// Solves for the Basic Salary (holding allowances fixed) that produces the
// desired net pay. Net pay is monotonic non-decreasing in gross, so bisection
// converges reliably despite the progressive PAYE bands and NSSF/SHIF caps.
export function netToGross({ targetNet = 0, allowances = 0 }) {
  const target = Math.max(targetNet, 0);
  let low = 0;
  let high = target * 3 + 1_000_000;

  for (let i = 0; i < 60; i++) {
    const mid = (low + high) / 2;
    const result = grossToNet({ basic: mid, allowances });
    if (result.net < target) {
      low = mid;
    } else {
      high = mid;
    }
  }

  return grossToNet({ basic: (low + high) / 2, allowances });
}

export function formatKES(amount) {
  const rounded = Math.round(amount || 0);
  return `KES ${rounded.toLocaleString('en-KE')}`;
}

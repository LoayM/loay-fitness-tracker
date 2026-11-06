const INITIAL_SCANS = [
  {
    id: 'scan-2026-11-02',
    date: '2026-11-02',
    time: '10:58',
    label: 'Nov 2 (Baseline)',
    weight: 93.55,
    bmi: 29.2,
    pbf: 24.9,
    fatMass: 23.29,
    subcutaneousFatKg: 20.21,
    subcutaneousFatPct: 21.6,
    visceralFat: 11,
    lbm: 70.3,
    softLeanMass: 66.79,
    skeletalMuscle: 45.3,
    skeletalMusclePct: 48.4,
    bodyWater: 50.7,
    bodyWaterPct: 54.2,
    proteinKg: 15.9,
    proteinPct: 17.0,
    boneMass: 3.46,
    bmr: 1887,
    smi: 8.9,
    whr: 1.01,
    fitnessScore: 69.0,
    segments: {
      leftArm: { muscleKg: 3.74, muscleEval: 99.8, fatKg: 1.68, fatEval: 264.6, fatPct: 1.8 },
      rightArm: { muscleKg: 3.79, muscleEval: 101.2, fatKg: 1.73, fatEval: 272.5, fatPct: 1.8 },
      trunk: { muscleKg: 29.30, muscleEval: 94.8, fatKg: 12.80, fatEval: 286.0, fatPct: 13.7 },
      leftLeg: { muscleKg: 10.37, muscleEval: 95.1, fatKg: 3.31, fatEval: 181.9, fatPct: 3.5 },
      rightLeg: { muscleKg: 10.47, muscleEval: 96.1, fatKg: 3.32, fatEval: 182.7, fatPct: 3.5 }
    }
  },
  {
    id: 'scan-2026-11-05',
    date: '2026-11-05',
    time: '09:20',
    label: 'Nov 5 (Day 4)',
    weight: 93.10,
    bmi: 29.1,
    pbf: 24.7,
    fatMass: 23.00,
    subcutaneousFatKg: 19.92,
    subcutaneousFatPct: 21.4,
    visceralFat: 11,
    lbm: 70.1,
    softLeanMass: 66.57,
    skeletalMuscle: 45.3,
    skeletalMusclePct: 48.7,
    bodyWater: 50.6,
    bodyWaterPct: 54.4,
    proteinKg: 16.0,
    proteinPct: 17.2,
    boneMass: 3.54,
    bmr: 1884,
    smi: 8.8,
    whr: 1.01,
    fitnessScore: 69.2,
    segments: {
      leftArm: { muscleKg: 3.73, muscleEval: 99.7, fatKg: 1.65, fatEval: 260.3, fatPct: 1.8 },
      rightArm: { muscleKg: 3.78, muscleEval: 101.1, fatKg: 1.70, fatEval: 268.1, fatPct: 1.8 },
      trunk: { muscleKg: 29.22, muscleEval: 94.9, fatKg: 12.64, fatEval: 282.3, fatPct: 13.6 },
      leftLeg: { muscleKg: 10.34, muscleEval: 95.2, fatKg: 3.27, fatEval: 179.9, fatPct: 3.5 },
      rightLeg: { muscleKg: 10.44, muscleEval: 96.1, fatKg: 3.28, fatEval: 180.6, fatPct: 3.5 }
    }
  },
  {
    id: 'scan-2026-11-06',
    date: '2026-11-06',
    time: '12:14',
    label: 'Nov 6 (Day 5)',
    weight: 92.45,
    bmi: 28.9,
    pbf: 24.4,
    fatMass: 22.56,
    subcutaneousFatKg: 19.51,
    subcutaneousFatPct: 21.1,
    visceralFat: 11,
    lbm: 69.9,
    softLeanMass: 66.38,
    skeletalMuscle: 45.2,
    skeletalMusclePct: 48.9,
    bodyWater: 50.4,
    bodyWaterPct: 54.5,
    proteinKg: 15.9,
    proteinPct: 17.2,
    boneMass: 3.51,
    bmr: 1879,
    smi: 8.8,
    whr: 1.01,
    fitnessScore: 69.7,
    segments: {
      leftArm: { muscleKg: 3.71, muscleEval: 99.6, fatKg: 1.61, fatEval: 254.0, fatPct: 1.7 },
      rightArm: { muscleKg: 3.76, muscleEval: 101.0, fatKg: 1.66, fatEval: 261.6, fatPct: 1.8 },
      trunk: { muscleKg: 29.11, muscleEval: 94.9, fatKg: 12.40, fatEval: 277.0, fatPct: 13.4 },
      leftLeg: { muscleKg: 10.31, muscleEval: 95.4, fatKg: 3.22, fatEval: 176.9, fatPct: 3.5 },
      rightLeg: { muscleKg: 10.41, muscleEval: 96.3, fatKg: 3.23, fatEval: 177.6, fatPct: 3.5 }
    }
  }
];

const GOAL = {
  startWeight: 93.55,
  targetWeight: 82.65,
  startFat: 23.29,
  targetFat: 12.39,
  targetPbf: 15.0,
  targetMuscle: 45.3
};

const STORAGE_KEY = 'loay_arboleaf_scans_v2';

let state = {
  scans: [],
  chartMetric: 'weight', // 'weight' | 'fatMass' | 'pbf' | 'skeletalMuscle'
  segmentMode: 'fat', // 'fat' | 'muscle'
  selectedSegment: 'trunk'
};

function loadScans() {
  const byDate = new Map();
  INITIAL_SCANS.forEach((s) => byDate.set(s.date, s));
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        parsed.forEach((s) => {
          if (s && s.date) byDate.set(s.date, s);
        });
      }
    }
  } catch (e) {
    console.warn('Could not read localStorage, using initial scans.', e);
  }
  state.scans = Array.from(byDate.values()).sort((a, b) => a.date.localeCompare(b.date));
}

function saveScans() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.scans));
  } catch (e) {
    console.warn('Could not save to localStorage.', e);
  }
}

function formatSigned(val, decimals = 2, unit = '') {
  const num = Number(val);
  const sign = num > 0 ? '+' : '';
  return `${sign}${num.toFixed(decimals)}${unit}`;
}

function renderAll() {
  const first = state.scans[0];
  const latest = state.scans[state.scans.length - 1];

  renderGoalBanner(first, latest);
  renderKPIs(first, latest);
  renderTrajectoryChart();
  renderSegmentalBodyMap(first, latest);
  renderScanTable(first);
  updateCalculator();
}

function renderGoalBanner(first, latest) {
  const totalFatToLose = first.fatMass - GOAL.targetFat; // 10.90 kg
  const fatLostSoFar = Math.max(0, first.fatMass - latest.fatMass);
  const pctDone = Math.min(100, Math.max(2, (fatLostSoFar / totalFatToLose) * 100));

  const daysElapsed = Math.max(
    1,
    (new Date(latest.date) - new Date(first.date)) / (1000 * 60 * 60 * 24)
  );
  const dailyFatLossKg = fatLostSoFar / daysElapsed;
  const weeklyFatLossKg = dailyFatLossKg * 7;
  const monthlyFatLossKg = dailyFatLossKg * 30;
  const dailyDeficitKcal = Math.round(dailyFatLossKg * 7700);

  document.getElementById('goal-progress-pct').textContent = `${pctDone.toFixed(1)}% Complete`;
  document.getElementById('goal-progress-detail').textContent =
    `${fatLostSoFar.toFixed(2)} kg pure fat burned of ${totalFatToLose.toFixed(1)} kg goal (${(GOAL.startWeight - latest.weight).toFixed(2)} kg total weight drop)`;
  document.getElementById('goal-bar-fill').style.width = `${pctDone}%`;

  document.getElementById('pace-val').textContent = `-${weeklyFatLossKg.toFixed(2)} kg/wk`;
  document.getElementById('pace-sub').textContent =
    `~${monthlyFatLossKg.toFixed(1)} kg pure fat/mo • ~${dailyDeficitKcal} kcal/day measured deficit`;
}

function renderKPIs(first, latest) {
  const wDiff = latest.weight - first.weight;
  const fDiff = latest.fatMass - first.fatMass;
  const pbfDiff = latest.pbf - first.pbf;
  const mDiff = latest.skeletalMuscle - first.skeletalMuscle;
  const trunkFatDiff = latest.segments.trunk.fatKg - first.segments.trunk.fatKg;
  const protDiff = latest.proteinKg - first.proteinKg;

  const kpis = [
    {
      label: 'Body Weight',
      tag: 'Target: 82.65 kg',
      tagClass: 'tag-info',
      value: latest.weight.toFixed(2),
      unit: 'kg',
      delta: `${formatSigned(wDiff, 2, ' kg')} since ${first.date}`,
      deltaClass: wDiff <= 0 ? 'delta-positive' : 'delta-negative',
      sub: `${(latest.weight - GOAL.targetWeight).toFixed(2)} kg remaining to target`
    },
    {
      label: 'Pure Fat Mass',
      tag: `${latest.pbf.toFixed(1)}% Body Fat`,
      tagClass: 'tag-warn',
      value: latest.fatMass.toFixed(2),
      unit: 'kg',
      delta: `${formatSigned(fDiff, 2, ' kg')} (${formatSigned(pbfDiff, 1, '%')})`,
      deltaClass: fDiff <= 0 ? 'delta-positive' : 'delta-negative',
      sub: `Subcutaneous: ${latest.subcutaneousFatKg.toFixed(2)} kg • Visceral: ${latest.visceralFat}`
    },
    {
      label: 'Skeletal Muscle',
      tag: `${latest.skeletalMusclePct.toFixed(1)}% of BW`,
      tagClass: 'tag-good',
      value: latest.skeletalMuscle.toFixed(1),
      unit: 'kg',
      delta: `${formatSigned(mDiff, 2, ' kg')} (${formatSigned(latest.skeletalMusclePct - first.skeletalMusclePct, 1, '% ratio')})`,
      deltaClass: mDiff >= 0 ? 'delta-positive' : 'delta-negative',
      sub: `Fat-Free Mass: ${latest.lbm.toFixed(1)} kg • SMI: ${latest.smi}`
    },
    {
      label: 'Trunk (Belly) Fat',
      tag: '55% of Total Loss',
      tagClass: 'tag-good',
      value: latest.segments.trunk.fatKg.toFixed(2),
      unit: 'kg',
      delta: `${formatSigned(trunkFatDiff, 2, ' kg')} off midsection`,
      deltaClass: trunkFatDiff <= 0 ? 'delta-positive' : 'delta-negative',
      sub: `Waist-Hip Ratio: ${latest.whr} (Goal ≤ 0.90)`
    },
    {
      label: 'Protein & Hydration',
      tag: 'Optimal Recovery',
      tagClass: 'tag-good',
      value: latest.proteinKg.toFixed(1),
      unit: 'kg',
      delta: `${formatSigned(protDiff, 1, ' kg')} cellular protein`,
      deltaClass: protDiff >= 0 ? 'delta-positive' : 'delta-neutral',
      sub: `Body Water: ${latest.bodyWater.toFixed(1)} L (${latest.bodyWaterPct.toFixed(1)}%)`
    }
  ];

  const container = document.getElementById('kpi-grid');
  container.innerHTML = kpis
    .map(
      (k) => `
      <div class="kpi-card">
        <div class="kpi-top">
          <span class="kpi-label">${k.label}</span>
          <span class="kpi-tag ${k.tagClass}">${k.tag}</span>
        </div>
        <div>
          <span class="kpi-value">${k.value}</span>
          <span class="kpi-unit">${k.unit}</span>
        </div>
        <div class="kpi-delta ${k.deltaClass}">${k.delta}</div>
        <div class="kpi-subtext">${k.sub}</div>
      </div>
    `
    )
    .join('');
}

function renderTrajectoryChart() {
  const metricConfig = {
    weight: {
      label: 'Weight (kg)',
      unit: 'kg',
      color: '#38bdf8',
      goalVal: 82.65,
      projections: [
        { date: '2026-11-02', val: 93.55, tag: 'Start' },
        { date: '2026-12-01', val: 89.60, tag: 'Fly to Sydney (NeurIPS)' },
        { date: '2026-12-22', val: 88.00, tag: 'Return from NZ & GBR' },
        { date: '2027-01-15', val: 85.10, tag: 'Mid-Jan' },
        { date: '2027-02-05', val: 82.65, tag: '3-Mo Target' }
      ]
    },
    fatMass: {
      label: 'Body Fat Mass (kg)',
      unit: 'kg',
      color: '#f59e0b',
      goalVal: 12.39,
      projections: [
        { date: '2026-11-02', val: 23.29, tag: 'Start' },
        { date: '2026-12-01', val: 20.30, tag: 'Fly to Sydney' },
        { date: '2026-12-22', val: 18.70, tag: 'Return from NZ & GBR' },
        { date: '2027-01-15', val: 15.40, tag: 'Mid-Jan' },
        { date: '2027-02-05', val: 12.39, tag: 'Goal Fat Mass' }
      ]
    },
    pbf: {
      label: 'Body Fat (%)',
      unit: '%',
      color: '#f43f5e',
      goalVal: 15.0,
      projections: [
        { date: '2026-11-02', val: 24.9, tag: 'Start' },
        { date: '2026-12-01', val: 22.5, tag: 'Fly to Sydney' },
        { date: '2026-12-22', val: 21.1, tag: 'Return from NZ & GBR' },
        { date: '2027-01-15', val: 18.0, tag: 'Mid-Jan' },
        { date: '2027-02-05', val: 15.0, tag: 'Athletic 15%' }
      ]
    },
    skeletalMuscle: {
      label: 'Skeletal Muscle (kg)',
      unit: 'kg',
      color: '#10b981',
      goalVal: 45.3,
      projections: [
        { date: '2026-11-02', val: 45.3, tag: 'Start' },
        { date: '2026-12-01', val: 45.3, tag: 'Fly to Sydney' },
        { date: '2026-12-22', val: 45.3, tag: 'Return from Trip' },
        { date: '2027-01-15', val: 45.4, tag: 'Muscle Memory Recomp' },
        { date: '2027-02-05', val: 45.5, tag: '100% Retained' }
      ]
    }
  };

  const cfg = metricConfig[state.chartMetric];
  const startDate = new Date('2026-11-02').getTime();
  const endDate = new Date('2027-02-05').getTime();

  const actualPoints = state.scans.map((s) => ({
    date: s.date,
    t: new Date(s.date).getTime(),
    val: s[state.chartMetric],
    label: `${s.date.slice(5)}: ${s[state.chartMetric]}${cfg.unit}`
  }));

  const projPoints = cfg.projections.map((p) => ({
    ...p,
    t: new Date(p.date).getTime()
  }));

  const allVals = [
    ...actualPoints.map((p) => p.val),
    ...projPoints.map((p) => p.val),
    cfg.goalVal
  ];

  const minVal = Math.floor(Math.min(...allVals) - 2);
  const maxVal = Math.ceil(Math.max(...allVals) + 2);

  const W = 760;
  const H = 290;
  const padL = 48;
  const padR = 28;
  const padT = 26;
  const padB = 42;

  const xOf = (t) =>
    padL + ((t - startDate) / (endDate - startDate)) * (W - padL - padR);
  const yOf = (v) =>
    padT + (1 - (v - minVal) / (maxVal - minVal || 1)) * (H - padT - padB);

  // Grid lines
  let gridSvg = '';
  const steps = 4;
  for (let i = 0; i <= steps; i++) {
    const val = minVal + ((maxVal - minVal) * i) / steps;
    const y = yOf(val);
    gridSvg += `
      <line x1="${padL}" y1="${y}" x2="${W - padR}" y2="${y}" stroke="rgba(255,255,255,0.06)" stroke-dasharray="4 4"/>
      <text x="${padL - 8}" y="${y + 4}" text-anchor="end" fill="#64748b" font-size="11">${val.toFixed(1)}</text>
    `;
  }

  // Highlight Australia / NZ / GBR travel zone (Dec 1 to Dec 22)
  const tripStartX = xOf(new Date('2026-12-01').getTime());
  const tripEndX = xOf(new Date('2026-12-22').getTime());
  const tripBandSvg = `
    <rect x="${tripStartX}" y="${padT}" width="${tripEndX - tripStartX}" height="${H - padT - padB}"
      fill="rgba(139, 92, 246, 0.11)" stroke="rgba(139, 92, 246, 0.3)" stroke-dasharray="3 3" rx="6" />
    <text x="${(tripStartX + tripEndX) / 2}" y="${padT + 14}" text-anchor="middle" fill="#c4b5fd" font-size="10" font-weight="600">
      ✈️ NeurIPS + NZ + GBR (3 Wks)
    </text>
  `;

  // Projected path
  const projPath = projPoints
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${xOf(p.t).toFixed(1)} ${yOf(p.val).toFixed(1)}`)
    .join(' ');

  // Actual path
  const actualPath = actualPoints
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${xOf(p.t).toFixed(1)} ${yOf(p.val).toFixed(1)}`)
    .join(' ');

  const projDots = projPoints
    .map(
      (p) => `
      <circle cx="${xOf(p.t)}" cy="${yOf(p.val)}" r="4" fill="#1e293b" stroke="#94a3b8" stroke-width="2"/>
      <text x="${xOf(p.t)}" y="${H - 12}" text-anchor="middle" fill="#94a3b8" font-size="10">${p.date.slice(5)}</text>
    `
    )
    .join('');

  const actualDots = actualPoints
    .map(
      (p, idx) => `
      <circle cx="${xOf(p.t)}" cy="${yOf(p.val)}" r="6" fill="${cfg.color}" stroke="#090b10" stroke-width="2"/>
      <text x="${xOf(p.t) + (idx === 0 ? 6 : 12)}" y="${yOf(p.val) - (idx === 0 ? 10 : -4)}"
        fill="#f8fafc" font-size="11" font-weight="700">${p.val}${cfg.unit}</text>
    `
    )
    .join('');

  const svg = `
    <svg viewBox="0 0 ${W} ${H}" width="100%" height="100%">
      ${gridSvg}
      ${tripBandSvg}
      <path d="${projPath}" fill="none" stroke="rgba(148, 163, 184, 0.45)" stroke-width="2.2" stroke-dasharray="6 5"/>
      <path d="${actualPath}" fill="none" stroke="${cfg.color}" stroke-width="3.5" stroke-linecap="round"/>
      ${projDots}
      ${actualDots}
    </svg>
  `;

  document.getElementById('trajectory-chart').innerHTML = svg;
}

function renderSegmentalBodyMap(first, latest) {
  const isFat = state.segmentMode === 'fat';
  const segKeys = [
    { key: 'trunk', name: 'Trunk (Core / Belly)' },
    { key: 'leftArm', name: 'Left Arm' },
    { key: 'rightArm', name: 'Right Arm' },
    { key: 'leftLeg', name: 'Left Leg' },
    { key: 'rightLeg', name: 'Right Leg' }
  ];

  // Update body SVG labels
  segKeys.forEach(({ key }) => {
    const cur = latest.segments[key];
    const base = first.segments[key];
    const val = isFat ? cur.fatKg : cur.muscleKg;
    const diff = isFat ? cur.fatKg - base.fatKg : cur.muscleKg - base.muscleKg;
    const labelEl = document.getElementById(`svg-label-${key}`);
    if (labelEl) {
      labelEl.textContent = `${val.toFixed(2)}kg (${formatSigned(diff, 2)})`;
    }
  });

  // Render list
  const listEl = document.getElementById('segment-list');
  listEl.innerHTML = segKeys
    .map(({ key, name }) => {
      const cur = latest.segments[key];
      const base = first.segments[key];
      const val = isFat ? cur.fatKg : cur.muscleKg;
      const diff = isFat ? cur.fatKg - base.fatKg : cur.muscleKg - base.muscleKg;
      const evalPct = isFat ? cur.fatEval : cur.muscleEval;
      const barColor = isFat
        ? key === 'trunk'
          ? 'var(--accent-amber)'
          : 'var(--accent-cyan)'
        : 'var(--accent-emerald)';
      const barWidth = isFat ? Math.min(100, (evalPct / 300) * 100) : Math.min(100, evalPct);

      const deltaColor = isFat
        ? diff <= 0
          ? 'delta-positive'
          : 'delta-negative'
        : diff >= -0.05
        ? 'delta-positive'
        : 'delta-negative';

      return `
        <div class="segment-row ${state.selectedSegment === key ? 'active' : ''}" data-seg="${key}">
          <div class="segment-row-top">
            <span>${name}</span>
            <span>${val.toFixed(2)} kg <small class="${deltaColor}">(${formatSigned(diff, 2)} kg)</small></span>
          </div>
          <div class="segment-row-sub">
            <span>Standard Ratio: ${evalPct.toFixed(1)}%</span>
            <span>${isFat ? (evalPct > 160 ? 'Over (Burning Fast)' : 'Normal') : 'Sufficient / Strong'}</span>
          </div>
          <div class="mini-progress">
            <div class="mini-progress-bar" style="width:${barWidth}%; background:${barColor};"></div>
          </div>
        </div>
      `;
    })
    .join('');
}

function renderScanTable(first) {
  const tbody = document.getElementById('scan-table-body');
  tbody.innerHTML = state.scans
    .slice()
    .reverse()
    .map((s) => {
      const wDelta = s.weight - first.weight;
      const fDelta = s.fatMass - first.fatMass;
      return `
        <tr>
          <td><strong>${s.date}</strong> <span style="color:var(--text-muted);font-size:0.76rem;">${s.time || ''}</span></td>
          <td><strong>${s.weight.toFixed(2)} kg</strong> <span class="${wDelta <= 0 ? 'delta-positive' : 'delta-negative'}" style="font-size:0.78rem;">(${formatSigned(wDelta, 2)})</span></td>
          <td><strong>${s.fatMass.toFixed(2)} kg</strong> <span class="${fDelta <= 0 ? 'delta-positive' : 'delta-negative'}" style="font-size:0.78rem;">(${formatSigned(fDelta, 2)})</span></td>
          <td>${s.pbf.toFixed(1)}%</td>
          <td><span class="tag-good" style="padding:3px 8px;border-radius:6px;font-weight:700;">${s.skeletalMuscle.toFixed(1)} kg (${s.skeletalMusclePct.toFixed(1)}%)</span></td>
          <td>${s.segments.trunk.fatKg.toFixed(2)} kg</td>
          <td>${s.proteinKg.toFixed(1)} kg</td>
          <td>${s.bodyWater.toFixed(1)} L</td>
          <td><strong>${s.fitnessScore.toFixed(1)}</strong></td>
        </tr>
      `;
    })
    .join('');
}

function updateCalculator() {
  const dayType = document.getElementById('calc-day-type').value;
  const watchKcal = Number(document.getElementById('calc-watch-kcal').value) || 0;
  const intakeKcal = Number(document.getElementById('calc-intake-kcal').value) || 1800;

  // Base non-workout burn (BMR 1884 + TEF ~180 + baseline steps/NEAT)
  const baseBurnMap = {
    wfh: 2220, // WFH sedentary researcher baseline
    office: 2500, // Office day with 1h walking
    travel: 2650 // Australia / NZ / GBR high step day
  };

  const baseBurn = baseBurnMap[dayType] || 2220;
  const realWorkoutBurn = Math.round(watchKcal * 0.7); // 70% Rule for Apple Watch Series 6
  const totalTDEE = baseBurn + realWorkoutBurn;
  const deficit = totalTDEE - intakeKcal;
  const fatBurnedGrams = Math.round((deficit / 7700) * 1000);

  document.getElementById('watch-adjusted-val').textContent = `${realWorkoutBurn} kcal (70% of ${watchKcal})`;
  document.getElementById('calc-tdee-val').textContent = `${totalTDEE} kcal`;
  document.getElementById('calc-deficit-val').textContent =
    deficit >= 0 ? `-${deficit} kcal Deficit` : `+${Math.abs(deficit)} kcal Surplus`;
  document.getElementById('calc-fat-grams').textContent =
    deficit >= 0 ? `≈ ${fatBurnedGrams}g pure fat burned today` : `Above maintenance`;

  // Suggested carbs adjustment if deficit is huge (>950 kcal)
  const adviceEl = document.getElementById('calc-sleep-advice');
  if (deficit > 950) {
    adviceEl.innerHTML = `⚠️ <strong>High Deficit Alert (${deficit} kcal):</strong> Eat an extra <strong>150–200 kcal (40g carbs)</strong> 1 hour before bed tonight so your liver glycogen doesn't run out after 6 hours of sleep!`;
    adviceEl.style.color = '#fbbf24';
  } else {
    adviceEl.innerHTML = `✅ <strong>Sweet-Spot Deficit:</strong> Save ~35–40g of your daily carbs for dinner/pre-bed to guarantee 7.5–8h of deep sleep and full muscle recovery.`;
    adviceEl.style.color = '#94a3b8';
  }
}

function setupEventListeners() {
  // Chart Metric Tabs
  document.querySelectorAll('[data-chart-metric]').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-chart-metric]').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      state.chartMetric = btn.getAttribute('data-chart-metric');
      renderTrajectoryChart();
    });
  });

  // Segment Mode Tabs
  document.querySelectorAll('[data-seg-mode]').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-seg-mode]').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      state.segmentMode = btn.getAttribute('data-seg-mode');
      renderSegmentalBodyMap(state.scans[0], state.scans[state.scans.length - 1]);
    });
  });

  // Calculator inputs
  ['calc-day-type', 'calc-watch-kcal', 'calc-intake-kcal'].forEach((id) => {
    document.getElementById(id).addEventListener('input', updateCalculator);
  });

  // Modal open/close
  const modal = document.getElementById('add-scan-modal');
  document.getElementById('open-scan-modal-btn').addEventListener('click', () => {
    const latest = state.scans[state.scans.length - 1];
    document.getElementById('f-date').value = new Date().toISOString().slice(0, 10);
    document.getElementById('f-weight').value = latest.weight;
    document.getElementById('f-fatMass').value = latest.fatMass;
    document.getElementById('f-pbf').value = latest.pbf;
    document.getElementById('f-muscle').value = latest.skeletalMuscle;
    document.getElementById('f-trunkFat').value = latest.segments.trunk.fatKg;
    document.getElementById('f-protein').value = latest.proteinKg;
    document.getElementById('f-water').value = latest.bodyWater;
    document.getElementById('f-score').value = latest.fitnessScore;
    modal.classList.add('open');
  });

  document.getElementById('close-scan-modal-btn').addEventListener('click', () => {
    modal.classList.remove('open');
  });

  // Form submit
  document.getElementById('add-scan-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const latest = state.scans[state.scans.length - 1];
    const weight = parseFloat(document.getElementById('f-weight').value);
    const fatMass = parseFloat(document.getElementById('f-fatMass').value);
    const pbf = parseFloat(document.getElementById('f-pbf').value);
    const skeletalMuscle = parseFloat(document.getElementById('f-muscle').value);
    const trunkFat = parseFloat(document.getElementById('f-trunkFat').value);
    const proteinKg = parseFloat(document.getElementById('f-protein').value);
    const bodyWater = parseFloat(document.getElementById('f-water').value);
    const fitnessScore = parseFloat(document.getElementById('f-score').value);
    const date = document.getElementById('f-date').value;

    const newScan = {
      ...JSON.parse(JSON.stringify(latest)),
      id: `scan-${date}-${Date.now()}`,
      date,
      time: new Date().toTimeString().slice(0, 5),
      weight,
      bmi: Number((weight / (1.79 * 1.79)).toFixed(1)),
      fatMass,
      pbf,
      lbm: Number((weight - fatMass).toFixed(1)),
      skeletalMuscle,
      skeletalMusclePct: Number(((skeletalMuscle / weight) * 100).toFixed(1)),
      proteinKg,
      proteinPct: Number(((proteinKg / weight) * 100).toFixed(1)),
      bodyWater,
      bodyWaterPct: Number(((bodyWater / weight) * 100).toFixed(1)),
      fitnessScore
    };
    newScan.segments.trunk.fatKg = trunkFat;

    // Replace if same date or push
    const existingIdx = state.scans.findIndex((s) => s.date === date);
    if (existingIdx >= 0) {
      state.scans[existingIdx] = newScan;
    } else {
      state.scans.push(newScan);
      state.scans.sort((a, b) => a.date.localeCompare(b.date));
    }

    saveScans();
    renderAll();
    modal.classList.remove('open');
  });

  // Export JSON
  document.getElementById('export-json-btn').addEventListener('click', () => {
    const blob = new Blob([JSON.stringify(state.scans, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `loay-body-composition-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  });

  // Share Authorized Link
  const shareBtn = document.getElementById('share-access-btn');
  if (shareBtn) {
    shareBtn.addEventListener('click', async () => {
      const shareUrl = `${window.location.origin}${window.location.pathname}?auth=7777`;
      try {
        await navigator.clipboard.writeText(shareUrl);
        const orig = shareBtn.textContent;
        shareBtn.textContent = '✅ Authorized Link Copied!';
        setTimeout(() => {
          shareBtn.textContent = orig;
        }, 2500);
      } catch (err) {
        prompt('Copy this authorized link to share access:', shareUrl);
      }
    });
  }

  // Lock button
  const lockBtn = document.getElementById('lock-dashboard-btn');
  if (lockBtn) {
    lockBtn.addEventListener('click', () => {
      try {
        localStorage.removeItem('loay_pin_unlocked_v1');
      } catch (e) {}
      document.body.classList.add('locked');
      document.getElementById('auth-overlay').classList.remove('hidden');
      const pinInput = document.getElementById('auth-pin-input');
      if (pinInput) {
        pinInput.value = '';
        pinInput.focus();
      }
    });
  }
}

function setupAuthGate() {
  const ACCESS_PIN = '7777';
  const AUTH_KEY = 'loay_pin_unlocked_v1';
  const overlay = document.getElementById('auth-overlay');
  const pinInput = document.getElementById('auth-pin-input');
  const authForm = document.getElementById('auth-form');
  const errorEl = document.getElementById('auth-error');

  function unlock() {
    try {
      localStorage.setItem(AUTH_KEY, ACCESS_PIN);
    } catch (e) {}
    document.body.classList.remove('locked');
    if (overlay) overlay.classList.add('hidden');
    if (errorEl) errorEl.textContent = '';
    // Clean URL if unlocked via ?auth=7777
    if (window.location.search.includes('auth=')) {
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }

  // Check URL magic link (?auth=7777) or saved device authorization
  const params = new URLSearchParams(window.location.search);
  let savedAuth = null;
  try {
    savedAuth = localStorage.getItem(AUTH_KEY);
  } catch (e) {}

  if (params.get('auth') === ACCESS_PIN || params.get('key') === ACCESS_PIN || savedAuth === ACCESS_PIN) {
    unlock();
  }

  if (pinInput) {
    pinInput.addEventListener('input', () => {
      errorEl.textContent = '';
      if (pinInput.value === ACCESS_PIN) {
        unlock();
      } else if (pinInput.value.length === 4) {
        errorEl.textContent = 'Incorrect PIN. Please try again.';
      }
    });
  }

  if (authForm) {
    authForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (pinInput.value === ACCESS_PIN) {
        unlock();
      } else {
        errorEl.textContent = 'Incorrect PIN. Please try again.';
        pinInput.select();
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setupAuthGate();
  loadScans();
  setupEventListeners();
  renderAll();
});

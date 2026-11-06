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
    muscleMassPct: 71.4,
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
      leftArm: { muscleKg: 3.74, muscleEval: 99.8, musclePct: 4.0, fatKg: 1.68, fatEval: 264.6, fatPct: 1.8 },
      rightArm: { muscleKg: 3.79, muscleEval: 101.2, musclePct: 4.1, fatKg: 1.73, fatEval: 272.5, fatPct: 1.8 },
      trunk: { muscleKg: 29.30, muscleEval: 94.8, musclePct: 31.3, fatKg: 12.80, fatEval: 286.0, fatPct: 13.7 },
      leftLeg: { muscleKg: 10.37, muscleEval: 95.1, musclePct: 11.1, fatKg: 3.31, fatEval: 181.9, fatPct: 3.5 },
      rightLeg: { muscleKg: 10.47, muscleEval: 96.1, musclePct: 11.2, fatKg: 3.32, fatEval: 182.7, fatPct: 3.5 }
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
    muscleMassPct: 71.5,
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
      leftArm: { muscleKg: 3.73, muscleEval: 99.7, musclePct: 4.0, fatKg: 1.65, fatEval: 260.3, fatPct: 1.8 },
      rightArm: { muscleKg: 3.78, muscleEval: 101.1, musclePct: 4.1, fatKg: 1.70, fatEval: 268.1, fatPct: 1.8 },
      trunk: { muscleKg: 29.22, muscleEval: 94.9, musclePct: 31.4, fatKg: 12.64, fatEval: 282.3, fatPct: 13.6 },
      leftLeg: { muscleKg: 10.34, muscleEval: 95.2, musclePct: 11.1, fatKg: 3.27, fatEval: 179.9, fatPct: 3.5 },
      rightLeg: { muscleKg: 10.44, muscleEval: 96.1, musclePct: 11.2, fatKg: 3.28, fatEval: 180.6, fatPct: 3.5 }
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
    muscleMassPct: 71.8,
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
      leftArm: { muscleKg: 3.71, muscleEval: 99.6, musclePct: 4.0, fatKg: 1.61, fatEval: 254.0, fatPct: 1.7 },
      rightArm: { muscleKg: 3.76, muscleEval: 101.0, musclePct: 4.1, fatKg: 1.66, fatEval: 261.6, fatPct: 1.8 },
      trunk: { muscleKg: 29.11, muscleEval: 94.9, musclePct: 31.5, fatKg: 12.40, fatEval: 277.0, fatPct: 13.4 },
      leftLeg: { muscleKg: 10.31, muscleEval: 95.4, musclePct: 11.2, fatKg: 3.22, fatEval: 176.9, fatPct: 3.5 },
      rightLeg: { muscleKg: 10.41, muscleEval: 96.3, musclePct: 11.3, fatKg: 3.23, fatEval: 177.6, fatPct: 3.5 }
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

const STORAGE_KEY = 'loay_arboleaf_scans_v3';

let state = {
  scans: [],
  chartMetric: 'weight', // 'weight' | 'fatMass' | 'pbf' | 'skeletalMusclePct'
  segmentMode: 'muscle', // 'muscle' | 'fat'
  morphPct: 0 // 0 to 100 (Time-Machine slider)
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

function makeRingSvg(pct, color, label) {
  const r = 27;
  const c = 2 * Math.PI * r;
  const clamped = Math.max(4, Math.min(100, pct));
  const offset = c - (clamped / 100) * c;
  return `
    <div class="kpi-ring-wrap">
      <svg width="68" height="68" viewBox="0 0 68 68">
        <circle cx="34" cy="34" r="${r}" fill="none" stroke="#e2e8f0" stroke-width="6" />
        <circle cx="34" cy="34" r="${r}" fill="none" stroke="${color}" stroke-width="6"
          stroke-linecap="round" stroke-dasharray="${c.toFixed(1)}" stroke-dashoffset="${offset.toFixed(1)}"
          transform="rotate(-90 34 34)" />
      </svg>
      <div class="kpi-ring-text">${label}</div>
    </div>
  `;
}

function renderAll() {
  const first = state.scans[0];
  const latest = state.scans[state.scans.length - 1];

  renderGoalBanner(first, latest);
  renderKPIs(first, latest);
  renderTrajectoryChart();
  render3DBodyStudio(first, latest);
  renderScanTable(first);
  updateCalculator();
}

function renderGoalBanner(first, latest) {
  const totalFatToLose = first.fatMass - GOAL.targetFat; // 10.90 kg
  const fatLostSoFar = Math.max(0, first.fatMass - latest.fatMass);
  const weightLostSoFar = Math.max(0, first.weight - latest.weight);
  const pctDone = Math.min(100, Math.max(3, (fatLostSoFar / totalFatToLose) * 100));

  const daysElapsed = Math.max(
    1,
    (new Date(latest.date) - new Date(first.date)) / (1000 * 60 * 60 * 24)
  );
  const dailyFatLossKg = fatLostSoFar / daysElapsed;
  const weeklyFatLossKg = dailyFatLossKg * 7;

  document.getElementById('goal-progress-pct').textContent = `${pctDone.toFixed(1)}% of Fat Goal Complete`;
  document.getElementById('goal-progress-detail').textContent =
    `${fatLostSoFar.toFixed(2)} kg pure fat burned • -${weightLostSoFar.toFixed(2)} kg total weight`;
  document.getElementById('goal-bar-fill').style.width = `${pctDone}%`;
  document.getElementById('banner-now-weight').textContent = `${latest.weight.toFixed(2)} kg (${latest.pbf.toFixed(1)}% BF)`;

  document.getElementById('pace-val').textContent = `-${weeklyFatLossKg.toFixed(2)} kg / wk`;
  document.getElementById('pace-sub').textContent =
    `~${Math.round(dailyFatLossKg * 1000)}g pure fat/day • Muscle % UP to ${latest.skeletalMusclePct.toFixed(1)}%`;
}

function renderKPIs(first, latest) {
  const wDiff = latest.weight - first.weight;
  const fDiff = latest.fatMass - first.fatMass;
  const pbfDiff = latest.pbf - first.pbf;
  const mPctDiff = latest.skeletalMusclePct - first.skeletalMusclePct;
  const trunkFatDiff = latest.segments.trunk.fatKg - first.segments.trunk.fatKg;
  const scoreDiff = latest.fitnessScore - first.fitnessScore;

  const weightDonePct = ((first.weight - latest.weight) / (first.weight - GOAL.targetWeight)) * 100;
  const fatDonePct = ((first.fatMass - latest.fatMass) / (first.fatMass - GOAL.targetFat)) * 100;

  const kpis = [
    {
      label: 'Current Weight',
      value: latest.weight.toFixed(2),
      unit: 'kg',
      delta: `${formatSigned(wDiff, 2, ' kg')} in 4 days`,
      deltaClass: wDiff <= 0 ? 'delta-positive' : 'delta-negative',
      sub: `${(latest.weight - GOAL.targetWeight).toFixed(2)} kg to 82.65 kg goal`,
      ringPct: Math.max(10, weightDonePct),
      ringColor: '#2563eb',
      ringText: `-${Math.abs(wDiff).toFixed(1)}kg`
    },
    {
      label: 'Pure Fat Mass',
      value: latest.fatMass.toFixed(2),
      unit: 'kg',
      delta: `${formatSigned(fDiff, 2, ' kg')} (${formatSigned(pbfDiff, 1, '% BF')})`,
      deltaClass: fDiff <= 0 ? 'delta-positive' : 'delta-negative',
      sub: `Body Fat: ${latest.pbf.toFixed(1)}% (Goal 15.0%)`,
      ringPct: Math.max(10, fatDonePct),
      ringColor: '#f97316',
      ringText: `${latest.pbf.toFixed(1)}%`
    },
    {
      label: 'Skeletal Muscle %',
      value: latest.skeletalMusclePct.toFixed(1),
      unit: '%',
      delta: `${formatSigned(mPctDiff, 1, '%')} All-Time High!`,
      deltaClass: 'delta-positive',
      sub: `${latest.skeletalMuscle.toFixed(1)} kg Muscle • ${latest.lbm.toFixed(1)} kg LBM`,
      ringPct: 88,
      ringColor: '#10b981',
      ringText: `${latest.skeletalMuscle.toFixed(1)}kg`
    },
    {
      label: 'Belly / Trunk Fat',
      value: latest.segments.trunk.fatKg.toFixed(2),
      unit: 'kg',
      delta: `${formatSigned(trunkFatDiff, 2, ' kg')} off waist!`,
      deltaClass: 'delta-positive',
      sub: `55% of all fat lost came from Trunk`,
      ringPct: 72,
      ringColor: '#059669',
      ringText: `-400g`
    },
    {
      label: 'Fitness Score',
      value: latest.fitnessScore.toFixed(1),
      unit: '/100',
      delta: `${formatSigned(scoreDiff, 1, ' pts')} since Nov 2`,
      deltaClass: 'delta-positive',
      sub: `Water: ${latest.bodyWaterPct.toFixed(1)}% • Protein: ${latest.proteinPct.toFixed(1)}%`,
      ringPct: latest.fitnessScore,
      ringColor: '#7c3aed',
      ringText: `${latest.fitnessScore.toFixed(0)}pt`
    }
  ];

  const container = document.getElementById('kpi-grid');
  container.innerHTML = kpis
    .map(
      (k) => `
      <div class="kpi-card">
        <div class="kpi-info">
          <div class="kpi-label">${k.label}</div>
          <div>
            <span class="kpi-value">${k.value}</span>
            <span class="kpi-unit">${k.unit}</span>
          </div>
          <div class="kpi-delta ${k.deltaClass}">${k.delta}</div>
          <div class="kpi-subtext">${k.sub}</div>
        </div>
        ${makeRingSvg(k.ringPct, k.ringColor, k.ringText)}
      </div>
    `
    )
    .join('');
}

function render3DBodyStudio(first, latest) {
  const isMuscle = state.segmentMode === 'muscle';
  const m = state.morphPct / 100; // 0 = current latest scan, 1 = Feb 5 Goal (82.65 kg)

  // Interpolate metrics for the 3D Time-Machine slider!
  const simWeight = latest.weight - m * (latest.weight - GOAL.targetWeight);
  const simPbf = latest.pbf - m * (latest.pbf - GOAL.targetPbf);
  const simMusclePct = latest.skeletalMusclePct + m * (54.8 - latest.skeletalMusclePct);

  // Morph the 3D SVG Waist Width and Six-Pack Definition!
  // At m=0 (today), waist control points are wider (x=78 & x=162); at m=1 (15% BF), sharp V-taper (x=90 & x=150)
  const wOuterL = (78 + m * 13).toFixed(1);
  const wOuterR = (162 - m * 13).toFixed(1);
  const hipL = (84 + m * 8).toFixed(1);
  const hipR = (156 - m * 8).toFixed(1);

  const torsoPath = document.getElementById('torso-3d-path');
  if (torsoPath) {
    torsoPath.setAttribute(
      'd',
      `M 68 72 Q 120 64 172 72 C 178 102, ${wOuterR} 135, ${wOuterR} 165 C ${wOuterR} 184, ${hipR} 202, 154 214 Q 120 224 86 214 C ${hipL} 202, ${wOuterL} 184, ${wOuterL} 165 C ${wOuterL} 135, 62 102, 68 72 Z`
    );
    torsoPath.setAttribute('fill', isMuscle ? 'url(#muscleTorsoGrad)' : 'url(#fatTorsoGrad)');
  }

  const absEl = document.getElementById('abs-definition');
  if (absEl) {
    absEl.setAttribute('opacity', (0.42 + m * 0.55).toFixed(2));
  }

  const captionEl = document.getElementById('mannequin-stage-caption');
  const statusEl = document.getElementById('morph-status-label');
  if (m === 0) {
    captionEl.textContent = `Live Scan (${latest.date}): ${latest.weight.toFixed(2)} kg • ${latest.skeletalMusclePct.toFixed(1)}% Muscle`;
    statusEl.textContent = `Current (${latest.date}): ${latest.weight.toFixed(2)} kg • ${latest.pbf.toFixed(1)}% BF`;
  } else {
    captionEl.textContent = `🔮 Time-Machine Preview (${Math.round(m * 100)}%): ${simWeight.toFixed(1)} kg • ${simMusclePct.toFixed(1)}% Muscle • ${simPbf.toFixed(1)}% BF`;
    statusEl.textContent = `Previewing ${simWeight.toFixed(1)} kg (${simPbf.toFixed(1)}% Athletic BF)`;
  }

  // Build non-overlapping HUD Callouts on Left & Right columns
  function buildCardHtml(segKey, title, isHighlight = false) {
    const cur = latest.segments[segKey];
    const base = first.segments[segKey];

    // Simulated values when dragging Time-Machine slider
    const simFatKg =
      segKey === 'trunk'
        ? cur.fatKg - m * 6.1
        : cur.fatKg - m * (cur.fatKg * 0.42);
    const simMuscKg = cur.muscleKg + m * 0.08;
    const simMuscEval = cur.muscleEval + m * 4.5;

    if (isMuscle) {
      const muscRatioPct = ((simMuscKg / simWeight) * 100).toFixed(1);
      const evalDelta = cur.muscleEval - base.muscleEval;
      return `
        <div class="hud-callout ${isHighlight ? 'trunk-highlight' : ''}">
          <div class="hud-top">
            <span>${title}</span>
            <span class="hud-badge" style="background:var(--emerald-soft);color:var(--emerald);">${simMuscEval.toFixed(1)}% Std</span>
          </div>
          <div class="hud-main-val">
            <span>${simMuscKg.toFixed(2)} kg</span>
            <span class="hud-delta" style="color:var(--emerald);">(${muscRatioPct}% of BW)</span>
          </div>
          <div class="hud-bar">
            <div class="hud-bar-fill" style="width:${Math.min(100, simMuscEval)}%;background:linear-gradient(90deg,#3b82f6,#10b981);"></div>
          </div>
          <div class="hud-sub">
            Strength Rating: <strong>Sufficient (${formatSigned(evalDelta, 1, '%')} vs Nov 2)</strong>
          </div>
        </div>
      `;
    } else {
      const fatDiff = simFatKg - base.fatKg;
      const fatSharePct = ((simFatKg / simWeight) * 100).toFixed(1);
      return `
        <div class="hud-callout ${isHighlight ? 'trunk-highlight' : ''}">
          <div class="hud-top">
            <span>${title}</span>
            <span class="hud-badge" style="background:var(--orange-soft);color:var(--orange);">${fatSharePct}% BW</span>
          </div>
          <div class="hud-main-val">
            <span>${simFatKg.toFixed(2)} kg</span>
            <span class="hud-delta" style="color:var(--emerald);">${formatSigned(fatDiff, 2, ' kg')}</span>
          </div>
          <div class="hud-bar">
            <div class="hud-bar-fill" style="width:${Math.min(100, (simFatKg / (segKey === 'trunk' ? 14 : 4)) * 100)}%;background:linear-gradient(90deg,#f59e0b,#ef4444);"></div>
          </div>
          <div class="hud-sub">
            ${segKey === 'trunk' ? '🔥 #1 Fastest Fat-Burning Zone!' : 'Steady Subcutaneous Burn'}
          </div>
        </div>
      `;
    }
  }

  document.getElementById('callouts-left').innerHTML = [
    buildCardHtml('rightArm', '💪 Right Arm'),
    buildCardHtml('rightLeg', '🦵 Right Leg')
  ].join('');

  document.getElementById('callouts-right').innerHTML = [
    buildCardHtml('trunk', '🎯 Trunk / Core', true),
    buildCardHtml('leftArm', '💪 Left Arm'),
    buildCardHtml('leftLeg', '🦵 Left Leg')
  ].join('');
}

function renderTrajectoryChart() {
  const metricConfig = {
    weight: {
      label: 'Total Weight (kg)',
      unit: ' kg',
      color: '#2563eb',
      gradStart: 'rgba(37, 99, 235, 0.24)',
      gradEnd: 'rgba(37, 99, 235, 0.0)',
      projections: [
        { date: '2026-11-02', val: 93.55, tag: 'Start' },
        { date: '2026-12-01', val: 89.50, tag: 'Sydney' },
        { date: '2026-12-22', val: 88.00, tag: 'Post-Trip' },
        { date: '2027-01-15', val: 85.10, tag: 'Mid-Jan' },
        { date: '2027-02-05', val: 82.65, tag: 'Goal 🎯' }
      ]
    },
    fatMass: {
      label: 'Pure Fat Mass (kg)',
      unit: ' kg',
      color: '#ea580c',
      gradStart: 'rgba(234, 88, 12, 0.24)',
      gradEnd: 'rgba(234, 88, 12, 0.0)',
      projections: [
        { date: '2026-11-02', val: 23.29, tag: 'Start' },
        { date: '2026-12-01', val: 20.10, tag: 'Sydney' },
        { date: '2026-12-22', val: 18.50, tag: 'Post-Trip' },
        { date: '2027-01-15', val: 15.20, tag: 'Mid-Jan' },
        { date: '2027-02-05', val: 12.39, tag: 'Goal 🎯' }
      ]
    },
    pbf: {
      label: 'Body Fat Percentage (%)',
      unit: '%',
      color: '#e11d48',
      gradStart: 'rgba(225, 29, 72, 0.22)',
      gradEnd: 'rgba(225, 29, 72, 0.0)',
      projections: [
        { date: '2026-11-02', val: 24.9, tag: 'Start' },
        { date: '2026-12-01', val: 22.4, tag: 'Sydney' },
        { date: '2026-12-22', val: 21.0, tag: 'Post-Trip' },
        { date: '2027-01-15', val: 17.9, tag: 'Mid-Jan' },
        { date: '2027-02-05', val: 15.0, tag: '15% BF 🎯' }
      ]
    },
    skeletalMusclePct: {
      label: 'Skeletal Muscle Ratio (% of Body Weight)',
      unit: '%',
      color: '#059669',
      gradStart: 'rgba(5, 150, 105, 0.24)',
      gradEnd: 'rgba(5, 150, 105, 0.0)',
      projections: [
        { date: '2026-11-02', val: 48.4, tag: 'Start' },
        { date: '2026-12-01', val: 50.6, tag: 'Sydney' },
        { date: '2026-12-22', val: 51.5, tag: 'Post-Trip' },
        { date: '2027-01-15', val: 53.2, tag: 'Mid-Jan' },
        { date: '2027-02-05', val: 54.8, tag: 'Athletic 🎯' }
      ]
    }
  };

  const cfg = metricConfig[state.chartMetric];
  const startDate = new Date('2026-11-02').getTime();
  const endDate = new Date('2027-02-05').getTime();

  const actualPoints = state.scans.map((s) => ({
    date: s.date,
    t: new Date(s.date).getTime(),
    val: s[state.chartMetric]
  }));

  const projPoints = cfg.projections.map((p) => ({
    ...p,
    t: new Date(p.date).getTime()
  }));

  const allVals = [...actualPoints.map((p) => p.val), ...projPoints.map((p) => p.val)];
  const minVal = Math.floor(Math.min(...allVals) - 1.5);
  const maxVal = Math.ceil(Math.max(...allVals) + 1.5);

  const W = 720;
  const H = 320;
  const padL = 52;
  const padR = 36;
  const padT = 32;
  const padB = 46;

  const xOf = (t) => padL + ((t - startDate) / (endDate - startDate)) * (W - padL - padR);
  const yOf = (v) => padT + (1 - (v - minVal) / (maxVal - minVal || 1)) * (H - padT - padB);

  let gridSvg = '';
  for (let i = 0; i <= 4; i++) {
    const val = minVal + ((maxVal - minVal) * i) / 4;
    const y = yOf(val);
    gridSvg += `
      <line x1="${padL}" y1="${y}" x2="${W - padR}" y2="${y}" stroke="#e2e8f0" stroke-dasharray="4 4"/>
      <text x="${padL - 10}" y="${y + 4}" text-anchor="end" fill="#64748b" font-size="11" font-weight="700">${val.toFixed(1)}</text>
    `;
  }

  // Highlight Dec 1–22 Trip Zone
  const tripStartX = xOf(new Date('2026-12-01').getTime());
  const tripEndX = xOf(new Date('2026-12-22').getTime());
  const tripBandSvg = `
    <rect x="${tripStartX}" y="${padT}" width="${tripEndX - tripStartX}" height="${H - padT - padB}"
      fill="rgba(124, 58, 237, 0.07)" stroke="rgba(124, 58, 237, 0.28)" stroke-dasharray="4 4" rx="10" />
    <text x="${(tripStartX + tripEndX) / 2}" y="${padT + 16}" text-anchor="middle" fill="#7c3aed" font-size="10.5" font-weight="800">
      ✈️ NeurIPS + NZ + Reef (3 Wks)
    </text>
  `;

  // Projected Path + Area
  const projPath = projPoints
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${xOf(p.t).toFixed(1)} ${yOf(p.val).toFixed(1)}`)
    .join(' ');

  const projArea = `${projPath} L ${xOf(projPoints[projPoints.length - 1].t).toFixed(1)} ${H - padB} L ${xOf(projPoints[0].t).toFixed(1)} ${H - padB} Z`;

  // Actual Path
  const actualPath = actualPoints
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${xOf(p.t).toFixed(1)} ${yOf(p.val).toFixed(1)}`)
    .join(' ');

  const projDots = projPoints
    .map(
      (p, i) => `
      <circle cx="${xOf(p.t)}" cy="${yOf(p.val)}" r="4.5" fill="#ffffff" stroke="#94a3b8" stroke-width="2.2"/>
      <text x="${xOf(p.t)}" y="${H - 14}" text-anchor="middle" fill="#64748b" font-size="10.5" font-weight="700">${p.date.slice(5)} (${p.tag})</text>
      ${
        i > 0
          ? `<text x="${xOf(p.t)}" y="${yOf(p.val) - 10}" text-anchor="middle" fill="#64748b" font-size="10.5" font-weight="700">${p.val}${cfg.unit}</text>`
          : ''
      }
    `
    )
    .join('');

  // Render Actual Scan Dots + Leader-Line Callout Pills (Only First & Latest labeled cleanly to guarantee ZERO overlap!)
  const firstPt = actualPoints[0];
  const latestPt = actualPoints[actualPoints.length - 1];

  const actualDots = actualPoints
    .map(
      (p) => `
      <circle cx="${xOf(p.t)}" cy="${yOf(p.val)}" r="6" fill="${cfg.color}" stroke="#ffffff" stroke-width="2.5"/>
    `
    )
    .join('');

  const calloutBadges = `
    <!-- Latest Scan Callout Pill -->
    <g transform="translate(${xOf(latestPt.t) + 14}, ${yOf(latestPt.val) - 12})">
      <rect x="0" y="0" width="128" height="24" rx="8" fill="${cfg.color}" />
      <text x="64" y="16" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="800">
        ${latestPt.date.slice(5)}: ${latestPt.val}${cfg.unit}
      </text>
    </g>
  `;

  const svg = `
    <svg viewBox="0 0 ${W} ${H}" width="100%" height="100%">
      <defs>
        <linearGradient id="chartAreaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="${cfg.gradStart}" />
          <stop offset="100%" stop-color="${cfg.gradEnd}" />
        </linearGradient>
      </defs>
      ${gridSvg}
      ${tripBandSvg}
      <path d="${projArea}" fill="url(#chartAreaGrad)" />
      <path d="${projPath}" fill="none" stroke="#94a3b8" stroke-width="2.2" stroke-dasharray="6 5"/>
      <path d="${actualPath}" fill="none" stroke="${cfg.color}" stroke-width="4" stroke-linecap="round"/>
      ${projDots}
      ${actualDots}
      ${calloutBadges}
    </svg>
  `;

  document.getElementById('trajectory-chart').innerHTML = svg;
}

function renderScanTable(first) {
  const tbody = document.getElementById('scan-table-body');
  tbody.innerHTML = state.scans
    .slice()
    .reverse()
    .map((s) => {
      const wDelta = s.weight - first.weight;
      const fDelta = s.fatMass - first.fatMass;
      const mPctDelta = s.skeletalMusclePct - first.skeletalMusclePct;
      return `
        <tr>
          <td><strong>${s.date}</strong> <span style="color:var(--text-muted);font-size:0.76rem;font-weight:600;">${s.time || ''}</span></td>
          <td><strong>${s.weight.toFixed(2)} kg</strong> <span class="kpi-delta ${wDelta <= 0 ? 'delta-positive' : 'delta-negative'}" style="margin:0 0 0 4px;">${formatSigned(wDelta, 2)}</span></td>
          <td><strong>${s.fatMass.toFixed(2)} kg</strong> <span class="kpi-delta ${fDelta <= 0 ? 'delta-positive' : 'delta-negative'}" style="margin:0 0 0 4px;">${formatSigned(fDelta, 2)}</span></td>
          <td><strong>${s.pbf.toFixed(1)}%</strong></td>
          <td><strong>${s.skeletalMuscle.toFixed(1)} kg</strong></td>
          <td><span class="kpi-delta delta-positive" style="margin:0;">${s.skeletalMusclePct.toFixed(1)}% (${formatSigned(mPctDelta, 1, '%')})</span></td>
          <td><strong>${s.segments.trunk.fatKg.toFixed(2)} kg</strong></td>
          <td>${s.bodyWater.toFixed(1)} L (${s.bodyWaterPct.toFixed(1)}%)</td>
          <td><strong style="color:var(--blue);">${s.fitnessScore.toFixed(1)} / 100</strong></td>
        </tr>
      `;
    })
    .join('');
}

function updateCalculator() {
  const dayType = document.getElementById('calc-day-type').value;
  const watchKcal = Number(document.getElementById('calc-watch-kcal').value) || 0;
  const intakeKcal = Number(document.getElementById('calc-intake-kcal').value) || 1800;

  const baseBurnMap = {
    wfh: 2220,
    office: 2500,
    travel: 2650
  };

  const baseBurn = baseBurnMap[dayType] || 2220;
  const realWorkoutBurn = Math.round(watchKcal * 0.7);
  const totalTDEE = baseBurn + realWorkoutBurn;
  const deficit = totalTDEE - intakeKcal;
  const fatBurnedGrams = Math.round((deficit / 7700) * 1000);

  document.getElementById('watch-adjusted-val').textContent = `${realWorkoutBurn} kcal (70% of ${watchKcal})`;
  document.getElementById('calc-tdee-val').textContent = `${totalTDEE} kcal`;
  document.getElementById('calc-deficit-val').textContent =
    deficit >= 0 ? `-${deficit} kcal Deficit` : `+${Math.abs(deficit)} kcal Surplus`;
  document.getElementById('calc-fat-grams').textContent =
    deficit >= 0 ? `≈ ${fatBurnedGrams}g pure fat burned today` : `Above maintenance`;

  const adviceEl = document.getElementById('calc-sleep-advice');
  if (deficit > 950) {
    adviceEl.innerHTML = `⚠️ <strong>High Deficit Alert (${deficit} kcal):</strong> Eat an extra <strong>150–200 kcal (40g carbs)</strong> 1 hour before bed tonight so your liver glycogen doesn't run out after 6 hours of sleep!`;
    adviceEl.style.color = '#d97706';
  } else {
    adviceEl.innerHTML = `✅ <strong>Sweet-Spot Deficit:</strong> Save ~35–40g of your daily carbs for dinner/pre-bed to guarantee 7.5–8h of deep sleep and full muscle recovery.`;
    adviceEl.style.color = '#059669';
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
      render3DBodyStudio(state.scans[0], state.scans[state.scans.length - 1]);
    });
  });

  // 3D Time-Machine Morph Slider
  const morphSlider = document.getElementById('morph-slider');
  if (morphSlider) {
    morphSlider.addEventListener('input', () => {
      state.morphPct = Number(morphSlider.value) || 0;
      render3DBodyStudio(state.scans[0], state.scans[state.scans.length - 1]);
    });
  }

  // Interactive 3D Tilt on the Human Studio Stage
  const stage = document.getElementById('human-3d-stage');
  const rotator = document.getElementById('mannequin-rotator');
  if (stage && rotator) {
    stage.addEventListener('mousemove', (e) => {
      const rect = stage.getBoundingClientRect();
      const xRel = (e.clientX - rect.left) / rect.width - 0.5;
      const yRel = (e.clientY - rect.top) / rect.height - 0.5;
      rotator.style.transform = `rotateY(${(xRel * 24).toFixed(1)}deg) rotateX(${(-yRel * 12).toFixed(1)}deg) scale(1.02)`;
    });
    stage.addEventListener('mouseleave', () => {
      rotator.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1)';
    });
  }

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
        shareBtn.textContent = '✅ Link Copied!';
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
    if (window.location.search.includes('auth=')) {
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }

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

/* ============================================================
   app.js — Kabadiwala Connect Prototype
   Main application logic, routing, and screen management
   ============================================================ */

'use strict';

// ─── APP STATE ────────────────────────────────────────────
const APP = {
  lang:       'hi',
  role:       'collector',       // 'collector' | 'recycler' | 'data'
  online:     true,
  fastMode:   false,
  onboarded:  false,
  currentScreen: 'home',
  currentLot: null,
  selectedMaterial: null,
  selectedRecycler: null,
  offlineQueue: [],
  navHistory: [],
  activeWorkflowStep: 0,

  // Timing helpers
  delay: (ms) => new Promise(r => setTimeout(r, APP.fastMode ? Math.min(ms, 200) : ms)),

  // Translation helper
  t: (key) => KC_I18N.t(key, APP.lang),

  // Save state
  save: () => {
    try {
      localStorage.setItem('kc_state', JSON.stringify({
        lang:      APP.lang,
        role:      APP.role,
        onboarded: APP.onboarded,
        lots:      KC_DATA.lots,
        collector: KC_DATA.collector,
        offlineQueue: APP.offlineQueue,
      }));
    } catch(e) {}
  },

  // Load state
  load: () => {
    try {
      const raw = localStorage.getItem('kc_state');
      if (!raw) return;
      const s = JSON.parse(raw);
      APP.lang      = s.lang      || 'hi';
      APP.onboarded = s.onboarded || false;
      APP.offlineQueue = s.offlineQueue || [];
      if (s.lots)      KC_DATA.lots      = s.lots;
      if (s.collector) KC_DATA.collector = s.collector;
    } catch(e) {}
  },
};

// ─── UTILITY ──────────────────────────────────────────────
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const el = (tag, cls, html = '') => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html) e.innerHTML = html;
  return e;
};
const fmt = (n) => '₹' + Number(n).toLocaleString('en-IN', { minimumFractionDigits: 0, maximumFractionDigits: 2 });

// Generate unique IDs
const genLotId  = () => 'LOT-KC-' + (10296 + KC_DATA.lots.length);
const genHndId  = () => 'HND-KC-' + Math.floor(80000 + Math.random() * 9999);
const genPayId  = () => 'PAY-KC-' + Math.floor(20000 + Math.random() * 9999);

// Timestamp
const now = () => {
  const d = new Date();
  return d.toLocaleDateString('en-IN', { day:'2-digit', month:'short', year:'numeric' }) + ', ' +
         d.toLocaleTimeString('en-IN', { hour:'2-digit', minute:'2-digit', hour12:true });
};

// ─── STATUS BAR ───────────────────────────────────────────
function updateStatusBar() {
  const timeEl = $('#status-time');
  const connEl = $('#status-conn');
  if (timeEl) {
    const d = new Date();
    timeEl.textContent = d.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: false });
  }
  if (connEl) {
    connEl.innerHTML = APP.online ? KC_ICONS.wifi(16) : KC_ICONS.wifiOff(16);
  }
}
setInterval(updateStatusBar, 10000);

// ─── VOICE ────────────────────────────────────────────────
function speak(text) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(text);
  // Prefer a voice matching the selected language when available.
  const langTag = APP.lang === 'hi' ? 'hi' : APP.lang === 'mr' ? 'mr' : 'en';
  utt.lang = langTag + '-IN';
  utt.rate = 0.9;

  const selectVoiceAndSpeak = () => {
    const voices = window.speechSynthesis.getVoices() || [];
    // Try to find a voice whose lang starts with the language tag (hi, mr, en)
    let voice = voices.find(v => v.lang && v.lang.toLowerCase().startsWith(langTag));
    // Fallback: try to find a voice with language-region match
    if (!voice) voice = voices.find(v => v.lang && v.lang.toLowerCase().includes(langTag));
    // If Marathi requested but no Marathi voice, fallback to Hindi then English
    if (!voice && langTag === 'mr') {
      voice = voices.find(v => v.lang && v.lang.toLowerCase().startsWith('hi')) ||
              voices.find(v => v.lang && v.lang.toLowerCase().includes('hi'));
    }
    // Final fallback: use first available voice
    if (!voice && voices.length) voice = voices[0];
    if (voice) utt.voice = voice;
    window.speechSynthesis.speak(utt);
  };

  // Voices may load asynchronously
  if (window.speechSynthesis.getVoices().length === 0) {
    window.speechSynthesis.addEventListener('voiceschanged', function onv() {
      window.speechSynthesis.removeEventListener('voiceschanged', onv);
      selectVoiceAndSpeak();
    });
  } else {
    selectVoiceAndSpeak();
  }
}

function speakBtn(key, btnEl) {
  speak(APP.t(key));
  if (btnEl) {
    btnEl.classList.add('speaking');
    setTimeout(() => btnEl.classList.remove('speaking'), 3000);
  }
}

// ─── SCREEN ROUTER ────────────────────────────────────────
function showScreen(id, pushHistory = true) {
  $$('.screen').forEach(s => s.classList.remove('active'));
  const scr = $('#screen-' + id);
  if (!scr) { console.warn('Screen not found:', id); return; }
  scr.classList.add('active');
  APP.currentScreen = id;

  // Scroll to top
  const vp = $('#app-viewport');
  if (vp) vp.scrollTop = 0;

  // Push history
  if (pushHistory) APP.navHistory.push(id);

  // Update bottom nav active state
  updateNav(id);

  // Update workflow step panel
  updateWorkflowPanel(id);

  APP.save();
}

function goBack() {
  APP.navHistory.pop();
  const prev = APP.navHistory[APP.navHistory.length - 1] || 'home';
  showScreen(prev, false);
}

function updateNav(id) {
  const navMap = { home: 0, sell_select: 1, prices: 2, earnings: 3, more: 4 };
  $$('.nav-item').forEach((n, i) => {
    n.classList.toggle('active', navMap[id] === i);
  });
}

// ─── BOTTOM NAV ───────────────────────────────────────────
function initNav() {
  const navItems = $$('.nav-item');
  const screens  = ['home', 'sell_select', 'prices', 'earnings', 'more'];
  navItems.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      APP.navHistory = [];
      showScreen(screens[i]);
    });
  });
}

// ─── CONNECTIVITY TOGGLE ──────────────────────────────────
function toggleOnline() {
  APP.online = !APP.online;
  updateConnectivityUI();
  if (APP.online && APP.offlineQueue.length > 0) {
    showSyncDialog();
  }
}

function updateConnectivityUI() {
  const indicator = $('#connectivity-indicator');
  const offBanner = $('#offline-banner');
  if (indicator) {
    indicator.className = 'connectivity-indicator' + (APP.online ? '' : ' offline');
    indicator.innerHTML = APP.online
      ? '<span class="status-dot green"></span> Synced'
      : '<span class="status-dot orange"></span> Offline';
  }
  if (offBanner) {
    offBanner.style.display = APP.online ? 'none' : 'flex';
  }
  updateStatusBar();
}

// ─── SYNC DIALOG ──────────────────────────────────────────
async function showSyncDialog() {
  const overlay = $('#sync-overlay');
  if (!overlay) return;
  overlay.classList.add('visible');

  const steps = overlay.querySelectorAll('.sync-step');
  steps.forEach(s => s.className = 'sync-step');

  await APP.delay(600);
  steps[0].classList.add('active');
  await APP.delay(800);
  steps[0].classList.remove('active'); steps[0].classList.add('done');
  steps[1].classList.add('active');
  await APP.delay(700);
  steps[1].classList.remove('active'); steps[1].classList.add('done');
  steps[2].classList.add('active');
  await APP.delay(600);
  steps[2].classList.remove('active'); steps[2].classList.add('done');

  APP.offlineQueue = [];
  APP.save();

  await APP.delay(800);
  overlay.classList.remove('visible');
}

// ─── WORKFLOW PANEL ────────────────────────────────────────
const WORKFLOW_STEPS = [
  { id: 'home',            label_en: 'Home',               label_hi: 'होम' },
  { id: 'sell_select',     label_en: 'Select Material',     label_hi: 'सामग्री चुनें' },
  { id: 'camera',          label_en: 'AI Material Detection', label_hi: 'AI पहचान' },
  { id: 'lot_create',      label_en: 'Create LOT',          label_hi: 'LOT बनाएं' },
  { id: 'price_intel',     label_en: 'Fair Price Discovery', label_hi: 'सही भाव' },
  { id: 'recycler_match',  label_en: 'Recycler Matching',   label_hi: 'Recycler खोजें' },
  { id: 'handover_book',   label_en: 'Book Handover',       label_hi: 'Handover बुक करें' },
  { id: 'handover_digital',label_en: 'Digital Handover',    label_hi: 'Digital Handover' },
  { id: 'payment',         label_en: 'Payment',             label_hi: 'भुगतान' },
  { id: 'earnings',        label_en: 'Earnings',            label_hi: 'कमाई' },
  { id: 'traceability',    label_en: 'Traceability',        label_hi: 'Traceability' },
];

function updateWorkflowPanel(screenId) {
  const panel = $('#workflow-steps');
  if (!panel) return;
  const idx = WORKFLOW_STEPS.findIndex(s => s.id === screenId);
  $$('.workflow-steps li').forEach((li, i) => {
    li.classList.toggle('active', i === idx);
  });
}

// ─── LANGUAGE SWITCHER ─────────────────────────────────────
function applyLanguage(lang) {
  APP.lang = lang;
  document.documentElement.lang = lang === 'hi' ? 'hi' : lang === 'mr' ? 'mr' : 'en';

  // Update all elements with data-i18n
  $$('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const translated = APP.t(key);
    // Preserve element children (icons, inline elements) and replace text only.
    const preserved = [];
    Array.from(el.childNodes).forEach(n => { if (n.nodeType === Node.ELEMENT_NODE) preserved.push(n); });
    // Clear content and re-append preserved children, then append the translated text node.
    el.innerHTML = '';
    preserved.forEach(n => el.appendChild(n));
    // Ensure a space before text when there's an inline icon
    const textNode = document.createTextNode((preserved.length ? ' ' : '') + translated);
    el.appendChild(textNode);
  });

  // Update nav labels
  const navKeys = ['nav_home','nav_sell','nav_prices','nav_earnings','nav_more'];
  $$('.nav-label').forEach((l, i) => { l.textContent = APP.t(navKeys[i]); });

  // Lang toggle highlight
  $$('.lang-btn').forEach(b => {
    b.classList.toggle('selected', b.dataset.lang === lang);
  });

  // Re-run icon injection in case any icon spans were removed/changed.
  if (typeof initIcons === 'function') initIcons();

  APP.save();
}

// ─── ONBOARDING ────────────────────────────────────────────
function initOnboarding() {
  // Combined Onboarding Screen
  const obLangSelect = $('#onboard-lang-select');
  if (obLangSelect) {
    // reflect current language in select
    obLangSelect.value = APP.lang || 'hi';
    obLangSelect.addEventListener('change', (e) => {
      applyLanguage(e.target.value);
      renderHome();
      renderPrices();
      renderSafety();
    });
  }
  const startBtn = $('#btn-start');
  if (startBtn) startBtn.addEventListener('click', () => showScreen('onboard_profile'));
  
  // Screen 3: Profile
  const profileBtn = $('#btn-profile-next');
  if (profileBtn) profileBtn.addEventListener('click', () => {
    const cid = $('#inp-collector-id');
    const area = $('#inp-area');
    if (cid && cid.value) KC_DATA.collector.id = cid.value;
    if (area && area.value) KC_DATA.collector.location = area.value;
    APP.onboarded = true;
    APP.save();
    showScreen('home');
  });
}

// ─── HOME SCREEN ───────────────────────────────────────────
function renderHome() {
  const mat = KC_DATA.getMaterial('PCB');
  const priceEl = $('#home-pcb-price');
  if (priceEl) priceEl.textContent = `PCB ${fmt(mat.avgPrice)}/kg`;

  const lotsEl = $('#home-lots-count');
  if (lotsEl) lotsEl.textContent = KC_DATA.lots.filter(l => l.status !== 'completed').length + ' active lots';

  const earnEl = $('#home-earnings');
  if (earnEl) earnEl.textContent = fmt(KC_DATA.collector.monthlyEarnings);

  const greetEl = $('#home-greeting');
  if (greetEl) greetEl.textContent = APP.t('home_greeting');
  const questionEl = $('#home-question');
  if (questionEl) questionEl.textContent = APP.t('home_question');

  // Notification badge
  const unread = KC_DATA.notifications.filter(n => !n.read).length;
  const badge = $('#notif-badge');
  if (badge) badge.style.display = unread > 0 ? 'grid' : 'none';

  // Bind cards
  $('#card-sell')?.addEventListener('click', () => showScreen('sell_select'));
  $('#card-price')?.addEventListener('click', () => showScreen('prices'));
  $('#card-lots')?.addEventListener('click', () => showScreen('my_lots'));
  $('#card-earnings')?.addEventListener('click', () => showScreen('earnings'));
  $('#card-safety')?.addEventListener('click', () => showScreen('safety'));

  // Safety speak btn
  $('#home-speak')?.addEventListener('click', (e) => speakBtn('voice_cable_safe', e.currentTarget));
}

// ─── SELL FLOW — SELECT MATERIAL ───────────────────────────
function renderSellSelect() {
  const grid = $('#material-grid');
  if (!grid) return;
  grid.innerHTML = '';

  // Photo-identify card
  const photoCard = el('div', 'material-card photo-card');
  photoCard.innerHTML = `
    <div class="camera-icon-wrap">${KC_ICONS.camera(30)}</div>
    <div class="mat-text">
      <div class="mat-name-hi" data-i18n="sell_photo_btn">${APP.t('sell_photo_btn')}</div>
      <div class="mat-name-en">AI Classification</div>
    </div>
    <div class="mat-arrow">${KC_ICONS.chevronRight(20)}</div>
  `;
  photoCard.addEventListener('click', () => {
    APP.selectedMaterial = null;
    showScreen('camera');
  });
  grid.appendChild(photoCard);

  // Material cards
  KC_DATA.materials.forEach(mat => {
    const card = el('div', 'material-card');
    card.innerHTML = `
      <div class="mat-img-wrap">
        <img src="${mat.image}" class="mat-img" alt="${mat.nameEn}" onload="this.parentElement.classList.add('loaded')">
      </div>
      <div class="mat-text">
        <div class="mat-name-hi">${APP.lang === 'mr' ? mat.nameMr : APP.lang === 'en' ? mat.nameEn : mat.nameHi}</div>
        <div class="mat-name-en">${mat.nameEn}</div>
        <div class="mat-price">${fmt(mat.avgPrice)}/kg</div>
      </div>
      <div class="mat-arrow">${KC_ICONS.chevronRight(20)}</div>
    `;
    card.addEventListener('click', () => {
      APP.selectedMaterial = mat;
      showScreen('lot_create');
      renderLotCreate();
    });
    grid.appendChild(card);
  });
}

// ─── CAMERA / AI CLASSIFICATION ───────────────────────────
function renderCamera() {
  const capBtn = $('#btn-capture');
  const cameraArea = $('#camera-area');
  const aiOverlay = $('#ai-overlay');
  const aiResult = $('#ai-result');

  if (!capBtn) return;

  // Reset
  if (cameraArea) cameraArea.querySelector('.scan-line')?.remove();
  if (aiOverlay) aiOverlay.style.display = 'none';
  if (aiResult) aiResult.style.display = 'none';
  capBtn.style.display = 'block';

  capBtn.onclick = async () => {
    capBtn.style.display = 'none';

    // Show captured frame
    if (cameraArea) {
      const captured = el('div', 'material-captured');
      captured.style.overflow = 'hidden';
      captured.innerHTML = `<img src="${KC_DATA.materials[0].image}" style="width:100%;height:100%;object-fit:cover">`;
      cameraArea.innerHTML = '';
      cameraArea.appendChild(captured);
    }

    // AI overlay
    if (aiOverlay) {
      aiOverlay.style.display = 'flex';
      const scanLine = el('div', 'scan-line');
      aiOverlay.before(scanLine);
    }

    await APP.delay(1800);
    if (aiOverlay) aiOverlay.style.display = 'none';

    if (aiResult) {
      aiResult.style.display = 'block';
      aiResult.classList.add('slide-up');
    }

    // Bind result buttons (camera screen overlay)
    $('#btn-ai-confirm-cam')?.addEventListener('click', () => {
      APP.selectedMaterial = KC_DATA.getMaterial('PCB');
      // Show the proper AI result screen
      renderLotResult();
      showScreen('lot_result');
    }, { once: true });

    $('#btn-ai-change-cam')?.addEventListener('click', () => {
      showScreen('sell_select');
    }, { once: true });
  };
}

// ─── LOT CREATE ───────────────────────────────────────────
function renderLotCreate() {
  const mat = APP.selectedMaterial || KC_DATA.getMaterial('PCB');
  APP.selectedMaterial = mat;

  const matIconWrap = $('#lot-mat-img-wrap'); if (matIconWrap) matIconWrap.innerHTML = `<img src="${mat.image}" style="width:100%;height:100%;object-fit:cover">`;
  const matPhoto = $('#lot-captured-photo'); if (matPhoto) matPhoto.innerHTML = `<img src="${mat.image}" style="width:100%;height:100%;object-fit:cover">`;
  const matName = $('#lot-mat-name'); if (matName) matName.textContent = mat.code + ' — ' + mat.nameEn;

  const btn = $('#btn-create-lot');
  if (!btn) return;

  btn.onclick = async () => {
    const weight = parseFloat($('#inp-weight')?.value || 25);
    const condition = $('#inp-condition')?.value || 'Mixed';
    const source    = $('#inp-source')?.value    || 'Scrap Collection';

    if (!weight || weight <= 0) {
      alert('Please enter a valid weight.');
      return;
    }

    btn.disabled = true;
    btn.textContent = '...';

    await APP.delay(800);

    const newLot = {
      id: genLotId(),
      material: mat.code,
      weight: weight,
      finalWeight: null,
      condition, source,
      location: KC_DATA.collector.location,
      collectedAt: now(),
      status: APP.online ? 'price_discovered' : 'offline',
      recyclerId: null,
      recyclerName: null,
      quotedPrice: null,
      finalPrice: null,
      finalSale: null,
      handoverId: null,
      paymentRef: null,
      paymentMethod: null,
      paymentStatus: null,
      aiConfidence: Math.floor(85 + Math.random() * 14),
      fairValue: KC_DATA.calcFairValue(mat.code, weight),
      fairRange: [Math.round(mat.range[0] * weight), Math.round(mat.range[1] * weight)],
      fairScore: 90 + Math.floor(Math.random() * 8),
      handoverAt: null,
    };

    if (!APP.online) {
      APP.offlineQueue.push(newLot);
      newLot.status = 'offline';
    }

    KC_DATA.lots.unshift(newLot);
    APP.currentLot = newLot;
    APP.save();

    btn.disabled = false;
    btn.textContent = APP.t('lot_btn');

    renderFairValue();
    showScreen('fair_value');
  };
}

// ─── LOT RESULT ───────────────────────────────────────────
function renderLotResult() {
  if (!APP.selectedMaterial) return;
  const mat = APP.selectedMaterial;
  const imgEl = $('#res-img');
  const title = $('#res-title');
  const desc  = $('#res-desc');
  const cat   = $('#res-category');
  const avg   = $('#res-avg-price');

  if(imgEl) imgEl.style.backgroundImage = `url(${mat.image})`;
  if(title) title.textContent = `${mat.code} Identified`;
  if(desc)  desc.textContent  = mat.nameEn;
  if(cat)   cat.textContent   = mat.category;
  if(avg)   avg.textContent   = `₹${mat.avgPrice}/kg`;

  // Wire up Confirm/Change buttons in this screen
  const confirmBtn = $('#btn-ai-confirm');
  const changeBtn  = $('#btn-ai-change');
  if (confirmBtn) {
    confirmBtn.onclick = () => {
      showScreen('lot_create');
      renderLotCreate();
    };
  }
  if (changeBtn) {
    changeBtn.onclick = () => {
      showScreen('sell_select');
      renderSellSelect();
    };
  }

  // Re-inject icons inside this screen so the new data-icon spans render
  $$('#screen-lot_result [data-icon]').forEach(el => {
    const name = el.dataset.icon;
    const size = el.dataset.iconSize || 24;
    if (KC_ICONS[name]) el.innerHTML = KC_ICONS[name](size);
  });
}

function setIfExists(sel, val) {
  const e = $(sel);
  if (e) {
    if (typeof val === 'string' && val.includes('<svg')) {
      e.innerHTML = val;
    } else {
      e.textContent = val;
    }
  }
}

// ─── PRICE INTELLIGENCE ───────────────────────────────────
function renderPriceIntel() {
  const lot = APP.currentLot;
  const mat = lot ? KC_DATA.getMaterial(lot.material) : KC_DATA.getMaterial('PCB');
  if (!mat) return;

  setIfExists('#pi-material', mat.icon + ' ' + mat.code);
  setIfExists('#pi-location', KC_DATA.collector.location);
  setIfExists('#pi-low',  fmt(mat.range[0]) + '/kg');
  setIfExists('#pi-avg',  fmt(mat.avgPrice) + '/kg');
  setIfExists('#pi-high', fmt(mat.range[1]) + '/kg');
  setIfExists('#pi-trend', '↑ ' + mat.trendPct + '% vs 30-day avg');

  // Draw chart
  drawPriceChart('#pi-chart', KC_DATA.pcbPriceHistory);

  // Update range bar
  const fill = $('#price-range-fill');
  const marker = $('#price-marker');
  if (fill && marker) {
    const pct = ((mat.avgPrice - mat.range[0]) / (mat.range[1] - mat.range[0])) * 100;
    fill.style.width = pct + '%';
    marker.style.left = pct + '%';
  }

  // Speak button
  $('#btn-speak-price')?.addEventListener('click', (e) => speakBtn('voice_price', e.currentTarget));

  // Fair value button
  $('#btn-fair-value')?.addEventListener('click', () => {
    renderFairValue();
    showScreen('fair_value');
  });
}

// ─── MINI CHART ───────────────────────────────────────────
function drawPriceChart(selector, data) {
  const wrap = $(selector);
  if (!wrap) return;

  const canvas = wrap.querySelector('canvas') || document.createElement('canvas');
  if (!wrap.contains(canvas)) wrap.appendChild(canvas);
  canvas.width  = wrap.offsetWidth  || 340;
  canvas.height = 130;

  const ctx = canvas.getContext('2d');
  const prices = data.map(d => d.price);
  const minP = Math.min(...prices) - 3;
  const maxP = Math.max(...prices) + 3;
  const W = canvas.width, H = canvas.height;
  const pad = { l: 30, r: 10, t: 10, b: 20 };
  const chartW = W - pad.l - pad.r;
  const chartH = H - pad.t - pad.b;

  ctx.clearRect(0, 0, W, H);

  // Gradient fill
  const grad = ctx.createLinearGradient(0, pad.t, 0, H - pad.b);
  grad.addColorStop(0, 'rgba(26,107,60,.35)');
  grad.addColorStop(1, 'rgba(26,107,60,0)');

  const toX = (i) => pad.l + (i / (data.length - 1)) * chartW;
  const toY = (p) => pad.t + chartH - ((p - minP) / (maxP - minP)) * chartH;

  // Fill path
  ctx.beginPath();
  ctx.moveTo(toX(0), toY(prices[0]));
  data.forEach((d, i) => { if (i > 0) ctx.lineTo(toX(i), toY(d.price)); });
  ctx.lineTo(toX(data.length - 1), H - pad.b);
  ctx.lineTo(toX(0), H - pad.b);
  ctx.closePath();
  ctx.fillStyle = grad;
  ctx.fill();

  // Line
  ctx.beginPath();
  ctx.moveTo(toX(0), toY(prices[0]));
  data.forEach((d, i) => { if (i > 0) ctx.lineTo(toX(i), toY(d.price)); });
  ctx.strokeStyle = '#1A6B3C';
  ctx.lineWidth = 2.5;
  ctx.stroke();

  // Dots
  data.forEach((d, i) => {
    ctx.beginPath();
    ctx.arc(toX(i), toY(d.price), 3, 0, Math.PI * 2);
    ctx.fillStyle = '#1A6B3C';
    ctx.fill();
  });

  // Y labels
  ctx.fillStyle = '#74777F';
  ctx.font = '10px Noto Sans, sans-serif';
  ctx.textAlign = 'right';
  [minP, Math.round((minP + maxP) / 2), maxP].forEach(p => {
    ctx.fillText('₹' + p, pad.l - 3, toY(p) + 4);
  });

  // X labels
  ctx.textAlign = 'center';
  ctx.fillText('Day 1', toX(0), H - 4);
  ctx.fillText('Day 15', toX(Math.floor(data.length / 2)), H - 4);
  ctx.fillText('Today', toX(data.length - 1), H - 4);
}

// ─── FAIR VALUE ───────────────────────────────────────────
function renderFairValue() {
  const lot = APP.currentLot || KC_DATA.lots[0];
  const mat = KC_DATA.getMaterial(lot.material);
  if (!mat) return;

  setIfExists('#fv-material', mat.icon + ' ' + lot.material);
  setIfExists('#fv-weight',   lot.weight + ' kg');
  setIfExists('#fv-avg',      fmt(mat.avgPrice) + '/kg');
  setIfExists('#fv-trend',    '+' + mat.trendPct + '%');
  setIfExists('#fv-offers',   fmt(mat.range[0]) + '–' + fmt(mat.range[1]) + '/kg');
  setIfExists('#fv-value',    fmt(lot.fairValue));
  setIfExists('#fv-range',    fmt(lot.fairRange[0]) + ' – ' + fmt(lot.fairRange[1]));
  setIfExists('#fv-score',    lot.fairScore);

  // Fairness circle
  const circle = $('#fv-fairness-circle');
  if (circle) circle.style.setProperty('--score', lot.fairScore);

  $('#btn-find-recycler')?.addEventListener('click', () => {
    renderRecyclerMatch();
    showScreen('recycler_match');
  }, { once: true });
}

// ─── RECYCLER MATCHING ────────────────────────────────────
function renderRecyclerMatch() {
  const lot = APP.currentLot || KC_DATA.lots[0];
  const container = $('#recycler-list');
  if (!container) return;
  container.innerHTML = '';

  const verified   = KC_DATA.recyclers.filter(r => r.verified && r.materials.includes(lot.material));
  const unverified = KC_DATA.recyclers.filter(r => !r.verified);

  // Sort by score
  verified.sort((a, b) => KC_DATA.scoreRecycler(b, lot.material) - KC_DATA.scoreRecycler(a, lot.material));

  [...verified, ...unverified].forEach(rec => {
    const score = KC_DATA.scoreRecycler(rec, lot.material);
    const card  = buildRecyclerCard(rec, lot, score);
    container.appendChild(card);
  });
}

function buildRecyclerCard(rec, lot, score) {
  const card = el('div', 'recycler-card' + (rec.highlight ? ' recommended' : '') + (!rec.verified ? ' not-verified' : ''));

  const offer = rec.rates[lot.material] || 0;
  const total = offer * lot.weight;
  const fairnessScore = KC_DATA.fairnessScore(offer, lot.material);
  const mat = KC_DATA.getMaterial(lot.material);

  card.innerHTML = `
    <div class="rec-header">
      <div class="rec-avatar">${KC_ICONS.recycle(26)}</div>
      <div>
        <div class="rec-name">${rec.name}</div>
        <div class="rec-dist"><span style="display:inline-flex;margin-right:4px">${KC_ICONS.mapPin(14)}</span> ${rec.distance} km away</div>
      </div>
      ${rec.verified
        ? `<div class="rec-badge">${score}% Match</div>`
        : `<div class="rec-badge" style="background:var(--md-error-container);color:var(--md-error)">Not eligible</div>`
      }
    </div>
    <div class="rec-price-row">
      <div class="rec-price">${fmt(offer)}/kg</div>
      <div class="rec-total">Total: <strong>${fmt(total)}</strong></div>
    </div>
    <div class="rec-tags">
      ${rec.verified
          ? `<span class="chip success">${KC_ICONS.shieldCheck(14)} Verified</span>`
          : `<span class="chip error">${KC_ICONS.x(14)} Not Verified</span>`
      }
      ${rec.pickup
          ? `<span class="chip success">${KC_ICONS.package(14)} Pickup</span>`
          : `<span class="chip warning">${KC_ICONS.package(14)} Drop-off only</span>`
      }
      <span class="chip info">${KC_ICONS.barChart2(14)} Fairness: ${fairnessScore}/100</span>
    </div>
    ${rec.verified ? `
      <div class="rec-reasons">
        ${rec.verified     ? `<div class="rec-reason-item positive">${KC_ICONS.check(14)} Authorized recycler</div>` : ''}
        ${rec.pickup       ? `<div class="rec-reason-item positive">${KC_ICONS.check(14)} Pickup available</div>` : ''}
        ${rec.materials.includes(lot.material) ? `<div class="rec-reason-item positive">${KC_ICONS.check(14)} Accepts ${lot.material}</div>` : ''}
      </div>
      <button class="btn btn-primary mt-12" style="font-size:14px;min-height:44px">${APP.t('rec_select')}</button>
    ` : `
      <div class="chip error" style="margin-top:8px;width:100%;justify-content:center">${APP.t('rec_not_eligible')}</div>
    `}
  `;

  if (rec.verified) {
    card.querySelector('.btn-primary')?.addEventListener('click', (e) => {
      e.stopPropagation();
      APP.selectedRecycler = rec;
      renderRecyclerDetail();
      showScreen('recycler_detail');
    });
  }

  card.addEventListener('click', () => {
    if (!rec.verified) return;
    APP.selectedRecycler = rec;
    renderRecyclerDetail();
    showScreen('recycler_detail');
  });

  return card;
}

// ─── RECYCLER DETAIL ──────────────────────────────────────
function renderRecyclerDetail() {
  const rec = APP.selectedRecycler;
  const lot = APP.currentLot || KC_DATA.lots[0];
  if (!rec) return;

  setIfExists('#rd-name',       rec.name);
  setIfExists('#rd-auth-id',    rec.authId || 'N/A');
  setIfExists('#rd-location',   rec.location);
  setIfExists('#rd-rating',     rec.rating + '/5');
  setIfExists('#rd-handovers',  rec.completedHandovers);
  setIfExists('#rd-radius',     rec.serviceRadius + ' km');
  setIfExists('#rd-pcb-rate',   fmt(rec.rates[lot.material] || 0) + '/kg');
  setIfExists('#rd-pickup',     rec.pickup ? 'Available' : 'Drop-off only');
  setIfExists('#rd-materials',  rec.materials.join(', '));
  setIfExists('#rd-last-verified', rec.lastVerified || 'N/A');

  const badge = $('#rd-auth-badge');
  if (badge) {
    badge.className = 'auth-badge' + (rec.verified ? '' : ' unverified');
    badge.innerHTML = rec.verified ? KC_ICONS.shieldCheck(16) + ' Authorization Verified' : KC_ICONS.alertTriangle(16) + ' Not Verified';
  }

  $('#btn-select-recycler')?.addEventListener('click', () => {
    APP.currentLot.recyclerId   = rec.id;
    APP.currentLot.recyclerName = rec.name;
    APP.currentLot.quotedPrice  = rec.rates[lot.material] || 0;
    renderHandoverBook();
    showScreen('handover_book');
  }, { once: true });
}

// ─── HANDOVER BOOK ────────────────────────────────────────
function renderHandoverBook() {
  const lot = APP.currentLot;
  const rec = APP.selectedRecycler;
  if (!lot || !rec) return;

  setIfExists('#hb-recycler', rec.name);
  setIfExists('#hb-offer',    fmt(lot.quotedPrice) + '/kg');
  setIfExists('#hb-total',    fmt(lot.quotedPrice * lot.weight));
  setIfExists('#hb-location', lot.location);

  // Pickup option selected by default
  const pickupOpts = $$('.handover-type-btn');
  pickupOpts.forEach(btn => {
    btn.addEventListener('click', () => {
      pickupOpts.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  $('#btn-send-handover')?.addEventListener('click', () => {
    showScreen('waiting_confirmation');
    simulateRecyclerConfirmation();
  }, { once: true });
}

// ─── WAITING CONFIRMATION ─────────────────────────────────
async function simulateRecyclerConfirmation() {
  const lot = APP.currentLot;
  const rec = APP.selectedRecycler;

  // Auto-confirm after delay or via button
  const confirmBtn = $('#btn-demo-confirm');
  if (confirmBtn) {
    confirmBtn.onclick = () => confirmRecycler();
  }

  if (APP.fastMode) {
    await APP.delay(1000);
    confirmRecycler();
  }
}

function confirmRecycler() {
  const lot = APP.currentLot;
  const rec = APP.selectedRecycler;
  if (!lot) return;

  lot.status = 'recycler_confirmed';
  APP.save();

  // Update waiting screen
  setIfExists('#wait-status', APP.t('wait_confirmed'));
  const pending = $('#wait-timeline-pending');
  if (pending) { pending.className = 'timeline-item done'; pending.querySelector('.tl-dot').innerHTML = KC_ICONS.check(14); }

  setTimeout(() => {
    renderHandoverDigital();
    showScreen('recycler_confirmed');
  }, APP.fastMode ? 500 : 1200);
}

// ─── RECYCLER CONFIRMED SCREEN ────────────────────────────
function renderHandoverDigital() {
  const lot = APP.currentLot;
  const rec = APP.selectedRecycler;
  if (!lot || !rec) return;

  setIfExists('#rc-recycler-name', rec.name);
  setIfExists('#rc-offer',         fmt(lot.quotedPrice) + '/kg');
  setIfExists('#rc-total',         fmt(lot.quotedPrice * lot.weight));
  setIfExists('#rc-req-ref',       'REQ-78321');
}

// ─── DIGITAL HANDOVER ─────────────────────────────────────
function renderDigitalHandover() {
  const lot = APP.currentLot || KC_DATA.lots[0];
  const rec = APP.selectedRecycler || KC_DATA.recyclers[0];

  const finalWeight = lot.weight + 0.4;
  const finalSale   = finalWeight * (lot.quotedPrice || 108);
  lot.finalWeight = finalWeight;
  lot.finalSale   = finalSale;
  lot.handoverId  = genHndId();
  lot.handoverAt  = now();
  lot.status      = 'handover';

  setIfExists('#dh-lot-id',       lot.id);
  setIfExists('#dh-material',     lot.material);
  setIfExists('#dh-weight-orig',  lot.weight + ' kg');
  setIfExists('#dh-weight-final', finalWeight.toFixed(1) + ' kg');
  setIfExists('#dh-price',        fmt(lot.quotedPrice || 108) + '/kg');
  setIfExists('#dh-sale',         fmt(finalSale));
  setIfExists('#dh-location',     lot.location);
  setIfExists('#dh-recycler',     rec.name + ' Facility');
  setIfExists('#dh-timestamp',    lot.handoverAt);

  // Handover reference
  setIfExists('#dh-handover-ref', lot.handoverId);

  // Draw QR code
  drawQRCode('#qr-visual');

  APP.save();

  $('#btn-confirm-handover')?.addEventListener('click', () => {
    lot.status = 'payment_pending';
    APP.save();
    renderPayment();
    showScreen('payment');
  }, { once: true });
}

// ─── QR CODE (CSS) ────────────────────────────────────────
function drawQRCode(selector) {
  const container = $(selector);
  if (!container) return;
  // Predefined pattern for visual effect
  const pattern = [
    1,1,1,1,1,1,1,0,1,1,
    1,0,0,0,0,0,1,0,0,1,
    1,0,1,1,1,0,1,0,1,0,
    1,0,1,1,1,0,1,0,1,1,
    1,0,1,1,1,0,1,0,0,1,
    1,0,0,0,0,0,1,0,1,0,
    1,1,1,1,1,1,1,0,1,1,
    0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,0,1,1,0,1,0,
    1,1,0,1,0,1,0,1,0,1,
  ];
  container.innerHTML = pattern.map(c => `<div class="qr-cell ${c ? 'dark' : ''}"></div>`).join('');
}

// ─── PAYMENT ─────────────────────────────────────────────
function renderPayment() {
  const lot = APP.currentLot || KC_DATA.lots[0];
  const finalSale = lot.finalSale || 2743.20;

  setIfExists('#pay-amount', fmt(finalSale));
  setIfExists('#pay-lot-id', lot.id);

  // Payment method selection
  const payOpts = $$('.pay-option');
  payOpts.forEach(opt => {
    opt.addEventListener('click', () => {
      payOpts.forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
    });
  });

  // Auto-select cash
  payOpts[0]?.classList.add('selected');

  $('#btn-payment-done')?.addEventListener('click', () => {
    // Mark paid
    lot.paymentRef    = genPayId();
    lot.paymentMethod = 'Cash';
    lot.paymentStatus = 'Paid';
    lot.status        = 'completed';

    // Add to transactions
    KC_DATA.transactions.unshift({
      id: 'TXN-NEW',
      lotId: lot.id,
      material: lot.material,
      weight: lot.finalWeight,
      finalSale: lot.finalSale,
      recycler: APP.selectedRecycler?.name || 'GreenLoop Recycling',
      date: '03 Sep',
      status: 'Completed',
    });

    // Update earnings
    KC_DATA.collector.monthlyEarnings = (KC_DATA.collector.monthlyEarnings || 0) + lot.finalSale;
    KC_DATA.collector.paid = (KC_DATA.collector.paid || 0) + lot.finalSale;

    APP.save();
    showScreen('payment_success');
    renderPaymentSuccess();
  }, { once: true });
}

// ─── PAYMENT SUCCESS ──────────────────────────────────────
function renderPaymentSuccess() {
  const lot = APP.currentLot || KC_DATA.lots[0];
  setIfExists('#ps-amount', fmt(lot.finalSale));
  setIfExists('#ps-ref',    lot.paymentRef);
  setIfExists('#ps-lot-id', lot.id);

  $('#btn-view-earnings')?.addEventListener('click', () => {
    renderEarnings();
    showScreen('earnings');
  }, { once: true });

  $('#btn-track-material')?.addEventListener('click', () => {
    showScreen('traceability');
    renderTraceability();
  }, { once: true });
}

// ─── EARNINGS ─────────────────────────────────────────────
function renderEarnings() {
  const col = KC_DATA.collector;
  setIfExists('#earn-total',   fmt(col.monthlyEarnings));
  setIfExists('#earn-paid',    fmt(col.paid));
  setIfExists('#earn-pending', fmt(col.pending));

  const list = $('#earnings-txn-list');
  if (!list) return;
  list.innerHTML = '';

  KC_DATA.transactions.slice(0, 6).forEach(txn => {
    const item = el('div', 'txn-item interactive');
    item.innerHTML = `
      <div class="txn-icon">${KC_DATA.getMaterial(txn.material)?.icon || ''}</div>
      <div class="txn-info">
        <div class="txn-name">${txn.material}</div>
        <div class="txn-sub">${txn.lotId} · ${txn.date}</div>
      </div>
      <div class="txn-amount">+${fmt(txn.finalSale)}</div>
    `;
    item.addEventListener('click', () => {
      renderTxnDetail(txn.lotId);
      showScreen('txn_detail');
    });
    list.appendChild(item);
  });

  // Earnings filter
  $$('.earn-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.earn-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Earnings chart
  drawEarningsChart('#earnings-chart');
}

function drawEarningsChart(selector) {
  const wrap = $(selector);
  if (!wrap) return;
  const canvas = wrap.querySelector('canvas') || document.createElement('canvas');
  if (!wrap.contains(canvas)) wrap.appendChild(canvas);
  canvas.width  = wrap.offsetWidth || 340;
  canvas.height = 80;

  const ctx = canvas.getContext('2d');
  const days = [2100, 2743, 1820, 3100, 1250, 0, 0];
  const max  = Math.max(...days) + 200;
  const W    = canvas.width, H = canvas.height;

  ctx.clearRect(0, 0, W, H);

  const bw = (W - 20) / days.length - 4;
  days.forEach((v, i) => {
    const bh = (v / max) * (H - 10);
    const x  = 10 + i * ((W - 20) / days.length);
    const y  = H - bh - 5;
    ctx.fillStyle = v > 0 ? '#1A6B3C' : '#EFF2EE';
    roundRect(ctx, x, y, bw, bh, 4);
    ctx.fill();
  });
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h);
  ctx.lineTo(x, y + h);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

// ─── TRANSACTION DETAIL ───────────────────────────────────
function renderTxnDetail(lotId) {
  const lot = KC_DATA.lots.find(l => l.id === lotId) || KC_DATA.lots[0];
  const rec = KC_DATA.recyclers.find(r => r.id === lot.recyclerId) || KC_DATA.recyclers[0];
  const mat = KC_DATA.getMaterial(lot.material);

  setIfExists('#td-lot-id',     lot.id);
  setIfExists('#td-material',   mat?.icon + ' ' + lot.material);
  setIfExists('#td-weight',     (lot.finalWeight || lot.weight) + ' kg');
  setIfExists('#td-fair-val',   fmt(lot.fairValue || 0));
  setIfExists('#td-quoted',     fmt(lot.quotedPrice || 108) + '/kg');
  setIfExists('#td-final',      fmt(lot.quotedPrice || 108) + '/kg');
  setIfExists('#td-sale',       fmt(lot.finalSale || 2743.20));
  setIfExists('#td-collected',  lot.collectedAt || now());
  setIfExists('#td-loc',        lot.location);
  setIfExists('#td-recycler',   rec?.name || 'GreenLoop Recycling');
  setIfExists('#td-handover-loc', (rec?.name || 'GreenLoop') + ' Facility');
  setIfExists('#td-payment',    lot.paymentStatus || 'Paid');
  setIfExists('#td-status',     lot.status === 'completed' ? 'Completed ✓' : lot.status);
  setIfExists('#td-hnd-ref',    lot.handoverId || 'HND-KC-82931');
}

// ─── TRACEABILITY ─────────────────────────────────────────
function renderTraceability() {
  const lot = APP.currentLot || KC_DATA.lots[0];
  setIfExists('#trace-lot-id', lot.id);
  setIfExists('#trace-material', lot.material + ' — ' + (lot.finalWeight || lot.weight) + ' kg');
  setIfExists('#trace-status', ' Received by authorized recycler');

  const list = $('#trace-timeline');
  if (!list) return;
  list.innerHTML = '';

  KC_DATA.traceability.forEach(step => {
    const item = el('div', 'timeline-item ' + step.status);
    const iconSvg = step.iconName && KC_ICONS[step.iconName]
      ? KC_ICONS[step.iconName](20)
      : (step.icon || '');
    item.innerHTML = `
      <div class="tl-dot">${iconSvg}</div>
      <div class="tl-content">
        <div class="tl-time">${step.time}</div>
        <div class="tl-event">${step.event}</div>
      </div>
    `;
    list.appendChild(item);
  });
}

// ─── PRICE BOARD ──────────────────────────────────────────
function renderPrices() {
  const list = $('#prices-list');
  if (!list) return;
  list.innerHTML = '';

  KC_DATA.materials.forEach(mat => {
    const item = el('div', 'price-list-item');
    const trendIcon = mat.trend === 'up' ? '↑' : mat.trend === 'down' ? '↓' : '→';
    const trendCls  = mat.trend === 'up' ? 'trend-up' : mat.trend === 'down' ? 'trend-down' : 'trend-flat';
    item.innerHTML = `
      <div class="pli-icon">${mat.icon}</div>
      <div class="pli-name">
        <div class="pn-hi">${APP.lang === 'mr' ? mat.nameMr : APP.lang === 'en' ? mat.nameEn : mat.nameHi}</div>
        <div class="pn-en">${mat.nameEn}</div>
      </div>
      <div class="pli-price">
        <div class="pp-main">${KC_ICONS.indianRupee(20)}${mat.avgPrice}/kg</div>
        <div class="pp-range">₹${mat.range[0]}–₹${mat.range[1]}</div>
      </div>
      <div class="pli-trend ${trendCls}">${trendIcon}</div>
      <button class="speak-btn" aria-label="Speak price">${KC_ICONS.volume2(20)}</button>
    `;
    item.querySelector('.speak-btn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      speak((APP.lang === 'hi' ? `आज ${mat.code} का भाव ${mat.avgPrice} रुपये किलो है।` : `Today ${mat.code} price is ${mat.avgPrice} rupees per kg.`));
    });
    item.addEventListener('click', () => {
      renderPriceHistory(mat.code);
      showScreen('price_history');
    });
    list.appendChild(item);
  });
}

// ─── PRICE HISTORY ────────────────────────────────────────
function renderPriceHistory(matCode) {
  const mat = KC_DATA.getMaterial(matCode);
  if (!mat) return;

  setIfExists('#ph-material', mat.icon + ' ' + mat.code);
  setIfExists('#ph-location', KC_DATA.collector.location);
  setIfExists('#ph-highest',  fmt(mat.range[1]) + '/kg');
  setIfExists('#ph-lowest',   fmt(mat.range[0]) + '/kg');
  setIfExists('#ph-average',  fmt(mat.avgPrice) + '/kg');
  setIfExists('#ph-latest',   fmt(mat.avgPrice) + '/kg');

  drawPriceChart('#ph-chart', KC_DATA.pcbPriceHistory);

  // Range tabs
  $$('.ph-range-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.ph-range-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}

// ─── MY LOTS ──────────────────────────────────────────────
function renderMyLots() {
  const active    = $('#lots-active');
  const completed = $('#lots-completed');
  if (!active || !completed) return;

  active.innerHTML    = '';
  completed.innerHTML = '';

  KC_DATA.lots.forEach(lot => {
    const mat = KC_DATA.getMaterial(lot.material);
    const card = el('div', 'card interactive');
    const statusLbl = lot.status === 'completed' ? 'completed' :
                      lot.status === 'awaiting_recycler' ? 'awaiting' :
                      lot.status === 'offline' ? 'offline' : 'price_discovered';

    card.innerHTML = `
      <div class="flex items-center justify-between mb-8">
        <span class="lot-id-badge">${lot.id}</span>
        <span class="lot-status ${statusLbl}">${lot.status.replace(/_/g,' ')}</span>
      </div>
      <div class="flex items-center gap-12">
        <span style="font-size:28px">${mat?.icon || ''}</span>
        <div>
          <div class="title-md">${lot.material}</div>
          <div class="body-sm text-muted">${lot.weight} kg · ${lot.location}</div>
        </div>
        <div style="margin-left:auto;text-align:right">
          ${lot.finalSale ? `<div class="text-primary font-black">${fmt(lot.finalSale)}</div>` : `<div class="text-muted body-sm">${fmt(lot.fairRange?.[0] || 0)}–${fmt(lot.fairRange?.[1] || 0)}</div>`}
        </div>
      </div>
    `;
    card.addEventListener('click', () => {
      APP.currentLot = lot;
      renderTxnDetail(lot.id);
      showScreen('txn_detail');
    });

    if (lot.status === 'completed') completed.appendChild(card);
    else active.appendChild(card);
  });
}

// ─── SAFETY ──────────────────────────────────────────────
function renderSafety() {
  const list = $('#safety-list');
  if (!list) return;
  list.innerHTML = '';

  KC_DATA.safety.forEach(s => {
    const card = el('div', `safety-card ${s.severity}`);
    card.innerHTML = `
      <button class="speak-btn" aria-label="Speak safety">${KC_ICONS.volume2(20)}</button>
      <div class="safety-icon">${s.icon}</div>
      <div class="safety-title">${APP.lang === 'mr' ? (s.titleMr || s.titleHi) : APP.lang === 'en' ? s.titleEn : s.titleHi}</div>
      <div class="safety-body">${APP.lang === 'mr' ? (s.bodyMr || s.bodyHi) : APP.lang === 'en' ? s.bodyEn : s.bodyHi}</div>
      ${s.material === 'Battery' ? `
        <div class="safety-donts">
          <div class="safety-dont-item">${KC_ICONS.x(16)} न puncture करें</div>
          <div class="safety-dont-item">${KC_ICONS.x(16)} न जलाएं</div>
          <div class="safety-dont-item">${KC_ICONS.x(16)} न तोड़ें</div>
        </div>` : ''}
    `;
    const spkBtn = card.querySelector('.speak-btn');
    // Speak the exact visible safety text so TTS matches on-screen copy.
    spkBtn?.addEventListener('click', () => {
      const spoken = APP.lang === 'mr'
        ? ((s.titleMr || s.titleHi) + '. ' + (s.bodyMr || s.bodyHi))
        : APP.lang === 'hi'
          ? (s.titleHi + '. ' + s.bodyHi)
          : (s.titleEn + '. ' + s.bodyEn);
      speak(spoken);
      spkBtn.classList.add('speaking');
      setTimeout(() => spkBtn.classList.remove('speaking'), 3000);
    });
    list.appendChild(card);
  });
}

// ─── MORE SCREEN ──────────────────────────────────────────
function renderMore() {
  // Notification list
  const notifList = $('#notif-list');
  if (notifList) {
    notifList.innerHTML = '';
    KC_DATA.notifications.forEach(n => {
      const item = el('div', 'notif-item' + (n.read ? '' : ' unread'));
      item.innerHTML = `
        <div class="notif-icon">${n.icon}</div>
        <div class="notif-body">
          <div class="notif-title">${n.title}</div>
          <div class="notif-text">${n.body}</div>
        </div>
        <div class="notif-time">${n.time}</div>
      `;
      item.addEventListener('click', () => { n.read = true; renderMore(); });
      notifList.appendChild(item);
    });
  }
}

// ─── RECYCLER DASHBOARD ───────────────────────────────────
function renderRecyclerDashboard() {
  const incomingList = $('#recycler-incoming');
  if (!incomingList) return;
  incomingList.innerHTML = '';

  const lot = KC_DATA.lots[0];
  const mat = KC_DATA.getMaterial(lot.material);
  const card = el('div', 'card interactive');
  card.innerHTML = `
    <div class="flex items-center justify-between mb-12">
      <span class="lot-id-badge">${lot.id}</span>
      <span class="chip info">New</span>
    </div>
    <div class="flex items-center gap-12 mb-12">
      <span style="font-size:32px">${mat?.icon}</span>
      <div>
        <div class="title-md">${lot.material}</div>
        <div class="body-sm text-muted">Collector: KC-1042 · ${lot.weight}kg</div>
        <div class="body-sm text-muted">${KC_ICONS.mapPin(14)} 6.2 km</div>
      </div>
      <div style="margin-left:auto;text-align:right">
        <div class="text-primary font-black" style="font-size:18px;display:flex;align-items:center">${KC_ICONS.indianRupee(18)}108/kg</div>
        <div class="body-sm text-muted">Total: ${fmt(lot.weight * 108)}</div>
      </div>
    </div>
    <div class="flex gap-8">
      <button class="btn btn-primary btn-small" style="flex:1" onclick="acceptLotDemo()">Accept</button>
      <button class="btn btn-secondary btn-small" style="flex:1" onclick="showScreen('recycler_lot_detail')">View</button>
    </div>
  `;
  incomingList.appendChild(card);

  // Also render rate table
  const rateTable = $('#recycler-rates-table');
  if (rateTable) {
    rateTable.innerHTML = '';
    const rec = KC_DATA.recyclers[0];
    Object.entries(rec.rates).forEach(([mat, rate]) => {
      const row = el('tr');
      row.innerHTML = `
        <td>${KC_DATA.getMaterial(mat)?.icon || ''} ${mat}</td>
        <td>${fmt(rate)}/kg</td>
        <td><input type="number" value="${rate}" class="form-input" style="padding:6px;width:90px;font-size:13px" onchange="updateRate('${mat}',this.value)"></td>
        <td><button class="btn btn-tonal btn-small">Update</button></td>
      `;
      rateTable.appendChild(row);
    });
  }
}

window.acceptLotDemo = function() {
  const lot = KC_DATA.lots[0];
  lot.status = 'recycler_confirmed';
  APP.save();
  alert('LOT ' + lot.id + ' accepted! Collector notified.');
};

window.updateRate = function(mat, val) {
  KC_DATA.recyclers[0].rates[mat] = parseFloat(val);
};

// ─── DATA INTELLIGENCE ────────────────────────────────────
function renderDataDashboard() {
  const data = KC_DATA.intelligence;
  setIfExists('#di-collectors',    data.collectors);
  setIfExists('#di-lots',          data.lots.toLocaleString());
  setIfExists('#di-transactions',  data.transactions.toLocaleString());
  setIfExists('#di-recyclers',     data.verifiedRecyclers);
  setIfExists('#di-materials',     data.materials);
  setIfExists('#di-ewaste',        data.ewasteTonnes + ' tonnes');
  setIfExists('#di-ai-images',     data.aiImages.toLocaleString());
  setIfExists('#di-price-records', data.priceRecords.toLocaleString());

  renderMaterialDataset();
  renderPriceDataset();
  renderRecyclerDataset();
  renderTransactionDataset();
}

function renderMaterialDataset() {
  const table = $('#mat-dataset-body');
  if (!table) return;
  table.innerHTML = '';
  KC_DATA.materials.forEach(mat => {
    const row = el('tr');
    row.innerHTML = `
      <td>${mat.id}</td>
      <td>${mat.code}</td>
      <td>${mat.nameEn.split(' ')[0]}</td>
      <td>${mat.icon}</td>
      <td>25kg avg</td>
      <td>Mixed</td>
      <td>Scrap</td>
      <td>${fmt(KC_DATA.calcFairValue(mat.code, 25))}</td>
    `;
    table.appendChild(row);
  });
}

function renderPriceDataset() {
  const table = $('#price-dataset-body');
  if (!table) return;
  table.innerHTML = '';
  KC_DATA.materials.slice(0,4).forEach(mat => {
    const row = el('tr');
    row.innerHTML = `
      <td>${mat.code}</td>
      <td>${KC_DATA.collector.location}</td>
      <td>03 Sep 2026</td>
      <td>${fmt(mat.avgPrice)}/kg</td>
      <td>${fmt(mat.range[1])}/kg</td>
      <td>kg</td>
      <td>GreenLoop</td>
      <td>${fmt(mat.avgPrice - 4)}/kg avg</td>
    `;
    table.appendChild(row);
  });
}

function renderRecyclerDataset() {
  const table = $('#recycler-dataset-body');
  if (!table) return;
  table.innerHTML = '';
  KC_DATA.recyclers.forEach(rec => {
    const row = el('tr');
    row.innerHTML = `
      <td>${rec.id}</td>
      <td>${rec.name}</td>
      <td>${rec.location}</td>
      <td>${rec.materials.join(', ')}</td>
      <td>${rec.verified ? KC_ICONS.shieldCheck(16) + ' Verified' : KC_ICONS.x(16) + ' Not Verified'}</td>
      <td>${rec.authId || 'N/A'}</td>
      <td>${rec.pickup ? 'Yes' : 'No'}</td>
      <td>${rec.serviceRadius} km</td>
    `;
    table.appendChild(row);
  });
}

function renderTransactionDataset() {
  const table = $('#txn-dataset-body');
  if (!table) return;
  table.innerHTML = '';
  KC_DATA.transactions.forEach(txn => {
    const row = el('tr');
    row.innerHTML = `
      <td class="lot-id-badge" style="font-size:10px">${txn.lotId}</td>
      <td>KC-1042</td>
      <td>${txn.material}</td>
      <td>${txn.weight} kg</td>
      <td>${fmt(txn.finalSale)}</td>
      <td>${txn.recycler}</td>
      <td>${txn.date}</td>
      <td><span class="chip success" style="font-size:10px">${txn.status}</span></td>
    `;
    table.appendChild(row);
  });
}

// ─── SEARCH ───────────────────────────────────────────────
function setupSearch() {
  const searchInput = $('#search-input');
  const searchResults = $('#search-results');
  if (!searchInput || !searchResults) return;

  searchInput.addEventListener('input', () => {
    const q = searchInput.value.toLowerCase().trim();
    searchResults.innerHTML = '';
    if (!q) return;

    // Search lots
    KC_DATA.lots.filter(l => l.id.toLowerCase().includes(q) || l.material.toLowerCase().includes(q)).forEach(lot => {
      const item = el('div', 'card interactive mt-8');
      item.innerHTML = `<div class="title-sm">${lot.id}</div><div class="body-sm text-muted">${lot.material} · ${lot.weight}kg · ${lot.status}</div>`;
      item.addEventListener('click', () => {
        APP.currentLot = lot;
        renderTraceability();
        showScreen('traceability');
      });
      searchResults.appendChild(item);
    });

    // Search recyclers
    KC_DATA.recyclers.filter(r => r.name.toLowerCase().includes(q)).forEach(rec => {
      const item = el('div', 'card interactive mt-8');
      item.innerHTML = `<div class="title-sm"> ${rec.name}</div><div class="body-sm text-muted">${rec.location} · ${rec.verified ? ' Verified' : ' Not Verified'}</div>`;
      searchResults.appendChild(item);
    });
  });
}

// ─── ROLE SWITCHER ────────────────────────────────────────
function switchRole(role) {
  APP.role = role;
  $$('.role-btn').forEach(b => b.classList.toggle('active', b.dataset.role === role));

  const collectorUI = $('#collector-ui');
  const recyclerUI  = $('#recycler-ui');
  const dataUI      = $('#data-ui');

  if (collectorUI) collectorUI.style.display = role === 'collector' ? 'flex' : 'none';
  if (recyclerUI)  recyclerUI.style.display  = role === 'recycler'  ? 'block' : 'none';
  if (dataUI)      dataUI.style.display      = role === 'data'      ? 'block' : 'none';

  if (role === 'recycler') renderRecyclerDashboard();
  if (role === 'data')     renderDataDashboard();
}

// ─── DEMO CONTROLS ────────────────────────────────────────
function resetDemo() {
  localStorage.removeItem('kc_state');
  KC_DATA.lots = [...KC_DATA.lots.filter(l => ['LOT-KC-10293','LOT-KC-10294','LOT-KC-10295'].includes(l.id))];
  KC_DATA.transactions = KC_DATA.transactions.slice(0,4);
  KC_DATA.collector.monthlyEarnings = 8913;
  KC_DATA.collector.paid = 7713;
  APP.currentLot = null;
  APP.selectedRecycler = null;
  APP.selectedMaterial = null;
  APP.navHistory = [];
  APP.offlineQueue = [];
  showScreen('home');
  renderHome();
  renderEarnings();
}

// ─── INIT ─────────────────────────────────────────────────
function initIcons() {
  // Language settings screen
  const setLangSelect = $('#settings-lang-select');
  if (setLangSelect) {
    setLangSelect.addEventListener('change', (e) => {
      applyLanguage(e.target.value);
      renderHome();
      renderPrices();
      renderSafety();
    });
    // reflect current language
    setLangSelect.value = APP.lang || 'hi';
  }
  $$('[data-icon]').forEach(el => {
    const iconName = el.dataset.icon;
    const size = el.dataset.iconSize || 20;
    if (KC_ICONS[iconName]) {
      let svgStr = KC_ICONS[iconName](size);
      // If this icon is inside a timeline item marked done, force the stroke to white
      const tlItem = el.closest('.timeline-item.done');
      if (tlItem) {
        svgStr = svgStr.replace('stroke="currentColor"', 'stroke="#ffffff"');
      }
      el.innerHTML = svgStr;
    }
  });
}

function init() {
  APP.load();
  initIcons();
  applyLanguage(APP.lang);
  updateStatusBar();
  updateConnectivityUI();
  initNav();
  initOnboarding();
  setupSearch();

  // Connectivity indicator click
  $('#connectivity-indicator')?.addEventListener('click', toggleOnline);

  // Initialize offline UI state
  updateConnectivityUI();

  // Role switcher buttons (desktop panel)
  $$('.role-btn').forEach(btn => {
    btn.addEventListener('click', () => switchRole(btn.dataset.role));
  });

  // Demo buttons
  $('#btn-reset-demo')?.addEventListener('click', resetDemo);
  $('#btn-fast-mode')?.addEventListener('click', (e) => {
    APP.fastMode = !APP.fastMode;
    e.currentTarget.textContent = APP.fastMode ? '⚡ Fast Mode ON' : ' Fast Mode';
    e.currentTarget.classList.toggle('primary', APP.fastMode);
  });

  // Screen-specific back buttons
  $$('[data-back]').forEach(btn => {
    btn.addEventListener('click', goBack);
  });

  // Screen: sell_select
  document.addEventListener('screenChange', (e) => {
    const id = e.detail;
    if (id === 'sell_select')     renderSellSelect();
    if (id === 'camera')          renderCamera();
    if (id === 'home')            renderHome();
    if (id === 'prices')          renderPrices();
    if (id === 'earnings')        renderEarnings();
    if (id === 'safety')          renderSafety();
    if (id === 'my_lots')         renderMyLots();
    if (id === 'more')            renderMore();
    if (id === 'traceability')    renderTraceability();
    if (id === 'handover_digital') renderDigitalHandover();
  });

  // Handle show screen rendering
  const origShow = showScreen;
  window.showScreen = (id, push) => {
    origShow(id, push);
    document.dispatchEvent(new CustomEvent('screenChange', { detail: id }));
  };

  // Recycler dashboard nav tabs
  $$('.rec-nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.rec-nav-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const tab = btn.dataset.tab;
      $$('.recycler-tab').forEach(t => t.style.display = 'none');
      $('#recycler-tab-' + tab) && ($('#recycler-tab-' + tab).style.display = 'block');
    });
  });

  // Data dashboard nav
  $$('.data-nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.data-nav-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const tab = btn.dataset.tab;
      $$('.data-tab').forEach(t => t.style.display = 'none');
      const el = $('#data-tab-' + tab);
      if (el) el.style.display = 'block';
    });
  });

  // More screen navigation
  $('#more-safety')?.addEventListener('click', () => { renderSafety(); showScreen('safety'); });
  $('#more-track')?.addEventListener('click',  () => { renderTraceability(); showScreen('traceability'); });
  $('#more-lots')?.addEventListener('click',   () => { renderMyLots(); showScreen('my_lots'); });
  $('#more-notifications')?.addEventListener('click', () => { renderMore(); showScreen('notifications'); });
  $('#more-recycler-mode')?.addEventListener('click', () => switchRole('recycler'));
  $('#more-data-mode')?.addEventListener('click',     () => switchRole('data'));
  $('#more-search')?.addEventListener('click', () => showScreen('search_screen'));
  $('#more-lang')?.addEventListener('click', () => showScreen('lang_settings'));

  // Language settings screen
  $$('.lang-settings-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      applyLanguage(btn.dataset.lang);
      renderPrices();
      renderSafety();
      renderHome();
    });
  });

  // Start: always show onboarding for this prototype demo
  showScreen('onboard');
}

// Boot when DOM ready
document.addEventListener('DOMContentLoaded', init);

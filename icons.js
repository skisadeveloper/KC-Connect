/* ============================================================
   icons.js — Kabadiwala Connect
   Inline Lucide SVG icon library (2px stroke, currentColor)
   Usage: KC_ICONS.home(20) → SVG string
          KC_ICONS.home(20, 'my-class') → SVG with class
   ============================================================ */

'use strict';

const KC_ICONS = (() => {
  // Base SVG wrapper
  const svg = (size, cls, content, extra = '') =>
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round"
      class="kc-icon${cls ? ' ' + cls : ''}" aria-hidden="true" ${extra}>${content}</svg>`;

  const icons = {
    /* ── Navigation ─────────────────────────────────────── */
    home: (s=20, c='') => svg(s, c,
      `<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
       <polyline points="9 22 9 12 15 12 15 22"/>`),

    package: (s=20, c='') => svg(s, c,
      `<path d="M16.5 9.4 7.55 4.24"/>
       <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
       <polyline points="3.29 7 12 12 20.71 7"/>
       <line x1="12" y1="22" x2="12" y2="12"/>`),

    indianRupee: (s=20, c='') => svg(s, c,
      `<path d="M6 3h12"/><path d="M6 8h12"/>
       <path d="m6 13 8.5 8"/><path d="M6 13h3"/>
       <path d="M9 13c6.667 0 6.667-10 0-10"/>`),

    trendingUp: (s=20, c='') => svg(s, c,
      `<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
       <polyline points="16 7 22 7 22 13"/>`),

    menu: (s=20, c='') => svg(s, c,
      `<line x1="4" y1="12" x2="20" y2="12"/>
       <line x1="4" y1="6" x2="20" y2="6"/>
       <line x1="4" y1="18" x2="20" y2="18"/>`),

    /* ── Actions ─────────────────────────────────────────── */
    camera: (s=20, c='') => svg(s, c,
      `<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
       <circle cx="12" cy="13" r="3"/>`),

    arrowLeft: (s=20, c='') => svg(s, c,
      `<path d="m12 19-7-7 7-7"/>
       <path d="M19 12H5"/>`),

    arrowRight: (s=20, c='') => svg(s, c,
      `<path d="M5 12h14"/>
       <path d="m12 5 7 7-7 7"/>`),

    send: (s=20, c='') => svg(s, c,
      `<path d="m22 2-7 20-4-9-9-4Z"/>
       <path d="M22 2 11 13"/>`),

    search: (s=20, c='') => svg(s, c,
      `<circle cx="11" cy="11" r="8"/>
       <path d="m21 21-4.3-4.3"/>`),

    refreshCw: (s=20, c='') => svg(s, c,
      `<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
       <path d="M21 3v5h-5"/>
       <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
       <path d="M8 16H3v5"/>`),

    check: (s=20, c='') => svg(s, c,
      `<path d="M20 6 9 17l-5-5"/>`),

    circleCheck: (s=20, c='') => svg(s, c,
      `<circle cx="12" cy="12" r="10"/>
       <path d="m9 12 2 2 4-4"/>`),

    x: (s=20, c='') => svg(s, c,
      `<path d="M18 6 6 18"/><path d="m6 6 12 12"/>`),

    upload: (s=20, c='') => svg(s, c,
      `<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
       <polyline points="17 8 12 3 7 8"/>
       <line x1="12" y1="3" x2="12" y2="15"/>`),

    hourglass: (s=20, c='') => svg(s, c,
      `<path d="M5 22h14"/>
       <path d="M5 2h14"/>
       <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"/>
       <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/>`),

    clock: (s=20, c='') => svg(s, c,
      `<circle cx="12" cy="12" r="10"/>
       <polyline points="12 6 12 12 16 14"/>`),

    scale: (s=20, c='') => svg(s, c,
      `<path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/>
       <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/>
       <path d="M7 21h10"/>
       <line x1="12" y1="3" x2="12" y2="21"/>
       <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/>`),

    truck: (s=20, c='') => svg(s, c,
      `<path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3"/>
       <rect x="9" y="11" width="14" height="10" rx="2"/>
       <circle cx="12" cy="21" r="1"/>
       <circle cx="20" cy="21" r="1"/>`),

    /* ── Status / Info ───────────────────────────────────── */
    bell: (s=20, c='') => svg(s, c,
      `<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/>
       <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>`),

    alertTriangle: (s=20, c='') => svg(s, c,
      `<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
       <path d="M12 9v4"/><path d="M12 17h.01"/>`),

    info: (s=20, c='') => svg(s, c,
      `<circle cx="12" cy="12" r="10"/>
       <path d="M12 16v-4"/><path d="M12 8h.01"/>`),

    shieldCheck: (s=20, c='') => svg(s, c,
      `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
       <path d="m9 12 2 2 4-4"/>`),

    /* ── Location / Map ─────────────────────────────────── */
    mapPin: (s=20, c='') => svg(s, c,
      `<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
       <circle cx="12" cy="10" r="3"/>`),

    navigation: (s=20, c='') => svg(s, c,
      `<polygon points="3 11 22 2 13 21 11 13 3 11"/>`),

    /* ── Finance ─────────────────────────────────────────── */
    banknote: (s=20, c='') => svg(s, c,
      `<rect width="20" height="12" x="2" y="6" rx="2"/>
       <circle cx="12" cy="12" r="2"/>
       <path d="M6 12h.01M18 12h.01"/>`),

    creditCard: (s=20, c='') => svg(s, c,
      `<rect width="20" height="14" x="2" y="5" rx="2"/>
       <line x1="2" y1="10" x2="22" y2="10"/>`),

    landmark: (s=20, c='') => svg(s, c,
      `<line x1="3" y1="22" x2="21" y2="22"/>
       <line x1="6" y1="18" x2="6" y2="11"/>
       <line x1="10" y1="18" x2="10" y2="11"/>
       <line x1="14" y1="18" x2="14" y2="11"/>
       <line x1="18" y1="18" x2="18" y2="11"/>
       <polygon points="12 2 20 7 4 7"/>`),

    wallet: (s=20, c='') => svg(s, c,
      `<path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/>
       <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/>
       <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/>`),

    coins: (s=20, c='') => svg(s, c,
      `<circle cx="8" cy="8" r="6"/>
       <path d="M18.09 10.37A6 6 0 1 1 10.34 18"/>
       <path d="M7 6h1v4"/><path d="m16.71 13.88.7.71-2.82 2.82"/>`),

    /* ── People / Profile ────────────────────────────────── */
    user: (s=20, c='') => svg(s, c,
      `<circle cx="12" cy="8" r="4"/>
       <path d="M20 21a8 8 0 1 0-16 0"/>`),

    users: (s=20, c='') => svg(s, c,
      `<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
       <circle cx="9" cy="7" r="4"/>
       <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
       <path d="M16 3.13a4 4 0 0 1 0 7.75"/>`),

    /* ── Industry / Recycling ────────────────────────────── */
    recycle: (s=20, c='') => svg(s, c,
      `<path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"/>
       <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"/>
       <path d="m14 16-3 3 3 3"/>
       <path d="M8.293 13.596 7.196 9.5 3.1 10.598"/>
       <path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"/>
       <path d="m13.378 9.633 4.096 1.098 1.097-4.096"/>`),

    factory: (s=20, c='') => svg(s, c,
      `<path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/>
       <path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/>`),

    leaf: (s=20, c='') => svg(s, c,
      `<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
       <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>`),

    /* ── Tech / Devices ─────────────────────────────────── */
    smartphone: (s=20, c='') => svg(s, c,
      `<rect width="14" height="20" x="5" y="2" rx="2" ry="2"/>
       <path d="M12 18h.01"/>`),

    monitor: (s=20, c='') => svg(s, c,
      `<rect width="20" height="14" x="2" y="3" rx="2"/>
       <line x1="8" y1="21" x2="16" y2="21"/>
       <line x1="12" y1="17" x2="12" y2="21"/>`),

    cpu: (s=20, c='') => svg(s, c,
      `<rect x="4" y="4" width="16" height="16" rx="2"/>
       <rect x="9" y="9" width="6" height="6"/>
       <path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2"/>`),

    printer: (s=20, c='') => svg(s, c,
      `<polyline points="6 9 6 2 18 2 18 9"/>
       <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
       <rect width="12" height="8" x="6" y="14"/>`),

    zap: (s=20, c='') => svg(s, c,
      `<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>`),

    battery: (s=20, c='') => svg(s, c,
      `<rect width="16" height="10" x="2" y="7" rx="2" ry="2"/>
       <line x1="22" y1="11" x2="22" y2="13"/>`),

    cable: (s=20, c='') => svg(s, c,
      `<path d="M4 9a2 2 0 0 1-2-2V5h6v2a2 2 0 0 1-2 2Z"/>
       <path d="M3 5V3"/><path d="M7 5V3"/>
       <path d="M19 15V6.5a3.5 3.5 0 0 0-7 0v11a3.5 3.5 0 0 1-7 0V9"/>
       <path d="M17 21v-2"/><path d="M21 21v-2"/>
       <path d="M22 19h-6v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2Z"/>`),

    /* ── Misc ────────────────────────────────────────────── */
    globe: (s=20, c='') => svg(s, c,
      `<circle cx="12" cy="12" r="10"/>
       <line x1="2" y1="12" x2="22" y2="12"/>
       <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>`),

    lock: (s=20, c='') => svg(s, c,
      `<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
       <path d="M7 11V7a5 5 0 0 1 10 0v4"/>`),

    key: (s=20, c='') => svg(s, c,
      `<circle cx="7.5" cy="15.5" r="5.5"/>
       <path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3L22 7l-3-3"/>`),

    volume2: (s=20, c='') => svg(s, c,
      `<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
       <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
       <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>`),

    clipboardList: (s=20, c='') => svg(s, c,
      `<rect width="8" height="4" x="8" y="2" rx="1" ry="1"/>
       <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
       <path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/>`),

    handshake: (s=20, c='') => svg(s, c,
      `<path d="m11 17 2 2a1 1 0 1 0 3-3"/>
       <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/>
       <path d="m21 3 1 11h-2"/>
       <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/>
       <path d="M3 4h8"/>`),

    sparkles: (s=20, c='') => svg(s, c,
      `<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
       <path d="M5 3v4"/><path d="M19 17v4"/>
       <path d="M3 5h4"/><path d="M17 19h4"/>`),

    barChart2: (s=20, c='') => svg(s, c,
      `<line x1="18" y1="20" x2="18" y2="10"/>
       <line x1="12" y1="20" x2="12" y2="4"/>
       <line x1="6" y1="20" x2="6" y2="14"/>
       <line x1="2" y1="20" x2="22" y2="20"/>`),

    settings: (s=20, c='') => svg(s, c,
      `<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
       <circle cx="12" cy="12" r="3"/>`),

    star: (s=20, c='') => svg(s, c,
      `<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>`),

    wifi: (s=20, c='') => svg(s, c,
      `<path d="M5 12.55a11 11 0 0 1 14.08 0"/>
       <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
       <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
       <line x1="12" y1="20" x2="12.01" y2="20"/>`),

    wifiOff: (s=20, c='') => svg(s, c,
      `<line x1="1" y1="1" x2="23" y2="23"/>
       <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"/>
       <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"/>
       <path d="M10.71 5.05A16 16 0 0 1 22.56 9"/>
       <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"/>
       <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
       <line x1="12" y1="20" x2="12.01" y2="20"/>`),

    signal: (s=20, c='') => svg(s, c,
      `<path d="M2 20h.01"/><path d="M7 20v-4"/>
       <path d="M12 20v-8"/><path d="M17 20V8"/><path d="M22 4v16"/>`),

    chevronRight: (s=20, c='') => svg(s, c,
      `<path d="m9 18 6-6-6-6"/>`),

    chevronDown: (s=20, c='') => svg(s, c,
      `<path d="m6 9 6 6 6-6"/>`),

    externalLink: (s=20, c='') => svg(s, c,
      `<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
       <polyline points="15 3 21 3 21 9"/>
       <line x1="10" y1="14" x2="21" y2="3"/>`),

    scan: (s=20, c='') => svg(s, c,
      `<path d="M3 7V5a2 2 0 0 1 2-2h2"/>
       <path d="M17 3h2a2 2 0 0 1 2 2v2"/>
       <path d="M21 17v2a2 2 0 0 1-2 2h-2"/>
       <path d="M7 21H5a2 2 0 0 1-2-2v-2"/>
       <line x1="7" y1="12" x2="17" y2="12"/>`),

    qrCode: (s=20, c='') => svg(s, c,
      `<rect width="5" height="5" x="3" y="3" rx="1"/>
       <rect width="5" height="5" x="16" y="3" rx="1"/>
       <rect width="5" height="5" x="3" y="16" rx="1"/>
       <path d="M21 16h-3a2 2 0 0 0-2 2v3"/>
       <path d="M21 21v.01"/><path d="M12 7v3a2 2 0 0 1-2 2H7"/>
       <path d="M3 12h.01"/><path d="M12 3h.01"/>
       <path d="M12 16v.01"/><path d="M16 12h1"/>
       <path d="M21 12v.01"/><path d="M12 21v-1"/>`),

    packageCheck: (s=20, c='') => svg(s, c,
      `<path d="m16 16 2 2 4-4"/>
       <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"/>
       <path d="m7.5 4.27 9 5.15"/>
       <polyline points="3.29 7 12 12 20.71 7"/>
       <line x1="12" y1="22" x2="12" y2="12"/>`),

    award: (s=20, c='') => svg(s, c,
      `<circle cx="12" cy="8" r="6"/>
       <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>`),

    activity: (s=20, c='') => svg(s, c,
      `<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>`),

    database: (s=20, c='') => svg(s, c,
      `<ellipse cx="12" cy="5" rx="9" ry="3"/>
       <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
       <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>`),

    layers: (s=20, c='') => svg(s, c,
      `<polygon points="12 2 2 7 12 12 22 7 12 2"/>
       <polyline points="2 17 12 22 22 17"/>
       <polyline points="2 12 12 17 22 12"/>`),

    /* ── Convenience shorthands ─────────────────────────── */
    phone: (s=20, c='') => svg(s, c,
      `<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.72 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.68 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.22 6.22l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>`),
  };

  // Aliases and compatibility names (map Material/other names to existing icons)
  // These help when HTML uses slightly different icon identifiers.
  icons.checkCircle = icons.circleCheck || icons.check;
  icons.dollarSign = icons.indianRupee || icons.banknote;
  icons.uploadCloud = icons.upload || icons.upload;
  icons.packageCheck = icons.packageCheck || icons.package;
  // common small aliases
  icons.handMetal = icons.handshake || icons.user;

  // Provide a simple 'edit2' pencil icon (Lucide-style) if not present
  if (!icons.edit2) {
    icons.edit2 = (s = 20, c = '') => svg(s, c,
      `<path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z"/>
       <path d="M20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>`);
  }

  return icons;
})();

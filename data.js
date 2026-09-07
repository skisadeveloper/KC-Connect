// ============================================================
// data.js — Kabadiwala Connect Prototype Seed Data
// All data is for demonstration purposes only.
// ============================================================

const KC_DATA = {

  // ─── MATERIALS ────────────────────────────────────────────
  materials: [
    {
      id: 'MAT-001', code: 'PCB', icon: KC_ICONS.cpu(24), iconName: 'cpu',
      image: './assets/images/img_1518770660439-4636190af475.jpg',
      nameHi: 'PCB / सर्किट बोर्ड', nameEn: 'Printed Circuit Board', nameMr: 'PCB / सर्किट बोर्ड',
      category: 'Electronics', avgPrice: 103, range: [95, 115], unit: 'kg', trend: 'up', trendPct: 8.4,
    },
    {
      id: 'MAT-002', code: 'Cable', icon: KC_ICONS.cable(24), iconName: 'cable',
      image: './assets/images/img_1558618666-fcd25c85cd64.jpg',
      nameHi: 'केबल / तार', nameEn: 'Cables & Wires', nameMr: 'केबल / तार',
      category: 'Cables', avgPrice: 72, range: [60, 85], unit: 'kg', trend: 'flat', trendPct: 1.2,
    },
    {
      id: 'MAT-003', code: 'Battery', icon: KC_ICONS.battery(24), iconName: 'battery',
      image: './assets/images/img_1619642751034-765dfdf7c58e.jpg',
      nameHi: 'बैटरी', nameEn: 'Batteries', nameMr: 'बॅटरी',
      category: 'Hazardous', avgPrice: 145, range: [130, 160], unit: 'kg', trend: 'up', trendPct: 5.1,
    },
    {
      id: 'MAT-004', code: 'LCD', icon: KC_ICONS.monitor(24), iconName: 'monitor',
      image: 'https://images.unsplash.com/photo-1527443224154-c4a573d5f5a3?w=200&h=200&fit=crop&q=85',
      nameHi: 'LCD पैनल', nameEn: 'LCD Panels', nameMr: 'LCD पॅनेल',
      category: 'Screens', avgPrice: 58, range: [45, 70], unit: 'kg', trend: 'down', trendPct: -2.3,
    },
    {
      id: 'MAT-005', code: 'CRT', icon: KC_ICONS.monitor(24), iconName: 'monitor',
      image: 'https://images.unsplash.com/photo-1593640408182-31c228a2f85f?w=200&h=200&fit=crop&q=85',
      nameHi: 'CRT मॉनिटर', nameEn: 'CRT Monitors', nameMr: 'CRT मॉनिटर',
      category: 'Hazardous', avgPrice: 32, range: [22, 42], unit: 'kg', trend: 'down', trendPct: -4.1,
    },
    {
      id: 'MAT-006', code: 'Motor', icon: KC_ICONS.zap(24), iconName: 'zap',
      image: './assets/images/img_1581094794329-c8112a89af12.jpg',
      nameHi: 'मोटर', nameEn: 'Motors', nameMr: 'मोटर',
      category: 'Components', avgPrice: 85, range: [70, 100], unit: 'kg', trend: 'up', trendPct: 3.2,
    },
    {
      id: 'MAT-007', code: 'Magnet', icon: KC_ICONS.layers(24), iconName: 'layers',
      image: 'https://images.unsplash.com/photo-1612833603922-5e8f0e8ea3b5?w=200&h=200&fit=crop&q=85',
      nameHi: 'मैग्नेट असेंबली', nameEn: 'Magnet Assemblies', nameMr: 'मॅग्नेट असेंब्ली',
      category: 'Components', avgPrice: 120, range: [100, 140], unit: 'kg', trend: 'flat', trendPct: 0.8,
    },
    {
      id: 'MAT-008', code: 'Plastic', icon: KC_ICONS.recycle(24), iconName: 'recycle',
      image: 'https://images.unsplash.com/photo-1618075820843-b1c7d01db56a?w=200&h=200&fit=crop&q=85',
      nameHi: 'मिश्रित प्लास्टिक', nameEn: 'Mixed Plastics', nameMr: 'मिश्र प्लास्टिक',
      category: 'Plastics', avgPrice: 28, range: [20, 38], unit: 'kg', trend: 'flat', trendPct: -0.5,
    },
  ],


  // ─── PRICE HISTORY (30 days for PCB) ──────────────────────
  pcbPriceHistory: [
    { day: 1,  price: 91 }, { day: 3,  price: 92 }, { day: 5,  price: 94 },
    { day: 7,  price: 93 }, { day: 10, price: 97 }, { day: 12, price: 96 },
    { day: 15, price: 99 }, { day: 17, price: 100 },{ day: 20, price: 104 },
    { day: 22, price: 101 },{ day: 25, price: 102 },{ day: 27, price: 103 },
    { day: 30, price: 103 },
  ],

  // ─── RECYCLERS ────────────────────────────────────────────
  recyclers: [
    {
      id: 'REC-001',
      name: 'GreenLoop Recycling',
      authId: 'AUTH-MH-RECY-20481',
      verified: true,
      location: 'Chandigarh',
      distance: 6.2,
      pickup: true,
      serviceRadius: 15,
      rating: 4.8,
      completedHandovers: 128,
      materials: ['PCB', 'Cable', 'LCD', 'Motor'],
      rates: { PCB: 108, Cable: 75, LCD: 60, Motor: 88 },
      matchScore: 94,
      lastVerified: '02 Sep 2026',
      phone: '+91-98XX-XXXXX',
      highlight: true,
    },
    {
      id: 'REC-002',
      name: 'EcoCycle Materials',
      authId: 'AUTH-PB-RECY-11392',
      verified: true,
      location: 'Mohali',
      distance: 12.8,
      pickup: false,
      serviceRadius: 20,
      rating: 4.5,
      completedHandovers: 87,
      materials: ['PCB', 'Battery', 'Cable', 'Plastic'],
      rates: { PCB: 115, Battery: 148, Cable: 70, Plastic: 30 },
      matchScore: 82,
      lastVerified: '01 Sep 2026',
      phone: '+91-97XX-XXXXX',
      highlight: false,
    },
    {
      id: 'REC-003',
      name: 'Local Scrap Hub',
      authId: null,
      verified: false,
      location: 'Chandigarh',
      distance: 3.1,
      pickup: true,
      serviceRadius: 5,
      rating: 3.1,
      completedHandovers: 0,
      materials: ['PCB', 'Cable', 'Plastic'],
      rates: { PCB: 72, Cable: 55, Plastic: 20 },
      matchScore: 0,
      lastVerified: null,
      phone: null,
      highlight: false,
    },
    {
      id: 'REC-004',
      name: 'ReNew E-Waste Solutions',
      authId: 'AUTH-HR-RECY-30912',
      verified: true,
      location: 'Panchkula',
      distance: 18.5,
      pickup: true,
      serviceRadius: 25,
      rating: 4.6,
      completedHandovers: 203,
      materials: ['PCB', 'CRT', 'Battery', 'LCD', 'Motor', 'Magnet'],
      rates: { PCB: 105, CRT: 35, Battery: 142, LCD: 57, Motor: 86, Magnet: 118 },
      matchScore: 71,
      lastVerified: '30 Aug 2026',
      phone: '+91-96XX-XXXXX',
      highlight: false,
    },
  ],

  // ─── DEMO LOTS ─────────────────────────────────────────────
  lots: [
    {
      id: 'LOT-KC-10293',
      material: 'PCB',
      weight: 25,
      finalWeight: 25.4,
      condition: 'Mixed',
      source: 'Scrap Collection',
      location: 'Chandigarh',
      collectedAt: '03 Sep 2026, 4:30 PM',
      status: 'completed',
      recyclerId: 'REC-001',
      recyclerName: 'GreenLoop Recycling',
      quotedPrice: 108,
      finalPrice: 108,
      finalSale: 2743.20,
      handoverId: 'HND-KC-82931',
      paymentRef: 'PAY-KC-23981',
      paymentMethod: 'Cash',
      paymentStatus: 'Paid',
      aiConfidence: 91,
      fairValue: 2575,
      fairRange: [2375, 2875],
      fairScore: 94,
      handoverAt: '03 Sep 2026, 5:12 PM',
    },
    {
      id: 'LOT-KC-10294',
      material: 'Battery',
      weight: 12,
      finalWeight: null,
      condition: 'Mixed',
      source: 'Household',
      location: 'Chandigarh',
      collectedAt: '03 Sep 2026, 2:00 PM',
      status: 'awaiting_recycler',
      recyclerId: null,
      recyclerName: null,
      quotedPrice: null,
      finalPrice: null,
      finalSale: null,
      handoverId: null,
      paymentRef: null,
      paymentMethod: null,
      paymentStatus: null,
      aiConfidence: 87,
      fairValue: 1740,
      fairRange: [1560, 1920],
      fairScore: 88,
      handoverAt: null,
    },
    {
      id: 'LOT-KC-10295',
      material: 'Cable',
      weight: 40,
      finalWeight: null,
      condition: 'Good',
      source: 'Office',
      location: 'Chandigarh',
      collectedAt: '03 Sep 2026, 11:00 AM',
      status: 'price_discovered',
      recyclerId: null,
      recyclerName: null,
      quotedPrice: null,
      finalPrice: null,
      finalSale: null,
      handoverId: null,
      paymentRef: null,
      paymentMethod: null,
      paymentStatus: null,
      aiConfidence: 94,
      fairValue: 2880,
      fairRange: [2400, 3400],
      fairScore: 91,
      handoverAt: null,
    },
  ],

  // ─── TRANSACTIONS ──────────────────────────────────────────
  transactions: [
    { id: 'TXN-001', lotId: 'LOT-KC-10293', material: 'PCB',     weight: 25.4, finalSale: 2743.20, recycler: 'GreenLoop Recycling', date: '03 Sep', status: 'Completed' },
    { id: 'TXN-002', lotId: 'LOT-KC-10290', material: 'Cable',   weight: 25,   finalSale: 1820,    recycler: 'EcoCycle Materials',  date: '02 Sep', status: 'Completed' },
    { id: 'TXN-003', lotId: 'LOT-KC-10287', material: 'Motor',   weight: 36,   finalSale: 3100,    recycler: 'GreenLoop Recycling', date: '01 Sep', status: 'Completed' },
    { id: 'TXN-004', lotId: 'LOT-KC-10281', material: 'Battery', weight: 8.5,  finalSale: 1250,    recycler: 'ReNew E-Waste',       date: '30 Aug', status: 'Completed' },
  ],

  // ─── COLLECTOR PROFILE ─────────────────────────────────────
  collector: {
    id: 'KC-1042',
    language: 'hi',
    location: 'Chandigarh',
    monthlyEarnings: 8913,
    paid: 7713,
    pending: 1200,
    totalLots: 38,
    totalWeight: 312,
    joinDate: 'Jan 2026',
  },

  // ─── DATA INTELLIGENCE ─────────────────────────────────────
  intelligence: {
    collectors: 128,
    lots: 2841,
    transactions: 2216,
    verifiedRecyclers: 34,
    materials: 8,
    ewasteTonnes: 18.4,
    locations: 18,
    aiImages: 4280,
    priceRecords: 12450,
  },

  // ─── NOTIFICATIONS ─────────────────────────────────────────
  notifications: [
    { id: 'N1', type: 'accepted',  icon: '', title: 'Recycler Accepted', body: 'GreenLoop Recycling ने LOT-KC-10293 accept किया।', time: '5:00 PM', read: false },
    { id: 'N2', type: 'payment',   icon: '', title: 'Payment Received',  body: '₹2,743.20 received for LOT-KC-10293.',            time: '5:14 PM', read: false },
    { id: 'N3', type: 'received',  icon: '', title: 'Material Received', body: 'PCB lot GreenLoop Recycling द्वारा received।',    time: '6:00 PM', read: true  },
    { id: 'N4', type: 'alert',     icon: '', title: 'Price Alert',       body: 'PCB prices में 7% की वृद्धि इस सप्ताह।',          time: '10:00 AM',read: true  },
  ],

  // ─── TRACEABILITY TIMELINE ──────────────────────────────────
  traceability: [
    { time: '03 Sep 4:30 PM', event: 'Collected',              status: 'done',    iconName: 'package' },
    { time: '03 Sep 4:42 PM', event: 'Lot created',            status: 'done',    iconName: 'circleCheck' },
    { time: '03 Sep 4:50 PM', event: 'Recycler matched',       status: 'done',    iconName: 'users' },
    { time: '03 Sep 5:00 PM', event: 'Recycler accepted',      status: 'done',    iconName: 'handshake' },
    { time: '03 Sep 5:12 PM', event: 'Handover verified',      status: 'done',    iconName: 'truck' },
    { time: '03 Sep 5:14 PM', event: 'Payment completed',      status: 'done',    iconName: 'banknote' },
    { time: '03 Sep 6:00 PM', event: 'Recycler received',      status: 'done',    iconName: 'factory' },
    { time: 'Upcoming',       event: 'Processing',             status: 'pending', iconName: 'hourglass' },
    { time: 'Upcoming',       event: 'Material recovery',      status: 'pending', iconName: 'leaf' },
    { time: 'Upcoming',       event: 'Recycling completed',    status: 'pending', iconName: 'recycle' },
  ],

  // ─── SAFETY GUIDES ─────────────────────────────────────────
  safety: [
    { material: 'Cable',   icon: '', titleHi: 'Cable मत जलाएं', titleMr: 'केबल जाळू नका',          titleEn: 'Do NOT burn cables',          bodyHi: 'जलाने से जहरीला धुआं निकल सकता है।', bodyMr: 'जाळल्याने विषारी धूर निघतो.',               bodyEn: 'Burning releases toxic fumes.',          color: '#FF5722', severity: 'high'   },
    { material: 'PCB',     icon: '', titleHi: 'PCB को acid से process न करें', titleMr: 'PCB वर acid प्रक्रिया करू नका', titleEn: 'No acid processing of PCB',  bodyHi: 'Acid handling trained recycling facility को ही करें।', bodyMr: 'Acid प्रक्रिया फक्त प्रशिक्षित सुविधा करावीत.', bodyEn: 'Only trained facilities should handle acid.', color: '#FF9800', severity: 'high'   },
    { material: 'Battery', icon: '', titleHi: 'Battery को न खोलें', titleMr: 'बॅटरी उघडू नका',        titleEn: 'Do NOT open batteries',       bodyHi: 'न puncture, न जलाएं, न तोड़ें।', bodyMr: 'puncture करू नका, जाळू नका, तोडू नका.',                   bodyEn: 'Do not puncture, burn, or break.',       color: '#FF5722', severity: 'high'   },
    { material: 'CRT',     icon: '', titleHi: 'CRT सावधानी से संभालें', titleMr: 'CRT काळजीपूर्वक हाताळा',   titleEn: 'Handle CRT carefully',        bodyHi: 'Glass टूटने और hazardous material exposure से बचें।', bodyMr: 'काच तुटणे व धोकादायक संपर्क टाळा.', bodyEn: 'Avoid glass breakage and hazardous exposure.', color: '#FF9800', severity: 'medium' },
  ],

  // ─── ANOMALY DETECTION DEMO ────────────────────────────────
  anomaly: {
    material: 'PCB',
    weight: 20,
    expectedRange: [100, 110],
    recorded: 55,
    flagged: true,
    reason: 'Recorded price is significantly below nearby market range.',
  },
};

// Utility: get material by code
KC_DATA.getMaterial = (code) => KC_DATA.materials.find(m => m.code === code);

// Utility: recycler scoring
KC_DATA.scoreRecycler = (recycler, material) => {
  if (!recycler.verified) return 0;
  if (!recycler.materials.includes(material)) return 0;
  const mat = KC_DATA.getMaterial(material);
  if (!mat) return 0;
  const priceScore   = Math.min(100, ((recycler.rates[material] - mat.range[0]) / (mat.range[1] - mat.range[0])) * 100);
  const distScore    = Math.max(0, 100 - (recycler.distance / 20) * 100);
  const pickupScore  = recycler.pickup ? 100 : 0;
  const authScore    = recycler.verified ? 100 : 0;
  const matScore     = recycler.materials.includes(material) ? 100 : 0;
  return Math.round(
    authScore   * 0.30 +
    priceScore  * 0.25 +
    distScore   * 0.20 +
    pickupScore * 0.15 +
    matScore    * 0.10
  );
};

// Utility: fair value calculation
KC_DATA.calcFairValue = (material, weight) => {
  const mat = KC_DATA.getMaterial(material);
  if (!mat) return 0;
  return Math.round(mat.avgPrice * weight);
};

// Utility: fairness score
KC_DATA.fairnessScore = (offer, mat) => {
  const material = KC_DATA.getMaterial(mat);
  if (!material) return 0;
  const range = material.range[1] - material.range[0];
  const score = Math.round(((offer - material.range[0]) / range) * 100);
  return Math.min(100, Math.max(0, score));
};

if (typeof module !== 'undefined') module.exports = KC_DATA;

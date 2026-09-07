# Kabadiwala Connect — Demo Prototype

> **Becho Sahi. Recycle Sahi.**  
> *Fair Price. Verified Recycler. Traceable Recycling.*

A high-fidelity interactive web prototype for the Kabadiwala Connect hackathon solution (SIH 2026).

---

## 🚀 Running the Prototype

Simply open `index.html` in any modern browser (Chrome recommended).

No build tools, no server, no dependencies to install.

---

## 📱 Primary Demo Flow (2–4 minutes)

1. **Home** → Click "E-WASTE बेचें"
2. **Select Material** → Tap PCB, or click "📸 फोटो से पहचानें"
3. **AI Classification** → Take photo → AI scans → PCB identified (91%)
4. **Create LOT** → Enter 25 kg → Create
5. **Price Intelligence** → See ₹95–₹115/kg range, trend chart
6. **Fair Value** → AI estimates ₹2,575 · Fairness Score 94/100
7. **Recycler Match** → GreenLoop: ₹108/kg · 94% match · Verified ✓
8. **Book Handover** → Select pickup → Send request
9. **Waiting** → Click "Demo: Confirm Recycler"
10. **Digital Handover** → Photo ✓ · Weight ✓ · GPS ✓ · Timestamp ✓ → HND-KC-82931
11. **Payment** → ₹2,743.20 · Cash · PAID ✓
12. **Earnings** → +₹2,743 added
13. **Traceability** → Full timeline visible

---

## 🌐 Language Switching

Language can be changed from **More → Language** or during onboarding.

Supported:
- **हिंदी (Hindi)** — Full support
- **English** — Full support  
- **मराठी (Marathi)** — Key screens

---

## 🏭 Recycler Dashboard

Click **"🏭 Recycler Dashboard"** in the left panel (desktop) or **More → Recycler Dashboard** to see:
- Incoming lots with Accept button
- Rate management
- Authorization panel
- Transaction history
- Traceability

---

## 📊 Data & AI Dashboard

Click **"📊 Data & AI"** panel to see:
- Platform statistics
- Material / Price / Recycler / Transaction datasets
- AI pipeline visualization
- Anomaly detection demo
- Unit economics comparison
- Field research placeholders
- Architecture diagram

---

## 🔌 Offline Mode

Click the **"Synced"** indicator (top of home screen) to toggle offline mode.
- Creates an offline queue
- Click **Sync Now** to simulate synchronization with animation

---

## 🎛️ Demo Controls (Desktop Panel)

| Control | Action |
|---------|--------|
| 🔄 Reset Demo | Restores original demo state |
| ⚡ Fast Mode | Reduces all simulated waits to 200ms |

---

## 📁 Project Structure

```
/
├── index.html     Main app + phone mockup
├── styles.css     Material 3 + Bento Grid design system
├── app.js         App logic, routing, screen renderers
├── data.js        Seed data (materials, recyclers, prices, lots)
├── i18n.js        Translations (Hindi, English, Marathi)
└── README.md
```

---

## ⚙️ Technology

- HTML5, CSS3, Vanilla JavaScript
- Material You (Material 3) design language
- Bento Grid layout
- Google Noto Sans + Noto Sans Devanagari fonts
- Web Speech API (voice)
- localStorage persistence
- CSS-only charts + animations

---

## ⚠️ Important Notes

All the following are **simulated** for this demo prototype:
- AI/ML model inference
- GPS location
- Payment processing
- Recycler authorization verification
- Backend API responses
- Historical price data

Authorization data is labeled "Demo authorization record" and does not represent any real government registration.

Field research profiles are placeholder data — **replace with actual field findings before submission**.

---

## 👥 Team: ProHack Rangers

Built for Smart India Hackathon (SIH) 2026.

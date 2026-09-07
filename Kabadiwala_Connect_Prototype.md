# MASTER BUILD PROMPT
## Kabadiwala Connect — Bringing the Informal Collector into the Formal Recycling Chain

You are an expert product designer, UX engineer, frontend engineer, and hackathon prototype developer.

Build a **high-fidelity, fully interactive web prototype** for the following hackathon problem statement:

> **Kabadiwala Connect – Bringing the Informal Collector into the Formal Recycling Chain**

The prototype will be presented as a **conceptual Android mobile application**, but for speed and demonstration it should be implemented as a responsive web application using:

- HTML
- CSS
- Vanilla JavaScript

Do NOT build a generic website.

The primary experience must look and behave like a **real Android mobile application displayed inside a smartphone mockup/frame**.

The prototype must be sufficiently polished that a hackathon judge watching a screen-recorded demo should believe they are seeing a working mobile product.

---

# 1. CORE PRODUCT CONCEPT

Kabadiwala Connect is a digital bridge between:

**Informal e-waste collectors / kabadiwalas**

and

**Authorized e-waste recyclers / aggregators**

The product solves four major problems:

1. Lack of transparent/fair e-waste prices
2. Difficulty discovering nearby authorized recyclers
3. Lack of transaction and material traceability
4. Formal recycling being inconvenient compared with the informal route

The product should make the formal recycling route:

- easier
- more profitable
- more transparent
- safer
- traceable

without creating additional compliance burden for the collector.

The core product journey is:

COLLECT E-WASTE
→ PHOTOGRAPH MATERIAL
→ AI CLASSIFICATION
→ ENTER APPROXIMATE WEIGHT
→ GET FAIR VALUE ESTIMATE
→ SEE CURRENT MARKET PRICE
→ FIND AUTHORIZED RECYCLERS
→ COMPARE OFFERS
→ SELECT RECYCLER
→ HANDOVER MATERIAL
→ DIGITAL VERIFICATION
→ PAYMENT
→ EARNINGS LEDGER
→ TRACEABLE RECYCLING RECORD

This journey must be the strongest and most polished workflow in the prototype.

---

# 2. IMPORTANT PROTOTYPE PRINCIPLE

This is a DEMONSTRATION PROTOTYPE.

It is acceptable to simulate:

- AI inference
- GPS
- payment confirmation
- recycler authorization verification
- historical price calculations
- offline synchronization
- backend responses
- database operations

BUT the UI should make these functions appear realistic.

Do not falsely claim that a real ML model, payment gateway, GPS backend, or government API is connected.

Where functionality is simulated, use subtle prototype labels such as:

- "AI estimate"
- "Demo data"
- "Simulated GPS"
- "Sample market data"

The application should nevertheless behave as if these systems exist.

---

# 3. TECHNOLOGY REQUIREMENTS

Build using:

- HTML5
- CSS3
- Vanilla JavaScript

Prefer:

- CSS variables
- CSS Grid/Flexbox
- modular JavaScript
- localStorage for simulated persistence
- IndexedDB if useful for offline demonstration

Do NOT require a complex backend.

The prototype must run locally.

Create a clean project structure such as:

/
├── index.html
├── styles.css
├── app.js
├── data.js
├── assets/
│   ├── materials/
│   ├── recyclers/
│   ├── icons/
│   └── safety/
└── README.md

If external libraries are absolutely necessary, keep dependencies minimal.

The prototype must be fast and lightweight.

---

# 4. VISUAL DESIGN DIRECTION

The visual identity should communicate:

- recycling
- trust
- simplicity
- money/value
- technology
- sustainability

Avoid making it look like a government portal.

Avoid excessive green.

Use a modern but friendly visual system.

Suggested design language:

- off-white/light background
- deep green as primary brand color
- secondary earthy/neutral tones
- dark text
- clear success states
- amber for warnings
- red only for dangerous safety warnings
- large cards
- rounded corners
- strong visual hierarchy
- large touch targets
- minimal text
- pictorial icons
- readable typography

Use a clean modern sans-serif font.

The interface should feel suitable for an entry-level Android phone.

Do not create tiny buttons or dense enterprise UI.

---

# 5. ANDROID PHONE MOCKUP

The collector application should appear inside a realistic smartphone frame.

Desktop presentation:

------------------------------------------------
|                                              |
|          KABADIWALA CONNECT                  |
|                                              |
|       ┌──────────────────────────┐           |
|       │  Android status bar       │           |
|       │                           │           |
|       │     APP CONTENT           │           |
|       │                           │           |
|       │                           │           |
|       │                           │           |
|       │                           │           |
|       │  Android navigation area  │           |
|       └──────────────────────────┘           |
|                                              |
------------------------------------------------

The phone should have:

- rounded corners
- subtle shadow
- status bar
- time
- battery indicator
- signal indicator
- speaker/notch
- Android-style bottom navigation area

The application should occupy a realistic 360–430px mobile viewport.

On desktop, center the phone.

Allow the desktop presentation background to remain clean and professional.

IMPORTANT:

The smartphone frame is a PRESENTATION DEVICE.

The actual application must remain responsive and functional inside it.

---

# 6. BRANDING

App name:

**Kabadiwala Connect**

Tagline:

**"Becho Sahi. Recycle Sahi."**

Alternative English tagline:

**"Fair Price. Verified Recycler. Traceable Recycling."**

Logo concept:

A simple combination of:

- recycling symbol
- location pin
- circular arrows
- small phone/connectivity element

Do not use a complicated logo.

Create a text-based/vector-style logo using CSS/SVG if no logo asset is available.

---

# 7. USER ROLES

The prototype must support TWO major experiences.

## ROLE A — Collector / Kabadiwala

Primary mobile application.

## ROLE B — Authorized Recycler

Desktop/tablet-style recycler dashboard.

Add a prototype role switcher outside the phone or inside a hidden/demo control.

For the main presentation, start with:

**Collector Mode**

Provide an obvious way to switch to:

**Recycler Mode**

The role switch should immediately show the appropriate interface.

---

# 8. COLLECTOR APPLICATION — MAIN NAVIGATION

Use a simple bottom navigation:

1. Home
2. Sell
3. Prices
4. Earnings
5. More

Do not use too many navigation items.

---

# 9. FIRST-TIME ONBOARDING

Create a short onboarding sequence.

## Screen 1

Logo:

♻️ Kabadiwala Connect

Headline:

**Becho Sahi. Recycle Sahi.**

Subtext:

"Apne e-waste ka sahi bhav paaiye aur verified recycler se judiye."

Button:

**शुरू करें**

---

## Screen 2 — Language

Title:

**भाषा चुनें**

Options:

- हिंदी
- मराठी
- English

Default:

Hindi

Store language selection in localStorage.

The entire collector application should switch between Hindi and English.

Marathi can be represented with a smaller but functional translation set for major screens.

IMPORTANT:

Do not make language switching decorative.

At least the primary workflow must actually change language.

---

## Screen 3 — Simple Profile

Ask only:

- Collector ID
- Preferred language
- Operating area

DO NOT ask for unnecessary personal information.

Example:

Collector ID:

**KC-1042**

Operating area:

**Chandigarh**

Button:

**आगे बढ़ें**

---

# 10. COLLECTOR HOME SCREEN

The home screen must be extremely simple.

Header:

"नमस्ते 👋"

"आज क्या करना है?"

Large primary card:

### 📸 E-WASTE बेचें

"फोटो लें और सही भाव पाएं"

Secondary cards:

### 💰 आज का भाव

"PCB ₹103/kg"

### 📦 मेरे LOTS

"3 active lots"

### 💵 मेरी कमाई

"₹8,913"

Then a safety banner:

### ⚠️ सुरक्षित तरीके से संभालें

"बैटरी और CRT को न खोलें या जलाएं"

Include a speaker/audio button.

Show a small offline status indicator:

**● Offline ready**

or

**☁ Synced**

depending on simulated state.

---

# 11. PRIMARY DEMO FLOW — SELL E-WASTE

This is the most important workflow.

The demo should revolve around a realistic example:

Material:

**PCB**

Approximate weight:

**25 kg**

Location:

**Chandigarh**

Current market range:

**₹95–₹115/kg**

Average:

**₹103/kg**

Recommended recycler offer:

**₹108/kg**

---

# 12. SCREEN — SELECT MATERIAL

Title:

**क्या बेचना है?**

Show large visual material cards.

Required categories:

1. CRT
2. LCD Panel
3. PCB
4. Cables
5. Batteries
6. Motors
7. Magnet Assemblies
8. Mixed Plastics

Each card should contain:

- icon/image
- Hindi name
- English name
- category

Example:

📟 PCB
"PCB / सर्किट बोर्ड"

Make the cards large enough for low-literacy users.

Also provide:

**📸 फोटो से पहचानें**

This triggers the AI classification simulation.

---

# 13. AI MATERIAL CLASSIFICATION SCREEN

When user clicks photo:

Show camera-like interface.

Title:

**सामग्री की फोटो लें**

Large camera area.

Button:

**📸 फोटो लें**

For the prototype, clicking it should simulate image capture.

Then show:

### AI पहचान रहा है...

Animated scanning/progress indicator.

After approximately 1–2 seconds:

### ✅ PCB पहचाना गया

Confidence:

**91%**

Detected material:

**Printed Circuit Board**

Category:

**PCB**

Buttons:

**✓ सही है**

**✎ बदलें**

Show a small note:

"AI classification is an estimate. Please verify."

The AI should appear intelligent but should not actually require an ML model for the prototype.

---

# 14. SCREEN — CREATE LOT

After confirming the material:

Title:

**LOT बनाएं**

Show:

Material:

PCB

Photo:

Captured material image

Approximate weight:

Large numeric input.

Example:

**25 kg**

Condition:

- Good
- Mixed
- Damaged

Default:

Mixed

Source:

- Household
- Office
- Repair Shop
- Scrap Collection
- Other

Location:

📍 Chandigarh

Use simulated GPS.

Button:

**LOT बनाएं**

---

# 15. LOT CREATION RESULT

Generate a unique Lot ID.

Example:

**LOT-KC-10293**

Show:

### आपका LOT तैयार है

PCB

25 kg

Collection location:
Chandigarh

Collection date/time:
03 Sep 2026, 4:30 PM

Estimated value:

**₹2,375 – ₹2,875**

Current average:

**₹103/kg**

Show a green confirmation animation.

Primary button:

**सही भाव देखें**

---

# 16. PRICE INTELLIGENCE SCREEN

This screen is critical.

Title:

**आज का सही भाव**

Material:

PCB

Location:

Chandigarh

Show:

LOW:
₹95/kg

AVERAGE:
₹103/kg

HIGH:
₹115/kg

Create a simple 30-day price trend graph.

Example data:

Day 1 → ₹91
Day 5 → ₹94
Day 10 → ₹97
Day 15 → ₹99
Day 20 → ₹104
Day 25 → ₹102
Today → ₹103

Display:

**↑ 8.4% vs 30-day average**

Label:

"Basic price trend"

Add a speaker button:

🔊

When clicked, use browser SpeechSynthesis if available.

Hindi audio:

"आज PCB का औसत भाव लगभग 103 रुपये किलो है।"

---

# 17. PRICE BOARD

Create a separate Prices screen.

Categories:

PCB
Cable
Battery
LCD
Motor
CRT
Mixed Plastic

Example:

PCB:
₹103/kg ↑

Cable:
₹72/kg

Battery:
₹145/kg ↑

LCD:
₹58/kg

Motor:
₹85/kg

CRT:
₹32/kg

Mixed Plastic:
₹28/kg

Each row should show:

- material
- current average
- trend arrow
- approximate range
- speaker icon

Add location selector:

**📍 Chandigarh**

---

# 18. PRICE HISTORY

When clicking PCB price:

Show:

### PCB Price History

Location:

Chandigarh

Time range:

7 days / 30 days / 90 days

Graph.

Below graph:

Highest:
₹115/kg

Lowest:
₹87/kg

Average:
₹103/kg

Latest:
₹103/kg

Also show recycler offers.

This demonstrates the required historical price dataset.

---

# 19. FAIR VALUE ESTIMATION

After price discovery:

Show:

### AI Fair Value Estimate

Material:
PCB

Weight:
25 kg

Market average:
₹103/kg

Historical trend:
+8.4%

Current nearby offers:
₹100–₹108/kg

Estimated fair value:

## ₹2,575

Fair range:

**₹2,375 – ₹2,875**

Add:

### Fairness Score

**94 / 100**

Explain:

✓ Based on current market range
✓ Historical prices
✓ Nearby recycler offers
✓ Material category
✓ Approximate weight

This is a key differentiator.

---

# 20. RECYCLER MATCHING SCREEN

Title:

**आपके लिए Recycler**

Subtitle:

"आपके LOT के लिए verified recyclers"

Display cards.

## Recycler A — Recommended

Name:

**GreenLoop Recycling**

Distance:

**6.2 km**

Offer:

**₹108/kg**

Total:

**₹2,700**

Authorization:

🟢 Verified

Pickup:

🟢 Available

Materials:

PCB, Cable, LCD

Match score:

**94% Match**

Reason:

✓ Authorized
✓ Best nearby price
✓ Accepts PCB
✓ Pickup available
✓ Nearby

Button:

**यह Recycler चुनें**

---

## Recycler B

Name:

**EcoCycle Materials**

Distance:

12.8 km

Offer:

₹115/kg

Total:

₹2,875

Authorization:

🟢 Verified

Pickup:

🔴 Drop-off only

Match:

82%

---

## Recycler C

Name:

**Local Scrap Hub**

Distance:

3.1 km

Offer:

₹72/kg

Authorization:

🔴 Not verified

DO NOT allow this recycler to be selected for the formal recycling route.

Instead show:

**Not eligible for formal handover**

This demonstrates that authorization status is a hard constraint.

---

# 21. RECYCLER DETAILS

When clicking a recycler:

Show:

Name:

GreenLoop Recycling

🟢 Authorization Verified

Authorization ID:

**AUTH-MH-RECY-20481**

Facility location:

Chandigarh

Materials accepted:

- PCB
- Cable
- LCD
- Motors

Offered rates:

PCB:
₹108/kg

Pickup:

Available

Service area:

15 km

Contact:

Phone icon

Transaction history:

4.8/5

Successful handovers:

128

Button:

**Select Recycler**

---

# 22. WHY THIS RECYCLER?

Add a dedicated expandable section:

### ⭐ क्यों सुझाया गया?

✓ Authorized recycler
✓ Highest nearby verified offer
✓ Accepts your material
✓ Pickup available
✓ Within service area
✓ Strong transaction history

This makes the recommendation explainable.

---

# 23. BOOK HANDOVER / PICKUP

After selecting recycler:

Screen:

### Handover चुनें

Options:

📍 Recycler pickup

🏭 Drop at recycler

Default:

Pickup.

Show:

Pickup location:

Current location

Estimated pickup:

Today

Time:

4:00–6:00 PM

Offer:

₹108/kg

Estimated total:

₹2,700

Button:

**Handover Request भेजें**

---

# 24. WAITING FOR RECYCLER CONFIRMATION

Show a realistic status screen:

### ⏳ Recycler confirmation pending

LOT-KC-10293

GreenLoop Recycling

₹108/kg

Status timeline:

✓ Lot created

✓ Price discovered

✓ Recycler selected

● Awaiting recycler confirmation

○ Handover

○ Payment

Auto-simulate confirmation after a few seconds or provide:

**Demo: Confirm Recycler**

button.

When confirmed:

### ✅ Recycler confirmed

---

# 25. RECYCLER CONFIRMATION

Show:

"GreenLoop Recycling has accepted your LOT."

Offer:

₹108/kg

Estimated total:

₹2,700

Reference:

**REQ-78321**

Button:

**Handover शुरू करें**

---

# 26. DIGITAL HANDOVER SCREEN

This must be visually impressive.

Title:

### Digital Handover

LOT:

LOT-KC-10293

Material:

PCB

Original approximate weight:

25 kg

Final verified weight:

25.4 kg

Final price:

₹108/kg

Final sale value:

**₹2,743.20**

Show four verification cards:

📸 Photo captured

⚖️ Weight recorded

📍 GPS captured

🕐 Timestamp captured

Show:

Collection location:
Chandigarh

Handover location:
GreenLoop Recycling Facility

Timestamp:
03 Sep 2026, 5:12 PM

---

# 27. VERIFICATION / DIGITAL SIGNATURE

Show:

### Verify Handover

Collector:

KC-1042

Recycler:

GreenLoop Recycling

LOT:

LOT-KC-10293

Unique Handover Reference:

## HND-KC-82931

Show a QR-code-like visual generated using CSS or SVG.

Text:

"Scan/verify this reference to confirm the material handover."

Recycler confirmation:

🟢 Confirmed

Button:

**Confirm Handover**

After confirmation:

Large success animation:

### ♻️ Handover Verified

---

# 28. PAYMENT SCREEN

Show:

### भुगतान

Final sale value:

# ₹2,743.20

Payment options:

🟢 Cash
⚪ UPI
⚪ Bank transfer

Important:

Digital payment must NOT be mandatory.

Make Cash the default available option.

Show:

Payment status:

**PAID**

Reference:

PAY-KC-23981

Button:

**Done**

---

# 29. EARNINGS LEDGER

After payment, update earnings automatically.

Screen:

### मेरी कमाई

Current month:

**₹8,913**

Paid:

₹7,713

Pending:

₹1,200

Recent transactions:

PCB
+₹2,743

Cable
+₹1,820

Motor
+₹3,100

Battery
+₹1,250

Include a simple earnings chart.

Allow filtering:

- Today
- This week
- This month

---

# 30. TRANSACTION DETAILS

Clicking the PCB transaction should open:

LOT-KC-10293

Material:
PCB

Weight:
25.4 kg

Estimated value:
₹2,575

Quoted price:
₹108/kg

Final price:
₹108/kg

Final sale:
₹2,743.20

Collection date/time:
03 Sep 2026, 4:30 PM

Collection location:
Chandigarh

Recycler:
GreenLoop Recycling

Handover location:
GreenLoop facility

Payment:
Paid

Transaction:
Completed

Handover reference:
HND-KC-82931

Show status timeline:

Collection
→ Valuation
→ Recycler matched
→ Accepted
→ Handover
→ Payment
→ Recycling

This is the core traceability record.

---

# 31. TRACEABILITY SCREEN

Create a dedicated screen:

### ♻️ Track My Material

Search:

LOT ID

Example:

LOT-KC-10293

Result:

PCB — 25.4 kg

Status:

🟢 Received by authorized recycler

Timeline:

03 Sep 4:30 PM
Collected

03 Sep 4:42 PM
Lot created

03 Sep 4:50 PM
Recycler matched

03 Sep 5:00 PM
Recycler accepted

03 Sep 5:12 PM
Handover verified

03 Sep 5:14 PM
Payment completed

03 Sep 6:00 PM
Recycler received

Future status can show:

○ Processing

○ Material recovery

○ Recycling completed

For the prototype, use simulated status.

---

# 32. MY LOTS SCREEN

Show:

Active Lots

LOT-KC-10294
Battery
12 kg
Awaiting recycler

LOT-KC-10295
Cable
40 kg
Price discovered

Completed:

LOT-KC-10293
PCB
25.4 kg
Completed ✓

Each lot should open its traceability record.

---

# 33. SAFETY CENTER

Create a dedicated safety section.

Title:

### सुरक्षित Recycling

Use extremely visual cards.

## Cable

🔥

### Cable मत जलाएं

"जलाने से जहरीला धुआं निकल सकता है।"

Speaker button.

---

## PCB

⚠️

### PCB को acid से process न करें

"Acid handling trained recycling facility को ही करें।"

---

## Battery

🔋

### Battery को न खोलें

❌ न puncture करें
❌ न जलाएं
❌ न तोड़ें

---

## CRT

📺

### CRT को सावधानी से संभालें

"Glass टूटने और hazardous material exposure से बचें।"

Use audio.

---

# 34. LOW-LITERACY DESIGN

This is extremely important.

The UI must not rely heavily on written text.

Use:

- icons
- images
- short labels
- large buttons
- voice playback
- visual status
- numeric values
- color/status indicators

Example:

Instead of:

"Create a digital material lot"

show:

📦

**LOT बनाएं**

Instead of long explanations, use:

₹103/kg

and:

🔊 सुनें

---

# 35. VOICE FEATURE

Implement browser Web Speech API where available.

Create a reusable function:

speakHindi(text)

When the user clicks speaker buttons, speak the relevant information.

Examples:

"आज PCB का औसत भाव 103 रुपये किलो है।"

"आपके लिए सबसे अच्छा recycler GreenLoop Recycling है।"

"यह recycler verified है।"

"आपकी payment 2743 रुपये 20 पैसे है।"

If speech synthesis isn't available, visually show:

🔊 Playing...

---

# 36. OFFLINE-FIRST DEMONSTRATION

This must be a visible feature.

Add a small connectivity indicator.

Example:

🟢 Online — Synced

and allow the demo to switch to:

🟠 Offline Mode

When offline mode is activated:

Show:

### 📡 आप Offline हैं

"आप फिर भी LOT बना सकते हैं।"

Core actions that should continue working:

✓ Create LOT
✓ Capture/select photo
✓ Enter weight
✓ Save transaction
✓ View saved lots
✓ View cached prices
✓ View cached recycler data
✓ View earnings

Actions requiring network should be marked:

"Will sync when connected."

---

# 37. OFFLINE SYNC SIMULATION

Create an Offline Queue.

When offline:

Create LOT.

Show:

### Saved Offline

LOT-KC-10296

Status:

🟠 Pending Sync

Queue:

2 records waiting

Then click:

**Sync Now**

Simulate connection returning.

Animation:

Offline data
→ Uploading
→ Validating
→ Synced

Result:

### ✓ All data synchronized

LOT status becomes:

🟢 Synced

This directly demonstrates offline-first architecture.

---

# 38. LOCAL DATA STORAGE

Use localStorage to persist:

- selected language
- collector profile
- lots
- transactions
- earnings
- offline queue
- selected recycler
- app state

The demo should survive page refreshes.

---

# 39. RECYCLER DASHBOARD

Create a separate desktop-friendly interface.

Header:

♻️ Kabadiwala Connect

GreenLoop Recycling

🟢 Authorized

Navigation:

Dashboard
Lots
Pickup Requests
Transactions
Rates
Facility
Traceability

---

# 40. RECYCLER DASHBOARD HOME

Cards:

New Lots:

12

Pickup Requests:

5

Today's Purchases:

₹28,450

Materials Received:

486 kg

Show:

### Incoming Lots

LOT-KC-10293

PCB
25 kg

Collector:
KC-1042

Distance:
6.2 km

Offer:
₹108/kg

Buttons:

Accept
View

---

# 41. RECYCLER LOT DETAILS

Show:

LOT ID

Material

Photo

Weight

Estimated value

Collector ID

Collection location

Timestamp

AI classification confidence

Current market price

Collector expected value

Recycler offer

Match score

Button:

**Accept LOT**

---

# 42. RECYCLER OFFER MANAGEMENT

Recycler should be able to edit rates.

Example:

PCB

Current rate:
₹108/kg

Input:

₹110/kg

Button:

Update rate

Show:

"Last updated: 5 minutes ago"

This demonstrates that the price dataset is dynamic rather than static.

---

# 43. MATERIALS ACCEPTED

Recycler profile should show:

✓ PCB
✓ Cables
✓ LCD
✓ Motors

✗ CRT

Service radius:

15 km

Pickup:

Available

---

# 44. AUTHORIZATION PANEL

Create a prominent verification section.

### Authorization

🟢 VERIFIED

Registration ID:

AUTH-MH-RECY-20481

Status:

Active

Materials covered:

PCB
Cable
LCD
Motor

Last verification:

02 Sep 2026

Do NOT invent a real government registration number.

Clearly label prototype data as:

"Demo authorization record"

---

# 45. RECYCLER TRANSACTION HISTORY

Table:

LOT ID
Material
Collector
Weight
Final Price
Date
Status

Example:

LOT-KC-10293
PCB
KC-1042
25.4 kg
₹2,743
03 Sep
Completed

---

# 46. RECYCLER TRACEABILITY

Recycler should be able to view:

LOT

→ Collector

→ Collection location

→ Handover location

→ Weight

→ Photos

→ Timestamp

→ Payment

→ Current recycling status

Add:

### Confirm Received

Button.

When clicked:

Status changes:

"Received by Recycler"

---

# 47. ADMIN / DATA INTELLIGENCE VIEW

Create an optional hidden/demo "Data & Intelligence" dashboard.

This is useful for judges because the problem explicitly requires structured datasets.

Show summary:

Collectors:
128

Lots:
2,841

Transactions:
2,216

Verified Recyclers:
34

Materials:
8

Total e-waste tracked:
18.4 tonnes

---

# 48. MATERIAL DATASET

Create a visible data table.

Columns:

- Material ID
- Category
- Sub-category
- Description
- Image
- Approx Weight
- Condition
- Source Type
- Estimated Value

Example:

MAT-001
PCB
Circuit Board
Mixed PCB
image
25kg
Mixed
Scrap Collection
₹2,575

---

# 49. PRICE DATASET

Table:

- Material
- Location
- Date
- Buying Price
- Quoted Price
- Unit
- Recycler
- Historical Average

Example:

PCB
Chandigarh
03 Sep 2026
₹103/kg
₹108/kg
kg
GreenLoop
₹99/kg avg

---

# 50. RECYCLER DATASET

Table:

- Recycler ID
- Name
- Location
- Materials Accepted
- Authorization Status
- Authorization Details
- Contact
- Offered Rate
- Pickup
- Service Area

---

# 51. TRANSACTION DATASET

Table:

- Lot ID
- Collector ID
- Material
- Weight
- Quoted Price
- Final Price
- Recycler ID
- Collection Location
- Handover Location
- Date/Time
- Payment Status
- Transaction Status

---

# 52. TRACEABILITY DATASET

Table:

- Lot ID
- Photo reference
- Weight
- Timestamp
- GPS
- Handover Reference
- Recycler Confirmation
- Subsequent Transaction Status

---

# 53. COLLECTOR DATASET

Keep it minimal.

Fields:

Collector ID
Preferred Language
General Operating Location
Transaction Count
Earnings History

DO NOT include unnecessary personal information.

---

# 54. AI/ML DATASET VIEW

Create a section called:

### AI Training Data

Show:

Images:
4,280

Material classes:
8

Price records:
12,450

Transaction records:
2,216

Locations:
18

Example classes:

PCB
Cable
Battery
LCD
CRT
Motor
Magnet Assembly
Mixed Plastic

Show a small note:

"Prototype dataset shown for demonstration. Production system requires appropriately sourced, validated field data."

This is important because the problem statement specifically asks teams to explain dataset source, quality, size and limitations.

---

# 55. AI DATA PIPELINE VISUALIZATION

Create a visual flow:

Field Collection
↓
Photo + Weight + Category
↓
Data Validation
↓
Anonymization
↓
Training Dataset
↓
AI Models
↓
Prediction
↓
Human/Collector Confirmation
↓
Validated Transaction
↓
Improved Dataset

This should demonstrate that the dataset is:

- generated
- validated
- updated
- reused

and NOT a static database.

---

# 56. AI/ML FEATURES PAGE

Create cards:

## Material Classification

Photo
→ PCB

Confidence:
91%

---

## Fair Price Estimation

Material
+ Weight
+ Location
+ Historical Price
+ Current Offers
→ ₹2,575

---

## Recycler Recommendation

Material
+ Distance
+ Authorization
+ Price
+ Pickup
→ GreenLoop Recycling

---

## Transaction Anomaly Detection

Normal PCB range:

₹95–₹115/kg

Recorded transaction:

₹62/kg

⚠️

**Unusual value detected**

"Requires review"

---

# 57. ANOMALY DETECTION DEMO

Create a demo transaction:

Material:

PCB

Weight:

20kg

Expected:

₹100–₹110/kg

Recorded:

₹55/kg

Show:

### ⚠️ Unusual Transaction

Reason:

"Recorded price is significantly below nearby market range."

This is a simulated AI feature.

---

# 58. FAIRNESS / TRUST SYSTEM

Create a "Fair Deal" indicator.

For every recycler offer:

Market range:

₹95–₹115/kg

Recycler offer:

₹108/kg

Fairness:

🟢 94/100

This score should be calculated from:

- market range
- historical price
- nearby offers

Use a deterministic JavaScript calculation.

---

# 59. RECYCLER MATCHING ALGORITHM

Implement a simple transparent scoring function.

Suggested weighting:

Authorization:
30%

Price:
25%

Distance:
20%

Pickup availability:
15%

Material compatibility:
10%

Unauthorized recyclers must receive:

0 eligibility

and must not appear as a valid formal recycling recommendation.

The UI should show:

Recycler A:
94%

Recycler B:
82%

Recycler C:
Not eligible

---

# 60. UNIT ECONOMICS PAGE

This is REQUIRED.

Create a screen for the pitch/demo:

### Collector Earnings Comparison

Current informal route:

Typical sale:
₹2,100

Price transparency:
Low

Verified recycler:
No

Traceability:
No

---

### With Kabadiwala Connect

Market estimate:
₹2,575

Best verified offer:
₹2,700

Final sale:
₹2,743

Collector receives:
₹2,743

Potential improvement:

**+₹643**

or:

**+30.6%**

IMPORTANT:

Label all such values as:

"Illustrative pilot scenario"

Do not claim these are actual measured market statistics.

---

# 61. PLATFORM BUSINESS MODEL

Show:

### How Kabadiwala Connect sustains itself

Primary model:

**Small B2B transaction/service fee paid by recycler**

Example:

Recycler transaction:
₹2,743

Platform service fee:
1.5%

Collector receives:
₹2,743

Platform revenue:
₹41.15

Also show future revenue possibilities:

- Recycler subscription
- EPR ecosystem analytics
- Aggregated price intelligence
- Logistics/pickup partnerships

Do NOT charge collectors a mandatory subscription.

---

# 62. FIELD RESEARCH SECTION

Create a prototype/presentation page:

### Field Validation

"Designed with input from working scrap collectors."

Show two anonymized profiles:

Collector 01

Role:
Informal scrap collector

Location:
Punjab

Key observation:

"Needs simple price comparison and prefers cash transactions."

---

Collector 02

Role:
Local scrap aggregator

Location:
Punjab

Key observation:

"Internet availability and recycler discovery are major friction points."

IMPORTANT:

These should be clearly marked as:

**Replace with actual field research findings before final submission.**

Do not fabricate actual interviews.

---

# 63. ACCESSIBILITY

Ensure:

- minimum 44px touch targets
- high contrast
- large numbers
- minimal text
- icon + text combinations
- no color-only status indicators
- audio support
- language switching
- simple navigation
- readable typography

Avoid long forms.

---

# 64. LOW-END DEVICE DESIGN

Simulate a lightweight application.

Avoid:

- huge animations
- heavy background video
- unnecessary gradients
- excessive shadows
- huge image assets

Use optimized images.

Show a conceptual app info screen:

### Works on entry-level Android

App size:
~8 MB

Low memory mode:
Enabled

Offline-first:
Enabled

IMPORTANT:

These are prototype target specifications, not measured APK statistics.

Label appropriately.

---

# 65. OFFLINE CACHED CONTENT

When offline, allow access to:

- last known prices
- recycler directory
- collector earnings
- saved LOTS
- safety guides
- transaction history

Show:

"Last synced: Today, 4:25 PM"

---

# 66. NOTIFICATION SYSTEM

Create simulated notifications:

### 🔔 Recycler Accepted

GreenLoop Recycling accepted LOT-KC-10293.

### 💰 Payment Received

₹2,743.20 received.

### ♻️ Material Received

Your PCB lot has been received by the authorized recycler.

### ⚠️ Price Alert

PCB prices increased 7% this week.

These should be clickable.

---

# 67. SEARCH

Provide search for:

- material
- recycler
- LOT ID
- transaction

Example:

Search:

LOT-KC-10293

→ Traceability record.

---

# 68. EMPTY STATES

Create polished empty states.

Example:

"No active LOTS"

📦

"अपना पहला e-waste LOT बनाएं"

Button:

"LOT बनाएं"

---

# 69. ERROR STATES

Create realistic errors.

Example:

Offline + trying to request live recycler:

"आप अभी Offline हैं."

"Available cached recyclers दिखाए जा रहे हैं."

Button:

"Later Sync करें"

Never make errors break the application.

---

# 70. SUCCESS ANIMATIONS

Use subtle animations for:

- AI detection
- LOT creation
- recycler acceptance
- handover verification
- payment
- synchronization

Do not over-animate.

---

# 71. PROTOTYPE DATA

Seed the application with realistic demo data.

## Materials

PCB
Cable
Battery
LCD Panel
CRT
Motor
Magnet Assembly
Mixed Plastic

## Locations

Chandigarh
Mohali
Panchkula
Ludhiana
Delhi

## Recyclers

GreenLoop Recycling
EcoCycle Materials
ReNew E-Waste Solutions
CircularTech Recycling

These are fictional prototype names.

Clearly mark them as demo data where appropriate.

---

# 72. DEMO PRIMARY DATA

The main demo should use:

Collector:

KC-1042

Language:

Hindi

Location:

Chandigarh

Material:

PCB

Weight:

25 kg

Current average:

₹103/kg

Market range:

₹95–₹115/kg

AI confidence:

91%

Fair value:

₹2,575

Recommended recycler:

GreenLoop Recycling

Distance:

6.2 km

Offer:

₹108/kg

Final verified weight:

25.4 kg

Final sale:

₹2,743.20

Handover ID:

HND-KC-82931

Payment:

Cash

Status:

Completed

---

# 73. DEMO MODE

Create a small hidden/demo control that allows the presenter to reset the prototype.

For example:

"Reset Demo"

Reset all data to the original state.

Also optionally include:

"Fast Demo Mode"

which reduces simulated waiting times.

---

# 74. PRESENTATION MODE

Create a clean desktop presentation mode.

When viewing on desktop:

LEFT SIDE:

Phone mockup

RIGHT SIDE:

Optional explanatory panel showing:

Current workflow:

1. AI Material Detection
2. Fair Price Discovery
3. Recycler Matching
4. Verified Handover
5. Payment & Traceability

This panel should not appear inside the phone.

It helps the presenter during the video.

---

# 75. MAIN VIDEO DEMONSTRATION FLOW

The prototype must make this sequence extremely smooth:

START

↓
Home

↓
Click:

📸 E-WASTE बेचें

↓
Select:

PCB

↓
Take photo

↓
AI identifies:

PCB — 91%

↓
Enter:

25 kg

↓
Create LOT

↓
LOT-KC-10293

↓
AI Fair Value:

₹2,575

Range:

₹2,375–₹2,875

↓
View Prices

PCB:

₹95–₹115/kg

Average:

₹103/kg

Trend:

↑ 8.4%

↓
Find Recycler

↓
GreenLoop:

₹108/kg

6.2 km

Authorized ✓

Pickup ✓

94% Match

↓
Select Recycler

↓
Recycler accepts

↓
Digital Handover

Photo ✓
Weight ✓
GPS ✓
Timestamp ✓

↓
Handover:

HND-KC-82931

↓
Payment:

₹2,743.20

Cash

PAID ✓

↓
Earnings:

+₹2,743.20

↓
Traceability:

Completed

↓
Show final success:

# "आपका e-waste verified recycler तक पहुंच गया।"

"Fair Price • Verified Recycler • Traceable Recycling"

This should be possible in approximately 2–4 minutes during the video.

---

# 76. SECOND VIDEO FLOW — RECYCLER

After completing collector workflow:

Switch to Recycler Mode.

Show:

Dashboard

↓
Incoming LOT

↓
LOT-KC-10293

↓
PCB — 25kg

↓
₹108/kg

↓
Accept

↓
Pickup request

↓
Confirm final weight

25.4kg

↓
Confirm handover

↓
Payment marked

PAID

↓
Traceability updated

This proves that the system is not just a collector-side mockup.

---

# 77. THIRD VIDEO FLOW — DATA/AI

Optionally show:

Data Dashboard

↓
Material Dataset

↓
Price Dataset

↓
Recycler Dataset

↓
Transaction Dataset

↓
Traceability Dataset

↓
AI Dataset

↓
Analytics

This demonstrates that the platform generates and uses structured data.

---

# 78. FINAL DASHBOARD / IMPACT SCREEN

Create an optional final screen:

### Kabadiwala Connect Impact

Lots tracked:
2,841

E-waste tracked:
18.4 tonnes

Verified recyclers:
34

Transactions:
2,216

Collectors:
128

Show:

### Our goal

**More value for collectors.**

**Safer handling.**

**More material into formal recycling.**

**Complete transaction traceability.**

---

# 79. PRODUCT ARCHITECTURE SCREEN

Create an architecture visualization:

COLLECTOR APP
↓
Offline Local Storage
↓
Sync Engine
↓
Backend/API
↓
┌───────────────┬───────────────┬───────────────┐
│ Material DB   │ Price DB      │ Recycler DB   │
└───────────────┴───────────────┴───────────────┘
↓
Transaction + Traceability DB
↓
AI/ML Layer
├── Material Classification
├── Price Estimation
├── Recycler Matching
└── Anomaly Detection

This is for demonstration and can be shown in the presentation mode.

---

# 80. DATA FLOW SCREEN

Visualize:

COLLECTOR

Photo
+
Weight
+
Location
+
Category

↓

MATERIAL DATASET

↓

PRICE ENGINE

↓

RECYCLER MATCHING

↓

TRANSACTION

↓

TRACEABILITY

↓

RECYCLING

↓

NEW DATA

↓

MODEL / PRICE IMPROVEMENT

This demonstrates the platform's continuous data loop.

---

# 81. SECURITY / PRIVACY PRINCIPLES

Include a small privacy section.

The application should communicate:

- minimal collector data
- Collector ID instead of unnecessary personal details
- transaction records are structured
- sensitive data should be anonymized where required
- no unnecessary personal information

Do not request:

- Aadhaar
- bank credentials
- passwords
- unnecessary identity documents

---

# 82. GOVERNMENT / FORMAL ECOSYSTEM POSITIONING

Do NOT make the application pretend to be a government application.

Position it as:

**Digital infrastructure connecting informal collectors to authorized recyclers.**

The product supports formal recycling and EPR participation.

Do not invent government APIs or claim live government verification.

For the prototype:

"Authorization verified" means the demo dataset contains a verified authorization status.

---

# 83. RESPONSIVE BEHAVIOR

Desktop:

Phone mockup + presentation panel.

Tablet:

Centered application.

Mobile:

Application should fill the viewport.

Do not allow horizontal scrolling.

---

# 84. UX RULES

The collector should never encounter:

- large paragraphs
- complicated tables
- complicated registration
- more than one primary action per screen
- technical terminology without explanation

Use:

- "बेचें"
- "भाव देखें"
- "Recycler खोजें"
- "LOT"
- "Payment"
- "Track"

rather than complicated technical language.

---

# 85. IMPORTANT VISUAL DETAILS

Use:

- ₹ symbol everywhere for money
- kg for weight
- location pins
- verification badges
- progress timelines
- status chips
- large numeric values
- visual price ranges
- simple charts
- recycler cards
- material photos/icons

Use consistent status system:

🟢 Completed / Verified

🟠 Pending / Offline

🔴 Error / Unsafe / Not Authorized

---

# 86. DO NOT DO THESE THINGS

Do NOT build:

- generic SaaS landing page
- generic admin dashboard as the main product
- complicated ERP interface
- social media features
- chat system unless necessary
- unnecessary user profiles
- cryptocurrency/blockchain
- unnecessary IoT hardware
- unnecessary AR/VR
- fake government integrations
- fake real-time APIs
- fake real-world claims
- excessive AI buzzwords

The product must remain focused on the stated problem.

---

# 87. REQUIREMENT COVERAGE CHECKLIST

Before considering the prototype complete, verify that it demonstrates ALL of the following:

## Collector

[ ] Vernacular UI
[ ] Hindi
[ ] Marathi support
[ ] English fallback
[ ] Low-literacy UI
[ ] Voice/audio
[ ] Material photography
[ ] Material categorization
[ ] Digital LOT creation
[ ] Approximate weight
[ ] Material condition
[ ] Source type
[ ] Instant value estimate
[ ] Current price board
[ ] Historical price
[ ] Basic price trend
[ ] Fairness score
[ ] Recycler discovery
[ ] Authorized recycler verification
[ ] Recycler matching
[ ] Price comparison
[ ] Pickup availability
[ ] Digital handover
[ ] Photo record
[ ] Weight record
[ ] GPS/location
[ ] Timestamp
[ ] Unique reference
[ ] Recycler confirmation
[ ] Payment
[ ] Cash payment
[ ] Optional digital payment
[ ] Earnings ledger
[ ] Pending dues
[ ] Transaction history
[ ] Traceability
[ ] Safety guidance
[ ] Offline mode
[ ] Offline queue
[ ] Synchronization
[ ] Entry-level Android design

## AI/ML

[ ] Material classification
[ ] Classification confidence
[ ] Price estimation
[ ] Recycler recommendation
[ ] Anomaly detection
[ ] Explainable recommendation
[ ] AI dataset representation

## Recycler

[ ] Recycler dashboard
[ ] Recycler profile
[ ] Authorization status
[ ] Materials accepted
[ ] Offered rates
[ ] Pickup availability
[ ] Service area
[ ] Incoming lots
[ ] Accept lot
[ ] Confirm weight
[ ] Confirm handover
[ ] Confirm payment
[ ] Transaction history
[ ] Traceability

## Data

[ ] Material dataset
[ ] Price dataset
[ ] Recycler dataset
[ ] Transaction dataset
[ ] Traceability dataset
[ ] Collector dataset
[ ] AI/ML training dataset
[ ] Data validation
[ ] Data updating
[ ] Data anonymization concept
[ ] Historical analysis
[ ] Price prediction concept
[ ] Material classification
[ ] Recycler recommendation
[ ] Transaction traceability

## Business

[ ] Collector earning comparison
[ ] Unit economics
[ ] Platform revenue model
[ ] Sustainability model

## Research

[ ] Field research section
[ ] Two collector/aggregator placeholders
[ ] Clearly marked as requiring actual field findings

---

# 88. QUALITY BAR

The final result must NOT feel like an AI-generated template.

It should feel like:

**A startup product prototype prepared for a national-level hackathon.**

Prioritize:

1. Strong visual hierarchy
2. Realistic mobile UI
3. Smooth interaction
4. Clear user journey
5. Professional typography
6. Consistent spacing
7. Realistic data
8. Fast transitions
9. Strong micro-interactions
10. Clear demonstration of the problem statement requirements

The primary collector workflow is more important than making every secondary screen perfect.

---

# 89. FINAL PRODUCT STORY

The UI should communicate this story without needing the presenter to explain every detail:

### BEFORE

Collector:

"I collected e-waste."

↓

"I don't know the fair price."

↓

"I don't know which recycler is authorized."

↓

"I have no proof of where the material went."

↓

"Formal recycling is inconvenient."

---

### WITH KABADIWALA CONNECT

Collector:

"Take a photo."

↓

"Know the material."

↓

"Know the fair price."

↓

"Compare verified recyclers."

↓

"Choose the best offer."

↓

"Hand over with digital proof."

↓

"Get paid."

↓

"Track where the material goes."

---

# 90. FINAL TAGLINE

End the major collector workflow with:

# ♻️ Becho Sahi. Recycle Sahi.

### Fair Price.
### Verified Recycler.
### Safe Handling.
### Digital Proof.
### Traceable Recycling.

---

# 91. IMPLEMENTATION PRIORITY

If time or complexity becomes an issue, prioritize in exactly this order:

### PRIORITY 1 — MUST WORK

Collector:

Home
→ Photo
→ AI classification
→ Weight
→ LOT
→ Price
→ Recycler matching
→ Recycler selection
→ Handover
→ Payment
→ Earnings
→ Traceability

### PRIORITY 2

Hindi/English switching
Voice
Offline mode
Offline sync
Recycler dashboard

### PRIORITY 3

Historical charts
AI anomaly detection
Dataset dashboards
Unit economics
Field research section
Architecture visualization

Do not sacrifice the primary workflow to build secondary features.

---

# 92. FINAL DEVELOPMENT INSTRUCTION

Build the application now.

Do not simply create static mockups.

Every major button must work.

Every major screen must be navigable.

Use simulated data and deterministic logic where a backend would normally be required.

Use localStorage for persistence.

Ensure refreshing the page does not unnecessarily destroy the demo state.

Ensure the primary demo flow can be completed without errors.

Make the application visually polished enough for screen recording.

After implementation, test the complete flow:

HOME
→ SELL
→ MATERIAL
→ AI
→ WEIGHT
→ LOT
→ PRICE
→ RECYCLER
→ ACCEPT
→ HANDOVER
→ PAYMENT
→ EARNINGS
→ TRACEABILITY

Then test:

OFFLINE
→ CREATE LOT
→ SAVE
→ SYNC

Then test:

RECYCLER MODE
→ INCOMING LOT
→ ACCEPT
→ HANDOVER
→ PAYMENT

Then test:

LANGUAGE SWITCH
→ Hindi
→ English
→ Marathi for supported screens

Fix all broken interactions, overflow issues, navigation problems, and inconsistent states.

The final prototype should communicate one central message:

> **Kabadiwala Connect turns an informal e-waste collection transaction into a fair, convenient, verified and traceable formal recycling journey — while keeping the experience simple enough for a low-literacy, low-connectivity user.**
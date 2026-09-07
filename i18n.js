// ============================================================
// i18n.js — Kabadiwala Connect Translations
// Supports: Hindi (hi), English (en), Marathi (mr)
// ============================================================

const KC_I18N = {

  // ─────────────────────────────────────────────────────────
  // NAVIGATION
  // ─────────────────────────────────────────────────────────
  nav_home:     { hi: 'होम',     en: 'Home',      mr: 'होम'     },
  nav_sell:     { hi: 'बेचें',   en: 'Sell',      mr: 'विका'    },
  nav_prices:   { hi: 'भाव',     en: 'Prices',    mr: 'भाव'     },
  nav_earnings: { hi: 'कमाई',    en: 'Earnings',  mr: 'कमाई'    },
  nav_more:     { hi: 'और',      en: 'More',      mr: 'अधिक'    },

  // ─────────────────────────────────────────────────────────
  // ONBOARDING
  // ─────────────────────────────────────────────────────────
  ob_headline:  { hi: 'बेचो सही। Recycle सही।', en: 'Fair Price. Verified Recycler.', mr: 'विका योग्य. Recycle योग्य.' },
  ob_sub:       { hi: 'अपने e-waste का सही भाव पाइए और verified recycler से जुड़िए।', en: 'Get fair value for your e-waste and connect with verified recyclers.', mr: 'तुमच्या e-waste साठी योग्य भाव मिळवा आणि verified recycler शी जोडा.' },
  ob_start:     { hi: 'शुरू करें', en: 'Get Started', mr: 'सुरु करा' },
  ob_lang:      { hi: 'भाषा चुनें', en: 'Choose Language', mr: 'भाषा निवडा' },
  ob_next:      { hi: 'आगे बढ़ें', en: 'Continue', mr: 'पुढे जा' },
  ob_collector_id: { hi: 'Collector ID', en: 'Collector ID', mr: 'Collector ID' },
  ob_area:      { hi: 'क्षेत्र', en: 'Operating Area', mr: 'कार्यक्षेत्र' },
  ob_profile_title: { hi: 'अपना प्रोफाइल', en: 'Your Profile', mr: 'तुमचे प्रोफाइल' },

  // ─────────────────────────────────────────────────────────
  // HOME
  // ─────────────────────────────────────────────────────────
  home_greeting:    { hi: 'नमस्ते ',           en: 'Hello ',              mr: 'नमस्कार '      },
  home_question:    { hi: 'आज क्या करना है?',    en: "What's on today?",      mr: 'आज काय करायचे?'  },
  home_sell_btn:    { hi: 'E-WASTE बेचें',        en: 'Sell E-Waste',          mr: 'E-WASTE विका'    },
  home_sell_sub:    { hi: 'फोटो लें और सही भाव पाएं', en: 'Photo  AI  Fair Price', mr: 'फोटो घ्या आणि योग्य भाव मिळवा' },
  home_price_label: { hi: 'आज का भाव',            en: "Today's Price",         mr: 'आजचा भाव'        },
  home_lots_label:  { hi: 'मेरे LOTS',             en: 'My LOTs',               mr: 'माझे LOTs'        },
  home_earn_label:  { hi: 'मेरी कमाई',             en: 'My Earnings',           mr: 'माझी कमाई'        },
  home_safety:      { hi: ' सुरक्षित तरीके से संभालें', en: ' Handle Safely', mr: ' सुरक्षितपणे हाताळा' },
  home_safety_sub:  { hi: 'बैटरी और CRT को न खोलें या जलाएं', en: 'Do not open or burn batteries or CRT screens', mr: 'बॅटरी आणि CRT उघडू किंवा जाळू नका' },
  home_online:      { hi: '☁ Synced',    en: '☁ Synced',    mr: '☁ Synced'    },
  home_offline:     { hi: '● Offline ready', en: '● Offline ready', mr: '● Offline ready' },
  home_start:       { hi: '→ शुरू करें',  en: '→ Start',       mr: '→ सुरू करा'  },
  home_see_prices:  { hi: 'भाव देखें',   en: 'See Prices',    mr: 'भाव बघा'     },
  home_my_lots_btn: { hi: 'मेरे LOTS',   en: 'My LOTs',       mr: 'माझे LOTS'   },
  home_search_btn:  { hi: 'खोजें',       en: 'Search',        mr: 'शोधा'        },

  // ─────────────────────────────────────────────────────────
  // SELL FLOW
  // ─────────────────────────────────────────────────────────
  sell_title:       { hi: 'क्या बेचना है?',         en: 'What to sell?',          mr: 'काय विकायचे?'       },
  sell_photo_btn:   { hi: ' फोटो से पहचानें',     en: ' Identify by Photo',   mr: ' फोटोने ओळखा'      },
  cam_title:        { hi: 'सामग्री की फोटो लें',    en: 'Take material photo',    mr: 'सामग्रीचा फोटो घ्या' },
  cam_btn:          { hi: ' फोटो लें',             en: ' Take Photo',          mr: ' फोटो घ्या'         },
  ai_scanning:      { hi: 'AI पहचान रहा है...',      en: 'AI identifying...',      mr: 'AI ओळखत आहे...'       },
  ai_found:         { hi: ' PCB पहचाना गया',        en: ' PCB Identified',       mr: ' PCB ओळखले'          },
  ai_confirm:       { hi: '✓ सही है',                en: '✓ Correct',              mr: '✓ बरोबर आहे'           },
  ai_change:        { hi: '✎ बदलें',                 en: '✎ Change',               mr: '✎ बदला'                },
  ai_note:          { hi: 'AI estimate — कृपया confirm करें', en: 'AI estimate — please verify', mr: 'AI estimate — कृपया सत्यापित करा' },

  // LOT CREATION
  lot_title:        { hi: 'LOT बनाएं',              en: 'Create LOT',             mr: 'LOT तयार करा'    },
  lot_weight:       { hi: 'अनुमानित वजन (kg)',      en: 'Approx. Weight (kg)',    mr: 'अंदाजे वजन (kg)' },
  lot_condition:    { hi: 'स्थिति',                  en: 'Condition',              mr: 'स्थिती'           },
  lot_source:       { hi: 'स्रोत',                   en: 'Source',                 mr: 'स्त्रोत'          },
  lot_location:     { hi: 'स्थान',                   en: 'Location',               mr: 'स्थान'            },
  lot_btn:          { hi: 'LOT बनाएं',               en: 'Create LOT',             mr: 'LOT तयार करा'    },
  lot_ready:        { hi: 'आपका LOT तैयार है',       en: 'Your LOT is ready',      mr: 'तुमचे LOT तयार आहे' },
  lot_see_price:    { hi: 'सही भाव देखें',           en: 'See Fair Price',         mr: 'योग्य भाव पहा'    },

  // PRICE SCREEN
  price_title:      { hi: 'आज का सही भाव',          en: "Today's Fair Price",     mr: 'आजचा योग्य भाव'   },
  price_low:        { hi: 'कम',                      en: 'Low',                    mr: 'कमी'               },
  price_avg:        { hi: 'औसत',                     en: 'Average',                mr: 'सरासरी'            },
  price_high:       { hi: 'अधिक',                    en: 'High',                   mr: 'जास्त'             },
  price_trend:      { hi: 'मूल्य प्रवृत्ति',          en: 'Price Trend',            mr: 'किंमत कल'          },
  price_board:      { hi: 'भाव बोर्ड',               en: 'Price Board',            mr: 'भाव बोर्ड'          },

  // FAIR VALUE
  fv_title:         { hi: 'AI Fair Value Estimate',  en: 'AI Fair Value Estimate', mr: 'AI Fair Value Estimate' },
  fv_fairness:      { hi: 'Fairness Score',           en: 'Fairness Score',         mr: 'Fairness Score'    },
  fv_find_recycler: { hi: 'Recycler खोजें',           en: 'Find Recycler',          mr: 'Recycler शोधा'     },

  // RECYCLER MATCHING
  rec_title:        { hi: 'आपके लिए Recycler',       en: 'Recyclers for You',      mr: 'तुमच्यासाठी Recycler' },
  rec_sub:          { hi: 'आपके LOT के लिए verified recyclers', en: 'Verified recyclers for your LOT', mr: 'तुमच्या LOT साठी verified recyclers' },
  rec_select:       { hi: 'यह Recycler चुनें',        en: 'Select This Recycler',   mr: 'हा Recycler निवडा'    },
  rec_not_eligible: { hi: 'Formal handover के लिए eligible नहीं', en: 'Not eligible for formal handover', mr: 'Formal handover साठी eligible नाही' },
  rec_why:          { hi: '⭐ क्यों सुझाया गया?',     en: '⭐ Why Recommended?',     mr: '⭐ का सुचवले?'          },
  rec_verified:     { hi: '✓ Authorized recycler',    en: '✓ Authorized recycler',  mr: '✓ अधिकृत recycler'    },
  rec_best_price:   { hi: '✓ Highest nearby verified offer', en: '✓ Highest nearby verified offer', mr: '✓ सर्वोत्तम verified ऑफर' },
  rec_pickup:       { hi: '✓ Pickup available',       en: '✓ Pickup available',     mr: '✓ Pickup उपलब्ध'     },
  rec_area:         { hi: '✓ Within service area',    en: '✓ Within service area',  mr: '✓ सेवा क्षेत्रात'   },
  rec_history:      { hi: '✓ Strong transaction history', en: '✓ Strong transaction history', mr: '✓ चांगला transaction इतिहास' },

  // HANDOVER
  handover_title:   { hi: 'Handover चुनें',          en: 'Choose Handover',        mr: 'Handover निवडा'      },
  handover_pickup:  { hi: ' Recycler pickup',       en: ' Recycler Pickup',     mr: ' Recycler pickup'   },
  handover_drop:    { hi: ' Drop at recycler',      en: ' Drop at Recycler',    mr: ' Recycler येथे द्या' },
  handover_send:    { hi: 'Handover Request भेजें',   en: 'Send Handover Request',  mr: 'Handover Request पाठवा' },
  handover_digital: { hi: 'Digital Handover',         en: 'Digital Handover',       mr: 'Digital Handover'    },
  handover_confirm: { hi: 'Confirm Handover',          en: 'Confirm Handover',       mr: 'Handover पुष्टी करा'  },
  handover_verified:{ hi: ' Handover Verified',     en: ' Handover Verified',   mr: ' Handover पडताळले' },
  handover_start:   { hi: 'Handover शुरू करें',        en: 'Start Handover',         mr: 'Handover सुरु करा'   },

  // PAYMENT
  pay_title:        { hi: 'भुगतान',                  en: 'Payment',                mr: 'पेमेंट'              },
  pay_cash:         { hi: ' Cash',                  en: ' Cash',                mr: ' Cash'              },
  pay_upi:          { hi: ' UPI',                   en: ' UPI',                 mr: ' UPI'               },
  pay_bank:         { hi: ' Bank Transfer',         en: ' Bank Transfer',       mr: ' Bank Transfer'     },
  pay_done:         { hi: 'Done',                     en: 'Done',                   mr: 'Done'                },
  pay_paid:         { hi: 'PAID ✓',                   en: 'PAID ✓',                 mr: 'PAID ✓'               },

  // EARNINGS
  earn_title:       { hi: 'मेरी कमाई',                en: 'My Earnings',            mr: 'माझी कमाई'           },
  earn_month:       { hi: 'इस महीने',                 en: 'This Month',             mr: 'या महिन्यात'          },
  earn_paid:        { hi: 'भुगतान किया',              en: 'Paid',                   mr: 'दिले'                 },
  earn_pending:     { hi: 'बाकी',                     en: 'Pending',                mr: 'बाकी'                 },
  earn_today:       { hi: 'आज',                       en: 'Today',                  mr: 'आज'                   },
  earn_week:        { hi: 'इस हफ्ते',                 en: 'This Week',              mr: 'या आठवड्यात'          },
  earn_all:         { hi: 'इस महीने',                 en: 'This Month',             mr: 'या महिन्यात'          },

  // LOTS
  lots_title:       { hi: 'मेरे LOTS',                en: 'My LOTs',                mr: 'माझे LOTs'            },
  lots_active:      { hi: 'Active',                   en: 'Active',                 mr: 'Active'               },
  lots_completed:   { hi: 'Completed',                en: 'Completed',              mr: 'Completed'            },

  // SAFETY
  safety_title:     { hi: 'सुरक्षित Recycling',        en: 'Safe Recycling',         mr: 'सुरक्षित Recycling'   },

  // TRACEABILITY
  track_title:      { hi: ' Track My Material',     en: ' Track My Material',   mr: ' माझे साहित्य ट्रॅक करा' },
  track_search:     { hi: 'LOT ID search करें...',    en: 'Search LOT ID...',       mr: 'LOT ID शोधा...'       },

  // OFFLINE
  offline_banner:   { hi: ' आप Offline हैं',        en: ' You are Offline',     mr: ' तुम्ही Offline आहात' },
  offline_note:     { hi: 'आप फिर भी LOT बना सकते हैं।', en: 'You can still create LOTs.', mr: 'तुम्ही अजूनही LOT तयार करू शकता.' },
  offline_sync:     { hi: 'Sync करें',                en: 'Sync Now',               mr: 'Sync करा'             },
  offline_saved:    { hi: 'Offline Saved',             en: 'Saved Offline',          mr: 'Offline जतन केले'     },
  offline_pending:  { hi: ' Sync Pending',           en: ' Pending Sync',        mr: ' Sync प्रलंबित'     },

  // MORE / SETTINGS
  more_title:       { hi: 'और',                       en: 'More',                   mr: 'अधिक'                 },
  more_safety:      { hi: 'सुरक्षा गाइड',              en: 'Safety Guide',           mr: 'सुरक्षा मार्गदर्शक'   },
  more_track:       { hi: 'Track Material',            en: 'Track Material',         mr: 'साहित्य ट्रॅक करा'   },
  more_about:       { hi: 'App के बारे में',           en: 'About App',              mr: 'App बद्दल'            },
  more_switch_role: { hi: ' Recycler Mode',          en: ' Recycler Mode',       mr: ' Recycler Mode'     },
  more_data:        { hi: ' Data Dashboard',         en: ' Data Dashboard',      mr: ' Data Dashboard'    },
  more_notifications: { hi: 'सूचनाएँ',                en: 'Notifications',         mr: 'सूचना'             },
  more_notifications_sub: { hi: '4 सूचनाएँ',         en: '4 notifications',       mr: '4 सूचना'            },
  more_safety_sub:  { hi: 'सुरक्षित तरीके',           en: 'Safe handling tips',    mr: 'सुरक्षित हाताळणी टिप्स' },
  more_track_sub:   { hi: 'अपना ई-वेस्ट ट्रैक करें', en: 'Trace your e-waste',    mr: 'तुमचे ई-वेस्ट ट्रॅक करा' },
  more_lots:        { hi: 'मेरे LOTs',               en: 'My LOTs',               mr: 'माझे LOTs'         },
  more_lots_sub:    { hi: 'आपके सभी LOTs',           en: 'All your lots',         mr: 'तुमचे सर्व LOTs'    },
  more_search:      { hi: 'खोजें',                    en: 'Search',                mr: 'शोधा'              },
  more_search_sub:  { hi: 'LOT, recycler, material खोजें', en: 'Find LOT, recycler, material', mr: 'LOT, recycler, material शोधा' },
  more_language:    { hi: 'भाषा',                    en: 'Language',              mr: 'भाषा'              },
  more_language_sub:{ hi: 'Hindi / English / Marathi', en: 'Hindi / English / Marathi', mr: 'Hindi / English / Marathi' },

  // GENERIC
  btn_back:         { hi: 'वापस',                     en: 'Back',                   mr: 'मागे'                 },
  btn_close:        { hi: 'बंद करें',                  en: 'Close',                  mr: 'बंद करा'              },
  status_verified:  { hi: ' Verified',               en: ' Verified',            mr: ' Verified'          },
  status_pending:   { hi: ' Pending',                en: ' Pending',             mr: ' Pending'           },
  status_not_auth:  { hi: ' Not Verified',           en: ' Not Verified',        mr: ' Verified नाही'     },
  demo_label:       { hi: 'Demo Data',                 en: 'Demo Data',              mr: 'Demo Data'            },
  confirm_recycler_btn: { hi: 'Demo: Recycler Confirm करें', en: 'Demo: Confirm Recycler', mr: 'Demo: Recycler पुष्टी करा' },

  // WAITING SCREEN
  wait_title:       { hi: '⏳ Recycler confirmation pending', en: '⏳ Recycler confirmation pending', mr: '⏳ Recycler पुष्टीची प्रतीक्षा' },
  wait_confirmed:   { hi: ' Recycler confirmed',     en: ' Recycler confirmed',   mr: ' Recycler पुष्टी'   },

  // DEMO CONTROLS
  demo_reset:       { hi: 'Demo Reset करें',           en: 'Reset Demo',             mr: 'Demo Reset करा'      },
  demo_fast:        { hi: 'Fast Mode',                  en: 'Fast Mode',              mr: 'Fast Mode'           },

  // FINAL
  final_msg:        { hi: 'आपका e-waste verified recycler तक पहुंच गया।', en: 'Your e-waste reached a verified recycler.', mr: 'तुमचा e-waste verified recycler पर्यंत पोहोचला.' },
  tagline_1:        { hi: 'Becho Sahi. Recycle Sahi.', en: 'Fair Price. Verified Recycler.', mr: 'विका योग्य. Recycle योग्य.' },

  // VOICE STRINGS (spoken aloud)
  voice_price:      { hi: 'आज PCB का औसत भाव लगभग 103 रुपये किलो है।', en: 'Today the average PCB price is approximately 103 rupees per kg.', mr: 'आज PCB चा सरासरी भाव सुमारे 103 रुपये किलो आहे.' },
  voice_recycler:   { hi: 'आपके लिए सबसे अच्छा recycler GreenLoop Recycling है।', en: 'The best recycler for you is GreenLoop Recycling.', mr: 'तुमच्यासाठी सर्वोत्तम recycler GreenLoop Recycling आहे.' },
  voice_payment:    { hi: 'आपकी payment 2743 रुपये 20 पैसे है।', en: 'Your payment is rupees 2743 point 20.', mr: 'तुमची payment 2743 रुपये 20 पैसे आहे.' },
  voice_cable_safe: { hi: 'Cable मत जलाएं। जलाने से जहरीला धुआं निकल सकता है।', en: 'Do not burn cables. Burning releases toxic fumes.', mr: 'Cable जाळू नका. जाळण्याने विषारी धूर निघतो.' },
  voice_battery_safe: { hi: 'Battery को न खोलें, न puncture करें, न जलाएं।', en: 'Do not open, puncture, or burn batteries.', mr: 'बॅटरी उघडू नका, puncture करू नका, जाळू नका.' },
  voice_pcb_safe: { hi: 'PCB को acid से process न करें। केवल trained facilities द्वारा किया जाना चाहिए।', en: 'Do not process PCBs with acid. Only trained facilities should handle acid.', mr: 'PCB वर acid प्रक्रिया करू नका. फक्त प्रशिक्षित सुविधा हँडल करावीत.' },
  voice_crt_safe: { hi: 'CRT संभालते समय सावधान रहें। कांच टूटने व exposure से बचें।', en: 'Handle CRTs carefully. Avoid glass breakage and hazardous exposure.', mr: 'CRT काळजीपूर्वक हाताळा. काच तुडवा आणि धोकादायक संपर्क टाळा.' },
};

// Helper: get translation
KC_I18N.t = (key, lang) => {
  const entry = KC_I18N[key];
  if (!entry) return key;
  return entry[lang] || entry['en'] || key;
};

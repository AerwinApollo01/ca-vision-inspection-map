/**
 * California AI Visual Inspection — opportunity dataset.
 *
 * Companies operating physical production in California whose quality-inspection
 * profile is a strong fit for deep-learning / edge AI visual inspection
 * (defects with real-world variation, high cost of escape, high-volume or
 * regulated production). Compiled from public information; locations reflect
 * principal California sites, not necessarily headquarters.
 *
 * fit: "Very High" = high-volume or zero-defect physical production with
 *      variation that rule-based machine vision handles poorly.
 *      "High" = strong fit, lower volume or partially outsourced production.
 */
window.COMPANIES = [
  // ---- Aerospace, Defense & Space ----
  { name: "Northrop Grumman", type: "Enterprise", vertical: "Aerospace, Defense & Space", region: "Greater LA / South Bay", city: "Redondo Beach", fit: "Very High", use: "Precision structures & electronics with full traceability requirements." },
  { name: "Lockheed Martin (Skunk Works)", type: "Enterprise", vertical: "Aerospace, Defense & Space", region: "Antelope Valley", city: "Palmdale", fit: "Very High", use: "Low-volume, zero-defect advanced airframe components." },
  { name: "Boeing", type: "Enterprise", vertical: "Aerospace, Defense & Space", region: "Greater LA / South Bay", city: "El Segundo / Long Beach", fit: "Very High", use: "Aerostructures and satellite assembly inspection." },
  { name: "RTX (Raytheon)", type: "Enterprise", vertical: "Aerospace, Defense & Space", region: "Greater LA / South Bay", city: "El Segundo", fit: "High", use: "Defense electronics and subassembly quality control." },
  { name: "SpaceX", type: "Startup/Scale-up", vertical: "Aerospace, Defense & Space", region: "Greater LA / South Bay", city: "Hawthorne", fit: "Very High", use: "High-rate, vertically integrated rocket & Starlink production; high scrap cost." },
  { name: "Anduril Industries", type: "Startup/Scale-up", vertical: "Aerospace, Defense & Space", region: "Orange County", city: "Costa Mesa", fit: "Very High", use: "Fast-scaling autonomous defense hardware manufacturing." },
  { name: "Relativity Space", type: "Startup/Scale-up", vertical: "Aerospace, Defense & Space", region: "Greater LA / South Bay", city: "Long Beach", fit: "Very High", use: "Additive-manufactured launch hardware; novel-process inspection." },
  { name: "Rocket Lab", type: "Startup/Scale-up", vertical: "Aerospace, Defense & Space", region: "Greater LA / South Bay", city: "Long Beach", fit: "Very High", use: "Launch vehicles and space systems production." },
  { name: "Vast", type: "Startup/Scale-up", vertical: "Aerospace, Defense & Space", region: "Greater LA / South Bay", city: "Long Beach", fit: "High", use: "Commercial space-station hardware, ramping production." },
  { name: "Varda Space Industries", type: "Startup/Scale-up", vertical: "Aerospace, Defense & Space", region: "Greater LA / South Bay", city: "El Segundo", fit: "High", use: "In-space manufacturing capsules; precision hardware." },
  { name: "Impulse Space", type: "Startup/Scale-up", vertical: "Aerospace, Defense & Space", region: "Greater LA / South Bay", city: "Redondo Beach", fit: "High", use: "Orbital transfer vehicles; propulsion hardware QC." },
  { name: "Hadrian", type: "Startup/Scale-up", vertical: "Aerospace, Defense & Space", region: "Greater LA / South Bay", city: "Torrance", fit: "Very High", use: "Automated precision machining for aerospace; inspection-native factory." },
  { name: "Apex Space", type: "Startup/Scale-up", vertical: "Aerospace, Defense & Space", region: "Greater LA / South Bay", city: "Los Angeles", fit: "Very High", use: "Productized satellite bus manufacturing at volume." },
  { name: "Astranis", type: "Startup/Scale-up", vertical: "Aerospace, Defense & Space", region: "Bay Area", city: "San Francisco", fit: "High", use: "Small GEO satellite production." },
  { name: "Planet Labs", type: "Startup/Scale-up", vertical: "Aerospace, Defense & Space", region: "Bay Area", city: "San Francisco", fit: "High", use: "High-volume small-satellite assembly." },

  // ---- Semiconductor & Electronics ----
  { name: "Intel", type: "Enterprise", vertical: "Semiconductor & Electronics", region: "Central Valley & Coast", city: "Folsom", fit: "Very High", use: "Wafer, die and packaging defect detection." },
  { name: "Applied Materials", type: "Enterprise", vertical: "Semiconductor & Electronics", region: "Bay Area", city: "Santa Clara", fit: "Very High", use: "Semiconductor equipment assembly; sub-micron tolerances." },
  { name: "Lam Research", type: "Enterprise", vertical: "Semiconductor & Electronics", region: "Bay Area", city: "Fremont", fit: "Very High", use: "Wafer-fab equipment manufacturing and component QC." },
  { name: "KLA", type: "Enterprise", vertical: "Semiconductor & Electronics", region: "Bay Area", city: "Milpitas", fit: "Very High", use: "Precision metrology/inspection systems production." },
  { name: "Western Digital", type: "Enterprise", vertical: "Semiconductor & Electronics", region: "Bay Area", city: "San Jose", fit: "Very High", use: "Storage device assembly; micro-defect detection." },
  { name: "AMD", type: "Enterprise", vertical: "Semiconductor & Electronics", region: "Bay Area", city: "Santa Clara", fit: "High", use: "Chip packaging and validation (largely fabless)." },
  { name: "Qualcomm", type: "Enterprise", vertical: "Semiconductor & Electronics", region: "San Diego", city: "San Diego", fit: "High", use: "RF/mobile chipset packaging and test." },
  { name: "Skyworks Solutions", type: "Enterprise", vertical: "Semiconductor & Electronics", region: "Orange County", city: "Irvine", fit: "Very High", use: "RF semiconductor and module production." },
  { name: "Kingston Technology", type: "Enterprise", vertical: "Semiconductor & Electronics", region: "Orange County", city: "Fountain Valley", fit: "Very High", use: "High-volume memory module assembly inspection." },

  // ---- Medical Devices ----
  { name: "Edwards Lifesciences", type: "Enterprise", vertical: "Medical Devices", region: "Orange County", city: "Irvine", fit: "Very High", use: "Life-critical heart valves; high-volume, FDA-regulated, manual-inspection heavy." },
  { name: "Boston Scientific", type: "Enterprise", vertical: "Medical Devices", region: "Greater LA / South Bay", city: "Valencia", fit: "Very High", use: "Implantable device manufacturing under FDA controls." },
  { name: "Masimo", type: "Enterprise", vertical: "Medical Devices", region: "Orange County", city: "Irvine", fit: "Very High", use: "Patient-monitoring electronics and sensors QC." },
  { name: "Applied Medical", type: "Enterprise", vertical: "Medical Devices", region: "Orange County", city: "Rancho Santa Margarita", fit: "Very High", use: "Vertically integrated, high-volume surgical device production." },
  { name: "Abbott", type: "Enterprise", vertical: "Medical Devices", region: "Orange County", city: "Various CA sites", fit: "High", use: "Diagnostics and device manufacturing inspection." },

  // ---- EV, Battery & Energy ----
  { name: "Tesla", type: "Enterprise", vertical: "EV, Battery & Energy", region: "Bay Area", city: "Fremont / Lathrop", fit: "Very High", use: "High-rate vehicle and battery production; paint, weld, assembly inspection." },
  { name: "Lucid Motors", type: "Startup/Scale-up", vertical: "EV, Battery & Energy", region: "Bay Area", city: "Newark", fit: "High", use: "EV powertrain and assembly QC (primary plant in AZ)." },
  { name: "Karma Automotive", type: "Startup/Scale-up", vertical: "EV, Battery & Energy", region: "Orange County", city: "Irvine", fit: "High", use: "Luxury EV assembly and components." },
  { name: "QuantumScape", type: "Startup/Scale-up", vertical: "EV, Battery & Energy", region: "Bay Area", city: "San Jose", fit: "Very High", use: "Solid-state battery cells; defect-sensitive at scale-up." },
  { name: "Sila Nanotechnologies", type: "Startup/Scale-up", vertical: "EV, Battery & Energy", region: "Bay Area", city: "Alameda", fit: "High", use: "Battery anode materials production." },
  { name: "Amprius Technologies", type: "Startup/Scale-up", vertical: "EV, Battery & Energy", region: "Bay Area", city: "Fremont", fit: "High", use: "High-energy silicon battery cell manufacturing." },
  { name: "Natron Energy", type: "Startup/Scale-up", vertical: "EV, Battery & Energy", region: "Bay Area", city: "Santa Clara", fit: "High", use: "Sodium-ion battery production ramp." },

  // ---- Robotics, Drones & eVTOL ----
  { name: "Figure AI", type: "Startup/Scale-up", vertical: "Robotics, Drones & eVTOL", region: "Bay Area", city: "Sunnyvale", fit: "Very High", use: "Humanoid robot production; precision actuator & assembly inspection." },
  { name: "Skydio", type: "Startup/Scale-up", vertical: "Robotics, Drones & eVTOL", region: "Bay Area", city: "San Mateo", fit: "Very High", use: "High-volume autonomous drone manufacturing." },
  { name: "Zipline", type: "Startup/Scale-up", vertical: "Robotics, Drones & eVTOL", region: "Bay Area", city: "South San Francisco", fit: "High", use: "Delivery-drone production and components." },
  { name: "Archer Aviation", type: "Startup/Scale-up", vertical: "Robotics, Drones & eVTOL", region: "Bay Area", city: "San Jose", fit: "Very High", use: "eVTOL aircraft; aerospace-grade defect tolerance." },
  { name: "Joby Aviation", type: "Startup/Scale-up", vertical: "Robotics, Drones & eVTOL", region: "Central Valley & Coast", city: "Marina", fit: "Very High", use: "eVTOL airframe and composite inspection." },
  { name: "Zoox (Amazon)", type: "Startup/Scale-up", vertical: "Robotics, Drones & eVTOL", region: "Bay Area", city: "Foster City", fit: "High", use: "Autonomous-vehicle hardware production." },
  { name: "Saildrone", type: "Startup/Scale-up", vertical: "Robotics, Drones & eVTOL", region: "Bay Area", city: "Alameda", fit: "High", use: "Autonomous maritime vehicle manufacturing." },

  // ---- Food, Beverage & Packaging ----
  { name: "PepsiCo / Frito-Lay", type: "Enterprise", vertical: "Food, Beverage & Packaging", region: "Inland Empire", city: "Rancho Cucamonga / Bakersfield", fit: "Very High", use: "High-throughput packaging, fill, seal and label inspection." },
  { name: "Smithfield (Farmer John)", type: "Enterprise", vertical: "Food, Beverage & Packaging", region: "Greater LA / South Bay", city: "Vernon", fit: "Very High", use: "Food processing; contamination and packaging QC." },
  { name: "The Wonderful Company", type: "Enterprise", vertical: "Food, Beverage & Packaging", region: "Central Valley & Coast", city: "Lost Hills / Los Angeles", fit: "Very High", use: "Produce sorting, grading and packaging at scale." },
  { name: "Foster Farms", type: "Enterprise", vertical: "Food, Beverage & Packaging", region: "Central Valley & Coast", city: "Livingston", fit: "Very High", use: "Poultry processing inspection and packaging." },
  { name: "Driscoll's", type: "Enterprise", vertical: "Food, Beverage & Packaging", region: "Central Valley & Coast", city: "Watsonville", fit: "High", use: "Berry grading, sorting and pack quality." },

  // ---- Industrial & Advanced Manufacturing ----
  { name: "Parker Aerospace", type: "Enterprise", vertical: "Industrial & Advanced Mfg", region: "Orange County", city: "Irvine", fit: "Very High", use: "Flight-critical fluid/motion components inspection." },
  { name: "Honeywell Aerospace", type: "Enterprise", vertical: "Industrial & Advanced Mfg", region: "Greater LA / South Bay", city: "Torrance", fit: "High", use: "Aerospace components and mechanical assemblies." },
  { name: "Gateway Cities industrial base", type: "Cluster", vertical: "Industrial & Advanced Mfg", region: "Greater LA / South Bay", city: "Vernon / Commerce / Santa Fe Springs / City of Industry", fit: "Very High", use: "Dense mid-market plastics, injection molding & metal fab — ideal first-station + multi-line rollout volume." }
];

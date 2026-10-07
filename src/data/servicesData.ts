import { ServiceItem, ACProblemItem, ReviewItem } from '../types';

export const BUSINESS_INFO = {
  name: 'Coolronix',
  tagline: 'Beat the Heat, Not Your Budget.',
  phoneDisplay: '093928 73096',
  phoneTel: 'tel:+919392873096',
  phoneRaw: '+919392873096',
  whatsappUrl: 'https://wa.me/919392873096',
  address: 'Uppal, Hyderabad, Telangana 500039',
  city: 'Hyderabad',
  state: 'Telangana',
  pincode: '500039',
  country: 'India',
  rating: 5.0,
  ratingCount: 'Verified Google Rating',
  serviceArea: 'Hyderabad & Greater Twin Cities',
  operatingHours: 'Mon - Sun: 8:00 AM - 9:00 PM',
};

export const HYDERABAD_AREAS = [
  'Uppal',
  'Habsiguda',
  'Nacharam',
  'Tarnaka',
  'Ramanthapur',
  'Boduppal',
  'Secunderabad',
  'Dilsukhnagar',
  'LB Nagar',
  'Malakpet',
  'Begumpet',
  'Ameerpet',
  'Kukatpally',
  'Madhapur',
  'Gachibowli',
  'Banjara Hills',
  'Jubilee Hills',
  'Kondapur',
  'Hitec City',
  'Miyapur',
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: '1',
    number: '01',
    slug: 'ac-repair-service',
    title: 'AC Repair & Service',
    shortDescription: 'Repair and servicing for common AC cooling and performance problems.',
    heroHeadline: 'AC Repair & Service in Hyderabad',
    heroHighlight: 'Fast Diagnosis & Lasting Fixes.',
    intro: 'When your air conditioner malfunctions during the intense Hyderabad heat, prompt diagnosis makes all the difference. Coolronix delivers systematic AC troubleshooting and repair across all major brands and models for both Split and Window ACs.',
    acTypes: ['Split AC', 'Window AC', 'Inverter AC', 'Non-Inverter AC'],
    serviceCategory: 'repair',
    warranties: ['PCB repairs: 60 days warranty', 'AC water leakage service: 2 weeks warranty'],
    commonProblems: [
      {
        title: 'AC blowing warm or ambient air',
        description: 'Compressor not engaging, capacitor failure, or cooling coil restriction.',
      },
      {
        title: 'Unusual grinding or buzzing noise',
        description: 'Loose blower bearings, outdoor motor malfunction, or vibration in chassis.',
      },
      {
        title: 'Frequent tripping of MCB switch',
        description: 'Electrical short circuit, high amp draw, or failing compressor windings.',
      },
      {
        title: 'Foul or burning smell from vents',
        description: 'Bacterial buildup on cooling fins or overheating wire insulation.',
      },
    ],
    whatIsIncluded: [
      'Comprehensive 14-point electrical and mechanical diagnostic check',
      'Inspection of compressor, dual run capacitor, and fan motors',
      'Thermostat sensor calibration and PCB relay testing',
      'Filter screening and cooling coil airflow clearance assessment',
      'Gas pressure check and preliminary leak detection',
      'Transparent on-site breakdown of repair requirements before work begins',
    ],
    benefits: [
      {
        title: 'Transparent Diagnosis',
        description: 'We test each component thoroughly so you only repair what is actually worn out.',
      },
      {
        title: 'Genuine Replacement Spares',
        description: 'Compatibility-matched relays, capacitors, and contactors to protect compressor lifespan.',
      },
      {
        title: 'Rapid Local Hyderabad Dispatch',
        description: 'Prompt service technicians dispatched across Uppal, Secunderabad, and wider Hyderabad.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Call or WhatsApp',
        description: 'Reach out to 093928 73096 describing the symptom (e.g. not cooling, tripping).',
      },
      {
        step: '02',
        title: 'On-Site Diagnostic',
        description: 'Our technician inspects indoor & outdoor units using multimeters and pressure gauges.',
      },
      {
        step: '03',
        title: 'Clear Explanation',
        description: 'We explain the exact cause and give you a straightforward, affordable repair quote.',
      },
      {
        step: '04',
        title: 'Precision Fix & Testing',
        description: 'Faulty parts replaced or repaired, followed by cooling delta temperature verification.',
      },
    ],
    faqs: [
      {
        question: 'Why is my AC running but not cooling the room?',
        answer: 'This is commonly caused by a depleted refrigerant level, a clogged air filter choking the evaporator coil, a failed outdoor capacitor preventing the compressor from kicking on, or a dirty condenser coil unable to dissipate heat.',
      },
      {
        question: 'Do you repair both Split ACs and Window ACs in Hyderabad?',
        answer: 'Yes. Coolronix specializes in both Split AC and Window AC units, including modern inverter models and conventional non-inverter systems.',
      },
      {
        question: 'How quickly can a Coolronix technician visit my home in Hyderabad?',
        answer: 'We provide prompt same-day service scheduling across Hyderabad, with prioritized dispatch in Uppal, Habsiguda, Secunderabad, and eastern zones.',
      },
    ],
  },
  {
    id: '2',
    number: '02',
    slug: 'ac-gas-refill',
    title: 'AC Gas Refill',
    shortDescription: 'Gas refill and charging service for AC systems that require it.',
    heroHeadline: 'AC Gas Refill in Hyderabad',
    heroHighlight: 'Safe Leak Check & Precision Recharging.',
    intro: 'Air conditioners do not consume refrigerant like fuel; if gas is low, there is almost certainly a microscopic leak or flare joint seepage. Coolronix conducts proper leak checks before refilling with certified R32, R410A, or R22 refrigerants.',
    acTypes: ['Split AC', 'Window AC', 'Inverter AC'],
    serviceCategory: 'gas',
    warranties: ['Gas charging: 60 days warranty'],
    commonProblems: [
      {
        title: 'Ice or frost formation on copper pipes',
        description: 'Low refrigerant causes evaporator pressure to plummet below freezing.',
      },
      {
        title: 'Hissing sound near indoor unit or valves',
        description: 'Refrigerant escaping through fractured flare nuts or valve cores.',
      },
      {
        title: 'AC outdoor unit running without cooling',
        description: 'Compressor runs continuously while room temperature barely drops.',
      },
      {
        title: 'Spike in electricity bills with diminished cooling',
        description: 'Undercharged system forces compressor to work harder for longer cycles.',
      },
    ],
    whatIsIncluded: [
      'Digital or manifold gauge pressure evaluation (standing & suction pressure)',
      'Leak detection test at flare connections, service valves, and U-bends',
      'Nitrogen pressure testing if micro-leak is suspected',
      'Deep system evacuation (vacuuming) to eliminate moisture and non-condensables',
      'Refrigerant charging weighed to manufacturer specification (R32, R410A, R22)',
      'Post-fill amp draw verification and temperature split measurement',
    ],
    benefits: [
      {
        title: 'Leak Check First',
        description: 'We do not simply dump gas into a leaking system; we identify and secure connection points.',
      },
      {
        title: 'Pure Grade Refrigerants',
        description: 'Zero contamination, protecting compressor oil stability and heat transfer performance.',
      },
      {
        title: 'Optimal Cooling Return',
        description: 'Restore peak cooling capacity and lower continuous compressor electricity consumption.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Pressure Assessment',
        description: 'Technician connects brass manifold gauges to measure baseline suction pressure.',
      },
      {
        step: '02',
        title: 'Leak Pinpointing',
        description: 'Soap bubble or electronic sniffing applied along copper flare joints and service ports.',
      },
      {
        step: '03',
        title: 'Joint Tightening & Vacuuming',
        description: 'Loose flare nuts flared/tightened and moisture removed using vacuum pump.',
      },
      {
        step: '04',
        title: 'Calibrated Gas Charging',
        description: 'Refrigerant added while monitoring suction PSI and outdoor compressor ampere draw.',
      },
    ],
    faqs: [
      {
        question: 'How do I know if my AC truly needs gas refill?',
        answer: 'Tell-tale signs include ice/frost accumulation on the thin copper line, warm airflow from vents despite the compressor running, and a hissing noise. A proper pressure gauge check by Coolronix confirms the exact PSI.',
      },
      {
        question: 'Is it dangerous to recharge AC gas without fixing leaks?',
        answer: 'Yes. Adding gas without fixing leaks wastes your money, harms cooling efficiency, and can cause the compressor to burn out due to lack of returning refrigerant oil.',
      },
      {
        question: 'What types of refrigerants does Coolronix handle in Hyderabad?',
        answer: 'We handle R32 (eco-friendly standard in modern inverters), R410A (twin-rotary inverters), and R22 (older non-inverter systems).',
      },
    ],
  },
  {
    id: '3',
    number: '03',
    slug: 'ac-pre-piping',
    title: 'AC Pre-Piping',
    shortDescription: 'Professional copper piping and drainage preparation for new AC installations.',
    heroHeadline: 'AC Pre-Piping in Hyderabad',
    heroHighlight: 'The Right Foundation for a Clean AC Installation.',
    intro: 'Coolronix provides professional AC pre-piping for new homes, offices, renovations, and spaces where the copper line and drain route should be prepared before the AC units are installed. Proper pipe sizing, insulation, drainage slope, and routing help reduce future leakage and installation problems.',
    acTypes: ['Split AC', 'Inverter AC', 'New Construction', 'Renovation Projects'],
    serviceCategory: 'pre-piping',
    commonProblems: [
      { title: 'Planning AC piping before interior work', description: 'Prepare concealed copper and drain routes before walls, false ceilings, or finishing work is completed.' },
      { title: 'Poorly routed copper piping', description: 'Incorrect pipe routing can create bends, service difficulties, and future leakage risks.' },
      { title: 'Incorrect drain slope', description: 'Poor drainage planning can lead to water leakage and condensate backflow.' },
      { title: 'Insufficient pipe insulation', description: 'Improper insulation can reduce efficiency and cause condensation around the pipe route.' },
    ],
    whatIsIncluded: [
      'Site inspection and AC pipe-route planning',
      'Copper pipe routing and proper insulation',
      'Condensate drain pipe routing with suitable slope',
      'Wall/ceiling route coordination for concealed piping',
      'End-point protection and identification for future AC installation',
      'Final route and connection-point inspection',
    ],
    benefits: [
      { title: 'Main Focus Service', description: 'Purpose-built pre-piping support for customers planning AC installation during construction or renovation.' },
      { title: 'Cleaner Installation', description: 'Properly planned routes help keep copper and drain lines organized and reduce visible wiring or piping.' },
      { title: 'Future-Ready', description: 'Correct pipe endpoints make the later AC installation process easier and more efficient.' },
    ],
    process: [
      { step: '01', title: 'Site Assessment', description: 'We inspect the room layout, AC location, outdoor-unit position, and practical pipe route.' },
      { step: '02', title: 'Route Planning', description: 'Copper and drain routes are planned with suitable bends, slope, insulation, and access points.' },
      { step: '03', title: 'Pre-Piping Work', description: 'The piping and drainage route is installed and protected according to the planned layout.' },
      { step: '04', title: 'Final Inspection', description: 'We check the route, endpoints, drainage arrangement, and readiness for future AC installation.' },
    ],
    faqs: [
      { question: 'What is AC pre-piping?', answer: 'AC pre-piping is the preparation of copper refrigerant lines, insulation, and condensate drainage routes before the AC indoor and outdoor units are installed.' },
      { question: 'When should AC pre-piping be done?', answer: 'It is commonly planned during new construction, renovation, or interior work so the piping can be routed neatly before final walls, ceilings, and finishes are completed.' },
      { question: 'Can Coolronix do pre-piping for inverter split ACs?', answer: 'Yes. Coolronix can plan pre-piping for compatible Split and Inverter AC installations based on the site layout and required pipe route.' },
    ],
  },
  {
    id: '4',
    number: '04',
    slug: 'ac-installation',
    title: 'AC Installation',
    shortDescription: 'Professional AC installation for your cooling setup.',
    heroHeadline: 'Professional AC Installation in Hyderabad',
    heroHighlight: 'Precision Mounting & Leak-Proof Flaring.',
    intro: 'Improper installation accounts for over 70% of premature AC breakdowns and gas leakages. Coolronix ensures perfect level mounting, vibration isolation, insulated copper runs, and thorough vacuuming for new or relocated units.',
    acTypes: ['Split AC (0.8T to 2.5T)', 'Window AC', 'New Units', 'Relocation & Uninstallation'],
    serviceCategory: 'installation',
    warranties: ['AC installation: 2 weeks warranty'],
    commonProblems: [
      {
        title: 'Vibrations rattling through bedroom walls',
        description: 'Unbalanced wall brackets or absence of rubber anti-vibration dampers.',
      },
      {
        title: 'Indoor water dripping inside the room',
        description: 'Improper downward gradient on the condensate drain pipe.',
      },
      {
        title: 'Premature gas leaks after recent relocation',
        description: 'Poor flare nut threading, overtightening, or uninsulated pipe bends.',
      },
      {
        title: 'Sub-par cooling in brand new AC',
        description: 'Failure to vacuum copper lines prior to releasing refrigerant.',
      },
    ],
    whatIsIncluded: [
      'Indoor unit metal backplate spirit-level alignment and heavy-duty anchoring',
      'Core hole drilling with proper outward slope for condensation drainage',
      'Outdoor heavy gauge L-bracket mounting with vibration dampeners',
      'Copper tubing flare connection, pressure tightening, and UV insulation wrapping',
      'System vacuuming to clear moisture prior to opening refrigerant valves',
      'Safe electrical wiring termination to designated 16A/20A power outlet',
    ],
    benefits: [
      {
        title: 'Zero Wall Vibration',
        description: 'Sturdy bracket anchoring with heavy-duty fasteners prevents hums and wall stress.',
      },
      {
        title: 'Proper Drainage Slope',
        description: 'Guarantees condensation water drains completely outside with no indoor overflows.',
      },
      {
        title: 'Factory-Grade Vacuuming',
        description: 'Crucial for inverter units to ensure optimum compressor longevity and energy savings.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Site Survey & Placement',
        description: 'Determine optimal indoor airflow dispersion and outdoor heat rejection location.',
      },
      {
        step: '02',
        title: 'Drilling & Bracket Mount',
        description: 'Spirit-level alignment and secure fixing of indoor backplate and outdoor stand.',
      },
      {
        step: '03',
        title: 'Piping & Flare Fitting',
        description: 'Flaring copper tubes, insulating lines, and routing drain line with continuous drop.',
      },
      {
        step: '04',
        title: 'Vacuum & Performance Test',
        description: 'Evacuation, refrigerant release, electrical check, and 20-minute run test.',
      },
    ],
    faqs: [
      {
        question: 'Do you also provide AC uninstallation in Hyderabad?',
        answer: 'Yes! We provide safe AC uninstallation with proper refrigerant pump-down, ensuring no gas is lost when moving your AC.',
      },
      {
        question: 'What wall thickness and mounting hardware do you use?',
        answer: 'We use heavy-gauge powder-coated outdoor brackets with high-tensile anchor bolts suited for concrete and brick walls commonly found in Hyderabad homes.',
      },
      {
        question: 'How long does a standard Split AC installation take?',
        answer: 'A standard split AC installation typically takes between 2 to 3 hours depending on copper pipe distance and outdoor unit accessibility.',
      },
    ],
  },
  {
    id: '5',
    number: '05',
    slug: 'ac-maintenance',
    title: 'AC Maintenance',
    shortDescription: 'Regular servicing and maintenance to help keep your AC performing well.',
    heroHeadline: 'Comprehensive AC Maintenance in Hyderabad',
    heroHighlight: 'Deep Coil Jet Cleaning & Health Check.',
    intro: 'Hyderabad dust, pollen, and airborne pollution quickly coat cooling coils with grime, choking airflow and forcing your compressor to consume up to 30% more power. Coolronix comprehensive maintenance restores airflow, freshens air, and protects internal components.',
    acTypes: ['Split AC', 'Window AC', 'Inverter Systems', 'Annual Preventative Care'],
    serviceCategory: 'maintenance',
    warranties: ['AC service: 2 weeks warranty'],
    commonProblems: [
      {
        title: 'Weak, sluggish airflow from louvers',
        description: 'Blower wheel clogged with caked-on dust and fungal growth.',
      },
      {
        title: 'Musty or stale odor upon switching on',
        description: 'Stagnant water in condensate tray and mildew on cooling fins.',
      },
      {
        title: 'Outdoor unit overheating and cutting off',
        description: 'Condenser fins blocked with dust, preventing heat exhaust.',
      },
      {
        title: 'Sudden unexpected breakdowns during peak summer',
        description: 'Unserviced capacitors or loose terminals overheating under heavy loads.',
      },
    ],
    whatIsIncluded: [
      'High-pressure water jet washing with waterproof service jacket protection',
      'Evaporator coil and condenser coil deep cleansing',
      'Air filter removal, antimicrobial wash, and reinstall',
      'Blower cylinder drum cleaning and fan blade de-dusting',
      'Condensate drain tray flush and anti-clog pipe clearance',
      'Operating electrical voltage, capacitor value, and running ampere test',
    ],
    benefits: [
      {
        title: 'Lower Electricity Bills',
        description: 'Clean coils allow the AC to cool rooms up to 40% faster, cutting compressor run times.',
      },
      {
        title: 'Cleaner, Healthier Air',
        description: 'Eliminates dust mites, airborne allergens, and musty mildew odors from your room.',
      },
      {
        title: 'Prevents Costly Breakdowns',
        description: 'Identifies minor wiring looseness or capacitor degradation before it burns the compressor.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Protection Setup',
        description: 'Protective waterproof spill jacket mounted around indoor unit to safeguard walls and furniture.',
      },
      {
        step: '02',
        title: 'Jet Wash & Coil Clean',
        description: 'Gentle pressurized water jet flushes deep dirt from delicate aluminum cooling fins.',
      },
      {
        step: '03',
        title: 'Blower & Drain Clearing',
        description: 'Blower drum cleaned of grime; drain line flushed to prevent indoor water overflows.',
      },
      {
        step: '04',
        title: 'Outdoor Condenser Wash',
        description: 'Outdoor unit cleaned to guarantee efficient heat expulsion into the open air.',
      },
    ],
    faqs: [
      {
        question: 'How often should I service my AC in Hyderabad?',
        answer: 'Given the dry dusty summers and pre-monsoon humidity in Hyderabad, servicing your AC twice a year (once before summer and once post-monsoon) is recommended for optimal efficiency.',
      },
      {
        question: 'Will water spray damage my indoor walls during cleaning?',
        answer: 'Not at all. We use a specialized wrap-around waterproof wash bag with a drainage funnel that channels all water directly into a bucket.',
      },
      {
        question: 'Does regular maintenance help lower my electricity bills?',
        answer: 'Absolutely. A clean AC transfers heat far more efficiently, allowing the room to reach your target temperature faster and reducing compressor run hours.',
      },
    ],
  },
  {
    id: '6',
    number: '06',
    slug: 'split-ac-service',
    title: 'Split AC Service',
    shortDescription: 'Service and repair for Split AC systems.',
    heroHeadline: 'Split AC Service & Repair in Hyderabad',
    heroHighlight: 'Specialized Care for Indoor & Outdoor Units.',
    intro: 'Modern Split ACs rely on sophisticated electronic PCBs, twin-rotary inverter compressors, and dual indoor-outdoor architectures. Coolronix technicians understand the intricacies of split cooling mechanics, delivering dedicated repair and service across Hyderabad.',
    acTypes: ['Inverter Split AC', 'Fixed Speed Split AC', '1 Ton, 1.5 Ton, 2 Ton'],
    serviceCategory: 'split',
    commonProblems: [
      {
        title: 'Water overflowing from indoor front cover',
        description: 'Blocked drain hose, cracked drain pan, or algae sludge in tray.',
      },
      {
        title: 'PCB display flashing error codes (E1, E4, etc.)',
        description: 'Sensor failure, communication error between units, or voltage fluctuations.',
      },
      {
        title: 'Indoor fan spinning but outdoor unit silent',
        description: 'Defective outdoor contactor, start capacitor, or inverter module fault.',
      },
      {
        title: 'Uneven cooling and poor room throw',
        description: 'Swing motor gear failure or heavily clogged cross-flow fan drum.',
      },
    ],
    whatIsIncluded: [
      'Indoor unit casing removal and ultrasonic/jet deep wash',
      'Cross-flow blower wheel de-dusting for uniform air throw',
      'Outdoor unit condenser coil jet wash and heat dissipation check',
      'Communication wire and terminal screw tightening',
      'Refrigerant flare connection inspection and pressure audit',
      'Swing flap louver and remote control sensor responsiveness check',
    ],
    benefits: [
      {
        title: 'Split AC Specialists',
        description: 'In-depth experience handling copper line flaring and multi-sensor inverter PCBs.',
      },
      {
        title: 'No-Mess In-Room Servicing',
        description: 'Complete water-capture kit protects painted walls, curtains, and flooring.',
      },
      {
        title: 'Whisper-Quiet Operation',
        description: 'Balancing blower wheels and securing chassis panels stops annoying humming.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Operational Baseline',
        description: 'Test remote commands, swing action, and temperature drop across intake and discharge.',
      },
      {
        step: '02',
        title: 'Dual Unit Cleaning',
        description: 'Full jet wash for indoor evaporator fins followed by outdoor condenser wash.',
      },
      {
        step: '03',
        title: 'Electronics & Sensor Audit',
        description: 'Check room ambient thermistor and coil sensor resistance for accurate cut-off.',
      },
      {
        step: '04',
        title: 'Drain & Seal Check',
        description: 'Pour test through drain tray to guarantee unhindered outdoor water disposal.',
      },
    ],
    faqs: [
      {
        question: 'Why does water leak inside the room from my Split AC?',
        answer: 'The most common cause is dirt, algae, or dust accumulation blocking the narrow condensate drain line, forcing water to spill over the internal drain tray onto your wall.',
      },
      {
        question: 'Can you service inverter Split ACs from LG, Daikin, Voltas, Samsung, and Blue Star?',
        answer: 'Yes, our technicians service all major Indian and international Split AC brands across Hyderabad.',
      },
      {
        question: 'Does Split AC servicing require taking the unit down from the wall?',
        answer: 'Standard periodic jet servicing is performed directly on the wall using our protective wash bag system, avoiding unnecessary stress on copper flare joints.',
      },
    ],
  },
  {
    id: '7',
    number: '07',
    slug: 'window-ac-service',
    title: 'Window AC Service',
    shortDescription: 'Service and repair for Window AC units.',
    heroHeadline: 'Window AC Service & Repair in Hyderabad',
    heroHighlight: 'Rugged Chassis Care, Coil Cleaning & Motor Maintenance.',
    intro: 'Window ACs are durable cooling workhorses, but because the compressor, condenser, and evaporator are packed into a single compact chassis, dust accumulation can drastically choke heat exchange. Coolronix provides thorough Window AC overhaul and repair across Hyderabad.',
    acTypes: ['Window AC (0.75T to 2.0T)', 'Rotary & Reciprocating Compressors'],
    serviceCategory: 'window',
    commonProblems: [
      {
        title: 'Excessive rattling and chassis vibration',
        description: 'Loose window frame mounting, worn fan motor rubber mounts, or rusted base tray.',
      },
      {
        title: 'Water pooling on windowsill',
        description: 'Backward tilt causing condensate to flow into the room instead of out.',
      },
      {
        title: 'Frequent compressor cut-off on hot afternoons',
        description: 'Condenser coils packed with mud, triggering thermal overload protection.',
      },
      {
        title: 'Fan speed stuck or not changing',
        description: 'Selector switch worn out, faulty capacitor, or blower motor bearing friction.',
      },
    ],
    whatIsIncluded: [
      'Safe chassis unmounting or slide-out from window wooden/aluminum casing',
      'High-pressure chemical and water jet wash of both front evaporator and rear condenser',
      'Double-shaft motor bearing inspection and lubrication',
      'Base tray rust check and drainage hole clearing',
      'Rotary selector / electronic keypad testing and capacitor health check',
      'Level and tilt re-installation to ensure continuous exterior water drip',
    ],
    benefits: [
      {
        title: 'Heavy-Duty Coil Cleaning',
        description: 'Removes deep-seated dirt from the rear condenser that typical surface wiping cannot reach.',
      },
      {
        title: 'Reduced Noise & Vibration',
        description: 'Firm window mount re-seating and motor shaft balancing drastically cuts operating noise.',
      },
      {
        title: 'Extended Unit Lifespan',
        description: 'Rust prevention and clean coils prevent catastrophic compressor burnout.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Safety Slide-Out',
        description: 'Unit safely unlocked and slid out from sleeve with electrical supply isolated.',
      },
      {
        step: '02',
        title: 'Complete Jet Wash',
        description: 'Front and rear coils washed thoroughly, clearing impacted dirt and road dust.',
      },
      {
        step: '03',
        title: 'Motor & Electrical Check',
        description: 'Shaft lubricated, capacitor tested for rated microfarads, wiring insulated.',
      },
      {
        step: '04',
        title: 'Tilt-Aligned Re-Mount',
        description: 'Reinstalled into window sleeve with slight outward tilt for smooth water drainage.',
      },
    ],
    faqs: [
      {
        question: 'Why does my Window AC make a loud rattling noise?',
        answer: 'Loud rattling usually stems from vibration against an insecure window frame, dried rubber grommets under the compressor, or debris stuck in the outdoor fan blade.',
      },
      {
        question: 'Should water come out of the back of a Window AC?',
        answer: 'Yes! While modern window ACs use a slinger ring to splash water onto the condenser coil, excess water must drain freely from the rear plug to avoid stagnant pooling and rust.',
      },
      {
        question: 'Do you carry out Window AC service at home in Hyderabad?',
        answer: 'Yes, our technicians perform on-site Window AC servicing at your balcony, terrace, or bathroom wash area with minimal disruption.',
      },
    ],
  },
];

export const AC_PROBLEMS: ACProblemItem[] = [
  {
    number: '01',
    title: 'AC Not Cooling',
    description: 'Cooling performance has dropped or the AC is not cooling properly.',
    suggestedServiceSlug: 'ac-repair-service',
  },
  {
    number: '02',
    title: 'AC Needs Gas Refill',
    description: 'Get AC gas refill or charging service when your system requires it.',
    suggestedServiceSlug: 'ac-gas-refill',
  },
  {
    number: '03',
    title: 'Water Leakage',
    description: 'Get your AC checked when water leakage becomes a problem.',
    suggestedServiceSlug: 'split-ac-service',
  },
  {
    number: '04',
    title: 'AC Not Starting',
    description: 'Contact Coolronix when your AC is not turning on properly.',
    suggestedServiceSlug: 'ac-repair-service',
  },
  {
    number: '05',
    PoorAirflow: true,
    title: 'Poor Airflow',
    description: 'Get AC service when airflow or cooling performance is affected.',
    suggestedServiceSlug: 'ac-maintenance',
  } as any,
  {
    number: '06',
    title: 'AC Needs Maintenance',
    description: 'Regular AC maintenance can help keep your system serviced.',
    suggestedServiceSlug: 'ac-maintenance',
  },
];

export const CUSTOMER_REVIEWS: ReviewItem[] = [
  {
    number: '01',
    quote: 'Best Service at Affordable Price',
    source: 'GOOGLE REVIEW',
    rating: 5,
  },
  {
    number: '02',
    quote: 'Good work I recommend everyone to utilise there service',
    source: 'GOOGLE REVIEW',
    rating: 5,
  },
  {
    number: '03',
    quote: 'Good experience I like you',
    source: 'GOOGLE REVIEW',
    rating: 5,
  },
];

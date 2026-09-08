import { CampaignSlide, CauseItem, ImpactStat } from '../types';

export const HERO_CAMPAIGNS: CampaignSlide[] = [
  {
    id: 'water-aid',
    number: '01',
    causeId: 'water',
    label: 'WATER AID',
    headline: 'You Can Change Their Future.\nClean water should never be a privilege.',
    supportingText: 'Over 785 million people lack safe drinking water. A single community borehole provides health, dignity, and generational hope.',
    impactMessage: 'Your support can help families access clean water.',
    imageUrl: 'https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&w=1920&q=85',
    fallbackUrls: [
      'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1920&q=85',
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1920&q=85'
    ],
    imageAlt: 'Community members gathering fresh, clean water from a newly installed sustainable well pump',
    location: 'Turkana Basin, Kenya'
  },
  {
    id: 'food-aid',
    number: '02',
    causeId: 'food',
    label: 'FOOD AID',
    headline: 'Open Your Heart.\nNo family should have to wonder where their next meal comes from.',
    supportingText: 'Emergency food baskets and drought-resilient crops deliver vital daily nourishment to households facing severe hardship.',
    impactMessage: 'Your support provides life-saving nutritious meals to vulnerable households.',
    imageUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1920&q=85',
    fallbackUrls: [
      'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1920&q=85',
      'https://images.unsplash.com/photo-1584467735815-f778f274e296?auto=format&fit=crop&w=1920&q=85'
    ],
    imageAlt: 'Humanitarian volunteers packing and distributing essential food parcels to families in need',
    location: 'Somaliland Relief Corridor'
  },
  {
    id: 'orphan-support',
    number: '03',
    causeId: 'orphans',
    label: 'ORPHAN SUPPORT',
    headline: 'Every Child Deserves The Chance\nTo build a better future.',
    supportingText: 'Comprehensive orphan sponsorship provides education, balanced nutrition, healthcare, and safe shelter to children who have lost their guardians.',
    impactMessage: 'Your support gives an orphaned child safety, schooling, and hope.',
    imageUrl: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1920&q=85',
    fallbackUrls: [
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1920&q=85',
      'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1920&q=85'
    ],
    imageAlt: 'Children in an educational center reading together in an atmosphere of warmth and dignity',
    location: 'Bekaa Valley Learning Center'
  },
  {
    id: 'family-support',
    number: '04',
    causeId: 'family',
    label: 'FAMILY SUPPORT',
    headline: 'Small Acts Of Kindness\nCan help families through difficult times.',
    supportingText: 'We provide weather-resistant shelters, clean bedding, and livelihood starter kits so parents can protect their children and regain self-reliance.',
    impactMessage: 'Your support helps displaced families find safety and shelter.',
    imageUrl: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1920&q=85',
    fallbackUrls: [
      'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1920&q=85',
      'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1920&q=85'
    ],
    imageAlt: 'Mother holding her young child with gentle warmth and protective dignity',
    location: 'North Aleppo Displaced Settlement'
  },
  {
    id: 'ramadan-giving',
    number: '05',
    causeId: 'ramadan',
    label: 'RAMADAN GIVING',
    headline: 'Multiply Your Blessings.\nShare your blessings with families who need them most.',
    supportingText: 'Provide nutritious Iftar meals and full-month food parcels to fasting families facing extreme poverty during the sacred month.',
    impactMessage: 'Your support ensures fasting families have warm food at sunset.',
    imageUrl: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1920&q=85',
    fallbackUrls: [
      'https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=1920&q=85',
      'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1920&q=85'
    ],
    imageAlt: 'Warm dates and traditional lantern light prepared for a community Iftar gathering',
    location: 'Global Ramadan Distribution'
  }
];

export const CAUSES_LIST: CauseItem[] = [
  {
    id: 'water',
    name: 'Water',
    shortDesc: 'Deep boreholes, solar pumps, and purification kits delivering reliable, safe water to drought-stricken villages.',
    imageUrl: 'https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&w=1000&q=80',
    fallbackUrls: [
      'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1000&q=80'
    ],
    imageAlt: 'Community water well delivering clean running water',
    exampleMetric: '350+ community wells built'
  },
  {
    id: 'food',
    name: 'Food',
    shortDesc: 'Emergency food packs, baby nutrition supplies, and sustainable micro-farming support for vulnerable households.',
    imageUrl: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1000&q=80',
    fallbackUrls: [
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1584467735815-f778f274e296?auto=format&fit=crop&w=1000&q=80'
    ],
    imageAlt: 'Volunteers distributing essential food boxes',
    exampleMetric: '1.2M emergency meals delivered'
  },
  {
    id: 'orphans',
    name: 'Orphans',
    shortDesc: 'Continuous monthly sponsorship ensuring vulnerable children have schooling, safe shelter, healthcare, and guidance.',
    imageUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1000&q=80',
    fallbackUrls: [
      'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1000&q=80'
    ],
    imageAlt: 'Orphaned child with schoolbooks in educational environment',
    exampleMetric: '8,400+ children sponsored'
  },
  {
    id: 'family',
    name: 'Family Support',
    shortDesc: 'Emergency relief tents, insulation, winter blankets, and livelihood grants enabling parents to support their children.',
    imageUrl: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1000&q=80',
    fallbackUrls: [
      'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1000&q=80'
    ],
    imageAlt: 'Dignified mother and child in safe shelter',
    exampleMetric: '42,000 families rehoused'
  },
  {
    id: 'ramadan',
    name: 'Ramadan',
    shortDesc: 'Zakat, Sadaqah, and Fidya distribution bringing warm Iftar meals and food baskets to families across 28 nations.',
    imageUrl: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1000&q=80',
    fallbackUrls: [
      'https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1000&q=80'
    ],
    imageAlt: 'Ramadan meal sharing with dates and wholesome food',
    exampleMetric: '100% verified Zakat policy'
  }
];

export const IMPACT_STATS: ImpactStat[] = [
  {
    value: '2.4M+',
    label: 'People supported',
    subtext: 'Across East Africa, South Asia, and the Middle East'
  },
  {
    value: '350+',
    label: 'Clean water projects',
    subtext: 'Solar boreholes and community water points active daily'
  },
  {
    value: '28',
    label: 'Countries reached',
    subtext: 'Direct field presence with local community partners'
  },
  {
    value: '100%',
    label: 'Donation transparency',
    subtext: 'Every penny tracked and audited to its designated cause'
  }
];

export const HUMAN_STORY_DATA = {
  quote: "A little support can change a family's tomorrow.",
  person: "Halima & her children",
  location: "Turkana County, Kenya",
  shortStory: "For four years, Halima walked five hours before sunrise each day across dry riverbeds just to collect two jerrycans of murky water. Her eldest daughter frequently missed school to assist. With the completion of the solar-powered community borehole just 150 metres from their home, Halima's children are back in the classroom, and her kitchen garden provides fresh greens for every meal.",
  fullStory: [
    "Before the solar-powered water station was completed, every dawn in Halima's village began with an exhausting calculation: how much energy could a mother and her daughter spare under the scorching sun just to haul water?",
    "The round trip through the dry river basin took more than four hours. The water they retrieved was contaminated with silt and bacteria, leading to persistent illness and chronic exhaustion. Education was secondary; survival came first.",
    "When Chatha Foundation and local engineers drilled the deep aquifer borehole, clean, sweet water was struck at 120 metres. Powered by a high-efficiency solar pump, the tap now flows with limitless fresh drinking water for Halima and 340 neighboring families.",
    "'My daughter now arrives at school before the morning bell,' Halima shares with quiet pride. 'And for the first time in my life, when I pour water for my children, I know with certainty that it will bring them life, not illness.'"
  ],
  imageUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1600&q=85",
  fallbackUrls: [
    "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1600&q=85"
  ],
  imageAlt: "Portrait of Halima looking toward the horizon with quiet strength and dignity",
  causeTag: "Water Aid & Community Renewal"
};

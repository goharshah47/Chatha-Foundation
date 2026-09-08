import { CausePageData, CauseSlug } from '../types';

export const CAUSES_PAGES_DATA: Record<CauseSlug, CausePageData> = {
  'ramadan': {
    slug: 'ramadan',
    causeId: 'ramadan',
    name: 'Ramadan',
    tagline: 'SACRED MONTH GIVING',
    heroHeadline: 'Share the blessings of Ramadan with families who need them most.',
    heroDescription: 'For millions facing acute poverty, conflict, and displacement, the blessed month begins with empty cupboards. Your compassion brings wholesome meals at sunset, restoring dignity and peace to fasting households.',
    heroImage: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1920&q=85',
    heroFallbackUrls: [
      'https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=1920&q=85',
      'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1920&q=85'
    ],
    heroAlt: 'Dates and warm lantern light symbolizing Ramadan community hospitality and blessing',
    impactStatement: 'Over 140,000 fasting individuals fed across 18 countries last Ramadan',
    whyMatters: {
      title: 'Hunger Should Never Shadow the Holy Month',
      text: 'Ramadan is a time of spiritual devotion, gratitude, and community unity. Yet in drought-stricken villages, displacement settlements, and neglected urban pockets, parents often break their fast with only plain water or stale bread, unsure how they will feed their children for Suhoor. Escalating food inflation has pushed nutritious staples out of reach for vulnerable widows, day laborers, and elderly families.',
      stat: '1 in 4 families in our relief corridors face severe food distress during Ramadan',
      imageUrl: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=80',
      fallbackUrls: [
        'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80'
      ],
      imageAlt: 'Humanitarian volunteers distributing food parcels with care and warmth'
    },
    howWeHelp: {
      title: 'Direct Relief From Kitchen to Table',
      text: 'Chatha Foundation coordinates with local neighborhood elders, community kitchens, and trusted field representatives to prepare and distribute fresh, culturally appropriate food parcels before the first day of Ramadan and throughout the sacred thirty days.',
      points: [
        'Door-to-door ration delivery ensuring privacy and human dignity for vulnerable households',
        'Hot communal Iftar kitchens serving freshly cooked, nourishing meals every evening',
        '100% Zakat-verified distribution strictly allocated to eligible impoverished recipients',
        'Timely Fitrana and Eid gift distribution ensuring every child celebrates with joy'
      ],
      imageUrl: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1200&q=80',
      fallbackUrls: [
        'https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=1200&q=80'
      ],
      imageAlt: 'Families and community gathering together to share warm Iftar food'
    },
    yourSupport: {
      title: 'Multiply Your Blessings',
      text: 'In this revered season of multiplied reward, every pound or dollar you give translates immediately into wholesome food on a family table.',
      impactTiers: [
        { amount: '£3 / $4', effect: 'Provides a hot, wholesome Iftar meal with water, fruit, and rice for one person' },
        { amount: '£45 / $60', effect: 'Supplies a comprehensive 1-month Ramadan food ration pack for a family of five' },
        { amount: '£90 / $115', effect: 'Provides full Suhoor and Iftar support plus essential Eid gifts for two families' }
      ]
    },
    opportunitiesTitle: 'Ramadan Giving Opportunities',
    opportunitiesSubtitle: 'Choose where your generosity makes an immediate difference this blessed month.',
    opportunities: [
      {
        id: 'ramadan-ration-pack',
        causeSlug: 'ramadan',
        title: 'Ramadan Food Ration Pack — 1 Month',
        subtitle: 'Comprehensive Family Sustenance',
        shortDesc: 'A complete 50kg food basket containing flour, rice, cooking oil, lentils, sugar, tea, and dates to sustain a family for the entire month.',
        need: 'Many families cannot afford bulk staples before Ramadan, leading to skipped meals and debilitating hunger during fasting hours.',
        impact: 'Delivers full nutrition, peace of mind, and physical strength so parents and children can fast with dignity.',
        location: 'Yemen, Pakistan, Lebanon, Somalia',
        community: 'Impoverished rural villages and refugee settlements',
        status: 'Active Field Distribution',
        impactMetric: 'Feeds a family of 5–7 for 30 full days',
        suggestedAmount: 50,
        imageUrl: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=900&q=80',
        fallbackUrls: ['https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80'],
        imageAlt: 'Carefully packaged food boxes being prepared for Ramadan families'
      },
      {
        id: 'ramadan-iftar-meal',
        causeSlug: 'ramadan',
        title: 'Iftar Meal — Per Person / Per Day',
        subtitle: 'Hot Cooked Sunset Dinner',
        shortDesc: 'Freshly prepared daily meal featuring rice, chicken or meat, vegetables, bread, fresh fruit, dates, and clean water.',
        need: 'Elderly individuals, hospitalized patients, and stranded laborers often have no kitchen facilities or funds for evening meals.',
        impact: 'Provides immediate relief and warmth at sunset, served with open-hearted hospitality and dignity.',
        location: 'Urban transit centers, refugee camps, community halls',
        community: 'Stranded workers, orphans, and vulnerable seniors',
        status: 'Daily Ramadan Kitchens',
        impactMetric: '1 hot nutritious meal served daily',
        suggestedAmount: 5,
        imageUrl: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=900&q=80',
        fallbackUrls: ['https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=900&q=80'],
        imageAlt: 'Community members receiving hot Iftar meals'
      },
      {
        id: 'ramadan-suhoor-pack',
        causeSlug: 'ramadan',
        title: 'Suhoor Pack',
        subtitle: 'Pre-Dawn Sustenance',
        shortDesc: 'Slow-release energy foods including oats, high-protein legumes, fortified milk powder, honey, and whole wheat flatbreads.',
        need: 'Starting 15+ hours of fasting without adequate breakfast leads to dehydration and severe fatigue, especially for young youths and nursing mothers.',
        impact: 'Ensures fasting family members maintain energy, focus, and hydration throughout long warm days.',
        location: 'East Africa and Middle East relief settlements',
        community: 'Displaced families and low-income households',
        status: 'Active Logistics',
        impactMetric: 'Covers 30 mornings of nutritious Suhoor',
        suggestedAmount: 25,
        imageUrl: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=900&q=80',
        fallbackUrls: ['https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=900&q=80'],
        imageAlt: 'Traditional Suhoor staple ingredients and bread'
      },
      {
        id: 'ramadan-fitrana',
        causeSlug: 'ramadan',
        title: 'Fitrana / Zakat-ul-Fitr',
        subtitle: 'Mandatory Purification & Joy',
        shortDesc: 'Required charitable payment made before Eid prayers, distributed as staple grains and essential groceries to impoverished families.',
        need: 'Ensures that impoverished members of our global community can celebrate Eid-ul-Fitr alongside everyone else without anxiety.',
        impact: 'Guarantees that children in impoverished homes have special meals and treats on Eid morning.',
        location: 'Global distribution network (22 countries)',
        community: 'Most vulnerable registered families',
        status: 'Distributed Before Eid Prayers',
        impactMetric: 'Fulfills obligatory Fitrana per person',
        suggestedAmount: 7,
        imageUrl: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=900&q=80',
        fallbackUrls: ['https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=900&q=80'],
        imageAlt: 'Happy children receiving Eid provisions'
      },
      {
        id: 'ramadan-fidya',
        causeSlug: 'ramadan',
        title: 'Fidya Payment',
        subtitle: 'Compensation for Inability to Fast',
        shortDesc: 'Fulfilling the obligation for those who cannot fast due to chronic illness, old age, or pregnancy, by feeding two people in need for each missed day.',
        need: 'Those unable to fast require an authentic, dependable channel to ensure their compensation reaches truly needy people promptly.',
        impact: 'Directly finances daily hot meals or grocery baskets for impoverished individuals throughout Ramadan.',
        location: 'Certified partner relief corridors',
        community: 'Destitute individuals and widows',
        status: 'Allocated Continuously',
        impactMetric: 'Feeds 2 needy individuals per missed day',
        suggestedAmount: 6,
        imageUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80',
        fallbackUrls: ['https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=900&q=80'],
        imageAlt: 'Nutritious grains and produce delivered to needy household'
      },
      {
        id: 'ramadan-family-parcel',
        causeSlug: 'ramadan',
        title: 'Ramadan Family Food Parcel',
        subtitle: 'Complete Seasonal Security',
        shortDesc: 'Premium curated parcel with high-grade basmati rice, lentils, ghee, dates, powdered milk, tea, spices, and hygiene essentials.',
        need: 'Large extended families in crisis zones face astronomical market prices, forcing impossible tradeoffs between medicine and food.',
        impact: 'Secures complete household food independence and emotional relief for an entire family unit through Eid.',
        location: 'Syria Border, Gaza Relief Corridor, Kashmir, Bangladesh',
        community: 'Extended families facing extreme crisis',
        status: 'Priority Deployment',
        impactMetric: 'Supplies 7–10 family members for 4 weeks',
        suggestedAmount: 85,
        imageUrl: 'https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&w=900&q=80',
        fallbackUrls: ['https://images.unsplash.com/photo-1584467735815-f778f274e296?auto=format&fit=crop&w=900&q=80'],
        imageAlt: 'Family standing together with their complete monthly food parcel'
      }
    ],
    finalCtaHeadline: 'Bring Hope to Fasting Families Today',
    finalCtaSubtext: 'Your donation today ensures a table is filled with food at sunset and hearts are filled with gratitude.'
  },

  'water-aid': {
    slug: 'water-aid',
    causeId: 'water',
    name: 'Water Aid',
    tagline: 'LIFE & DIGNITY',
    heroHeadline: 'Clean water should never be a privilege.',
    heroDescription: 'Over 785 million people still lack access to safe drinking water. In parched lands, children walk miles instead of attending school, and contaminated streams bring constant sickness. Together, we build reliable, sustainable water systems that transform whole communities.',
    heroImage: 'https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&w=1920&q=85',
    heroFallbackUrls: [
      'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1920&q=85',
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1920&q=85'
    ],
    heroAlt: 'Community members celebrating clean running water flowing from newly built water station',
    impactStatement: '350+ sustainable boreholes, hand pumps, and filtration units active daily',
    whyMatters: {
      title: 'The Invisible Chain of Water Poverty',
      text: 'Without clean water, health collapses. Waterborne illnesses such as cholera, dysentery, and typhoid take the lives of thousands of infants every week. Women and young girls bear the brunt of the burden, walking up to 6 hours a day across treacherous terrain under extreme heat, carrying 20-liter containers that damage their spines and rob them of an education.',
      stat: 'Women and girls globally spend 200 million hours every single day collecting water',
      imageUrl: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1200&q=80',
      fallbackUrls: [
        'https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&w=1200&q=80'
      ],
      imageAlt: 'Young girl drinking sparkling fresh water from a community well'
    },
    howWeHelp: {
      title: 'Engineering for Generational Sustainability',
      text: 'We do not simply dig and leave. Chatha Foundation partners with local hydrogeologists and community water management committees to test groundwater depth, install high-grade stainless steel pumps or solar arrays, and train villagers in preventative maintenance so that water flows for decades.',
      points: [
        'Deep solar aquifer boreholes reaching up to 150m beneath drought zones',
        'Reverse Osmosis (RO) plants removing toxic salts, fluoride, and arsenic',
        'Local water committee formation with 50% women representation for lasting stewardship',
        'Water testing and multi-stage chlorination/filtration to meet WHO potable standards'
      ],
      imageUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80',
      fallbackUrls: [
        'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1200&q=80'
      ],
      imageAlt: 'Engineers testing solar-powered water pumps in a rural village'
    },
    yourSupport: {
      title: 'Access to Clean Water → Health → Dignity → Better Lives',
      text: 'When a village gains clean water, infant mortality plummets, girls return to classrooms, mothers cultivate vegetable gardens, and small economies flourish.',
      impactTiers: [
        { amount: '£30 / $40', effect: 'Provides household water filters and sanitary storage for a family' },
        { amount: '£180 / $230', effect: 'Installs a dedicated community hand pump serving 40–60 villagers' },
        { amount: '£850 / $1,100', effect: 'Funds a high-capacity solar borehole segment providing clean tap water to 300+ people' }
      ]
    },
    opportunitiesTitle: 'Water Aid Solutions',
    opportunitiesSubtitle: 'Choose a dedicated water project to bring enduring life and health to dry communities.',
    opportunities: [
      {
        id: 'water-hand-pump',
        causeSlug: 'water-aid',
        title: 'Hand Pump Installation',
        subtitle: 'Village Neighborhood Clean Tap',
        shortDesc: 'A durable, cast-iron lever hand pump drilled into clean shallow aquifers, fitted with a hygienic concrete apron and drainage basin.',
        need: 'Rural families in arid valleys walk 4–6km every morning to fetch muddy pond water shared with livestock.',
        impact: 'Supplies 150+ residents with direct, instant clean water right inside their village center.',
        location: 'Rural Punjab, Sindh, Thar Desert (Pakistan)',
        community: 'Isolated farming hamlets and small villages',
        status: 'Ready for Drilling',
        impactMetric: '150+ villagers served daily for 10+ years',
        suggestedAmount: 180,
        imageUrl: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=900&q=80',
        fallbackUrls: ['https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&w=900&q=80'],
        imageAlt: 'Children happily filling clean buckets from newly installed village hand pump'
      },
      {
        id: 'water-borehole',
        causeSlug: 'water-aid',
        title: 'Water Well / Borehole',
        subtitle: 'Deep Solar Aquifer Well',
        shortDesc: 'A deep-drilled tube well reaching 80–150m sweet water aquifers, equipped with solar panels and elevated water storage towers.',
        need: 'Drought-ravaged areas have saline or bone-dry topsoil; only deep industrial drilling can tap perpetual sweet water reserves.',
        impact: 'Transforms an entire village into a lush hub with running taps for households, schools, and livestock troughs.',
        location: 'Garissa & Turkana (Kenya), Wajir (Somalia)',
        community: 'Pastoralist settlements facing acute desertification',
        status: 'Engineering Survey Completed',
        impactMetric: 'Serves 1,200+ individuals & livestock herds',
        suggestedAmount: 1250,
        imageUrl: 'https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&w=900&q=80',
        fallbackUrls: ['https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=900&q=80'],
        imageAlt: 'Solar powered water well and elevated storage tank'
      },
      {
        id: 'water-ro-plant',
        causeSlug: 'water-aid',
        title: 'RO Water Filtration Plant',
        subtitle: 'Advanced Multi-Stage Purification',
        shortDesc: 'Industrial Reverse Osmosis filtration unit that purifies brackish, chemically contaminated ground water into pure WHO-standard drinking water.',
        need: 'Industrial runoff, pesticides, and high arsenic/fluoride content in groundwater cause kidney failure and skeletal fluorosis.',
        impact: 'Eliminates 99.8% of dissolved solids and pathogens, protecting thousands from terminal organ disease.',
        location: 'South Punjab & Interior Sindh',
        community: 'Densely populated agricultural towns',
        status: 'Site Identified & Permitted',
        impactMetric: 'Generates 10,000–20,000 liters pure water daily',
        suggestedAmount: 2800,
        imageUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=900&q=80',
        fallbackUrls: ['https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=900&q=80'],
        imageAlt: 'Modern reverse osmosis clean filtration facility'
      },
      {
        id: 'water-community-tank',
        causeSlug: 'water-aid',
        title: 'Community Water Tank',
        subtitle: 'High-Capacity Storage System',
        shortDesc: 'A reinforced 5,000–10,000 liter elevated reservoir tank with multiple brass taps, gravity feeding water during power cuts or dry spells.',
        need: 'Intermittent water flow forces families to wait for hours in queues, creating conflict and leaving schools without sanitation.',
        impact: 'Maintains a constant reserve of pressurized, chlorinated water so community life never grinds to a halt.',
        location: 'Hill villages of Azad Kashmir & Khyber Pakhtunkhwa',
        community: 'Mountain communities dependent on seasonal springs',
        status: 'Active Construction',
        impactMetric: 'Guarantees 10,000L buffer reserve for 500 people',
        suggestedAmount: 450,
        imageUrl: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=900&q=80',
        fallbackUrls: ['https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&w=900&q=80'],
        imageAlt: 'Elevated water tank with clean taps serving village children'
      },
      {
        id: 'water-cooler-mosque-school',
        causeSlug: 'water-aid',
        title: 'Water Cooler for Mosque / School',
        subtitle: 'Chilled Clean Water Stations',
        shortDesc: 'Heavy-duty stainless steel electric water chiller equipped with a 3-stage carbon sediment filter to keep students and worshippers refreshed.',
        need: 'In regions where summer temperatures exceed 48°C (118°F), lack of cool clean water causes heatstroke and school dropouts.',
        impact: 'Keeps hundreds of students energized and hydrated throughout intense school days.',
        location: 'Public primary schools and community mosques in semi-arid zones',
        community: 'Over 600 students and daily worshippers per station',
        status: 'Ready for Procurement & Installation',
        impactMetric: 'Provides cold purified water for 600+ daily visitors',
        suggestedAmount: 260,
        imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=80',
        fallbackUrls: ['https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=900&q=80'],
        imageAlt: 'Students gathered around fresh clean drinking fountain at school'
      },
      {
        id: 'water-emergency-tanker',
        causeSlug: 'water-aid',
        title: 'Emergency Water Tanker Delivery',
        subtitle: 'Immediate Crisis Response',
        shortDesc: 'Rapid deployment of 10,000-liter certified clean water bowsers directly to displacement camps, disaster zones, and drought epicenters.',
        need: 'When natural disasters or flash floods destroy local infrastructure, contaminated water leads to rapid epidemic outbreaks.',
        impact: 'Delivers instant life-saving hydration while long-term water infrastructure repairs take place.',
        location: 'Flood-affected districts and displacement camps',
        community: 'Disaster victims and refugee encampments',
        status: 'Emergency Rapid Dispatch',
        impactMetric: 'Provides 10,000 liters of emergency drinking water',
        suggestedAmount: 95,
        imageUrl: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80',
        fallbackUrls: ['https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&w=900&q=80'],
        imageAlt: 'Emergency water bowser delivering clean water in crisis zone'
      }
    ],
    finalCtaHeadline: 'Turn On the Tap of Life Today',
    finalCtaSubtext: 'Every water well you support becomes a source of endless blessings, health, and dignity for generations.'
  },

  'food-aid': {
    slug: 'food-aid',
    causeId: 'food',
    name: 'Food Aid',
    tagline: 'HUNGER RELIEF & NUTRITION',
    heroHeadline: 'No family should have to wonder where their next meal comes from.',
    heroDescription: 'When poverty, drought, or economic shock strikes, the dinner plate is the first thing that empties. We deliver wholesome food parcels, emergency ration bags, and hot meals to ensure children grow strong and families retain their dignity.',
    heroImage: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1920&q=85',
    heroFallbackUrls: [
      'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1920&q=85',
      'https://images.unsplash.com/photo-1584467735815-f778f274e296?auto=format&fit=crop&w=1920&q=85'
    ],
    heroAlt: 'Humanitarian volunteers distributing food parcels with care and warmth',
    impactStatement: '1.2M+ emergency meals and 85,000 ration bags distributed to date',
    whyMatters: {
      title: 'Food Insecurity is an Assault on Dignity',
      text: 'Acute hunger does not just weaken the physical body; it forces parents into agonizing decisions. In impoverished communities, mothers often feed their children sugar-water to quiet their cries at night, and fathers skip meals for days. Prolonged malnutrition stunts childhood cognitive development and leaves the body defenseless against treatable diseases.',
      stat: 'Over 345 million people face acute food insecurity across the globe today',
      imageUrl: 'https://images.unsplash.com/photo-1584467735815-f778f274e296?auto=format&fit=crop&w=1200&q=80',
      fallbackUrls: [
        'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=80'
      ],
      imageAlt: 'Young child eating a warm, wholesome meal with joy and security'
    },
    howWeHelp: {
      title: 'Reliable, Dignified Food Security',
      text: 'Chatha Foundation operates both rapid-response food convoys and stable monthly feeding programs. We prioritize nutrient-dense staples locally sourced from regional farmers, supporting the local economy while guaranteeing freshness and cultural relevance.',
      points: [
        'Balanced nutritional design incorporating carbohydrates, protein, iron, and essential fats',
        'Direct distribution in coordination with local village committees to prevent theft or diversion',
        'Community kitchens serving hot, freshly cooked meals in crowded settlements and urban centers',
        'Special seasonal food campaigns during harsh winter freezes and peak monsoon seasons'
      ],
      imageUrl: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=80',
      fallbackUrls: [
        'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80'
      ],
      imageAlt: 'Volunteers packing high-quality grains, pulses, and oil into relief boxes'
    },
    yourSupport: {
      title: 'Food Security and Human Dignity',
      text: 'Your contribution provides direct, tangible sustenance to children and families who have no other safety net.',
      impactTiers: [
        { amount: '£15 / $20', effect: 'Provides 10 hot cooked meals to stranded individuals or street children' },
        { amount: '£40 / $50', effect: 'Supplies a 20kg flour bag and pantry essentials for a small family' },
        { amount: '£70 / $90', effect: 'Funds a comprehensive 1-month family ration pack with cooking oil, pulses, and rice' }
      ]
    },
    opportunitiesTitle: 'Food Aid Opportunities',
    opportunitiesSubtitle: 'Choose how you want to put life-saving food onto the tables of families facing hunger.',
    opportunities: [
      {
        id: 'food-monthly-ration-pack',
        causeSlug: 'food-aid',
        title: 'Monthly Ration Pack',
        subtitle: '30 Days of Complete Family Nutrition',
        shortDesc: 'Staple ration pack with 20kg wheat flour, 10kg rice, 5kg cooking oil, 5kg assorted lentils, sugar, salt, and tea.',
        need: 'Casual day laborers and widows often earn less than $1.50 a day, leaving them entirely unable to purchase grocery staples in bulk.',
        impact: 'Completely eliminates the fear of hunger for an entire month, allowing families to allocate scarce funds for medicine or school supplies.',
        location: 'Pakistan, Somalia, Yemen, Bangladesh',
        community: 'Low-income households and widow-headed families',
        status: 'Monthly Regular Distribution',
        impactMetric: 'Feeds a family of 6 for 30 full days',
        suggestedAmount: 55,
        imageUrl: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=900&q=80',
        fallbackUrls: ['https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80'],
        imageAlt: 'Family receiving a complete monthly food ration carton'
      },
      {
        id: 'food-emergency-parcel',
        causeSlug: 'food-aid',
        title: 'Emergency Food Parcel',
        subtitle: 'Rapid Crisis Response Kit',
        shortDesc: 'Instant-consumption rations including high-energy biscuits, canned beans, dates, clean water pouches, and ready-to-eat porridge.',
        need: 'In the aftermath of floods, earthquakes, or forced displacement, cooking facilities are destroyed and clean fuel is unavailable.',
        impact: 'Delivers immediate life-sustaining calories within 24–48 hours of crisis onset.',
        location: 'Emergency disaster zones and refugee arrival points',
        community: 'Displaced families without cooking facilities',
        status: 'Ready for Immediate Deployment',
        impactMetric: 'Immediate ready-to-eat survival rations for 5 people',
        suggestedAmount: 35,
        imageUrl: 'https://images.unsplash.com/photo-1584467735815-f778f274e296?auto=format&fit=crop&w=900&q=80',
        fallbackUrls: ['https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80'],
        imageAlt: 'Emergency relief worker distributing food supplies'
      },
      {
        id: 'food-cooked-meal-distribution',
        causeSlug: 'food-aid',
        title: 'Cooked Meal Distribution',
        subtitle: 'Hot Communal Kitchens',
        shortDesc: 'Freshly cooked large-batch biryani, lentil stew, or chicken pilaf served hot with bread, clean water, and fresh fruit.',
        need: 'Homeless individuals, migrant laborers, and hospital attendants outside public wards have no access to clean food.',
        impact: 'Brings genuine comfort, dignity, and hot nourishment to those who have gone days without a warm meal.',
        location: 'Public hospital courtyards, transit hubs, informal camps',
        community: 'Destitute individuals and street families',
        status: 'Daily Community Kitchens Active',
        impactMetric: 'Provides 20 freshly prepared hot meals',
        suggestedAmount: 30,
        imageUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80',
        fallbackUrls: ['https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=900&q=80'],
        imageAlt: 'Volunteers serving hot cooked meals to community members'
      },
      {
        id: 'food-flour-wheat-bag',
        causeSlug: 'food-aid',
        title: 'Flour / Wheat Bag',
        subtitle: 'Foundational Bread for a Month',
        shortDesc: 'A sturdy 40kg bag of fortified whole-wheat flour, the absolute dietary backbone for families in South Asia and the Middle East.',
        need: 'Wheat prices have tripled in many relief regions, placing the basic loaf of flatbread (roti/naan) beyond reach.',
        impact: 'Ensures that a mother can bake warm, filling bread for her children twice daily for weeks on end.',
        location: 'Rural Punjab, Khyber Pakhtunkhwa, Balochistan',
        community: 'Struggling rural and peri-urban families',
        status: 'Procured Locally from Mills',
        impactMetric: 'Provides 40kg of fortified stone-ground wheat flour',
        suggestedAmount: 24,
        imageUrl: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=900&q=80',
        fallbackUrls: ['https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=900&q=80'],
        imageAlt: 'Elderly man receiving a large bag of whole wheat flour'
      },
      {
        id: 'food-winter-food-pack',
        causeSlug: 'food-aid',
        title: 'Winter Food Pack',
        subtitle: 'High-Calorie Cold Weather Nutrition',
        shortDesc: 'Specially formulated winter ration with dried fruit, honey, ghee, legumes, high-calorie nuts, tea, and warm soup broths.',
        need: 'Sub-zero temperatures in mountainous and makeshift camps drastically increase metabolic calorie requirements to prevent hypothermia.',
        impact: 'Protects children and elderly grandparents from fatal winter illnesses by keeping their bodies warm and nourished.',
        location: 'Kashmir, Northern Areas, Afghan border settlements',
        community: 'Vulnerable families living in non-insulated shelters',
        status: 'Seasonal Winter Relief',
        impactMetric: 'High-calorie cold-weather nourishment for 1 family',
        suggestedAmount: 65,
        imageUrl: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80',
        fallbackUrls: ['https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=900&q=80'],
        imageAlt: 'Family bundled in winter shawls receiving warm seasonal food aid'
      }
    ],
    finalCtaHeadline: 'End Hunger for a Vulnerable Family',
    finalCtaSubtext: 'Your food aid donation directly supplies nutritious meals, keeping hope and health alive in struggling homes.'
  },

  'orphan-aid': {
    slug: 'orphan-aid',
    causeId: 'orphans',
    name: 'Orphan Aid',
    tagline: 'CHILD PROTECTION & HOPE',
    heroHeadline: 'Every child deserves the chance to build a better future.',
    heroDescription: 'Losing a parent leaves a child deeply vulnerable to exploitation, child labor, and crushing poverty. Our comprehensive sponsorship program wraps orphaned children in safety, quality education, healthcare, and compassionate emotional care.',
    heroImage: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1920&q=85',
    heroFallbackUrls: [
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1920&q=85',
      'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1920&q=85'
    ],
    heroAlt: 'Children in an educational center reading together in an atmosphere of warmth and dignity',
    impactStatement: '8,400+ orphaned children supported in school and home environments',
    whyMatters: {
      title: 'A Child Without Protection Faces Immeasurable Odds',
      text: 'When a breadwinner passes away in low-income societies, the surviving widowed mother often cannot afford both rent and school fees. Children as young as seven are pulled from classrooms and forced into hazardous street trades, brick kilns, or domestic servitude. Without systematic intervention, poverty becomes an inescapable cycle.',
      stat: 'Over 140 million children worldwide have lost one or both parents',
      imageUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80',
      fallbackUrls: [
        'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80'
      ],
      imageAlt: 'Young student with backpack smiling confidently in a classroom'
    },
    howWeHelp: {
      title: 'Education · Nutrition · Care · Opportunity · Future',
      text: 'We believe children thrive best when supported within their own loving family or extended community network. Rather than institutionalizing children, our monthly sponsorship provides a secure financial stipend to their widowed mother or guardian, coupled with direct school enrollment and medical checks.',
      points: [
        'Full school tuition, textbooks, backpacks, stationery, and uniforms provided annually',
        'Routine biannual medical exams, dental checks, vaccinations, and vision screenings',
        'Monthly nutritional grocery stipends to prevent childhood malnutrition and stunting',
        'Dedicated welfare officers conducting home visits to mentor and ensure safe living conditions'
      ],
      imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80',
      fallbackUrls: [
        'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1200&q=80'
      ],
      imageAlt: 'Children engaged in creative learning in a safe, dignified classroom'
    },
    yourSupport: {
      title: 'A Lifeline of Hope and Self-Reliance',
      text: 'Your monthly sponsorship or dedicated gift transforms an orphaned child from an at-risk youth into an educated, confident young person who can lift their entire family out of poverty.',
      impactTiers: [
        { amount: '£25 / $35', effect: 'Provides complete school textbooks, uniforms, and shoes for the academic year' },
        { amount: '£35 / $45', effect: 'Funds 1 full month of comprehensive orphan sponsorship (school + meals + health)' },
        { amount: '£420 / $540', effect: 'Sponsors an orphaned child for an entire calendar year with full updates' }
      ]
    },
    opportunitiesTitle: 'Orphan Support Opportunities',
    opportunitiesSubtitle: 'Invest in the protection, learning, and bright future of an orphaned child.',
    opportunities: [
      {
        id: 'orphan-monthly-sponsorship',
        causeSlug: 'orphan-aid',
        title: 'Orphan Monthly Sponsorship',
        subtitle: 'Comprehensive 1-to-1 Support',
        shortDesc: 'Complete monthly package covering quality schooling fees, nutritious food, clothes, preventive healthcare, and home welfare visits.',
        need: 'Without predictable monthly income, widowed mothers are often forced to take children out of school to beg or work.',
        impact: 'Keeps the child safely in school, off the streets, and thriving under their mother’s loving care.',
        location: 'Pakistan, Lebanon, Kenya, Bangladesh',
        community: 'Vulnerable children in guardian-headed households',
        status: 'Children Awaiting Sponsors',
        impactMetric: 'Full holistic support for 1 month',
        suggestedAmount: 35,
        imageUrl: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=900&q=80',
        fallbackUrls: ['https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=900&q=80'],
        imageAlt: 'Happy sponsored orphan holding school book'
      },
      {
        id: 'orphan-education-support',
        causeSlug: 'orphan-aid',
        title: 'Orphan Education Support',
        subtitle: 'Textbooks, Stationery & Tuition',
        shortDesc: 'Annual education kit: course textbooks, notebooks, geometry sets, school bag, and school examination fees.',
        need: 'Public school tuition may be nominally free, but textbook and exam fees form an insurmountable barrier for destitute families.',
        impact: 'Equips a child with all necessary academic supplies so they never face embarrassment or exclusion in class.',
        location: 'Primary and secondary schools across relief zones',
        community: 'Orphaned students with high academic potential',
        status: 'Active School Term Deployment',
        impactMetric: 'Full academic year educational supplies for 1 child',
        suggestedAmount: 25,
        imageUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=900&q=80',
        fallbackUrls: ['https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=80'],
        imageAlt: 'Young orphan student writing carefully in notebook'
      },
      {
        id: 'orphan-clothing-pack',
        causeSlug: 'orphan-aid',
        title: 'Orphan Clothing Pack',
        subtitle: 'Dignified Seasonal Wear & Shoes',
        shortDesc: 'Two complete sets of tailored everyday clothes, sturdy leather school shoes, warm socks, and an outer jacket or sweater.',
        need: 'Many orphaned children wear torn, ill-fitting hand-me-downs or walk barefoot to school in winter cold.',
        impact: 'Restores self-esteem and pride, keeping children warm, healthy, and enthusiastic about attending school.',
        location: 'Urban and rural relief partner centers',
        community: 'Orphaned boys and girls',
        status: 'Seasonal Clothing Distribution',
        impactMetric: '2 new outfits, warm coat, and shoes for 1 child',
        suggestedAmount: 30,
        imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=80',
        fallbackUrls: ['https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=900&q=80'],
        imageAlt: 'Children dressed in clean, dignified new clothes'
      },
      {
        id: 'orphan-eid-gift',
        causeSlug: 'orphan-aid',
        title: 'Orphan Eid Gift',
        subtitle: 'Spreading Joy on Festive Days',
        shortDesc: 'A festive Eid package containing brand new Eid attire, shoes, traditional sweets, and an educational toy or puzzle.',
        need: 'While other children celebrate Eid with new clothes and gifts, orphaned children often feel their loss most acutely on holidays.',
        impact: 'Replaces tears of grief with smiles of belonging and pure childhood happiness on the special morning of Eid.',
        location: 'All Chatha Foundation orphan communities',
        community: 'Registered orphaned children',
        status: 'Delivered Before Eid Morning',
        impactMetric: 'New Eid clothes, shoes & festive gift for 1 child',
        suggestedAmount: 20,
        imageUrl: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=900&q=80',
        fallbackUrls: ['https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80'],
        imageAlt: 'Child with genuine smile opening festive gift'
      },
      {
        id: 'orphan-food-nutrition',
        causeSlug: 'orphan-aid',
        title: 'Orphan Food & Nutrition Support',
        subtitle: 'Growth & Vitality Supplements',
        shortDesc: 'Monthly specialized nutritional boost package: milk powder, multivitamins, iron supplements, eggs, and protein legumes.',
        need: 'Orphans who experienced early childhood deprivation suffer higher rates of anemia and impaired immune resistance.',
        impact: 'Supports rapid physical growth, strengthens cognitive stamina, and protects against frequent infections.',
        location: 'Community health clinics and guardian homes',
        community: 'Underweight or recovering orphaned children',
        status: 'Prescribed by Welfare Health Teams',
        impactMetric: '1 month specialized nutritional fortification',
        suggestedAmount: 28,
        imageUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80',
        fallbackUrls: ['https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=900&q=80'],
        imageAlt: 'Healthy child enjoying fresh meal'
      }
    ],
    finalCtaHeadline: 'Be the Guardian an Orphan Needs',
    finalCtaSubtext: 'Your kindness gives a vulnerable child the love, education, and protection they need to thrive.'
  },

  'qurban': {
    slug: 'qurban',
    causeId: 'qurban',
    name: 'Qurban',
    tagline: 'SACRIFICE & COMPASSION',
    heroHeadline: 'Share the blessing of Qurban with those who rarely taste meat.',
    heroDescription: 'For millions of families living in extreme poverty, meat is an unattainable luxury eaten perhaps once a year. By offering your Qurbani / Udhiyah through Chatha Foundation, you fulfill a sacred duty and bring celebratory feast meals to impoverished households.',
    heroImage: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1920&q=85',
    heroFallbackUrls: [
      'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1920&q=85',
      'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1920&q=85'
    ],
    heroAlt: 'Community members receiving respectful humanitarian aid packages',
    impactStatement: 'Over 65,000 families provided fresh Qurbani meat across Eid-ul-Adha',
    whyMatters: {
      title: 'A Rare and Cherished Source of Nutrition',
      text: 'In remote rural settlements and displacement enclaves, protein deficiency is widespread among children and mothers. Fresh meat is so expensive that many households go an entire year without it. The Eid-ul-Adha sacrifice is not merely a religious tradition; it is an essential transfer of life-giving animal protein and celebratory joy to people who are too often forgotten.',
      stat: 'Over 80% of recipients report Qurbani is their only fresh meat of the year',
      imageUrl: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=80',
      fallbackUrls: [
        'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80'
      ],
      imageAlt: 'Dignified distribution of fresh food parcels to smiling families'
    },
    howWeHelp: {
      title: 'Humane, Shariah-Compliant & Hygienic',
      text: 'Our veterinary specialists inspect every sheep, goat, and cow to guarantee they meet strict Shariah age and health criteria. Sacrifices are carried out cleanly in humane, certified abattoirs during the prescribed days of Tashreeq, and chilled meat packages are delivered directly into the hands of the poorest families.',
      points: [
        'Strict adherence to Islamic guidelines regarding animal welfare, age, and health',
        'Direct sourcing from local smallholder pastoralists, stimulating village economies',
        'Clean, climate-controlled packaging ensuring freshness even in high summer temperatures',
        'Priority distribution to registered widows, orphans, disabled persons, and refugees'
      ],
      imageUrl: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1200&q=80',
      fallbackUrls: [
        'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1200&q=80'
      ],
      imageAlt: 'Community members gathered in festive unity during Eid distribution'
    },
    yourSupport: {
      title: 'A Sacred Act That Feeds the Needy',
      text: 'Choose your Qurban share knowing every portion is handled with solemn integrity, pristine hygiene, and deep human respect.',
      impactTiers: [
        { amount: '£45 / $60', effect: '1/7th cow share providing ~5kg fresh meat to impoverished families' },
        { amount: '£95 / $125', effect: 'Full sheep / goat Qurban feeding 6–8 impoverished households' },
        { amount: '£315 / $400', effect: 'Full cow Qurban providing fresh meat parcels to 40+ vulnerable families' }
      ]
    },
    opportunitiesTitle: 'Qurban Giving Options',
    opportunitiesSubtitle: 'Perform your sacred sacrifice with complete confidence and verified field delivery.',
    opportunities: [
      {
        id: 'qurban-sheep-goat',
        causeSlug: 'qurban',
        title: 'Qurban Share — Goat / Sheep',
        subtitle: '1 Complete Small Animal',
        shortDesc: 'A healthy, fully vetted sheep or goat sacrificed according to Sunnah principles and distributed directly to local destitute households.',
        need: 'Isolated desert and mountain settlements have zero access to urban charities; our mobile teams reach the deepest hinterlands.',
        impact: 'Delivers 15–20kg of premium fresh meat, providing joyful celebratory meals to 6–8 impoverished households.',
        location: 'Pakistan, Somalia, Kenya, Yemen',
        community: 'Remote villages and drought-stricken pastoralists',
        status: 'Animals Sourced & Vetted',
        impactMetric: 'Feeds 6–8 impoverished families for several days',
        suggestedAmount: 95,
        imageUrl: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=900&q=80',
        fallbackUrls: ['https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80'],
        imageAlt: 'Family receiving fresh Qurbani provisions with warm gratitude'
      },
      {
        id: 'qurban-cow-share',
        causeSlug: 'qurban',
        title: 'Qurban Cow Share — 1/7',
        subtitle: 'One Seventh Portion of Large Animal',
        shortDesc: 'One share of seven in a healthy, veterinary-approved bull or cow, offering an affordable way to fulfill your Qurbani obligation.',
        need: 'Many donors wish to participate in Qurban on a modest budget while guaranteeing maximum meat yield for the hungry.',
        impact: 'Yields approximately 18–25kg of butchered, chilled meat portioned out to 4–6 destitute families.',
        location: 'South Asia, East Africa, Middle East',
        community: 'Slums, displacement settlements, and widow homes',
        status: 'Shares Open for Booking',
        impactMetric: '1/7 cow share providing meat to multiple households',
        suggestedAmount: 48,
        imageUrl: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=900&q=80',
        fallbackUrls: ['https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80'],
        imageAlt: 'Volunteers portioning and packing meat parcels'
      },
      {
        id: 'qurban-full-cow',
        causeSlug: 'qurban',
        title: 'Full Cow Qurban',
        subtitle: 'Complete 7 Shares for Family or Group',
        shortDesc: 'Full sacrifice of an entire healthy cow or ox on behalf of you and your family, creating an enormous feast distribution for a whole village.',
        need: 'Large refugee camps host thousands of families who receive almost zero animal protein throughout the year.',
        impact: 'Yields 130–170kg of prime fresh meat, feeding up to 40 impoverished families across the days of Eid.',
        location: 'Designated high-need relief districts',
        community: 'Large refugee camps and impoverished rural colonies',
        status: 'Reserved for Group & Family Donors',
        impactMetric: 'Feeds 35–45 vulnerable families across Eid',
        suggestedAmount: 330,
        imageUrl: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=900&q=80',
        fallbackUrls: ['https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=900&q=80'],
        imageAlt: 'Community distribution site on Eid day'
      },
      {
        id: 'qurban-meat-distribution-pkg',
        causeSlug: 'qurban',
        title: 'Qurban Meat Distribution Package',
        subtitle: 'Cook-Ready Meat & Spice Parcel',
        shortDesc: 'A complete Eid meal kit including 3kg fresh Qurban meat, 5kg basmati rice, cooking oil, onions, garlic, and traditional spices.',
        need: 'Many destitute families have meat but lack the basic cooking oil, rice, and spices required to prepare a dignified meal.',
        impact: 'Enables an impoverished mother to immediately prepare a rich, fragrant celebratory dinner for her children on Eid day.',
        location: 'Urban informal settlements and transit camps',
        community: 'Widows and elderly couples with limited cooking resources',
        status: 'Assembled Fresh on Eid Days',
        impactMetric: 'Complete feast dinner provisions for 1 family',
        suggestedAmount: 25,
        imageUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80',
        fallbackUrls: ['https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=900&q=80'],
        imageAlt: 'Mother holding fresh meat and ingredients with heartfelt relief'
      }
    ],
    finalCtaHeadline: 'Fulfill Your Qurban with Chatha Foundation',
    finalCtaSubtext: 'Your sacrifice brings the joyous taste of fresh meat and the warmth of brotherhood to families in greatest need.'
  },

  'family-support': {
    slug: 'family-support',
    causeId: 'family',
    name: 'Family Support',
    tagline: 'DIGNITY, STABILITY & RELIEF',
    heroHeadline: 'Small acts of kindness can help families through difficult times.',
    heroDescription: 'When illness, displacement, or the sudden loss of a provider strikes, an entire family can be pushed to the brink of collapse. We provide immediate emergency grants, dignified shelter, widow stipends, and medical relief to keep families together and restore self-reliance.',
    heroImage: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1920&q=85',
    heroFallbackUrls: [
      'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1920&q=85',
      'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1920&q=85'
    ],
    heroAlt: 'Mother holding her young child with gentle warmth and protective dignity',
    impactStatement: '42,000+ families provided emergency shelter, medical aid, and winter relief',
    whyMatters: {
      title: 'Fragile Households on the Edge of Ruin',
      text: 'In developing regions lacking social safety nets, a single emergency—a father contracting malaria, a flood washing away a thatched roof, or a sudden rent hike—forces families into catastrophic decisions. Debts to loan sharks lead to bonded labor, children are taken out of school, and young girls face early marriage. Stabilizing the family unit is the most effective way to prevent lifelong destitution.',
      stat: 'Over 70% of displaced households are led by women caring for 3+ dependents',
      imageUrl: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1200&q=80',
      fallbackUrls: [
        'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80'
      ],
      imageAlt: 'Family sitting safely inside a weather-proofed shelter'
    },
    howWeHelp: {
      title: 'Dignity · Stability · Urgent Support · Stronger Families',
      text: 'Our family relief caseworkers conduct respectful home visits to understand the root causes of distress. Rather than generic handouts, we tailor our assistance: paying urgent medical bills, repairing roofs before monsoon rains, providing widow cash stipends, and equipping mothers with small enterprise sewing machines.',
      points: [
        'Direct widow monthly cash transfers allowing mothers to purchase exactly what their households need',
        'Emergency surgical and medicine funds covering hospital costs for treatable conditions',
        'Weather-resistant home repairs, concrete floor pouring, and solar lantern installation',
        'Dignified marriage assistance grants for impoverished orphan brides'
      ],
      imageUrl: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1200&q=80',
      fallbackUrls: [
        'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1200&q=80'
      ],
      imageAlt: 'Elderly grandmother smiling with gratitude surrounded by family'
    },
    yourSupport: {
      title: 'Protecting Families Through Hard Times',
      text: 'Your donation provides the breathing room a parent needs to heal, rebuild, and protect their children from desperate poverty.',
      impactTiers: [
        { amount: '£30 / $40', effect: 'Supplies winter blankets, thermals, and insulating mats for a family' },
        { amount: '£60 / $75', effect: 'Covers 1 month of urgent living stipend and medicine for a vulnerable widow' },
        { amount: '£150 / $200', effect: 'Funds emergency roof waterproofing or vital medical treatment' }
      ]
    },
    opportunitiesTitle: 'Family Support Opportunities',
    opportunitiesSubtitle: 'Stand alongside vulnerable households and restore stability, hope, and dignity.',
    opportunities: [
      {
        id: 'family-widow-stipend',
        causeSlug: 'family-support',
        title: 'Widow Monthly Stipend',
        subtitle: 'Dignified Financial Independence',
        shortDesc: 'A predictable monthly cash allowance enabling a widowed mother to pay rent, buy groceries, and care for her children without debt.',
        need: 'Widows in traditional communities often face social ostracization and have no formal employment opportunities.',
        impact: 'Preserves family independence and dignity, preventing children from being forced into hazardous child labor.',
        location: 'Pakistan, Lebanon, Yemen',
        community: 'Widow-headed households caring for dependents',
        status: 'Active Monthly Casework',
        impactMetric: 'Supports a widow and her children for 1 full month',
        suggestedAmount: 50,
        imageUrl: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80',
        fallbackUrls: ['https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=900&q=80'],
        imageAlt: 'Widow with her child smiling in secure home'
      },
      {
        id: 'family-medical-assistance',
        causeSlug: 'family-support',
        title: 'Medical Treatment Assistance',
        subtitle: 'Life-Saving Health Grants',
        shortDesc: 'Covers essential surgeries, chemotherapy cycles, kidney dialysis, and chronic medications for patients with zero health insurance.',
        need: 'Treatable ailments turn fatal when families cannot afford $40 for antibiotics or $200 for emergency appendix surgery.',
        impact: 'Saves lives and restores breadwinners back to health so they can continue working and supporting their children.',
        location: 'Public hospitals and partnered charitable clinics',
        community: 'Destitute patients facing urgent health crises',
        status: 'Hospital Medical Board Approved',
        impactMetric: 'Funds critical medicine or surgical procedures',
        suggestedAmount: 85,
        imageUrl: 'https://images.unsplash.com/photo-1584467735815-f778f274e296?auto=format&fit=crop&w=900&q=80',
        fallbackUrls: ['https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=900&q=80'],
        imageAlt: 'Doctor consulting with a patient in rural clinic'
      },
      {
        id: 'family-emergency-relief-fund',
        causeSlug: 'family-support',
        title: 'Emergency Family Relief Fund',
        subtitle: 'Immediate Crisis Hardship Support',
        shortDesc: 'Rapid deployment cash and supply grants to assist families whose homes were burned, flooded, or struck by sudden catastrophe.',
        need: 'When tragedy strikes unexpectedly, victims often lose all possessions in minutes and need immediate transitional funds.',
        impact: 'Provides immediate shelter rental, temporary cooking equipment, mattresses, and clothes while long-term aid is organized.',
        location: 'Disaster zones, flash flood areas, conflict borders',
        community: 'Suddenly displaced families',
        status: 'Emergency Rapid Disbursement',
        impactMetric: 'Covers immediate emergency survival for 1 family',
        suggestedAmount: 100,
        imageUrl: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=900&q=80',
        fallbackUrls: ['https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80'],
        imageAlt: 'Humanitarian caseworker helping displaced family'
      },
      {
        id: 'family-winter-clothing-pack',
        causeSlug: 'family-support',
        title: 'Winter Clothing Pack for Family',
        subtitle: 'Warmth Against Sub-Zero Cold',
        shortDesc: 'Four heavy quilted thermal blankets, waterproof floor insulation tarpaulins, winter jackets, warm hats, gloves, and thermal socks.',
        need: 'Makeshift mud homes and unheated tents drop below freezing in winter, resulting in severe respiratory illness and hypothermia.',
        impact: 'Keeps an entire family safely insulated and warm throughout harsh four-month winter seasons.',
        location: 'Mountain regions of Kashmir, Northern Pakistan, Bekaa Valley',
        community: 'Families living in uninsulated structures',
        status: 'Seasonal Winter Relief',
        impactMetric: 'Complete warm bedding & coats for a family of 5',
        suggestedAmount: 45,
        imageUrl: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=900&q=80',
        fallbackUrls: ['https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80'],
        imageAlt: 'Elderly grandmother and child wrapped warmly in winter fleece'
      },
      {
        id: 'family-shelter-rent-assistance',
        causeSlug: 'family-support',
        title: 'Shelter / Rent Assistance',
        subtitle: 'Eviction Prevention & Home Repair',
        shortDesc: 'Provides 2–3 months of emergency rental coverage or materials (corrugated iron, cement, wood beams) to repair dangerous collapsed roofs.',
        need: 'Eviction leaves families on the street, exposing women and young children to harassment and extreme vulnerability.',
        impact: 'Secures a safe, weatherproof roof over children’s heads so parents can focus on recovering their livelihoods.',
        location: 'Peri-urban informal settlements',
        community: 'Low-income tenant families facing imminent eviction',
        status: 'Verified by Landlord Caseworkers',
        impactMetric: 'Secures safe shelter & prevents eviction for 1 family',
        suggestedAmount: 75,
        imageUrl: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=900&q=80',
        fallbackUrls: ['https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&w=900&q=80'],
        imageAlt: 'Family standing before repaired secure doorway'
      },
      {
        id: 'family-marriage-assistance',
        causeSlug: 'family-support',
        title: 'Marriage Assistance',
        subtitle: 'Dignity for Impoverished Brides',
        shortDesc: 'Dignified household starter package for orphaned or impoverished brides: modest wedding dress, bedding, cookware set, and basic furniture.',
        need: 'In many low-income cultures, orphaned girls cannot marry without basic household items, leading to severe stigma and vulnerability.',
        impact: 'Enables an impoverished young woman to begin married life with complete honor, joy, and domestic self-sufficiency.',
        location: 'Rural districts and low-income townships',
        community: 'Orphaned or destitute young women',
        status: 'Community Committee Vetted',
        impactMetric: 'Provides complete household marriage starter kit',
        suggestedAmount: 120,
        imageUrl: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=900&q=80',
        fallbackUrls: ['https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=900&q=80'],
        imageAlt: 'Traditional celebratory items and elegant wedding fabrics'
      }
    ],
    finalCtaHeadline: 'Help Strengthen a Vulnerable Family Today',
    finalCtaSubtext: 'Your compassion gives parents the strength and resources to keep their children safe and hopeful.'
  },

  'donor-projects': {
    slug: 'donor-projects',
    causeId: 'donor-projects',
    name: 'Donor Projects',
    tagline: 'LONG-TERM IMPACT & INFRASTRUCTURE',
    heroHeadline: 'Building sustainable foundations for generations to come.',
    heroDescription: 'Beyond immediate emergency relief lies the enduring work of community development. Partner with Chatha Foundation to fund complete water wells, community mosques, schools, livelihood enterprises, and medical camps that transform entire villages permanently.',
    heroImage: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1920&q=85',
    heroFallbackUrls: [
      'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1920&q=85',
      'https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&w=1920&q=85'
    ],
    heroAlt: 'Engineers, builders, and community elders inspecting newly constructed water facility',
    impactStatement: '120+ major community infrastructure projects successfully constructed and commissioned',
    whyMatters: {
      title: 'From Emergency Aid to Enduring Community Self-Sufficiency',
      text: 'Emergency rations save lives today, but long-term infrastructure changes the trajectory of a region forever. When a community gains a school, illiteracy drops across generations. When clean water flows from a solar station, disease vanishes and farmland revives. Donor projects represent enduring Sadaqah Jariyah—continuous charity whose blessings and social impact echo through time.',
      stat: 'A single infrastructure project impacts an average of 1,500 people every day for over 25 years',
      imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80',
      fallbackUrls: [
        'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80'
      ],
      imageAlt: 'Students and teacher gathered outside a newly constructed village classroom'
    },
    howWeHelp: {
      title: 'Full Engineering Governance & Transparent Reporting',
      text: 'Every major donor project is managed by qualified civil engineers and field coordinators. Donors receive GPS coordinates, architectural blueprints, ongoing milestone video updates, and a permanent commemorative dedication plaque upon completion.',
      points: [
        'Rigorous feasibility and soil testing before laying a single foundation stone',
        'Direct project ownership transferred to a trained local community maintenance board',
        'Comprehensive completion report including high-resolution photo portfolio and beneficiary testimonials',
        'Option for customized dedication plaque in memory or honor of a loved one'
      ],
      imageUrl: 'https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&w=1200&q=80',
      fallbackUrls: [
        'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80'
      ],
      imageAlt: 'Community members admiring newly commissioned water well plaque'
    },
    yourSupport: {
      title: 'Leave an Enduring Legacy of Hope',
      text: 'You can fund a project in full or contribute toward shared community infrastructure milestones.',
      impactTiers: [
        { amount: '£150 / $200', effect: 'Sponsors small enterprise livelihood equipment (commercial sewing machine or cart)' },
        { amount: '£500 / $650', effect: 'Covers construction of a modern classroom block or community medical camp' },
        { amount: '£1,800 / $2,300', effect: 'Full sponsorship of a deep community water well with personal dedication plaque' }
      ]
    },
    opportunitiesTitle: 'Featured Community Development Projects',
    opportunitiesSubtitle: 'Support a transformative infrastructure initiative or contribute toward its completion.',
    opportunities: [
      {
        id: 'project-water-well-construction',
        causeSlug: 'donor-projects',
        title: 'Water Well Construction Project',
        subtitle: 'Community Solar Borehole & Reservoir',
        shortDesc: 'Complete deep-drilled 120m solar borehole with a 10,000-liter storage tower, 8 distribution taps, and livestock troughs.',
        need: 'Over 1,400 villagers currently share a dwindling stagnant pond with livestock, causing chronic waterborne outbreaks.',
        impact: 'Permanently eliminates water scarcity for over 1,400 residents, reducing child disease and enabling kitchen farming.',
        location: 'Tharparkar Desert, Sindh, Pakistan',
        community: 'Village of Bheel Basti (1,420 residents)',
        status: 'Drilling & Tower Construction in Progress',
        impactMetric: '1,420 villagers with 24/7 flowing sweet water',
        suggestedAmount: 350,
        imageUrl: 'https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&w=900&q=80',
        fallbackUrls: ['https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=900&q=80'],
        imageAlt: 'Solar water well construction site in desert village',
        isProject: true,
        progressPercent: 68,
        peopleImpacted: '1,420 villagers'
      },
      {
        id: 'project-mosque-construction',
        causeSlug: 'donor-projects',
        title: 'Mosque Construction / Renovation',
        subtitle: 'Community Spiritual & Educational Sanctuary',
        shortDesc: 'Building a dignified 200-capacity community mosque complete with clean ablution wudu facilities, solar power, and a Quran study hall.',
        need: 'Villagers have no roofed prayer facility and must gather on bare earth under torrential rains or intense desert heat.',
        impact: 'Creates an anchor for spiritual solace, daily prayers, adult literacy, and children’s moral education.',
        location: 'Chak 42, Muzaffargarh District',
        community: 'Farming community of 850 residents',
        status: 'Roofing & Plastering Phase',
        impactMetric: '200 daily worshippers & 80 Quran students',
        suggestedAmount: 500,
        imageUrl: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=900&q=80',
        fallbackUrls: ['https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=900&q=80'],
        imageAlt: 'Arched architecture of newly built community mosque',
        isProject: true,
        progressPercent: 78,
        peopleImpacted: '850 residents'
      },
      {
        id: 'project-school-construction',
        causeSlug: 'donor-projects',
        title: 'School Construction Project',
        subtitle: '3-Classroom Primary Learning Center',
        shortDesc: 'Constructing three well-lit, earthquake-resilient classrooms, teacher office, clean gender-separated toilets, and solar fans.',
        need: 'Children in this mountain hamlet currently study under open trees; winter snows and summer rains shut down education for months.',
        impact: 'Provides a safe, year-round educational sanctuary for 150 boys and girls, breaking generations of illiteracy.',
        location: 'Neelum Valley, Azad Kashmir',
        community: 'Remote mountain village (240 families)',
        status: 'Foundation Laid & Brickwork Commencing',
        impactMetric: '150 primary students enrolled annually',
        suggestedAmount: 450,
        imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=80',
        fallbackUrls: ['https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=900&q=80'],
        imageAlt: 'Children in newly constructed brick school building',
        isProject: true,
        progressPercent: 45,
        peopleImpacted: '150 students'
      },
      {
        id: 'project-small-business-grant',
        causeSlug: 'donor-projects',
        title: 'Small Business / Livelihood Grant',
        subtitle: 'Self-Reliance Starter Enterprise',
        shortDesc: 'Equips vulnerable fathers, widows, or disabled adults with commercial tools: sewing machines, grocery pushcarts, or goat herds.',
        need: 'Generations of charity handouts do not solve poverty; families desperately want the means to earn their own halal livelihood.',
        impact: 'Transforms a dependent recipient into a proud, self-sufficient breadwinner generating stable monthly income for their children.',
        location: 'Peri-urban centers and rural townships',
        community: 'Widowed mothers and unemployed fathers',
        status: 'Active Cohort Selection',
        impactMetric: 'Full livelihood independence for 1 family',
        suggestedAmount: 180,
        imageUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80',
        fallbackUrls: ['https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=900&q=80'],
        imageAlt: 'Woman smiling beside her new tailoring workstation',
        isProject: true,
        progressPercent: 82,
        peopleImpacted: '45 small business owners'
      },
      {
        id: 'project-community-health-camp',
        causeSlug: 'donor-projects',
        title: 'Community Health Camp',
        subtitle: 'Free Multi-Specialty Medical Outreach',
        shortDesc: 'A 3-day mobile hospital deploying eye surgeons, general physicians, pediatricians, ultrasound diagnostics, and free pharmacy.',
        need: 'Villagers live 4 hours from the nearest hospital; elderly residents go blind from simple treatable cataracts for lack of money.',
        impact: 'Screens over 1,200 patients, performs 80+ sight-restoring cataract surgeries, and distributes free prescription medicines.',
        location: 'Dadu District, Sindh',
        community: 'Agricultural laborers and marginalized families',
        status: 'Scheduled for Next Month Deployment',
        impactMetric: '1,200 patients treated & 80 cataract surgeries',
        suggestedAmount: 120,
        imageUrl: 'https://images.unsplash.com/photo-1584467735815-f778f274e296?auto=format&fit=crop&w=900&q=80',
        fallbackUrls: ['https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=900&q=80'],
        imageAlt: 'Medical doctor caring for an elderly patient at outdoor clinic',
        isProject: true,
        progressPercent: 55,
        peopleImpacted: '1,200 patients'
      },
      {
        id: 'project-orphanage-building-sponsorship',
        causeSlug: 'donor-projects',
        title: 'Orphanage Building Sponsorship',
        subtitle: 'Safe Residential & Learning Sanctuary',
        shortDesc: 'Constructing a modern dormitory wing, dining hall, computer lab, and recreation area for 60 orphaned boys and girls without extended family.',
        need: 'Children without any surviving family members face extreme vulnerability on the streets without a safe residential sanctuary.',
        impact: 'Provides a secure, loving home with 24/7 house mothers, nutritious meals, tutoring, and emotional trauma recovery.',
        location: 'Faisalabad outskirts, Punjab',
        community: '60 resident orphaned children',
        status: 'Second Floor Structural Framing',
        impactMetric: 'Permanent home & education for 60 children',
        suggestedAmount: 600,
        imageUrl: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=900&q=80',
        fallbackUrls: ['https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=900&q=80'],
        imageAlt: 'Children standing proudly inside newly constructed dormitory library',
        isProject: true,
        progressPercent: 60,
        peopleImpacted: '60 resident children'
      }
    ],
    finalCtaHeadline: 'Partner in Sustainable Change',
    finalCtaSubtext: 'Your contribution builds the schools, clean water wells, and community hubs that transform entire generations.'
  }
};

export const MAIN_CAUSES_NAV_LIST = [
  { slug: 'ramadan' as CauseSlug, name: 'Ramadan', desc: 'Food packs, Iftar meals & Fitrana' },
  { slug: 'water-aid' as CauseSlug, name: 'Water Aid', desc: 'Hand pumps, wells & RO plants' },
  { slug: 'food-aid' as CauseSlug, name: 'Food Aid', desc: 'Rations, hot meals & winter packs' },
  { slug: 'orphan-aid' as CauseSlug, name: 'Orphan Aid', desc: 'Monthly sponsorship, schooling & care' },
  { slug: 'qurban' as CauseSlug, name: 'Qurban', desc: 'Sheep, goat & cow shares' },
  { slug: 'family-support' as CauseSlug, name: 'Family Support', desc: 'Widow stipends, medical aid & shelter' },
  { slug: 'donor-projects' as CauseSlug, name: 'Donor Projects', desc: 'Long-term infrastructure & wells' },
];

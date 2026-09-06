export type RegionId = "middlesex" | "williamsburg" | "richmond" | "hampton";
export type TrailerId = "shore" | "tide" | "harbor";
export type MarketingId = "lean" | "standard" | "push";

export interface PlanInputs {
  region: RegionId;
  trailer: TrailerId;
  eventsPerYear: number;
  weekendShare: number;
  photoDays: number;
  festivalDays: number;
  addOnShare: number;
  getawayShare: number;
  marketing: MarketingId;
}

export const defaultInputs: PlanInputs = {
  region: "middlesex",
  trailer: "tide",
  eventsPerYear: 40,
  weekendShare: 0.68,
  photoDays: 10,
  festivalDays: 5,
  addOnShare: 0.55,
  getawayShare: 0.25,
  marketing: "standard",
};

export const regions: Record<
  RegionId,
  { id: RegionId; name: string; short: string; rateMult: number; taxRate: number; blurb: string }
> = {
  middlesex: {
    id: "middlesex",
    name: "Middle Peninsula & Northern Neck",
    short: "Home",
    rateMult: 1,
    taxRate: 0.053,
    blurb:
      "Home circuit: Middle Peninsula and Northern Neck from a Middlesex yard. Saluda, Urbanna, Deltaville, Gloucester, Mathews, Irvington, Kilmarnock, White Stone. The 3600 stays off I-95.",
  },
  williamsburg: {
    id: "williamsburg",
    name: "Historic Triangle",
    short: "Wmbg.",
    rateMult: 1.12,
    taxRate: 0.053,
    blurb:
      "Surrounding: Williamsburg, James City, York. Destination weekends and plantation lawns about an hour from a Deltaville yard. In the map, not the default Saturday.",
  },
  richmond: {
    id: "richmond",
    name: "Richmond metro",
    short: "RVA",
    rateMult: 1.08,
    taxRate: 0.053,
    blurb:
      "Surrounding by surcharge: city estates, Goochland and Hanover farms. A 75–90 minute tow from Middlesex. Charge the miles; do not make it the default Saturday.",
  },
  hampton: {
    id: "hampton",
    name: "Hampton Roads",
    short: "HR",
    rateMult: 1.02,
    taxRate: 0.06,
    blurb:
      "Far edge of surrounding areas: Norfolk, Virginia Beach, Newport News. Waterfront and military-family events, 6.0% combined sales tax. The 3600 will do it; budget cooling, time, and a recovery plan.",
  },
};

export const trailers: Record<
  TrailerId,
  {
    id: TrailerId;
    name: string;
    build: number;
    truck: number;
    weekend: number;
    note: string;
    truckNote: string;
  }
> = {
  shore: {
    id: "shore",
    name: "Shore",
    build: 14500,
    truck: 24000,
    weekend: 1150,
    note: "1963 Yellowstone canned ham, solid frame, owner-built serving hatch, painted interior, basic ice and lighting.",
    truckNote: "1950 Chevy 3600, running driver in green. 12-volt conversion, brakes, radials, cooling — safe to tow, not a show truck.",
  },
  tide: {
    id: "tide",
    name: "Tide",
    build: 28000,
    truck: 36000,
    weekend: 1550,
    note: "Professional Yellowstone restoration, cream-and-green two-tone, hardwood bar, serving hatch, string lights, tap-ready.",
    truckNote: "Restored working 3600 in matching green: body and brightwork done, mechanicals sorted, still a tow vehicle first.",
  },
  harbor: {
    id: "harbor",
    name: "Harbor",
    build: 42000,
    truck: 48000,
    weekend: 1950,
    note: "Frame-off Yellowstone, concours cream-and-green skin, refrigeration, generator — the version that books Tides Inn-caliber Saturdays.",
    truckNote: "Show-quality vintage Chevy 3600 that still tows. Period-correct and photographed constantly. Parts and paint are not a hobby line.",
  },
};

export const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
] as const;

/** Tidewater event seasonality, sums to 1. Oyster festival bump in November. */
export const SEASON = [0.04, 0.05, 0.07, 0.1, 0.12, 0.11, 0.07, 0.07, 0.12, 0.12, 0.08, 0.05];

export const chartColors = {
  forest: "#24352c",
  moss: "#3d5246",
  lime: "#a4b13d",
  ink: "#1c1915",
  line: "#d9d0c3",
  cream: "#f3eee4",
  muted: "#6b6458",
};

export const marketingPlans: Record<
  MarketingId,
  {
    id: MarketingId;
    name: string;
    spend: number;
    inquiries: number;
    closeRate: number;
    note: string;
  }
> = {
  lean: {
    id: "lean",
    name: "Lean",
    spend: 1200,
    inquiries: 80,
    closeRate: 0.25,
    note: "Owner Instagram, one wedding listing, a print run of leave-behinds. Fine for a first season if you walk every marina yourself.",
  },
  standard: {
    id: "standard",
    name: "Standard",
    spend: 2400,
    inquiries: 140,
    closeRate: 0.28,
    note: "The Knot and WeddingWire, festival vendor fees, photographer outreach, a small paid boost in peak booking months. Matches a 40-event year on the home circuit.",
  },
  push: {
    id: "push",
    name: "Push",
    spend: 4800,
    inquiries: 210,
    closeRate: 0.3,
    note: "Paid listing boosts, a second styled shoot, a planner breakfast in Irvington, extra festival days. Use this when Saturdays are still open in March.",
  },
};

const MARKETING_CHANNELS: { label: string; share: number }[] = [
  { label: "Listings", share: 0.38 },
  { label: "Festivals", share: 0.18 },
  { label: "Boosts", share: 0.18 },
  { label: "Print", share: 0.14 },
  { label: "Photographers", share: 0.12 },
];

export interface CostLine {
  id: string;
  label: string;
  amount: number;
  note?: string;
}

export interface PlanResult {
  region: (typeof regions)[RegionId];
  trailer: (typeof trailers)[TrailerId];
  startup: { lines: CostLine[]; total: number };
  rates: {
    weekend: number;
    weekday: number;
    deliveryAvg: number;
    blended: number;
    photo: number;
    festival: number;
    addOn: number;
    getaway: number;
  };
  annual: {
    events: number;
    weekendEvents: number;
    weekdayEvents: number;
    rental: number;
    delivery: number;
    addOns: number;
    photo: number;
    festival: number;
    getaway: number;
    merch: number;
    ancillary: number;
    revenue: number;
    variable: number;
    processing: number;
    contribution: number;
    fixed: number;
    ownerProfit: number;
    hours: number;
    effectiveHourly: number;
    taxRate: number;
    taxCollected: number;
    propertyTax: number;
  };
  mix: { label: string; amount: number }[];
  breakeven: { events: number; monthsToPayback: number | null };
  years: { year: number; events: number; revenue: number; profit: number; cumulative: number }[];
  monthly: { month: string; events: number; revenue: number }[];
  fixedLines: CostLine[];
  marketing: {
    id: MarketingId;
    name: string;
    spend: number;
    inquiries: number;
    closeRate: number;
    booked: number;
    gap: number;
    costPerInquiry: number;
    channels: { label: string; amount: number }[];
  };
}

const EQUIPMENT = 3800;
const BRANDING = 3200;
const LEGAL = 900;
const SITE = 450;
const WORKING = 2500;
const CONTINGENCY_RATE = 0.08;
const PHOTO_RATE = 550;
const FESTIVAL_RATE = 950;
const ADDON_AVG = 220;
const GETAWAY_RATE = 350;
const MERCH = 900;
const MIDDLESEX_PP_RATE = 0.026;

function round(n: number) {
  return Math.round(n);
}

export function compute(input: PlanInputs): PlanResult {
  const region = regions[input.region];
  const trailer = trailers[input.trailer];
  const events = Math.max(8, Math.min(72, Math.round(input.eventsPerYear)));
  const weekendShare = Math.min(0.9, Math.max(0.4, input.weekendShare));
  const photoDays = Math.max(0, Math.min(40, Math.round(input.photoDays)));
  const festivalDays = Math.max(0, Math.min(20, Math.round(input.festivalDays)));
  const addOnShare = Math.min(1, Math.max(0, input.addOnShare));
  const getawayShare = Math.min(0.8, Math.max(0, input.getawayShare));
  const mkt = marketingPlans[input.marketing] ?? marketingPlans.standard;

  const insurancePrepaid = 3200;
  const baseLines: CostLine[] = [
    {
      id: "trailer",
      label: `1963 Yellowstone (${trailer.name})`,
      amount: trailer.build,
      note: trailer.note,
    },
    {
      id: "truck",
      label: `1950 Chevrolet 3600 (${trailer.name})`,
      amount: trailer.truck,
      note: trailer.truckNote,
    },
    {
      id: "equip",
      label: "Bar equipment & glass",
      amount: EQUIPMENT,
      note: "Ice bins, speed rails, vintage-look glassware, coolers, tap hardware, lighting, generator share.",
    },
    {
      id: "brand",
      label: "Livery, site & photography",
      amount: BRANDING,
      note: "Period paint, domain, lookbook of the pair on the Rappahannock — the truck is half the ad.",
    },
    {
      id: "legal",
      label: "LLC, contracts, filings",
      amount: LEGAL,
      note: "SCC Articles $100, operating agreement, dry-hire contract, Middlesex BPOL.",
    },
    {
      id: "ins",
      label: "Insurance (first year)",
      amount: insurancePrepaid,
      note: "GL $1–2M, inland marine on the Yellowstone, agreed-value on the 3600, commercial auto — not antique-hobby coverage.",
    },
    {
      id: "web",
      label: "Booking stack",
      amount: SITE,
      note: "HoneyBook or Dubsado, domain, site.",
    },
    {
      id: "cash",
      label: "Working capital",
      amount: WORKING,
      note: "Two months of fixed costs plus a parts float for Advance Design Chevy bits.",
    },
  ];
  const subtotal = baseLines.reduce((s, l) => s + l.amount, 0);
  const contingency = round(subtotal * CONTINGENCY_RATE);
  const lines = [...baseLines, { id: "contingency", label: "Contingency (8%)", amount: contingency }];
  const startupTotal = lines.reduce((s, l) => s + l.amount, 0);

  const weekend = round(trailer.weekend * region.rateMult);
  const weekday = round(weekend * 0.62);
  const deliveryAvg = region.id === "middlesex" ? 55 : 110;
  const weekendEvents = round(events * weekendShare);
  const weekdayEvents = events - weekendEvents;
  const rental = weekendEvents * weekend + weekdayEvents * weekday;
  const delivery = round(events * 0.55 * deliveryAvg);
  const addOns = round(events * addOnShare * ADDON_AVG);
  const photo = photoDays * PHOTO_RATE;
  const festival = festivalDays * FESTIVAL_RATE;
  const getawayCount = round(weekendEvents * getawayShare);
  const getaway = getawayCount * GETAWAY_RATE;
  const merch = MERCH;
  const ancillary = addOns + photo + festival + getaway + merch;
  const revenue = rental + delivery + ancillary;
  const blended = events > 0 ? (rental + delivery) / events : 0;

  const fuelWear = 160;
  const cleaning = 45;
  const variable = round(
    events * (fuelWear + cleaning) + photoDays * 45 + festivalDays * 90 + getawayCount * 25,
  );
  const processing = round(revenue * 0.029);
  const contribution = revenue - variable - processing;

  const assessedTruck = trailer.truck * 0.4;
  const assessedTrailer = trailer.build * 0.4;
  const propertyTax = round((assessedTruck + assessedTrailer) * MIDDLESEX_PP_RATE + EQUIPMENT * 0.1 * 0.035);

  const fixedLines: CostLine[] = [
    { id: "ins-y", label: "Insurance", amount: 3200 },
    { id: "store", label: "Covered yard (Middlesex)", amount: 600, note: "Carport or barn on the home property. Skip if you already have one." },
    { id: "mkt", label: "Marketing & listings", amount: mkt.spend, note: mkt.note },
    { id: "soft", label: "Software & phone", amount: 540 },
    { id: "maint", label: "Vintage maintenance reserve", amount: 2400, note: "3600 cooling, brakes, tires; Yellowstone seals and axle." },
    { id: "ppt", label: "Middlesex personal property tax", amount: propertyTax, note: "$2.60 / $100 on truck and trailer (regular tags, not antique). Equipment at $3.50 / $100 on 10% of cost." },
    { id: "tax", label: "SCC, BPOL, filings", amount: 280, note: "Middlesex BPOL: $30 under $50k receipts; services $0.20 / $100 above." },
  ];
  const fixed = fixedLines.reduce((s, l) => s + l.amount, 0);
  const ownerProfit = contribution - fixed;
  const hours = events * 10 + photoDays * 3 + festivalDays * 6 + getawayCount * 1.5;
  const effectiveHourly = hours > 0 ? ownerProfit / hours : 0;
  const taxCollected = round(revenue * region.taxRate);

  const contribPerEvent = events > 0 ? (rental + delivery + addOns - events * (fuelWear + cleaning) - processing * ((rental + delivery + addOns) / Math.max(revenue, 1))) / events : 0;
  const breakevenEvents = contribPerEvent > 0 ? Math.ceil(fixed / contribPerEvent) : Infinity;
  const monthlyProfit = ownerProfit / 12;
  const monthsToPayback = monthlyProfit > 0 ? Math.ceil(startupTotal / monthlyProfit) : null;

  const growth = [1, 1.25, 1.45];
  let cumulative = 0;
  const years = growth.map((g, i) => {
    const yearEvents = Math.min(72, round(events * g));
    const scale = yearEvents / events;
    const yearRevenue = round(revenue * scale);
    const yearVar = round(variable * scale);
    const yearProc = round(yearRevenue * 0.029);
    const yearProfit = yearRevenue - yearVar - yearProc - fixed;
    cumulative += yearProfit;
    return {
      year: i + 1,
      events: yearEvents,
      revenue: yearRevenue,
      profit: yearProfit,
      cumulative,
    };
  });

  const monthly = MONTHS.map((month, i) => {
    const ev = Math.max(0, Math.round(events * SEASON[i]));
    return { month, events: ev, revenue: round(ev * blended + ancillary * SEASON[i]) };
  });

  const mix = [
    { label: "Dry hire", amount: rental },
    { label: "Delivery", amount: delivery },
    { label: "Add-ons", amount: addOns },
    { label: "Photo days", amount: photo },
    { label: "Festivals", amount: festival },
    { label: "Getaway", amount: getaway },
    { label: "Merch", amount: merch },
  ].filter((m) => m.amount > 0);

  const inquiries = round(mkt.inquiries * region.rateMult);
  const booked = round(inquiries * mkt.closeRate);
  const marketing = {
    id: mkt.id,
    name: mkt.name,
    spend: mkt.spend,
    inquiries,
    closeRate: mkt.closeRate,
    booked,
    gap: events - booked,
    costPerInquiry: inquiries > 0 ? round(mkt.spend / inquiries) : 0,
    channels: MARKETING_CHANNELS.map((c) => ({
      label: c.label,
      amount: round(mkt.spend * c.share),
    })),
  };

  return {
    region,
    trailer,
    startup: { lines, total: startupTotal },
    rates: {
      weekend,
      weekday,
      deliveryAvg,
      blended,
      photo: PHOTO_RATE,
      festival: FESTIVAL_RATE,
      addOn: ADDON_AVG,
      getaway: GETAWAY_RATE,
    },
    annual: {
      events,
      weekendEvents,
      weekdayEvents,
      rental,
      delivery,
      addOns,
      photo,
      festival,
      getaway,
      merch,
      ancillary,
      revenue,
      variable,
      processing,
      contribution,
      fixed,
      ownerProfit,
      hours,
      effectiveHourly,
      taxRate: region.taxRate,
      taxCollected,
      propertyTax,
    },
    mix,
    breakeven: {
      events: Number.isFinite(breakevenEvents) ? breakevenEvents : 0,
      monthsToPayback,
    },
    years,
    monthly,
    fixedLines,
    marketing,
  };
}

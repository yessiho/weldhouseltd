// lib/constants.ts

export const COMPANY = {
  name: "WeldHouse Limited",
  tagline: "Nigeria's First Modern High Tonnage Oil & Gas Fabrication Yard",
  registration: "RC 760751",
  founded: 2008,
  address: "27 Port Harcourt Street, Uyo, Akwa Ibom State, Nigeria",
  email: "nsi.udott@weldhouseltd.com",
  phone1: "+1-403-618-6164",
  phone2: "+234-814-259-3378",
  website: "www.weldhouseltd.com",
  contact: "Nsikak (Nsi) Udott",
};

export const PROJECT = {
  totalFunding: "US$ 450 Million",
  landSize: "49 Hectares (122 Acres)",
  duration: "40 Months",
  location: "East Bank of Cross River, 8 nautical miles upstream from Atlantic Ocean, Akwa Ibom State",
  coordinates: "4° 40' 48.01\"N and 8° 19' 08.73\"E",
  npv: "US$ 1.40 Billion",
  irr: "54.8%",
  payback: "5 Years",
};

export const NAV_LINKS = [
  { label: "Home",        href: "/" },
  { label: "About",       href: "/about" },
  {
    label: "Project",
    href: "/project",
    children: [
      { label: "Overview",  href: "/project" },
      { label: "Scope",     href: "/project/scope" },
      { label: "Design",    href: "/project/design" },
      { label: "Location",  href: "/project/location" },
    ],
  },
  { label: "Facilities",  href: "/facilities" },
  { label: "Financials",  href: "/financials" },
  { label: "Team",        href: "/team" },
  { label: "Investors",   href: "/investors" },
  { label: "SWOT",        href: "/swot" },
  { label: "Risk",        href: "/risk" },
  { label: "Contact",     href: "/contact" },
];

export const KEY_STATS = [
  { label: "Total Funding Required", value: "$450M",      suffix: "USD" },
  { label: "Net Present Value",       value: "$1.4B",      suffix: "NPV" },
  { label: "Internal Rate of Return", value: "54.8%",      suffix: "IRR" },
  { label: "Payback Period",          value: "5 Years",    suffix: "ROI" },
  { label: "Land Acquired",           value: "49 Ha",      suffix: "122 Acres" },
  { label: "Project Duration",        value: "40 Months",  suffix: "Timeline" },
];

export const BUDGET_BREAKDOWN = [
  { scope: "Engineering",                         schedule: "Mth 1–14",  duration: "14 months", cost: 17 },
  { scope: "Early Site Works",                    schedule: "Mth 12–21", duration: "8 months",  cost: 117 },
  { scope: "Yard Construction",                   schedule: "Mth 14–40", duration: "26 months", cost: 276 },
  { scope: "Community Projects",                  schedule: "Mth 1–40",  duration: "40 months", cost: 4 },
  { scope: "Project Management",                  schedule: "Mth 1–40",  duration: "40 months", cost: 6 },
  { scope: "Consultants, Pre-development & Finance Charges", schedule: "Mth 1–40", duration: "40 months", cost: 26 },
  { scope: "Project Insurance Policies",          schedule: "Mth 6–40",  duration: "35 months", cost: 4 },
];

export const REVENUE_PROJECTIONS = [
  { year: "Year 1–4", label: "Yard Building",         revenue: 0 },
  { year: "Year 5",   label: "1st FPSO Contract",      revenue: 2386 },
  { year: "Year 6",   label: "2nd FPSO Contract",      revenue: 2766 },
  { year: "Year 7",   label: "3rd FPSO Contract",      revenue: 3271 },
  { year: "Year 8",   label: "4th O&G Contract",       revenue: 3011 },
  { year: "Year 9",   label: "5th O&G Contract",       revenue: 2001 },
  { year: "Year 10",  label: "6th O&G Contract",       revenue: 2542 },
];
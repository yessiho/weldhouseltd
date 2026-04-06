// lib/types.ts

export interface NavChild {
  label: string;
  href: string;
}

export interface NavLink {
  label: string;
  href: string;
  children?: NavChild[];
}

export interface KeyStat {
  label: string;
  value: string;
  suffix: string;
}

export interface BudgetItem {
  scope: string;
  schedule: string;
  duration: string;
  cost: number;
}

export interface RevenueItem {
  year: string;
  label: string;
  revenue: number;
}

export interface TeamMember {
  name: string;
  title: string;
  nationality: string;
  experience: string;
  highlights: string[];
  education: string[];
  image?: string;
  deceased?: boolean;
}

export interface FacilityType {
  title: string;
  description: string;
  image: string;
}

export interface SwotItem {
  category: "strength" | "weakness" | "opportunity" | "threat";
  points: string[];
}

export interface RiskItem {
  risk: string;
  mitigations: string[];
}
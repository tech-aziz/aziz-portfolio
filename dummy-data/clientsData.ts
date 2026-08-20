import { Building2, TrendingUp, Users, Smartphone, HeartHandshake, Award, ShieldAlert } from "lucide-react";
import React from "react";

export interface Client {
  name: string;
  subtitle: string;
  categoryTag: string;
  metric: string;
  nicheTag: string;
  link?: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const clientsData: Client[] = [
  {
    name: "ATRULE Technologies",
    subtitle: "5+ year delivery partnership",
    categoryTag: "Software house",
    metric: "15+ production apps",
    nicheTag: "Mobile products",
    link: "https://atrule.com",
    icon: Building2,
  },
  {
    name: "Black Tower Investments Ltd.",
    subtitle: "Trader companion apps",
    categoryTag: "Fintech",
    metric: "Android + iOS products",
    nicheTag: "Trading tools",
    icon: TrendingUp,
  },
  {
    name: "Astutex",
    subtitle: "Business networking platform",
    categoryTag: "Product partner",
    metric: "Android + iOS products",
    nicheTag: "Commerce",
    icon: Users,
  },
  {
    name: "CodeDesk Studio",
    subtitle: "Multi-product delivery",
    categoryTag: "Delivery partner",
    metric: "Android + iOS products",
    nicheTag: "Apps & platforms",
    icon: Smartphone,
  },
  {
    name: "Aajizz",
    subtitle: "Donation and community platform",
    categoryTag: "Product partner",
    metric: "Android + iOS products",
    nicheTag: "Community",
    icon: HeartHandshake,
  },
  {
    name: "Upwork",
    subtitle: "Top Rated · 100% Job Success",
    categoryTag: "Freelance delivery",
    metric: "Long-term remote engagements",
    nicheTag: "Global clients",
    link: "https://www.upwork.com/freelancers/~01bc46ada7bc95dc8f?referrer_url_path=%2Fnx%2Fsearch%2Ftalent%2Fdetails%2F~01bc46ada7bc95dc8f%2Fprofile",
    icon: Award,
  },
  {
    name: "Pakistan Petrol Price Today",
    subtitle: "Fuel prices and vehicle expenses",
    categoryTag: "Flutter",
    metric: "100K+ installs",
    nicheTag: "Utility app",
    link: "https://play.google.com/store/apps/details?id=com.atrule.pakistanpetrolpricetoday",
    icon: Smartphone,
  },
  {
    name: "Kivora",
    subtitle: "Trading mindset platform",
    categoryTag: "KMP + Native UI",
    metric: "Android + iOS",
    nicheTag: "Wellbeing",
    link: "https://play.google.com/store/apps/details?id=com.blacktowerinvestments.kivora",
    icon: ShieldAlert,
  },
];

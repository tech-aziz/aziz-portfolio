"use client";

import React from "react";
import {
  ShoppingBag,
  Home,
  Calendar,
  Truck,
  Building2,
  Heart,
  Utensils,
  Film,
  Compass,
  Trophy,
  Users,
  Shield,
  Briefcase,
  Store,
  Layers,
  PhoneCall,
  Activity,
  Tv
} from "lucide-react";

interface NdaProduct {
  title: string;
  category: string;
  description: string;
  tags: string[];
  icon: React.ElementType;
}

interface NdaCategory {
  title: string;
  products: NdaProduct[];
}

export default function NdaProducts() {
  const categories: NdaCategory[] = [
    {
      title: "Commerce, Property, Booking, and Delivery",
      products: [
        {
          title: "LylaCart",
          category: "Regional Shopping",
          description:
            "Multi-country shopping flows with offers, checkout, order tracking, and localized retail experiences.",
          tags: ["Flutter", "GetX", "Payments", "Push Notifications"],
          icon: ShoppingBag,
        },
        {
          title: "Furniture Store",
          category: "Furniture Commerce",
          description:
            "Product browsing, cart flows, favorites, and purchase journeys for furniture retail customers.",
          tags: ["Flutter", "Catalog APIs", "Cart", "Wishlist"],
          icon: Store,
        },
        {
          title: "Housing Organiser",
          category: "Property Finder",
          description:
            "Post, discover, and manage property listings for buy, rent, and sell use cases.",
          tags: ["Flutter", "Maps", "Listings", "Media Uploads"],
          icon: Home,
        },
        {
          title: "Beauty & Service Booking",
          category: "Appointments",
          description:
            "Salon and home-service booking app with location, reviews, and schedule management.",
          tags: ["Flutter", "Booking Engine", "Maps", "Chat"],
          icon: Calendar,
        },
        {
          title: "Fawry Delivery",
          category: "Last-Mile Delivery",
          description:
            "Customer, courier, and merchant app flows for order assignment and end-to-end delivery tracking.",
          tags: ["Flutter", "Realtime Tracking", "Role-based Flows", "Notifications"],
          icon: Truck,
        },
      ],
    },
    {
      title: "Business, Networking, and Admin",
      products: [
        {
          title: "BusiBeez",
          category: "Business Networking",
          description:
            "Business discovery, promotion, and messaging workflows for local deal and partner engagement.",
          tags: ["Flutter", "Messaging", "Ads", "Deals"],
          icon: Building2,
        },
        {
          title: "Aajizz Admin",
          category: "Donation Admin",
          description:
            "Admin console for KYC, campaigns, transaction approvals, and operational finance controls.",
          tags: ["Flutter", "Admin APIs", "KYC", "Dashboard"],
          icon: Shield,
        },
        {
          title: "LylaCart Admin",
          category: "Retail Admin",
          description:
            "Product, order, offers, and notification administration for multi-country retail operations.",
          tags: ["Flutter", "Catalog Admin", "Analytics", "Push Management"],
          icon: Store,
        },
        {
          title: "Furniture Store Admin",
          category: "Catalog Admin",
          description:
            "Inventory, media, and category control panel for furniture storefront operations.",
          tags: ["Flutter", "Inventory", "Media Handling", "Role-based Access"],
          icon: Layers,
        },
        {
          title: "EPP Film Studio",
          category: "Production Operations",
          description:
            "Studio asset and record management platform with searchable production workflows.",
          tags: ["Flutter", "Asset Manager", "Search", "Export Pipelines"],
          icon: Film,
        },
        {
          title: "WEBATE Admin",
          category: "Hospitality Admin",
          description:
            "Hotel and dining operations app for menu, offers, event, and venue management.",
          tags: ["Flutter", "Admin APIs", "Offers", "Event Modules"],
          icon: Utensils,
        },
      ],
    },
    {
      title: "Care, Community, and Media",
      products: [
        {
          title: "Private Elderly Care",
          category: "Caregiving Platform",
          description:
            "Caregiver and employer onboarding with support workflows, premium content, and service management.",
          tags: ["Flutter", "Onboarding", "Role-based UX", "Subscriptions"],
          icon: Heart,
        },
        {
          title: "Aajizz",
          category: "Donations and E-Stamps",
          description:
            "Donation platform with wallet funding, QR e-stamps, campaign visibility, and transparent history.",
          tags: ["Flutter", "Wallet", "QR", "Campaign Tracking"],
          icon: Shield,
        },
        {
          title: "EatWell",
          category: "Nutrition and Meal Plans",
          description:
            "Personalized meal planning and nutrition workflows for customer and service-provider roles.",
          tags: ["Flutter", "Meal Planner", "Role-based Access", "Notifications"],
          icon: Utensils,
        },
        {
          title: "WEBATE",
          category: "Restaurant Discovery",
          description:
            "Dining app for menus, offers, and event-focused restaurant discovery journeys.",
          tags: ["Flutter", "Offers", "Search", "Location Services"],
          icon: Utensils,
        },
        {
          title: "Hemisferio",
          category: "Resident Community",
          description:
            "Community platform with messaging, maintenance requests, notices, and resident service modules.",
          tags: ["Flutter", "Community Feed", "Requests", "Messaging"],
          icon: Users,
        },
        {
          title: "Boom Entertainment",
          category: "Streaming",
          description:
            "Video streaming product covering movies, live TV, downloads, and subscription access.",
          tags: ["Flutter", "Video Streaming", "Downloads", "Subscriptions"],
          icon: Tv,
        },
        {
          title: "Man Overboard",
          category: "Emergency Rescue",
          description:
            "Rescue-reporting utility with geolocation, weather context, and emergency coordination flows.",
          tags: ["Flutter", "Maps", "Weather APIs", "Emergency Alerts"],
          icon: Activity,
        },
        {
          title: "IPL Sports Guide",
          category: "Sports Companion",
          description:
            "Cricket companion app with points tables, schedules, and league-reference statistics.",
          tags: ["Android", "Sports APIs", "Schedules", "Stats"],
          icon: Trophy,
        },
      ],
    },
  ];

  return (
    <section id="nda-products" className="py-20 px-6">
      <div className="max-w-[1250px] mx-auto space-y-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-[var(--color-text)]">
            Client Products (NDA)
          </h2>
          <p className="text-[var(--color-text-muted)] mt-2 text-base">
            15+ NDA and client-owned mobile products not publicly listed on app stores.
          </p>
        </div>

        {categories.map((cat, catIdx) => (
          <div key={catIdx} className="space-y-6">
            <h3 className="text-lg font-bold font-mono text-[var(--color-text)] tracking-tight">
              {cat.title}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.products.map((product, pIdx) => {
                const IconComponent = product.icon;
                return (
                  <div
                    key={pIdx}
                    className="group bg-[var(--color-bg-card)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/5 flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Row: Icon + Title + NDA Badge */}
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)] shrink-0">
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <h4 className="text-base font-bold text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
                            {product.title}
                          </h4>
                        </div>
                        <span className="px-2.5 py-0.5 text-[10px] font-mono font-semibold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                          NDA
                        </span>
                      </div>

                      {/* Subtitle / Category */}
                      <p className="text-xs font-mono text-[var(--color-accent)] font-semibold mb-3">
                        {product.category}
                      </p>

                      {/* Description */}
                      <p className="text-xs text-[var(--color-text-muted)] leading-relaxed mb-6">
                        {product.description}
                      </p>
                    </div>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[var(--color-border)]">
                      {product.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-[10px] font-mono rounded-full bg-[var(--color-bg-card-hover)] text-[var(--color-text-muted)] border border-[var(--color-border)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

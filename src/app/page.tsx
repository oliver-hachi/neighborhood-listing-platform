"use client";

import PropertyCard from "@/components/PropertyCard";
import SponsorBanner from "@/components/SponsorBanner";
import SearchFilters from "@/components/SearchFilters";
import { Property, Sponsor } from "@/types";
import propertiesData from "../../data/generated/properties-v2.json";

const SAMPLE_PROPERTIES: Property[] = propertiesData;

const SAMPLE_SPONSOR: Sponsor = {
  id: "sponsor-1",
  name: "South Congress Bakery & Cafe",
  headline: "Support a local business in your neighborhood.",
  targetUrl: "https://www.example.com/sponsors/soco-bakery",
};

export default function App() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="mb-6 text-3xl font-extrabold text-slate-900">
        Featured Homes
      </h1>

      <SearchFilters onFilter={() => {}} />

      <div className="mb-6">
        <SponsorBanner sponsor={SAMPLE_SPONSOR} />
      </div>

      <section
        aria-labelledby="available-properties-heading"
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        <h2
          id="available-properties-heading"
          className="col-span-full text-2xl font-bold text-slate-900"
        >
          Available Properties
        </h2>

        {SAMPLE_PROPERTIES.map((property) => (
          <PropertyCard
            key={property.property_id}
            property={property}
          />
        ))}
      </section>
    </main>
  );
}

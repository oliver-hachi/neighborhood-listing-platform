"use client";

import PropertyCard from "@/components/PropertyCard";
import SponsorBanner from "@/components/SponsorBanner";
import SearchFilters from "@/components/SearchFilters";
import { Property, Sponsor } from "@/types";

const SAMPLE_PROPERTIES: Property[] = [
  {
    property_id: "prop-101",
    address: "2408 South Congress Ave",
    city: "Austin",
    state: "TX",
    zip_code: "78704",
    price: 645000,
    bedrooms: 3,
    bathrooms: 2,
    square_feet: 1850,
    amenities: [
      "Garage",
      "Central Air Conditioning",
      "Fenced Backyard",
    ],
    local_sponsors: [
      {
        sponsor_id: "spn-701",
        name: "South Congress Bakery & Cafe",
        target_url: "https://www.example.com/sponsors/soco-bakery",
      },
    ],
  },
  {
    property_id: "prop-102",
    address: "360 Colorado St, Apt 1402",
    city: "Austin",
    state: "TX",
    zip_code: "78701",
    price: 520000,
    bedrooms: 2,
    bathrooms: 2,
    square_feet: 1100,
    amenities: [
      "Fitness Center",
      "Covered Parking",
      "Skyline City View",
    ],
    local_sponsors: [
      {
        sponsor_id: "spn-702",
        name: "Lady Bird Lake Kayak Rentals",
        target_url: "https://www.example.com/sponsors/ladybird-kayak",
      },
    ],
  },
  {
    property_id: "prop-103",
    address: "1105 East 11th St",
    city: "Austin",
    state: "TX",
    zip_code: "78702",
    price: 485000,
    bedrooms: 2,
    bathrooms: 1,
    square_feet: 1250,
    amenities: [
      "Covered Front Porch",
      "Fenced Private Yard",
      "Restored Hardwood Floors",
    ],
    local_sponsors: [
      {
        sponsor_id: "spn-703",
        name: "Eastside Roasting Company",
        target_url: "https://www.example.com/sponsors/eastside-coffee",
      },
    ],
  },
  {
    property_id: "prop-104",
    address: "7420 Meadowlark Dr",
    city: "Denver",
    state: "CO",
    zip_code: "80228",
    price: 725000,
    bedrooms: 4,
    bathrooms: 3,
    square_feet: 2400,
    amenities: [
      "Attached Two-Car Garage",
      "Stone Fireplace",
      "Flagstone Patio",
    ],
    local_sponsors: [
      {
        sponsor_id: "spn-704",
        name: "Foothills Outdoor Gear & Ski",
        target_url: "https://www.example.com/sponsors/foothills-gear",
      },
    ],
  },
  {
    property_id: "prop-105",
    address: "1750 Humboldt St, Apt 3B",
    city: "Denver",
    state: "CO",
    zip_code: "80218",
    price: 349000,
    bedrooms: 1,
    bathrooms: 1,
    square_feet: 750,
    amenities: [
      "Assigned Parking Space",
      "Resident Fitness Center",
      "Landscaped Shared Courtyard",
    ],
    local_sponsors: [
      {
        sponsor_id: "spn-705",
        name: "Cheesman Park Florist",
        target_url: "https://www.example.com/sponsors/cheesman-florist",
      },
    ],
  },
];

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

"use client";

import React from "react";
import { Property } from "../types";

export const PropertyCard: React.FC<{ property: Property }> = ({ property }) => {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(property.price);

  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="flex flex-1 flex-col p-4">
        <span className="text-xl font-bold text-slate-900">
          {formattedPrice}
        </span>

        <h3 className="mt-1 text-lg font-semibold text-slate-800">
          {property.address}
        </h3>

        <address className="mt-1 text-sm not-italic text-slate-600">
          {property.city}, {property.state} {property.zip_code}
        </address>

        <ul className="mt-4 flex gap-4 border-t border-slate-100 pt-3 text-sm text-slate-600">
          <li>
            <strong>{property.bedrooms}</strong> beds
          </li>
          <li>
            <strong>{property.bathrooms}</strong> baths
          </li>
          <li>
            <strong>{property.square_feet}</strong> sqft
          </li>
        </ul>

        <div className="mt-3">
          <p className="text-sm font-medium text-slate-700">Amenities</p>
          <ul className="mt-1 flex flex-wrap gap-2">
            {property.amenities.map((amenity) => (
              <li
                key={amenity}
                className="rounded bg-slate-100 px-2 py-1 text-xs text-slate-600"
              >
                {amenity}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto pt-4">
          <a
            href={`/properties/${property.property_id}`}
            aria-label={`View details for ${property.address}`}
            className="inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            View Details
          </a>
        </div>
      </div>
    </article>
  );
};

export default PropertyCard;

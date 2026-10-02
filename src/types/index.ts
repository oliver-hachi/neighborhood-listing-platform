
export interface LocalSponsor {
  sponsor_id: string;
  name: string;
  target_url: string;
}

export interface Property {
  property_id: string;
  address: string;
  city: string;
  state: string;
  zip_code: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  square_feet: number;
  amenities: string[];
  local_sponsors: LocalSponsor[];
}

export interface Sponsor {
  id: string;
  name: string;
  headline: string;
  targetUrl: string;
}

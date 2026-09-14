export interface LocationArea {
  id: string;
  name: string;
  tagline: string;
  description: string;
  isMainOffice?: boolean;
}
 
export const mainOffice = {
  name: "DS Luxe Clean Services - Headquarters",
  addressLine1: "1106 Clayton Ln.",
  cityStateZip: "Austin, TX 78723",
  phoneOffice: "+1 (512) 7374290829",
  phone: '+1 (512) 770-0528',
  email: "dsluxeclean@gmail.com",
  googleMapsUrl: "https://maps.google.com/?q=1106+Clayton+Ln+Austin+TX+78723",
  appleMapsUrl: "https://maps.apple.com/?q=1106+Clayton+Ln,+Austin,+TX+78723",
  geoUrl: "geo:30.3075,-97.7056?q=1106+Clayton+Ln,+Austin,+TX+78723"
};

export const serviceAreas: LocationArea[] = [
  {
    id: 'austin',
    name: 'Austin',
    tagline: 'Downtown & Metro Area',
    description: 'Our primary hub providing full-scale residential, commercial, and specialized deep cleaning services.',
    isMainOffice: true,
  },
  {
    id: 'buda',
    name: 'Buda',
    tagline: 'South Corridor',
    description: 'Reliable recurring cleaning and move-in/move-out services for growing suburban neighborhoods.',
  },
  {
    id: 'kyle',
    name: 'Kyle',
    tagline: 'Growing Communities',
    description: 'Professional cleaning solutions tailored for family homes, local businesses, and new property setups.',
  },
  {
    id: 'dale',
    name: 'Dale',
    tagline: 'Rural & Residential',
    description: 'Dedicated residential maintenance and custom deep sanitation services delivered right to your doorstep.',
  },
  {
    id: 'del-valle',
    name: 'Del Valle',
    tagline: 'Eastern Sector',
    description: 'Efficient commercial and industrial property care to keep workspaces pristine and welcoming.',
  },
  {
    id: 'bastrop',
    name: 'Bastrop',
    tagline: 'Piney Woods Area',
    description: 'Comprehensive cleaning packages for residential properties, vacation rentals, and commercial establishments.',
  },
  {
    id: 'manor',
    name: 'Manor',
    tagline: 'Northeast Expansion',
    description: 'Trusted routine home cleaning and post-construction detailing for modern residential developments.',
  },
  {
    id: 'pflugerville',
    name: 'Pflugerville',
    tagline: 'North Metro Hub',
    description: 'Exceptional office upkeep, retail space sanitization, and deep residential cleaning services.',
  },
  {
    id: 'round-rock',
    name: 'Round Rock',
    tagline: 'Northern Commercial Zone',
    description: 'High-standard corporate maintenance, retail facility cleaning, and premium home care solutions.',
  },
  {
    id: 'cedar-park',
    name: 'Cedar Park',
    tagline: 'Northwest Communities',
    description: 'Detailed property maintenance, eco-friendly green cleaning, and thorough sanitization services.',
  }
];
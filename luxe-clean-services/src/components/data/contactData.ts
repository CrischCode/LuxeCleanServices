export interface ContactInfo {
  headquartersTitle: string;
  addressLine1: string;
  cityStateZip: string;
  phoneOffice: string;
  phonePersonal: string;
  email: string;
  googleMapsUrl: string;
  mapEmbedUrl: string;
}

export const contactData: ContactInfo = {
  headquartersTitle: "Austin, Texas",
  addressLine1: "1106 Clayton Ln",
  cityStateZip: "Austin, TX 78723",
  phoneOffice: "+1 (512) 737-4290",
  phonePersonal: "+1 (512) 770-0528",
  email: "dsluxeclean@gmail.com",
  googleMapsUrl: "https://maps.google.com/?q=1106+Clayton+Ln,+Austin,+TX+78723",
  mapEmbedUrl: "https://maps.google.com/maps?q=1106+Clayton+Ln,+Austin,+TX+78723&t=&z=14&ie=UTF8&iwloc=&output=embed"
};

export const cleaningServicesList = [
  "Commercial Cleaning",
  "Offices",
  "Commercial Buildings",
  "Airbnb & Short-term Rentals",
  "Banks",
  "Schools",
  "Medical Offices & Healthcare Facilities",
  "Bars & Retail Establishments",
  "Move-in / Move-out Cleaning",
  "Apartment & Rental Property Cleaning",
  "Post-construction Cleaning",
  "Post-remodeling Cleaning",
  "Recurring Cleaning (Daily, Weekly, Bi-weekly or Custom)",
  "Other Services"
];

export const emergencySupportData = {
  title: "24/7 Guaranteed Support",
  description: "Need emergency assistance or want to schedule a service outside of regular business hours? Our teams are ready to assist you at all times."
};
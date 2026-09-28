import Commercial  from '../../assets/images/BaresAndSalones1.jpeg';
import Offices  from '../../assets/images/Oficinas2.jpeg';
import Airbnb   from '../../assets/images/Airbnb1.jpeg';
import Bares  from '../../assets/images/BaresAndSalones4.jpeg';

export interface ServiceItem {
  id: string;
  title: string;
  category: 'commercial' | 'residential' | 'specialized' | 'recurring';
  shortDescription: string;
  fullDescription: string;
  features: string[];
  image: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'offices',
    title: 'Office Cleaning',
    category: 'commercial',
    shortDescription: 'Create a productive, spotless workspace tailored to corporate excellence.',
    fullDescription: 'Detailed cleaning protocols focused on desks, glass partitions, conference rooms, and high-touch electronic surfaces.',
    features: [
      'Cleaning and disinfection of desks and surfaces',
      'Carpet vacuuming',
      'Floor sweeping and mopping',
      'Restroom cleaning and disinfection',
      'Kitchen and breakroom cleaning',
      'Reception and waiting room cleaning',
      'Doors, mirrors, and interior glass cleaning',
      'High-touch surface disinfection',
      'Trash bin emptying and bag replacement',
      'Common area and hallway cleaning'
    ],
    image: Offices
  },
  {
    id: 'airbnb-rentals',
    title: 'Airbnb & Short-Term Rentals',
    category: 'specialized',
    shortDescription: 'Lightning-fast, flawless turnovers to keep your ratings pristine.',
    fullDescription: 'Specialized turnover service designed for property hosts. We ensure your vacation rental is immaculate and guest-ready at all times.',
    features: [
      'Complete property turnover between guest check-outs and check-ins',
      'Restroom cleaning and disinfection',
      'Kitchen, countertop, and sink cleaning',
      'Exterior appliance cleaning',
      'Floor sweeping, vacuuming, and mopping',
      'Dusting furniture and surfaces',
      'Mirror and glass cleaning',
      'Trash removal',
      'Linen changing and bed making when linens are provided',
      'General property organization and setup',
      'Restocking of owner-provided supplies',
      'Visual property inspection to leave it ready for the next guest'
    ],
    image: Airbnb
  },
  {
    id: 'commercial-cleaning',
    title: 'Commercial Cleaning',
    category: 'commercial',
    shortDescription: 'Elevate your business\'s first impression with our premium commercial cleaning services.',
    fullDescription: 'Comprehensive commercial maintenance designed to keep your facilities impeccably clean, healthy, and professional for employees and clients alike.',
    features: [
      'Cleaning of shops, local stores, banks, schools, clinics, and other businesses',
      'Floor and carpet cleaning',
      'Restroom cleaning and disinfection',
      'Common area cleaning',
      'Breakroom cleaning',
      'Doors, interior windows, and glass cleaning',
      'Dusting furniture, shelves, and surfaces',
      'High-touch surface disinfection',
      'Trash removal and bag replacement',
      'Entrances, hallways, and reception cleaning',
      'Scheduled services daily, weekly, or according to business needs'
    ],
    image: Commercial
  },
  {
    id: 'move-out',
    title: 'Move-Out Cleaning',
    category: 'residential',
    shortDescription: 'Ensure deposit returns or welcome new tenants with a pristine property.',
    fullDescription: 'Deep cleaning of empty properties, covering every corner, baseboard, cabinet interior, and appliance.',
    features: [
      'Deep property cleaning after moving out',
      'Floor, carpet, and corner cleaning',
      'Deep restroom cleaning and disinfection',
      'Kitchen and countertop cleaning',
      'Interior and exterior cabinet cleaning upon request',
      'Interior and exterior appliance cleaning upon request',
      'Door and baseboard cleaning',
      'Window and interior glass cleaning',
      'Dust elimination and accumulated dirt removal',
      'Light trash removal',
      'Property preparation for the next resident or inspection'
    ],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'move-in',
    title: 'Move-In Cleaning',
    category: 'residential',
    shortDescription: 'Thorough cleaning and disinfection before occupying your new property.',
    fullDescription: 'Garantiza un espacio totalmente higienizado y listo para habitar desde el primer momento en que ingreses a tu nuevo hogar u oficina.',
    features: [
      'Cleaning and disinfection before occupying the property',
      'Deep restroom cleaning',
      'Kitchen, cabinet, and countertop cleaning',
      'Floor and carpet cleaning',
      'Door, baseboard, and surface cleaning',
      'Mirror and interior glass cleaning',
      'Appliance cleaning upon request',
      'Accumulated dust elimination',
      'High-touch surface disinfection',
      'Space preparation to be clean and move-in ready'
    ],
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'post-construction',
    title: 'Post-Construction Cleaning',
    category: 'specialized',
    shortDescription: 'Transform construction sites into move-in ready masterpieces.',
    fullDescription: 'Heavy-duty removal of fine dust, debris, adhesive residue, and paint splatters after building or renovation work.',
    features: [
      'Fine dust elimination after construction or remodeling',
      'Floor cleaning',
      'Wall and accessible surface cleaning',
      'Door, frame, and baseboard cleaning',
      'Window and glass cleaning',
      'Cabinet and installed surface cleaning',
      'Restroom cleaning and disinfection',
      'Kitchen and countertop cleaning',
      'Label, dust, and light construction residue elimination',
      'Lighting fixtures and accessible accessories cleaning',
      'Final cleaning to prepare the property for handover or use'
    ],
    image: Bares
  }
];
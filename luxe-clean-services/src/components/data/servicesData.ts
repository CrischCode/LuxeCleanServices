import Commercial  from '../../assets/images/BaresAndSalones1.jpeg';
import Offices  from '../../assets/images/Oficinas2.jpeg';
import Airbnb   from '../../assets/images/Airbnb1.jpeg';
import Bares   from '../../assets/images/BaresAndSalones4.jpeg';


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
    id: 'commercial-cleaning',
    title: 'Commercial Cleaning',
    category: 'commercial',
    shortDescription: 'Elevate your business\'s first impression with our premium commercial cleaning services.',
    fullDescription: 'Comprehensive commercial maintenance designed to keep your facilities impeccably clean, healthy, and professional for employees and clients alike.',
    features: [
      'Cleaning and disinfection of workstations and common areas',
      'Restroom sanitization and supply restocking',
      'Vacuuming, sweeping, and floor mopping',
      'Trash removal and recycling management'
    ],
    image: Commercial
  },
  {
    id: 'offices',
    title: 'Offices',
    category: 'commercial',
    shortDescription: 'Create a productive, spotless workspace tailored to corporate excellence.',
    fullDescription: 'Detailed cleaning protocols focused on desks, glass partitions, conference rooms, and high-touch electronic surfaces.',
    features: [
      'Dusting and wiping office furniture and electronics',
      'Interior glass and partition cleaning',
      'Floor care (carpets and hard floors)',
      'Kitchenette and breakroom deep cleaning'
    ],
    image: Offices
  },
  {
    id: 'commercial-buildings',
    title: 'Commercial Buildings',
    category: 'commercial',
    shortDescription: 'Full-scale cleaning solutions for multi-tenant and corporate buildings.',
    fullDescription: 'Reliable upkeep for lobbies, elevators, corridors, and common facility areas to maintain high property value.',
    features: [
      'Lobby and entryway maintenance',
      'Elevator and staircase sanitation',
      'High-traffic corridor sweeping and polishing',
      'Exterior perimeter trash and debris control'
    ],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'airbnb-rentals',
    title: 'Airbnb & Short-Term Rentals',
    category: 'specialized',
    shortDescription: 'Lightning-fast, flawless turnovers to keep your ratings pristine.',
    fullDescription: 'Specialized turnover service designed for property hosts. We ensure your vacation rental is immaculate and guest-ready at all times.',
    features: [
      'Complete property reset between guests',
      'Linen washing and bed staging',
      'Restocking of guest essentials and toiletries',
      'Detailed inspection and sanitization'
    ],
    image: Airbnb
  },
  {
    id: 'banks',
    title: 'Banks & Financial Institutions',
    category: 'commercial',
    shortDescription: 'Secure, discreet, and immaculate cleaning for financial establishments.',
    fullDescription: 'High-security cleaning standards built around confidentiality, thorough disinfection, and pristine presentation for customers.',
    features: [
      'Teller counter and desk sanitization',
      'ATM and public lobby cleaning',
      'Secure area protocol adherence',
      'Floor care and dusting'
    ],
    image: 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'schools',
    title: 'Schools & Educational Facilities',
    category: 'commercial',
    shortDescription: 'Healthy, germ-free learning environments for students and staff.',
    fullDescription: 'Thorough sanitation of classrooms, cafeterias, and recreational areas using safe, high-grade disinfectants.',
    features: [
      'Desks, chairs, and whiteboard cleaning',
      'Cafeteria and lunchroom sanitizing',
      'Restroom deep disinfection',
      'Floor washing and germ mitigation'
    ],
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'medical-facilities',
    title: 'Medical Facilities & Clinics',
    category: 'commercial',
    shortDescription: 'Rigorous hygiene standards tailored for healthcare and wellness centers.',
    fullDescription: 'Specialized medical-grade cleaning protocols designed to prevent cross-contamination and maintain sterile environments.',
    features: [
      'Waiting room and reception sanitization',
      'Exam room disinfection protocols',
      'Restroom and sterile zone upkeep',
      'Safe waste handling assistance'
    ],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'bars-establishments',
    title: 'Bars & Commercial Establishments',
    category: 'commercial',
    shortDescription: 'Deep cleaning and grease control for hospitality venues.',
    fullDescription: 'Intensive cleaning services designed to handle high-traffic footprints, seating areas, and commercial venue standards.',
    features: [
      'Seating area and booth sanitation',
      'Bar counter deep cleaning and polishing',
      'Floor degreasing and washing',
      'Restroom maintenance'
    ],
    image: Bares
  },
  {
    id: 'move-in-out',
    title: 'Move-In / Move-Out Cleaning',
    category: 'residential',
    shortDescription: 'Ensure deposit returns or welcome new tenants with a pristine property.',
    fullDescription: 'Deep cleaning of empty properties, covering every corner, baseboard, cabinet interior, and appliance.',
    features: [
      'Inside cabinet and drawer cleaning',
      'Appliance interior/exterior detailing',
      'Baseboard, door, and frame wiping',
      'Thorough vacuuming and mopping'
    ],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'apartments-rentals',
    title: 'Apartments & Rental Properties',
    category: 'residential',
    shortDescription: 'Specialized care for rental units and multi-family communities.',
    fullDescription: 'Flexible, high-quality cleaning services customized for apartment complexes and residential property managers.',
    features: [
      'Kitchen and bathroom sanitization',
      'Dusting and window sill cleaning',
      'Floor sweeping, vacuuming, and mopping',
      'Quick turnaround availability'
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
      'Fine dust elimination from all surfaces',
      'Removal of construction debris and residues',
      'Glass and window sticker removal',
      'Detailed final polishing'
    ],
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18f156d?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'remodeling-cleanup',
    title: 'Post-Remodeling Cleaning',
    category: 'specialized',
    shortDescription: 'Clear away remodeling mess so you can enjoy your upgraded space.',
    fullDescription: 'Targeted cleaning following home or office remodeling projects to eliminate lingering dust and building materials.',
    features: [
      'Dusting walls, ceilings, and fixtures',
      'Cleaning inside newly built or fixed spaces',
      'Thorough floor scrubbing',
      'Debris disposal support'
    ],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'recurring-cleaning',
    title: 'Recurring Cleaning Services',
    category: 'recurring',
    shortDescription: 'Daily, weekly, bi-weekly, or customized maintenance schedules.',
    fullDescription: 'Consistent, dependable upkeep tailored precisely to your schedule and operational requirements.',
    features: [
      'Flexible scheduling (Daily, Weekly, Bi-weekly)',
      'Customized cleaning checklists',
      'Dedicated vetted cleaning professionals',
      'Consistent top-tier quality'
    ],
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1000&auto=format&fit=crop'
  }
];
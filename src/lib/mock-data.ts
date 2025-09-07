
export interface User {
  id: number;
  name: string;
  avatarUrl: string;
  isStudentVerified: boolean;
  online: boolean;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string[];
  category: 'Textbooks' | 'Stationery' | 'Electronics' | 'Other';
  condition: 'New' | 'Like New' | 'Used';
  seller: User;
  featured?: boolean;
}

export interface WTBRequest {
  id: number;
  title: string;
  description: string;
  user: User;
  budget: number;
}

export const users: User[] = [
  { id: 1, name: 'Aarav Sharma', avatarUrl: 'https://picsum.photos/seed/aarav/100/100', isStudentVerified: true, online: true },
  { id: 2, name: 'Priya Patel', avatarUrl: 'https://picsum.photos/seed/priya/100/100', isStudentVerified: false, online: false },
  { id: 3, name: 'Rohan Gupta', avatarUrl: 'https://picsum.photos/seed/rohan/100/100', isStudentVerified: true, online: true },
];

export const products: Product[] = [
  {
    id: 1,
    name: 'Advanced Engineering Mathematics',
    price: 1275,
    description: '10th Edition by Erwin Kreyszig. Barely used, no highlights or notes. Essential for advanced engineering courses.',
    images: ['/images/advanced-engineering-mathematics.png', '/images/advanced-engineering-mathematics-2.png'],
    category: 'Textbooks',
    condition: 'Like New',
    seller: users[0],
    featured: true,
  },
  {
    id: 2,
    name: 'Casio FX-991EX Scientific Calculator',
    price: 700,
    description: 'ClassWiz series with high-resolution display. Perfect for engineering students. Comes with a protective hard case.',
    images: ['/images/casio-calculator.png', '/images/casio-calculator-2.png'],
    category: 'Electronics',
    condition: 'Like New',
    seller: users[1],
  },
  {
    id: 3,
    name: 'Mini Drafter for Engineering Drawing',
    price: 500,
    description: 'Portable and accurate mini drafter. Essential for engineering drawing classes. Comes with a carrying case.',
    images: ['/images/mini-drafter.png', '/images/mini-drafter-2.png'],
    category: 'Stationery',
    condition: 'Used',
    seller: users[2],
  },
  {
    id: 4,
    name: 'Set of 12 Mechanical Pencils',
    price: 50,
    description: '0.5mm lead mechanical pencils with extra lead refills and erasers. Brand new, in original packaging.',
    images: ['/images/mechanical-pencils.png', '/images/mechanical-pencils-2.png'],
    category: 'Stationery',
    condition: 'New',
    seller: users[0],
  },
  {
    id: 5,
    name: 'A2 Size Drawing Board',
    price: 78,
    description: 'Wooden drawing board with stand. Perfect for architectural and engineering drawings. Good condition.',
    images: ['/images/drawing-board.png', '/images/drawing-board-2.png'],
    category: 'Stationery',
    condition: 'Used',
    seller: users[1],
  },
  {
    id: 6,
    name: 'Fundamentals of Physics Textbook',
    price: 1306,
    description: '11th Edition by Halliday, Resnick, and Walker. Covers all major topics in introductory physics. Excellent condition.',
    images: ['/images/physics-textbook.png', '/images/physics-textbook-2.png'],
    category: 'Textbooks',
    condition: 'Like New',
    seller: users[2],
    featured: true,
  },
   {
    id: 7,
    name: 'Calculus: Early Transcendentals',
    price: 1281,
    description: '8th Edition by James Stewart. A must-have for first-year engineering students. No markings inside.',
    images: ['/images/calculus-textbook.png'],
    category: 'Textbooks',
    condition: 'Used',
    seller: users[2],
  },
  {
    id: 8,
    name: 'Set of French Curves',
    price: 35,
    description: 'Set of 3 plastic french curves for manual drafting. Essential tool for drawing smooth curves of varying radii.',
    images: ['/images/french-curves.png'],
    category: 'Stationery',
    condition: 'New',
    seller: users[0],
  },
  {
    id: 9,
    name: '30cm Roller Scale',
    price: 30,
    description: 'Transparent roller scale, perfect for drawing parallel lines and graphs. In great condition.',
    images: ['/images/roller-scale.png'],
    category: 'Stationery',
    condition: 'Like New',
    seller: users[1],
  },
  {
    id: 10,
    name: 'Digital Caliper',
    price: 100,
    description: '6-inch stainless steel digital caliper for precise measurements. Comes with a case and spare battery.',
    images: ['/images/digital-caliper.png'],
    category: 'Electronics',
    condition: 'New',
    seller: users[2],
  }
];

export const wtbRequests: WTBRequest[] = [
  {
    id: 1,
    title: 'Looking for a TI-84 Plus CE Calculator',
    description: 'Need a TI-84 Plus CE graphing calculator for my calculus class. Preferably in good condition with a charging cable.',
    user: users[1],
    budget: 7000,
  },
  {
    id: 2,
    title: 'WTB Introduction to Thermodynamics Textbook',
    description: 'Looking for the textbook "Fundamentals of Engineering Thermodynamics" by Moran and Shapiro. 8th or 9th edition is fine.',
    user: users[2],
    budget: 900,
  },
  {
    id: 3,
    title: 'Need a used Mini Drafter',
    description: 'Want to buy a used mini drafter for my engineering drawing course. Must be in good working condition.',
    user: users[0],
    budget: 500,
  },
];

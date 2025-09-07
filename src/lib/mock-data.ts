
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
    price: 300,
    description: '10th Edition by Erwin Kreyszig. Barely used, no highlights or notes. Essential for advanced engineering courses.',
    images: ['https://picsum.photos/seed/math-book/600/400', 'https://picsum.photos/seed/textbook-open/600/400'],
    category: 'Textbooks',
    condition: 'Like New',
    seller: users[0],
  },
  {
    id: 2,
    name: 'Casio FX-991EX Scientific Calculator',
    price: 375,
    description: 'ClassWiz series with high-resolution display. Perfect for engineering students. Comes with a protective hard case.',
    images: ['https://picsum.photos/seed/scientific-calculator/600/400', 'https://picsum.photos/seed/calculator-close-up/600/400'],
    category: 'Electronics',
    condition: 'Like New',
    seller: users[1],
  },
  {
    id: 3,
    name: 'Mini Drafter for Engineering Drawing',
    price: 200,
    description: 'Portable and accurate mini drafter. Essential for engineering drawing classes. Comes with a carrying case.',
    images: ['https://picsum.photos/seed/mini-drafter/600/400', 'https://picsum.photos/seed/drafting-tools/600/400'],
    category: 'Stationery',
    condition: 'Used',
    seller: users[2],
  },
  {
    id: 4,
    name: 'Set of 12 Mechanical Pencils',
    price: 112.5,
    description: '0.5mm lead mechanical pencils with extra lead refills and erasers. Brand new, in original packaging.',
    images: ['https://picsum.photos/seed/mech-pencils/600/400', 'https://picsum.photos/seed/pencils-box/600/400'],
    category: 'Stationery',
    condition: 'New',
    seller: users[0],
  },
  {
    id: 5,
    name: 'A2 Size Drawing Board',
    price: 625,
    description: 'Wooden drawing board with stand. Perfect for architectural and engineering drawings. Good condition.',
    images: ['https://picsum.photos/seed/drawing-board/600/400', 'https://picsum.photos/seed/art-board/600/400'],
    category: 'Stationery',
    condition: 'Used',
    seller: users[1],
  },
  {
    id: 6,
    name: 'Fundamentals of Physics Textbook',
    price: 450,
    description: '11th Edition by Halliday, Resnick, and Walker. Covers all major topics in introductory physics. Excellent condition.',
    images: ['https://picsum.photos/seed/physics-book/600/400', 'https://picsum.photos/seed/science-textbook/600/400'],
    category: 'Textbooks',
    condition: 'Like New',
    seller: users[2],
  },
   {
    id: 7,
    name: 'Calculus: Early Transcendentals',
    price: 325,
    description: '8th Edition by James Stewart. A must-have for first-year engineering students. No markings inside.',
    images: ['https://picsum.photos/seed/calculus-book/600/400'],
    category: 'Textbooks',
    condition: 'Used',
    seller: users[2],
  },
  {
    id: 8,
    name: 'Set of French Curves',
    price: 75,
    description: 'Set of 3 plastic french curves for manual drafting. Essential tool for drawing smooth curves of varying radii.',
    images: ['https://picsum.photos/seed/french-curves/600/400'],
    category: 'Stationery',
    condition: 'New',
    seller: users[0],
  },
  {
    id: 9,
    name: '30cm Roller Scale',
    price: 125,
    description: 'Transparent roller scale, perfect for drawing parallel lines and graphs. In great condition.',
    images: ['https://picsum.photos/seed/roller-scale/600/400'],
    category: 'Stationery',
    condition: 'Like New',
    seller: users[1],
  },
  {
    id: 10,
    name: 'Digital Caliper',
    price: 800,
    description: '6-inch stainless steel digital caliper for precise measurements. Comes with a case and spare battery.',
    images: ['https://picsum.photos/seed/digital-caliper/600/400'],
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

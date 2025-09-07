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
  category: 'Electronics' | 'Furniture' | 'Textbooks' | 'Clothing' | 'Other';
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
  { id: 1, name: 'Alice Johnson', avatarUrl: 'https://picsum.photos/seed/alice/100/100', isStudentVerified: true, online: true },
  { id: 2, name: 'Bob Williams', avatarUrl: 'https://picsum.photos/seed/bob/100/100', isStudentVerified: false, online: false },
  { id: 3, name: 'Charlie Brown', avatarUrl: 'https://picsum.photos/seed/charlie/100/100', isStudentVerified: true, online: true },
];

export const products: Product[] = [
  {
    id: 1,
    name: 'Advanced Engineering Mathematics',
    price: 85.00,
    description: '10th Edition by Erwin Kreyszig. Barely used, no highlights or notes. Essential for advanced engineering courses.',
    images: ['https://picsum.photos/seed/book1/600/400', 'https://picsum.photos/seed/book1-2/600/400'],
    category: 'Textbooks',
    condition: 'Like New',
    seller: users[0],
  },
  {
    id: 2,
    name: 'Ergonomic Office Chair',
    price: 120.50,
    description: 'Fully adjustable ergonomic chair, perfect for long study sessions. Lumbar support and adjustable armrests.',
    images: ['https://picsum.photos/seed/chair1/600/400', 'https://picsum.photos/seed/chair1-2/600/400'],
    category: 'Furniture',
    condition: 'Used',
    seller: users[1],
  },
  {
    id: 3,
    name: 'Dell XPS 15 Laptop',
    price: 950.00,
    description: 'Powerful laptop with Intel i7, 16GB RAM, 512GB SSD. Great for coding and design software. Minor cosmetic wear.',
    images: ['https://picsum.photos/seed/laptop1/600/400', 'https://picsum.photos/seed/laptop1-2/600/400'],
    category: 'Electronics',
    condition: 'Used',
    seller: users[2],
  },
  {
    id: 4,
    name: 'University Hoodie',
    price: 25.00,
    description: 'Official university hoodie, size Medium. Comfortable and warm. Only worn a few times.',
    images: ['https://picsum.photos/seed/hoodie1/600/400', 'https://picsum.photos/seed/hoodie1-2/600/400'],
    category: 'Clothing',
    condition: 'Like New',
    seller: users[0],
  },
  {
    id: 5,
    name: 'IKEA Standing Desk',
    price: 150.00,
    description: 'Manual adjustable standing desk. White tabletop, black legs. Dimensions: 120cm x 60cm.',
    images: ['https://picsum.photos/seed/desk1/600/400', 'https://picsum.photos/seed/desk1-2/600/400'],
    category: 'Furniture',
    condition: 'New',
    seller: users[1],
  },
  {
    id: 6,
    name: 'Logitech MX Master 3 Mouse',
    price: 70.00,
    description: 'Wireless mouse with hyper-fast scrolling. In perfect working condition, comes with original packaging.',
    images: ['https://picsum.photos/seed/mouse1/600/400', 'https://picsum.photos/seed/mouse1-2/600/400'],
    category: 'Electronics',
    condition: 'Like New',
    seller: users[2],
  },
   {
    id: 7,
    name: 'Calculus: Early Transcendentals',
    price: 60.00,
    description: '8th Edition by James Stewart. A must-have for first-year engineering students. No markings inside.',
    images: ['https://picsum.photos/seed/book2/600/400'],
    category: 'Textbooks',
    condition: 'Used',
    seller: users[2],
  },
  {
    id: 8,
    name: 'Dorm Mini-Fridge',
    price: 45.00,
    description: 'Compact and quiet mini-fridge, ideal for a dorm room. 1.7 cubic feet capacity. Cleaned and ready to use.',
    images: ['https://picsum.photos/seed/fridge1/600/400'],
    category: 'Furniture',
    condition: 'Used',
    seller: users[0],
  },
];

export const wtbRequests: WTBRequest[] = [
  {
    id: 1,
    title: 'Looking for a TI-84 Plus CE Calculator',
    description: 'Need a TI-84 Plus CE graphing calculator for my calculus class. Preferably in good condition with a charging cable.',
    user: users[1],
    budget: 90,
  },
  {
    id: 2,
    title: 'WTB Introduction to Thermodynamics Textbook',
    description: 'Looking for the textbook "Fundamentals of Engineering Thermodynamics" by Moran and Shapiro. 8th or 9th edition is fine.',
    user: users[2],
    budget: 50,
  },
  {
    id: 3,
    title: 'Need a cheap bicycle for campus commute',
    description: 'Want to buy a used bicycle to get around campus. Does not need to be fancy, just functional and reliable. Any size for an adult male.',
    user: users[0],
    budget: 100,
  },
];

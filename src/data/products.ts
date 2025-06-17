import { Product } from '../types/Product';

export const products: Product[] = [
  {
    id: '1',
    name: 'MacBook Pro 14"',
    brand: 'Apple',
    image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=400',
    price: 2499,
    features: {
      processor: 'Apple M3 Pro',
      ram: '18GB',
      storage: '512GB SSD',
      display: '14.2" Liquid Retina XDR',
      battery: '17 hours',
      weight: '3.5 lbs'
    },
    rating: 4.8,
    category: 'Professional'
  },
  {
    id: '2',
    name: 'XPS 13 Plus',
    brand: 'Dell',
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
    price: 1899,
    features: {
      processor: 'Intel Core i7-1360P',
      ram: '16GB',
      storage: '1TB SSD',
      display: '13.4" OLED Touch',
      battery: '12 hours',
      weight: '2.7 lbs'
    },
    rating: 4.6,
    category: 'Ultrabook'
  },
  {
    id: '3',
    name: 'ThinkPad X1 Carbon',
    brand: 'Lenovo',
    image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=400',
    price: 1799,
    features: {
      processor: 'Intel Core i7-1365U',
      ram: '16GB',
      storage: '512GB SSD',
      display: '14" WUXGA IPS',
      battery: '15 hours',
      weight: '2.48 lbs'
    },
    rating: 4.7,
    category: 'Business'
  },
  {
    id: '4',
    name: 'Surface Laptop 5',
    brand: 'Microsoft',
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
    price: 1399,
    features: {
      processor: 'Intel Core i7-1255U',
      ram: '16GB',
      storage: '256GB SSD',
      display: '13.5" PixelSense Touch',
      battery: '18 hours',
      weight: '2.8 lbs'
    },
    rating: 4.5,
    category: 'Ultrabook'
  },
  {
    id: '5',
    name: 'ROG Zephyrus G14',
    brand: 'ASUS',
    image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=400',
    price: 1999,
    features: {
      processor: 'AMD Ryzen 9 7940HS',
      ram: '32GB',
      storage: '1TB SSD',
      display: '14" QHD+ 165Hz',
      battery: '10 hours',
      weight: '3.64 lbs'
    },
    rating: 4.6,
    category: 'Gaming'
  },
  {
    id: '6',
    name: 'Spectre x360',
    brand: 'HP',
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
    price: 1549,
    features: {
      processor: 'Intel Core i7-1355U',
      ram: '16GB',
      storage: '512GB SSD',
      display: '13.5" OLED Touch',
      battery: '14 hours',
      weight: '3.01 lbs'
    },
    rating: 4.4,
    category: 'Convertible'
  },
  {
    id: '7',
    name: 'Yoga 9i',
    brand: 'Lenovo',
    image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=400',
    price: 1699,
    features: {
      processor: 'Intel Core i7-1360P',
      ram: '16GB',
      storage: '512GB SSD',
      display: '14" 2.8K OLED Touch',
      battery: '16 hours',
      weight: '3.09 lbs'
    },
    rating: 4.5,
    category: 'Convertible'
  },
  {
    id: '8',
    name: 'Legion 7i',
    brand: 'Lenovo',
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
    price: 2299,
    features: {
      processor: 'Intel Core i9-13900HX',
      ram: '32GB',
      storage: '1TB SSD',
      display: '16" QHD+ 165Hz',
      battery: '8 hours',
      weight: '5.51 lbs'
    },
    rating: 4.7,
    category: 'Gaming'
  }
];
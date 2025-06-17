export interface Product {
  id: string;
  name: string;
  brand: string;
  image: string;
  price: number;
  features: {
    processor: string;
    ram: string;
    storage: string;
    display: string;
    battery: string;
    weight: string;
  };
  rating: number;
  category: string;
}
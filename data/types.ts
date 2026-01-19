// src/types/index.ts

export interface Product {
  id: string;
  name: string;
  price: number;
  rating: number;
  image: string;
  category?: string;
  description?: string;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  comment: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType; // Using an icon library like Lucide
}
export interface DummyjsonProductInterface {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  stock: number;
  brand: string;
  thumbnail: string;
}

export interface DummyjsonResponseInterface {
  products: DummyjsonProductInterface[];
  total: number;
  skip: number;
  limit: number;
}

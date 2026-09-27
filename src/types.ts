export interface Product {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  price: number;
  originalPrice?: number;
  installments: string;
  category: 'feminino' | 'masculino' | 'acessorios';
  image: string;
  tag?: string;
  tagColor?: 'neon' | 'cyan' | 'crimson' | 'muted';
  discountBadge?: string;
  techTag: string;
  techLevel?: string;
  weight?: string;
  sizes: string[];
  colors: { name: string; hex: string }[];
  specs: {
    compression: number; // 1-5
    breathability: number; // 1-5
    stretch: string;
    composition: string;
  };
}

export interface CartItem {
  product: Product;
  size: string;
  color: string;
  quantity: number;
}

export interface Coupon {
  code: string;
  discountPercentage: number;
  description: string;
}

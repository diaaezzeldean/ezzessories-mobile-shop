
export interface Product {
  id: string;
  name: string;
  nameEn?: string;
  description: string;
  descriptionEn?: string;
  price: number;
  wholesalePrice?: number;
  retailPrice: number;
  images: string[];
  category: string;
  subcategory?: string;
  brand?: string;
  stock: number;
  isAvailable: boolean;
  isFeatured: boolean;
  colors?: string[];
  sizes?: string[];
  material?: string;
  createdAt: Date;
  updatedAt: Date;
  tags?: string[];
  discount?: number;
  rating?: number;
  reviewCount?: number;
}

export interface Category {
  id: string;
  name: string;
  nameEn?: string;
  description?: string;
  image: string;
  icon?: string;
  parentId?: string;
  order: number;
  isActive: boolean;
  productCount?: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  userType: 'retail' | 'wholesale';
  address?: Address;
  createdAt: Date;
  updatedAt: Date;
  isVerified: boolean;
  avatar?: string;
  wishlist?: string[];
  orderHistory?: string[];
}

export interface Address {
  id?: string;
  street: string;
  city: string;
  governorate: string;
  postalCode?: string;
  country: string;
  isDefault?: boolean;
  label?: string; // منزل، عمل، إلخ
}

export interface CartItem {
  productId: string;
  product: Product;
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
  price: number;
  totalPrice: number;
}

export interface Order {
  id: string;
  userId: string;
  user: Partial<User>;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  discount?: number;
  total: number;
  status: 'pending' | 'confirmed' | 'preparing' | 'shipped' | 'delivered' | 'cancelled';
  paymentMethod: 'cod' | 'card' | 'wallet';
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
  shippingAddress: Address;
  billingAddress?: Address;
  notes?: string;
  estimatedDelivery?: Date;
  trackingNumber?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface AppState {
  cart: CartState;
  auth: AuthState;
  currentCategory?: string;
  searchQuery?: string;
  filters?: ProductFilters;
}

export interface ProductFilters {
  category?: string;
  priceRange?: {
    min: number;
    max: number;
  };
  colors?: string[];
  sizes?: string[];
  brands?: string[];
  inStock?: boolean;
  featured?: boolean;
  sortBy?: 'price-asc' | 'price-desc' | 'name' | 'newest' | 'rating';
}

export interface Review {
  id: string;
  userId: string;
  productId: string;
  rating: number;
  comment: string;
  userName: string;
  userAvatar?: string;
  createdAt: Date;
  isVerified: boolean;
  helpful?: number;
}

export interface Wishlist {
  id: string;
  userId: string;
  productIds: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'order' | 'promotion' | 'system' | 'shipping';
  isRead: boolean;
  actionUrl?: string;
  createdAt: Date;
}

export interface AppConfig {
  siteName: string;
  siteUrl: string;
  supportEmail: string;
  supportPhone: string;
  socialMedia: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    tiktok?: string;
  };
  paymentMethods: string[];
  shippingMethods: string[];
  currencies: string[];
  languages: string[];
}

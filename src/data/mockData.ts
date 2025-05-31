
import { Product, Category, User } from '@/types';

export const mockCategories: Category[] = [
  {
    id: '1',
    name: 'المجوهرات',
    nameEn: 'Jewelry',
    description: 'مجوهرات راقية وإكسسوارات أنيقة',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500',
    icon: '💎',
    order: 1,
    isActive: true,
    productCount: 45
  },
  {
    id: '2',
    name: 'الساعات',
    nameEn: 'Watches',
    description: 'ساعات نسائية عصرية وكلاسيكية',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500',
    icon: '⌚',
    order: 2,
    isActive: true,
    productCount: 28
  },
  {
    id: '3',
    name: 'الحقائب',
    nameEn: 'Bags',
    description: 'حقائب يد وشنط أنيقة',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500',
    icon: '👜',
    order: 3,
    isActive: true,
    productCount: 67
  },
  {
    id: '4',
    name: 'مستحضرات التجميل',
    nameEn: 'Cosmetics',
    description: 'مكياج ومستحضرات العناية',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500',
    icon: '💄',
    order: 4,
    isActive: true,
    productCount: 89
  },
  {
    id: '5',
    name: 'الأحذية',
    nameEn: 'Shoes',
    description: 'أحذية نسائية متنوعة',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500',
    icon: '👠',
    order: 5,
    isActive: true,
    productCount: 34
  },
  {
    id: '6',
    name: 'الأوشحة والحجاب',
    nameEn: 'Scarves & Hijab',
    description: 'أوشحة وحجاب بألوان متميزة',
    image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=500',
    icon: '🧕',
    order: 6,
    isActive: true,
    productCount: 52
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'عقد ذهبي راقي',
    nameEn: 'Elegant Gold Necklace',
    description: 'عقد ذهبي أنيق مناسب للمناسبات الخاصة',
    price: 1200,
    retailPrice: 1200,
    wholesalePrice: 900,
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500',
      'https://images.unsplash.com/photo-1611652197864-6e44c42644a7?w=500'
    ],
    category: '1',
    brand: 'Ezzessories',
    stock: 15,
    isAvailable: true,
    isFeatured: true,
    colors: ['ذهبي', 'وردي'],
    material: 'ذهب عيار 18',
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: ['مجوهرات', 'ذهب', 'عقد'],
    rating: 4.8,
    reviewCount: 23
  },
  {
    id: '2',
    name: 'ساعة نسائية أنيقة',
    nameEn: 'Elegant Women Watch',
    description: 'ساعة نسائية بتصميم عصري ومقاومة للماء',
    price: 850,
    retailPrice: 850,
    wholesalePrice: 650,
    images: [
      'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500'
    ],
    category: '2',
    brand: 'Ezzessories',
    stock: 22,
    isAvailable: true,
    isFeatured: true,
    colors: ['وردي ذهبي', 'فضي', 'ذهبي'],
    material: 'ستانلس ستيل',
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: ['ساعات', 'نسائي', 'أنيق'],
    rating: 4.6,
    reviewCount: 31
  },
  {
    id: '3',
    name: 'حقيبة يد جلدية',
    nameEn: 'Leather Handbag',
    description: 'حقيبة يد من الجلد الطبيعي بتصميم عملي وأنيق',
    price: 750,
    retailPrice: 750,
    wholesalePrice: 550,
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500'
    ],
    category: '3',
    brand: 'Ezzessories',
    stock: 18,
    isAvailable: true,
    isFeatured: false,
    colors: ['أسود', 'بني', 'بيج'],
    sizes: ['صغير', 'متوسط', 'كبير'],
    material: 'جلد طبيعي',
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: ['حقائب', 'جلد', 'يد'],
    rating: 4.7,
    reviewCount: 18
  },
  {
    id: '4',
    name: 'طقم مكياج متكامل',
    nameEn: 'Complete Makeup Set',
    description: 'طقم مكياج شامل يحتوي على جميع احتياجاتك',
    price: 450,
    retailPrice: 450,
    wholesalePrice: 320,
    images: [
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500',
      'https://images.unsplash.com/photo-1583241800398-5d880d4fb3d9?w=500'
    ],
    category: '4',
    brand: 'Ezzessories Beauty',
    stock: 35,
    isAvailable: true,
    isFeatured: true,
    colors: ['متعدد الألوان'],
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: ['مكياج', 'تجميل', 'طقم'],
    rating: 4.5,
    reviewCount: 42
  },
  {
    id: '5',
    name: 'كعب عالي أنيق',
    nameEn: 'Elegant High Heels',
    description: 'حذاء كعب عالي مريح وأنيق لجميع المناسبات',
    price: 680,
    retailPrice: 680,
    wholesalePrice: 480,
    images: [
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500',
      'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500'
    ],
    category: '5',
    brand: 'Ezzessories',
    stock: 12,
    isAvailable: true,
    isFeatured: false,
    colors: ['أسود', 'بيج', 'أحمر'],
    sizes: ['37', '38', '39', '40', '41'],
    material: 'جلد صناعي',
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: ['أحذية', 'كعب', 'أنيق'],
    rating: 4.4,
    reviewCount: 16
  },
  {
    id: '6',
    name: 'حجاب حرير طبيعي',
    nameEn: 'Natural Silk Hijab',
    description: 'حجاب من الحرير الطبيعي بألوان زاهية',
    price: 180,
    retailPrice: 180,
    wholesalePrice: 130,
    images: [
      'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=500',
      'https://images.unsplash.com/photo-1594736797933-d0c0c13e8a50?w=500'
    ],
    category: '6',
    brand: 'Ezzessories',
    stock: 50,
    isAvailable: true,
    isFeatured: true,
    colors: ['وردي', 'أزرق', 'أخضر', 'بنفسجي', 'أصفر'],
    material: 'حرير طبيعي',
    createdAt: new Date(),
    updatedAt: new Date(),
    tags: ['حجاب', 'حرير', 'أوشحة'],
    rating: 4.9,
    reviewCount: 67
  }
];

export const mockUser: User = {
  id: '1',
  email: 'customer@ezzessories.com',
  name: 'فاطمة أحمد',
  phone: '+201234567890',
  userType: 'retail',
  address: {
    street: 'شارع النيل، المعادي',
    city: 'القاهرة',
    governorate: 'القاهرة',
    country: 'مصر',
    isDefault: true,
    label: 'المنزل'
  },
  createdAt: new Date(),
  updatedAt: new Date(),
  isVerified: true,
  wishlist: ['1', '4', '6'],
  orderHistory: []
};

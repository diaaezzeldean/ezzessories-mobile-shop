
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import ProductCard from '../common/ProductCard';
import { Product } from '@/types';

interface FeaturedProductsProps {
  products: Product[];
  userType?: 'retail' | 'wholesale';
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ 
  products, 
  userType = 'retail' 
}) => {
  const featuredProducts = products.filter(product => product.isFeatured).slice(0, 6);

  return (
    <section className="py-16 bg-gradient-to-b from-pearl-white to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold gradient-text mb-4">
            المنتجات المميزة
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            اكتشفي مجموعتنا المختارة بعناية من أفضل المنتجات وأحدث صيحات الموضة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              userType={userType}
              onAddToCart={() => console.log('Add to cart:', product.id)}
              onAddToWishlist={() => console.log('Add to wishlist:', product.id)}
              onProductClick={() => console.log('View product:', product.id)}
            />
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            عرض جميع المنتجات
            <ArrowLeft className="mr-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

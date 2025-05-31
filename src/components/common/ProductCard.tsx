
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  userType?: 'retail' | 'wholesale';
  onAddToCart?: () => void;
  onAddToWishlist?: () => void;
  onProductClick?: () => void;
  isInWishlist?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  userType = 'retail',
  onAddToCart,
  onAddToWishlist,
  onProductClick,
  isInWishlist = false
}) => {
  const displayPrice = userType === 'wholesale' && product.wholesalePrice 
    ? product.wholesalePrice 
    : product.retailPrice;

  const originalPrice = userType === 'wholesale' && product.wholesalePrice 
    ? product.retailPrice 
    : undefined;

  return (
    <Card className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.02] bg-gradient-to-br from-white to-soft-pink border-primary/20 overflow-hidden">
      <div className="relative" onClick={onProductClick}>
        <div className="aspect-square overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        
        {/* Overlay with quick actions */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.isFeatured && (
            <Badge className="bg-accent text-white border-0">
              مميز
            </Badge>
          )}
          {!product.isAvailable && (
            <Badge variant="destructive">
              غير متاح
            </Badge>
          )}
          {userType === 'wholesale' && product.wholesalePrice && (
            <Badge className="bg-elegant-gold text-white border-0">
              جملة
            </Badge>
          )}
        </div>

        {/* Wishlist Button */}
        <Button
          size="icon"
          variant="ghost"
          className={`absolute top-2 right-2 transition-all duration-300 ${
            isInWishlist 
              ? 'text-red-500 bg-white/90' 
              : 'text-white bg-black/20 hover:bg-white/90 hover:text-red-500'
          }`}
          onClick={(e) => {
            e.stopPropagation();
            onAddToWishlist?.();
          }}
        >
          <Heart className={`h-4 w-4 ${isInWishlist ? 'fill-current' : ''}`} />
        </Button>
      </div>

      <CardContent className="p-4">
        <div onClick={onProductClick}>
          <h3 className="font-semibold text-primary mb-2 line-clamp-2 group-hover:gradient-text transition-all">
            {product.name}
          </h3>

          {/* Rating */}
          {product.rating && (
            <div className="flex items-center gap-1 mb-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-3 w-3 ${
                      i < Math.floor(product.rating!)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">
                ({product.reviewCount})
              </span>
            </div>
          )}

          {/* Price */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg font-bold text-accent">
              {displayPrice.toLocaleString()} ج.م
            </span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {originalPrice.toLocaleString()} ج.م
              </span>
            )}
          </div>

          {/* Colors */}
          {product.colors && product.colors.length > 0 && (
            <div className="flex items-center gap-1 mb-3">
              <span className="text-xs text-muted-foreground ml-2">الألوان:</span>
              <div className="flex gap-1">
                {product.colors.slice(0, 3).map((color, index) => (
                  <div
                    key={index}
                    className="w-4 h-4 rounded-full border border-gray-300 bg-gradient-to-br from-primary to-accent"
                    title={color}
                  />
                ))}
                {product.colors.length > 3 && (
                  <span className="text-xs text-muted-foreground">
                    +{product.colors.length - 3}
                  </span>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Add to Cart Button */}
        <Button
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart?.();
          }}
          disabled={!product.isAvailable}
          className="w-full bg-primary hover:bg-primary/90 text-white"
          size="sm"
        >
          <ShoppingBag className="w-4 h-4 ml-2" />
          إضافة للسلة
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;

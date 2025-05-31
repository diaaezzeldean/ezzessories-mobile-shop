
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Category } from '@/types';

interface CategoryCardProps {
  category: Category;
  onClick?: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onClick }) => {
  return (
    <Card 
      className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 bg-gradient-to-br from-white to-soft-pink border-primary/20"
      onClick={onClick}
    >
      <CardContent className="p-4 text-center">
        <div className="relative mb-3 overflow-hidden rounded-lg">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          <div className="absolute bottom-2 right-2 text-2xl">
            {category.icon}
          </div>
        </div>
        
        <h3 className="font-semibold text-lg text-primary mb-1 group-hover:gradient-text transition-all">
          {category.name}
        </h3>
        
        {category.productCount && (
          <p className="text-sm text-muted-foreground">
            {category.productCount} منتج
          </p>
        )}
        
        {category.description && (
          <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
            {category.description}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default CategoryCard;

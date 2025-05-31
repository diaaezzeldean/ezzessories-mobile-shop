
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import CategoryCard from '../common/CategoryCard';
import { Category } from '@/types';

interface CategoriesSectionProps {
  categories: Category[];
}

const CategoriesSection: React.FC<CategoriesSectionProps> = ({ categories }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold gradient-text mb-4">
            تسوقي حسب التصنيف
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            اختاري من تشكيلة واسعة من المنتجات المنظمة في فئات متنوعة لتناسب جميع احتياجاتك
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 mb-12">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              onClick={() => console.log('Navigate to category:', category.id)}
            />
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white">
            عرض جميع التصنيفات
            <ArrowLeft className="mr-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;

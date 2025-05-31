
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Sparkles } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[60vh] bg-gradient-to-br from-soft-pink via-pearl-white to-rose-gold/20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-primary rounded-full animate-pulse" />
        <div className="absolute top-32 right-20 w-16 h-16 border-2 border-accent rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-32 w-12 h-12 border-2 border-primary rounded-full animate-pulse delay-2000" />
      </div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-right space-y-6 animate-fade-in">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <Sparkles className="text-accent h-6 w-6" />
              <span className="text-accent font-medium">مرحباً بكِ في عالم الجمال</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              <span className="gradient-text">إزسسوريز</span>
              <br />
              <span className="text-primary">عالمك الأنيق</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-md mx-auto lg:mx-0">
              اكتشفي أحدث صيحات الموضة من المجوهرات والإكسسوارات ومستحضرات التجميل المميزة
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
                تسوقي الآن
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Button>
              
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                اكتشفي المجموعات
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">500+</div>
                <div className="text-sm text-muted-foreground">منتج متميز</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">10K+</div>
                <div className="text-sm text-muted-foreground">عميلة سعيدة</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">24/7</div>
                <div className="text-sm text-muted-foreground">خدمة عملاء</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600"
                alt="مجوهرات راقية"
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg transform -rotate-6 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-accent rounded-full" />
                <div>
                  <div className="text-sm font-medium">خصم 30%</div>
                  <div className="text-xs text-muted-foreground">على المجوهرات</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg transform rotate-6 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-full" />
                <div>
                  <div className="text-sm font-medium">شحن مجاني</div>
                  <div className="text-xs text-muted-foreground">للطلبات +500 ج.م</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Gift, Truck, Shield, CreditCard } from 'lucide-react';

const OffersSection: React.FC = () => {
  const offers = [
    {
      title: 'خصم 50% على المجوهرات',
      description: 'عرض محدود لفترة قصيرة',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400',
      badge: 'وفري 50%',
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'مجموعة الساعات الجديدة',
      description: 'أحدث التصاميم العصرية',
      image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400',
      badge: 'جديد',
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  const features = [
    {
      icon: Truck,
      title: 'شحن مجاني',
      description: 'للطلبات أكثر من 500 ج.م'
    },
    {
      icon: Shield,
      title: 'ضمان الجودة',
      description: '100% أصلي ومضمون'
    },
    {
      icon: CreditCard,
      title: 'دفع آمن',
      description: 'طرق دفع متعددة وآمنة'
    },
    {
      icon: Gift,
      title: 'هدايا مجانية',
      description: 'مع كل عملية شراء'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-soft-pink">
      <div className="container mx-auto px-4">
        {/* Special Offers */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold gradient-text mb-4">
              العروض الخاصة
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              لا تفوتي هذه العروض المذهلة والحصرية لفترة محدودة
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {offers.map((offer, index) => (
              <Card key={index} className="overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                <div className="relative">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${offer.color} opacity-60`} />
                  <Badge className="absolute top-4 right-4 bg-white text-primary border-0">
                    {offer.badge}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {offer.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {offer.description}
                  </p>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                    تسوقي الآن
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 border-primary/20">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersSection;

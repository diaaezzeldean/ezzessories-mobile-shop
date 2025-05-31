
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Facebook, 
  Instagram, 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin,
  Heart
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-primary/5 to-primary/10 border-t border-primary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <h3 className="gradient-text font-bold text-xl">Ezzessories</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              متجرك المفضل للإكسسوارات والمجوهرات ومستحضرات التجميل. نقدم لكِ أفضل المنتجات بأعلى جودة وأفضل الأسعار.
            </p>
            <div className="flex gap-3">
              <Button size="icon" variant="outline" className="border-primary/20 hover:bg-primary hover:text-white">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" className="border-primary/20 hover:bg-primary hover:text-white">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" className="border-primary/20 hover:bg-primary hover:text-white">
                <MessageCircle className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-primary">روابط سريعة</h4>
            <ul className="space-y-2 text-sm">
              {['الرئيسية', 'المنتجات', 'التصنيفات', 'العروض', 'من نحن', 'اتصلي بنا'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="font-semibold text-primary">التصنيفات</h4>
            <ul className="space-y-2 text-sm">
              {['المجوهرات', 'الساعات', 'الحقائب', 'مستحضرات التجميل', 'الأحذية', 'الأوشحة'].map((category) => (
                <li key={category}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold text-primary">تواصلي معنا</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+20 123 456 7890</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@ezzessories.com</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>القاهرة، مصر</span>
              </div>
            </div>

            <Card className="border-primary/20">
              <CardContent className="p-4">
                <h5 className="font-medium text-primary mb-2">اشتركي في النشرة الإخبارية</h5>
                <p className="text-xs text-muted-foreground mb-3">
                  احصلي على أحدث العروض والمنتجات الجديدة
                </p>
                <div className="flex gap-2">
                  <Input placeholder="بريدك الإلكتروني" className="text-sm" />
                  <Button size="sm" className="bg-primary hover:bg-primary/90 text-white">
                    اشتراك
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-right">
              © 2024 Ezzessories. جميع الحقوق محفوظة.
            </p>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <span>صُنع بـ</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>في مصر</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React from 'react';
import { Search, ShoppingBag, User, Heart, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

interface HeaderProps {
  onMenuClick: () => void;
  cartItemCount?: number;
  wishlistCount?: number;
}

const Header: React.FC<HeaderProps> = ({ 
  onMenuClick, 
  cartItemCount = 0, 
  wishlistCount = 0 
}) => {
  return (
    <header className="glass-effect sticky top-0 z-50 w-full border-b border-rose-gold/20">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Menu Button & Logo */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={onMenuClick}
              className="text-primary hover:bg-primary/10"
            >
              <Menu className="h-6 w-6" />
            </Button>
            
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <h1 className="gradient-text font-bold text-xl hidden sm:block">
                Ezzessories
              </h1>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md hidden md:block">
            <div className="relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="ابحثي عن منتجاتك المفضلة..."
                className="pr-10 bg-white/50 border-primary/20 focus:border-primary"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Search Icon for Mobile */}
            <Button
              variant="ghost"
              size="icon"
              className="text-primary hover:bg-primary/10 md:hidden"
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Wishlist */}
            <Button
              variant="ghost"
              size="icon"
              className="text-primary hover:bg-primary/10 relative"
            >
              <Heart className="h-5 w-5" />
              {wishlistCount > 0 && (
                <Badge className="absolute -top-1 -left-1 h-5 w-5 rounded-full p-0 text-xs bg-accent border-0">
                  {wishlistCount}
                </Badge>
              )}
            </Button>

            {/* Shopping Cart */}
            <Button
              variant="ghost"
              size="icon"
              className="text-primary hover:bg-primary/10 relative"
            >
              <ShoppingBag className="h-5 w-5" />
              {cartItemCount > 0 && (
                <Badge className="absolute -top-1 -left-1 h-5 w-5 rounded-full p-0 text-xs bg-accent border-0">
                  {cartItemCount}
                </Badge>
              )}
            </Button>

            {/* User Profile */}
            <Button
              variant="ghost"
              size="icon"
              className="text-primary hover:bg-primary/10"
            >
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="mt-3 md:hidden">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="ابحثي عن منتجاتك المفضلة..."
              className="pr-10 bg-white/50 border-primary/20 focus:border-primary"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

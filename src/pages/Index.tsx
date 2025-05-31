
import React, { useState } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import HeroSection from '@/components/home/HeroSection';
import CategoriesSection from '@/components/home/CategoriesSection';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import OffersSection from '@/components/home/OffersSection';
import { mockCategories, mockProducts, mockUser } from '@/data/mockData';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const userType = mockUser.userType;

  return (
    <div className="min-h-screen bg-pearl-white">
      <Header 
        onMenuClick={() => setIsMenuOpen(true)}
        cartItemCount={3}
        wishlistCount={mockUser.wishlist?.length || 0}
      />
      
      <main>
        <HeroSection />
        
        <CategoriesSection categories={mockCategories} />
        
        <FeaturedProducts 
          products={mockProducts}
          userType={userType}
        />
        
        <OffersSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

import React, { useState, useEffect } from 'react';
import { ScreenType, Product, CartItem } from './types';
import { PRODUCTS, ARTISANS } from './data/mockData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeScreen } from './components/HomeScreen';
import { ArtisanScreen } from './components/ArtisanScreen';
import { ProductDetailScreen } from './components/ProductDetailScreen';
import { CheckoutScreen } from './components/CheckoutScreen';
import { CartDrawer } from './components/CartDrawer';
import { SearchModal } from './components/SearchModal';
import { MaterialGuideModal } from './components/MaterialGuideModal';
import { Check } from 'lucide-react';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('home');
  const [selectedArtisanId, setSelectedArtisanId] = useState<string>('artisan_yoon');
  const [selectedProductId, setSelectedProductId] = useState<string>('prod_buncheong_oval');

  // Modals & Drawers
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isMaterialGuideOpen, setIsMaterialGuideOpen] = useState<boolean>(false);

  // Cart state initialized with 1 thoughtfully pre-loaded artisanal piece
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: PRODUCTS[0],
      quantity: 1,
      withGiftPackaging: true,
      calligraphyCardMessage: '정갈한 식탁을 위한 따뜻한 선물'
    }
  ]);

  // Toast notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  // Navigation helper
  const handleNavigate = (screen: ScreenType, artisanId?: string, productId?: string) => {
    if (artisanId) setSelectedArtisanId(artisanId);
    if (productId) setSelectedProductId(productId);
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Cart actions
  const handleAddToCart = (
    product: Product,
    quantity: number = 1,
    withGiftWrap: boolean = false,
    giftMessage?: string
  ) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.product.id === product.id);
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity,
          withGiftPackaging: withGiftWrap || next[existingIndex].withGiftPackaging,
          calligraphyCardMessage: giftMessage || next[existingIndex].calligraphyCardMessage
        };
        return next;
      } else {
        return [
          ...prev,
          {
            product,
            quantity,
            withGiftPackaging: withGiftWrap,
            calligraphyCardMessage: giftMessage
          }
        ];
      }
    });
    showToast(`"${product.nameKo}" 작품을 온기 바구니에 담았습니다.`);
  };

  const handleUpdateQuantity = (productId: string, newQty: number) => {
    if (newQty <= 0) {
      setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
    } else {
      setCartItems((prev) =>
        prev.map((item) =>
          item.product.id === productId ? { ...item, quantity: newQty } : item
        )
      );
    }
  };

  const handleToggleGiftPackaging = (productId: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId
          ? { ...item, withGiftPackaging: !item.withGiftPackaging }
          : item
      )
    );
  };

  const handleUpdateGiftMessage = (productId: string, message: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId
          ? { ...item, calligraphyCardMessage: message }
          : item
      )
    );
  };

  const handleDirectCheckout = (
    product: Product,
    quantity: number,
    withGiftWrap: boolean,
    giftMessage?: string
  ) => {
    handleAddToCart(product, quantity, withGiftWrap, giftMessage);
    setCurrentScreen('checkout');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2B2623]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#2B2623] text-[#FAF7F2] px-4 py-3 rounded-xl shadow-2xl text-xs flex items-center gap-2 border border-[#4A3F38] animate-in fade-in slide-in-from-bottom-2">
          <Check className="w-4 h-4 text-[#D4AF37]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Navbar */}
      <Navbar
        currentScreen={currentScreen}
        onNavigate={handleNavigate}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenMaterialGuide={() => setIsMaterialGuideOpen(true)}
      />

      {/* Main View Area */}
      <main className="flex-1">
        {currentScreen === 'home' && (
          <HomeScreen
            onSelectProduct={(id) => handleNavigate('product', undefined, id)}
            onSelectArtisan={(id) => handleNavigate('artisan', id)}
            onAddToCart={(product) => handleAddToCart(product, 1)}
            onOpenMaterialGuide={() => setIsMaterialGuideOpen(true)}
          />
        )}

        {currentScreen === 'artisan' && (
          <ArtisanScreen
            artisanId={selectedArtisanId}
            onSelectArtisan={(id) => setSelectedArtisanId(id)}
            onSelectProduct={(id) => handleNavigate('product', undefined, id)}
            onBackToHome={() => handleNavigate('home')}
            onAddToCart={(product) => handleAddToCart(product, 1)}
          />
        )}

        {currentScreen === 'product' && (
          <ProductDetailScreen
            productId={selectedProductId}
            onBack={() => handleNavigate('home')}
            onSelectProduct={(id) => handleNavigate('product', undefined, id)}
            onSelectArtisan={(id) => handleNavigate('artisan', id)}
            onAddToCart={(product, qty, wrap, msg) => handleAddToCart(product, qty, wrap, msg)}
            onDirectCheckout={handleDirectCheckout}
          />
        )}

        {currentScreen === 'checkout' && (
          <CheckoutScreen
            items={cartItems}
            onBack={() => handleNavigate('home')}
            onOrderComplete={() => {
              setCartItems([]);
            }}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenMaterialGuide={() => setIsMaterialGuideOpen(true)}
      />

      {/* Slide-out Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onToggleGiftPackaging={handleToggleGiftPackaging}
        onUpdateGiftMessage={handleUpdateGiftMessage}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          handleNavigate('checkout');
        }}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(id) => handleNavigate('product', undefined, id)}
        onSelectArtisan={(id) => handleNavigate('artisan', id)}
      />

      {/* Material & Kiln Guide Modal */}
      <MaterialGuideModal
        isOpen={isMaterialGuideOpen}
        onClose={() => setIsMaterialGuideOpen(false)}
      />
    </div>
  );
}

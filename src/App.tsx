import React, { useState } from 'react';
import { CartItem, Product } from './types';
import { PRODUCTS, HERO_FEATURED_PRODUCT } from './data/products';
import { Header } from './components/Header';
import { MarqueeTicker } from './components/MarqueeTicker';
import { Hero } from './components/Hero';
import { TechFeatures } from './components/TechFeatures';
import { ProductCatalog } from './components/ProductCatalog';
import { PromoBanner } from './components/PromoBanner';
import { LabMetrics } from './components/LabMetrics';
import { CtaVip } from './components/CtaVip';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ProductModal } from './components/ProductModal';
import { VipModal } from './components/VipModal';
import { TechModal } from './components/TechModal';
import { SupportModal } from './components/SupportModal';
import { CommunityModal } from './components/CommunityModal';
import { CheckoutModal } from './components/CheckoutModal';
import { Toast } from './components/Toast';

export default function App() {
  // Pre-seed cart with 3 items to match the user's design screenshot showing '3' in the cart badge!
  const [cart, setCart] = useState<CartItem[]>([
    {
      product: PRODUCTS[0], // Legging Sculpt Pro
      size: 'M',
      color: 'Charcoal Black',
      quantity: 1,
    },
    {
      product: PRODUCTS[1], // Top Compressão Force
      size: 'M',
      color: 'Pitch Black',
      quantity: 1,
    },
    {
      product: PRODUCTS[3], // Camiseta Seamless
      size: 'G',
      color: 'Obsidian Black',
      quantity: 1,
    },
  ]);

  const [appliedCoupon, setAppliedCoupon] = useState<string | null>('VIGOR15');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isVipModalOpen, setIsVipModalOpen] = useState(false);
  const [isTechModalOpen, setIsTechModalOpen] = useState(false);
  const [techModalTab, setTechModalTab] = useState('dryshield');
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);
  const [isCommunityModalOpen, setIsCommunityModalOpen] = useState(false);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [activeNav, setActiveNav] = useState('vitrine');

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((current) => (current === message ? null : current));
    }, 3200);
  };

  const handleCopyCoupon = (code: string) => {
    navigator.clipboard?.writeText(code);
    showToast(`Cupom ${code} copiado com sucesso! (15% OFF)`);
  };

  const handleAddToCart = (
    product: Product,
    size: string = 'M',
    color: string = 'Padrão',
    quantity: number = 1
  ) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.size === size &&
          item.color === color
      );

      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      return [...prevCart, { product, size, color, quantity }];
    });

    showToast(`${product.name} adicionado ao carrinho!`);
  };

  const handleBuyNow = (
    product: Product,
    size: string = 'M',
    color: string = 'Padrão',
    quantity: number = 1
  ) => {
    handleAddToCart(product, size, color, quantity);
    setIsCartOpen(false);
    setIsCheckoutModalOpen(true);
  };

  const handleUpdateQuantity = (index: number, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(index);
      return;
    }
    setCart((prev) => {
      const copy = [...prev];
      copy[index].quantity = newQty;
      return copy;
    });
  };

  const handleRemoveItem = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
    showToast('Item removido do carrinho.');
  };

  const handleApplyCoupon = (code: string): boolean => {
    if (code.toUpperCase() === 'VIGOR15') {
      setAppliedCoupon('VIGOR15');
      showToast('Cupom VIGOR15 aplicado! 15% de desconto.');
      return true;
    }
    return false;
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    showToast('Cupom removido.');
  };

  const handleScrollToCatalog = () => {
    const el = document.getElementById('vitrine');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenTechModalWithTab = (tab: string = 'dryshield') => {
    setTechModalTab(tab);
    setIsTechModalOpen(true);
  };

  const totalCartUnits = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#090D16] text-[#dfe2ef] flex flex-col font-sans">
      {/* Top Notification Announcement Marquee */}
      <MarqueeTicker onCopyCoupon={handleCopyCoupon} />

      {/* Main Sticky Navigation Header */}
      <Header
        cartCount={totalCartUnits}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenVipModal={() => setIsVipModalOpen(true)}
        onOpenTechModal={() => handleOpenTechModalWithTab('dryshield')}
        onOpenSupportModal={() => setIsSupportModalOpen(true)}
        onOpenCommunityModal={() => setIsCommunityModalOpen(true)}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
      />

      <main className="flex-1 w-full flex flex-col">
        {/* Hero Section */}
        <Hero
          onQuickView={(p) => setQuickViewProduct(p)}
          onOpenVipModal={() => setIsVipModalOpen(true)}
          onScrollToCatalog={handleScrollToCatalog}
        />

        {/* Proprietary Technology Bento Section */}
        <TechFeatures
          onOpenTechModal={handleOpenTechModalWithTab}
          onOpenVipModal={() => setIsVipModalOpen(true)}
        />

        {/* Product Catalog Vitrine */}
        <ProductCatalog
          onQuickView={(p) => setQuickViewProduct(p)}
          onAddToCart={handleAddToCart}
        />

        {/* 15% OFF Promotional Banner */}
        <PromoBanner
          onCopyCoupon={handleCopyCoupon}
          onOpenVipModal={() => setIsVipModalOpen(true)}
        />

        {/* Laboratory Quality Telemetry Section */}
        <LabMetrics />

        {/* Call to Action VIP Membership Banner */}
        <CtaVip
          onOpenVipModal={() => setIsVipModalOpen(true)}
          onScrollToCatalog={handleScrollToCatalog}
        />
      </main>

      {/* Footer */}
      <Footer
        onScrollToCatalog={handleScrollToCatalog}
        onOpenTechModal={() => handleOpenTechModalWithTab('dryshield')}
        onOpenSupportModal={() => setIsSupportModalOpen(true)}
        onOpenVipModal={() => setIsVipModalOpen(true)}
      />

      {/* Modals & Interactive Drawers */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutModalOpen(true);
        }}
        appliedCoupon={appliedCoupon}
        onApplyCoupon={handleApplyCoupon}
        onRemoveCoupon={handleRemoveCoupon}
      />

      <ProductModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
      />

      <VipModal
        isOpen={isVipModalOpen}
        onClose={() => setIsVipModalOpen(false)}
        onLoginSuccess={(userName) => {
          showToast(`Sessão iniciada como ${userName}! Desconto e Cashback ativos.`);
        }}
      />

      <TechModal
        isOpen={isTechModalOpen}
        onClose={() => setIsTechModalOpen(false)}
        initialTab={techModalTab}
      />

      <SupportModal
        isOpen={isSupportModalOpen}
        onClose={() => setIsSupportModalOpen(false)}
      />

      <CommunityModal
        isOpen={isCommunityModalOpen}
        onClose={() => setIsCommunityModalOpen(false)}
        onOpenVipModal={() => {
          setIsCommunityModalOpen(false);
          setIsVipModalOpen(true);
        }}
      />

      <CheckoutModal
        isOpen={isCheckoutModalOpen}
        onClose={() => setIsCheckoutModalOpen(false)}
        items={cart}
        appliedCoupon={appliedCoupon}
        onClearCart={() => setCart([])}
      />

      {/* Toast Notification */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}

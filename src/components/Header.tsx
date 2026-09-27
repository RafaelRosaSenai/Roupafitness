import React, { useState } from 'react';
import { LOGO_URL } from '../data/products';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenVipModal: () => void;
  onOpenTechModal: () => void;
  onOpenSupportModal: () => void;
  onOpenCommunityModal: () => void;
  activeNav: string;
  setActiveNav: (nav: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenVipModal,
  onOpenTechModal,
  onOpenSupportModal,
  onOpenCommunityModal,
  activeNav,
  setActiveNav,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string, modalAction?: () => void) => {
    setActiveNav(sectionId);
    setMobileMenuOpen(false);
    if (modalAction) {
      modalAction();
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-40 bg-[#090D16]/90 backdrop-blur-xl border-b border-[#262a34]/70 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-4">
        {/* Zone 1: Brand Wordmark & Logo */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 group"
          >
            <img
              alt="VIGOR Activewear Logo"
              className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
              src={LOGO_URL}
              onError={(e) => {
                // Fallback icon if network limits asset
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <span className="font-headline text-2xl uppercase tracking-wider text-white font-extrabold flex items-center gap-1">
              VIGOR
              <span className="w-1.5 h-1.5 rounded-full bg-[#c3f400]"></span>
            </span>
          </a>
        </div>

        {/* Zone 2: 4-6 Clean Text Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          <button
            onClick={() => handleNavClick('vitrine')}
            className={`text-sm font-medium transition-colors hover:text-white cursor-pointer ${
              activeNav === 'vitrine' ? 'text-[#c3f400] font-semibold' : 'text-[#c4c9ac]'
            }`}
          >
            Coleções
          </button>
          <button
            onClick={() => handleNavClick('tecnologia', onOpenTechModal)}
            className={`text-sm font-medium transition-colors hover:text-white cursor-pointer ${
              activeNav === 'tecnologia' ? 'text-[#c3f400] font-semibold' : 'text-[#c4c9ac]'
            }`}
          >
            Tecnologia do Tecido
          </button>
          <button
            onClick={() => handleNavClick('ofertas-vip', onOpenVipModal)}
            className={`text-sm font-medium transition-colors hover:text-white cursor-pointer ${
              activeNav === 'ofertas-vip' ? 'text-[#c3f400] font-semibold' : 'text-[#c4c9ac]'
            }`}
          >
            Ofertas VIP
          </button>
          <button
            onClick={() => handleNavClick('comunidade', onOpenCommunityModal)}
            className={`text-sm font-medium transition-colors hover:text-white cursor-pointer ${
              activeNav === 'comunidade' ? 'text-[#c3f400] font-semibold' : 'text-[#c4c9ac]'
            }`}
          >
            Comunidade
          </button>
          <button
            onClick={() => handleNavClick('suporte', onOpenSupportModal)}
            className={`text-sm font-medium transition-colors hover:text-white cursor-pointer ${
              activeNav === 'suporte' ? 'text-[#c3f400] font-semibold' : 'text-[#c4c9ac]'
            }`}
          >
            Suporte
          </button>
        </nav>

        {/* Zone 3: 1-2 Primary Actions & Cart */}
        <div className="flex items-center gap-3">
          {/* Cart Trigger */}
          <button
            onClick={onOpenCart}
            className="relative flex items-center justify-center w-11 h-11 rounded-full bg-[#181b25] hover:bg-[#262a34] text-white transition-all border border-[#31353f]/60 hover:border-[#c3f400]/40 cursor-pointer"
            aria-label={`Carrinho de compras com ${cartCount} itens`}
          >
            <span className="material-symbols-outlined text-[22px]">shopping_bag</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-[20px] h-[20px] px-1 bg-[#c3f400] text-[#090D16] text-xs font-black rounded-full shadow-[0_0_12px_rgba(195,244,0,0.5)] tabular-nums animate-in zoom-in-50">
                {cartCount}
              </span>
            )}
          </button>

          {/* Account & VIP Entry Button */}
          <button
            onClick={onOpenVipModal}
            className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#c3f400] text-[#090D16] text-xs font-extrabold uppercase tracking-wider hover:scale-[1.03] shadow-[0_0_25px_rgba(195,244,0,0.35)] transition-all cursor-pointer whitespace-nowrap"
          >
            <span className="material-symbols-outlined text-[18px]">verified_user</span>
            <span>Acessar Conta</span>
          </button>

          {/* User Icon Mobile / Compact */}
          <button
            onClick={onOpenVipModal}
            className="flex sm:hidden w-10 h-10 rounded-full bg-[#c3f400] text-[#090D16] items-center justify-center cursor-pointer shadow-md"
            title="Acessar Clube VIP"
          >
            <span className="material-symbols-outlined text-[20px] font-bold">person</span>
          </button>

          {/* Mobile menu hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-[#181b25] text-white hover:bg-[#262a34] transition-colors"
            aria-label="Abrir menu de navegação"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#262a34] bg-[#0f131c] px-6 py-5 flex flex-col gap-4 animate-in slide-in-from-top duration-200">
          <button
            onClick={() => handleNavClick('vitrine')}
            className="text-left py-2 text-base font-medium text-white hover:text-[#c3f400] transition-colors flex items-center justify-between"
          >
            <span>Coleções 2025</span>
            <span className="material-symbols-outlined text-sm text-[#c4c9ac]">chevron_right</span>
          </button>
          <button
            onClick={() => handleNavClick('tecnologia', onOpenTechModal)}
            className="text-left py-2 text-base font-medium text-[#c4c9ac] hover:text-white transition-colors flex items-center justify-between"
          >
            <span>Tecnologia do Tecido</span>
            <span className="material-symbols-outlined text-sm text-[#c4c9ac]">science</span>
          </button>
          <button
            onClick={() => handleNavClick('ofertas-vip', onOpenVipModal)}
            className="text-left py-2 text-base font-medium text-[#c4c9ac] hover:text-white transition-colors flex items-center justify-between"
          >
            <span>Ofertas VIP & Clube</span>
            <span className="material-symbols-outlined text-sm text-[#c3f400]">workspace_premium</span>
          </button>
          <button
            onClick={() => handleNavClick('comunidade', onOpenCommunityModal)}
            className="text-left py-2 text-base font-medium text-[#c4c9ac] hover:text-white transition-colors flex items-center justify-between"
          >
            <span>Comunidade Atletas</span>
            <span className="material-symbols-outlined text-sm text-[#c4c9ac]">groups</span>
          </button>
          <button
            onClick={() => handleNavClick('suporte', onOpenSupportModal)}
            className="text-left py-2 text-base font-medium text-[#c4c9ac] hover:text-white transition-colors flex items-center justify-between"
          >
            <span>Suporte & Trocas</span>
            <span className="material-symbols-outlined text-sm text-[#c4c9ac]">contact_support</span>
          </button>
          <div className="pt-2 border-t border-[#262a34]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVipModal();
              }}
              className="w-full py-3 rounded-xl bg-[#c3f400] text-[#090D16] font-bold text-center flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[20px]">lock_open</span>
              <span>Entrar / Cadastrar no Clube VIP</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

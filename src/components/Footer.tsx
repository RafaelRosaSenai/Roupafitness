import React from 'react';
import { LOGO_URL } from '../data/products';

interface FooterProps {
  onScrollToCatalog: () => void;
  onOpenTechModal: () => void;
  onOpenSupportModal: () => void;
  onOpenVipModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onScrollToCatalog,
  onOpenTechModal,
  onOpenSupportModal,
  onOpenVipModal,
}) => {
  return (
    <footer className="w-full bg-[#0a0e17] border-t border-[#262a34] py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#1c1f29]">
          {/* Brand mark */}
          <div className="flex items-center gap-3">
            <img
              alt="VIGOR Activewear Logo"
              className="h-7 w-auto object-contain"
              src={LOGO_URL}
            />
            <span className="font-headline text-xl uppercase tracking-wider text-white font-black">
              VIGOR
            </span>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-sm text-[#c4c9ac]">
            <button
              onClick={onScrollToCatalog}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Coleções
            </button>
            <button
              onClick={onOpenTechModal}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Tecnologia
            </button>
            <button
              onClick={onOpenVipModal}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Ofertas VIP
            </button>
            <button
              onClick={onOpenSupportModal}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Suporte & Trocas
            </button>
          </div>

          {/* Payment Badges */}
          <div className="flex items-center gap-2 text-xs text-[#c4c9ac]">
            <span className="px-2.5 py-1 rounded bg-[#181b25] border border-[#262a34] font-semibold text-[#c3f400]">
              PIX 5% OFF
            </span>
            <span className="px-2.5 py-1 rounded bg-[#181b25] border border-[#262a34] font-mono">
              Cartões até 12x
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8e9379]">
          <p>© {new Date().getFullYear()} VIGOR Activewear. Performance Engineered. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-[#c4c9ac] cursor-pointer" onClick={onOpenSupportModal}>Privacidade & Cookies</span>
            <span>•</span>
            <span className="hover:text-[#c4c9ac] cursor-pointer" onClick={onOpenSupportModal}>Termos de Serviço</span>
            <span>•</span>
            <span className="hover:text-[#c4c9ac] cursor-pointer" onClick={onOpenSupportModal}>Rastrear Pedido</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

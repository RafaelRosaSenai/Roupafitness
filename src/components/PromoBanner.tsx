import React, { useState } from 'react';
import { PROMO_BANNER_IMAGE_URL } from '../data/products';

interface PromoBannerProps {
  onCopyCoupon: (code: string) => void;
  onOpenVipModal: () => void;
}

export const PromoBanner: React.FC<PromoBannerProps> = ({
  onCopyCoupon,
  onOpenVipModal,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    onCopyCoupon('VIGOR15');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="w-full py-6 px-4 sm:px-6 lg:px-12 bg-[#090D16]">
      <div className="max-w-7xl mx-auto">
        <div className="w-full bg-[#181b25] border border-[#262a34] rounded-3xl overflow-hidden shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Content */}
            <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 flex flex-col justify-center gap-5 z-10">
              <div className="flex items-center gap-2 text-[#c3f400] text-xs font-bold uppercase tracking-widest">
                <span className="material-symbols-outlined text-[18px]">card_giftcard</span>
                Oferta Especial de Entrada
              </div>

              <h3 className="font-headline text-2xl sm:text-4xl text-white font-black uppercase leading-tight">
                Ganhe 15% OFF em todo o catálogo oficial
              </h3>

              <p className="text-sm sm:text-base text-[#c4c9ac] leading-relaxed">
                Utilize o cupom exclusivo para novos cadastros e experimente o nível de conforto térmico e ajuste de compressão VIGOR sem pagar frete em pedidos acima de R$ 199.
              </p>

              {/* Coupon Code Snippet Box */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <div className="flex items-center gap-3 bg-[#0a0e17] border border-[#31353f] px-5 py-3 rounded-full shadow-inner">
                  <span className="font-headline text-lg sm:text-xl text-[#c3f400] font-mono tracking-widest font-black">
                    VIGOR15
                  </span>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="p-1 rounded-full hover:bg-[#262a34] text-[#c4c9ac] hover:text-white transition-colors cursor-pointer"
                    title="Copiar cupom"
                    aria-label="Copiar cupom VIGOR15"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      {copied ? 'check' : 'content_copy'}
                    </span>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={onOpenVipModal}
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-[#c3f400] text-[#090D16] text-xs font-black uppercase tracking-wider hover:scale-105 transition-all shadow-[0_0_20px_rgba(195,244,0,0.3)] cursor-pointer"
                >
                  Cadastrar e Resgatar
                </button>
              </div>
            </div>

            {/* Right Media Photo */}
            <div className="lg:col-span-6 h-full min-h-[300px] lg:min-h-[420px] relative overflow-hidden bg-[#0a0e17]">
              <img
                alt="Equipe de atletas com a coleção VIGOR em estúdio moderno"
                className="w-full h-full object-cover object-center"
                src={PROMO_BANNER_IMAGE_URL}
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#181b25] via-transparent to-transparent hidden lg:block"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#181b25] via-transparent to-transparent lg:hidden"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

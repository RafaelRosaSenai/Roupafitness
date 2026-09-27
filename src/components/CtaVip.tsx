import React from 'react';

interface CtaVipProps {
  onOpenVipModal: () => void;
  onScrollToCatalog: () => void;
}

export const CtaVip: React.FC<CtaVipProps> = ({
  onOpenVipModal,
  onScrollToCatalog,
}) => {
  return (
    <section className="w-full py-16 lg:py-24 px-4 sm:px-6 lg:px-12 bg-[#0d121c] relative overflow-hidden border-t border-[#1c1f29]">
      {/* Atmospheric lighting accent */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#c3f400]/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-8 relative z-10">
        <div className="w-16 h-16 rounded-full bg-[#c3f400]/15 border border-[#c3f400]/30 flex items-center justify-center text-[#c3f400] shadow-inner">
          <span className="material-symbols-outlined text-[36px]">fitness_center</span>
        </div>

        <div className="flex flex-col gap-3 max-w-3xl">
          <span className="text-xs sm:text-sm uppercase tracking-widest text-[#c3f400] font-bold">
            Faça Parte da Elite
          </span>
          <h2 className="font-headline text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white font-extrabold leading-tight text-balance">
            Pronto para treinar sem limites?
          </h2>
          <p className="text-base sm:text-lg text-[#c4c9ac] max-w-2xl mx-auto">
            Crie sua conta agora mesmo no portal VIGOR Activewear. Garanta acesso instantâneo a descontos exclusivos, cashback de 10% e frete prioritário.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={onOpenVipModal}
            className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-[#c3f400] text-[#090D16] font-headline text-base sm:text-lg font-black uppercase tracking-wider hover:scale-[1.03] transition-all shadow-[0_0_35px_rgba(195,244,0,0.4)] cursor-pointer"
          >
            <span>Criar Conta Gratuita</span>
            <span className="material-symbols-outlined text-[24px]">person_add</span>
          </button>

          <button
            onClick={onScrollToCatalog}
            className="inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 py-4 sm:py-5 rounded-full bg-[#181b25] hover:bg-[#262a34] border border-[#31353f] text-white font-headline text-base sm:text-lg font-bold transition-all cursor-pointer"
          >
            <span>Ver Todas as Peças</span>
            <span className="material-symbols-outlined text-[22px]">view_agenda</span>
          </button>
        </div>

        {/* Security & Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 pt-6 text-[#c4c9ac] text-xs sm:text-sm">
          <span className="inline-flex items-center gap-2">
            <span className="material-symbols-outlined text-[#c3f400] text-[18px]">lock</span>
            Checkout 100% Criptografado
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="material-symbols-outlined text-[#7bd0ff] text-[18px]">sync_alt</span>
            Primeira Troca Grátis em até 30 Dias
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="material-symbols-outlined text-white text-[18px]">local_shipping</span>
            Envio Rápido para Todo o Brasil
          </span>
        </div>
      </div>
    </section>
  );
};

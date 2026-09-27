import React from 'react';

interface MarqueeTickerProps {
  onCopyCoupon: (code: string) => void;
}

export const MarqueeTicker: React.FC<MarqueeTickerProps> = ({ onCopyCoupon }) => {
  return (
    <div className="w-full bg-[#0a0e17] border-b border-[#262a34]/60 py-2.5 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-center flex-wrap gap-x-6 gap-y-2 text-xs">
        <span className="inline-flex items-center gap-1.5 font-semibold text-[#c3f400] uppercase tracking-wider">
          <span className="material-symbols-outlined text-[15px]">local_shipping</span>
          Frete Grátis acima de R$ 199 para todo o Brasil
        </span>

        <span className="hidden md:inline text-[#444933] font-bold">•</span>

        <span className="inline-flex items-center gap-1.5 text-[#c4c9ac] uppercase tracking-wider">
          <span className="material-symbols-outlined text-[15px] text-[#7bd0ff]">verified</span>
          Tecnologia Anti-Odor Térmica Dry-Shield™
        </span>

        <span className="hidden md:inline text-[#444933] font-bold">•</span>

        <button
          onClick={() => onCopyCoupon('VIGOR15')}
          className="inline-flex items-center gap-1.5 text-[#7bd0ff] hover:text-white uppercase tracking-wider transition-colors group cursor-pointer"
          title="Clique para copiar cupom VIGOR15"
        >
          <span className="material-symbols-outlined text-[15px] text-[#c3f400] group-hover:scale-110 transition-transform">
            bolt
          </span>
          <span>Cupom de Boas-Vindas: 15% OFF com o código <strong className="text-[#c3f400] underline underline-offset-2">VIGOR15</strong></span>
          <span className="material-symbols-outlined text-[13px] opacity-70 group-hover:opacity-100">
            content_copy
          </span>
        </button>
      </div>
    </div>
  );
};

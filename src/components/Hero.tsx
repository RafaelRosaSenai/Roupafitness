import React from 'react';
import { HERO_FEATURED_PRODUCT, HERO_IMAGE_URL } from '../data/products';
import { Product } from '../types';

interface HeroProps {
  onQuickView: (product: Product) => void;
  onOpenVipModal: () => void;
  onScrollToCatalog: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onQuickView,
  onOpenVipModal,
  onScrollToCatalog,
}) => {
  return (
    <section className="relative w-full overflow-hidden px-4 sm:px-6 lg:px-12 py-10 lg:py-16">
      {/* Atmospheric Neon Glow Behind Content */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#c3f400]/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute -top-12 right-10 w-[400px] h-[300px] bg-[#00a6e0]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        {/* Left Column: Copy & Actions */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Badges Cluster */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c3f400]/15 border border-[#c3f400]/30 text-[#c3f400] text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#c3f400] animate-ping"></span>
              Lançamento Coleção 2025
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#181b25] border border-[#262a34] text-[#c4c9ac] text-xs font-semibold uppercase tracking-wider">
              <span className="material-symbols-outlined text-[15px] text-[#7bd0ff]">verified_user</span>
              Garantia de 30 Dias
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#181b25] border border-[#262a34] text-[#c4c9ac] text-xs font-semibold uppercase tracking-wider">
              <span className="material-symbols-outlined text-[15px] text-[#c3f400]">local_fire_department</span>
              Alta Resistência
            </span>
          </div>

          {/* Main Headline */}
          <div className="flex flex-col gap-2">
            <span className="text-xs sm:text-sm uppercase tracking-widest text-[#c3f400] font-bold">
              VIGOR Activewear // High Performance
            </span>
            <h1 className="font-headline text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white font-extrabold leading-[1.08] text-balance">
              Supere seus limites com{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c3f400] via-[#ffffff] to-[#7bd0ff]">
                engenharia têxtil
              </span>{' '}
              extrema
            </h1>
          </div>

          {/* Value Proposition Description */}
          <p className="text-base sm:text-lg text-[#c4c9ac] max-w-2xl leading-relaxed">
            Roupas fitness ultra respiráveis, compressão inteligente com tecnologia{' '}
            <strong className="text-white font-semibold">Dry-Shield™</strong> e costura zero atrito.
            O ponto de encontro entre design aerodinâmico e biomecânica avançada para atletas que exigem o topo.
          </p>

          {/* CTA Buttons Group */}
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <button
              onClick={onScrollToCatalog}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#c3f400] text-[#090D16] font-bold text-sm uppercase tracking-wider hover:scale-[1.03] transition-all shadow-[0_0_30px_rgba(195,244,0,0.35)] cursor-pointer"
            >
              <span>Explorar Lançamentos</span>
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </button>

            <button
              onClick={onOpenVipModal}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-[#181b25] hover:bg-[#262a34] border border-[#31353f] text-white font-semibold text-sm transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px] text-[#7bd0ff]">workspace_premium</span>
              <span>Acessar Clube VIP / Login</span>
            </button>
          </div>

          {/* Key Metrics Strip */}
          <div className="grid grid-cols-3 gap-4 pt-4 bg-[#181b25]/80 border border-[#262a34] backdrop-blur-md rounded-2xl p-4 sm:p-5 mt-2 shadow-xl">
            <div className="flex flex-col">
              <span className="font-headline text-2xl sm:text-3xl text-white font-black tabular-nums">
                +45k
              </span>
              <span className="text-[11px] sm:text-xs text-[#c4c9ac] uppercase tracking-wider font-medium">
                Atletas Ativos
              </span>
            </div>
            <div className="flex flex-col border-x border-[#262a34] px-3 sm:px-4">
              <div className="flex items-center gap-1">
                <span className="font-headline text-2xl sm:text-3xl text-[#c3f400] font-black tabular-nums">
                  4.9
                </span>
                <span className="material-symbols-outlined text-[#c3f400] text-[20px] font-fill">
                  star
                </span>
              </div>
              <span className="text-[11px] sm:text-xs text-[#c4c9ac] uppercase tracking-wider font-medium">
                Avaliação Média
              </span>
            </div>
            <div className="flex flex-col pl-1">
              <span className="font-headline text-2xl sm:text-3xl text-[#7bd0ff] font-black tabular-nums">
                3x
              </span>
              <span className="text-[11px] sm:text-xs text-[#c4c9ac] uppercase tracking-wider font-medium">
                Mais Durabilidade
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Hero Media Showcase */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="w-full relative group">
            {/* Ambient edge glow */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-[#c3f400]/25 to-[#7bd0ff]/25 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-700"></div>

            <div className="relative bg-[#181b25] border border-[#262a34] rounded-2xl overflow-hidden shadow-2xl">
              {/* Hero Image */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#0a0e17]">
                <img
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  alt="Atleta em treino funcional de alta intensidade com corda naval usando vestuário VIGOR"
                  src={HERO_IMAGE_URL}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17] via-transparent to-transparent opacity-90"></div>

                {/* Floating Sensor Status Pill */}
                <div className="absolute top-4 right-4 bg-[#0a0e17]/90 border border-[#262a34] backdrop-blur-md px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-[#c3f400] animate-ping"></span>
                  <span className="text-[11px] font-bold text-white tracking-wider uppercase">
                    Dry-Shield™ Ativo
                  </span>
                </div>

                {/* Product Spec Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#181b25]/95 border border-[#31353f] backdrop-blur-xl p-4 rounded-xl shadow-2xl flex items-center justify-between gap-3">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-[#c3f400] uppercase font-bold tracking-wider">
                      Compressão Nível 4
                    </span>
                    <h2 className="font-headline text-base sm:text-lg text-white font-bold leading-tight">
                      ArmourPro AeroFit
                    </h2>
                    <span className="text-xs text-[#c4c9ac]">
                      Poliamida Ultra-Spun 280g/m²
                    </span>
                  </div>

                  <div className="flex flex-col items-end shrink-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs text-[#c4c9ac] line-through tabular-nums">
                        R$ 299,90
                      </span>
                      <span className="font-headline text-base sm:text-lg text-[#c3f400] font-black tabular-nums">
                        R$ 219,90
                      </span>
                    </div>
                    <button
                      onClick={() => onQuickView(HERO_FEATURED_PRODUCT)}
                      className="mt-1 px-3 py-1 rounded-full bg-[#c3f400] text-[#090D16] text-[11px] font-black uppercase hover:bg-white transition-colors cursor-pointer flex items-center gap-1"
                    >
                      <span>Ver Peça</span>
                      <span className="material-symbols-outlined text-[13px]">visibility</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

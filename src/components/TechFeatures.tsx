import React from 'react';

interface TechFeaturesProps {
  onOpenTechModal: (tab?: string) => void;
  onOpenVipModal: () => void;
}

export const TechFeatures: React.FC<TechFeaturesProps> = ({
  onOpenTechModal,
  onOpenVipModal,
}) => {
  return (
    <section id="tecnologia" className="w-full bg-[#0a0e17] py-16 px-4 sm:px-6 lg:px-12 border-y border-[#1c1f29]">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-2 max-w-xl">
            <div className="inline-flex items-center gap-2 text-[#c3f400] text-xs font-bold uppercase tracking-widest">
              <span className="material-symbols-outlined text-[18px]">science</span>
              Inovação Tecnológica
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl text-white font-black uppercase tracking-tight">
              Tecnologias Proprietárias VIGOR
            </h2>
            <p className="text-sm sm:text-base text-[#c4c9ac] leading-relaxed">
              Testado em laboratório e calibrado em atletas de alto rendimento para eliminar limitações biomecânicas.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-4 py-2 rounded-full bg-[#181b25] border border-[#262a34] text-white text-xs font-medium flex items-center gap-2">
              <span className="material-symbols-outlined text-[#7bd0ff] text-[18px]">verified</span>
              Certificação ISO 9001 de Resistência Têxtil
            </div>
          </div>
        </div>

        {/* 3-Column Technology Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Tech Card 1: Compressão Biomecânica */}
          <div
            onClick={() => onOpenTechModal('compressao')}
            className="group bg-[#181b25] hover:bg-[#1c1f29] border border-[#262a34] hover:border-[#c3f400]/40 p-7 rounded-2xl transition-all duration-300 flex flex-col justify-between shadow-xl cursor-pointer"
          >
            <div className="flex flex-col gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#c3f400]/15 border border-[#c3f400]/30 flex items-center justify-center text-[#c3f400] group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-[32px]">compress</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[11px] font-bold text-[#c3f400] uppercase tracking-wider">
                  Ergonomia Aplicada
                </span>
                <h3 className="font-headline text-xl text-white font-bold group-hover:text-[#c3f400] transition-colors">
                  Compressão Gradual Biomecânica
                </h3>
                <p className="text-sm text-[#c4c9ac] leading-relaxed">
                  Reduz a fadiga muscular e estimula a microcirculação venosa durante séries intensas. Estabiliza articulações críticas sem comprometer o fluxo de oxigenação.
                </p>
              </div>
            </div>

            {/* Micro Metric Graphic */}
            <div className="pt-6 mt-4 border-t border-[#262a34]">
              <div className="flex items-center justify-between text-xs text-[#c4c9ac] mb-2">
                <span>Recuperação pós-série</span>
                <span className="text-[#c3f400] font-black">+42% Rápida</span>
              </div>
              <div className="w-full h-2 bg-[#090D16] rounded-full overflow-hidden p-0.5 border border-[#262a34]">
                <div className="h-full bg-gradient-to-r from-[#c3f400]/80 to-[#c3f400] rounded-full w-[85%]"></div>
              </div>
              <span className="mt-3 text-[11px] text-[#7bd0ff] font-medium flex items-center gap-1 group-hover:underline">
                Ver detalhes do ensaio clínico
                <span className="material-symbols-outlined text-[13px]">arrow_forward</span>
              </span>
            </div>
          </div>

          {/* Tech Card 2: Tecido AeroFit 4-Way */}
          <div
            onClick={() => onOpenTechModal('aerofit')}
            className="group bg-[#181b25] hover:bg-[#1c1f29] border border-[#262a34] hover:border-[#7bd0ff]/40 p-7 rounded-2xl transition-all duration-300 flex flex-col justify-between shadow-xl cursor-pointer"
          >
            <div className="flex flex-col gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#7bd0ff]/15 border border-[#7bd0ff]/30 flex items-center justify-center text-[#7bd0ff] group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-[32px]">straighten</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[11px] font-bold text-[#7bd0ff] uppercase tracking-wider">
                  Zero Transparência
                </span>
                <h3 className="font-headline text-xl text-white font-bold group-hover:text-[#7bd0ff] transition-colors">
                  Tecido AeroFit 4-Way Stretch
                </h3>
                <p className="text-sm text-[#c4c9ac] leading-relaxed">
                  Elasticidade multi-direcional que acompanha agachamentos profundos e movimentos dinâmicos. Selo <strong className="text-white">Squat-Proof Garantido</strong> mesmo sob forte estiramento.
                </p>
              </div>
            </div>

            {/* Micro Metric Graphic */}
            <div className="pt-6 mt-4 border-t border-[#262a34]">
              <div className="flex items-center justify-between text-xs text-[#c4c9ac] mb-2">
                <span>Opacidade Têxtil (UV/Squat)</span>
                <span className="text-[#7bd0ff] font-black">100% Blindado</span>
              </div>
              <div className="w-full h-2 bg-[#090D16] rounded-full overflow-hidden p-0.5 border border-[#262a34]">
                <div className="h-full bg-gradient-to-r from-[#7bd0ff]/80 to-[#7bd0ff] rounded-full w-full"></div>
              </div>
              <span className="mt-3 text-[11px] text-[#7bd0ff] font-medium flex items-center gap-1 group-hover:underline">
                Simular teste de elasticidade
                <span className="material-symbols-outlined text-[13px]">arrow_forward</span>
              </span>
            </div>
          </div>

          {/* Tech Card 3: Clube VIP & Assinatura */}
          <div
            onClick={onOpenVipModal}
            className="group bg-[#181b25] hover:bg-[#1c1f29] border border-[#262a34] hover:border-[#ffffff]/30 p-7 rounded-2xl transition-all duration-300 flex flex-col justify-between shadow-xl cursor-pointer"
          >
            <div className="flex flex-col gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-[32px]">loyalty</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[11px] font-bold text-[#c3f400] uppercase tracking-wider">
                  Benefício Exclusivo
                </span>
                <h3 className="font-headline text-xl text-white font-bold group-hover:text-[#c3f400] transition-colors">
                  Clube VIP & Assinatura Ativa
                </h3>
                <p className="text-sm text-[#c4c9ac] leading-relaxed">
                  Membros cadastrados acumulam cashback fitness de 10% e garantem até <strong className="text-[#c3f400]">30% OFF</strong> em lançamentos sazonais, além de entregas ultra expressas prioritárias.
                </p>
              </div>
            </div>

            {/* Micro Action Pill */}
            <div className="pt-6 mt-4 border-t border-[#262a34] flex items-center justify-between">
              <div className="flex items-center gap-2 text-[#c4c9ac] text-xs">
                <span className="material-symbols-outlined text-[#c3f400] text-[18px]">card_membership</span>
                <span>Acesso Gratuito no Cadastro</span>
              </div>
              <span className="text-[#c3f400] text-xs font-black uppercase tracking-wider group-hover:underline flex items-center gap-1">
                Ativar
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

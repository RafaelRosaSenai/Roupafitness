import React from 'react';

export const LabMetrics: React.FC = () => {
  return (
    <section className="w-full bg-[#0a0e17] py-16 px-4 sm:px-6 lg:px-12 border-t border-[#1c1f29]">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <div className="text-center max-w-xl mx-auto flex flex-col gap-2">
          <span className="text-xs uppercase tracking-widest text-[#c3f400] font-bold">
            Controle de Qualidade
          </span>
          <h3 className="font-headline text-2xl sm:text-3xl uppercase font-black text-white">
            Métricas de Performance em Laboratório
          </h3>
          <p className="text-sm text-[#c4c9ac]">
            Padrões validados em ensaios têxteis independentes segundo normas técnicas ABNT e ISO.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {/* Metric 1 */}
          <div className="bg-[#181b25] border border-[#262a34] p-6 rounded-2xl flex flex-col items-center text-center gap-2 shadow-lg hover:border-[#7bd0ff]/40 transition-colors">
            <span className="material-symbols-outlined text-[36px] text-[#7bd0ff]">
              water_drop
            </span>
            <span className="font-headline text-3xl sm:text-4xl text-white font-black mt-1 tabular-nums">
              0.8s
            </span>
            <span className="text-xs sm:text-sm text-white font-semibold">
              Absorção Dry-Shield™
            </span>
            <span className="text-[11px] sm:text-xs text-[#c4c9ac] leading-tight">
              Evaporação instantânea da umidade corporal
            </span>
          </div>

          {/* Metric 2 */}
          <div className="bg-[#181b25] border border-[#262a34] p-6 rounded-2xl flex flex-col items-center text-center gap-2 shadow-lg hover:border-[#c3f400]/40 transition-colors">
            <span className="material-symbols-outlined text-[36px] text-[#c3f400]">
              autorenew
            </span>
            <span className="font-headline text-3xl sm:text-4xl text-[#c3f400] font-black mt-1 tabular-nums">
              50.000+
            </span>
            <span className="text-xs sm:text-sm text-white font-semibold">
              Ciclos Martindale
            </span>
            <span className="text-[11px] sm:text-xs text-[#c4c9ac] leading-tight">
              Resistência abrasiva extrema sem bolinhas
            </span>
          </div>

          {/* Metric 3 */}
          <div className="bg-[#181b25] border border-[#262a34] p-6 rounded-2xl flex flex-col items-center text-center gap-2 shadow-lg hover:border-[#7bd0ff]/40 transition-colors">
            <span className="material-symbols-outlined text-[36px] text-[#7bd0ff]">
              flare
            </span>
            <span className="font-headline text-3xl sm:text-4xl text-white font-black mt-1 tabular-nums">
              UPF 50+
            </span>
            <span className="text-xs sm:text-sm text-white font-semibold">
              Proteção Solar UV
            </span>
            <span className="text-[11px] sm:text-xs text-[#c4c9ac] leading-tight">
              Bloqueio de 98% dos raios solares nocivos
            </span>
          </div>

          {/* Metric 4 */}
          <div className="bg-[#181b25] border border-[#262a34] p-6 rounded-2xl flex flex-col items-center text-center gap-2 shadow-lg hover:border-[#c3f400]/40 transition-colors">
            <span className="material-symbols-outlined text-[36px] text-[#c3f400]">
              sentiment_very_satisfied
            </span>
            <span className="font-headline text-3xl sm:text-4xl text-[#7bd0ff] font-black mt-1 tabular-nums">
              99.4%
            </span>
            <span className="text-xs sm:text-sm text-white font-semibold">
              Aprovação no Squat
            </span>
            <span className="text-[11px] sm:text-xs text-[#c4c9ac] leading-tight">
              Índice zero de transparência relatada
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

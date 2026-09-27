import React, { useState } from 'react';

interface TechModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: string;
}

export const TechModal: React.FC<TechModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'dryshield',
}) => {
  const [activeTab, setActiveTab] = useState<string>(initialTab);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-[#111827] border border-[#262a34] rounded-3xl shadow-2xl p-6 sm:p-8 z-10 text-white my-auto max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#181b25] text-[#c4c9ac] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Modal Header */}
        <div className="flex flex-col gap-2 mb-6">
          <div className="flex items-center gap-2 text-[#c3f400] text-xs font-bold uppercase tracking-widest">
            <span className="material-symbols-outlined text-[18px]">biotech</span>
            Laboratório de Engenharia Têxtil VIGOR
          </div>
          <h2 className="font-headline text-2xl sm:text-3xl font-black uppercase">
            Ciência e Biomecânica Aplicada
          </h2>
          <p className="text-xs sm:text-sm text-[#c4c9ac]">
            Entenda como cada filamento é projetado para maximizar oxigenação, resfriamento corporal e eliminação de atrito.
          </p>
        </div>

        {/* Technology Tabs */}
        <div className="flex flex-wrap gap-2 mb-6 border-b border-[#262a34] pb-4">
          <button
            onClick={() => setActiveTab('dryshield')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'dryshield'
                ? 'bg-[#c3f400] text-[#090D16]'
                : 'bg-[#181b25] text-[#c4c9ac] hover:text-white'
            }`}
          >
            Dry-Shield™ Anti-Odor
          </button>
          <button
            onClick={() => setActiveTab('aerofit')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'aerofit'
                ? 'bg-[#7bd0ff] text-[#090D16]'
                : 'bg-[#181b25] text-[#c4c9ac] hover:text-white'
            }`}
          >
            AeroFit 4-Way & Squat-Proof
          </button>
          <button
            onClick={() => setActiveTab('compressao')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'compressao'
                ? 'bg-[#c3f400] text-[#090D16]'
                : 'bg-[#181b25] text-[#c4c9ac] hover:text-white'
            }`}
          >
            Compressão Biomecânica Nível 4
          </button>
        </div>

        {/* Tab Content Display */}
        {activeTab === 'dryshield' && (
          <div className="flex flex-col gap-6 animate-in fade-in duration-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#181b25] border border-[#262a34] p-5 rounded-2xl flex flex-col gap-2">
                <span className="material-symbols-outlined text-[32px] text-[#7bd0ff]">
                  water_drop
                </span>
                <h4 className="font-headline text-lg font-bold text-white">
                  Absorção Capilar em 0.8s
                </h4>
                <p className="text-xs text-[#c4c9ac] leading-relaxed">
                  Fibras hidrofílicas puxam as gotículas de suor da derme diretamente para a camada externa da peça, promovendo taxa de evaporação 300% mais veloz que tecidos convencionais.
                </p>
              </div>

              <div className="bg-[#181b25] border border-[#262a34] p-5 rounded-2xl flex flex-col gap-2">
                <span className="material-symbols-outlined text-[32px] text-[#c3f400]">
                  shield
                </span>
                <h4 className="font-headline text-lg font-bold text-white">
                  Íons de Prata Antibacterianos
                </h4>
                <p className="text-xs text-[#c4c9ac] leading-relaxed">
                  Nanopartículas de prata incorporadas na matriz polimérica bloqueiam 99.8% da proliferação bacteriana causadora de odores desagradáveis após treinos intensos.
                </p>
              </div>
            </div>

            <div className="bg-[#090D16] border border-[#262a34] p-4 rounded-2xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#7bd0ff]/15 flex items-center justify-center text-[#7bd0ff]">
                  <span className="material-symbols-outlined text-[20px]">thermostat</span>
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">Regulação Térmica Ativa</span>
                  <span className="text-[11px] text-[#c4c9ac]">Mantém a temperatura muscular na faixa ideal de rendimento (36.5°C a 37.2°C).</span>
                </div>
              </div>
              <span className="text-xs font-bold text-[#c3f400] shrink-0">+3.2% VO2 Max</span>
            </div>
          </div>
        )}

        {activeTab === 'aerofit' && (
          <div className="flex flex-col gap-6 animate-in fade-in duration-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#181b25] border border-[#262a34] p-5 rounded-2xl flex flex-col gap-2">
                <span className="material-symbols-outlined text-[32px] text-[#7bd0ff]">
                  visibility_off
                </span>
                <h4 className="font-headline text-lg font-bold text-white">
                  Blindagem Óptica Squat-Proof
                </h4>
                <p className="text-xs text-[#c4c9ac] leading-relaxed">
                  Entrelaçamento bi-direcional de fios de alta densidade que não se distanciam sob estiramento de até 220%, eliminando qualquer risco de transparência em agachamentos e levantamento terra.
                </p>
              </div>

              <div className="bg-[#181b25] border border-[#262a34] p-5 rounded-2xl flex flex-col gap-2">
                <span className="material-symbols-outlined text-[32px] text-[#c3f400]">
                  fit_screen
                </span>
                <h4 className="font-headline text-lg font-bold text-white">
                  Elasticidade 4-Way 360°
                </h4>
                <p className="text-xs text-[#c4c9ac] leading-relaxed">
                  Acompanha a expansão tridimensional da musculatura com recuperação elástica imediata, mantendo o formato original sem lacear mesmo após 100 lavagens.
                </p>
              </div>
            </div>

            <div className="bg-[#090D16] border border-[#262a34] p-4 rounded-2xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#c3f400]/15 flex items-center justify-center text-[#c3f400]">
                  <span className="material-symbols-outlined text-[20px]">verified</span>
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">Teste Laboratorial Aprovado</span>
                  <span className="text-[11px] text-[#c4c9ac]">99.4% de satisfação e zero transparência confirmada em atletas com até 180kg de carga de agachamento.</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'compressao' && (
          <div className="flex flex-col gap-6 animate-in fade-in duration-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#181b25] border border-[#262a34] p-5 rounded-2xl flex flex-col gap-2">
                <span className="material-symbols-outlined text-[32px] text-[#c3f400]">
                  compress
                </span>
                <h4 className="font-headline text-lg font-bold text-white">
                  Compressão Gradual Biomecânica
                </h4>
                <p className="text-xs text-[#c4c9ac] leading-relaxed">
                  Pressão milimetricamente calibrada (22-26 mmHg) mais firme nas extremidades e suave em direção ao coração, estimulando o refluxo venoso e a eliminação do lactato sanguíneo.
                </p>
              </div>

              <div className="bg-[#181b25] border border-[#262a34] p-5 rounded-2xl flex flex-col gap-2">
                <span className="material-symbols-outlined text-[32px] text-[#7bd0ff]">
                  vibration
                </span>
                <h4 className="font-headline text-lg font-bold text-white">
                  Amortecimento de Oscilação Muscular
                </h4>
                <p className="text-xs text-[#c4c9ac] leading-relaxed">
                  Reduz as micro-vibrações no impacto do solo durante saltos e corridas, prevenindo micro-lesões nos fascículos musculares e aliviando a dor tardia pós-treino (DOMS).
                </p>
              </div>
            </div>

            <div className="bg-[#090D16] border border-[#262a34] p-4 rounded-2xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#c3f400]/15 flex items-center justify-center text-[#c3f400]">
                  <span className="material-symbols-outlined text-[20px]">pace</span>
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">Recuperação Acelerada</span>
                  <span className="text-[11px] text-[#c4c9ac]">Redução de 42% no tempo de recuperação entre séries de repetições máximas.</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

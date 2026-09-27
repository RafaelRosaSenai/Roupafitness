import React from 'react';

interface CommunityModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenVipModal: () => void;
}

export const CommunityModal: React.FC<CommunityModalProps> = ({
  isOpen,
  onClose,
  onOpenVipModal,
}) => {
  if (!isOpen) return null;

  const athletePosts = [
    {
      name: 'Camila Rodriguez',
      role: 'Atleta Crossfit & Treinadora',
      comment:
        'A Legging Sculpt Pro é a única que passei no agachamento de 130kg sem medo de transparência. A compressão no quadríceps segura o músculo sem prender.',
      badge: 'Membro Elite VIP',
      rating: 5,
    },
    {
      name: 'Lucas Brandão',
      role: 'Maratonista Sub-3h',
      comment:
        'A camiseta Seamless Breathable foi testada nos 42k de Porto Alegre. Zero atrito nos mamilos e não pesou um grama mesmo encharcado de suor no final.',
      badge: 'Atleta Verificado',
      rating: 5,
    },
    {
      name: 'Beatriz Fontes',
      role: 'Fisioterapeuta Esportiva',
      comment:
        'A calibragem de pressão gradual da VIGOR segue exatamente os parâmetros clínicos de recirculação venosa. Recomendo para todos os meus pacientes em reabilitação de alto impacto.',
      badge: 'Especialista Convidada',
      rating: 5,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-[#111827] border border-[#262a34] rounded-3xl shadow-2xl p-6 sm:p-8 z-10 text-white my-auto max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#181b25] text-[#c4c9ac] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Modal Header */}
        <div className="flex flex-col gap-2 mb-6">
          <div className="flex items-center gap-2 text-[#c3f400] text-xs font-bold uppercase tracking-widest">
            <span className="material-symbols-outlined text-[18px]">groups</span>
            Comunidade #VigorElite
          </div>
          <h2 className="font-headline text-2xl sm:text-3xl font-black uppercase">
            Feito por e para atletas
          </h2>
          <p className="text-xs sm:text-sm text-[#c4c9ac]">
            Mais de 45.000 treinos diários impulsionados pela engenharia têxtil de alta compressão.
          </p>
        </div>

        {/* Athlete Reviews List */}
        <div className="flex flex-col gap-4">
          {athletePosts.map((post, i) => (
            <div key={i} className="bg-[#181b25] border border-[#262a34] p-5 rounded-2xl flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">{post.name}</h4>
                  <span className="text-[11px] text-[#7bd0ff]">{post.role}</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-[#c3f400]/15 text-[#c3f400] text-[10px] font-black uppercase">
                  {post.badge}
                </span>
              </div>

              <div className="flex items-center text-[#c3f400] text-xs">
                {[...Array(post.rating)].map((_, idx) => (
                  <span key={idx} className="material-symbols-outlined text-[16px] font-fill">
                    star
                  </span>
                ))}
              </div>

              <p className="text-xs text-[#c4c9ac] leading-relaxed italic">
                "{post.comment}"
              </p>
            </div>
          ))}
        </div>

        {/* Community Callout */}
        <div className="mt-6 pt-5 border-t border-[#262a34] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#c4c9ac]">
            Use a hashtag <strong className="text-white">#VigorElite</strong> no Instagram e concorra a R$ 500 em vale-compras todo mês.
          </div>
          <button
            onClick={() => {
              onClose();
              onOpenVipModal();
            }}
            className="px-5 py-2.5 rounded-full bg-[#c3f400] text-[#090D16] text-xs font-black uppercase hover:bg-white transition-colors cursor-pointer shrink-0"
          >
            Fazer Parte do Clube
          </button>
        </div>
      </div>
    </div>
  );
};

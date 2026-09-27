import React, { useState } from 'react';

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SupportModal: React.FC<SupportModalProps> = ({ isOpen, onClose }) => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingResult, setTrackingResult] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingNumber.trim()) return;
    setTrackingResult('Pedido em Trânsito: Objeto expedido do Centro de Distribuição VIGOR (Curitiba/PR) para entrega ao destinatário.');
  };

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
          <div className="flex items-center gap-2 text-[#7bd0ff] text-xs font-bold uppercase tracking-widest">
            <span className="material-symbols-outlined text-[18px]">contact_support</span>
            Central de Ajuda & Pós-Venda
          </div>
          <h2 className="font-headline text-2xl sm:text-3xl font-black uppercase">
            Suporte ao Atleta VIGOR
          </h2>
          <p className="text-xs sm:text-sm text-[#c4c9ac]">
            Garantia incondicional de 30 dias, primeira troca grátis e canal prioritário para membros.
          </p>
        </div>

        {/* Order Tracking Bar */}
        <div className="bg-[#181b25] border border-[#262a34] p-5 rounded-2xl mb-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-2 flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px] text-[#c3f400]">local_shipping</span>
            Rastreamento de Pedido
          </h3>
          <form onSubmit={handleTrack} className="flex gap-2">
            <input
              type="text"
              placeholder="Digite o código (ex: VG-8942)"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value.toUpperCase())}
              className="flex-1 bg-[#090D16] border border-[#31353f] rounded-xl px-4 py-2 text-xs text-white uppercase placeholder:normal-case placeholder:text-[#64748b] focus:outline-none focus:border-[#c3f400]"
            />
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-[#c3f400] text-[#090D16] text-xs font-bold uppercase hover:bg-white transition-colors cursor-pointer"
            >
              Rastrear
            </button>
          </form>
          {trackingResult && (
            <div className="mt-3 p-3 bg-[#090D16] rounded-xl border border-[#c3f400]/40 text-xs text-[#c3f400] flex items-start gap-2">
              <span className="material-symbols-outlined text-[18px] shrink-0 mt-0.5">verified</span>
              <span>{trackingResult}</span>
            </div>
          )}
        </div>

        {/* Support Grid FAQ */}
        <div className="flex flex-col gap-3">
          <div className="bg-[#181b25] border border-[#262a34] p-4 rounded-xl">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-[#7bd0ff] text-[18px]">sync_alt</span>
              Como funciona a Primeira Troca Grátis?
            </h4>
            <p className="text-xs text-[#c4c9ac] mt-1 leading-relaxed">
              Você tem até 30 dias após o recebimento para solicitar a troca de tamanho ou modelo sem nenhum custo postal. Emitimos a etiqueta reversa dos Correios imediatamente.
            </p>
          </div>

          <div className="bg-[#181b25] border border-[#262a34] p-4 rounded-xl">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-[#c3f400] text-[18px]">wash</span>
              Como lavar para manter o Dry-Shield™?
            </h4>
            <p className="text-xs text-[#c4c9ac] mt-1 leading-relaxed">
              Lave em água fria com sabão neutro. Não utilize amaciantes de roupas (pois entopem os micro-poros hidrofílicos) e seque sempre à sombra. Não passe ferro quente.
            </p>
          </div>

          <div className="bg-[#181b25] border border-[#262a34] p-4 rounded-xl">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-[#7bd0ff] text-[18px]">schedule</span>
              Qual o prazo médio de entrega?
            </h4>
            <p className="text-xs text-[#c4c9ac] mt-1 leading-relaxed">
              Capitais do Sudeste e Sul: 1 a 3 dias úteis. Demais regiões do Brasil: 3 a 7 dias úteis com código de rastreamento enviado via e-mail e SMS.
            </p>
          </div>
        </div>

        {/* Contact Strip */}
        <div className="mt-6 pt-5 border-t border-[#262a34] flex flex-wrap items-center justify-between gap-4 text-xs text-[#c4c9ac]">
          <span>Atendimento: seg a sex das 08h às 19h</span>
          <div className="flex items-center gap-3">
            <span className="text-[#c3f400] font-bold">contato@vigorwear.com.br</span>
            <span>•</span>
            <span className="text-[#7bd0ff] font-bold">WhatsApp: (11) 98765-4321</span>
          </div>
        </div>
      </div>
    </div>
  );
};

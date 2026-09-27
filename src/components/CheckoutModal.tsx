import React, { useState } from 'react';
import { CartItem } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  appliedCoupon: string | null;
  onClearCart: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  appliedCoupon,
  onClearCart,
}) => {
  const [step, setStep] = useState<'details' | 'payment' | 'success'>('details');
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'credit'>('pix');
  const [formData, setFormData] = useState({
    name: 'Rafael Silva',
    email: 'rafael.silva@exemplo.com',
    phone: '(11) 98765-4321',
    zipCode: '01310-100',
    street: 'Av. Paulista, 1578',
    city: 'São Paulo',
    state: 'SP',
    cardNumber: '•••• •••• •••• 4242',
    cardName: 'RAFAEL SILVA',
    cardExp: '12/28',
    cardCvv: '888',
    installments: '1',
  });
  const [orderNumber, setOrderNumber] = useState('');
  const [copiedPix, setCopiedPix] = useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  const couponDiscount = appliedCoupon === 'VIGOR15' ? subtotal * 0.15 : 0;
  const isFreeShipping = subtotal >= 199.0;
  const shipping = isFreeShipping ? 0 : 19.9;
  const pixDiscount = paymentMethod === 'pix' ? (subtotal - couponDiscount) * 0.05 : 0;
  const total = subtotal - couponDiscount - pixDiscount + shipping;

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedOrderNum = `VG-${Math.floor(10000 + Math.random() * 90000)}`;
    setOrderNumber(generatedOrderNum);
    setStep('success');
    onClearCart();
  };

  const handleCopyPix = () => {
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 2000);
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

        {/* Step Indicator */}
        {step !== 'success' && (
          <div className="flex items-center justify-between border-b border-[#262a34] pb-4 mb-6 text-xs">
            <div className="flex items-center gap-2">
              <span
                className={`w-6 h-6 rounded-full flex items-center justify-center font-bold ${
                  step === 'details'
                    ? 'bg-[#c3f400] text-[#090D16]'
                    : 'bg-[#262a34] text-white'
                }`}
              >
                1
              </span>
              <span className={step === 'details' ? 'text-white font-bold' : 'text-[#c4c9ac]'}>
                Dados & Entrega
              </span>
            </div>
            <span className="text-[#262a34]">———</span>
            <div className="flex items-center gap-2">
              <span
                className={`w-6 h-6 rounded-full flex items-center justify-center font-bold ${
                  step === 'payment'
                    ? 'bg-[#c3f400] text-[#090D16]'
                    : 'bg-[#262a34] text-white'
                }`}
              >
                2
              </span>
              <span className={step === 'payment' ? 'text-white font-bold' : 'text-[#c4c9ac]'}>
                Pagamento Seguro
              </span>
            </div>
          </div>
        )}

        {/* STEP 1: Details */}
        {step === 'details' && (
          <form onSubmit={handleDetailsSubmit} className="flex flex-col gap-4">
            <h3 className="font-headline text-xl font-bold text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-[#c3f400]">local_shipping</span>
              Endereço de Entrega
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-[#c4c9ac] block mb-1">Nome Completo</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#181b25] border border-[#262a34] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#c3f400]"
                />
              </div>

              <div>
                <label className="text-xs text-[#c4c9ac] block mb-1">E-mail para Envio do Rastreio</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#181b25] border border-[#262a34] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#c3f400]"
                />
              </div>

              <div>
                <label className="text-xs text-[#c4c9ac] block mb-1">Telefone / WhatsApp</label>
                <input
                  type="text"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#181b25] border border-[#262a34] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#c3f400]"
                />
              </div>

              <div>
                <label className="text-xs text-[#c4c9ac] block mb-1">CEP</label>
                <input
                  type="text"
                  required
                  value={formData.zipCode}
                  onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                  className="w-full bg-[#181b25] border border-[#262a34] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#c3f400]"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-xs text-[#c4c9ac] block mb-1">Endereço Completo</label>
                <input
                  type="text"
                  required
                  value={formData.street}
                  onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                  className="w-full bg-[#181b25] border border-[#262a34] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#c3f400]"
                />
              </div>

              <div>
                <label className="text-xs text-[#c4c9ac] block mb-1">Cidade</label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full bg-[#181b25] border border-[#262a34] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#c3f400]"
                />
              </div>

              <div>
                <label className="text-xs text-[#c4c9ac] block mb-1">Estado</label>
                <input
                  type="text"
                  required
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  className="w-full bg-[#181b25] border border-[#262a34] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#c3f400]"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-[#262a34] flex items-center justify-between">
              <span className="text-xs text-[#c4c9ac]">
                Total ({items.length} itens):{' '}
                <strong className="text-[#c3f400] text-sm tabular-nums">
                  R$ {total.toFixed(2).replace('.', ',')}
                </strong>
              </span>
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-[#c3f400] text-[#090D16] text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors cursor-pointer"
              >
                Ir para o Pagamento
              </button>
            </div>
          </form>
        )}

        {/* STEP 2: Payment */}
        {step === 'payment' && (
          <form onSubmit={handlePaymentSubmit} className="flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <h3 className="font-headline text-xl font-bold text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-[#c3f400]">credit_card</span>
                Forma de Pagamento
              </h3>
              <button
                type="button"
                onClick={() => setStep('details')}
                className="text-xs text-[#7bd0ff] hover:underline"
              >
                Voltar aos dados
              </button>
            </div>

            {/* Payment Method Selector */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setPaymentMethod('pix')}
                className={`p-4 rounded-2xl border text-left flex flex-col gap-1 transition-all cursor-pointer ${
                  paymentMethod === 'pix'
                    ? 'border-[#c3f400] bg-[#c3f400]/10 shadow-[0_0_15px_rgba(195,244,0,0.2)]'
                    : 'border-[#262a34] bg-[#181b25]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-white">PIX Instantâneo</span>
                  <span className="px-2 py-0.5 rounded-full bg-[#c3f400] text-[#090D16] text-[10px] font-black uppercase">
                    5% OFF Extra
                  </span>
                </div>
                <span className="text-xs text-[#c4c9ac]">
                  Aprovação imediata e envio prioritário
                </span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('credit')}
                className={`p-4 rounded-2xl border text-left flex flex-col gap-1 transition-all cursor-pointer ${
                  paymentMethod === 'credit'
                    ? 'border-[#c3f400] bg-[#c3f400]/10 shadow-[0_0_15px_rgba(195,244,0,0.2)]'
                    : 'border-[#262a34] bg-[#181b25]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-white">Cartão de Crédito</span>
                  <span className="text-[10px] text-[#7bd0ff] font-semibold">Até 12x</span>
                </div>
                <span className="text-xs text-[#c4c9ac]">
                  Visa, Mastercard, Elo, Amex
                </span>
              </button>
            </div>

            {paymentMethod === 'pix' && (
              <div className="bg-[#181b25] border border-[#262a34] p-5 rounded-2xl flex flex-col items-center text-center gap-3">
                <div className="w-32 h-32 bg-white rounded-xl p-2 flex items-center justify-center shadow-lg">
                  <div className="w-full h-full bg-[#0a0e17] rounded-lg flex flex-col items-center justify-center p-2 text-white">
                    <span className="material-symbols-outlined text-4xl text-[#c3f400]">
                      qr_code_2
                    </span>
                    <span className="text-[9px] font-mono text-[#c4c9ac]">PIX QR CODE</span>
                  </div>
                </div>

                <div className="text-xs text-[#c4c9ac]">
                  Pague com seu aplicativo bancário escaneando o QR Code ou copie a chave:
                </div>

                <div className="w-full flex items-center gap-2 bg-[#090D16] border border-[#262a34] p-2 rounded-xl text-xs font-mono">
                  <span className="truncate text-[#c4c9ac] flex-1">
                    00020126580014br.gov.bcb.pix0136vigor-activewear-payment-key-2025
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyPix}
                    className="px-3 py-1.5 rounded-lg bg-[#c3f400] text-[#090D16] font-bold text-xs uppercase hover:bg-white transition-colors cursor-pointer shrink-0"
                  >
                    {copiedPix ? 'Copiado!' : 'Copiar'}
                  </button>
                </div>
              </div>
            )}

            {paymentMethod === 'credit' && (
              <div className="bg-[#181b25] border border-[#262a34] p-4 rounded-2xl flex flex-col gap-3">
                <div>
                  <label className="text-xs text-[#c4c9ac] block mb-1">Número do Cartão</label>
                  <input
                    type="text"
                    required
                    value={formData.cardNumber}
                    onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                    className="w-full bg-[#090D16] border border-[#262a34] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#c3f400]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-[#c4c9ac] block mb-1">Validade (MM/AA)</label>
                    <input
                      type="text"
                      required
                      value={formData.cardExp}
                      onChange={(e) => setFormData({ ...formData, cardExp: e.target.value })}
                      className="w-full bg-[#090D16] border border-[#262a34] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#c3f400]"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-[#c4c9ac] block mb-1">CVV</label>
                    <input
                      type="text"
                      required
                      value={formData.cardCvv}
                      onChange={(e) => setFormData({ ...formData, cardCvv: e.target.value })}
                      className="w-full bg-[#090D16] border border-[#262a34] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#c3f400]"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Total recap */}
            <div className="bg-[#090D16] border border-[#262a34] p-4 rounded-xl flex items-center justify-between text-xs">
              <span className="text-[#c4c9ac]">
                Valor Final a Pagar:
              </span>
              <span className="font-headline text-xl text-[#c3f400] font-black tabular-nums">
                R$ {total.toFixed(2).replace('.', ',')}
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-[#c3f400] hover:bg-white text-[#090D16] font-headline font-black text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(195,244,0,0.3)] cursor-pointer"
            >
              Confirmar Pagamento & Finalizar
            </button>
          </form>
        )}

        {/* STEP 3: Success Confirmation */}
        {step === 'success' && (
          <div className="py-6 text-center flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#c3f400]/20 border border-[#c3f400] flex items-center justify-center text-[#c3f400] animate-bounce">
              <span className="material-symbols-outlined text-[36px]">check</span>
            </div>

            <h3 className="font-headline text-2xl font-black text-white uppercase">
              Pedido Confirmado com Sucesso!
            </h3>

            <p className="text-xs sm:text-sm text-[#c4c9ac] max-w-md">
              Obrigado pela sua compra! O código do seu pedido é{' '}
              <strong className="text-[#c3f400] font-mono text-base">{orderNumber}</strong>. Enviamos a nota fiscal e o link de rastreamento para o e-mail cadastrado.
            </p>

            <div className="bg-[#181b25] border border-[#262a34] p-4 rounded-2xl text-left w-full text-xs text-[#c4c9ac] flex flex-col gap-2 my-2">
              <div className="flex justify-between text-white font-semibold">
                <span>Status da Entrega:</span>
                <span className="text-[#c3f400]">Em Separação Expressa</span>
              </div>
              <div className="flex justify-between">
                <span>Prazo Estimado:</span>
                <span className="text-white">2 a 4 dias úteis</span>
              </div>
              <div className="flex justify-between">
                <span>Garantia VIGOR:</span>
                <span className="text-white">30 Dias p/ Troca Gratuita</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="px-8 py-3.5 rounded-full bg-[#c3f400] text-[#090D16] text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors cursor-pointer"
            >
              Continuar Comprando
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

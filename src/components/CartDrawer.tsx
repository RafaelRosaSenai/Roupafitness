import React, { useState } from 'react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (index: number, newQty: number) => void;
  onRemoveItem: (index: number) => void;
  onProceedToCheckout: () => void;
  appliedCoupon: string | null;
  onApplyCoupon: (code: string) => boolean;
  onRemoveCoupon: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
  appliedCoupon,
  onApplyCoupon,
  onRemoveCoupon,
}) => {
  const [couponInput, setCouponInput] = useState('');
  const [couponError, setCouponError] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  const discountRate = appliedCoupon === 'VIGOR15' ? 0.15 : 0;
  const discountAmount = subtotal * discountRate;
  const freeShippingThreshold = 199.0;
  const freeShipping = subtotal >= freeShippingThreshold;
  const shippingAmount = subtotal > 0 && !freeShipping ? 19.9 : 0;
  const total = subtotal - discountAmount + shippingAmount;

  const freeShippingProgress = Math.min(
    100,
    Math.round((subtotal / freeShippingThreshold) * 100)
  );

  const handleApplyCouponSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError('');
    if (!couponInput.trim()) return;

    const success = onApplyCoupon(couponInput.trim());
    if (success) {
      setCouponInput('');
    } else {
      setCouponError('Cupom inválido. Tente VIGOR15.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#111827] border-l border-[#262a34] text-white flex flex-col shadow-2xl">
          {/* Header */}
          <div className="p-5 border-b border-[#262a34] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[24px] text-[#c3f400]">
                shopping_bag
              </span>
              <h2 className="font-headline text-lg font-bold">
                Seu Carrinho ({items.reduce((acc, i) => acc + i.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-full text-[#c4c9ac] hover:text-white hover:bg-[#181b25] transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[22px]">close</span>
            </button>
          </div>

          {/* Free Shipping Alert Bar */}
          <div className="bg-[#181b25] px-5 py-3 border-b border-[#262a34]">
            {freeShipping ? (
              <div className="flex items-center gap-2 text-xs font-bold text-[#c3f400]">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                <span>Parabéns! Você garantiu FRETE GRÁTIS</span>
              </div>
            ) : (
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between text-xs text-[#c4c9ac]">
                  <span>Frete Grátis acima de R$ 199</span>
                  <span className="text-[#c3f400] font-bold tabular-nums">
                    Faltam R$ {(freeShippingThreshold - subtotal).toFixed(2).replace('.', ',')}
                  </span>
                </div>
                <div className="w-full h-1.5 bg-[#090D16] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#c3f400] transition-all duration-300"
                    style={{ width: `${freeShippingProgress}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4">
            {items.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center py-12 gap-4">
                <div className="w-16 h-16 rounded-full bg-[#181b25] flex items-center justify-center text-[#c4c9ac]">
                  <span className="material-symbols-outlined text-[32px]">shopping_cart</span>
                </div>
                <div>
                  <h3 className="font-headline text-base font-bold text-white">
                    Seu carrinho está vazio
                  </h3>
                  <p className="text-xs text-[#c4c9ac] mt-1 max-w-xs">
                    Descubra os lançamentos da Coleção 2025 e turbine seu treino.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-full bg-[#c3f400] text-[#090D16] text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors cursor-pointer"
                >
                  Explorar Loja
                </button>
              </div>
            ) : (
              items.map((item, idx) => (
                <div
                  key={`${item.product.id}-${item.size}-${item.color}-${idx}`}
                  className="bg-[#181b25] border border-[#262a34] rounded-xl p-3 flex gap-3.5"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-20 rounded-lg object-cover bg-[#090D16] shrink-0"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-sm font-semibold text-white leading-tight line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(idx)}
                          className="text-[#c4c9ac] hover:text-red-400 p-0.5"
                          title="Remover produto"
                        >
                          <span className="material-symbols-outlined text-[16px]">delete</span>
                        </button>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-[#c4c9ac] mt-0.5">
                        <span>Tam: <strong className="text-white">{item.size}</strong></span>
                        <span>•</span>
                        <span>Cor: <strong className="text-white">{item.color}</strong></span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center border border-[#31353f] rounded-lg bg-[#090D16] px-1 py-0.5">
                        <button
                          onClick={() => onUpdateQuantity(idx, item.quantity - 1)}
                          className="w-6 h-6 flex items-center justify-center text-[#c4c9ac] hover:text-white"
                        >
                          -
                        </button>
                        <span className="w-6 text-center text-xs font-bold tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(idx, item.quantity + 1)}
                          className="w-6 h-6 flex items-center justify-center text-[#c4c9ac] hover:text-white"
                        >
                          +
                        </button>
                      </div>
                      <span className="font-headline text-sm font-bold text-[#c3f400] tabular-nums">
                        R$ {(item.product.price * item.quantity).toFixed(2).replace('.', ',')}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Area */}
          {items.length > 0 && (
            <div className="p-5 bg-[#181b25] border-t border-[#262a34] flex flex-col gap-4">
              {/* Coupon Form */}
              <form onSubmit={handleApplyCouponSubmit} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Cupom (ex: VIGOR15)"
                  value={couponInput}
                  onChange={(e) => setCouponInput(e.target.value.toUpperCase())}
                  className="flex-1 bg-[#090D16] border border-[#31353f] rounded-lg px-3 py-2 text-xs text-white uppercase placeholder:normal-case placeholder:text-[#64748b] focus:outline-none focus:border-[#c3f400]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#262a34] hover:bg-[#31353f] text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
                >
                  Aplicar
                </button>
              </form>

              {appliedCoupon && (
                <div className="flex items-center justify-between bg-[#c3f400]/10 border border-[#c3f400]/30 px-3 py-1.5 rounded-lg text-xs">
                  <span className="text-[#c3f400] font-semibold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">local_offer</span>
                    Cupom <strong>{appliedCoupon}</strong> ativo (-15%)
                  </span>
                  <button
                    onClick={onRemoveCoupon}
                    className="text-[#c4c9ac] hover:text-red-400 font-bold"
                  >
                    remover
                  </button>
                </div>
              )}
              {couponError && <p className="text-xs text-red-400">{couponError}</p>}

              {/* Price Breakdown */}
              <div className="flex flex-col gap-1.5 text-xs text-[#c4c9ac] pt-2 border-t border-[#262a34]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-white font-medium tabular-nums">
                    R$ {subtotal.toFixed(2).replace('.', ',')}
                  </span>
                </div>

                {appliedCoupon && (
                  <div className="flex justify-between text-[#c3f400]">
                    <span>Desconto (15%)</span>
                    <span className="tabular-nums">- R$ {discountAmount.toFixed(2).replace('.', ',')}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Frete</span>
                  <span className="tabular-nums">
                    {freeShipping ? (
                      <strong className="text-[#c3f400]">GRÁTIS</strong>
                    ) : (
                      `R$ ${shippingAmount.toFixed(2).replace('.', ',')}`
                    )}
                  </span>
                </div>

                <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-[#262a34]">
                  <span>Total</span>
                  <span className="font-headline text-lg text-[#c3f400] tabular-nums">
                    R$ {total.toFixed(2).replace('.', ',')}
                  </span>
                </div>
              </div>

              {/* Checkout CTA */}
              <button
                onClick={onProceedToCheckout}
                className="w-full py-4 rounded-xl bg-[#c3f400] hover:bg-white text-[#090D16] font-headline font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(195,244,0,0.3)] cursor-pointer"
              >
                <span>Finalizar Compra</span>
                <span className="material-symbols-outlined text-[18px]">lock</span>
              </button>

              <p className="text-[10px] text-center text-[#8e9379]">
                🔒 Pagamento Seguro • Garantia de 30 Dias • Troca Grátis
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

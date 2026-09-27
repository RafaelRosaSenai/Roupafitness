import React, { useState } from 'react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size: string, color: string, quantity: number) => void;
  onBuyNow: (product: Product, size: string, color: string, quantity: number) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onBuyNow,
}) => {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || 'M');
  const [selectedColor, setSelectedColor] = useState<string>(
    product.colors[0]?.name || 'Padrão'
  );
  const [quantity, setQuantity] = useState<number>(1);
  const [showSizeGuide, setShowSizeGuide] = useState<boolean>(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-[#111827] border border-[#262a34] rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col md:flex-row my-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#181b25]/80 hover:bg-[#262a34] text-white flex items-center justify-center border border-[#31353f] transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Left Side: Product Media Image */}
        <div className="md:w-1/2 bg-[#090D16] relative flex items-center justify-center min-h-[320px] md:min-h-full overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center max-h-[460px] md:max-h-full"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent md:hidden" />

          {/* Floating Technology Badge */}
          <div className="absolute top-4 left-4 flex flex-col gap-1.5">
            <span className="px-3 py-1 rounded-full bg-[#c3f400] text-[#090D16] text-xs font-black uppercase tracking-wider shadow">
              {product.techTag}
            </span>
            {product.discountBadge && (
              <span className="px-3 py-0.5 rounded-full bg-[#0a0e17]/85 backdrop-blur-md text-white text-xs font-bold border border-[#31353f]">
                {product.discountBadge}
              </span>
            )}
          </div>
        </div>

        {/* Right Side: Configuration & Buy Flow */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div className="flex flex-col gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#7bd0ff]">
                VIGOR Activewear // Coleção Oficial
              </span>
              <h2 className="font-headline text-2xl sm:text-3xl text-white font-extrabold mt-1">
                {product.name}
              </h2>
              <p className="text-xs sm:text-sm text-[#c4c9ac] mt-1">
                {product.subtitle}
              </p>
            </div>

            {/* Price Box */}
            <div className="flex items-baseline gap-3 p-3 bg-[#181b25] border border-[#262a34] rounded-xl">
              {product.originalPrice && (
                <span className="text-sm text-[#c4c9ac] line-through tabular-nums">
                  R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                </span>
              )}
              <span className="font-headline text-2xl sm:text-3xl text-[#c3f400] font-black tabular-nums">
                R$ {product.price.toFixed(2).replace('.', ',')}
              </span>
              <span className="text-xs text-[#7bd0ff] font-medium ml-auto">
                {product.installments}
              </span>
            </div>

            {/* Technical Specs Indicators */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-[#181b25] border border-[#262a34] p-2.5 rounded-lg flex flex-col">
                <span className="text-[#8e9379] text-[10px] uppercase font-bold">Compressão</span>
                <div className="flex items-center gap-1 mt-1">
                  {[1, 2, 3, 4, 5].map((level) => (
                    <div
                      key={level}
                      className={`h-2 flex-1 rounded-full ${
                        level <= product.specs.compression
                          ? 'bg-[#c3f400]'
                          : 'bg-[#262a34]'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-white font-semibold text-[11px] mt-1">
                  Nível {product.specs.compression}/5 Biomecânico
                </span>
              </div>

              <div className="bg-[#181b25] border border-[#262a34] p-2.5 rounded-lg flex flex-col">
                <span className="text-[#8e9379] text-[10px] uppercase font-bold">Respirabilidade</span>
                <div className="flex items-center gap-1 mt-1">
                  {[1, 2, 3, 4, 5].map((level) => (
                    <div
                      key={level}
                      className={`h-2 flex-1 rounded-full ${
                        level <= product.specs.breathability
                          ? 'bg-[#7bd0ff]'
                          : 'bg-[#262a34]'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-white font-semibold text-[11px] mt-1">
                  Dry-Shield™ Grau {product.specs.breathability}
                </span>
              </div>
            </div>

            {/* Colors Selection */}
            {product.colors.length > 0 && (
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#c4c9ac] font-medium">
                    Cor: <strong className="text-white">{selectedColor}</strong>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`w-7 h-7 rounded-full border-2 transition-all cursor-pointer ${
                        selectedColor === c.name
                          ? 'border-[#c3f400] scale-110 shadow-[0_0_10px_rgba(195,244,0,0.5)]'
                          : 'border-transparent hover:scale-105'
                      }`}
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Size Selector */}
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center text-xs">
                <span className="text-[#c4c9ac] font-medium">Tamanho Selecionado</span>
                <button
                  type="button"
                  onClick={() => setShowSizeGuide(!showSizeGuide)}
                  className="text-[#7bd0ff] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[14px]">straighten</span>
                  <span>Tabela de Medidas</span>
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {product.sizes.map((sz) => (
                  <button
                    key={sz}
                    type="button"
                    onClick={() => setSelectedSize(sz)}
                    className={`min-w-[44px] h-10 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      selectedSize === sz
                        ? 'bg-[#c3f400] text-[#090D16] shadow-[0_0_12px_rgba(195,244,0,0.3)]'
                        : 'bg-[#181b25] border border-[#262a34] text-white hover:border-[#31353f]'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>

              {showSizeGuide && (
                <div className="bg-[#090D16] border border-[#262a34] p-3 rounded-xl text-xs text-[#c4c9ac] flex flex-col gap-1 mt-1">
                  <div className="font-semibold text-white">Guia de Ajuste Anatômico:</div>
                  <div>• <strong>PP / P</strong>: Busto/Tórax 80-88cm | Cintura 60-70cm</div>
                  <div>• <strong>M</strong>: Busto/Tórax 89-96cm | Cintura 71-80cm</div>
                  <div>• <strong>G / GG</strong>: Busto/Tórax 97-106cm | Cintura 81-92cm</div>
                </div>
              )}
            </div>

            {/* Description Paragraph */}
            <p className="text-xs text-[#c4c9ac] leading-relaxed line-clamp-3">
              {product.description}
            </p>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-[#262a34] flex flex-col gap-3 mt-4">
            <div className="flex items-center gap-3">
              {/* Quantity Counter */}
              <div className="flex items-center border border-[#31353f] rounded-xl bg-[#090D16] px-2 py-1.5">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-7 h-7 flex items-center justify-center text-white hover:text-[#c3f400] text-sm"
                >
                  -
                </button>
                <span className="w-8 text-center text-sm font-bold text-white tabular-nums">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-7 h-7 flex items-center justify-center text-white hover:text-[#c3f400] text-sm"
                >
                  +
                </button>
              </div>

              {/* Add to Cart Button */}
              <button
                type="button"
                onClick={() => {
                  onAddToCart(product, selectedSize, selectedColor, quantity);
                  onClose();
                }}
                className="flex-1 py-3.5 rounded-xl bg-[#181b25] hover:bg-[#262a34] border border-[#c3f400]/50 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px] text-[#c3f400]">
                  add_shopping_cart
                </span>
                <span>Adicionar ao Carrinho</span>
              </button>
            </div>

            {/* Buy Now Button */}
            <button
              type="button"
              onClick={() => {
                onBuyNow(product, selectedSize, selectedColor, quantity);
                onClose();
              }}
              className="w-full py-4 rounded-xl bg-[#c3f400] hover:bg-white text-[#090D16] font-headline font-black text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(195,244,0,0.35)] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Comprar Agora • R$ {(product.price * quantity).toFixed(2).replace('.', ',')}</span>
              <span className="material-symbols-outlined text-[18px]">bolt</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

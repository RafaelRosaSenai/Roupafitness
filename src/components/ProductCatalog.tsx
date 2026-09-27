import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';

interface ProductCatalogProps {
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, size: string, color: string) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onQuickView,
  onAddToCart,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'todos' | 'feminino' | 'masculino' | 'acessorios'>('todos');

  const filteredProducts =
    selectedCategory === 'todos'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  const getTagColorClass = (color?: string) => {
    switch (color) {
      case 'neon':
        return 'bg-[#c3f400] text-[#090D16]';
      case 'cyan':
        return 'bg-[#7bd0ff] text-[#090D16]';
      case 'crimson':
        return 'bg-[#ffdadb] text-[#c51640]';
      default:
        return 'bg-[#31353f] text-white';
    }
  };

  return (
    <section id="vitrine" className="w-full py-16 px-4 sm:px-6 lg:px-12 bg-[#090D16] relative">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Section Title & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c3f400]">
              Coleção 2025 // Vitrine Ativa
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl text-white font-black uppercase tracking-tight">
              Equipamentos de Elite
            </h2>
            <p className="text-sm sm:text-base text-[#c4c9ac]">
              Selecione peças desenvolvidas para treino de força, calistenia e corrida de alta intensidade.
            </p>
          </div>

          {/* Filter Pill Chips */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#181b25] border border-[#262a34] rounded-full">
            <button
              onClick={() => setSelectedCategory('todos')}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === 'todos'
                  ? 'bg-[#c3f400] text-[#090D16] shadow-[0_0_15px_rgba(195,244,0,0.3)]'
                  : 'text-[#c4c9ac] hover:text-white'
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setSelectedCategory('feminino')}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === 'feminino'
                  ? 'bg-[#c3f400] text-[#090D16] shadow-[0_0_15px_rgba(195,244,0,0.3)]'
                  : 'text-[#c4c9ac] hover:text-white'
              }`}
            >
              Feminino
            </button>
            <button
              onClick={() => setSelectedCategory('masculino')}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === 'masculino'
                  ? 'bg-[#c3f400] text-[#090D16] shadow-[0_0_15px_rgba(195,244,0,0.3)]'
                  : 'text-[#c4c9ac] hover:text-white'
              }`}
            >
              Masculino
            </button>
            <button
              onClick={() => setSelectedCategory('acessorios')}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === 'acessorios'
                  ? 'bg-[#c3f400] text-[#090D16] shadow-[0_0_15px_rgba(195,244,0,0.3)]'
                  : 'text-[#c4c9ac] hover:text-white'
              }`}
            >
              Acessórios
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-[#181b25] border border-[#262a34] hover:border-[#c3f400]/40 rounded-2xl overflow-hidden shadow-xl flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
              onClick={() => onQuickView(product)}
            >
              {/* Product Visual Container */}
              <div className="relative aspect-square w-full bg-[#0a0e17] overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt={product.name}
                  src={product.image}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Badges Overlay */}
                <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
                  {product.tag && (
                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow ${getTagColorClass(
                        product.tagColor
                      )}`}
                    >
                      {product.tag}
                    </span>
                  )}
                  {product.discountBadge && (
                    <span className="px-2.5 py-0.5 rounded-full bg-[#0a0e17]/85 backdrop-blur-md text-white text-[10px] font-bold uppercase border border-[#31353f]">
                      {product.discountBadge}
                    </span>
                  )}
                </div>

                {/* Quick Add Floating Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    const defaultSize = product.sizes[0] || 'M';
                    const defaultColor = product.colors[0]?.name || 'Padrão';
                    onAddToCart(product, defaultSize, defaultColor);
                  }}
                  className="absolute bottom-3 right-3 w-11 h-11 rounded-full bg-[#c3f400] text-[#090D16] flex items-center justify-center opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all shadow-xl hover:bg-white cursor-pointer z-10"
                  title="Adicionar rapidamente ao carrinho"
                  aria-label={`Adicionar ${product.name} ao carrinho`}
                >
                  <span className="material-symbols-outlined text-[22px] font-bold">
                    add_shopping_cart
                  </span>
                </button>
              </div>

              {/* Product Info */}
              <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between gap-3">
                <div>
                  <span className="text-[11px] font-bold text-[#7bd0ff] uppercase tracking-wider">
                    {product.techTag}
                  </span>
                  <h3 className="font-headline text-base text-white font-bold mt-1 group-hover:text-[#c3f400] transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-xs text-[#c4c9ac] line-clamp-1 mt-0.5">
                    {product.subtitle}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-[#262a34]">
                  <div className="flex flex-col">
                    {product.originalPrice && (
                      <span className="text-[11px] text-[#c4c9ac] line-through tabular-nums">
                        R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                      </span>
                    )}
                    <span className="font-headline text-lg text-[#c3f400] font-black tabular-nums">
                      R$ {product.price.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                  <span className="text-[10px] text-[#c4c9ac] bg-[#262a34] px-2 py-1 rounded font-medium">
                    {product.installments.split(' ')[0]} {product.installments.split(' ')[1]}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

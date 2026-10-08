import React, { useState } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { PRODUCTS, ARTISANS } from '../data/mockData';
import { Product, Artisan } from '../types';
import { CeramicVisual } from './CeramicVisual';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (productId: string) => void;
  onSelectArtisan: (artisanId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
  onSelectArtisan
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filteredProducts = PRODUCTS.filter((p) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      p.nameKo.toLowerCase().includes(q) ||
      p.nameEn.toLowerCase().includes(q) ||
      p.clayNameKo.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  });

  const filteredArtisans = ARTISANS.filter((a) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      a.nameKo.toLowerCase().includes(q) ||
      a.nameEn.toLowerCase().includes(q) ||
      a.studioNameKo.toLowerCase().includes(q) ||
      a.location.toLowerCase().includes(q)
    );
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-start justify-center pt-20 p-4">
      <div className="fixed inset-0 bg-black/40 backdrop-blur-xs" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-[#FAF7F2] rounded-2xl shadow-2xl border border-[#E8E2D7] overflow-hidden z-10 text-[#2B2623]">
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-[#E8E2D7] bg-[#F8F5EE] flex items-center gap-3">
          <Search className="w-5 h-5 text-[#A06245]" />
          <input
            type="text"
            placeholder="작품명, 도예가 이름, 흙의 종류(분청, 백자) 검색..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="flex-1 bg-transparent border-none text-sm sm:text-base text-[#2B2623] placeholder-[#A59D94] focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1.5 text-[#6E665E] hover:text-[#2B2623] rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Filter Tag Buttons */}
        <div className="px-5 py-2.5 bg-[#FAF7F2] border-b border-[#E8E2D7] flex items-center gap-2 text-xs overflow-x-auto">
          <span className="text-[#8C8379] shrink-0">추천 검색:</span>
          {['분청 오벌', '달항아리', '재유 다기', '윤서진', '백자'].map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="px-2.5 py-1 bg-white hover:bg-[#F0EBE1] border border-[#E8E2D7] rounded-md text-[#6E665E] hover:text-[#2B2623] shrink-0 transition-colors cursor-pointer"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-5 space-y-6">
          {/* Artisans Section */}
          {filteredArtisans.length > 0 && (
            <div>
              <span className="text-xs font-semibold text-[#8C8379] uppercase tracking-wider block mb-2.5">
                도예가 ({filteredArtisans.length})
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {filteredArtisans.map((artisan: Artisan) => (
                  <button
                    key={artisan.id}
                    onClick={() => {
                      onClose();
                      onSelectArtisan(artisan.id);
                    }}
                    className="p-3 bg-white hover:bg-[#F4EFE6] rounded-xl border border-[#E8E2D7] text-left transition-colors flex items-center justify-between group cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-serif font-bold text-sm text-[#2B2623]">
                          {artisan.nameKo} 도예가
                        </span>
                        <span className="text-[11px] text-[#A06245]">{artisan.studioNameKo.split(' ')[0]}</span>
                      </div>
                      <p className="text-[11px] text-[#6E665E] mt-0.5">{artisan.location}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#A59D94] group-hover:text-[#2B2623] transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Products Section */}
          <div>
            <span className="text-xs font-semibold text-[#8C8379] uppercase tracking-wider block mb-2.5">
              공예 작품 ({filteredProducts.length})
            </span>
            {filteredProducts.length === 0 ? (
              <p className="text-xs text-[#8C8379] py-6 text-center">
                검색 조건과 일치하는 작품이 없습니다.
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {filteredProducts.map((prod: Product) => (
                  <button
                    key={prod.id}
                    onClick={() => {
                      onClose();
                      onSelectProduct(prod.id);
                    }}
                    className="p-3 bg-white hover:bg-[#F4EFE6] rounded-xl border border-[#E8E2D7] text-left transition-colors flex items-center gap-3 group cursor-pointer"
                  >
                    <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0 border border-[#E8E2D7]">
                      <CeramicVisual product={prod} className="w-full h-full" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[11px] text-[#A06245] block">
                        {prod.clayNameKo.split(' ')[0]}
                      </span>
                      <h4 className="text-xs font-semibold text-[#2B2623] truncate group-hover:text-[#A06245] transition-colors">
                        {prod.nameKo}
                      </h4>
                      <p className="text-xs font-serif font-bold text-[#2B2623] tabular-nums mt-0.5">
                        {prod.price.toLocaleString()}원
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

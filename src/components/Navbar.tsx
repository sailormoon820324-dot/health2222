import React from 'react';
import { Search, ShoppingBag, Sparkles } from 'lucide-react';
import { ScreenType } from '../types';

interface NavbarProps {
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType, artisanId?: string, productId?: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onOpenMaterialGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentScreen,
  onNavigate,
  cartCount,
  onOpenCart,
  onOpenSearch,
  onOpenMaterialGuide
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8E2D7] transition-all">
      {/* Slim Promotional Announcement Bar (dismissible / clean) */}
      <div className="bg-[#2B2623] text-[#FAF7F2] text-xs py-1.5 px-4 text-center tracking-wide font-light flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
        <span>이달의 공예 기획전 — 도자기 전 작품 안전 에코 완충 패키징 무료 배송 &amp; 선물 포장 지원</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => onNavigate('home')}
          className="text-xl sm:text-2xl font-serif tracking-widest text-[#2B2623] hover:text-[#A06245] transition-colors flex items-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A06245] rounded"
        >
          <span>TOHWA</span>
          <span className="text-base text-[#6E665E] font-light">| 土話</span>
        </button>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#6E665E]">
          <button
            onClick={() => onNavigate('home')}
            className={`hover:text-[#2B2623] transition-colors relative py-1 cursor-pointer ${
              currentScreen === 'home' ? 'text-[#2B2623] font-semibold border-b-2 border-[#A06245]' : ''
            }`}
          >
            기획전시
          </button>
          <button
            onClick={() => onNavigate('artisan', 'artisan_yoon')}
            className={`hover:text-[#2B2623] transition-colors relative py-1 cursor-pointer ${
              currentScreen === 'artisan' ? 'text-[#2B2623] font-semibold border-b-2 border-[#A06245]' : ''
            }`}
          >
            도예가 탐색
          </button>
          <button
            onClick={onOpenMaterialGuide}
            className="hover:text-[#2B2623] transition-colors py-1 cursor-pointer"
          >
            흙과 가마 안내
          </button>
          <button
            onClick={() => {
              // Smooth scroll to curation or journal on home
              onNavigate('home');
              setTimeout(() => {
                const el = document.getElementById('journal-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="hover:text-[#2B2623] transition-colors py-1 cursor-pointer"
          >
            토화 저널
          </button>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenSearch}
            className="p-2 text-[#6E665E] hover:text-[#2B2623] hover:bg-[#F0EBE1] rounded-lg transition-colors cursor-pointer"
            aria-label="작품 및 작가 검색"
            title="검색"
          >
            <Search className="w-5 h-5" />
          </button>

          <button
            onClick={onOpenCart}
            className="relative flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-[#FAF7F2] bg-[#2B2623] hover:bg-[#433B36] rounded-lg transition-colors cursor-pointer whitespace-nowrap shadow-sm"
            aria-label="장바구니 열기"
          >
            <ShoppingBag className="w-4 h-4 text-[#E8E2D7]" />
            <span className="hidden sm:inline">온기 바구니</span>
            {cartCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-[#A06245] text-white text-[11px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

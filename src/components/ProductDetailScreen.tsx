import React, { useState } from 'react';
import { ArrowLeft, Gift, ShieldCheck, Sparkles, Check, Heart, Share2, Info, ArrowRight } from 'lucide-react';
import { Product, Artisan } from '../types';
import { ARTISANS, PRODUCTS } from '../data/mockData';
import { CeramicVisual } from './CeramicVisual';
import { WabiSabiNotice } from './WabiSabiNotice';

interface ProductDetailScreenProps {
  productId: string;
  onBack: () => void;
  onSelectProduct: (productId: string) => void;
  onSelectArtisan: (artisanId: string) => void;
  onAddToCart: (product: Product, quantity: number, withGiftWrap: boolean, giftMessage?: string) => void;
  onDirectCheckout: (product: Product, quantity: number, withGiftWrap: boolean, giftMessage?: string) => void;
}

export const ProductDetailScreen: React.FC<ProductDetailScreenProps> = ({
  productId,
  onBack,
  onSelectProduct,
  onSelectArtisan,
  onAddToCart,
  onDirectCheckout
}) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [withGiftWrap, setWithGiftWrap] = useState<boolean>(false);
  const [giftCardMessage, setGiftCardMessage] = useState<string>('');
  const [viewMode, setViewMode] = useState<'standard' | 'texture' | 'lifestyle'>('standard');
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const product = PRODUCTS.find((p) => p.id === productId) || PRODUCTS[0];
  const artisan = ARTISANS.find((a) => a.id === product.artisanId) || ARTISANS[0];

  const relatedProducts = PRODUCTS.filter(
    (p) => p.artisanId === artisan.id && p.id !== product.id
  ).slice(0, 3);

  const GIFT_WRAP_FEE = 5000;
  const currentTotalPrice = (product.price + (withGiftWrap ? GIFT_WRAP_FEE : 0)) * quantity;

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      {/* Back button & Breadcrumb */}
      <div className="flex items-center justify-between border-b border-[#E8E2D7] pb-4 text-xs">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#6E665E] hover:text-[#2B2623] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>목록으로 돌아가기</span>
        </button>

        <div className="flex items-center gap-2 text-[#8C8379]">
          <button 
            onClick={() => onSelectArtisan(artisan.id)}
            className="hover:text-[#2B2623] transition-colors cursor-pointer"
          >
            {artisan.nameKo} 도예가
          </button>
          <span aria-hidden="true">/</span>
          <span className="text-[#2B2623] font-medium truncate max-w-[200px]">{product.nameKo}</span>
        </div>
      </div>

      {/* Main PDP Grid (Contiguous Purchase Module on Right, Gallery on Left) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Gallery & Visual Showcase */}
        <div className="lg:col-span-7 space-y-4">
          {/* Main Visual Display */}
          <div className="w-full aspect-4/3 rounded-2xl overflow-hidden border border-[#E8E2D7] bg-white relative shadow-sm">
            <CeramicVisual
              product={product}
              className="w-full h-full"
              viewMode={viewMode}
              showTextureBadge={true}
            />

            {/* Quick action buttons on visual */}
            <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className="p-2.5 bg-white/80 backdrop-blur-sm rounded-full text-[#6E665E] hover:text-[#A06245] transition-colors cursor-pointer shadow-xs"
                title="관심 작품"
              >
                <Heart className={`w-4 h-4 ${isLiked ? 'fill-[#A06245] text-[#A06245]' : ''}`} />
              </button>
              <button
                onClick={handleShare}
                className="p-2.5 bg-white/80 backdrop-blur-sm rounded-full text-[#6E665E] hover:text-[#2B2623] transition-colors cursor-pointer shadow-xs"
                title="작품 링크 복사"
              >
                {isCopied ? <Check className="w-4 h-4 text-[#5A6B56]" /> : <Share2 className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* View Mode Selectors (3 angles / textures) */}
          <div className="flex items-center gap-2 p-1 bg-[#F0EBE1] rounded-xl self-start">
            <button
              onClick={() => setViewMode('standard')}
              className={`px-3 py-1.5 text-xs rounded-lg transition-colors cursor-pointer ${
                viewMode === 'standard' ? 'bg-white text-[#2B2623] font-semibold shadow-xs' : 'text-[#6E665E] hover:text-[#2B2623]'
              }`}
            >
              정면 공예 뷰
            </button>
            <button
              onClick={() => setViewMode('texture')}
              className={`px-3 py-1.5 text-xs rounded-lg transition-colors cursor-pointer ${
                viewMode === 'texture' ? 'bg-white text-[#2B2623] font-semibold shadow-xs' : 'text-[#6E665E] hover:text-[#2B2623]'
              }`}
            >
              표면 텍스처 클로즈업
            </button>
            <button
              onClick={() => setViewMode('lifestyle')}
              className={`px-3 py-1.5 text-xs rounded-lg transition-colors cursor-pointer ${
                viewMode === 'lifestyle' ? 'bg-white text-[#2B2623] font-semibold shadow-xs' : 'text-[#6E665E] hover:text-[#2B2623]'
              }`}
            >
              테이블 세팅 감상
            </button>
          </div>

          {/* Wabi-Sabi Notice Compact Component */}
          <WabiSabiNotice compact={false} />
        </div>

        {/* Right Column: Contiguous Purchase Module (Sticky on desktop) */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
          <div className="bg-white rounded-3xl border border-[#E8E2D7] p-6 sm:p-8 space-y-6 shadow-sm">
            {/* Header info */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-[#8C8379]">
                <button
                  onClick={() => onSelectArtisan(artisan.id)}
                  className="text-[#A06245] font-serif hover:underline cursor-pointer flex items-center gap-1"
                >
                  <span>{artisan.nameKo} 도예가</span>
                  <span className="text-[#8C8379]">({artisan.studioNameKo.split(' ')[0]})</span>
                </button>
                {product.isLimited && (
                  <span className="text-[#2B2623] font-medium">잔여 한정 {product.inStock}점</span>
                )}
              </div>

              <h1 className="text-2xl font-serif font-bold text-[#2B2623]">
                {product.nameKo}
              </h1>
              <p className="text-xs text-[#8C8379] font-serif">
                {product.nameEn}
              </p>

              <div className="pt-2 flex items-baseline gap-3">
                <span className="text-2xl font-serif font-bold text-[#2B2623] tabular-nums">
                  {product.price.toLocaleString()}원
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-[#A59D94] line-through tabular-nums">
                    {product.originalPrice.toLocaleString()}원
                  </span>
                )}
              </div>
            </div>

            {/* Aesthetic Prose */}
            <div className="space-y-2 text-xs text-[#6E665E] leading-relaxed pt-2 border-t border-[#F0EBE1]">
              <p>{product.description}</p>
              <p className="text-[#2B2623] font-serif italic">"{product.aestheticStory}"</p>
            </div>

            {/* Handmade Specs Table */}
            <div className="bg-[#FAF7F2] rounded-xl p-4 border border-[#E8E2D7] text-xs space-y-2">
              <span className="font-semibold text-[#2B2623] block text-[11px] uppercase tracking-wider text-[#A06245]">
                수공예 명세 (Specifications)
              </span>
              <div className="grid grid-cols-2 gap-y-1.5 gap-x-2 text-[11px] text-[#6E665E]">
                <div>
                  <span className="text-[#8C8379]">소재(태토):</span> {product.clayNameKo}
                </div>
                <div>
                  <span className="text-[#8C8379]">유약 마감:</span> {product.glazeNameKo}
                </div>
                <div>
                  <span className="text-[#8C8379]">가마 소성:</span> {product.kilnFiringKo}
                </div>
                <div>
                  <span className="text-[#8C8379]">규격:</span> {product.dimensions}
                </div>
                <div>
                  <span className="text-[#8C8379]">식기세척기:</span> {product.dishWasherSafe ? '사용 가능' : '손세척 권장'}
                </div>
                <div>
                  <span className="text-[#8C8379]">전자레인지:</span> {product.microwaveSafe ? '사용 가능' : '사용 불가'}
                </div>
              </div>
            </div>

            {/* Gift Wrap Packaging Option Section */}
            <div className="p-4 bg-[#F8F5EE] rounded-xl border border-[#E8E2D7] space-y-3">
              <label className="flex items-start justify-between cursor-pointer select-none">
                <div className="flex items-start gap-2.5">
                  <input
                    type="checkbox"
                    checked={withGiftWrap}
                    onChange={(e) => setWithGiftWrap(e.target.checked)}
                    className="mt-0.5 rounded border-[#D5CEC0] text-[#A06245] focus:ring-[#A06245]"
                  />
                  <div>
                    <span className="text-xs font-semibold text-[#2B2623] flex items-center gap-1.5">
                      <Gift className="w-3.5 h-3.5 text-[#A06245]" />
                      <span>친환경 한지·오동나무 선물 포장 추가</span>
                    </span>
                    <p className="text-[11px] text-[#6E665E] mt-0.5">
                      닥종이 한지와 천연 삼베끈, 도예가 친필 축하 메시지 카드 포함
                    </p>
                  </div>
                </div>
                <span className="text-xs font-medium text-[#A06245] tabular-nums shrink-0">
                  +{GIFT_WRAP_FEE.toLocaleString()}원
                </span>
              </label>

              {withGiftWrap && (
                <div className="pt-2 border-t border-[#E8E2D7]">
                  <label className="text-[11px] text-[#6E665E] block mb-1">
                    친필 메시지 카드 각인 문구 (선택)
                  </label>
                  <input
                    type="text"
                    value={giftCardMessage}
                    onChange={(e) => setGiftCardMessage(e.target.value)}
                    placeholder="예: 따뜻한 시작을 축하하며, 맑은 온기를 전합니다."
                    maxLength={35}
                    className="w-full text-xs p-2 rounded-lg bg-white border border-[#E8E2D7] focus:border-[#A06245] focus:outline-none"
                  />
                </div>
              )}
            </div>

            {/* Quantity Stepper & Price Calculation */}
            <div className="flex items-center justify-between pt-2">
              <span className="text-xs font-medium text-[#6E665E]">주문 수량</span>
              <div className="flex items-center border border-[#E8E2D7] rounded-lg bg-[#FAF7F2]">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1.5 text-xs text-[#6E665E] hover:text-[#2B2623] cursor-pointer"
                >
                  -
                </button>
                <span className="px-3 text-xs font-bold tabular-nums text-[#2B2623]">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(Math.min(product.inStock, quantity + 1))}
                  className="px-3 py-1.5 text-xs text-[#6E665E] hover:text-[#2B2623] cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>

            {/* Total calculation line */}
            <div className="pt-3 border-t border-[#F0EBE1] flex items-center justify-between">
              <span className="text-xs text-[#6E665E]">합계 금액</span>
              <span className="text-xl font-serif font-bold text-[#A06245] tabular-nums">
                {currentTotalPrice.toLocaleString()}원
              </span>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 pt-2">
              <button
                onClick={() => onAddToCart(product, quantity, withGiftWrap, giftCardMessage)}
                className="w-full py-3.5 px-4 bg-[#FAF7F2] hover:bg-[#F0EBE1] text-[#2B2623] border border-[#2B2623] rounded-xl text-xs font-semibold tracking-wide transition-colors cursor-pointer"
              >
                온기 바구니에 담기
              </button>

              <button
                onClick={() => onDirectCheckout(product, quantity, withGiftWrap, giftCardMessage)}
                className="w-full py-3.5 px-4 bg-[#2B2623] hover:bg-[#433B36] text-[#FAF7F2] rounded-xl text-xs font-semibold tracking-wide flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md"
              >
                <span>바로 구매하기 (온기 전하기)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Trust badge */}
            <div className="flex items-center justify-center gap-2 text-[11px] text-[#8C8379] pt-1">
              <ShieldCheck className="w-4 h-4 text-[#5A6B56]" />
              <span>작가 공방 1:1 직배송 · 파손 시 100% 무상 교환</span>
            </div>
          </div>
        </div>
      </div>

      {/* Artisan Summary Card & Related Works */}
      <section className="space-y-8 pt-8 border-t border-[#E8E2D7]">
        {/* Artisan Mini Banner */}
        <div className="bg-[#F8F5EE] rounded-3xl p-6 sm:p-8 border border-[#E8E2D7] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-white border border-[#E8E2D7] flex items-center justify-center text-[#A06245] font-serif text-xl font-bold shrink-0">
              土
            </div>
            <div>
              <span className="text-xs text-[#A06245] font-serif uppercase tracking-widest block">
                Artisan Story
              </span>
              <h3 className="font-serif font-bold text-lg text-[#2B2623]">
                {artisan.nameKo} 도예가 ({artisan.studioNameKo})
              </h3>
              <p className="text-xs text-[#6E665E] mt-0.5">
                {artisan.location} · 경력 {artisan.experienceYears}년
              </p>
            </div>
          </div>

          <button
            onClick={() => onSelectArtisan(artisan.id)}
            className="px-5 py-2.5 bg-white hover:bg-[#FAF7F2] text-[#2B2623] border border-[#E8E2D7] rounded-xl text-xs font-medium transition-colors cursor-pointer shrink-0"
          >
            작가 프로필 &amp; 6단계 공방 제작기 보기
          </button>
        </div>

        {/* Related Works from this Artisan */}
        {relatedProducts.length > 0 && (
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-lg text-[#2B2623]">
              {artisan.nameKo} 도예가의 다른 작품들
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedProducts.map((relProduct: Product) => (
                <div
                  key={relProduct.id}
                  onClick={() => onSelectProduct(relProduct.id)}
                  className="bg-white rounded-xl border border-[#E8E2D7] overflow-hidden group cursor-pointer transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="aspect-4/3 overflow-hidden bg-[#FAF7F2]">
                    <CeramicVisual product={relProduct} className="w-full h-full" />
                  </div>
                  <div className="p-4 space-y-1">
                    <span className="text-[11px] text-[#8C8379] block">
                      {relProduct.clayNameKo.split(' ')[0]}
                    </span>
                    <h4 className="font-serif font-bold text-sm text-[#2B2623] truncate group-hover:text-[#A06245] transition-colors">
                      {relProduct.nameKo}
                    </h4>
                    <p className="font-serif font-bold text-sm text-[#2B2623] tabular-nums pt-1">
                      {relProduct.price.toLocaleString()}원
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

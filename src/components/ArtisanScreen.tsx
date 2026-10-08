import React, { useState } from 'react';
import { ArrowLeft, MapPin, Sparkles, BookOpen, Clock, Layers, Flame, ArrowRight, Eye } from 'lucide-react';
import { ARTISANS, PRODUCTS } from '../data/mockData';
import { Product, MakingStep } from '../types';
import { CeramicVisual } from './CeramicVisual';

interface ArtisanScreenProps {
  artisanId: string;
  onSelectArtisan: (id: string) => void;
  onSelectProduct: (productId: string) => void;
  onBackToHome: () => void;
  onAddToCart: (product: Product) => void;
}

export const ArtisanScreen: React.FC<ArtisanScreenProps> = ({
  artisanId,
  onSelectArtisan,
  onSelectProduct,
  onBackToHome,
  onAddToCart
}) => {
  const [activeStepTab, setActiveStepTab] = useState<number>(1);
  const [workCategoryFilter, setWorkCategoryFilter] = useState<string>('all');

  const currentArtisan = ARTISANS.find((a) => a.id === artisanId) || ARTISANS[0];

  const artisanProducts = PRODUCTS.filter((p) => p.artisanId === currentArtisan.id);

  const filteredArtisanProducts = artisanProducts.filter((p) => {
    if (workCategoryFilter === 'all') return true;
    return p.category === workCategoryFilter;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      {/* Back button & Artisan Switcher Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E8E2D7] pb-4">
        <button
          onClick={onBackToHome}
          className="flex items-center gap-2 text-xs font-medium text-[#6E665E] hover:text-[#2B2623] transition-colors cursor-pointer self-start"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>기획전 홈으로 돌아가기</span>
        </button>

        {/* Switch between 입점 작가들 */}
        <div className="flex items-center gap-1.5 p-1 bg-[#F0EBE1] rounded-xl self-start overflow-x-auto">
          {ARTISANS.map((a) => (
            <button
              key={a.id}
              onClick={() => {
                onSelectArtisan(a.id);
                setActiveStepTab(1);
              }}
              className={`px-3 py-1.5 text-xs rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                a.id === currentArtisan.id
                  ? 'bg-white text-[#2B2623] font-semibold shadow-xs'
                  : 'text-[#6E665E] hover:text-[#2B2623]'
              }`}
            >
              {a.nameKo} 도예가 ({a.studioNameKo.split(' ')[0]})
            </button>
          ))}
        </div>
      </div>

      {/* 1. Artisan Hero Header */}
      <section className="bg-[#F4EFE6] border border-[#E8E2D7] rounded-3xl p-6 sm:p-12 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Studio Profile Visual Plate */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-2xl p-5 border border-[#E8E2D7] shadow-lg text-center space-y-4">
              <div className="w-full aspect-4/3 rounded-xl bg-gradient-to-br from-[#EAE2D5] to-[#DFD5C6] flex flex-col items-center justify-center p-6 border border-[#D5CEC0]">
                <div className="w-20 h-20 rounded-full bg-[#FAF7F2] border border-[#C8BCAE] flex items-center justify-center text-[#A06245] font-serif text-3xl font-light shadow-inner mb-3">
                  工
                </div>
                <span className="font-serif text-sm font-bold text-[#2B2623]">
                  {currentArtisan.studioNameKo}
                </span>
                <span className="text-[11px] text-[#6E665E] font-serif mt-0.5">
                  {currentArtisan.studioNameEn}
                </span>
              </div>

              <div className="space-y-1 text-xs text-[#6E665E] pt-1">
                <div className="flex items-center justify-center gap-1.5 text-[#2B2623] font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#A06245]" />
                  <span>{currentArtisan.location}</span>
                </div>
                <p className="text-[11px] text-[#8C8379] pt-1">
                  도예 공예 외길 {currentArtisan.experienceYears}년
                </p>
              </div>
            </div>
          </div>

          {/* Narrative Overview */}
          <div className="lg:col-span-8 space-y-5">
            <div className="flex items-center gap-2 text-xs text-[#A06245] font-serif tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Artisan Studio Archive</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif text-[#2B2623] leading-tight">
              도예가 {currentArtisan.nameKo}
              <span className="text-lg text-[#6E665E] font-normal ml-3">
                {currentArtisan.nameEn}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#A06245] font-serif italic">
              "{currentArtisan.slogan}"
            </p>

            <p className="text-xs sm:text-sm text-[#6E665E] leading-relaxed max-w-2xl">
              {currentArtisan.biography}
            </p>

            {/* Quick Specs Badges */}
            <div className="pt-2 flex flex-wrap gap-4 text-xs text-[#6E665E]">
              <div className="flex items-center gap-2 bg-white/70 px-3 py-2 rounded-xl border border-[#E8E2D7]">
                <Layers className="w-4 h-4 text-[#A06245]" />
                <span>시그니처 태토: <strong>{currentArtisan.signatureClay}</strong></span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 px-3 py-2 rounded-xl border border-[#E8E2D7]">
                <Flame className="w-4 h-4 text-[#A06245]" />
                <span>가마 소성: <strong>{currentArtisan.kilnType}</strong></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Artisan Philosophy & In-Depth Interview Story */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-xs text-[#A06245] font-serif tracking-widest uppercase">
          <BookOpen className="w-4 h-4" />
          <span>Artisan Philosophy &amp; Voice</span>
        </div>

        <div className="bg-white rounded-3xl border border-[#E8E2D7] p-8 sm:p-12 space-y-6">
          <h2 className="text-2xl font-serif text-[#2B2623]">
            손끝의 호흡, 그리고 불길과의 우연한 만남
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm text-[#6E665E] leading-relaxed">
            {currentArtisan.philosophyStory.map((para, idx) => (
              <div key={idx} className="space-y-2">
                <span className="text-[#A06245] font-serif text-sm font-bold block">
                  0{idx + 1}.
                </span>
                <p>{para}</p>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-[#F0EBE1] flex items-center justify-between text-xs text-[#8C8379]">
            <span>공방 아카이브 노트: {currentArtisan.studioNotes}</span>
            <span className="font-serif text-[#2B2623]">TOHWA Artisan Records</span>
          </div>
        </div>
      </section>

      {/* 3. Making Process Gallery (6단계 제작 과정 아카이브) */}
      <section className="space-y-8">
        <div>
          <div className="flex items-center gap-2 text-xs text-[#A06245] font-serif tracking-widest uppercase mb-1">
            <Clock className="w-4 h-4" />
            <span>Handcraft Process Documentation</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#2B2623]">
            흙이 그릇이 되기까지의 여정 (6단계)
          </h2>
          <p className="text-xs sm:text-sm text-[#6E665E] mt-1">
            수비부터 재벌 소성까지, 공예가의 긴 인내와 시간을 엿보는 공방 아카이브입니다.
          </p>
        </div>

        {/* Stepper Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {currentArtisan.makingSteps.map((step: MakingStep) => (
            <button
              key={step.stepNumber}
              onClick={() => setActiveStepTab(step.stepNumber)}
              className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                activeStepTab === step.stepNumber
                  ? 'bg-[#2B2623] text-[#FAF7F2] border-[#2B2623] shadow-md'
                  : 'bg-white text-[#6E665E] border-[#E8E2D7] hover:bg-[#F8F5EE]'
              }`}
            >
              <span className={`text-[11px] block font-mono ${activeStepTab === step.stepNumber ? 'text-[#D4AF37]' : 'text-[#A06245]'}`}>
                STEP 0{step.stepNumber}
              </span>
              <h4 className="text-xs font-semibold mt-0.5 truncate">
                {step.titleKo.split(' ')[0]}
              </h4>
            </button>
          ))}
        </div>

        {/* Active Step Detailed Card */}
        {(() => {
          const activeStep = currentArtisan.makingSteps.find((s) => s.stepNumber === activeStepTab) || currentArtisan.makingSteps[0];
          return (
            <div className="bg-[#FAF7F2] border border-[#E8E2D7] rounded-3xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-[#E8E2D7] text-center space-y-4">
                <div className="w-full aspect-4/3 rounded-xl bg-gradient-to-br from-[#EDE5D8] to-[#DDD2C0] flex flex-col items-center justify-center p-6 border border-[#D5CEC0]">
                  <span className="text-xs font-mono text-[#A06245] tracking-widest uppercase">
                    STEP 0{activeStep.stepNumber} ARCHIVE
                  </span>
                  <h3 className="text-lg font-serif font-bold text-[#2B2623] mt-2">
                    {activeStep.titleKo}
                  </h3>
                  <span className="text-xs text-[#6E665E] font-serif mt-1">
                    {activeStep.titleEn}
                  </span>
                </div>
                <div className="bg-[#F8F5EE] p-3 rounded-xl text-left border border-[#E8E2D7]/70">
                  <span className="text-[11px] text-[#A06245] font-semibold block">핵심 포인트</span>
                  <p className="text-xs text-[#2B2623] mt-0.5">{activeStep.keyAspect}</p>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs text-[#A06245] font-serif tracking-widest uppercase">
                  공예가의 손끝 기록
                </span>
                <h3 className="text-2xl font-serif text-[#2B2623]">
                  {activeStep.titleKo}
                </h3>
                <p className="text-sm text-[#6E665E] leading-relaxed">
                  {activeStep.description}
                </p>

                <div className="pt-4 flex items-center gap-3">
                  {activeStepTab > 1 && (
                    <button
                      onClick={() => setActiveStepTab(activeStepTab - 1)}
                      className="px-4 py-2 bg-white border border-[#E8E2D7] text-xs text-[#2B2623] rounded-lg hover:bg-[#F0EBE1] cursor-pointer"
                    >
                      이전 단계
                    </button>
                  )}
                  {activeStepTab < 6 && (
                    <button
                      onClick={() => setActiveStepTab(activeStepTab + 1)}
                      className="px-4 py-2 bg-[#2B2623] text-xs text-[#FAF7F2] rounded-lg hover:bg-[#433B36] cursor-pointer"
                    >
                      다음 단계로
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })()}
      </section>

      {/* 4. Artisan's Works Lineup (작가의 출품작 라인업) */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E8E2D7] pb-4">
          <div>
            <h2 className="text-2xl font-serif text-[#2B2623]">
              {currentArtisan.nameKo} 도예가의 출품작 ({filteredArtisanProducts.length})
            </h2>
            <p className="text-xs text-[#6E665E] mt-0.5">
              공방에서 1:1로 정성껏 포장하여 발송되는 한정 기물 라인업
            </p>
          </div>

          <div className="flex items-center gap-1.5 p-1 bg-[#F0EBE1] rounded-xl self-start">
            {[
              { id: 'all', label: '전체' },
              { id: 'tableware', label: '식기' },
              { id: 'tea', label: '다기' },
              { id: 'vase_object', label: '화병·오브제' }
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setWorkCategoryFilter(f.id)}
                className={`px-3 py-1.5 text-xs rounded-lg transition-colors cursor-pointer ${
                  workCategoryFilter === f.id
                    ? 'bg-white text-[#2B2623] font-semibold shadow-xs'
                    : 'text-[#6E665E] hover:text-[#2B2623]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Works Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredArtisanProducts.map((product: Product) => (
            <div
              key={product.id}
              onClick={() => onSelectProduct(product.id)}
              className="group bg-white rounded-2xl border border-[#E8E2D7] overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
            >
              <div className="relative w-full aspect-4/3 overflow-hidden bg-[#FAF7F2]">
                <CeramicVisual product={product} className="w-full h-full" />
                {product.isLimited && (
                  <span className="absolute bottom-3 left-3 z-10 text-[11px] text-[#2B2623] bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded text-xs font-serif">
                    소량 한정 {product.inStock}점
                  </span>
                )}
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1">
                  <span className="text-[11px] text-[#8C8379] block">
                    {product.clayNameKo.split(' ')[0]} · {product.kilnFiringKo.split(' ')[0]}
                  </span>
                  <h4 className="font-serif font-bold text-base text-[#2B2623] group-hover:text-[#A06245] transition-colors truncate">
                    {product.nameKo}
                  </h4>
                  <p className="text-xs text-[#6E665E] line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F0EBE1] flex items-center justify-between">
                  <span className="font-serif text-lg font-bold text-[#2B2623] tabular-nums">
                    {product.price.toLocaleString()}원
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart(product);
                      }}
                      className="px-3 py-1.5 bg-[#FAF7F2] hover:bg-[#2B2623] text-[#2B2623] hover:text-[#FAF7F2] border border-[#E8E2D7] rounded-lg text-xs font-medium transition-colors cursor-pointer"
                    >
                      바구니 담기
                    </button>
                    <span className="text-xs text-[#A06245] flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                      <Eye className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

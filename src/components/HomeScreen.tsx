import React, { useState } from 'react';
import { ArrowRight, Sparkles, BookOpen, Layers, Flame, ShieldCheck, Heart, Eye } from 'lucide-react';
import { PRODUCTS, ARTISANS, CURATED_COLLECTIONS } from '../data/mockData';
import { Product, CuratedCollection } from '../types';
import { CeramicVisual } from './CeramicVisual';
import { WabiSabiNotice } from './WabiSabiNotice';

interface HomeScreenProps {
  onSelectProduct: (productId: string) => void;
  onSelectArtisan: (artisanId: string) => void;
  onAddToCart: (product: Product) => void;
  onOpenMaterialGuide: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onSelectProduct,
  onSelectArtisan,
  onAddToCart,
  onOpenMaterialGuide
}) => {
  const [selectedCollectionId, setSelectedCollectionId] = useState<string>(CURATED_COLLECTIONS[0].id);
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [likedProductIds, setLikedProductIds] = useState<Set<string>>(new Set());

  const spotlightArtisan = ARTISANS[0]; // Yoon Seo-jin (이천 도예촌)

  const activeCollection = CURATED_COLLECTIONS.find((c) => c.id === selectedCollectionId) || CURATED_COLLECTIONS[0];

  const collectionProducts = PRODUCTS.filter((p) =>
    activeCollection.productIds.includes(p.id)
  );

  const filteredCatalogProducts = PRODUCTS.filter((p) => {
    if (categoryFilter === 'all') return true;
    return p.category === categoryFilter;
  });

  const toggleLike = (e: React.MouseEvent, productId: string) => {
    e.stopPropagation();
    setLikedProductIds((prev) => {
      const next = new Set(prev);
      if (next.has(productId)) next.delete(productId);
      else next.add(productId);
      return next;
    });
  };

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-[#F4EFE6] border-b border-[#E8E2D7]">
        {/* Subtle decorative background ambience */}
        <div className="absolute inset-0 opacity-40 pointer-events-none bg-[radial-gradient(#C8BCAE_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-xs text-[#A06245] font-serif tracking-widest uppercase">
                <span className="w-6 h-px bg-[#A06245]" />
                <span>Handcrafted Ceramic Curation</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-serif text-[#2B2623] leading-[1.25] tracking-tight text-balance">
                흙과 손끝이 빚어낸<br />
                <span className="text-[#A06245] italic font-serif">일상의 온기</span>, 토화 (土話)
              </h1>

              <p className="text-sm sm:text-base text-[#6E665E] leading-relaxed max-w-xl text-balance">
                대량 생산 공산품의 차가운 균일함에서 벗어나, 가마 속 불길과 장인의 손끝이 빚어낸 
                비정형의 미학(Wabi-Sabi)을 전합니다. 당신의 식탁과 고요한 일상에 따뜻한 흙의 숨결을 들이세요.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => {
                    const el = document.getElementById('curated-collections');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 bg-[#2B2623] hover:bg-[#433B36] text-[#FAF7F2] rounded-xl text-xs font-medium tracking-wide flex items-center gap-2 transition-all cursor-pointer shadow-md"
                >
                  <span>이달의 기획 컬렉션 둘러보기</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onSelectArtisan(spotlightArtisan.id)}
                  className="px-5 py-3.5 bg-white/80 hover:bg-white text-[#2B2623] border border-[#E8E2D7] rounded-xl text-xs font-medium tracking-wide transition-all cursor-pointer"
                >
                  이달의 공예가 이야기
                </button>
              </div>

              {/* Editorial Trust Footnote */}
              <div className="pt-4 border-t border-[#E8E2D7]/80 flex items-center gap-6 text-xs text-[#8C8379]">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#5A6B56]" />
                  <span>100% 핸드메이드 보증</span>
                </div>
                <span aria-hidden="true">·</span>
                <div>
                  <span>파손 없는 에코 한지 패키징</span>
                </div>
                <span aria-hidden="true">·</span>
                <div>
                  <span>작가 1:1 직송</span>
                </div>
              </div>
            </div>

            {/* Right Hero Visual Showcase (Craft Highlight) */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md bg-white rounded-2xl p-4 sm:p-5 shadow-xl border border-[#E8E2D7]">
                <div className="w-full aspect-4/3 rounded-xl overflow-hidden relative">
                  <CeramicVisual 
                    product={PRODUCTS[0]} 
                    className="w-full h-full" 
                    showTextureBadge={true} 
                  />
                  <div className="absolute top-3 right-3 z-20">
                    <button
                      onClick={(e) => toggleLike(e, PRODUCTS[0].id)}
                      className="p-2 bg-white/80 backdrop-blur-sm rounded-full text-[#6E665E] hover:text-[#A06245] shadow-xs cursor-pointer transition-colors"
                      title="관심 작품 담기"
                    >
                      <Heart 
                        className={`w-4 h-4 ${likedProductIds.has(PRODUCTS[0].id) ? 'fill-[#A06245] text-[#A06245]' : ''}`} 
                      />
                    </button>
                  </div>
                </div>

                <div className="pt-4 space-y-2">
                  <div className="flex items-center justify-between text-xs text-[#8C8379]">
                    <span>도예가 윤서진 · YUN Studio</span>
                    <span className="text-[#A06245] font-medium">한정 소량 제작</span>
                  </div>
                  <h3 
                    onClick={() => onSelectProduct(PRODUCTS[0].id)}
                    className="font-serif font-bold text-base text-[#2B2623] hover:text-[#A06245] transition-colors cursor-pointer truncate"
                  >
                    {PRODUCTS[0].nameKo}
                  </h3>
                  <div className="flex items-center justify-between pt-1">
                    <span className="font-serif text-lg font-bold text-[#2B2623] tabular-nums">
                      {PRODUCTS[0].price.toLocaleString()}원
                    </span>
                    <button
                      onClick={() => onAddToCart(PRODUCTS[0])}
                      className="px-3.5 py-1.5 bg-[#FAF7F2] hover:bg-[#2B2623] text-[#2B2623] hover:text-[#FAF7F2] border border-[#E8E2D7] rounded-lg text-xs font-medium transition-colors cursor-pointer"
                    >
                      바구니 담기
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Curated Seasonal Collections */}
      <section id="curated-collections" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E8E2D7] pb-6">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#A06245] font-serif tracking-widest uppercase mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated Seasonal Exhibitions</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#2B2623] text-balance">
              이달의 테마 기획전
            </h2>
            <p className="text-xs sm:text-sm text-[#6E665E] mt-1">
              계절의 변화와 쓰임의 미학을 담아 공예 큐레이터가 엄선한 셀렉션
            </p>
          </div>

          {/* Segmented collection selector buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-[#F0EBE1] rounded-xl self-start overflow-x-auto max-w-full">
            {CURATED_COLLECTIONS.map((col: CuratedCollection) => (
              <button
                key={col.id}
                onClick={() => setSelectedCollectionId(col.id)}
                className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  selectedCollectionId === col.id
                    ? 'bg-white text-[#2B2623] shadow-xs font-semibold'
                    : 'text-[#6E665E] hover:text-[#2B2623]'
                }`}
              >
                {col.titleKo.split(' ')[0]} {col.titleKo.split(' ')[1]}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Collection Header Banner */}
        <div className="p-6 bg-[#F8F5EE] border border-[#E8E2D7] rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-lg font-serif font-bold text-[#2B2623]">
              {activeCollection.titleKo}
            </h3>
            <p className="text-xs text-[#6E665E] leading-relaxed max-w-2xl">
              {activeCollection.themeDescription}
            </p>
          </div>
          <div className="text-xs text-[#A06245] italic font-serif shrink-0 border-l border-[#E8E2D7] pl-4 hidden md:block max-w-xs">
            "{activeCollection.curatorNote}"
          </div>
        </div>

        {/* Collection Products Grid (3 Columns Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {collectionProducts.map((product: Product) => (
            <div
              key={product.id}
              onClick={() => onSelectProduct(product.id)}
              className="group bg-white rounded-2xl border border-[#E8E2D7] overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
            >
              {/* Product Visual Area */}
              <div className="relative w-full aspect-4/3 overflow-hidden bg-[#FAF7F2]">
                <CeramicVisual product={product} className="w-full h-full" />
                
                {/* Like Button */}
                <button
                  onClick={(e) => toggleLike(e, product.id)}
                  className="absolute top-3 right-3 z-20 p-2 bg-white/80 backdrop-blur-sm rounded-full text-[#6E665E] hover:text-[#A06245] transition-colors cursor-pointer"
                  title="관심 작품 담기"
                >
                  <Heart
                    className={`w-4 h-4 ${likedProductIds.has(product.id) ? 'fill-[#A06245] text-[#A06245]' : ''}`}
                  />
                </button>

                {/* Exclusive or Limited unboxed kicker */}
                {product.isLimited && (
                  <span className="absolute bottom-3 left-3 z-10 text-[11px] text-[#2B2623] bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded text-xs font-serif">
                    한정 소량 {product.inStock}점
                  </span>
                )}
              </div>

              {/* Product Info Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs text-[#8C8379]">
                    <span>{product.clayNameKo.split(' ')[0]}</span>
                    <span aria-hidden="true">·</span>
                    <span>{product.glazeNameKo.split(' ')[0]}</span>
                  </div>
                  <h4 className="font-serif font-bold text-base text-[#2B2623] group-hover:text-[#A06245] transition-colors line-clamp-1">
                    {product.nameKo}
                  </h4>
                  <p className="text-xs text-[#6E665E] line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F0EBE1] flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif text-lg font-bold text-[#2B2623] tabular-nums">
                      {product.price.toLocaleString()}원
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-[#A59D94] line-through tabular-nums">
                        {product.originalPrice.toLocaleString()}원
                      </span>
                    )}
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart(product);
                    }}
                    className="px-3 py-1.5 bg-[#FAF7F2] hover:bg-[#2B2623] text-[#2B2623] hover:text-[#FAF7F2] border border-[#E8E2D7] rounded-lg text-xs font-medium transition-colors cursor-pointer"
                  >
                    담기
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Featured Artisan Spotlight (이달의 공예가 조명) */}
      <section className="bg-[#2B2623] text-[#FAF7F2] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visual Portrait / Studio Render */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-[#4A423D] bg-[#3B3430] p-6 text-center space-y-4">
                {/* Stylized Potter Workshop Silhouette Visual */}
                <div className="w-full aspect-4/3 rounded-xl bg-gradient-to-br from-[#4A3F38] to-[#2B2623] flex items-center justify-center p-6 border border-[#5A4F46] relative overflow-hidden">
                  <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#FAF7F2_1px,transparent_1px)] [background-size:16px_16px]" />
                  <div className="text-center space-y-3 relative z-10">
                    <div className="w-20 h-20 mx-auto rounded-full border border-[#D5CEC0]/40 flex items-center justify-center text-[#FAF7F2] font-serif text-2xl font-light">
                      土
                    </div>
                    <span className="text-xs text-[#D5CEC0] tracking-widest uppercase block font-serif">
                      YUN STUDIO ARCHIVE
                    </span>
                    <p className="text-xs text-[#A59D94]">경기 이천 신둔면 도예촌 작업실</p>
                  </div>
                </div>

                <div className="text-left space-y-1">
                  <span className="text-[11px] text-[#C4B59F] uppercase tracking-wider block">
                    {spotlightArtisan.studioNameKo} · 경력 {spotlightArtisan.experienceYears}년
                  </span>
                  <h3 className="text-lg font-serif font-bold text-[#FAF7F2]">
                    도예가 {spotlightArtisan.nameKo}
                  </h3>
                  <p className="text-xs text-[#A59D94] italic font-serif">
                    "{spotlightArtisan.slogan}"
                  </p>
                </div>
              </div>
            </div>

            {/* Narrative & Mini Interview */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-xs text-[#D4AF37] font-serif tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Featured Artisan of the Month</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-serif text-[#FAF7F2] leading-tight text-balance">
                "완벽한 원형보다는<br />
                손끝이 흙과 마주한 흔적을 남깁니다"
              </h2>

              <div className="space-y-3 text-xs sm:text-sm text-[#D5CEC0] leading-relaxed">
                <p>
                  {spotlightArtisan.biography}
                </p>
                <p className="border-l-2 border-[#A06245] pl-4 text-[#E2D8C9] italic font-serif">
                  "흙은 살아있는 생명체와 같습니다. 물을 머금었을 때의 부드러움, 손을 댔을 때 남는 지문,
                  가마 속에서 1,260도의 불길을 견뎌내며 줄어드는 수축의 과정까지 모두가 도자기의 일부입니다."
                </p>
              </div>

              {/* 3 Key Craft Signatures */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                <div className="p-3 bg-[#38312C] rounded-xl border border-[#4D443E]">
                  <span className="text-[#A59D94] block text-[11px] mb-0.5">사용하는 흙</span>
                  <span className="font-medium text-[#FAF7F2]">{spotlightArtisan.signatureClay}</span>
                </div>
                <div className="p-3 bg-[#38312C] rounded-xl border border-[#4D443E]">
                  <span className="text-[#A59D94] block text-[11px] mb-0.5">소성 방식</span>
                  <span className="font-medium text-[#FAF7F2]">{spotlightArtisan.kilnType.split(' ')[0]}</span>
                </div>
                <div className="p-3 bg-[#38312C] rounded-xl border border-[#4D443E]">
                  <span className="text-[#A59D94] block text-[11px] mb-0.5">대표 기법</span>
                  <span className="font-medium text-[#FAF7F2]">조선 분청 덤벙 기법</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onSelectArtisan(spotlightArtisan.id)}
                  className="px-6 py-3 bg-[#A06245] hover:bg-[#8A5239] text-white rounded-xl text-xs font-medium tracking-wide flex items-center gap-2 transition-colors cursor-pointer shadow-md"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>윤서진 도예가 공방 철학 &amp; 제작 과정 아카이브 읽기</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Complete Marketplace Catalog with Category Filtering */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E8E2D7] pb-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-serif text-[#2B2623]">
              토화 출품작 전체 둘러보기
            </h2>
            <p className="text-xs text-[#6E665E] mt-0.5">
              공예가가 손수 빚어 입점한 모든 도자기 작품들
            </p>
          </div>

          {/* Interactive filter segmented control */}
          <div className="flex items-center gap-1.5 p-1 bg-[#F0EBE1] rounded-xl overflow-x-auto">
            {[
              { id: 'all', label: '전체 작품' },
              { id: 'tableware', label: '식기 (Tableware)' },
              { id: 'tea', label: '다기 (Tea)' },
              { id: 'vase_object', label: '화병·오브제' },
              { id: 'lighting', label: '조명' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategoryFilter(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                  categoryFilter === cat.id
                    ? 'bg-white text-[#2B2623] shadow-xs font-semibold'
                    : 'text-[#6E665E] hover:text-[#2B2623]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCatalogProducts.map((product: Product) => (
            <div
              key={product.id}
              onClick={() => onSelectProduct(product.id)}
              className="group bg-white rounded-xl border border-[#E8E2D7] overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer"
            >
              <div className="relative w-full aspect-4/3 overflow-hidden bg-[#FAF7F2]">
                <CeramicVisual product={product} className="w-full h-full" />
                <button
                  onClick={(e) => toggleLike(e, product.id)}
                  className="absolute top-2.5 right-2.5 z-20 p-1.5 bg-white/80 backdrop-blur-sm rounded-full text-[#6E665E] hover:text-[#A06245] transition-colors cursor-pointer"
                >
                  <Heart
                    className={`w-3.5 h-3.5 ${likedProductIds.has(product.id) ? 'fill-[#A06245] text-[#A06245]' : ''}`}
                  />
                </button>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <span className="text-[11px] text-[#8C8379] block">
                    {product.clayNameKo.split(' ')[0]}
                  </span>
                  <h4 className="font-serif font-bold text-sm text-[#2B2623] group-hover:text-[#A06245] transition-colors truncate mt-0.5">
                    {product.nameKo}
                  </h4>
                  <p className="text-[11px] text-[#6E665E] line-clamp-1 mt-1">
                    {product.aestheticStory}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#F0EBE1] flex items-center justify-between">
                  <span className="font-serif font-bold text-sm text-[#2B2623] tabular-nums">
                    {product.price.toLocaleString()}원
                  </span>
                  <span className="text-[11px] text-[#A06245] flex items-center gap-1 group-hover:underline">
                    <span>상세보기</span>
                    <Eye className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Craftsmanship & Material Guide (차별화 섹션) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F2] border border-[#E8E2D7] rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs text-[#A06245] font-serif tracking-widest uppercase block">
              Essential Guide to Ceramics
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#2B2623]">
              흙과 가마, 그리고 유약이 빚어내는 차이
            </h2>
            <p className="text-xs sm:text-sm text-[#6E665E] leading-relaxed">
              도자기를 고를 때 백자토, 분청토, 옹기토의 촉감 차이를 알고 계신가요? 
              1,260도 장작가마에서 참나무 재와 불꽃이 남긴 흔적을 알면 도자기를 만지는 손길이 더욱 특별해집니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="p-5 bg-white rounded-2xl border border-[#E8E2D7]">
              <div className="w-9 h-9 rounded-lg bg-[#F8F5EE] flex items-center justify-center text-[#A06245] mb-3">
                <Layers className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-sm text-[#2B2623] mb-1">
                흙의 종류 (백자·분청·옹기)
              </h4>
              <p className="text-xs text-[#6E665E] leading-relaxed">
                맑고 청초한 고령토 백자부터 흑점과 모래 알갱이의 질감이 살아 숨 쉬는 산청 분청토까지.
              </p>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-[#E8E2D7]">
              <div className="w-9 h-9 rounded-lg bg-[#F8F5EE] flex items-center justify-center text-[#A06245] mb-3">
                <Flame className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-sm text-[#2B2623] mb-1">
                가마 소성 (환원 &amp; 장작가마)
              </h4>
              <p className="text-xs text-[#6E665E] leading-relaxed">
                가마 내부 산소를 조절하여 신비로운 푸른 회색빛과 오묘한 요변(窯變)을 이끌어내는 전통 불길.
              </p>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-[#E8E2D7]">
              <div className="w-9 h-9 rounded-lg bg-[#F8F5EE] flex items-center justify-center text-[#A06245] mb-3">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-sm text-[#2B2623] mb-1">
                천연 재유 (자연의 잿물)
              </h4>
              <p className="text-xs text-[#6E665E] leading-relaxed">
                화학 안료를 배제하고 지리산 참나무 재를 정제해 입힌 깊고 그윽한 올리브 브라운 피막.
              </p>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              onClick={onOpenMaterialGuide}
              className="px-5 py-2.5 bg-[#2B2623] hover:bg-[#433B36] text-[#FAF7F2] rounded-xl text-xs font-medium flex items-center gap-2 transition-colors cursor-pointer"
            >
              <span>흙과 가마 상세 가이드 읽어보기</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. Wabi-Sabi Notice & Customer Journal */}
      <section id="journal-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <WabiSabiNotice compact={false} />

        {/* Customer Journal Feed */}
        <div className="pt-6 border-t border-[#E8E2D7] space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs text-[#A06245] font-serif tracking-widest uppercase block mb-0.5">
                Journal &amp; Everyday Moments
              </span>
              <h3 className="text-xl font-serif text-[#2B2623]">
                도자기를 곁들인 일상의 풍경
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-2xl border border-[#E8E2D7] space-y-3">
              <div className="flex items-center gap-2 text-xs text-[#8C8379]">
                <span>컬렉터 김민주 님</span>
                <span aria-hidden="true">·</span>
                <span>비정형 분청 오벌 플레이트</span>
              </div>
              <p className="text-xs text-[#2B2623] font-serif leading-relaxed italic">
                "아침마다 사과와 치즈를 툭 올려두는데, 그릇의 손맛 곡선 덕분에 그저 평범한 식사가 전시회 테이블처럼 따뜻해집니다."
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#E8E2D7] space-y-3">
              <div className="flex items-center gap-2 text-xs text-[#8C8379]">
                <span>티 소믈리에 박진우 님</span>
                <span aria-hidden="true">·</span>
                <span>자연 재유 2인 다기 세트</span>
              </div>
              <p className="text-xs text-[#2B2623] font-serif leading-relaxed italic">
                "차를 따를 때 물줄기가 한 방울도 튀지 않고 단정하게 끊어집니다. 찻잔을 손으로 감싸 쥐었을 때 흙의 온도가 마음에 와닿습니다."
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#E8E2D7] space-y-3">
              <div className="flex items-center gap-2 text-xs text-[#8C8379]">
                <span>인테리어 디자이너 이수연 님</span>
                <span aria-hidden="true">·</span>
                <span>달항아리 미니 오브제 화병</span>
              </div>
              <p className="text-xs text-[#2B2623] font-serif leading-relaxed italic">
                "완벽한 구형이 아니라 위아래 이음매가 미세하게 살아있는 백자의 품이 참 좋습니다. 현관 콘솔 위에 올려두니 집안의 공기가 맑아집니다."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

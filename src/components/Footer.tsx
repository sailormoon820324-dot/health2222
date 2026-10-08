import React from 'react';
import { ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { ScreenType } from '../types';

interface FooterProps {
  onNavigate: (screen: ScreenType, artisanId?: string) => void;
  onOpenMaterialGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenMaterialGuide }) => {
  return (
    <footer className="bg-[#F4EFE6] border-t border-[#E8E2D7] text-[#2B2623] pt-14 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Upper Editorial Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-[#E8E2D7]">
          {/* Col 1: Brand & Philosophy */}
          <div className="space-y-3 md:col-span-1">
            <span className="text-xl font-serif tracking-widest text-[#2B2623] block">
              TOHWA | 土話
            </span>
            <p className="text-xs text-[#6E665E] leading-relaxed">
              자연의 흙과 작가의 손끝이 빚어낸 일상의 온기를 전하는 미니멀 핸드메이드 도자기 큐레이션 마켓플레이스.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#8C8379] pt-2">
              <ShieldCheck className="w-4 h-4 text-[#5A6B56]" />
              <span>100% 안전 포장 파손 보증제</span>
            </div>
          </div>

          {/* Col 2: Collections */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-[#2B2623] uppercase tracking-wider">
              기획 컬렉션
            </h4>
            <ul className="text-xs text-[#6E665E] space-y-2">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-[#2B2623] transition-colors cursor-pointer">
                  비정형 백자 &amp; 분청 식기전
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-[#2B2623] transition-colors cursor-pointer">
                  사계(四季)를 담은 다기 모음
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-[#2B2623] transition-colors cursor-pointer">
                  달항아리 &amp; 오브제 화병
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-[#2B2623] transition-colors cursor-pointer">
                  온기 머금은 토기 무드 조명
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Artisans & Guide */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-[#2B2623] uppercase tracking-wider">
              도예가 &amp; 공예 철학
            </h4>
            <ul className="text-xs text-[#6E665E] space-y-2">
              <li>
                <button onClick={() => onNavigate('artisan', 'artisan_yoon')} className="hover:text-[#2B2623] transition-colors cursor-pointer">
                  도예가 윤서진 (이천 윤 스튜디오)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('artisan', 'artisan_han')} className="hover:text-[#2B2623] transition-colors cursor-pointer">
                  도예가 한지원 (밀양 지원요)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('artisan', 'artisan_bae')} className="hover:text-[#2B2623] transition-colors cursor-pointer">
                  도예가 배도현 (부안 도현가마)
                </button>
              </li>
              <li>
                <button onClick={onOpenMaterialGuide} className="hover:text-[#2B2623] transition-colors cursor-pointer text-[#A06245]">
                  흙과 가마의 가이드 보기
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Trust & Packaging Promise */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-[#2B2623] uppercase tracking-wider">
              토화의 배려
            </h4>
            <div className="p-3 bg-white/70 rounded-xl border border-[#E8E2D7] text-xs text-[#6E665E] space-y-1.5">
              <span className="font-semibold text-[#2B2623] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#A06245]" />
                한지 친환경 포장
              </span>
              <p className="text-[11px] leading-relaxed">
                비닐 뽁뽁이 대신 100% 생분해 종이 완충재와 닥종이 한지, 천연 삼베끈으로 품격 있게 정성껏 포장하여 발송합니다.
              </p>
            </div>
          </div>
        </div>

        {/* Lower Legal & Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8C8379] gap-4">
          <div className="flex items-center gap-2">
            <span>© 2026 TOHWA (土話) Curation Co. All rights reserved.</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              Handmade with <Heart className="w-3 h-3 text-[#A06245] fill-[#A06245]" /> for slow living
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span>이용약관</span>
            <span>개인정보처리방침</span>
            <span>작가 입점 문의: artisan@tohwa.craft</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

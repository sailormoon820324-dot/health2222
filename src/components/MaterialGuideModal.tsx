import React, { useState } from 'react';
import { X, Flame, Layers, Sparkles, CheckCircle2 } from 'lucide-react';
import { MATERIAL_GUIDE } from '../data/mockData';

interface MaterialGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MaterialGuideModal: React.FC<MaterialGuideModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'clay' | 'kiln' | 'glaze'>('clay');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/45 backdrop-blur-xs" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-[#FAF7F2] rounded-2xl shadow-2xl border border-[#E8E2D7] overflow-hidden z-10 text-[#2B2623]">
        {/* Header */}
        <div className="p-6 bg-[#F8F5EE] border-b border-[#E8E2D7] flex items-center justify-between">
          <div>
            <span className="text-xs text-[#A06245] font-serif tracking-widest uppercase block mb-1">
              Craftsmanship &amp; Heritage
            </span>
            <h3 className="text-xl font-serif font-bold text-[#2B2623]">흙과 가마의 대화 (土話)</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#6E665E] hover:text-[#2B2623] rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab selection (Interactive segmented button control) */}
        <div className="px-6 pt-4 border-b border-[#E8E2D7] flex gap-2 bg-[#FAF7F2]">
          <button
            onClick={() => setActiveTab('clay')}
            className={`pb-3 px-3 text-xs font-semibold flex items-center gap-2 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'clay' ? 'border-[#A06245] text-[#A06245]' : 'border-transparent text-[#6E665E] hover:text-[#2B2623]'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>흙의 종류 (점토)</span>
          </button>
          <button
            onClick={() => setActiveTab('kiln')}
            className={`pb-3 px-3 text-xs font-semibold flex items-center gap-2 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'kiln' ? 'border-[#A06245] text-[#A06245]' : 'border-transparent text-[#6E665E] hover:text-[#2B2623]'
            }`}
          >
            <Flame className="w-4 h-4" />
            <span>가마 소성 (불길의 온도)</span>
          </button>
          <button
            onClick={() => setActiveTab('glaze')}
            className={`pb-3 px-3 text-xs font-semibold flex items-center gap-2 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'glaze' ? 'border-[#A06245] text-[#A06245]' : 'border-transparent text-[#6E665E] hover:text-[#2B2623]'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>유약과 마감 (결의 온기)</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
          {activeTab === 'clay' && (
            <div className="space-y-4">
              <p className="text-xs text-[#6E665E] leading-relaxed">
                도자기의 첫 인상과 질감은 흙(태토)에서 출발합니다. 토화의 도예가들은 공장용 인공 가루가 아닌, 산과 강에서 채취하여 최소 한 달 이상 수비(水飛)하고 숙성시킨 자연 흙만을 고집합니다.
              </p>
              <div className="grid gap-3">
                {MATERIAL_GUIDE.clays.map((clay) => (
                  <div key={clay.nameKo} className="p-4 rounded-xl bg-white border border-[#E8E2D7] shadow-xs">
                    <div className="flex items-center justify-between mb-1.5">
                      <h4 className="text-sm font-bold font-serif text-[#2B2623]">{clay.nameKo}</h4>
                      <span className="text-[11px] text-[#A06245] bg-[#F8F5EE] px-2 py-0.5 rounded">
                        {clay.texture}
                      </span>
                    </div>
                    <p className="text-xs text-[#6E665E] leading-relaxed">{clay.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'kiln' && (
            <div className="space-y-4">
              <p className="text-xs text-[#6E665E] leading-relaxed">
                흙이 불을 견디는 소성(Firing) 과정에서 도자기는 영원한 생명을 얻습니다. 같은 흙이라도 가마의 분위기(산소 공급 여부)와 불길의 위치에 따라 완전히 다른 표정을 띱니다.
              </p>
              <div className="grid gap-3">
                {MATERIAL_GUIDE.kilns.map((kiln) => (
                  <div key={kiln.nameKo} className="p-4 rounded-xl bg-white border border-[#E8E2D7] shadow-xs">
                    <div className="flex items-center justify-between mb-1.5">
                      <h4 className="text-sm font-bold font-serif text-[#2B2623]">{kiln.nameKo}</h4>
                      <span className="text-[11px] text-[#A06245] tabular-nums font-mono font-medium">
                        {kiln.temperature}
                      </span>
                    </div>
                    <p className="text-xs text-[#6E665E] leading-relaxed">{kiln.feature}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'glaze' && (
            <div className="space-y-4">
              <p className="text-xs text-[#6E665E] leading-relaxed">
                유약은 단순히 그릇을 방수 처리하는 옷이 아닙니다. 자연 식물의 재와 돌가루가 불길 속에서 녹아내리며 빚어내는 유리질 피막입니다.
              </p>
              <div className="grid gap-3">
                {MATERIAL_GUIDE.glazes.map((glaze) => (
                  <div key={glaze.nameKo} className="p-4 rounded-xl bg-white border border-[#E8E2D7] shadow-xs">
                    <h4 className="text-sm font-bold font-serif text-[#2B2623] mb-1.5">{glaze.nameKo}</h4>
                    <p className="text-xs text-[#6E665E] leading-relaxed">{glaze.feature}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-4 p-4 rounded-xl bg-[#F4EFE6] border border-[#E8E2D7] text-xs space-y-1.5">
            <div className="flex items-center gap-1.5 font-semibold text-[#2B2623]">
              <CheckCircle2 className="w-4 h-4 text-[#5A6B56]" />
              <span>토화의 3대 친환경 공예 원칙</span>
            </div>
            <ul className="list-disc list-inside text-[#6E665E] space-y-1 pl-1 text-[11px]">
              <li>유해 중금속(납, 카드뮴) 0% 검출 안전 인증 천연 유약만 사용</li>
              <li>화학 플라스틱 완충재 대신 재생 벌집 한지와 옥수수 완충재 적용</li>
              <li>주문 후 무리한 과잉 재고 없이 도예가의 호흡에 맞춘 소량 한정 생산</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#F8F5EE] border-t border-[#E8E2D7] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#2B2623] text-[#FAF7F2] text-xs font-medium rounded-lg hover:bg-[#433B36] transition-colors cursor-pointer"
          >
            확인했습니다
          </button>
        </div>
      </div>
    </div>
  );
};

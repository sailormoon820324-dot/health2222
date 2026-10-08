import React, { useState } from 'react';
import { Info, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';

export const WabiSabiNotice: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const [expanded, setExpanded] = useState(!compact);

  return (
    <div className="bg-[#F8F5EE] border border-[#E8E2D7] rounded-xl p-4 sm:p-5 text-[#2B2623] transition-all">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#EAE2D5] flex items-center justify-center text-[#A06245] shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-semibold tracking-tight text-[#2B2623] flex items-center gap-2">
              <span>수공예 도자기 고유의 아름다움 (Wabi-Sabi)</span>
              <span className="text-[11px] text-[#A06245] font-normal border border-[#A06245]/30 rounded px-1.5 py-0.2">단 하나뿐인 기물</span>
            </h4>
            <p className="text-xs text-[#6E665E] mt-0.5">
              공장에서 기계로 찍어낸 균일한 공산품이 아닌, 흙과 불길이 빚어낸 자연스러운 개별성입니다.
            </p>
          </div>
        </div>

        {compact && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-xs text-[#6E665E] hover:text-[#2B2623] flex items-center gap-1 p-1"
          >
            {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        )}
      </div>

      {expanded && (
        <div className="mt-4 pt-3 border-t border-[#E8E2D7]/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#6E665E]">
          <div className="p-2.5 bg-white/70 rounded-lg border border-[#E8E2D7]/60">
            <span className="font-semibold text-[#2B2623] block mb-1">01. 자연스러운 철분점(Iron Spots)</span>
            <p className="text-[11px] leading-relaxed">
              흙 속에 자연 함유된 미네랄 철분이 가마 안 1,260도 불길에 반응하여 표면에 피어난 갈색/검은 반점입니다.
            </p>
          </div>
          <div className="p-2.5 bg-white/70 rounded-lg border border-[#E8E2D7]/60">
            <span className="font-semibold text-[#2B2623] block mb-1">02. 유약의 흐름과 핀홀(Pinhole)</span>
            <p className="text-[11px] leading-relaxed">
              유약이 흘러내리며 맺힌 농담의 그라데이션과 숨 쉬는 흙의 기공으로 인한 미세한 바늘구멍 자국입니다.
            </p>
          </div>
          <div className="p-2.5 bg-white/70 rounded-lg border border-[#E8E2D7]/60">
            <span className="font-semibold text-[#2B2623] block mb-1">03. 손맛이 담긴 비정형 곡선</span>
            <p className="text-[11px] leading-relaxed">
              물레와 손칼로 다듬는 과정에서 생기는 미세한 비대칭과 지문 흔적은 손끝의 온기를 증명합니다.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

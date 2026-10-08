import React, { useState } from 'react';
import { ArrowLeft, ShieldCheck, CheckCircle2, Gift, CreditCard, Truck, Sparkles, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';
import { CeramicVisual } from './CeramicVisual';

interface CheckoutScreenProps {
  items: CartItem[];
  onBack: () => void;
  onOrderComplete: (orderId: string) => void;
}

export const CheckoutScreen: React.FC<CheckoutScreenProps> = ({
  items,
  onBack,
  onOrderComplete
}) => {
  const [step, setStep] = useState<'details' | 'success'>('details');
  const [orderNumber, setOrderNumber] = useState<string>('');

  // Form states
  const [recipientName, setRecipientName] = useState('김윤아');
  const [recipientPhone, setRecipientPhone] = useState('010-8472-9102');
  const [recipientAddress, setRecipientAddress] = useState('서울특별시 마포구 독막로 12길 18 (서교동)');
  const [deliveryNote, setDeliveryNote] = useState('도자기 기물이오니 부재 시 경비실이나 문 앞에 안전하게 놓아주세요.');
  const [paymentMethod, setPaymentMethod] = useState<'tosspay' | 'kakaopay' | 'card' | 'bank'>('tosspay');

  const GIFT_WRAP_FEE = 5000;
  const rawSubtotal = items.reduce((acc, it) => acc + it.product.price * it.quantity, 0);
  const giftWrapTotal = items.reduce(
    (acc, it) => acc + (it.withGiftPackaging ? GIFT_WRAP_FEE * it.quantity : 0),
    0
  );
  const shippingFee = rawSubtotal >= 100000 || rawSubtotal === 0 ? 0 : 3500;
  const grandTotal = rawSubtotal + giftWrapTotal + shippingFee;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `THW-${Date.now().toString().slice(-6)}`;
    setOrderNumber(generatedId);
    setStep('success');
    onOrderComplete(generatedId);
  };

  if (step === 'success') {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center space-y-8">
        <div className="w-20 h-20 mx-auto rounded-full bg-[#EAE2D5] flex items-center justify-center text-[#A06245]">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-xs text-[#A06245] font-serif uppercase tracking-widest block">
            Order Confirmed · 온기가 출발합니다
          </span>
          <h1 className="text-3xl font-serif text-[#2B2623]">
            주문이 정갈하게 접수되었습니다
          </h1>
          <p className="text-xs text-[#6E665E]">
            주문번호: <strong className="text-[#2B2623] font-mono">{orderNumber}</strong>
          </p>
        </div>

        {/* Receipt card */}
        <div className="bg-white rounded-3xl border border-[#E8E2D7] p-6 sm:p-8 text-left space-y-6 shadow-sm">
          <div className="border-b border-[#F0EBE1] pb-4 flex justify-between items-center text-xs">
            <span className="text-[#8C8379]">배송 수령인</span>
            <span className="font-semibold text-[#2B2623]">{recipientName} 님 ({recipientPhone})</span>
          </div>

          <div className="border-b border-[#F0EBE1] pb-4 flex justify-between items-center text-xs">
            <span className="text-[#8C8379]">도착 예정 주소</span>
            <span className="font-medium text-[#2B2623] text-right max-w-xs">{recipientAddress}</span>
          </div>

          <div className="space-y-3">
            <span className="text-xs font-semibold text-[#2B2623] block">주문 기물 명세</span>
            {items.map((it) => (
              <div key={it.product.id} className="flex items-center justify-between text-xs text-[#6E665E]">
                <div className="flex items-center gap-2">
                  <span>{it.product.nameKo}</span>
                  <span className="text-[#8C8379] tabular-nums">× {it.quantity}</span>
                  {it.withGiftPackaging && (
                    <span className="text-[11px] text-[#A06245] bg-[#F8F5EE] px-1.5 py-0.2 rounded">
                      한지 선물 포장
                    </span>
                  )}
                </div>
                <span className="font-serif font-bold text-[#2B2623] tabular-nums">
                  {(it.product.price * it.quantity).toLocaleString()}원
                </span>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-[#E8E2D7] flex items-center justify-between text-sm font-bold text-[#2B2623]">
            <span>최종 결제 완료 금액</span>
            <span className="text-lg font-serif text-[#A06245] tabular-nums">
              {grandTotal.toLocaleString()}원
            </span>
          </div>
        </div>

        {/* Packaging Assurance */}
        <div className="p-4 bg-[#F8F5EE] rounded-2xl border border-[#E8E2D7] text-xs text-[#6E665E] flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#5A6B56] shrink-0" />
          <span>공예가가 직접 닥종이 한지와 옥수수 완충재로 3중 감싸 안전하게 발송합니다.</span>
        </div>

        <button
          onClick={onBack}
          className="px-8 py-3.5 bg-[#2B2623] hover:bg-[#433B36] text-[#FAF7F2] rounded-xl text-xs font-medium tracking-wide transition-colors cursor-pointer"
        >
          마켓플레이스로 돌아가기
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Back button */}
      <div className="flex items-center justify-between border-b border-[#E8E2D7] pb-4 text-xs">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[#6E665E] hover:text-[#2B2623] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>이전 화면으로 돌아가기</span>
        </button>
        <span className="text-xs text-[#8C8379] font-serif">TOHWA Checkout</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Form: Shipping & Payment */}
        <form onSubmit={handleSubmitOrder} className="lg:col-span-7 space-y-8">
          <div>
            <h1 className="text-2xl font-serif text-[#2B2623]">
              온기를 전하는 주문서 작성
            </h1>
            <p className="text-xs text-[#6E665E] mt-1">
              소중한 작품이 안전하게 닿을 수 있도록 정갈하게 포장하여 보내드립니다.
            </p>
          </div>

          {/* 1. Recipient Address */}
          <div className="bg-white rounded-3xl border border-[#E8E2D7] p-6 sm:p-8 space-y-4 shadow-xs">
            <h3 className="font-serif font-bold text-base text-[#2B2623] flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#A06245]" />
              <span>배송지 정보</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block text-[#6E665E] mb-1 font-medium">받는 분 성함</label>
                <input
                  type="text"
                  required
                  value={recipientName}
                  onChange={(e) => setRecipientName(e.target.value)}
                  className="w-full p-2.5 bg-[#FAF7F2] border border-[#E8E2D7] rounded-xl focus:border-[#A06245] focus:outline-none text-[#2B2623]"
                />
              </div>
              <div>
                <label className="block text-[#6E665E] mb-1 font-medium">연락처</label>
                <input
                  type="tel"
                  required
                  value={recipientPhone}
                  onChange={(e) => setRecipientPhone(e.target.value)}
                  className="w-full p-2.5 bg-[#FAF7F2] border border-[#E8E2D7] rounded-xl focus:border-[#A06245] focus:outline-none text-[#2B2623]"
                />
              </div>
            </div>

            <div className="text-xs">
              <label className="block text-[#6E665E] mb-1 font-medium">배송 주소</label>
              <input
                type="text"
                required
                value={recipientAddress}
                onChange={(e) => setRecipientAddress(e.target.value)}
                className="w-full p-2.5 bg-[#FAF7F2] border border-[#E8E2D7] rounded-xl focus:border-[#A06245] focus:outline-none text-[#2B2623]"
              />
            </div>

            <div className="text-xs">
              <label className="block text-[#6E665E] mb-1 font-medium">배송 시 요청사항</label>
              <input
                type="text"
                value={deliveryNote}
                onChange={(e) => setDeliveryNote(e.target.value)}
                className="w-full p-2.5 bg-[#FAF7F2] border border-[#E8E2D7] rounded-xl focus:border-[#A06245] focus:outline-none text-[#2B2623]"
              />
            </div>
          </div>

          {/* 2. Payment Method */}
          <div className="bg-white rounded-3xl border border-[#E8E2D7] p-6 sm:p-8 space-y-4 shadow-xs">
            <h3 className="font-serif font-bold text-base text-[#2B2623] flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-[#A06245]" />
              <span>결제 수단 선택</span>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              {[
                { id: 'tosspay', label: '토스페이' },
                { id: 'kakaopay', label: '카카오페이' },
                { id: 'card', label: '신용/체크카드' },
                { id: 'bank', label: '무통장 입금' }
              ].map((m) => (
                <button
                  type="button"
                  key={m.id}
                  onClick={() => setPaymentMethod(m.id as any)}
                  className={`p-3 rounded-xl border text-center transition-colors cursor-pointer ${
                    paymentMethod === m.id
                      ? 'border-[#A06245] bg-[#F8F5EE] text-[#A06245] font-semibold'
                      : 'border-[#E8E2D7] bg-[#FAF7F2] text-[#6E665E] hover:bg-white'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>

            <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#E8E2D7] text-xs text-[#6E665E] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#5A6B56]" />
              <span>안전 에스크로 결제 시스템 적용 · 위변조 방지 암호화</span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-[#2B2623] hover:bg-[#433B36] text-[#FAF7F2] rounded-2xl text-xs font-semibold tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg"
          >
            <span>{grandTotal.toLocaleString()}원 결제하고 주문 완료하기</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Right Summary Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl border border-[#E8E2D7] p-6 sm:p-8 space-y-6 shadow-sm">
            <h3 className="font-serif font-bold text-base text-[#2B2623]">
              주문 작품 요약 ({items.length}개)
            </h3>

            <div className="space-y-4 max-h-[350px] overflow-y-auto pr-1">
              {items.map((it) => (
                <div key={it.product.id} className="flex gap-3 pb-3 border-b border-[#F0EBE1] last:border-none">
                  <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 border border-[#E8E2D7]">
                    <CeramicVisual product={it.product} className="w-full h-full" />
                  </div>
                  <div className="flex-1 min-w-0 text-xs">
                    <span className="text-[11px] text-[#A06245] block">
                      {it.product.clayNameKo.split(' ')[0]}
                    </span>
                    <h4 className="font-semibold text-[#2B2623] truncate mt-0.5">
                      {it.product.nameKo}
                    </h4>
                    <div className="flex items-center justify-between text-[#6E665E] mt-1">
                      <span>수량 {it.quantity}개</span>
                      <span className="font-serif font-bold text-[#2B2623] tabular-nums">
                        {(it.product.price * it.quantity).toLocaleString()}원
                      </span>
                    </div>

                    {it.withGiftPackaging && (
                      <div className="mt-1.5 p-1.5 bg-[#F8F5EE] rounded text-[11px] text-[#A06245] flex items-center gap-1">
                        <Gift className="w-3 h-3" />
                        <span>선물 포장 적용 ({it.calligraphyCardMessage || '메시지 카드 포함'})</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Price Calculations */}
            <div className="pt-3 border-t border-[#E8E2D7] space-y-2 text-xs text-[#6E665E]">
              <div className="flex justify-between">
                <span>작품 금액 합계</span>
                <span className="tabular-nums font-medium text-[#2B2623]">{rawSubtotal.toLocaleString()}원</span>
              </div>
              {giftWrapTotal > 0 && (
                <div className="flex justify-between">
                  <span>한지 선물 포장 옵션</span>
                  <span className="tabular-nums text-[#A06245]">+{giftWrapTotal.toLocaleString()}원</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>안전 배송비</span>
                <span className="tabular-nums font-medium text-[#2B2623]">
                  {shippingFee === 0 ? '무료 (10만원 이상 혜택)' : `${shippingFee.toLocaleString()}원`}
                </span>
              </div>
              <div className="pt-3 border-t border-[#E8E2D7] flex justify-between text-base font-bold text-[#2B2623]">
                <span>총 결제 예정 금액</span>
                <span className="font-serif text-xl text-[#A06245] tabular-nums">
                  {grandTotal.toLocaleString()}원
                </span>
              </div>
            </div>
          </div>

          {/* Safe Packaging Guarantee Banner */}
          <div className="p-5 bg-[#FAF7F2] rounded-2xl border border-[#E8E2D7] space-y-2 text-xs">
            <div className="flex items-center gap-2 text-[#5A6B56] font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>토화의 안심 도자기 포장 보증</span>
            </div>
            <p className="text-[11px] text-[#6E665E] leading-relaxed">
              도자기는 충격에 민감한 기물이므로 전용 에코 완충재와 튼튼한 이중 크라프트 박스로 밀봉 포장됩니다.
              배송 중 파손 발생 시 수령 즉시 100% 동일 작품 무상 교환 또는 전액 환불을 보증합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { X, Trash2, Plus, Minus, Gift, ArrowRight, ShieldCheck, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';
import { CeramicVisual } from './CeramicVisual';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, newQty: number) => void;
  onToggleGiftPackaging: (productId: string) => void;
  onUpdateGiftMessage: (productId: string, message: string) => void;
  onProceedToCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onToggleGiftPackaging,
  onUpdateGiftMessage,
  onProceedToCheckout
}) => {
  if (!isOpen) return null;

  const FREE_SHIPPING_THRESHOLD = 100000;
  const GIFT_WRAP_FEE = 5000;

  const rawSubtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const giftWrapTotal = cartItems.reduce(
    (acc, item) => acc + (item.withGiftPackaging ? GIFT_WRAP_FEE * item.quantity : 0),
    0
  );
  const shippingFee = rawSubtotal >= FREE_SHIPPING_THRESHOLD || rawSubtotal === 0 ? 0 : 3500;
  const grandTotal = rawSubtotal + giftWrapTotal + shippingFee;

  const freeShippingProgress = Math.min(100, (rawSubtotal / FREE_SHIPPING_THRESHOLD) * 100);
  const remainingForFree = Math.max(0, FREE_SHIPPING_THRESHOLD - rawSubtotal);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F2] text-[#2B2623] shadow-2xl flex flex-col border-l border-[#E8E2D7]">
          {/* Header */}
          <div className="p-5 border-b border-[#E8E2D7] flex items-center justify-between bg-[#F8F5EE]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#A06245]" />
              <h3 className="font-serif text-lg tracking-wide">온기 바구니</h3>
              <span className="text-xs text-[#6E665E] tabular-nums">({cartItems.length}개 작품)</span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-[#6E665E] hover:text-[#2B2623] rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free shipping progress bar */}
          <div className="px-5 py-3 bg-[#F4EFE6] border-b border-[#E8E2D7] text-xs">
            {remainingForFree > 0 ? (
              <p className="text-[#6E665E]">
                <strong className="text-[#A06245] tabular-nums font-semibold">{remainingForFree.toLocaleString()}원</strong> 더 담으시면 <span className="text-[#2B2623] font-medium">안전 배송비 무료</span>입니다.
              </p>
            ) : (
              <p className="text-[#5A6B56] font-medium flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#5A6B56]" />
                전 작품 도자기 안전 에코 패키징 무료 배송 혜택 적용!
              </p>
            )}
            <div className="w-full bg-[#E5DDCF] h-1.5 rounded-full mt-2 overflow-hidden">
              <div 
                className="bg-[#A06245] h-full transition-all duration-300 rounded-full"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-[#6E665E]">
                <div className="w-16 h-16 rounded-full bg-[#F0EBE1] flex items-center justify-center mb-3 text-[#A06245]">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <p className="font-serif text-base text-[#2B2623] mb-1">바구니가 비어 있습니다</p>
                <p className="text-xs text-[#6E665E] max-w-xs leading-relaxed">
                  자연의 흙과 도예가의 손끝이 빚어낸 단 하나뿐인 기물을 담아보세요.
                </p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div 
                  key={item.product.id}
                  className="bg-white rounded-xl border border-[#E8E2D7] p-3.5 space-y-3 shadow-xs"
                >
                  <div className="flex gap-3">
                    <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 border border-[#E8E2D7]">
                      <CeramicVisual product={item.product} className="w-full h-full" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-1">
                        <span className="text-[11px] text-[#A06245] tracking-wide">
                          {item.product.clayNameKo.split(' ')[0]}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, 0)}
                          className="text-[#A59D94] hover:text-[#A06245] transition-colors p-0.5 cursor-pointer"
                          title="삭제"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <h4 className="text-xs font-semibold text-[#2B2623] truncate mt-0.5">
                        {item.product.nameKo}
                      </h4>
                      <p className="text-xs font-serif font-bold text-[#2B2623] mt-1 tabular-nums">
                        {(item.product.price * item.quantity).toLocaleString()}원
                      </p>

                      {/* Quantity Stepper */}
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex items-center border border-[#E8E2D7] rounded-md bg-[#FAF7F2]">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                            className="p-1 text-[#6E665E] hover:text-[#2B2623] cursor-pointer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-medium tabular-nums text-[#2B2623]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                            className="p-1 text-[#6E665E] hover:text-[#2B2623] cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Gift Wrap Toggle Option */}
                  <div className="pt-2 border-t border-[#F0EBE1] flex items-center justify-between text-xs">
                    <label className="flex items-center gap-2 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={item.withGiftPackaging}
                        onChange={() => onToggleGiftPackaging(item.product.id)}
                        className="rounded border-[#D5CEC0] text-[#A06245] focus:ring-[#A06245]"
                      />
                      <span className="flex items-center gap-1 text-[#6E665E]">
                        <Gift className="w-3.5 h-3.5 text-[#A06245]" />
                        <span>한지·오동나무 선물 포장</span>
                      </span>
                    </label>
                    <span className="text-[11px] text-[#A06245] tabular-nums font-medium">
                      +{(GIFT_WRAP_FEE * item.quantity).toLocaleString()}원
                    </span>
                  </div>

                  {/* Optional Calligraphy Note if Gift wrapped */}
                  {item.withGiftPackaging && (
                    <input
                      type="text"
                      placeholder="도예가 친필 축하 메시지 카드 각인 문구 (최대 30자)"
                      value={item.calligraphyCardMessage || ''}
                      onChange={(e) => onUpdateGiftMessage(item.product.id, e.target.value)}
                      maxLength={30}
                      className="w-full text-xs p-2 rounded bg-[#FAF7F2] border border-[#E8E2D7] focus:border-[#A06245] focus:outline-none"
                    />
                  )}
                </div>
              ))
            )}
          </div>

          {/* Footer Subtotal & Action */}
          {cartItems.length > 0 && (
            <div className="p-5 border-t border-[#E8E2D7] bg-[#F8F5EE] space-y-3">
              <div className="space-y-1.5 text-xs text-[#6E665E]">
                <div className="flex justify-between">
                  <span>작품 합계</span>
                  <span className="tabular-nums font-medium text-[#2B2623]">{rawSubtotal.toLocaleString()}원</span>
                </div>
                {giftWrapTotal > 0 && (
                  <div className="flex justify-between">
                    <span>한지 선물 포장 ({GIFT_WRAP_FEE.toLocaleString()}원/ea)</span>
                    <span className="tabular-nums text-[#A06245]">+{giftWrapTotal.toLocaleString()}원</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>안전 배송비 (에코 완충 보증)</span>
                  <span className="tabular-nums font-medium text-[#2B2623]">
                    {shippingFee === 0 ? '무료 (혜택)' : `${shippingFee.toLocaleString()}원`}
                  </span>
                </div>
                <div className="pt-2 border-t border-[#E8E2D7] flex justify-between text-sm font-semibold text-[#2B2623]">
                  <span>최종 결제 금액</span>
                  <span className="font-serif text-base text-[#A06245] tabular-nums">
                    {grandTotal.toLocaleString()}원
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onProceedToCheckout();
                }}
                className="w-full py-3 px-4 bg-[#2B2623] hover:bg-[#433B36] text-[#FAF7F2] rounded-xl font-medium text-xs tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md"
              >
                <span>온기 전하기 (주문서 작성)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#8C8379] pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#5A6B56]" />
                <span>도자기 파손 시 100% 무상 재발송 보증</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

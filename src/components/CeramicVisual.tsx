import React from 'react';
import { Product } from '../types';

interface CeramicVisualProps {
  product: Product;
  className?: string;
  showTextureBadge?: boolean;
  viewMode?: 'standard' | 'texture' | 'lifestyle';
}

export const CeramicVisual: React.FC<CeramicVisualProps> = ({
  product,
  className = '',
  showTextureBadge = false,
  viewMode = 'standard'
}) => {
  const { shapeType, ceramicColor, accentGlow } = product.visualTheme;

  // Render authentic SVG handcrafted ceramic silhouette with clay gradients & highlights
  const renderCeramicShape = () => {
    switch (shapeType) {
      case 'oval_plate':
        return (
          <svg viewBox="0 0 320 220" className="w-full h-full drop-shadow-xl transition-transform duration-500 hover:scale-[1.02]">
            <defs>
              <radialGradient id={`grad-plate-${product.id}`} cx="50%" cy="40%" r="60%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
                <stop offset="45%" stopColor={ceramicColor} stopOpacity="1" />
                <stop offset="85%" stopColor="#C8BCAE" stopOpacity="1" />
                <stop offset="100%" stopColor="#8C7E70" stopOpacity="1" />
              </radialGradient>
              <linearGradient id={`shadow-plate-${product.id}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2B2623" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#2B2623" stopOpacity="0" />
              </linearGradient>
              <filter id={`wabi-${product.id}`} x="-10%" y="-10%" width="120%" height="120%">
                <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
              </filter>
            </defs>
            {/* Cast shadow */}
            <ellipse cx="160" cy="180" rx="130" ry="22" fill={`url(#shadow-plate-${product.id})`} />
            {/* Outer Rim (Asymmetric handmade organic rim) */}
            <path
              d="M 38 120 C 35 60, 110 32, 160 30 C 220 28, 282 62, 285 118 C 288 160, 222 178, 162 176 C 98 174, 40 162, 38 120 Z"
              fill={`url(#grad-plate-${product.id})`}
              filter={`url(#wabi-${product.id})`}
              stroke="#D4C8B8"
              strokeWidth="1.5"
            />
            {/* Inner Depressed Basin */}
            <path
              d="M 64 120 C 62 82, 118 60, 160 59 C 205 58, 255 84, 256 120 C 257 150, 208 162, 160 160 C 112 158, 66 148, 64 120 Z"
              fill={ceramicColor}
              opacity="0.88"
            />
            {/* Natural White Slip Slip Splash (덤벙 흐름) */}
            <path
              d="M 90 95 Q 140 130 180 100 T 230 120"
              stroke="#FFFFFF"
              strokeWidth="14"
              strokeLinecap="round"
              fill="none"
              opacity="0.4"
            />
            {/* Iron Dots (철분점) */}
            <circle cx="120" cy="100" r="1.8" fill="#4A3B32" opacity="0.8" />
            <circle cx="195" cy="135" r="2.2" fill="#3D3028" opacity="0.85" />
            <circle cx="210" cy="85" r="1.5" fill="#4A3B32" opacity="0.75" />
            <circle cx="85" cy="125" r="1.2" fill="#5A473B" opacity="0.6" />
          </svg>
        );

      case 'moon_jar':
        return (
          <svg viewBox="0 0 280 300" className="w-full h-full drop-shadow-xl transition-transform duration-500 hover:scale-[1.02]">
            <defs>
              <radialGradient id={`grad-moon-${product.id}`} cx="38%" cy="36%" r="65%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#F9F6F0" stopOpacity="1" />
                <stop offset="85%" stopColor="#DDD5C7" stopOpacity="1" />
                <stop offset="100%" stopColor="#A89E8F" stopOpacity="1" />
              </radialGradient>
              <linearGradient id={`shadow-moon-${product.id}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2B2623" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#2B2623" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* Cast shadow */}
            <ellipse cx="140" cy="275" rx="75" ry="14" fill={`url(#shadow-moon-${product.id})`} />
            {/* Upper lip */}
            <ellipse cx="140" cy="52" rx="36" ry="7" fill="#E8E2D6" stroke="#D1C7B7" strokeWidth="1" />
            <ellipse cx="140" cy="50" rx="32" ry="5" fill="#2E2A27" opacity="0.6" />
            {/* Moon Jar Asymmetric Organic Silhouette */}
            <path
              d="M 104 52 C 55 90, 42 165, 62 215 C 80 252, 108 265, 140 265 C 172 265, 202 250, 218 214 C 238 166, 222 92, 176 52 Z"
              fill={`url(#grad-moon-${product.id})`}
            />
            {/* Subtle Horizon Seam of 2 halves (전통 상하합체선) */}
            <path
              d="M 52 160 Q 140 167 228 160"
              stroke="#D4CAC0"
              strokeWidth="1.2"
              fill="none"
              opacity="0.5"
            />
            {/* Soft highlight */}
            <path
              d="M 90 90 Q 75 140 92 190"
              stroke="#FFFFFF"
              strokeWidth="8"
              strokeLinecap="round"
              fill="none"
              opacity="0.45"
            />
            {/* Delicate single dried twig branch inside */}
            <path
              d="M 140 50 Q 145 20 165 8 M 150 25 Q 165 20 175 14"
              stroke="#685646"
              strokeWidth="2.2"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="165" cy="8" r="2.5" fill="#A06245" />
            <circle cx="175" cy="14" r="2" fill="#A06245" />
          </svg>
        );

      case 'tea_pot':
        return (
          <svg viewBox="0 0 320 240" className="w-full h-full drop-shadow-xl transition-transform duration-500 hover:scale-[1.02]">
            <defs>
              <radialGradient id={`grad-tea-${product.id}`} cx="40%" cy="38%" r="60%">
                <stop offset="0%" stopColor="#9C8B7A" stopOpacity="1" />
                <stop offset="55%" stopColor={ceramicColor} stopOpacity="1" />
                <stop offset="90%" stopColor="#4A3F35" stopOpacity="1" />
                <stop offset="100%" stopColor="#2E2620" stopOpacity="1" />
              </radialGradient>
              <linearGradient id={`shadow-tea-${product.id}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2B2623" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#2B2623" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* Cast shadow */}
            <ellipse cx="160" cy="205" rx="80" ry="14" fill={`url(#shadow-tea-${product.id})`} />
            {/* Back handle */}
            <path
              d="M 85 110 C 45 110, 40 165, 88 175"
              stroke={ceramicColor}
              strokeWidth="14"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M 85 110 C 45 110, 40 165, 88 175"
              stroke="#382E26"
              strokeWidth="2"
              fill="none"
              opacity="0.4"
            />
            {/* Teapot Body */}
            <path
              d="M 110 90 C 85 120, 80 180, 115 198 C 145 204, 185 204, 215 198 C 248 180, 245 120, 220 90 Z"
              fill={`url(#grad-tea-${product.id})`}
            />
            {/* Spout */}
            <path
              d="M 230 145 C 265 145, 280 105, 275 95 C 265 95, 240 120, 225 130 Z"
              fill={`url(#grad-tea-${product.id})`}
            />
            {/* Lid rim & knob */}
            <ellipse cx="165" cy="88" rx="38" ry="8" fill="#4A3F35" />
            <ellipse cx="165" cy="85" rx="34" ry="7" fill={ceramicColor} />
            <ellipse cx="165" cy="74" rx="10" ry="8" fill="#524438" />
            {/* Teacup Companion beside it */}
            <path
              d="M 235 180 C 235 205, 270 205, 270 180 Z"
              fill={`url(#grad-tea-${product.id})`}
              opacity="0.9"
            />
            <ellipse cx="252" cy="180" rx="17" ry="4" fill="#3D3228" />
            {/* Ash glaze run droplets */}
            <path d="M 140 110 Q 142 145 141 155" stroke="#7A6F5D" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.6" />
            <path d="M 175 125 Q 178 150 176 160" stroke="#7A6F5D" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.5" />
          </svg>
        );

      case 'bowl':
        return (
          <svg viewBox="0 0 300 220" className="w-full h-full drop-shadow-xl transition-transform duration-500 hover:scale-[1.02]">
            <defs>
              <radialGradient id={`grad-bowl-${product.id}`} cx="45%" cy="30%" r="65%">
                <stop offset="0%" stopColor="#FAF5EE" stopOpacity="1" />
                <stop offset="45%" stopColor={ceramicColor} stopOpacity="1" />
                <stop offset="85%" stopColor="#A89B88" stopOpacity="1" />
                <stop offset="100%" stopColor="#695E4F" stopOpacity="1" />
              </radialGradient>
              <linearGradient id={`shadow-bowl-${product.id}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2B2623" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#2B2623" stopOpacity="0" />
              </linearGradient>
            </defs>
            <ellipse cx="150" cy="190" rx="60" ry="12" fill={`url(#shadow-bowl-${product.id})`} />
            {/* Elevated Stem / Foot (높은 굽) */}
            <path d="M 125 150 L 122 185 L 178 185 L 175 150 Z" fill="#756754" />
            {/* Bowl Body with Organic Curves */}
            <path
              d="M 45 75 C 65 145, 115 160, 150 160 C 185 160, 235 145, 255 75 Z"
              fill={`url(#grad-bowl-${product.id})`}
            />
            {/* Interior Rim */}
            <ellipse cx="150" cy="75" rx="105" ry="24" fill={ceramicColor} stroke="#A89B88" strokeWidth="1" />
            <ellipse cx="150" cy="76" rx="98" ry="20" fill="#383028" opacity="0.12" />
            {/* Hand-thrown wheel rings inside */}
            <ellipse cx="150" cy="78" rx="65" ry="12" fill="none" stroke="#FFFFFF" strokeWidth="1" opacity="0.4" />
            {/* Iron dots */}
            <circle cx="110" cy="115" r="1.5" fill="#3D3028" opacity="0.7" />
            <circle cx="180" cy="130" r="1.8" fill="#3D3028" opacity="0.8" />
          </svg>
        );

      case 'faceted_vase':
        return (
          <svg viewBox="0 0 240 320" className="w-full h-full drop-shadow-xl transition-transform duration-500 hover:scale-[1.02]">
            <defs>
              <linearGradient id={`facet-left-${product.id}`} x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#F5EFE6" />
                <stop offset="100%" stopColor="#E2D8C9" />
              </linearGradient>
              <linearGradient id={`facet-center-${product.id}`} x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#FAF7F2" />
                <stop offset="100%" stopColor="#EDE5D7" />
              </linearGradient>
              <linearGradient id={`facet-right-${product.id}`} x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#CFC4B2" />
                <stop offset="100%" stopColor="#9C917F" />
              </linearGradient>
            </defs>
            <ellipse cx="120" cy="285" rx="45" ry="10" fill="#2B2623" opacity="0.2" />
            {/* Faceted Planes (면치기) */}
            <polygon points="80,50 100,50 95,275 70,275" fill={`url(#facet-left-${product.id})`} />
            <polygon points="100,50 140,50 145,275 95,275" fill={`url(#facet-center-${product.id})`} />
            <polygon points="140,50 160,50 170,275 145,275" fill={`url(#facet-right-${product.id})`} />
            {/* Top opening */}
            <ellipse cx="120" cy="50" rx="40" ry="7" fill="#E2D8C9" />
            <ellipse cx="120" cy="50" rx="34" ry="5" fill="#3D362F" opacity="0.4" />
          </svg>
        );

      case 'lantern':
      default:
        return (
          <svg viewBox="0 0 260 300" className="w-full h-full drop-shadow-xl transition-transform duration-500 hover:scale-[1.02]">
            <defs>
              <radialGradient id={`grad-lamp-${product.id}`} cx="50%" cy="30%" r="60%">
                <stop offset="0%" stopColor="#E89658" />
                <stop offset="45%" stopColor={ceramicColor} />
                <stop offset="100%" stopColor="#5C341E" />
              </radialGradient>
            </defs>
            <ellipse cx="130" cy="270" rx="55" ry="12" fill="#2B2623" opacity="0.2" />
            {/* Lamp base */}
            <path d="M 85 260 C 80 180, 100 130, 115 130 C 130 130, 150 180, 175 260 Z" fill={`url(#grad-lamp-${product.id})`} />
            {/* Warm glowing shade top */}
            <ellipse cx="130" cy="115" rx="52" ry="24" fill="#FFE8D1" stroke="#E3B38A" strokeWidth="2" opacity="0.95" />
            <circle cx="130" cy="115" r="40" fill={accentGlow} opacity="0.3" filter="blur(14px)" />
          </svg>
        );
    }
  };

  return (
    <div
      className={`relative overflow-hidden flex items-center justify-center select-none bg-gradient-to-br ${product.visualTheme.bgGradient} ${className}`}
      style={{
        backgroundImage: viewMode === 'texture' 
          ? `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.7) 0%, rgba(210,195,178,0.4) 100%), repeating-radial-gradient(circle at 40% 40%, rgba(70,55,40,0.06) 0px, rgba(70,55,40,0.06) 2px, transparent 2px, transparent 6px)` 
          : undefined
      }}
    >
      {/* Subtle organic linen / clay grain background texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `radial-gradient(#2B2623 1px, transparent 1px)`,
          backgroundSize: '16px 16px'
        }}
      />

      {/* Gentle ambient light from top-left */}
      <div className="absolute top-0 left-0 w-3/4 h-3/4 bg-white/20 rounded-full blur-3xl pointer-events-none" />

      {/* Main ceramic craft render */}
      <div className="relative z-10 w-full h-full max-w-[85%] max-h-[85%] flex items-center justify-center p-4">
        {renderCeramicShape()}
      </div>

      {/* Detail Texture Mode View overlay */}
      {viewMode === 'texture' && (
        <div className="absolute inset-0 bg-[#352B24]/10 backdrop-blur-[0.5px] flex flex-col justify-end p-4 text-xs z-20">
          <div className="bg-[#FAF7F2]/90 backdrop-blur-md rounded-lg p-2.5 border border-[#E8E2D7] text-[#2B2623] space-y-1">
            <span className="font-semibold block text-[#A06245]">표면 질감 클로즈업</span>
            <p className="text-[11px] text-[#6E665E] leading-relaxed">
              {product.wabiSabiFeature}
            </p>
          </div>
        </div>
      )}

      {/* Craft signature seal watermark in bottom right */}
      <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 opacity-60 pointer-events-none text-[11px] text-[#6E665E] font-serif">
        <span className="w-4 h-4 border border-[#8C7E70] rounded-sm flex items-center justify-center text-[9px] font-bold text-[#8C7E70]">
          土
        </span>
        <span>TOHWA</span>
      </div>

      {/* Optional Wabi-Sabi tag badge */}
      {showTextureBadge && (
        <div className="absolute top-3 left-3 z-10">
          <span className="text-[11px] text-[#6E665E] bg-[#FAF7F2]/80 backdrop-blur-sm px-2.5 py-1 rounded-md border border-[#E8E2D7]">
            {product.clayNameKo.split(' ')[0]} · {product.glazeNameKo.split(' ')[0]}
          </span>
        </div>
      )}
    </div>
  );
};

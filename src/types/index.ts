export type ScreenType = 'home' | 'artisan' | 'product' | 'checkout' | 'order-complete';

export type ProductCategory = 'tableware' | 'tea' | 'vase_object' | 'lighting';

export type ClayType = 'buncheong' | 'white_porcelain' | 'onggi' | 'coarse_clay';

export interface MakingStep {
  stepNumber: number;
  titleKo: string;
  titleEn: string;
  description: string;
  keyAspect: string;
}

export interface Artisan {
  id: string;
  nameKo: string;
  nameEn: string;
  studioNameKo: string;
  studioNameEn: string;
  location: string;
  experienceYears: number;
  slogan: string;
  biography: string;
  philosophyStory: string[];
  signatureClay: string;
  kilnType: string;
  makingSteps: MakingStep[];
  studioNotes: string;
  accentColor: string;
}

export interface Product {
  id: string;
  artisanId: string;
  nameKo: string;
  nameEn: string;
  category: ProductCategory;
  price: number;
  originalPrice?: number;
  clayType: ClayType;
  clayNameKo: string;
  glazeNameKo: string;
  kilnFiringKo: string;
  dimensions: string;
  weight: string;
  inStock: number;
  isLimited: boolean;
  isExclusive: boolean;
  leadTimeDays: number;
  dishWasherSafe: boolean;
  microwaveSafe: boolean;
  description: string;
  aestheticStory: string;
  wabiSabiFeature: string;
  visualTheme: {
    bgGradient: string;
    ceramicColor: string;
    accentGlow: string;
    textureSeed: string;
    shapeType: 'oval_plate' | 'moon_jar' | 'tea_pot' | 'tea_cup' | 'faceted_vase' | 'bowl' | 'lantern';
  };
}

export interface CartItem {
  product: Product;
  quantity: number;
  withGiftPackaging: boolean;
  calligraphyCardMessage?: string;
}

export interface CuratedCollection {
  id: string;
  titleKo: string;
  titleEn: string;
  subtitle: string;
  themeDescription: string;
  productIds: string[];
  curatorNote: string;
}

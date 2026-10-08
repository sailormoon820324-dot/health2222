import { Artisan, Product, CuratedCollection } from '../types';

export const ARTISANS: Artisan[] = [
  {
    id: 'artisan_yoon',
    nameKo: '윤서진',
    nameEn: 'Seo-jin Yoon',
    studioNameKo: '윤 스튜디오 (YUN Studio)',
    studioNameEn: 'YUN Studio',
    location: '경기 이천 도예촌',
    experienceYears: 18,
    slogan: '흙의 본래 결을 거스르지 않는 비정형의 미학',
    biography: '이천의 깊은 산자락에서 백토와 분청토를 직접 수비(水飛)하여 정형화되지 않은 식기를 만듭니다. 완벽한 대칭보다는 손끝의 흔적과 장작가마 속 불길의 우연한 만남을 귀하게 여깁니다.',
    philosophyStory: [
      '흙은 살아있는 생명체와 같습니다. 물을 머금었을 때의 부드러움, 손을 댔을 때 남는 지문과 주름, 가마 속에서 1,260도의 불길을 견뎌내며 줄어드는 수축의 과정까지 모두가 도자기의 일부입니다.',
      '저는 완벽한 원형반죽이나 기계적인 대칭을 추구하지 않습니다. 오히려 손의 압력이 덜 들어간 곳, 유약이 조금 두껍게 고여 옥빛을 내는 곳, 흙 속에 숨어있던 철분이 불길에 터져 나온 작은 흑점(철분점)이야말로 공예품만이 줄 수 있는 진정한 위로라 믿습니다.',
      '식탁 위에 올랐을 때 음식을 압도하지 않고, 음식을 감싸 안아주는 온기. 토화(土話)를 통해 일상의 식탁이 흙의 온기로 채워지기를 소망합니다.'
    ],
    signatureClay: '산청 분청토 & 자연 짚재유',
    kilnType: '전통 장작가마 (소나무 장작 환원소성)',
    makingSteps: [
      {
        stepNumber: 1,
        titleKo: '수비 (水飛, 흙 고르기)',
        titleEn: 'Clay Refining',
        description: '산청에서 채취한 거친 분청토를 물에 풀고 여러 번 체로 걸러 불순물을 덜어내고 공기를 빼내는 숙성 과정을 거칩니다.',
        keyAspect: '최소 30일간의 지하 저장고 숙성'
      },
      {
        stepNumber: 2,
        titleKo: '물레 성형 (손작업)',
        titleEn: 'Wheel Throwing & Hand Shaping',
        description: '회전하는 물레 위에서 인위적인 힘을 빼고 흙이 스스로 서서히 올라오도록 손끝의 압력으로 비정형의 유려한 곡선을 만듭니다.',
        keyAspect: '인공적인 대칭틀을 쓰지 않는 자유 곡선'
      },
      {
        stepNumber: 3,
        titleKo: '굽 깎기 (비정형 다듬기)',
        titleEn: 'Foot Trimming',
        description: '반쯤 말라 가죽처럼 굳은 도자기의 바닥 굽을 전통 쇠칼로 깎아내며 적당한 무게감과 그립감을 조율합니다.',
        keyAspect: '손에 쥐었을 때 안정감을 주는 굽 두께'
      },
      {
        stepNumber: 4,
        titleKo: '건조 및 초벌구이 (850℃)',
        titleEn: 'Drying & Bisque Firing',
        description: '그늘에서 7일간 자연 건조한 뒤 가마에서 850도로 12시간 동안 천천히 구워내어 단단하고 숨 쉬는 기물을 완성합니다.',
        keyAspect: '기포와 수분을 온전히 날리는 저온 소성'
      },
      {
        stepNumber: 5,
        titleKo: '덤벙 시유 (백토 물들이기)',
        titleEn: 'Glazing & Slip Dipping',
        description: '초벌 된 기물을 묽은 백토물에 자연스럽게 덤벙 담갔다 빼내어 흘러내린 자국과 불규칙한 질감을 연출합니다.',
        keyAspect: '조선 분청사기 전통 덤벙 기법 재해석'
      },
      {
        stepNumber: 6,
        titleKo: '재벌 소성 (1,260℃ 환원소성)',
        titleEn: 'Final Wood Kiln Firing',
        description: '소나무 장작을 태워 가마 내부 산소를 차단하는 환원 분위기에서 24시간 동안 구워내어 오묘한 푸른 회색빛과 유리질 피막을 얻습니다.',
        keyAspect: '불꽃과 재(Ash)의 자연스러운 융합'
      }
    ],
    studioNotes: '이천 신둔면 도예촌에 위치한 윤 스튜디오는 매년 봄과 가을 장작가마를 엽니다. 방문 예약 시 작업실 다실에서 햇차를 대접합니다.',
    accentColor: '#965C40'
  },
  {
    id: 'artisan_han',
    nameKo: '한지원',
    nameEn: 'Ji-won Han',
    studioNameKo: '지원요 (JI WON Ware)',
    studioNameEn: 'JI WON Ware',
    location: '경남 밀양 단장면',
    experienceYears: 14,
    slogan: '비워냄으로써 담아내는 백자의 맑은 여백',
    biography: '조선 백자의 담백하고 청초한 조형미를 현대 주거 공간에 어우러지는 미니멀 오브제로 재해석합니다. 은은한 우윳빛 백유의 깊이감을 연구합니다.',
    philosophyStory: [
      '백자는 화려한 색을 뽐내지 않기에 사물의 본질을 있는 그대로 드러냅니다. 맑은 빛을 띠지만 차갑지 않고, 단정하지만 결코 지루하지 않은 조화를 꿈꿉니다.',
      '물레를 돌릴 때마다 숨을 고르고 마음의 소란을 내려놓습니다. 달항아리의 둥근 품처럼, 누구의 공간에 놓여도 편안한 숨을 불어넣는 기물을 만듭니다.'
    ],
    signatureClay: '양구 고령토 & 무광 백유',
    kilnType: '고온 가스가마 (1,280℃ 산화/환원 절충)',
    makingSteps: [
      {
        stepNumber: 1,
        titleKo: '고령토 배합',
        titleEn: 'Kaolin Formulation',
        description: '맑고 고운 백색을 내기 위해 양구산 최고급 고령토를 미세 침전시켜 부드러운 입자만 선별합니다.',
        keyAspect: '불순물 없는 백색도 확보'
      },
      {
        stepNumber: 2,
        titleKo: '상하합체 성형',
        titleEn: 'Upper & Lower Joint Wheel Form',
        description: '달항아리의 특성상 위아래 두 사발을 물레로 따로 빚어 가운데를 이어 붙이는 전통 방식을 고수합니다.',
        keyAspect: '이음매의 자연스러운 비대칭 곡선'
      },
      {
        stepNumber: 3,
        titleKo: '미세 침착 건조',
        titleEn: 'Slow Shaded Drying',
        description: '직사광선을 피한 항온항습실에서 2주간 천천히 건조하여 미세 균열을 미연에 방지합니다.',
        keyAspect: '균열 없는 완벽한 건조 안정성'
      },
      {
        stepNumber: 4,
        titleKo: '초벌 소성 (900℃)',
        titleEn: 'Bisque Firing',
        description: '기벽이 얇고 섬세한 백자의 강도를 다지기 위해 정밀 제어된 온도로 초벌을 진행합니다.',
        keyAspect: '섬세한 기벽 보호'
      },
      {
        stepNumber: 5,
        titleKo: '무광 백유 스프레이 시유',
        titleEn: 'Matte White Glaze Spraying',
        description: '붓자국 없이 고른 유백색 표면을 위해 천연 석회백유를 섬세한 안개 분사 방식으로 도포합니다.',
        keyAspect: '매끄럽고 보드라운 새틴 텍스처'
      },
      {
        stepNumber: 6,
        titleKo: '고온 재벌 (1,280℃)',
        titleEn: 'High Temperature Firing',
        description: '도자기 소성 중 최고 온도에 달하는 1,280도에서 완전 자화시켜 물이 스며들지 않는 견고한 백자를 빚어냅니다.',
        keyAspect: '단단하고 영구적인 내구성'
      }
    ],
    studioNotes: '밀양의 영남알프스 능선이 한눈에 보이는 조용한 작업실에서 흙을 만집니다.',
    accentColor: '#5C6D70'
  },
  {
    id: 'artisan_bae',
    nameKo: '배도현',
    nameEn: 'Do-hyun Bae',
    studioNameKo: '도현 가마 (DOHYUN Kiln)',
    studioNameEn: 'DOHYUN Kiln',
    location: '전북 부안 변산반도',
    experienceYears: 22,
    slogan: '자연의 참나무 재가 남긴 예측 불가능한 빛깔',
    biography: '바닷바람과 참나무 장작이 빚어낸 거친 질감의 다기(茶器)와 찻사발을 만듭니다. 차를 우리는 시간 동안 손에 닿는 온기와 촉감에 집중합니다.',
    philosophyStory: [
      '차 한 잔을 마시는 시간은 일상의 가장 순수한 쉼입니다. 그 쉼을 담아내는 도자기는 손에 쥐었을 때 차갑지 않고, 입술에 닿았을 때 부드러워야 합니다.',
      '화목(장작)가마 안에서 날아다닌 참나무 재가 도자기 표면에 얹혀 자연 유약이 되는 순간, 인간의 계산을 뛰어넘는 자연의 그림이 완성됩니다.'
    ],
    signatureClay: '부안 황토 섞인 조질 점토 & 참나무 잿물',
    kilnType: '등요 (통가마 너구리굴 장작가마)',
    makingSteps: [
      {
        stepNumber: 1,
        titleKo: '천연 잿물 제조',
        titleEn: 'Natural Wood Ash Extraction',
        description: '지리산 참나무를 태운 재를 물에 우려내어 알칼리 성분을 씻어낸 뒤 고운 채로 거릅니다.',
        keyAspect: '100% 천연 식물성 재유'
      },
      {
        stepNumber: 2,
        titleKo: '다완 손성형',
        titleEn: 'Teaware Hand Throwing',
        description: '차를 따르고 마실 때 입술의 닿는 감촉과 물줄기 절수(切水)를 고려하여 섬세하게 빚습니다.',
        keyAspect: '입술에 닿는 편안한 전(Rim) 두께'
      },
      {
        stepNumber: 3,
        titleKo: '손지문 텍스처 남기기',
        titleEn: 'Finger Texture Emboss',
        description: '도공의 엄지손가락 자국을 자연스럽게 남겨 찻잔을 잡았을 때 미끄러지지 않도록 합니다.',
        keyAspect: '오직 손끝 감각으로 만든 그립'
      },
      {
        stepNumber: 4,
        titleKo: '초벌 건조',
        titleEn: 'Bisque & Sun Drying',
        description: '바닷바람을 맞히며 자연 건조한 뒤 800도에서 초벌 합니다.',
        keyAspect: '서해 해풍 자연 건조'
      },
      {
        stepNumber: 5,
        titleKo: '자연 재유 시유',
        titleEn: 'Ash Glaze Dipping',
        description: '기물 하단은 흙빛을 노출하고 상단부만 재유에 담가 대조적인 질감을 줍니다.',
        keyAspect: '흙의 생살과 유약의 대비'
      },
      {
        stepNumber: 6,
        titleKo: '너구리 가마 소성 (36시간)',
        titleEn: 'Traditional Tunnel Kiln Firing',
        description: '36시간 동안 꼬박 밤을 새워 참나무 장작을 먹이며 1,300도까지 불을 올립니다.',
        keyAspect: '가마 속 불길의 회오리가 남긴 요변(窯變)'
      }
    ],
    studioNotes: '변산반도 숲속에 위치한 전통 등요에서 차인을 위한 기물을 제작합니다.',
    accentColor: '#6B5B4D'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'prod_buncheong_oval',
    artisanId: 'artisan_yoon',
    nameKo: '[단독] 비정형 분청 덤벙 오벌 플레이트',
    nameEn: 'Handmade Asymmetric Buncheong Oval Plate',
    category: 'tableware',
    price: 68000,
    originalPrice: 75000,
    clayType: 'buncheong',
    clayNameKo: '산청 분청토 (조질토 배합)',
    glazeNameKo: '무광 백토 덤벙 및 천연 짚재유',
    kilnFiringKo: '1,260℃ 환원소성 (장작가마)',
    dimensions: '240 × 170 × 35 mm (±10mm 편차)',
    weight: '약 520g',
    inStock: 8,
    isLimited: true,
    isExclusive: true,
    leadTimeDays: 3,
    dishWasherSafe: true,
    microwaveSafe: false,
    description: '조선 분청사기의 전통 덤벙 기법을 현대의 식탁에 맞게 오벌 형태로 재해석한 플레이트입니다. 백토물에 자연스럽게 담갔다 빼낸 비정형의 유약 흐름과 테두리의 거친 흙맛이 요리의 색감을 더욱 돋보이게 해줍니다.',
    aestheticStory: '완벽한 타원이 아닌, 손으로 빚어낼 때 생겨난 미세한 곡선이 식탁 위에 부드러운 리듬을 부여합니다. 파스타, 샐러드, 메인 육류 요리는 물론 핑거푸드를 정갈하게 담아내기 좋습니다.',
    wabiSabiFeature: '가마 속 환원 불길에 의해 자연 발생한 미세한 흑갈색 철분점과 유약이 얇게 입혀진 부분의 붉은 흙빛 비침이 존재하며, 이는 단 하나뿐인 수공예의 증표입니다.',
    visualTheme: {
      bgGradient: 'from-[#EFE7DC] to-[#E3D7C5]',
      ceramicColor: '#F5EFE6',
      accentGlow: '#965C40',
      textureSeed: 'buncheong-texture',
      shapeType: 'oval_plate'
    }
  },
  {
    id: 'prod_celadon_teaset',
    artisanId: 'artisan_bae',
    nameKo: '사계(四季)를 담은 자연 재유 2인 다기 세트',
    nameEn: 'Four Seasons Natural Ash Glaze Tea Set for Two',
    category: 'tea',
    price: 145000,
    originalPrice: 160000,
    clayType: 'coarse_clay',
    clayNameKo: '부안 황토 배합 점토',
    glazeNameKo: '지리산 참나무 천연 재유 (Ash Glaze)',
    kilnFiringKo: '1,280℃ 환원 장작가마 소성 (36시간)',
    dimensions: '다관(180ml): 120 × 90 × 80 mm / 잔(50ml, 2ea): 65 × 65 × 45 mm',
    weight: '다관 약 280g, 찻잔 개당 약 90g',
    inStock: 5,
    isLimited: true,
    isExclusive: false,
    leadTimeDays: 4,
    dishWasherSafe: false,
    microwaveSafe: false,
    description: '물줄기 절수(切水)가 깔끔한 다관(차 주전자)과 손에 쥐었을 때 기분 좋은 온기를 전하는 찻잔 2구 세트입니다. 지리산 참나무 재를 정제해 만든 천연 유약이 차분한 올리브 브라운 톤의 깊이를 자아냅니다.',
    aestheticStory: '차를 우려내는 짧은 순간에도 마음이 고요해지도록 디자인되었습니다. 찻잔 표면에 맺힌 은은한 재유의 요변은 사계절 어느 찻자리에도 따뜻하게 녹아듭니다.',
    wabiSabiFeature: '참나무 재가 녹아내리며 만든 미세한 결정과 표면의 핀홀(미세한 기공)은 숨 쉬는 도자기 고유의 특징입니다.',
    visualTheme: {
      bgGradient: 'from-[#E2DED4] to-[#D5CEC0]',
      ceramicColor: '#6B5B4D',
      accentGlow: '#8C7B68',
      textureSeed: 'ash-texture',
      shapeType: 'tea_pot'
    }
  },
  {
    id: 'prod_moon_vase',
    artisanId: 'artisan_han',
    nameKo: '소담한 달항아리 미니 오브제 화병',
    nameEn: 'Handcrafted Minimal Moon Jar Miniature Vase',
    category: 'vase_object',
    price: 88000,
    clayType: 'white_porcelain',
    clayNameKo: '양구 백자토 (고령토)',
    glazeNameKo: '무광 실크 백유 (Satin Matte White)',
    kilnFiringKo: '1,280℃ 가스가마 고온소성',
    dimensions: '140 × 140 × 155 mm',
    weight: '약 680g',
    inStock: 12,
    isLimited: false,
    isExclusive: true,
    leadTimeDays: 2,
    dishWasherSafe: true,
    microwaveSafe: false,
    description: '조선 백자 달항아리의 넉넉한 품을 테이블 위에 놓기 좋은 아담한 크기로 축약한 오브제 화병입니다. 은은한 우윳빛 무광 질감이 꽃 한 줄기, 나뭇가지 하나를 꽂아두어도 공간의 분위기를 고요하게 정돈합니다.',
    aestheticStory: '위와 아래를 따로 빚어 이어 붙이는 전통 방식으로 만들어져 완벽한 구형이 아닌 자연스럽고 푸근한 일그러짐을 지닙니다.',
    wabiSabiFeature: '빛의 각도에 따라 은은하게 달라지는 상하 결합선의 미세한 굴곡과 부드러운 손자국이 특징입니다.',
    visualTheme: {
      bgGradient: 'from-[#F3EFE9] to-[#E9E3D8]',
      ceramicColor: '#FAF7F2',
      accentGlow: '#5C6D70',
      textureSeed: 'white-satin',
      shapeType: 'moon_jar'
    }
  },
  {
    id: 'prod_buncheong_bowl',
    artisanId: 'artisan_yoon',
    nameKo: '흙의 숨결 거친 분청 굽 높은 찬기',
    nameEn: 'Hand-carved Elevated Buncheong Stemmed Dish',
    category: 'tableware',
    price: 52000,
    originalPrice: 58000,
    clayType: 'buncheong',
    clayNameKo: '철분 함유 거친 분청토',
    glazeNameKo: '반무광 투명 재유',
    kilnFiringKo: '1,250℃ 환원소성',
    dimensions: '160 × 160 × 65 mm',
    weight: '약 380g',
    inStock: 9,
    isLimited: true,
    isExclusive: false,
    leadTimeDays: 2,
    dishWasherSafe: true,
    microwaveSafe: false,
    description: '높게 깎아낸 굽이 격식을 더해주는 비정형 찬기입니다. 제철 나물, 정갈한 다식, 디저트, 과일을 담았을 때 상차림의 중심을 잡아줍니다.',
    aestheticStory: '도공의 엄지손가락이 닿았던 가장자리의 압력 자국이 그대로 남아있어 만질 때마다 손에 닿는 촉감이 따뜻합니다.',
    wabiSabiFeature: '바닥 굽 부분의 거친 무유 흙살과 그릇 안쪽의 반짝이는 유약 피막의 질감 대비가 매력적입니다.',
    visualTheme: {
      bgGradient: 'from-[#ECE5DA] to-[#DFD5C6]',
      ceramicColor: '#C4B59F',
      accentGlow: '#965C40',
      textureSeed: 'stemmed-dish',
      shapeType: 'bowl'
    }
  },
  {
    id: 'prod_earth_lamp',
    artisanId: 'artisan_han',
    nameKo: '온기 머금은 토기 무드 테이블 조명',
    nameEn: 'Earthenware Ambient Table Lamp with Warm Glow',
    category: 'lighting',
    price: 198000,
    clayType: 'coarse_clay',
    clayNameKo: '자연 건조 적토 및 석영토',
    glazeNameKo: '무유 소성 (Bare Terracotta Texture)',
    kilnFiringKo: '1,150℃ 산화소성',
    dimensions: '160 × 160 × 240 mm (케이블 1.5m 패브릭 선)',
    weight: '약 1,100g',
    inStock: 4,
    isLimited: true,
    isExclusive: true,
    leadTimeDays: 5,
    dishWasherSafe: false,
    microwaveSafe: false,
    description: '흙 본연의 다공질 질감을 그대로 살려 유약을 바르지 않고 구워낸 세라믹 램프 베이스입니다. 빛이 흙의 표면에 부딪혀 반사될 때 방 안에 아늑하고 원초적인 노을빛을 채웁니다.',
    aestheticStory: '침대 머리맡이나 서재 책상 위에서 조용히 밤을 지켜줍니다. 3단계 디밍이 가능한 웜화이트 LED 모듈이 내장되어 있습니다.',
    wabiSabiFeature: '불길이 직접 닿은 면의 자연스러운 그을림과 붉은 벽돌빛의 농담 차이가 각 제품마다 유일합니다.',
    visualTheme: {
      bgGradient: 'from-[#E8DFD3] to-[#DCCEB9]',
      ceramicColor: '#A06245',
      accentGlow: '#D98243',
      textureSeed: 'earthen-lamp',
      shapeType: 'lantern'
    }
  },
  {
    id: 'prod_tea_caddy',
    artisanId: 'artisan_bae',
    nameKo: '은은한 흙빛 참나무 재유 밀폐 차호 (Tea Caddy)',
    nameEn: 'Wood-fired Ceramic Airtight Tea Caddy',
    category: 'tea',
    price: 76000,
    clayType: 'coarse_clay',
    clayNameKo: '부안 점토',
    glazeNameKo: '참나무 잿물 및 옻칠 뚜껑 접지',
    kilnFiringKo: '1,280℃ 장작가마 환원소성',
    dimensions: '95 × 95 × 110 mm (용량 약 80g 찻잎 보관)',
    weight: '약 340g',
    inStock: 7,
    isLimited: true,
    isExclusive: false,
    leadTimeDays: 3,
    dishWasherSafe: false,
    microwaveSafe: false,
    description: '찻잎의 향과 신선도를 지켜주는 도자기 차호입니다. 뚜껑 안쪽에 자연 코르크와 옻칠 마감을 더해 기밀성을 높였습니다.',
    aestheticStory: '찻자리에 놓아두는 것만으로도 고요한 다도의 정취를 더해줍니다. 오래 사용할수록 손의 유분과 찻물이 배어들어 더욱 깊은 광택을 띱니다.',
    wabiSabiFeature: '불길의 방향에 따라 한쪽 면은 차분한 녹갈색, 다른 한쪽 면은 짙은 차콜 브라운의 그라데이션을 띱니다.',
    visualTheme: {
      bgGradient: 'from-[#DFD9CD] to-[#D0C7B7]',
      ceramicColor: '#5C5447',
      accentGlow: '#8A7B66',
      textureSeed: 'tea-caddy',
      shapeType: 'tea_cup'
    }
  },
  {
    id: 'prod_facet_vase',
    artisanId: 'artisan_han',
    nameKo: '깎음의 미학 백자 면치기 롱 화병',
    nameEn: 'Faceted White Porcelain Tall Ikebana Vase',
    category: 'vase_object',
    price: 112000,
    clayType: 'white_porcelain',
    clayNameKo: '밀양 백자토',
    glazeNameKo: '유백색 매트 유약',
    kilnFiringKo: '1,280℃ 환원소성',
    dimensions: '90 × 90 × 260 mm',
    weight: '약 750g',
    inStock: 6,
    isLimited: false,
    isExclusive: false,
    leadTimeDays: 3,
    dishWasherSafe: true,
    microwaveSafe: false,
    description: '물레로 둥글게 뽑아 올린 원통을 날카로운 대나무 칼로 수작업 면치기(Facet cutting)하여 8개의 면을 만든 화병입니다.',
    aestheticStory: '면과 면이 만나는 모서리마다 빛과 그림자가 날카롭게 교차하며 건축적인 아름다움을 선사합니다.',
    wabiSabiFeature: '칼로 깎아낸 면의 폭과 각도가 기계처럼 일정하지 않고 손의 리듬에 따라 미세하게 달라집니다.',
    visualTheme: {
      bgGradient: 'from-[#F5EFE6] to-[#E5DDD0]',
      ceramicColor: '#EBE5DB',
      accentGlow: '#4A5B5C',
      textureSeed: 'facet-vase',
      shapeType: 'faceted_vase'
    }
  },
  {
    id: 'prod_noodle_bowl',
    artisanId: 'artisan_yoon',
    nameKo: '손자국 결이 살아있는 분청 면기 (2p 세트)',
    nameEn: 'Handmade Buncheong Noodle & Donburi Bowls (Set of 2)',
    category: 'tableware',
    price: 94000,
    originalPrice: 104000,
    clayType: 'buncheong',
    clayNameKo: '산청 분청토',
    glazeNameKo: '덤벙 백토 및 천연 재유',
    kilnFiringKo: '1,260℃ 환원소성',
    dimensions: '190 × 190 × 85 mm (개당)',
    weight: '개당 약 510g',
    inStock: 11,
    isLimited: false,
    isExclusive: true,
    leadTimeDays: 2,
    dishWasherSafe: true,
    microwaveSafe: false,
    description: '따뜻한 국수, 비빔밥, 덮밥을 담아내기 넉넉한 깊이감의 2구 면기 세트입니다. 그릇을 양손으로 감싸 쥐었을 때 전해지는 흙의 두께감이 국물의 온도를 오래 유지해 줍니다.',
    aestheticStory: '그릇 외면에 귓바퀴처럼 남겨진 도공의 손가락 홈은 그릇을 들고 마실 때 미끄러지지 않도록 도와주는 실용적 디자인입니다.',
    wabiSabiFeature: '두 개의 그릇이 쌍둥이처럼 같지 않고, 흙의 굽는 위치에 따라 미세한 톤 차이와 유약 번짐이 각기 다른 표정을 짓습니다.',
    visualTheme: {
      bgGradient: 'from-[#ECE5DC] to-[#DED4C7]',
      ceramicColor: '#D9CDBB',
      accentGlow: '#965C40',
      textureSeed: 'noodle-bowl',
      shapeType: 'bowl'
    }
  }
];

export const CURATED_COLLECTIONS: CuratedCollection[] = [
  {
    id: 'col_asymmetric_white',
    titleKo: '비정형 백자 & 분청 식기전',
    titleEn: 'Asymmetric White & Buncheong Tableware',
    subtitle: '정형화되지 않은 곡선이 주는 식탁의 여백',
    themeDescription: '공장에서 대량 찍어낸 완벽한 원형을 벗어나, 손끝의 감각과 중력이 빚어낸 유연한 선. 음식이 닿았을 때 비로소 완성되는 식기의 순수한 아름다움.',
    productIds: ['prod_buncheong_oval', 'prod_buncheong_bowl', 'prod_noodle_bowl'],
    curatorNote: '이번 기획전의 식기들은 어떤 음식을 담아도 그 요리의 본연의 색채를 따뜻하게 받쳐줍니다.'
  },
  {
    id: 'col_four_seasons_tea',
    titleKo: '사계(四季)를 담은 다기 컬렉션',
    titleEn: 'Four Seasons Teaware Gathering',
    subtitle: '차를 우리는 시간, 손끝에 머무는 온기',
    themeDescription: '참나무 장작 가마의 불길과 자연 잿물이 남긴 그윽한 빛깔. 찻잎이 물을 만나 피어나는 소리와 찻잔을 쥔 손에 스며드는 따뜻한 휴식.',
    productIds: ['prod_celadon_teaset', 'prod_tea_caddy'],
    curatorNote: '물줄기(절수)의 부드러움과 입술에 닿는 편안한 촉감을 가장 중요한 기준으로 큐레이션했습니다.'
  },
  {
    id: 'col_clay_objects',
    titleKo: '흙의 질감을 살린 오브제 화병 & 조명',
    titleEn: 'Textured Earthen Objects & Ambience',
    subtitle: '일상의 공간에 묵직한 고요를 들이는 법',
    themeDescription: '무광 백자의 절제된 면치기부터 거친 토기 조명까지. 특별한 날이 아니어도 그저 그 자리에 머무는 것만으로 공간의 온도를 바꾸는 공예품.',
    productIds: ['prod_moon_vase', 'prod_earth_lamp', 'prod_facet_vase'],
    curatorNote: '빛과 그림자가 도자기의 기벽에 머무는 순간을 경험해 보세요.'
  }
];

export const MATERIAL_GUIDE = {
  clays: [
    {
      nameKo: '분청토 (粉靑土)',
      nameEn: 'Buncheong Clay',
      texture: '거칠고 따뜻한 회청색 흙살',
      description: '철분과 모래 알갱이가 적절히 섞여 있어 구웠을 때 자연스러운 흑점(철분점)과 거친 손맛이 살아납니다. 조선 시대 백성과 도공들이 사랑했던 소박하고 자유분방한 흙입니다.'
    },
    {
      nameKo: '백자 고령토 (白磁土)',
      nameEn: 'Kaolin White Clay',
      texture: '곱고 치밀한 순백의 입자',
      description: '철분이 거의 없는 순도 높은 흙으로, 1,280도 이상의 고온에서 구워내면 유리질처럼 단단하고 맑은 소리를 냅니다. 담백하고 청아한 조형미를 표현하기에 최적입니다.'
    },
    {
      nameKo: '옹기토 및 적토 (赤土)',
      nameEn: 'Onggi & Earthen Red Clay',
      texture: '다공질의 숨 쉬는 흙',
      description: '통기성이 뛰어나 음식을 발효시키거나 차를 보관할 때 최상의 컨디션을 유지합니다. 유약을 바르지 않고 구우면 원초적인 흙 본래의 붉은 노을빛을 띱니다.'
    }
  ],
  kilns: [
    {
      nameKo: '전통 장작가마 (소나무 장작)',
      nameEn: 'Traditional Wood Kiln',
      temperature: '1,250℃ ~ 1,300℃ (24~36시간 소성)',
      feature: '가마 속에서 소나무 장작이 타며 날아간 재(Ash)가 도자기 표면에 얹혀 자연 유약이 되고, 산소를 차단하는 환원 분위기에서 오묘한 푸른빛과 붉은 불길 자국이 남습니다.'
    },
    {
      nameKo: '고온 환원 가스가마',
      nameEn: 'High-Temp Gas Kiln',
      temperature: '1,280℃ 정밀 제어',
      feature: '일정한 열효율과 불길 제어로 백자의 순백색과 은은한 푸른 기운을 가장 단단하고 결점 없이 이끌어냅니다.'
    }
  ],
  glazes: [
    {
      nameKo: '천연 재유 (Natural Ash Glaze)',
      feature: '지리산 참나무, 소나무, 볏짚 등을 태운 재를 정제해 만든 유약으로 인위적인 화학 착색제 없이 깊은 녹갈색과 올리브색 요변을 만들어냅니다.'
    },
    {
      nameKo: '무광 새틴 백유 (Satin Matte Glaze)',
      feature: '빛을 흡수하며 달걀 껍데기처럼 보드라운 감촉을 전하는 무광 유약으로 지문이 덜 묻고 눈부심 없는 편안한 질감을 선사합니다.'
    }
  ]
};

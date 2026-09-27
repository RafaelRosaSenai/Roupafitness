import { Product } from '../types';

export const LOGO_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDHWZK0otlAMH9rwU8aCbp3RQaUoiI8eHy0yV4e0aoupAQ3GbZeIShUgKJMeU_xhK0CCN82EbilZlDVL1DHNmaVCzhmdfgRouwq-PP504Ky4Sr-MhZteZvN5_UH1q1ZnqdHwaOsddLJLjnwMw0FXnyPU8ucZzvq0IjPBCzSxnzeb2P3250VTSWF3PhtNlSURmH5fcWRuQstsZ6u_BYZiEFB5VCDDIPwKJ6-QAXOOdEau822Yvt_NqG1oA';

export const HERO_IMAGE_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuA4ONeqIzsNLaoWNe-KV276aqzyRiU1RaCcLGi7-SYwoXvGVT2C8WHamu5Z6Ecw1u6JjLQm7uUl2e7hTeUObwLBZ8OGgqe3EtO_FcE_qvJJl8MOAFqsGUL9nlAp4OLk0hL50q3a47aPtT80TIRCunKEFC_RUK_cFKOSoqUSWDmBQGoFUC5arsrM1svaLSgMvRWff2tnFZYNDc8twAjy6X64yhHd18bNtMp2OFfNh9AT3ZSA-jbcYSUYaw';

export const PROMO_BANNER_IMAGE_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDpUybFtWMxIUkkXkRYzjdfUtbWjVIBDfCBUXB6bRM5jq1VNRJNFrsNdt6OnQIKB5SxQTtDqWb-s9yVQsCsbbVA9I1wKxTXn2iA1TI6c_39Vh0hO_ZglXHotRS-Nn8iv5gyf88qXBl-9-SEInwqYyCZ9norMG6I1OJGvbfLn6rwnzlSDdZIyc7ahPt3mPOqHKtKDquw-lXb6hnMhmYYPh30k7HDKSwFMJ1iGXYhh-ZlLvregUJgZle28w';

export const HERO_FEATURED_PRODUCT: Product = {
  id: 'armour-pro-aerofit',
  name: 'ArmourPro AeroFit Top',
  subtitle: 'Poliamida Ultra-Spun 280g/m²',
  description:
    'Desenvolvido com fios de poliamida de alta tenacidade e matriz de compressão inteligente. Suporta impactos explosivos com conforto hidrofílico Dry-Shield™.',
  price: 219.9,
  originalPrice: 299.9,
  installments: '3x de R$ 73,30 s/ juros',
  category: 'feminino',
  image: HERO_IMAGE_URL,
  tag: 'Dry-Shield™ Ativo',
  tagColor: 'neon',
  techTag: 'Compressão Nível 4',
  weight: '280g/m²',
  sizes: ['PP', 'P', 'M', 'G'],
  colors: [
    { name: 'Obsidian Black', hex: '#0a0e17' },
    { name: 'Stealth Grey', hex: '#31353f' },
    { name: 'Kinetic Lime', hex: '#c3f400' },
  ],
  specs: {
    compression: 4,
    breathability: 5,
    stretch: '4-Way 360°',
    composition: '82% Poliamida Ultra-Spun, 18% Elastano Creora®',
  },
};

export const PRODUCTS: Product[] = [
  {
    id: 'legging-sculpt-pro',
    name: 'Legging Sculpt Pro High-Waist',
    subtitle: 'Zero transparência e cós anatômico anti-deslizamento.',
    description:
      'A legging mais recomendada por atletas de crossfit e musculação pesada. Tecelagem com fibra AeroFit que garante opacidade de 100% no teste de agachamento mais profundo (Squat-Proof Garantido). Costura anatômica que não marca e não escorrega.',
    price: 189.9,
    originalPrice: 249.9,
    installments: '3x de R$ 63,30 s/ juros',
    category: 'feminino',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCkUiFgZTcYVbJAy9A9DPedPmb0-Fi5-DRH_2utsWb1TQhJfto5_9ggWqAgtmSEudo6Yg4pL2Hu4FYH1H9v-R0eDH7YWc6TVjbUvzJAN045HRwSC0gpaD00BTr7EEcFSKiRovePxgEjf607CXiLco3B_vJNLbuxkS1wvX8CoTjJvIAjD9RYosNaNhh6jWCa9Y6ZlWqydOXyr30uBoqGLkE_9PorUsubopFVf0QY3D6wCNnGaMeu0yve3A',
    tag: 'Mais Vendido',
    tagColor: 'neon',
    discountBadge: '-24% OFF',
    techTag: 'AeroFit Compression',
    sizes: ['PP', 'P', 'M', 'G', 'GG'],
    colors: [
      { name: 'Charcoal Black', hex: '#111827' },
      { name: 'Dark Slate', hex: '#1f2937' },
      { name: 'Forest Olive', hex: '#283500' },
    ],
    specs: {
      compression: 5,
      breathability: 5,
      stretch: '4-Way Squat-Proof',
      composition: '80% Microfibra Poliamida, 20% Spandex ActiveFlex',
    },
  },
  {
    id: 'top-compressao-force',
    name: 'Top Compressão Force Ultra',
    subtitle: 'Sustentação estruturada com costas nadador transpirável.',
    description:
      'Engenharia de amortecimento vertical para corridas e treinos de alto impacto. Bojos removíveis ultra-finos termomoldados e painéis posteriores em micro-telas para refrigeração instantânea.',
    price: 119.9,
    originalPrice: 149.9,
    installments: '2x de R$ 59,95 s/ juros',
    category: 'feminino',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBlJ4gc_vgBb3yg3I36GgEOQ_IaRdC4SPUBeGWLY7_8v_1VdfqHak1uWvIxqngo61znPqGDZSaoKabzwuQbQojhYsrkIfK-yOlKvkPrICp17DSc7H2JC9rlFj11AW8TlSn1dPoquUBhldBzdbWEbVyNvhSSZ6FXC6cVmU1r0U5HBqun6TKk8pQw5BhI37VDc125RXdE9qX4BbpbxC5OGAtHNwelnK96V5Mxx42qRbaYDzJaohzCc-38jA',
    tag: 'Lançamento',
    tagColor: 'cyan',
    techTag: 'Impacto Máximo',
    sizes: ['P', 'M', 'G'],
    colors: [
      { name: 'Pitch Black', hex: '#0f172a' },
      { name: 'Deep Smoke', hex: '#334155' },
    ],
    specs: {
      compression: 4,
      breathability: 5,
      stretch: 'Biomechanic Stabilizer',
      composition: '84% Poliamida Dry-Shield™, 16% Elastano High-Tenacity',
    },
  },
  {
    id: 'jaqueta-windbreaker-aerolight',
    name: 'Jaqueta Windbreaker AeroLight',
    subtitle: 'Corta-vento repelente à água com peso pluma de 160g.',
    description:
      'A proteção definitiva para treinos ao ar livre com clima imprevisível. Membrana Hydro-Shield 5K que repele garoas intensas enquanto permite a evasão do vapor metabólico. Dobrável no próprio bolso interno.',
    price: 279.9,
    originalPrice: 349.9,
    installments: '5x de R$ 55,98 s/ juros',
    category: 'masculino',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuArB-LG2vDZgzJreNzcJwFZ6S6CvAVKGEJGMZpCbBEi34yguhQeLNZKj8oqjPVHYBWYHgK7Ne2gEQZKy2HRJ9BmOzw71Ri1Ba_TQQ0GlGUpp2MsCF-7TkgmytqBfzN4nbL5RhO_MaUmmGIJfFdDZH0ZU_SMXcbXfPrT-w3VEQ2sHFjjRHmREtDENFV-IIiYvuNm6M-Q7OwMrE3lR7xDC0SNdsrv8p8ZI3Pf3_NYcWUoRjtvNey6wg0BPg',
    tag: 'Edição Limitada',
    tagColor: 'crimson',
    techTag: 'Hydro-Shield 5K',
    weight: '160g',
    sizes: ['P', 'M', 'G', 'GG'],
    colors: [
      { name: 'Matte Black / Neon Accent', hex: '#090d16' },
      { name: 'Graphite Grey', hex: '#374151' },
    ],
    specs: {
      compression: 1,
      breathability: 4,
      stretch: 'Mechanical Flex Ripstop',
      composition: '100% Micro Ripstop Nylon Hidrofóbico DWR 5000mm',
    },
  },
  {
    id: 'camiseta-seamless-breathable',
    name: 'Camiseta Seamless Breathable',
    subtitle: 'Sem costuras laterais, eliminação imediata de suor.',
    description:
      'Produzida em teares circulares italianos sem nenhuma costura lateral, eliminando o atrito cutâneo em longas distâncias. Canais de aeração Micro Mesh 3D mapeados termograficamente no peito e dorso.',
    price: 139.9,
    originalPrice: 179.9,
    installments: '2x de R$ 69,95 s/ juros',
    category: 'masculino',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBbBFNr6E3ZvSvByf-HHwvhUkZEj74Nm-gB4eFWaREYGm9DzI_1uasdY_v4KAF5RyeKqN4Xjp--jEAtIs-4xzY4XGgK9VG50bJaDeTcekKKfVnBoro7akZOTdpuWsVdfepwpV_2GIboKZUDvVQN5wvc53s6X3L5givff3StAMLm2qTMkymNn-SlVIm3l5XjtslJHdM2LYKhWvm9a6nBVSqom6sXjAzfpoTEnsxirdx5RT61_ibi-NWPcQ',
    tag: 'Seamless',
    tagColor: 'muted',
    techTag: 'Micro Mesh 3D',
    sizes: ['P', 'M', 'G', 'GG'],
    colors: [
      { name: 'Obsidian Black', hex: '#0f172a' },
      { name: 'Aero Blue Melange', hex: '#1e3a5f' },
      { name: 'Stealth Grey', hex: '#475569' },
    ],
    specs: {
      compression: 2,
      breathability: 5,
      stretch: 'Seamless Circular Knit',
      composition: '90% Poliamida Dry-Shield™, 10% Spandex Íons de Prata',
    },
  },
  {
    id: 'bermuda-compressao-pro-pocket',
    name: 'Bermuda Compressão Pro 2-in-1',
    subtitle: 'Bolso anti-queda para smartphone e cós com cordão embutido.',
    description:
      'Camada interna de alta compressão muscular que absorve o impacto do quadríceps e isquiotibiais, combinada com short externo ultraleve 4-way stretch. Bolso lateral interno selado que não balança o celular durante o sprint.',
    price: 169.9,
    originalPrice: 209.9,
    installments: '3x de R$ 56,63 s/ juros',
    category: 'masculino',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDpUybFtWMxIUkkXkRYzjdfUtbWjVIBDfCBUXB6bRM5jq1VNRJNFrsNdt6OnQIKB5SxQTtDqWb-s9yVQsCsbbVA9I1wKxTXn2iA1TI6c_39Vh0hO_ZglXHotRS-Nn8iv5gyf88qXBl-9-SEInwqYyCZ9norMG6I1OJGvbfLn6rwnzlSDdZIyc7ahPt3mPOqHKtKDquw-lXb6hnMhmYYPh30k7HDKSwFMJ1iGXYhh-ZlLvregUJgZle28w',
    tag: 'Novo Modelo',
    tagColor: 'neon',
    techTag: 'Dual-Layer System',
    sizes: ['P', 'M', 'G', 'GG'],
    colors: [
      { name: 'Total Black', hex: '#0a0e17' },
      { name: 'Army Olive', hex: '#2f3e24' },
    ],
    specs: {
      compression: 4,
      breathability: 5,
      stretch: 'Dual-Tech Kinetic',
      composition: 'Short interno 82% Poliamida, 18% Elastano / Externo 88% Poliéster reciclado',
    },
  },
  {
    id: 'shorts-ciclista-sculpt-pocket',
    name: 'Shorts Ciclista Sculpt c/ Bolso',
    subtitle: 'Cós compressivo alto e bolso lateral duplo invisível.',
    description:
      'Perfeito para musculação, corrida e spinning. O comprimento de 20cm evita atrito entre as coxas com fixador em silicone interno nas barras que impede a subida do tecido durante o movimento.',
    price: 149.9,
    originalPrice: 189.9,
    installments: '2x de R$ 74,95 s/ juros',
    category: 'feminino',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCkUiFgZTcYVbJAy9A9DPedPmb0-Fi5-DRH_2utsWb1TQhJfto5_9ggWqAgtmSEudo6Yg4pL2Hu4FYH1H9v-R0eDH7YWc6TVjbUvzJAN045HRwSC0gpaD00BTr7EEcFSKiRovePxgEjf607CXiLco3B_vJNLbuxkS1wvX8CoTjJvIAjD9RYosNaNhh6jWCa9Y6ZlWqydOXyr30uBoqGLkE_9PorUsubopFVf0QY3D6wCNnGaMeu0yve3A',
    tag: 'Destaque',
    tagColor: 'cyan',
    techTag: 'Silicone Grip Inverso',
    sizes: ['PP', 'P', 'M', 'G'],
    colors: [
      { name: 'Onyx Black', hex: '#111827' },
      { name: 'Charcoal Mist', hex: '#374151' },
    ],
    specs: {
      compression: 4,
      breathability: 5,
      stretch: '4-Way Squat-Proof',
      composition: '80% Poliamida de Alta Elasticidade, 20% Elastano',
    },
  },
  {
    id: 'meia-performance-anti-bolhas',
    name: 'Meias Compressão Grip Pro (Kit 3)',
    subtitle: 'Almofadamento anatômico e micro-sulcos de ventilação.',
    description:
      'Kit com 3 pares de meias técnicas com suporte ao arco plantar e fio CoolMax antibacteriano com nanopartículas de prata anti-odor. Mantém os pés secos mesmo em treinos de 2+ horas.',
    price: 79.9,
    originalPrice: 99.9,
    installments: 'À vista no PIX com 5% OFF',
    category: 'acessorios',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBbBFNr6E3ZvSvByf-HHwvhUkZEj74Nm-gB4eFWaREYGm9DzI_1uasdY_v4KAF5RyeKqN4Xjp--jEAtIs-4xzY4XGgK9VG50bJaDeTcekKKfVnBoro7akZOTdpuWsVdfepwpV_2GIboKZUDvVQN5wvc53s6X3L5givff3StAMLm2qTMkymNn-SlVIm3l5XjtslJHdM2LYKhWvm9a6nBVSqom6sXjAzfpoTEnsxirdx5RT61_ibi-NWPcQ',
    tag: 'Acessório Essencial',
    tagColor: 'muted',
    techTag: 'Fio Anti-Blister',
    sizes: ['35-38', '39-42', '43-46'],
    colors: [
      { name: 'Branco / Detalhe Neon', hex: '#ffffff' },
      { name: 'Preto / Detalhe Neon', hex: '#111827' },
    ],
    specs: {
      compression: 3,
      breathability: 5,
      stretch: 'Elastic Arch Lock',
      composition: '65% Algodão Penteado, 30% Poliamida, 5% Elastano',
    },
  },
  {
    id: 'garrafa-termica-vigor-pro',
    name: 'Garrafa Térmica Titan 950ml',
    subtitle: 'Aço inox cirúrgico 18/8 com isolamento a vácuo triplo.',
    description:
      'Mantém líquidos gelados por até 28 horas ou quentes por 14 horas sem suar na parte externa. Bocal rápido ergonômico com trava magnética e pintura eletrostática texturizada antiderrapante.',
    price: 159.9,
    originalPrice: 199.9,
    installments: '3x de R$ 53,30 s/ juros',
    category: 'acessorios',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuArB-LG2vDZgzJreNzcJwFZ6S6CvAVKGEJGMZpCbBEi34yguhQeLNZKj8oqjPVHYBWYHgK7Ne2gEQZKy2HRJ9BmOzw71Ri1Ba_TQQ0GlGUpp2MsCF-7TkgmytqBfzN4nbL5RhO_MaUmmGIJfFdDZH0ZU_SMXcbXfPrT-w3VEQ2sHFjjRHmREtDENFV-IIiYvuNm6M-Q7OwMrE3lR7xDC0SNdsrv8p8ZI3Pf3_NYcWUoRjtvNey6wg0BPg',
    tag: 'Térmica 28h',
    tagColor: 'cyan',
    techTag: 'Tri-Vacuum Wall',
    sizes: ['950ml'],
    colors: [
      { name: 'Obsidian Stealth', hex: '#0f172a' },
      { name: 'Lime Accent', hex: '#c3f400' },
    ],
    specs: {
      compression: 0,
      breathability: 0,
      stretch: 'Aço Inox 18/8',
      composition: 'Livre de BPA, Tampa em Polipropileno de Grau Alimentício',
    },
  },
];

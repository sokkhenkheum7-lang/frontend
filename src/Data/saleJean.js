export function getDiscountBadge(priceStr, originalPriceStr, manualDiscount) {
  if (manualDiscount) return manualDiscount;
  if (!priceStr || !originalPriceStr) return null;

  const current = parseFloat(priceStr.replace(/[^0-9.]/g, ""));
  const original = parseFloat(originalPriceStr.replace(/[^0-9.]/g, ""));

  if (isNaN(current) || isNaN(original) || original <= current) return null;

  const percent = Math.round(((original - current) / original) * 100);
  return `DISCOUNT -${percent}% OFF`;
}

export const categories = [
  "ALL JEANS",
  "WIDE LEG",
  "BAGGY & FLARE",
  "JEAN SHORTS",
  "Y2K & CARGO",
];

export const saleProducts = [
  {
    id: 1,
    title: "Wide Leg Raw Hem Jeans CL517",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-ysola-dark-wash-baggy-jeans-cs516-black-front-1.webp?pad_color=fff&v=1789516439&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-ysola-dark-wash-baggy-jeans-cs516-black-front-2.webp?pad_color=fff&v=1789516439&width=1400",
    price: "US $32.70",
    originalPrice: "US $125.50",
    colors: ["#1e293b", "#000000"],
    category: "WIDE LEG",
    isNew: true,
    discount: "-74% OFF",
  },
  {
    id: 2,
    title: "Dark Wash Baggy Skater Jeans",
    image:
      "https://lewkin.com/cdn/shop/files/001_Dark_20blue_3161f328-8b6d-4e4e-bbd3-1a3dd76d9bac.webp?pad_color=fff&v=1754524087&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/004_83222cf2-bb99-46bb-996a-c465a5b03f4b.webp?pad_color=fff&v=1754524636&width=1400",
    price: "US $36.90",
    originalPrice: "US $78.00",
    colors: ["#334155", "#0f172a"],
    category: "BAGGY & FLARE",
    isNew: true,
    discount: "-53% OFF",
  },
  {
    id: 3,
    title: "Gingham Cuff Jean Shorts",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-esme-gingham-cuff-jean-shorts-cl515-black-side-1_400x.webp?v=1784078015",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/001_Black_267ac3fc-639f-4cb3-9c4d-ca2bcc354985.webp?pad_color=fff&v=1766537137&width=1400",
    price: "US $23.00",
    originalPrice: "US $39.00",
    colors: ["#000000", "#ffffff"],
    category: "JEAN SHORTS",
    isNew: false,
    discount: "-41% OFF",
  },
  {
    id: 4,
    title: "High-Waist Washed Parachute Pants",
    image:
      "https://lewkin.com/cdn/shop/files/010_8_6cf2c4e7-6f7f-4ad1-8cb2-a4e65ce67b6d.jpg?pad_color=fff&v=1730166717&width=940",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/D003_Black_3_84efb0b1-20aa-40db-8624-695f79cba4a7.jpg?pad_color=fff&v=1730166717&width=940",
    price: "US $29.50",
    originalPrice: "US $64.00",
    colors: ["#3f6212", "#0f172a"],
    category: "Y2K & CARGO",
    isNew: true,
    discount: "-53% OFF",
  },
  {
    id: 5,
    title: "Low-Rise Y2K Denim Cargo Skirt",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-military-style-buttoned-crop-jacket-cs504-gray-front-1.webp?pad_color=fff&v=1788320185&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-military-style-buttoned-crop-jacket-cs504-gray-front-2.webp?pad_color=fff&v=1788320185&width=1400",
    price: "US $26.50",
    originalPrice: "US $58.00",
    colors: ["#4b5563", "#111827"],
    category: "Y2K & CARGO",
    isNew: true,
    discount: "-54% OFF",
  },
  {
    id: 6,
    title: "Acid Wash Flare Trousers",
    image:
      "https://lewkin.com/cdn/shop/files/001_Dark_20brown_3.jpg?pad_color=fff&v=1730166451&width=940",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/002_6_8673c59e-170d-4f92-ae7d-fcaf9bca4a21.jpg?pad_color=fff&v=1730166451&width=940",
    price: "US $34.00",
    originalPrice: "US $79.00",
    colors: ["#64748b", "#0f172a"],
    category: "BAGGY & FLARE",
    isNew: false,
    discount: "-56% OFF",
  },
  {
    id: 7,
    title: "Vintage Washed Wide Leg Jeans",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-vintage-graphic-u-neck-tee-il524-purple-view-1-1.webp?pad_color=fff&v=1784698062&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-vintage-graphic-u-neck-tee-il524-front-2.webp?pad_color=fff&v=1784698062&width=1400",
    price: "US $35.00",
    originalPrice: "US $82.00",
    colors: ["#64748b", "#cbd5e1"],
    category: "WIDE LEG",
    isNew: true,
    discount: "-57% OFF",
  },
  {
    id: 8,
    title: "Raw Cut Denim Bermuda Shorts",
    image:
      "https://lewkin.com/cdn/shop/files/001_Black_267ac3fc-639f-4cb3-9c4d-ca2bcc354985.webp?pad_color=fff&v=1766537137&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/002_c1c8355f-2a52-4d25-929b-f6e69d37622b.webp?pad_color=fff&v=1766537136&width=1400",
    price: "US $22.50",
    originalPrice: "US $48.00",
    colors: ["#000000", "#475569"],
    category: "JEAN SHORTS",
    isNew: false,
    discount: "-53% OFF",
  },
  {
    id: 9,
    title: "Multi-Pocket Tactical Cargo Jeans",
    image:
      "https://lewkin.com/cdn/shop/files/001_Silver_ee5584ea-5180-4d1e-92ab-4d579163e365.jpg?pad_color=fff&v=1730166142&width=940",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/002_12_8b71f448-0159-4c2d-bb5f-2c12ee706c3a.jpg?pad_color=fff&v=1730166143&width=940",
    price: "US $39.90",
    originalPrice: "US $89.00",
    colors: ["#334155", "#0284c7"],
    category: "Y2K & CARGO",
    isNew: true,
    discount: "-55% OFF",
  },
  {
    id: 10,
    title: "Pleated Denim Skort IG507",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-fleece-button-detail-cap-cg527-brown-front-1.webp?pad_color=fff&v=1787652415&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-fleece-button-detail-cap-cg527-brown-detail-2.webp?pad_color=fff&v=1787652415&width=1400",
    price: "US $24.00",
    originalPrice: "US $55.00",
    colors: ["#475569", "#000000"],
    category: "JEAN SHORTS",
    isNew: false,
    discount: "-56% OFF",
  },
  {
    id: 11,
    title: "Low Rise 90s Bootcut Flare Jeans",
    image:
      "https://lewkin.com/cdn/shop/files/002_light_20pink_64db71e6-af04-41a6-b9ca-22e4bf00ccfb.webp?pad_color=fff&v=1780542300&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/001_mint_da331fad-4484-4442-a323-0956dc4625fd.webp?pad_color=fff&v=1780542300&width=1400",
    price: "US $38.00",
    originalPrice: "US $85.00",
    colors: ["#0284c7", "#1e293b"],
    category: "BAGGY & FLARE",
    isNew: true,
    discount: "-55% OFF",
  },
  {
    id: 12,
    title: "Pleated Baggy Slouch Jeans",
    image:
      "https://lewkin.com/cdn/shop/files/002_4964440e-cb05-45ec-a5d3-83b26b67d829.webp?pad_color=fff&v=1780542367&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/009_d57d2963-aad3-4475-86aa-e3ce9622d50c.webp?pad_color=fff&v=1780542367&width=1400",
    price: "US $42.00",
    originalPrice: "US $92.00",
    colors: ["#334155", "#e2e8f0"],
    category: "WIDE LEG",
    isNew: false,
    discount: "-54% OFF",
  },
  {
    id: 13,
    title: "Distressed Raw Hem Jean Cutoffs",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-boat-neck-cropped-tee-cg503-blue-color-2-2.webp?pad_color=fff&v=1785387951&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-boat-neck-cropped-tee-cg503-white-front-1.webp?pad_color=fff&v=1785387951&width=1400",
    price: "US $21.00",
    originalPrice: "US $45.00",
    colors: ["#000000", "#ffffff"],
    category: "JEAN SHORTS",
    isNew: true,
    discount: "-53% OFF",
  },
  {
    id: 14,
    title: "Y2K Contrast Stitch Baggy Jeans",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-vintage-graphic-u-neck-tee-il524-black-color-14-14.webp?pad_color=fff&v=1784698062&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-vintage-graphic-u-neck-tee-il524-purple-front-9.webp?pad_color=fff&v=1784698062&width=1400",
    price: "US $37.50",
    originalPrice: "US $79.00",
    colors: ["#1e293b", "#000000"],
    category: "BAGGY & FLARE",
    isNew: false,
    discount: "-52% OFF",
  },
  {
    id: 15,
    title: "Overdyed Wide Leg Skate Denim",
    image:
      "https://lewkin.com/cdn/shop/files/001_White_92ded260-0335-4726-aea9-172dca448b24.webp?pad_color=fff&v=1781776981&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/002_1f63c208-a43d-4831-9573-c239c8de7bee.webp?pad_color=fff&v=1781776981&width=1400",
    price: "US $34.50",
    originalPrice: "US $76.00",
    colors: ["#64748b", "#000000"],
    category: "WIDE LEG",
    isNew: true,
    discount: "-55% OFF",
  },
  {
    id: 16,
    title: "Techwear Parachute Cargo Jeans",
    image:
      "https://lewkin.com/cdn/shop/files/002_c3496f7e-b25b-4140-8103-2d22a2895ae8.jpg?pad_color=fff&v=1755152218&width=940",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/004_37e2bf50-96fd-43d2-a28b-203c73ab916c.jpg?pad_color=fff&v=1755152218&width=940",
    price: "US $41.00",
    originalPrice: "US $88.00",
    colors: ["#0f172a", "#1e293b"],
    category: "Y2K & CARGO",
    isNew: true,
    discount: "-53% OFF",
  },
];

export const extraSaleProducts = [
  {
    id: 101,
    title: "Double Knee Wide Leg Denim",
    image:
      "https://lewkin.com/cdn/shop/files/001_Dark_20brown_3.jpg?pad_color=fff&v=1730166451&width=940",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/002_6_8673c59e-170d-4f92-ae7d-fcaf9bca4a21.jpg?pad_color=fff&v=1730166451&width=940",
    price: "US $39.00",
    originalPrice: "US $86.00",
    colors: ["#78350f", "#0f172a"],
    category: "WIDE LEG",
    isNew: true,
    discount: "-55% OFF",
  },
  {
    id: 102,
    title: "Super Baggy Destroyed Wash Jeans",
    image:
      "https://lewkin.com/cdn/shop/files/006_15_81fff632-96bb-4d4e-b212-7ce21dce359f.jpg?pad_color=fff&v=1730166143&width=940",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/004_16_4da613d8-46ed-4c62-8eb8-2032084922be.jpg?pad_color=fff&v=1730166143&width=940",
    price: "US $44.00",
    originalPrice: "US $96.00",
    colors: ["#1e293b", "#94a3b8"],
    category: "BAGGY & FLARE",
    isNew: true,
    discount: "-54% OFF",
  },
  {
    id: 103,
    title: "Vintage Stonewash Denim Jorts",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-esme-gingham-cuff-jean-shorts-cl515-black-side-1_400x.webp?v=1784078015",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/001_Black_267ac3fc-639f-4cb3-9c4d-ca2bcc354985.webp?pad_color=fff&v=1766537137&width=1400",
    price: "US $25.00",
    originalPrice: "US $52.00",
    colors: ["#0284c7", "#000000"],
    category: "JEAN SHORTS",
    isNew: false,
    discount: "-52% OFF",
  },
  {
    id: 104,
    title: "Utility Buckle Cyberpunk Cargo Pants",
    image:
      "https://lewkin.com/cdn/shop/files/001_Silver_ee5584ea-5180-4d1e-92ab-4d579163e365.jpg?pad_color=fff&v=1730166142&width=940",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/002_12_8b71f448-0159-4c2d-bb5f-2c12ee706c3a.jpg?pad_color=fff&v=1730166143&width=940",
    price: "US $45.00",
    originalPrice: "US $98.00",
    colors: ["#000000", "#64748b"],
    category: "Y2K & CARGO",
    isNew: true,
    discount: "-54% OFF",
  },
];
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
  "ALL OUTERWEAR",
  "JACKETS & COATS",
  "HOODIES & FLEECE",
  "CROPPED OUTERWEAR",
  "TRENCH & BLAZERS",
];

export const saleProducts = [
  {
    id: 1,
    title: "Graphic Oversized Zip-Up Hoodie CS516",
    image:
      "https://cdn.shopify.com/s/files/1/0600/4493/5332/files/lewkin-graphic-oversized-hoodie-cs516-dark-red-color-2-2_866x.webp?v=1789516521",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-graphic-oversized-hoodie-cs516-dark-gray-front-1.webp?pad_color=fff&v=1789516521&width=1400",
    price: "US $32.70",
    originalPrice: "US $125.50",
    colors: ["#1e293b", "#000000"],
    category: "HOODIES & FLEECE",
    isNew: true,
    discount: "-74% OFF",
  },
  {
    id: 2,
    title: "Military Style Buttoned Crop Jacket CS504",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-military-style-buttoned-crop-jacket-cs504-gray-front-1.webp?pad_color=fff&v=1788320185&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-military-style-buttoned-crop-jacket-cs504-gray-front-2.webp?pad_color=fff&v=1788320185&width=1400",
    price: "US $26.50",
    originalPrice: "US $58.00",
    colors: ["#4b5563", "#111827"],
    category: "CROPPED OUTERWEAR",
    isNew: true,
    discount: "-54% OFF",
  },
  {
    id: 3,
    title: "Cropped Moto Faux-Leather Jacket",
    image:
      "https://lewkin.com/cdn/shop/files/001_Silver_ee5584ea-5180-4d1e-92ab-4d579163e365.jpg?pad_color=fff&v=1730166142&width=940",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/002_12_8b71f448-0159-4c2d-bb5f-2c12ee706c3a.jpg?pad_color=fff&v=1730166143&width=940",
    price: "US $42.00",
    originalPrice: "US $95.00",
    colors: ["#000000", "#78350f"],
    category: "JACKETS & COATS",
    isNew: true,
    discount: "-55% OFF",
  },
  {
    id: 4,
    title: "Tailored Oversized Double-Breasted Blazer",
    image:
      "https://lewkin.com/cdn/shop/files/001_light_20gray_b0efe22c-165a-4b9d-95ed-75e0598ffd3a.webp?pad_color=fff&v=1756046559&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/002_2726ea1e-7b07-4001-90ac-cff2fe536f1c.webp?pad_color=fff&v=1756046559&width=1400",
    price: "US $48.00",
    originalPrice: "US $110.00",
    colors: ["#1e293b", "#94a3b8"],
    category: "TRENCH & BLAZERS",
    isNew: true,
    discount: "-56% OFF",
  },
  {
    id: 5,
    title: "Striped Colorblock Heavyweight Hoodie",
    image:
      "https://lewkin.com/cdn/shop/files/002_4964440e-cb05-45ec-a5d3-83b26b67d829.webp?pad_color=fff&v=1780542367&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/009_d57d2963-aad3-4475-86aa-e3ce9622d50c.webp?pad_color=fff&v=1780542367&width=1400",
    price: "US $28.00",
    originalPrice: "US $65.00",
    colors: ["#334155", "#e2e8f0"],
    category: "HOODIES & FLEECE",
    isNew: true,
    discount: "-57% OFF",
  },
  {
    id: 6,
    title: "V-Neck Crop Drawstring Hoodie CS516",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-v-neck-crop-hoodie-cs516-mint-front-1.webp?pad_color=fff&v=1789515979&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-v-neck-crop-hoodie-cs516-mint-front-2.webp?pad_color=fff&v=1789515979&width=1400",
    price: "US $28.00",
    originalPrice: "US $62.00",
    colors: ["#0284c7", "#ffffff", "#000000"],
    category: "CROPPED OUTERWEAR",
    isNew: false,
    discount: "-55% OFF",
  },
  {
    id: 7,
    title: "Classic Belted Longline Trench Coat",
    image:
      "https://lewkin.com/cdn/shop/files/001_Dark_20brown_3.jpg?pad_color=fff&v=1730166451&width=940",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/002_6_8673c59e-170d-4f92-ae7d-fcaf9bca4a21.jpg?pad_color=fff&v=1730166451&width=940",
    price: "US $54.00",
    originalPrice: "US $120.00",
    colors: ["#78350f", "#0f172a"],
    category: "TRENCH & BLAZERS",
    isNew: true,
    discount: "-55% OFF",
  },
  {
    id: 8,
    title: "Fleece Buttoned Collared Bomber Jacket",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-fleece-button-detail-cap-cg527-brown-front-1.webp?pad_color=fff&v=1787652415&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-fleece-button-detail-cap-cg527-brown-detail-2.webp?pad_color=fff&v=1787652415&width=1400",
    price: "US $34.00",
    originalPrice: "US $75.00",
    colors: ["#1e293b", "#000000"],
    category: "JACKETS & COATS",
    isNew: false,
    discount: "-55% OFF",
  },
  {
    id: 9,
    title: "Thermal Cozy Half-Zip Fleece Pullover",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-graphic-oversized-hoodie-cg527-dark-red-front-1.webp?pad_color=fff&v=1787652000&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-graphic-oversized-hoodie-cg527-blue-front-2.webp?pad_color=fff&v=1787652000&width=1400",
    price: "US $29.00",
    originalPrice: "US $62.00",
    colors: ["#fde047", "#ffffff"],
    category: "HOODIES & FLEECE",
    isNew: true,
    discount: "-53% OFF",
  },
  {
    id: 10,
    title: "Cropped Boxy Utility Field Jacket",
    image:
      "https://lewkin.com/cdn/shop/files/002_c3496f7e-b25b-4140-8103-2d22a2895ae8.jpg?pad_color=fff&v=1755152218&width=940",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/004_37e2bf50-96fd-43d2-a28b-203c73ab916c.jpg?pad_color=fff&v=1755152218&width=940",
    price: "US $36.00",
    originalPrice: "US $78.00",
    colors: ["#000000", "#334155"],
    category: "CROPPED OUTERWEAR",
    isNew: false,
    discount: "-54% OFF",
  },
  {
    id: 11,
    title: "Structured Minimalist Lapel Blazer",
    image:
      "https://lewkin.com/cdn/shop/files/001_White_92ded260-0335-4726-aea9-172dca448b24.webp?pad_color=fff&v=1781776981&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/002_1f63c208-a43d-4831-9573-c239c8de7bee.webp?pad_color=fff&v=1781776981&width=1400",
    price: "US $45.00",
    originalPrice: "US $96.00",
    colors: ["#3b0764", "#000000"],
    category: "TRENCH & BLAZERS",
    isNew: true,
    discount: "-53% OFF",
  },
  {
    id: 12,
    title: "Padded Puffer Streetwear Vest Jacket",
    image:
      "https://lewkin.com/cdn/shop/files/d003_Black_a65cac5a-c527-4b6a-bf95-a6b47c1a1e87.webp?pad_color=fff&v=1781776981&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/002_148023ee-53c8-4db8-bbd4-8c4d8f003c3f.webp?pad_color=fff&v=1781776783&width=1400",
    price: "US $38.00",
    originalPrice: "US $84.00",
    colors: ["#334155", "#e2e8f0"],
    category: "JACKETS & COATS",
    isNew: false,
    discount: "-55% OFF",
  },
  {
    id: 13,
    title: "Heavyweight Boxy Kangaroo Hoodie",
    image:
      "https://lewkin.com/cdn/shop/files/001_Black_267ac3fc-639f-4cb3-9c4d-ca2bcc354985.webp?pad_color=fff&v=1766537137&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/002_c1c8355f-2a52-4d25-929b-f6e69d37622b.webp?pad_color=fff&v=1766537136&width=1400",
    price: "US $26.00",
    originalPrice: "US $58.00",
    colors: ["#000000", "#ffffff"],
    category: "HOODIES & FLEECE",
    isNew: true,
    discount: "-55% OFF",
  },
  {
    id: 14,
    title: "Cropped Denim Trucker Jacket",
    image:
      "https://lewkin.com/cdn/shop/files/001_Dark_20blue_3161f328-8b6d-4e4e-bbd3-1a3dd76d9bac.webp?pad_color=fff&v=1754524087&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/004_83222cf2-bb99-46bb-996a-c465a5b03f4b.webp?pad_color=fff&v=1754524636&width=1400",
    price: "US $32.00",
    originalPrice: "US $69.00",
    colors: ["#475569", "#000000"],
    category: "CROPPED OUTERWEAR",
    isNew: true,
    discount: "-54% OFF",
  },
  {
    id: 15,
    title: "Double-Collar Vintage Windbreaker",
    image:
      "https://lewkin.com/cdn/shop/files/010_8_6cf2c4e7-6f7f-4ad1-8cb2-a4e65ce67b6d.jpg?pad_color=fff&v=1730166717&width=940",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/D003_Black_3_84efb0b1-20aa-40db-8624-695f79cba4a7.jpg?pad_color=fff&v=1730166717&width=940",
    price: "US $35.00",
    originalPrice: "US $78.00",
    colors: ["#0284c7", "#ffffff"],
    category: "JACKETS & COATS",
    isNew: false,
    discount: "-55% OFF",
  },
  {
    id: 16,
    title: "Modern Trench Coat with Tie Belt",
    image:
      "https://lewkin.com/cdn/shop/files/006_15_81fff632-96bb-4d4e-b212-7ce21dce359f.jpg?pad_color=fff&v=1730166143&width=940",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/004_16_4da613d8-46ed-4c62-8eb8-2032084922be.jpg?pad_color=fff&v=1730166143&width=940",
    price: "US $56.00",
    originalPrice: "US $125.00",
    colors: ["#000000", "#ffffff"],
    category: "TRENCH & BLAZERS",
    isNew: true,
    discount: "-55% OFF",
  },
];

export const extraSaleProducts = [
  {
    id: 101,
    title: "Sherpa Lined Mountain Fleece Jacket",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-vintage-graphic-u-neck-tee-il524-purple-view-1-1.webp?pad_color=fff&v=1784698062&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-vintage-graphic-u-neck-tee-il524-front-2.webp?pad_color=fff&v=1784698062&width=1400",
    price: "US $39.00",
    originalPrice: "US $86.00",
    colors: ["#4b5563", "#111827"],
    category: "HOODIES & FLEECE",
    isNew: true,
    discount: "-55% OFF",
  },
  {
    id: 102,
    title: "Oversized Leather Bomber Jacket",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-ysola-dark-wash-baggy-jeans-cs516-black-front-1.webp?pad_color=fff&v=1789516439&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-ysola-dark-wash-baggy-jeans-cs516-black-front-2.webp?pad_color=fff&v=1789516439&width=1400",
    price: "US $49.00",
    originalPrice: "US $108.00",
    colors: ["#64748b", "#0f172a"],
    category: "JACKETS & COATS",
    isNew: false,
    discount: "-55% OFF",
  },
  {
    id: 103,
    title: "Cropped Windbreaker Zip Shell",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-fitted-crop-top-cl515-dark-blue-front-1.webp?pad_color=fff&v=1784077838&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-fitted-crop-top-cl515-burgundy-side-2.webp?pad_color=fff&v=1784077838&width=1400",
    price: "US $27.00",
    originalPrice: "US $58.00",
    colors: ["#000000", "#ffffff"],
    category: "CROPPED OUTERWEAR",
    isNew: true,
    discount: "-53% OFF",
  },
  {
    id: 104,
    title: "Pinstripe Double Breasted Blazer",
    image:
      "https://lewkin.com/cdn/shop/files/001_Dark_20gray_5076a8f8-6829-4ddf-a04c-840288cc0ed8.jpg?pad_color=fff&v=1747874691&width=940",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/002_00691a35-5c98-48c6-90e6-03bad1580194.jpg?pad_color=fff&v=1747874691&width=940",
    price: "US $46.00",
    originalPrice: "US $99.00",
    colors: ["#000000", "#78350f"],
    category: "TRENCH & BLAZERS",
    isNew: true,
    discount: "-54% OFF",
  },
];
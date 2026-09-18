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
    title: "V-Neck Hooded Knit Sweater CS516",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-v-neck-hooded-knit-sweater-cs516-black-color-2-2.webp?height=903&v=1789516410",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-v-neck-sweatshirt-cs516-mint-color-2-2.webp?height=903&v=1789516060",
    price: "US $32.70",
    originalPrice: "US $125.50",
    colors: ["#1e293b", "#000000"],
    category: "KNIT SWEATERS",
    isNew: true,
    discount: "-74% OFF",
  },
  {
    id: 2,
    title: "Ribbed Knit Shrug Bolero Set",
    image:
      "https://lewkin.com/cdn/shop/files/001_light_20gray_b0efe22c-165a-4b9d-95ed-75e0598ffd3a.webp?pad_color=fff&v=1756046559&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/002_2726ea1e-7b07-4001-90ac-cff2fe536f1c.webp?pad_color=fff&v=1756046559&width=1400",
    price: "US $19.90",
    originalPrice: "US $42.00",
    colors: ["#cbd5e1", "#ffffff"],
    category: "CARDIGANS & BOLEROS",
    isNew: true,
    discount: "-52% OFF",
  },
  {
    id: 3,
    title: "Cropped Cable Knit Vest CG503",
    image:
      "https://lewkin.com/cdn/shop/files/002_c3496f7e-b25b-4140-8103-2d22a2895ae8.jpg?pad_color=fff&v=1755152218&width=940",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/004_37e2bf50-96fd-43d2-a28b-203c73ab916c.jpg?pad_color=fff&v=1755152218&width=940",
    price: "US $17.00",
    originalPrice: "US $35.00",
    colors: ["#cbd5e1", "#ffffff"],
    category: "CROP KNITS",
    isNew: false,
    discount: "-51% OFF",
  },
  {
    id: 4,
    title: "Oversized Vintage Graphic Sweater",
    image:
      "https://lewkin.com/cdn/shop/files/006_15_81fff632-96bb-4d4e-b212-7ce21dce359f.jpg?pad_color=fff&v=1730166143&width=940",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/004_16_4da613d8-46ed-4c62-8eb8-2032084922be.jpg?pad_color=fff&v=1730166143&width=940",
    price: "US $31.00",
    originalPrice: "US $62.00",
    colors: ["#1e293b", "#94a3b8"],
    category: "KNIT SWEATERS",
    isNew: true,
    discount: "-50% OFF",
  },
  {
    id: 5,
    title: "Striped Open-Front Knit Cardigan",
    image:
      "https://lewkin.com/cdn/shop/files/002_4964440e-cb05-45ec-a5d3-83b26b67d829.webp?pad_color=fff&v=1780542367&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/009_d57d2963-aad3-4475-86aa-e3ce9622d50c.webp?pad_color=fff&v=1780542367&width=1400",
    price: "US $28.00",
    originalPrice: "US $65.00",
    colors: ["#334155", "#e2e8f0"],
    category: "CARDIGANS & BOLEROS",
    isNew: true,
    discount: "-57% OFF",
  },
  {
    id: 6,
    title: "Ribbed V-Neck Crop Knit Top",
    image:
      "https://lewkin.com/cdn/shop/files/002_light_20pink_64db71e6-af04-41a6-b9ca-22e4bf00ccfb.webp?pad_color=fff&v=1780542300&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/001_mint_da331fad-4484-4442-a323-0956dc4625fd.webp?pad_color=fff&v=1780542300&width=1400",
    price: "US $15.20",
    originalPrice: "US $38.00",
    colors: ["#0284c7", "#ffffff", "#000000"],
    category: "CROP KNITS",
    isNew: false,
    discount: "-60% OFF",
  },
  {
    id: 7,
    title: "Chunky Turtleneck Knit Sweater",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-vintage-graphic-u-neck-tee-il524-purple-view-1-1.webp?pad_color=fff&v=1784698062&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-vintage-graphic-u-neck-tee-il524-front-2.webp?pad_color=fff&v=1784698062&width=1400",
    price: "US $35.00",
    originalPrice: "US $82.00",
    colors: ["#fef08a", "#ffffff"],
    category: "KNIT SWEATERS",
    isNew: true,
    discount: "-57% OFF",
  },
  {
    id: 8,
    title: "Tie-Front Sheer Bolero Knit",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-vintage-graphic-u-neck-tee-il524-black-color-14-14.webp?pad_color=fff&v=1784698062&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-vintage-graphic-u-neck-tee-il524-purple-front-9.webp?pad_color=fff&v=1784698062&width=1400",
    price: "US $18.50",
    originalPrice: "US $42.00",
    colors: ["#1e293b", "#000000"],
    category: "CARDIGANS & BOLEROS",
    isNew: false,
    discount: "-56% OFF",
  },
  {
    id: 9,
    title: "Off-Shoulder Ribbed Crop Knit",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-puff-sleeve-tee-il523-mint-front-1.webp?pad_color=fff&v=1784679956&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-puff-sleeve-tee-il523-charcoal-front-2.webp?pad_color=fff&v=1784679955&width=1400",
    price: "US $16.00",
    originalPrice: "US $36.00",
    colors: ["#fde047", "#ffffff"],
    category: "CROP KNITS",
    isNew: true,
    discount: "-55% OFF",
  },
  {
    id: 10,
    title: "Slouchy Distressed Pullover Knit",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-youth-graphic-short-sleeve-tee-il524-yellow-front-1.webp?pad_color=fff&v=1784698456&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-youth-graphic-short-sleeve-tee-il524-white-front-2.webp?pad_color=fff&v=1784698456&width=1400",
    price: "US $32.00",
    originalPrice: "US $68.00",
    colors: ["#000000", "#334155"],
    category: "KNIT SWEATERS",
    isNew: false,
    discount: "-53% OFF",
  },
  {
    id: 11,
    title: "Crochet Button-Down Cardigan",
    image:
      "https://lewkin.com/cdn/shop/files/001_White_92ded260-0335-4726-aea9-172dca448b24.webp?pad_color=fff&v=1781776981&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/002_1f63c208-a43d-4831-9573-c239c8de7bee.webp?pad_color=fff&v=1781776981&width=1400",
    price: "US $24.50",
    originalPrice: "US $52.00",
    colors: ["#3b0764", "#000000"],
    category: "CARDIGANS & BOLEROS",
    isNew: true,
    discount: "-53% OFF",
  },
  {
    id: 12,
    title: "Zip-Up Hooded Knit Cardigan",
    image:
      "https://lewkin.com/cdn/shop/files/d003_Black_a65cac5a-c527-4b6a-bf95-a6b47c1a1e87.webp?pad_color=fff&v=1781776981&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/002_148023ee-53c8-4db8-bbd4-8c4d8f003c3f.webp?pad_color=fff&v=1781776783&width=1400",
    price: "US $29.00",
    originalPrice: "US $65.00",
    colors: ["#334155", "#e2e8f0"],
    category: "CARDIGANS & BOLEROS",
    isNew: false,
    discount: "-55% OFF",
  },
  {
    id: 13,
    title: "Square-Neck Cropped Knit Top",
    image:
      "https://lewkin.com/cdn/shop/files/001_Black_267ac3fc-639f-4cb3-9c4d-ca2bcc354985.webp?pad_color=fff&v=1766537137&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/002_c1c8355f-2a52-4d25-929b-f6e69d37622b.webp?pad_color=fff&v=1766537136&width=1400",
    price: "US $14.50",
    originalPrice: "US $32.00",
    colors: ["#000000", "#ffffff"],
    category: "CROP KNITS",
    isNew: true,
    discount: "-55% OFF",
  },
  {
    id: 14,
    title: "Colorblock Crewneck Knit Sweater",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-fleece-button-detail-cap-cg527-brown-front-1.webp?pad_color=fff&v=1787652415&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-fleece-button-detail-cap-cg527-brown-detail-2.webp?pad_color=fff&v=1787652415&width=1400",
    price: "US $26.00",
    originalPrice: "US $58.00",
    colors: ["#475569", "#000000"],
    category: "KNIT SWEATERS",
    isNew: true,
    discount: "-55% OFF",
  },
  {
    id: 15,
    title: "Buttoned Ribbed Knit Bolero",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-graphic-oversized-hoodie-cg527-dark-red-front-1.webp?pad_color=fff&v=1787652000&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-graphic-oversized-hoodie-cg527-blue-front-2.webp?pad_color=fff&v=1787652000&width=1400",
    price: "US $17.50",
    originalPrice: "US $39.00",
    colors: ["#0284c7", "#ffffff"],
    category: "CARDIGANS & BOLEROS",
    isNew: false,
    discount: "-55% OFF",
  },
  {
    id: 16,
    title: "V-Neck Crop Knit Hoodie CS516",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-v-neck-crop-hoodie-cs516-mint-front-1.webp?pad_color=fff&v=1789515979&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-v-neck-crop-hoodie-cs516-mint-front-2.webp?pad_color=fff&v=1789515979&width=1400",
    price: "US $28.00",
    originalPrice: "US $62.00",
    colors: ["#000000", "#ffffff"],
    category: "CROP KNITS",
    isNew: true,
    discount: "-55% OFF",
  },
];

export const extraSaleProducts = [
  {
    id: 101,
    title: "Military Buttoned Knit Bolero Jacket",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-military-style-buttoned-crop-jacket-cs504-gray-front-1.webp?pad_color=fff&v=1788320185&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-military-style-buttoned-crop-jacket-cs504-gray-front-2.webp?pad_color=fff&v=1788320185&width=1400",
    price: "US $26.50",
    originalPrice: "US $58.00",
    colors: ["#4b5563", "#111827"],
    category: "CARDIGANS & BOLEROS",
    isNew: true,
    discount: "-54% OFF",
  },
  {
    id: 102,
    title: "Heavyweight Fisherman Rib Knit Sweater",
    image:
      "https://lewkin.com/cdn/shop/files/001_Dark_20brown_3.jpg?pad_color=fff&v=1730166451&width=940",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/002_6_8673c59e-170d-4f92-ae7d-fcaf9bca4a21.jpg?pad_color=fff&v=1730166451&width=940",
    price: "US $38.00",
    originalPrice: "US $84.00",
    colors: ["#64748b", "#0f172a"],
    category: "KNIT SWEATERS",
    isNew: false,
    discount: "-55% OFF",
  },
  {
    id: 103,
    title: "Fitted Halter Ribbed Crop Knit",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-fitted-crop-top-cl515-dark-blue-front-1.webp?pad_color=fff&v=1784077838&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-fitted-crop-top-cl515-burgundy-side-2.webp?pad_color=fff&v=1784077838&width=1400",
    price: "US $16.50",
    originalPrice: "US $36.00",
    colors: ["#000000", "#ffffff"],
    category: "CROP KNITS",
    isNew: true,
    discount: "-54% OFF",
  },
  {
    id: 104,
    title: "Boucle Fuzzy Knit Cardigan Coat",
    image:
      "https://lewkin.com/cdn/shop/files/001_Silver_ee5584ea-5180-4d1e-92ab-4d579163e365.jpg?pad_color=fff&v=1730166142&width=940",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/002_12_8b71f448-0159-4c2d-bb5f-2c12ee706c3a.jpg?pad_color=fff&v=1730166143&width=940",
    price: "US $42.00",
    originalPrice: "US $95.00",
    colors: ["#000000", "#78350f"],
    category: "CARDIGANS & BOLEROS",
    isNew: true,
    discount: "-55% OFF",
  },
];
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
  "Women's Sale",
  "Sale Top",
  "Accessories",
  "Sale Pants",
  "EverGreen",
];

export const saleProducts = [
  {
    id: 1,
    title: "Oversized Suede Zip-Up Jacket CS517",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-oversized-suede-zip-up-jacket-cs517-yellow-front-1.webp?pad_color=fff&v=1789529718&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-oversized-suede-zip-up-jacket-cs517-black-color-2-2.webp?pad_color=fff&v=1789529718&width=1400",
    price: "US $32.70",
    originalPrice: "US $125.50",
    colors: ["#ebe30d", "#000000", "#da4d0b"],
    category: "Sale Pants",
    isNew: true,
    discount: "-74% OFF",
  },
  {
    id: 2,
    title: "Raglan Shirred 3/4 Top",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-graphic-zip-up-jacket-cg519-yellow-front-1.webp?pad_color=fff&v=1786680337&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-graphic-zip-up-jacket-cg519-grey-front-2.webp?pad_color=fff&v=1786680337&width=1400",
    price: "US $18.90",
    originalPrice: "US $45.00",
    colors: ["#f4d405", "#3d3636"],
    category: "Sale Top",
    isNew: true,
    discount: "-58% OFF",
  },
  {
    id: 3,
    title: "Track Style Fleece Jacket CN528",
    image:
      "https://lewkin.com/cdn/shop/files/002_57ced760-45a3-4285-b686-34faa7c8c8f7.webp?pad_color=fff&v=1764233230&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/d002_Gray_824bad33-a67d-4fc3-ae06-1a459493de31.webp?pad_color=fff&v=1764234005&width=1400",
    price: "US $14.50",
    originalPrice: "US $35.00",
    colors: ["#0c5fc5", "#020101"],
    category: "Sale Top",
    isNew: false,
    discount: "-59% OFF",
  },
  {
    id: 4,
    title: "Drawstring Hooded Windbreaker CG512",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-drawstring-hooded-windbreaker-cg512-dark-green-front-1.webp?pad_color=fff&v=1786346741&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-drawstring-hooded-windbreaker-cg512-green-side-2.webp?pad_color=fff&v=1786346741&width=1400",
    price: "US $12.00",
    originalPrice: "US $29.00",
    colors: ["#000000", "#0d695f"],
    category: "Sale Top",
    isNew: true,
    discount: "-50% OFF",
  },
  {
    id: 5,
    title: "Striped Knit Cardigan CG517",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-striped-knit-cardigan-cg517-purple-front-1.webp?pad_color=fff&v=1786517717&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-striped-knit-cardigan-cg517-gray-front-2.webp?pad_color=fff&v=1786517717&width=1400",
    price: "US $28.00",
    originalPrice: "US $65.00",
    colors: ["#334155", "#e2e8f0"],
    category: "Sale Top",
    isNew: true,
    discount: "-57% OFF",
  },
  {
    id: 6,
    title: "V-Neck Short Sleeve Top",
    image:
      "https://lewkin.com/cdn/shop/files/002_light_20pink_64db71e6-af04-41a6-b9ca-22e4bf00ccfb.webp?pad_color=fff&v=1780542300&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/001_mint_da331fad-4484-4442-a323-0956dc4625fd.webp?pad_color=fff&v=1780542300&width=1400",
    price: "US $15.20",
    originalPrice: "US $38.00",
    colors: ["#0284c7", "#ffffff", "#000000"],
    category: "Sale Top",
    isNew: false,
    discount: "-60% OFF",
  },
  {
    id: 7,
    title: "Wide Leg Jeans CL517",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-striped-knit-cardigan-cg517-gray-color-11-11.webp?pad_color=fff&v=1786517717&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/002_00331b29-2491-4c03-ab8d-12ff95294584.webp?height=903&v=1755484650",
    price: "US $32.70",
    originalPrice: "US $125.50",
    colors: ["#fef08a", "#ffffff"],
    category: "Sale Pants",
    isNew: true,
    discount: "-74% OFF",
  },
  {
    id: 8,
    title: "Vintage Graphic U-Neck Tee IL524",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-tie-front-tube-top-and-cardigan-set-cg528-black-color-2-2.webp?height=903&v=1787807630",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-vintage-graphic-u-neck-tee-il524-purple-front-9.webp?pad_color=fff&v=1784698062&width=1400",
    price: "US $16.90",
    originalPrice: "US $39.90",
    colors: ["#1e293b", "#000000"],
    category: "Sale Top",
    isNew: false,
    discount: "-58% OFF",
  },
  {
    id: 9,
    title: "Youth Graphic Short Sleeve",
    image:
      "https://lewkin.com/cdn/shop/files/002_light_20pink_8d3f0d10-d0c1-463d-8e4f-f95f1abb8b8a.webp?height=903&v=1781504511",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-puff-sleeve-tee-il523-charcoal-front-2.webp?pad_color=fff&v=1784679955&width=1400",
    price: "US $14.00",
    originalPrice: "US $32.00",
    colors: ["#fde047", "#ffffff"],
    category: "Sale Top",
    isNew: true,
    discount: "-56% OFF",
  },
  {
    id: 10,
    title: "Puff Sleeve Henley Tee IL524",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-basic-v-neck-cardigan-cg506-white-front-2.webp?height=903&v=1785912780",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/002_white_3853dbfd-fcad-4d10-b199-7ea0200def05.webp?height=903&v=1775617022",
    price: "US $16.00",
    originalPrice: "US $38.00",
    colors: ["#000000", "#334155"],
    category: "Sale Top",
    isNew: false,
    discount: "-30% OFF",
  },
  {
    id: 11,
    title: "Vintage Graphic U-Neck Tee",
    image:
      "https://lewkin.com/cdn/shop/files/001_White_92ded260-0335-4726-aea9-172dca448b24.webp?pad_color=fff&v=1781776981&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/002_1f63c208-a43d-4831-9573-c239c8de7bee.webp?pad_color=fff&v=1781776981&width=1400",
    price: "US $15.50",
    originalPrice: "US $36.00",
    colors: ["#3b0764", "#000000"],
    category: "Sale Top",
    isNew: true,
    discount: "-40% OFF",
  },
  {
    id: 12,
    title: "Striped Colorblock Hoodie",
    image:
      "https://lewkin.com/cdn/shop/files/d003_Black_a65cac5a-c527-4b6a-bf95-a6b47c1a1e87.webp?pad_color=fff&v=1781776981&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/002_148023ee-53c8-4db8-bbd4-8c4d8f003c3f.webp?pad_color=fff&v=1781776783&width=1400",
    price: "US $28.00",
    originalPrice: "US $65.00",
    colors: ["#334155", "#e2e8f0"],
    category: "Sale Top",
    isNew: false,
    discount: "-25% OFF",
  },
  {
    id: 13,
    title: "Striped Shorts IG507",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-cable-knit-hooded-cardigan-cg519-mustard-front-1.webp?pad_color=fff&v=1786679934&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/002_c1c8355f-2a52-4d25-929b-f6e69d37622b.webp?pad_color=fff&v=1766537136&width=1400",
    price: "US $22.50",
    originalPrice: "US $48.00",
    colors: ["#000000", "#ffffff"],
    category: "Accessories",
    isNew: true,
    discount: "-15% OFF",
  },
  {
    id: 14,
    title: "Pleated Skort IG507",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-cable-knit-hooded-cardigan-cg519-gray-front-2.webp?pad_color=fff&v=1786679934&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-fleece-button-detail-cap-cg527-brown-detail-2.webp?pad_color=fff&v=1787652415&width=1400",
    price: "US $24.00",
    originalPrice: "US $55.00",
    colors: ["#475569", "#000000"],
    category: "Women's Sale",
    isNew: true,
    discount: "-20% OFF",
  },
  {
    id: 15,
    title: "V-Neck Short Sleeve Top",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-graphic-oversized-hoodie-cg527-dark-red-front-1.webp?pad_color=fff&v=1787652000&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-graphic-oversized-hoodie-cg527-blue-front-2.webp?pad_color=fff&v=1787652000&width=1400",
    price: "US $15.20",
    originalPrice: "US $38.00",
    colors: ["#0284c7", "#ffffff"],
    category: "Sale Top",
    isNew: false,
    discount: "-35% OFF",
  },
  {
    id: 16,
    title: "Short Sleeve Tee IL534",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-v-neck-hooded-knit-sweater-cs516-black-color-2-2.webp?height=903&v=1789516410",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-v-neck-sweatshirt-cs516-mint-color-2-2.webp?height=903&v=1789516060",
    price: "US $12.00",
    originalPrice: "US $29.00",
    colors: ["#000000", "#ffffff"],
    category: "Sale Top",
    isNew: true,
    discount: "-45% OFF",
  },
  {
    id: 17,
    title: "V-Neck Crop Hoodie CS516",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-v-neck-crop-hoodie-cs516-mint-front-1.webp?pad_color=fff&v=1789515979&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-v-neck-crop-hoodie-cs516-mint-front-2.webp?pad_color=fff&v=1789515979&width=1400",
    price: "US $110.00",
    originalPrice: "US $150.00",
    colors: ["#000000", "#ffffff"],
    category: "Sale Top",
    isNew: true,
    discount: "-26% OFF",
  },
  {
    id: 18,
    title: "Boat-Neck Cropped Tee CG503",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-boat-neck-cropped-tee-cg503-blue-color-2-2.webp?pad_color=fff&v=1785387951&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-boat-neck-cropped-tee-cg503-white-front-1.webp?pad_color=fff&v=1785387951&width=1400",
    price: "US $17.00",
    originalPrice: "US $26.00",
    colors: ["#000000", "#ffffff"],
    category: "Sale Top",
    isNew: true,
    discount: "-34% OFF",
  },
  {
    id: 19,
    title: "Fitted Crop Top CL515",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-fitted-crop-top-cl515-dark-blue-front-1.webp?pad_color=fff&v=1784077838&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-fitted-crop-top-cl515-burgundy-side-2.webp?pad_color=fff&v=1784077838&width=1400",
    price: "US $17.00",
    originalPrice: "US $29.00",
    colors: ["#000000", "#ffffff"],
    category: "Sale Top",
    isNew: true,
    discount: "-41% OFF",
  },
  {
    id: 20,
    title: "Gingham Cuff Jean Shorts",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-esme-gingham-cuff-jean-shorts-cl515-black-side-1_400x.webp?v=1784078015",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-fitted-crop-top-cl515-blue-front-12.webp?pad_color=fff&v=1784077838&width=1400",
    price: "US $23.00",
    originalPrice: "US $39.00",
    colors: ["#000000", "#ffffff"],
    category: "Sale Pants",
    isNew: true,
    discount: "-41% OFF",
  },
];

export const extraSaleProducts = [
  {
    id: 101,
    title: "Low-Rise Y2K Cargo Skirt",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-military-style-buttoned-crop-jacket-cs504-gray-front-1.webp?pad_color=fff&v=1788320185&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-military-style-buttoned-crop-jacket-cs504-gray-front-2.webp?pad_color=fff&v=1788320185&width=1400",
    price: "US $26.50",
    originalPrice: "US $58.00",
    colors: ["#4b5563", "#111827"],
    category: "Women's Sale",
    isNew: true,
    discount: "-54% OFF",
  },
  {
    id: 102,
    title: "Retro Ribbed Knit Bolero Set",
    image:
      "https://lewkin.com/cdn/shop/files/001_light_20gray_b0efe22c-165a-4b9d-95ed-75e0598ffd3a.webp?pad_color=fff&v=1756046559&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/002_2726ea1e-7b07-4001-90ac-cff2fe536f1c.webp?pad_color=fff&v=1756046559&width=1400",
    price: "US $19.90",
    originalPrice: "US $42.00",
    colors: ["#fef08a", "#e2e8f0"],
    category: "Sale Top",
    isNew: true,
    discount: "-52% OFF",
  },
  {
    id: 103,
    title: "Acid Wash Flare Trousers",
    image:
      "https://lewkin.com/cdn/shop/files/001_Dark_20brown_3.jpg?pad_color=fff&v=1730166451&width=940",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/002_6_8673c59e-170d-4f92-ae7d-fcaf9bca4a21.jpg?pad_color=fff&v=1730166451&width=940",
    price: "US $34.00",
    originalPrice: "US $79.00",
    colors: ["#64748b", "#0f172a"],
    category: "Sale Pants",
    isNew: false,
    discount: "-56% OFF",
  },
  {
    id: 104,
    title: "Cropped Moto Zip Jacket",
    image:
      "https://lewkin.com/cdn/shop/files/001_Silver_ee5584ea-5180-4d1e-92ab-4d579163e365.jpg?pad_color=fff&v=1730166142&width=940",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/002_12_8b71f448-0159-4c2d-bb5f-2c12ee706c3a.jpg?pad_color=fff&v=1730166143&width=940",
    price: "US $42.00",
    originalPrice: "US $95.00",
    colors: ["#000000", "#78350f"],
    category: "Women's Sale",
    isNew: true,
    discount: "-55% OFF",
  },
  {
    id: 105,
    title: "Oversized Vintage Graphic Sweater",
    image:
      "https://lewkin.com/cdn/shop/files/006_15_81fff632-96bb-4d4e-b212-7ce21dce359f.jpg?pad_color=fff&v=1730166143&width=940",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/004_16_4da613d8-46ed-4c62-8eb8-2032084922be.jpg?pad_color=fff&v=1730166143&width=940",
    price: "US $31.00",
    originalPrice: "US $62.00",
    colors: ["#1e293b", "#94a3b8"],
    category: "Sale Top",
    isNew: true,
    discount: "-50% OFF",
  },
  {
    id: 106,
    title: "Ruched Asymmetrical Mini Dress",
    image:
      "https://lewkin.com/cdn/shop/files/001_Red_d076de2b-79dd-4b67-b6dc-5d126dbe6c7d.jpg?pad_color=fff&v=1730166717&width=940",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/002_6_50923c0d-a7ba-4fa3-ac91-3060f2b11483.jpg?pad_color=fff&v=1730166717&width=940",
    price: "US $25.00",
    originalPrice: "US $55.00",
    colors: ["#be123c", "#000000"],
    category: "Women's Sale",
    isNew: false,
    discount: "-54% OFF",
  },
  {
    id: 107,
    title: "High-Waist Washed Parachute Pants",
    image:
      "https://lewkin.com/cdn/shop/files/010_8_6cf2c4e7-6f7f-4ad1-8cb2-a4e65ce67b6d.jpg?pad_color=fff&v=1730166717&width=940",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/D003_Black_3_84efb0b1-20aa-40db-8624-695f79cba4a7.jpg?pad_color=fff&v=1730166717&width=940",
    price: "US $29.50",
    originalPrice: "US $64.00",
    colors: ["#3f6212", "#0f172a"],
    category: "Sale Pants",
    isNew: true,
    discount: "-53% OFF",
  },
  {
    id: 108,
    title: "Chunky Buckle Platform Boots",
    image:
      "https://lewkin.com/cdn/shop/files/001_Dark_20gray_5076a8f8-6829-4ddf-a04c-840288cc0ed8.jpg?pad_color=fff&v=1747874691&width=940",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/002_00691a35-5c98-48c6-90e6-03bad1580194.jpg?pad_color=fff&v=1747874691&width=940",
    price: "US $48.00",
    originalPrice: "US $110.00",
    colors: ["#000000"],
    category: "Accessories",
    isNew: true,
    discount: "-56% OFF",
  },
];
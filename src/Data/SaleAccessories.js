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
  "ALL ACCESSORIES",
  "BAGS & BACKPACKS",
  "HEADWEAR & CAPS",
  "JEWELRY & BELTS",
  "FOOTWEAR",
];

export const saleProducts = [
  {
    id: 1,
    title: "Chunky Buckle Platform Boots",
    image:
      "https://lewkin.com/cdn/shop/files/001_Dark_20gray_5076a8f8-6829-4ddf-a04c-840288cc0ed8.jpg?pad_color=fff&v=1747874691&width=940",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/002_00691a35-5c98-48c6-90e6-03bad1580194.jpg?pad_color=fff&v=1747874691&width=940",
    price: "US $48.00",
    originalPrice: "US $110.00",
    colors: ["#000000", "#1e293b"],
    category: "FOOTWEAR",
    isNew: true,
    discount: "-56% OFF",
  },
  {
    id: 2,
    title: "Fleece Button Detail Cap CG527",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-fleece-button-detail-cap-cg527-brown-front-1.webp?pad_color=fff&v=1787652415&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-fleece-button-detail-cap-cg527-brown-detail-2.webp?pad_color=fff&v=1787652415&width=1400",
    price: "US $14.50",
    originalPrice: "US $32.00",
    colors: ["#78350f", "#000000"],
    category: "HEADWEAR & CAPS",
    isNew: true,
    discount: "-55% OFF",
  },
  {
    id: 3,
    title: "Y2K Grommet Leather Eyelet Belt",
    image:
      "https://lewkin.com/cdn/shop/files/001_Black_267ac3fc-639f-4cb3-9c4d-ca2bcc354985.webp?pad_color=fff&v=1766537137&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/002_c1c8355f-2a52-4d25-929b-f6e69d37622b.webp?pad_color=fff&v=1766537136&width=1400",
    price: "US $12.00",
    originalPrice: "US $26.00",
    colors: ["#000000", "#cbd5e1"],
    category: "JEWELRY & BELTS",
    isNew: false,
    discount: "-54% OFF",
  },
  {
    id: 4,
    title: "Nylon Drawstring Crossbody Sling Bag",
    image:
      "https://lewkin.com/cdn/shop/files/001_Silver_ee5584ea-5180-4d1e-92ab-4d579163e365.jpg?pad_color=fff&v=1730166142&width=940",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/002_12_8b71f448-0159-4c2d-bb5f-2c12ee706c3a.jpg?pad_color=fff&v=1730166143&width=940",
    price: "US $24.00",
    originalPrice: "US $52.00",
    colors: ["#64748b", "#000000"],
    category: "BAGS & BACKPACKS",
    isNew: true,
    discount: "-54% OFF",
  },
  {
    id: 5,
    title: "Ribbed Knit Slouchy Beanie Hat",
    image:
      "https://lewkin.com/cdn/shop/files/001_light_20gray_b0efe22c-165a-4b9d-95ed-75e0598ffd3a.webp?pad_color=fff&v=1756046559&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/002_2726ea1e-7b07-4001-90ac-cff2fe536f1c.webp?pad_color=fff&v=1756046559&width=1400",
    price: "US $11.50",
    originalPrice: "US $24.00",
    colors: ["#94a3b8", "#000000"],
    category: "HEADWEAR & CAPS",
    isNew: true,
    discount: "-52% OFF",
  },
  {
    id: 6,
    title: "Chunky Lug Sole Oxford Derby Shoes",
    image:
      "https://lewkin.com/cdn/shop/files/001_Dark_20brown_3.jpg?pad_color=fff&v=1730166451&width=940",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/002_6_8673c59e-170d-4f92-ae7d-fcaf9bca4a21.jpg?pad_color=fff&v=1730166451&width=940",
    price: "US $44.00",
    originalPrice: "US $96.00",
    colors: ["#000000", "#451a03"],
    category: "FOOTWEAR",
    isNew: false,
    discount: "-54% OFF",
  },
  {
    id: 7,
    title: "Silver Multi-Layer Chain Necklace",
    image:
      "https://lewkin.com/cdn/shop/files/001_White_92ded260-0335-4726-aea9-172dca448b24.webp?pad_color=fff&v=1781776981&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/002_1f63c208-a43d-4831-9573-c239c8de7bee.webp?pad_color=fff&v=1781776981&width=1400",
    price: "US $13.00",
    originalPrice: "US $28.00",
    colors: ["#e2e8f0", "#94a3b8"],
    category: "JEWELRY & BELTS",
    isNew: true,
    discount: "-54% OFF",
  },
  {
    id: 8,
    title: "Multi-Pocket Tactical Utility Backpack",
    image:
      "https://lewkin.com/cdn/shop/files/d003_Black_a65cac5a-c527-4b6a-bf95-a6b47c1a1e87.webp?pad_color=fff&v=1781776981&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/002_148023ee-53c8-4db8-bbd4-8c4d8f003c3f.webp?pad_color=fff&v=1781776783&width=1400",
    price: "US $38.00",
    originalPrice: "US $84.00",
    colors: ["#000000", "#334155"],
    category: "BAGS & BACKPACKS",
    isNew: true,
    discount: "-55% OFF",
  },
  {
    id: 9,
    title: "Distressed Vintage Washed Baseball Cap",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-vintage-graphic-u-neck-tee-il524-black-color-14-14.webp?pad_color=fff&v=1784698062&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-vintage-graphic-u-neck-tee-il524-purple-front-9.webp?pad_color=fff&v=1784698062&width=1400",
    price: "US $15.00",
    originalPrice: "US $32.00",
    colors: ["#1e293b", "#000000"],
    category: "HEADWEAR & CAPS",
    isNew: false,
    discount: "-53% OFF",
  },
  {
    id: 10,
    title: "Gothic Studded Western Waist Belt",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-ysola-dark-wash-baggy-jeans-cs516-black-front-1.webp?pad_color=fff&v=1789516439&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-ysola-dark-wash-baggy-jeans-cs516-black-front-2.webp?pad_color=fff&v=1789516439&width=1400",
    price: "US $14.00",
    originalPrice: "US $30.00",
    colors: ["#000000", "#94a3b8"],
    category: "JEWELRY & BELTS",
    isNew: true,
    discount: "-53% OFF",
  },
  {
    id: 11,
    title: "Cyberpunk Pocket Shoulder Mini Bag",
    image:
      "https://lewkin.com/cdn/shop/files/010_8_6cf2c4e7-6f7f-4ad1-8cb2-a4e65ce67b6d.jpg?pad_color=fff&v=1730166717&width=940",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/D003_Black_3_84efb0b1-20aa-40db-8624-695f79cba4a7.jpg?pad_color=fff&v=1730166717&width=940",
    price: "US $22.00",
    originalPrice: "US $48.00",
    colors: ["#000000", "#3f6212"],
    category: "BAGS & BACKPACKS",
    isNew: true,
    discount: "-54% OFF",
  },
  {
    id: 12,
    title: "Square Toe Faux Leather Ankle Boots",
    image:
      "https://lewkin.com/cdn/shop/files/006_15_81fff632-96bb-4d4e-b212-7ce21dce359f.jpg?pad_color=fff&v=1730166143&width=940",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/004_16_4da613d8-46ed-4c62-8eb8-2032084922be.jpg?pad_color=fff&v=1730166143&width=940",
    price: "US $52.00",
    originalPrice: "US $115.00",
    colors: ["#000000", "#78350f"],
    category: "FOOTWEAR",
    isNew: true,
    discount: "-55% OFF",
  },
  {
    id: 13,
    title: "Corduroy Newsboy Baker Boy Cap",
    image:
      "https://lewkin.com/cdn/shop/files/002_c3496f7e-b25b-4140-8103-2d22a2895ae8.jpg?pad_color=fff&v=1755152218&width=940",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/004_37e2bf50-96fd-43d2-a28b-203c73ab916c.jpg?pad_color=fff&v=1755152218&width=940",
    price: "US $16.00",
    originalPrice: "US $34.00",
    colors: ["#475569", "#000000"],
    category: "HEADWEAR & CAPS",
    isNew: false,
    discount: "-53% OFF",
  },
  {
    id: 14,
    title: "Silver Chunky Punk Ring Set (6-Pack)",
    image:
      "https://lewkin.com/cdn/shop/files/002_light_20pink_64db71e6-af04-41a6-b9ca-22e4bf00ccfb.webp?pad_color=fff&v=1780542300&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/001_mint_da331fad-4484-4442-a323-0956dc4625fd.webp?pad_color=fff&v=1780542300&width=1400",
    price: "US $9.90",
    originalPrice: "US $22.00",
    colors: ["#cbd5e1"],
    category: "JEWELRY & BELTS",
    isNew: true,
    discount: "-55% OFF",
  },
  {
    id: 15,
    title: "Canvas Y2K Hobo Shoulder Bag",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-vintage-graphic-u-neck-tee-il524-purple-view-1-1.webp?pad_color=fff&v=1784698062&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-vintage-graphic-u-neck-tee-il524-front-2.webp?pad_color=fff&v=1784698062&width=1400",
    price: "US $21.00",
    originalPrice: "US $46.00",
    colors: ["#fef08a", "#000000"],
    category: "BAGS & BACKPACKS",
    isNew: true,
    discount: "-54% OFF",
  },
  {
    id: 16,
    title: "Combat Lace-Up Platform Shoes",
    image:
      "https://lewkin.com/cdn/shop/files/002_4964440e-cb05-45ec-a5d3-83b26b67d829.webp?pad_color=fff&v=1780542367&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/009_d57d2963-aad3-4475-86aa-e3ce9622d50c.webp?pad_color=fff&v=1780542367&width=1400",
    price: "US $46.00",
    originalPrice: "US $98.00",
    colors: ["#000000", "#334155"],
    category: "FOOTWEAR",
    isNew: false,
    discount: "-53% OFF",
  },
];

export const extraSaleProducts = [
  {
    id: 101,
    title: "Puffer Quilted Large Tote Bag",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-military-style-buttoned-crop-jacket-cs504-gray-front-1.webp?pad_color=fff&v=1788320185&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-military-style-buttoned-crop-jacket-cs504-gray-front-2.webp?pad_color=fff&v=1788320185&width=1400",
    price: "US $28.00",
    originalPrice: "US $62.00",
    colors: ["#4b5563", "#000000"],
    category: "BAGS & BACKPACKS",
    isNew: true,
    discount: "-55% OFF",
  },
  {
    id: 102,
    title: "Double Buckle Chelsea Boots",
    image:
      "https://lewkin.com/cdn/shop/files/001_Dark_20blue_3161f328-8b6d-4e4e-bbd3-1a3dd76d9bac.webp?pad_color=fff&v=1754524087&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/004_83222cf2-bb99-46bb-996a-c465a5b03f4b.webp?pad_color=fff&v=1754524636&width=1400",
    price: "US $49.00",
    originalPrice: "US $105.00",
    colors: ["#000000"],
    category: "FOOTWEAR",
    isNew: true,
    discount: "-53% OFF",
  },
  {
    id: 103,
    title: "Faux Fur Fluffy Bucket Hat",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-puff-sleeve-tee-il523-mint-front-1.webp?pad_color=fff&v=1784679956&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-puff-sleeve-tee-il523-charcoal-front-2.webp?pad_color=fff&v=1784679955&width=1400",
    price: "US $15.50",
    originalPrice: "US $34.00",
    colors: ["#ffffff", "#000000"],
    category: "HEADWEAR & CAPS",
    isNew: true,
    discount: "-54% OFF",
  },
  {
    id: 104,
    title: "Heart Lock Pendant Layered Chain",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-boat-neck-cropped-tee-cg503-blue-color-2-2.webp?pad_color=fff&v=1785387951&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-boat-neck-cropped-tee-cg503-white-front-1.webp?pad_color=fff&v=1785387951&width=1400",
    price: "US $11.00",
    originalPrice: "US $24.00",
    colors: ["#cbd5e1"],
    category: "JEWELRY & BELTS",
    isNew: false,
    discount: "-54% OFF",
  },
];
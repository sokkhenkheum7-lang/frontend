export function getDiscountBadge(priceStr, originalPriceStr, manualDiscount) {
  if (manualDiscount) return manualDiscount;
  if (!priceStr || !originalPriceStr) return null;

  const current = parseFloat(priceStr.replace(/[^0-9.]/g, ""));
  const original = parseFloat(originalPriceStr.replace(/[^0-9.]/g, ""));

  if (isNaN(current) || isNaN(original) || original <= current) return null;

  const percent = Math.round(((original - current) / original) * 100);
  return `-${percent}% OFF`;
}

export const categories = [
  "ALL",
  "SALE TOPS",
  "SALE BOTTOMS",
  "SALE OUTERWEAR",
  "SALE SHOES",
  "SALE ACCESSORIES",
];

export const saleProducts = [
  {
    id: 1,
    title: "Men's Graphic Hoodie IS516",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-mens-graphic-hoodie-is516-1-dark-blue-front-1.webp?pad_color=fff&v=1789522728&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-mens-graphic-hoodie-is516-1-black-color-2-2.webp?pad_color=fff&v=1789522728&width=1400",
    price: "US $32.70",
    originalPrice: "US $125.50",
    colors: ["#0f459c", "#000000"],
    category: "SALE TOPS",
    isNew: true,
    discount: "-74% OFF",
  },
  {
    id: 2,
    title: "Dark Wash Baggy Skater Jeans",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-mens-graphic-hoodie-is516-1-red-color-5-5.webp?pad_color=fff&v=1789522728&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-mens-graphic-hoodie-is516-1-gray-color-8-8.webp?pad_color=fff&v=1789522727&width=1400",
    price: "US $36.90",
    originalPrice: "US $78.00",
    colors: ["#334155", "#671111"],
    category: "SALE BOTTOMS",
    isNew: true,
    discount: "-53% OFF",
  },
  {
    id: 3,
    title: "Men's Oversized Graphic Hoodie IS504",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-mens-oversized-graphic-hoodie-is504-black-front-1.webp?pad_color=fff&v=1788326689&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-mens-oversized-graphic-hoodie-is504-gray-color-2-2.webp?pad_color=fff&v=1788326690&width=1400",
    price: "US $18.90",
    originalPrice: "US $45.00",
    colors: ["#cbd5e1", "#74c627"],
    category: "SALE TOPS",
    isNew: true,
    discount: "-58% OFF",
  },
  {
    id: 4,
    title: "High-Waist Washed Parachute Pants",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-mens-oversized-graphic-hoodie-is504-navy-side-5.webp?pad_color=fff&v=1788326689&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-mens-oversized-graphic-hoodie-is504-gray-side-3.webp?pad_color=fff&v=1788326689&width=1400",
    price: "US $29.50",
    originalPrice: "US $64.00",
    colors: ["#3f6212", "#0f172a"],
    category: "SALE BOTTOMS",
    isNew: true,
    discount: "-53% OFF",
  },
  {
    id: 5,
    title: "Graphic Oversized Zip-Up Hoodie CS516",
    image:
      "https://lewkin.com/cdn/shop/files/001_Black_1_f0816660-e068-4458-8eb9-1d59a07c4cf3.jpg?pad_color=fff&v=1736842488&width=940",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/002_17_fc3e0649-e0af-43f3-8ca6-a8f0ec5774a0.jpg?pad_color=fff&v=1736842488&width=940",
    price: "US $32.70",
    originalPrice: "US $125.50",
    colors: ["#1e293b", "#000000"],
    category: "SALE OUTERWEAR",
    isNew: true,
    discount: "-74% OFF",
  },
  {
    id: 6,
    title: "Acid Wash Flare Trousers",
    image:
      "https://lewkin.com/cdn/shop/files/D002_Light_20beige_dbc9edac-4d54-455c-8ecd-8614e25fda06.jpg?pad_color=fff&v=1736844146&width=940",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/D003_Blue_5b57fa29-03d3-4d39-8f0f-08f3ce3f3992.jpg?pad_color=fff&v=1736844146&width=940",
    price: "US $34.00",
    originalPrice: "US $79.00",
    colors: ["#64748b", "#0f172a"],
    category: "SALE BOTTOMS",
    isNew: false,
    discount: "-56% OFF",
  },
  {
    id: 7,
    title: "Cropped Moto Faux-Leather Jacket",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-mens-sheer-striped-long-sleeve-knit-top-ig520-black-front-1.webp?pad_color=fff&v=1787185857&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-mens-sheer-striped-long-sleeve-knit-top-ig520-gray-color-2-2.webp?pad_color=fff&v=1787185857&width=1400",
    price: "US $42.00",
    originalPrice: "US $95.00",
    colors: ["#000000", "#78350f"],
    category: "SALE OUTERWEAR",
    isNew: true,
    discount: "-55% OFF",
  },
  {
    id: 8,
    title: "Raw Cut Denim Bermuda Shorts",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-mens-sheer-striped-long-sleeve-knit-top-ig520-blue-color-6-6.webp?pad_color=fff&v=1787185857&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-mens-sheer-striped-long-sleeve-knit-top-ig520-grey-front-12.webp?pad_color=fff&v=1787185857&width=1400",
    price: "US $22.50",
    originalPrice: "US $48.00",
    colors: ["#000000", "#475569"],
    category: "SALE BOTTOMS",
    isNew: false,
    discount: "-53% OFF",
  },
  {
    id: 9,
    title: "Chunky Lug Sole Oxford Derby Shoes",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-mens-pintuck-wide-leg-cotton-pants-beige-is516-1-beige-back-1.webp?pad_color=fff&v=1789522617&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-mens-pintuck-wide-leg-cotton-pants-beige-is516-1-beige-front-10.webp?pad_color=fff&v=1789522617&width=1400",
    price: "US $44.00",
    originalPrice: "US $96.00",
    colors: ["#000000", "#451a03"],
    category: "SALE SHOES",
    isNew: true,
    discount: "-54% OFF",
  },
  {
    id: 10,
    title: "Fleece Button Detail Cap CG527",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-mens-buttoned-striped-layered-pants-is511-black-front-1.webp?pad_color=fff&v=1789088222&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-mens-buttoned-striped-layered-pants-is511-black-front-2.webp?pad_color=fff&v=1789088222&width=1400",
    price: "US $14.50",
    originalPrice: "US $32.00",
    colors: ["#78350f", "#000000"],
    category: "SALE ACCESSORIES",
    isNew: false,
    discount: "-55% OFF",
  },
  {
    id: 11,
    title: "Youth Graphic Short Sleeve Tee",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-mens-parachute-nylon-pants-black-is511-black-back-15.webp?pad_color=fff&v=1789087766&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-mens-parachute-nylon-pants-black-is511-black-color-16-16.webp?pad_color=fff&v=1789087766&width=1400",
    price: "US $16.00",
    originalPrice: "US $38.00",
    colors: ["#000000", "#334155"],
    category: "SALE TOPS",
    isNew: true,
    discount: "-58% OFF",
  },
  {
    id: 12,
    title: "Striped Colorblock Heavyweight Hoodie",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-mens-parachute-nylon-pants-black-is511-black-side-2.webp?pad_color=fff&v=1789087766&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-mens-parachute-nylon-pants-black-is511-black-side-12.webp?pad_color=fff&v=1789087766&width=1400",
    price: "US $28.00",
    originalPrice: "US $65.00",
    colors: ["#334155", "#e2e8f0"],
    category: "SALE OUTERWEAR",
    isNew: false,
    discount: "-57% OFF",
  },
  {
    id: 13,
    title: "Y2K Grommet Leather Eyelet Belt",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-mens-plaid-hooded-long-sleeve-is510-dark-brown-front-1.webp?v=1789006282",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-mens-plaid-hooded-long-sleeve-is510-white-side-2.webp?pad_color=fff&v=1789006282&width=1400",
    price: "US $12.00",
    originalPrice: "US $26.00",
    colors: ["#000000", "#cbd5e1"],
    category: "SALE ACCESSORIES",
    isNew: true,
    discount: "-54% OFF",
  },
  {
    id: 14,
    title: "Pleated Baggy Slouch Jeans",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-mens-plaid-hooded-long-sleeve-is510-white-front-6.webp?pad_color=fff&v=1789006282&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-mens-plaid-hooded-long-sleeve-is510-dark-blue-color-7-7.webp?pad_color=fff&v=1789006282&width=1400",
    price: "US $37.50",
    originalPrice: "US $79.00",
    colors: ["#475569", "#000000"],
    category: "SALE BOTTOMS",
    isNew: true,
    discount: "-52% OFF",
  },
  {
    id: 15,
    title: "Chunky Buckle Platform Boots",
    image:
      "https://lewkin.com/cdn/shop/files/02_84e49aa5-6b82-4065-b526-846fe092e8f6.webp?height=903&v=1770623523",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-mens-pigment-crewneck-sweatshirt-is511-gray-color-2-2.webp?height=903&v=1789087832",
    price: "US $48.00",
    originalPrice: "US $110.00",
    colors: ["#000000", "#1e293b"],
    category: "SALE SHOES",
    isNew: true,
    discount: "-56% OFF",
  },
  {
    id: 16,
    title: "Multi-Pocket Tactical Utility Backpack",
    image:
      "https://cdn.shopify.com/s/files/1/0600/4493/5332/files/lewkin-mens-cable-knit-sweater-is510-dark-blue-front-1_256x.webp?v=1789006919",
    hoverImage:
      "https://cdn.shopify.com/s/files/1/0600/4493/5332/files/lewkin-mens-graphic-hoodie-is516-1-dark-blue-front-1_256x.webp?v=1789522728",
    price: "US $38.00",
    originalPrice: "US $84.00",
    colors: ["#000000", "#334155"],
    category: "SALE ACCESSORIES",
    isNew: true,
    discount: "-55% OFF",
  },
];

// Actual Men's extra items with fixed URLs and categories
export const extraSaleProducts = [
  {
    id: 101,
    title: "Double Knee Wide Leg Denim",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-mens-plaid-hooded-long-sleeve-is510-dark-brown-front-1.webp?pad_color=fff&v=1789006282&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-mens-plaid-hooded-long-sleeve-is510-white-side-2.webp?pad_color=fff&v=1789006282&width=1400",
    price: "US $39.00",
    originalPrice: "US $86.00",
    colors: ["#78350f", "#0f172a"],
    category: "SALE BOTTOMS",
    isNew: true,
    discount: "-55% OFF",
  },
  {
    id: 102,
    title: "Double Buckle Chelsea Boots",
    image:
      "https://lewkin.com/cdn/shop/files/001_Light_20beige_8c91e710-1c6f-4ebd-bcc4-2c4eed262102.jpg?pad_color=fff&v=1726102903&width=940",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/002_2_0d091777-3bb7-4f11-a8fa-66499b084af1.jpg?pad_color=fff&v=1726102904&width=940",
    price: "US $49.00",
    originalPrice: "US $105.00",
    colors: ["#000000"],
    category: "SALE SHOES",
    isNew: true,
    discount: "-53% OFF",
  },
  {
    id: 103,
    title: "Military Buttoned Crop Jacket CS504",
    image:
      "https://lewkin.com/cdn/shop/files/D002_Light_20blue_29593546-4212-43e8-8814-e74532a7b9a7.jpg?pad_color=fff&v=1726102904&width=940",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/D003_Dark_20gray_e585ac16-80d1-4d8e-a25b-2fb51426a5a6.jpg?pad_color=fff&v=1726102904&width=940",
    price: "US $26.50",
    originalPrice: "US $58.00",
    colors: ["#4b5563", "#111827"],
    category: "SALE OUTERWEAR",
    isNew: true,
    discount: "-54% OFF",
  },
  {
    id: 104,
    title: "Raglan Oversized Long Sleeve Shirt",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-mens-basic-corduroy-quarter-zip-sweatshirt-is511-black-side-2.webp?height=903&v=1789088955",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-mens-snap-button-cardigan-is511-red-front-2.webp?height=903&v=1789088253",
    price: "US $22.00",
    originalPrice: "US $48.00",
    colors: ["#ffffff", "#000000"],
    category: "SALE TOPS",
    isNew: false,
    discount: "-54% OFF",
  },
];
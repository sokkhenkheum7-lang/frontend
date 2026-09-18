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
  "JEANS",
  "PARACHUTE PANTS",
  "TROUSERS",
  "SHORTS",
  "CARGO PANTS",
];

export const saleProducts = [
  {
    id: 201,
    title: "Dark Wash Baggy Skater Jeans",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-mens-graphic-hoodie-is516-1-red-color-5-5.webp?pad_color=fff&v=1789522728&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-mens-graphic-hoodie-is516-1-gray-color-8-8.webp?pad_color=fff&v=1789522727&width=1400",
    price: "US $36.90",
    originalPrice: "US $78.00",
    colors: ["#334155", "#671111"],
    category: "JEANS",
    isNew: true,
    discount: "-53% OFF",
  },
  {
    id: 202,
    title: "High-Waist Washed Parachute Pants",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-mens-oversized-graphic-hoodie-is504-navy-side-5.webp?pad_color=fff&v=1788326689&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-mens-oversized-graphic-hoodie-is504-gray-side-3.webp?pad_color=fff&v=1788326689&width=1400",
    price: "US $29.50",
    originalPrice: "US $64.00",
    colors: ["#3f6212", "#0f172a"],
    category: "PARACHUTE PANTS",
    isNew: true,
    discount: "-53% OFF",
  },
  {
    id: 203,
    title: "Acid Wash Flare Relaxed Trousers",
    image:
      "https://lewkin.com/cdn/shop/files/D002_Light_20beige_dbc9edac-4d54-455c-8ecd-8614e25fda06.jpg?pad_color=fff&v=1736844146&width=940",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/D003_Blue_5b57fa29-03d3-4d39-8f0f-08f3ce3f3992.jpg?pad_color=fff&v=1736844146&width=940",
    price: "US $34.00",
    originalPrice: "US $79.00",
    colors: ["#64748b", "#0f172a"],
    category: "TROUSERS",
    isNew: false,
    discount: "-56% OFF",
  },
  {
    id: 204,
    title: "Raw Cut Denim Bermuda Shorts",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-mens-sheer-striped-long-sleeve-knit-top-ig520-blue-color-6-6.webp?pad_color=fff&v=1787185857&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-mens-sheer-striped-long-sleeve-knit-top-ig520-grey-front-12.webp?pad_color=fff&v=1787185857&width=1400",
    price: "US $22.50",
    originalPrice: "US $48.00",
    colors: ["#000000", "#475569"],
    category: "SHORTS",
    isNew: false,
    discount: "-53% OFF",
  },
  {
    id: 205,
    title: "Pleated Baggy Slouch Jeans",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-mens-plaid-hooded-long-sleeve-is510-white-front-6.webp?pad_color=fff&v=1789006282&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-mens-plaid-hooded-long-sleeve-is510-dark-blue-color-7-7.webp?pad_color=fff&v=1789006282&width=1400",
    price: "US $37.50",
    originalPrice: "US $79.00",
    colors: ["#475569", "#000000"],
    category: "JEANS",
    isNew: true,
    discount: "-52% OFF",
  },
  {
    id: 206,
    title: "Pintuck Wide Leg Cotton Pants",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-mens-pintuck-wide-leg-cotton-pants-beige-is516-1-beige-back-1.webp?pad_color=fff&v=1789522617&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-mens-pintuck-wide-leg-cotton-pants-beige-is516-1-beige-front-10.webp?pad_color=fff&v=1789522617&width=1400",
    price: "US $31.00",
    originalPrice: "US $68.00",
    colors: ["#e2d9cc", "#171717"],
    category: "TROUSERS",
    isNew: false,
    discount: "-54% OFF",
  },
  {
    id: 207,
    title: "Buttoned Striped Layered Pants IS511",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-mens-buttoned-striped-layered-pants-is511-black-front-1.webp?pad_color=fff&v=1789088222&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-mens-buttoned-striped-layered-pants-is511-black-front-2.webp?pad_color=fff&v=1789088222&width=1400",
    price: "US $35.00",
    originalPrice: "US $76.00",
    colors: ["#000000", "#334155"],
    category: "CARGO PANTS",
    isNew: true,
    discount: "-54% OFF",
  },
  {
    id: 208,
    title: "Parachute Nylon Track Pants",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-mens-parachute-nylon-pants-black-is511-black-back-15.webp?pad_color=fff&v=1789087766&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-mens-parachute-nylon-pants-black-is511-black-color-16-16.webp?pad_color=fff&v=1789087766&width=1400",
    price: "US $33.50",
    originalPrice: "US $72.00",
    colors: ["#000000", "#1e293b"],
    category: "PARACHUTE PANTS",
    isNew: true,
    discount: "-53% OFF",
  },
];

export const extraSaleProducts = [
  {
    id: 301,
    title: "Double Knee Wide Leg Denim",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-mens-plaid-hooded-long-sleeve-is510-dark-brown-front-1.webp?pad_color=fff&v=1789006282&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-mens-plaid-hooded-long-sleeve-is510-white-side-2.webp?pad_color=fff&v=1789006282&width=1400",
    price: "US $39.00",
    originalPrice: "US $86.00",
    colors: ["#78350f", "#0f172a"],
    category: "JEANS",
    isNew: true,
    discount: "-55% OFF",
  },
  {
    id: 302,
    title: "Vintage Washed Carpenter Denim",
    image:
      "https://lewkin.com/cdn/shop/files/001_Dark_20brown_3.jpg?pad_color=fff&v=1730166451&width=940",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/002_6_8673c59e-170d-4f92-ae7d-fcaf9bca4a21.jpg?pad_color=fff&v=1730166451&width=940",
    price: "US $36.00",
    originalPrice: "US $80.00",
    colors: ["#451a03", "#172554"],
    category: "JEANS",
    isNew: true,
    discount: "-55% OFF",
  },
  {
    id: 303,
    title: "Drawstring Cargo Utility Sweatpants",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-mens-parachute-nylon-pants-black-is511-black-side-2.webp?pad_color=fff&v=1789087766&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-mens-parachute-nylon-pants-black-is511-black-side-12.webp?pad_color=fff&v=1789087766&width=1400",
    price: "US $27.00",
    originalPrice: "US $58.00",
    colors: ["#334155", "#0f172a"],
    category: "CARGO PANTS",
    isNew: false,
    discount: "-53% OFF",
  },
  {
    id: 304,
    title: "Multi-Pocket Tactical Tech Shorts",
    image:
      "https://lewkin.com/cdn/shop/files/lewkin-mens-sheer-striped-long-sleeve-knit-top-ig520-grey-front-12.webp?pad_color=fff&v=1787185857&width=1400",
    hoverImage:
      "https://lewkin.com/cdn/shop/files/lewkin-mens-sheer-striped-long-sleeve-knit-top-ig520-blue-color-6-6.webp?pad_color=fff&v=1787185857&width=1400",
    price: "US $24.00",
    originalPrice: "US $52.00",
    colors: ["#000000", "#1e293b"],
    category: "SHORTS",
    isNew: true,
    discount: "-54% OFF",
  },
];
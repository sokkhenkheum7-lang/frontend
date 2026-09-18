import { getDiscountBadge } from "../Data/salesData";

export default function ProductCard({
    item,
    isWishlisted,
    selectedColorIndex,
    onSelectProduct,
    onToggleWishlist,
    onSelectColor,
}) {
    const discountText = getDiscountBadge(
        item.price,
        item.originalPrice,
        item.discount
    );

    return (
        <div
            onClick={() => onSelectProduct(item)}
            className="flex flex-col group cursor-pointer"
        >
            {/* Product Media Box */}
            <div className="relative aspect-[4/6] w-full bg-[#f6f6f8] overflow-hidden">
                {/* Badges */}
                <div className="absolute top-2 left-2 z-20 flex items-center text-[10px] font-semibold uppercase tracking-wider">
                    {item.isNew !== false && (
                        <span className="bg-[#b38b7d] text-white px-2 py-0.5">NEW</span>
                    )}
                    {discountText && (
                        <span
                            className={`bg-[#ff4d6d] text-white px-3 py-0.5 ${item.isNew !== false ? "ml-[2px]" : ""
                                }`}
                        >
                            {discountText}
                        </span>
                    )}
                </div>

                {/* Wishlist Button */}
                <button
                    type="button"
                    onClick={(e) => {
                        e.stopPropagation();
                        onToggleWishlist(item.id);
                    }}
                    className="absolute top-2.5 right-2.5 z-20 p-1 text-neutral-400 hover:text-black transition cursor-pointer"
                >
                    <svg
                        className={`w-4 h-4 transition-colors ${isWishlisted
                            ? "fill-[#ff2a5f] text-[#ff2a5f]"
                            : "fill-transparent stroke-neutral-400"
                            }`}
                        viewBox="0 0 24 24"
                        strokeWidth="1.8"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                        />
                    </svg>
                </button>

                {/* Primary Default Image */}
                <img
                    src={item.image}
                    alt={item.title}
                    className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-500 ease-out ${item.hoverImage
                        ? "opacity-100 group-hover:opacity-0 group-hover:scale-105"
                        : "group-hover:scale-103"
                        }`}
                />

                {/* Secondary Hover Image */}
                {item.hoverImage && (
                    <img
                        src={item.hoverImage}
                        alt={`${item.title} alternate view`}
                        className="absolute inset-0 w-full h-full object-cover object-top opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-out"
                    />
                )}
            </div>

            {/* Info & Colors */}
            <div className="mt-3 flex flex-col gap-1">
                <h3 className="text-xs sm:text-[16px] font-semibold text-neutral-900 tracking-tight leading-snug truncate">
                    {item.title}
                </h3>

                <div className="flex items-center justify-between mt-1">
                    <div className="flex items-center gap-1.5 text-[13]">
                        <span className="text-[#ff334b] font-bold">{item.price}</span>
                        <span className="text-neutral-400 line-through text-[14px] font-normal">
                            {item.originalPrice}
                        </span>
                    </div>

                    {item.colors && (
                        <div className="flex items-center gap-2">
                            {item.colors.slice(0, 5).map((color, idx) => (
                                <button
                                    key={idx}
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onSelectColor(item.id, idx);
                                    }}
                                    style={{ backgroundColor: color }}
                                    className={`w-4 h-4 border border-neutral-300 ${selectedColorIndex === idx
                                            ? "ring-1 ring-black ring-offset-1"
                                            : ""
                                        }`}
                                />
                            ))}

                            {item.colors.length > 5 && (
                                <span className="text-xs text-neutral-500">
                                    +{item.colors.length - 5}
                                </span>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
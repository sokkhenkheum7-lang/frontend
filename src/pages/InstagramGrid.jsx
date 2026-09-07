const items = [
  {
    id: 1,
    img1: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
    alt: "Streetwear Look 1",
  },
  {
    id: 2,
    img1: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    alt: "Streetwear Look 2",
  },
  {
    id: 3,
    img1: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
    alt: "Streetwear Look 3",
  },
  {
    id: 4,
    img1: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=800&q=80",
    alt: "Streetwear Look 4",
  },
  {
    id: 5,
    img1: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    alt: "Streetwear Look 5",
  },
  {
    id: 6,
    img1: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    alt: "Streetwear Look 6",
  },
  {
    id: 7,
    img1: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    alt: "Streetwear Look 7",
  },
  {
    id: 8,
    img1: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    img2: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    alt: "Streetwear Look 8",
  },
];

export default function InstagramGrid() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 px-4 md:px-10 lg:px-16 select-none">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header Section */}
        <div className="mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 uppercase">
            TAG @LEWKOFFICIAL
          </h2>
          <p className="mt-2 text-xs sm:text-[13px] text-neutral-500 font-light leading-relaxed">
            Order start 5 pcs over free delivery and gift special price discount 10%
            <br />
            ALL COLLECTIONS
          </p>
        </div>

        {/* 4-Column Grid on Desktop, 2-Column on Mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3.5">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100 group cursor-pointer"
            >
              {/* First Image (Default) */}
              <img
                src={item.img1}
                alt={item.alt}
                className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500 ease-in-out group-hover:opacity-0"
              />

              {/* Second Image (Visible on Hover) */}
              <img
                src={item.img2}
                alt={`${item.alt} alternate view`}
                className="absolute inset-0 w-full h-full object-cover object-center opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-105 transform duration-700"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
import { useState } from "react";

const items = [
  {
    id: 1,
    img1: "https://i.pinimg.com/736x/49/b0/18/49b018e375d231f9a772c4a071b4eb5a.jpg",
    img2: "https://i.pinimg.com/736x/a6/52/d0/a652d0d476325a531021bec6bd8c7161.jpg",
    alt: "Streetwear Look 1",
  },
  {
    id: 2,
    img1: "https://i.pinimg.com/736x/64/63/d1/6463d1e8db07062d914fb563088c0317.jpg",
    img2: "https://i.pinimg.com/736x/1e/ae/75/1eae7520d7314be705378031059e438c.jpg",
    alt: "Streetwear Look 2",
  },
  {
    id: 3,
    img1: "https://i.pinimg.com/736x/04/cd/53/04cd53c15db01864dcd6a049f4b157f1.jpg",
    img2: "https://i.pinimg.com/1200x/18/11/55/1811555188d23a2bdd88bd8aca76de23.jpg",
    alt: "Streetwear Look 3",
  },
  {
    id: 4,
    img1: "https://i.pinimg.com/1200x/2f/39/6e/2f396e933d22e8dbfb80c81c924098e2.jpg",
    img2: "https://i.pinimg.com/1200x/f4/83/17/f4831776a39227941be8e11a3bc1a8b8.jpg",
    alt: "Streetwear Look 4",
  },
  {
    id: 5,
    img1: "https://i.pinimg.com/736x/bf/6e/96/bf6e96a9524babe2b48394a298d11d48.jpg",
    img2: "https://i.pinimg.com/1200x/db/0e/ee/db0eee653caef29af2b877ac1de6247e.jpg",
    alt: "Streetwear Look 5",
  },
  {
    id: 6,
    img1: "https://i.pinimg.com/736x/1a/af/45/1aaf45b02d382309c2d8f8d2e9f3cf9f.jpg",
    img2: "https://i.pinimg.com/1200x/c2/2c/24/c22c24de8fa74471f68a42627434fd48.jpg",
    alt: "Streetwear Look 6",
  },
  {
    id: 7,
    img1: "https://i.pinimg.com/736x/2b/8f/a6/2b8fa62d76a47a9f8d7fd3265391e24f.jpg",
    img2: "https://i.pinimg.com/1200x/08/9c/66/089c66e19bfcac0e7f50617bd945b5e3.jpg",
    alt: "Streetwear Look 7",
  },
  {
    id: 8,
    img1: "https://i.pinimg.com/1200x/32/58/7c/32587cdf9aec503c489b8b9efe1ef809.jpg",
    img2: "https://i.pinimg.com/1200x/df/9f/cf/df9fcfa804c94d1331e1fcd6a29617a4.jpg",
    alt: "Streetwear Look 8",
  },
];

export default function InstagramGrid() {
  const [activeTouchId, setActiveTouchId] = useState(null);

  return (
    <section className="w-full bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 select-none">
      <div className="max-w-[1500px] mx-auto">
        
        {/* Header Section */}
        <div className="mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-900 uppercase">
            TAG @LEWKOFFICIAL
          </h2>
          <p className="mt-2 text-xs sm:text-[13px] text-neutral-500 font-light leading-relaxed">
            Order start 5 pcs over free delivery and gift special price discount 10%
            <br />
            ALL COLLECTIONS
          </p>
        </div>

        {/* 4-Column Grid on Desktop, 2-Column on Mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1 ">
          {items.map((item) => {
            const isTouched = activeTouchId === item.id;

            return (
              <div
                key={item.id}
                onTouchStart={() => setActiveTouchId(isTouched ? null : item.id)}
                className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-900 group cursor-pointer"
              >
                {/* 1. Base Image */}
                <img
                  src={item.img1}
                  alt={item.alt}
                  className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-300 ${
                    isTouched ? "opacity-0" : "group-hover:opacity-0"
                  }`}
                />

                {/* 2. Hover Image */}
                <img
                  src={item.img2}
                  alt={`${item.alt} alternate`}
                  className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-500 brightness-75 ${
                    isTouched
                      ? "opacity-100 scale-100"
                      : "opacity-0 group-hover:opacity-100 group-hover:scale-105"
                  }`}
                />

                {/* 3. Center Instagram Icon Overlay */}
                <div
                  className={`absolute inset-0 z-20 flex items-center justify-center pointer-events-none transition-all duration-300 ${
                    isTouched
                      ? "opacity-100 scale-100"
                      : "opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-90"
                  }`}
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-black/40 backdrop-blur-xs flex items-center justify-center border border-white/20 shadow-lg">
                    <svg
                      className="w-7 h-7 sm:w-8 sm:h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      viewBox="0 0 24 24"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
import { motion } from "framer-motion";
import Premiumfabric from './figma/premuimfabric.png'
import Premiumfabrictwo from './figma/premuimfabrictwo.png'
import Premiumfabricthree from './figma/premuimfabricthree.png'
const images = [
  Premiumfabric,
  Premiumfabrictwo,
  Premiumfabricthree
];

export function FabricSection() {
  return (
    <section className="py-20 bg-[#f9f9f9] relative overflow-hidden">
      
      {/* Watermarks */}
      <div className="absolute top-10 left-6 opacity-10 scale-75 md:scale-100">
        <Watermark />
      </div>
      <div className="absolute bottom-10 right-6 opacity-10 scale-75 md:scale-100">
        <Watermark />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-semibold text-center mb-4">
          Premium Fabric That Feels Amazing
        </h2>

        <p className="text-center text-gray-600 text-base md:text-lg mb-16 max-w-2xl mx-auto">
          Our t-shirts are crafted from soft cotton that is breathable and long-lasting.
          The fabric keeps its shape and color even after multiple washes.
        </p>

        {/* Diamonds Row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-14 md:gap-8 mb-16">
          
          {images.map((img, i) => (
            <div
              key={i}
              className={`
                ${i !== 0 ? "md:-ml-10" : ""}
                ${i === 1 ? "md:-mt-10" : ""}
              `}
            >
              <DiamondImage src={img} delay={i * 0.3} />
            </div>
          ))}

        </div>

        {/* Button */}
        <div className="flex justify-center">
          <button className="bg-[#E9B824] text-black px-10 py-3 rounded-full hover:scale-105 transition-all duration-300">
            Explore the Quality
          </button>
        </div>
      </div>
    </section>
  );
}

/* =========================
   💎 Diamond Image Component
========================= */
function DiamondImage({ src, delay }) {
  return (
    <motion.div
      initial={{ y: -220, opacity: 0, scale: 0.9 }}
      whileInView={{ y: 0, opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{
        delay,
        type: "spring",
        stiffness: 120,
        damping: 9,
      }}
      className="relative w-[240px] h-[240px] md:w-[280px] md:h-[280px]"
    >
      {/* OUTER PURPLE BORDER */}
      <div className="absolute inset-0 rotate-45 border-[4px] border-[#8B2E8B]" />

      {/* INNER LIGHT BORDER */}
      <div className="absolute inset-4 rotate-45 border-[2px] border-gray-300" />

      {/* IMAGE WITH PADDING (KEY FIX 🔥) */}
      <div className="absolute inset-6 rotate-45 overflow-hidden bg-white">
        <img
          src={src}
          alt="fabric preview"
          className="w-full h-full object-cover -rotate-45 scale-150"
        />
      </div>
    </motion.div>
  );
}

/* =========================
   🧩 Watermark SVG
========================= */
function Watermark() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120">
      <circle cx="60" cy="60" r="58" stroke="#8B2E8B" strokeWidth="2" fill="none"/>
      <text x="60" y="50" fontSize="12" fill="#8B2E8B" textAnchor="middle" fontWeight="bold">
        COMFY
      </text>
      <text x="60" y="65" fontSize="12" fill="#8B2E8B" textAnchor="middle" fontWeight="bold">
        WEAR
      </text>
      <text x="60" y="78" fontSize="7" fill="#8B2E8B" textAnchor="middle">
        PREMIUM
      </text>
    </svg>
  );
}
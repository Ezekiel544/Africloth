import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import carouselone from './figma/carousel.png'
import carouseltwo from './figma/carouseltwo.png'
import carouselthree from './figma/carouselthree.png'
import carouselfour from './figma/carouselfour.png'
import carouselfive from './figma/carouselfive.png'
const images = [
  carouselone,
  carouseltwo,
  carouselthree,
  carouselfour,
  carouselfive,
];

export function SimpleStyleSection() {
  const [items, setItems] = useState(images);

  const next = () => {
    setItems((prev) => {
      const arr = [...prev];
      const first = arr.shift();
      arr.push(first);
      return arr;
    });
  };

  const prev = () => {
    setItems((prev) => {
      const arr = [...prev];
      const last = arr.pop();
      arr.unshift(last);
      return arr;
    });
  };

  // return (
  //   <section className="py-20 bg-[#f9f9f9] overflow-hidden">
  //     <div className="max-w-7xl mx-auto px-4 md:px-6">

  //       <h2 className="text-3xl md:text-5xl text-center mb-4 font-semibold">
  //         Simple Style for Every Moment
  //       </h2>

  //       <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
  //         From casual outings to relaxed weekends, our t-shirts are designed
  //         to match every part of your daily life.
  //       </p>

  //       {/* Desktop Buttons (UNCHANGED) */}
  //       <div className="hidden md:flex justify-between mb-6">
  //         <button onClick={prev}      style={{
  //     width: 40, height: 40, borderRadius: "50%",
  //     border: "1.5px solid #8B2E8B", background: "none",
  //     cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
  //     color: "#8B2E8B", 
  //   }}>
  //               <ChevronLeft size={20} />
  //         </button>
  //         <button onClick={next} 
  //          style={{
  //     width: 40, height: 40, borderRadius: "50%",
  //     border: "1.5px solid #8B2E8B", background: "none",
  //     cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
  //     color: "#8B2E8B", 
  //   }}>
  //           {/* Next */}
  //   <ChevronRight size={20} />
  //         </button>
  //       </div>

  //       {/* CAROUSEL */}
  //       <div className="flex justify-center items-center overflow-hidden">
  //         <div className="flex items-center gap-2 md:gap-6">

  //           {items.map((img, i) => {
  //             const isCenter = i === 2;
  //             const isSide = i === 1 || i === 3;
  //             const isOuter = i === 0 || i === 4;

  //             return (
  //               <motion.div
  //                 key={img}
  //                 layout
  //                 drag="x"
  //                 dragConstraints={{ left: 0, right: 0 }}
  //                 onDragEnd={(e, info) => {
  //                   if (info.offset.x < -30) next(); // easier swipe
  //                   if (info.offset.x > 30) prev();
  //                 }}
  //                 transition={{ type: "spring", stiffness: 120, damping: 20 }}
  //                 className={`${isOuter ? "hidden md:block" : ""}`}
  //               >
  //                 <motion.img
  //                   src={img}
  //                   alt=""
  //                   className="object-cover rounded-xl"

  //                   animate={{
  //                     scale: isCenter ? 1 : 0.9,
  //                     opacity: isOuter ? 0.4 : 1,
  //                     zIndex: isCenter ? 3 : isSide ? 2 : 1,
  //                   }}

  //                   style={{
  //                     /* ✅ MOBILE (UPDATED ONLY HERE) */
  //                     width: isCenter
  //                       ? "75vw"   // bigger center
  //                       : "20vw",  // tiny side peek
  //                     height: isCenter
  //                       ? "420px"
  //                       : "260px",

  //                     /* ✅ DESKTOP (UNCHANGED) */
  //                     ...(window.innerWidth >= 768 && {
  //                       width: isCenter
  //                         ? "320px"
  //                         : isSide
  //                         ? "220px"
  //                         : "140px",
  //                       height: isCenter
  //                         ? "440px"
  //                         : isSide
  //                         ? "320px"
  //                         : "220px",
  //                     }),
  //                   }}

  //                   transition={{ duration: 0.4 }}
  //                 />
  //               </motion.div>
  //             );
  //           })}
  //         </div>
  //       </div>

  //       {/* Mobile hint */}
  //       <div className="mt-6 text-center text-sm text-gray-500 md:hidden">
  //         ← Swipe →
  //       </div>
  //     </div>
  //   </section>
  // );
}
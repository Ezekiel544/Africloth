import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import fashionone from './figma/fashionone.png'
import fashiontwo from './figma/fashiontwo.png'
import fashionthree from './figma/fashionthree.png'
import fashionfour from './figma/fashionfour.png'
import fashionfive from './figma/fashionfive.png'
import fashionsix from './figma/fashionsix.png'

const images = [
  { src: fashionone, alt: "Customer in grey tee" },
  { src: fashiontwo, alt: "Customer in navy tee" },
  { src: fashionthree, alt: "Customer in burgundy tee" },
  { src: fashionfour, alt: "Customer in black tee" },
  { src: fashionfive, alt: "Customer in white tee" },
  { src: fashionsix, alt: "Customer in grey tee" },
];

const SLOT_CLIP = [
  "polygon(12% 0%, 100% 0%, 100% 80%, 80% 100%, 0% 100%, 0% 13%)",
  "polygon(4% 0%, 100% 0%, 100% 85%, 78% 100%, 0% 100%, 0% 7%)",
  "polygon(0% 0%, 92% 0%, 100% 10%, 100% 100%, 0% 100%, 0% 86%)",
  "polygon(15% 0%, 100% 0%, 100% 95%, 95% 100%, 0% 100%, 0% 15%)",
];

const SLOT_HEIGHT = [380, 380, 380, 380];
const SLOT_MARGIN_TOP = [0, 80, 0, 80];
const SLOT_GAP = [0, 28, 36, 32];

// Mobile uses only first 3 slots — shorter heights, wider cards
const MOBILE_SLOT_CLIP = [SLOT_CLIP[0], SLOT_CLIP[1], SLOT_CLIP[2]];
const MOBILE_SLOT_HEIGHT = [220, 220, 220];
const MOBILE_SLOT_MARGIN_TOP = [0, 44, 0];
const MOBILE_SLOT_GAP = [0, 10, 12];

// export function TrustedSection() {
//   const [order, setOrder] = useState([0, 1, 2, 3]);

//   const navigate = (dir: "next" | "prev") => {
//     setOrder((prev) => {
//       if (dir === "next") {
//         const newImg = (prev[3] + 1) % images.length;
//         return [prev[1], prev[2], prev[3], newImg];
//       } else {
//         const newImg = (prev[0] - 1 + images.length) % images.length;
//         return [newImg, prev[0], prev[1], prev[2]];
//       }
//     });
//   };

//   return (
//     <section style={{ padding: "80px 0 80px", background: "#fff", overflow: "visible" }}>
//       <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>

//         {/* Header */}
//         <div
//           className="trusted-header"
//           style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start", marginBottom: 64 }}
//         >
//           <h2 style={{
//             fontFamily: "'Playfair Display', Georgia, serif",
//             fontSize: "clamp(1.5rem, 3.5vw, 3.2rem)",
//             fontWeight: 800, color: "#111", lineHeight: 1.15, margin: 0,
//           }}>
//             Trusted by Thousands of Happy Customers
//           </h2>
//           <p style={{
//             fontFamily: "'Montserrat', sans-serif",
//             fontSize: "clamp(0.7rem, 1.1vw, 1.05rem)",
//             color: "#555", lineHeight: 1.8, margin: 0, paddingTop: 8,
//           }}>
//             Our t-shirts are trusted by thousands of customers for their exceptional comfort, premium quality, and timeless style. Experience the perfect blend of design and everyday wear.
//           </p>
//         </div>

//         {/* ── Desktop: 4 cards ── */}
//         <div className="trusted-cards" style={{ display: "flex", alignItems: "flex-start", position: "relative" }}>
//           <AnimatePresence mode="popLayout">
//             {order.map((imgIdx, slotIdx) => (
//               <motion.div
//                 key={imgIdx}
//                 layout
//                 initial={{ opacity: 0.8, scale: 0.96 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.9 }}
//                 transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
//                 style={{
//                   flex: slotIdx === 1 ? "0 0 22%" : "0 0 20%",
//                   marginLeft: slotIdx === 0 ? 0 : SLOT_GAP[slotIdx],
//                   marginTop: SLOT_MARGIN_TOP[slotIdx],
//                   height: SLOT_HEIGHT[slotIdx],
//                   clipPath: SLOT_CLIP[slotIdx],
//                   overflow: "hidden",
//                   boxShadow: "0 12px 40px rgba(0,0,0,0.14)",
//                   cursor: "pointer",
//                 }}
//               >
//                 <motion.img
//                   src={images[imgIdx].src}
//                   alt={images[imgIdx].alt}
//                   layout
//                   style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }}
//                   whileHover={{ scale: 1.06 }}
//                   transition={{ duration: 0.3 }}
//                 />
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </div>

//         {/* ── Mobile: 3 cards, same shapes/heights/margins as desktop slots 0-2 ── */}
//         <div className="trusted-cards-mobile" style={{ display: "none", alignItems: "flex-start", position: "relative", minHeight: 290,  }}>
//           <AnimatePresence mode="popLayout">
//             {order.slice(0, 3).map((imgIdx, slotIdx) => (
//               <motion.div
//                 key={imgIdx}
//                 layout
//                 initial={{ opacity: 0.8, scale: 0.96 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.9 }}
//                 transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
//                 style={{
//                   flex: slotIdx === 1 ? "0 0 36%" : "0 0 30%",
//                   marginLeft: slotIdx === 0 ? 0 : MOBILE_SLOT_GAP[slotIdx],
//                   marginTop: MOBILE_SLOT_MARGIN_TOP[slotIdx],
//                   height: MOBILE_SLOT_HEIGHT[slotIdx],
//                   clipPath: MOBILE_SLOT_CLIP[slotIdx],
//                   overflow: "hidden",
//                   boxShadow: "0 12px 40px rgba(0,0,0,0.14)",
//                   cursor: "pointer",
//                 }}
//               >
//                 <motion.img
//                   src={images[imgIdx].src}
//                   alt={images[imgIdx].alt}
//                   layout
//                   style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }}
//                   whileHover={{ scale: 1.06 }}
//                   transition={{ duration: 0.3 }}
//                 />
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </div>

//        {/* Navigation — shown on ALL screen sizes */}
// <div className="trusted-nav" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 24, marginTop: 38, }}>
//   <button
//     onClick={() => navigate("prev")}
//     style={{
//       width: 40, height: 40, borderRadius: "50%",
//       border: "1.5px solid #8B2E8B", background: "none",
//       cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
//       color: "#8B2E8B", flexShrink: 0,
//     }}
//   >
//     <ChevronLeft size={18} />
//   </button>

//   <div style={{ display: "flex", gap: 4, flexWrap: "nowrap", overflow: "hidden" }}>
//     {images.map((_, i) => {
//       const active = order.includes(i);
//       return (
//         <div key={i} style={{
//           height: 3,
//           width: active ? 24 : 12,
//           borderRadius: 99,
//           background: active ? "#8B2E8B" : "#e0e0e0",
//           transition: "all 0.45s ease",
//           flexShrink: 0,
//         }} />
//       );
//     })}
//   </div>

//   <button
//     onClick={() => navigate("next")}
//     style={{
//       width: 40, height: 40, borderRadius: "50%",
//       border: "1.5px solid #8B2E8B", background: "none",
//       cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
//       color: "#8B2E8B", flexShrink: 0,
//     }}
//   >
//     <ChevronRight size={18} />
//   </button>
// </div>
//       </div>

//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Playfair+Display:wght@700;800&display=swap');

//         @media (max-width: 768px) {
//           .trusted-header {
//             grid-template-columns: 1fr !important;
//             gap: 20px !important;
//             margin-bottom: 36px !important;
//           }
//           .trusted-cards {
//             display: none !important;
//           }
//           .trusted-cards-mobile {
//             display: flex !important;
//           }
//           .trusted-nav {
//             display: flex !important;
//             margin-top: 10px !important;
//             position: relative !important;
//             z-index: 10 !important;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }
import { motion } from "framer-motion";
import Polo from './figma/polo.png'
import Polotwo from './figma/polotwo.png'
import Polothree from './figma/polothree.png'
export function BestSellingSection() {
  const cardVariant = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  // return (
  //   <section className="py-20 bg-white overflow-hidden">
  //     <div className="max-w-6xl mx-auto px-6">

  //       {/* Title */}
  //       <motion.h2
  //         initial={{ opacity: 0, y: 40 }}
  //         whileInView={{ opacity: 1, y: 0 }}
  //         viewport={{ once: false, amount: 0.4 }}
  //         transition={{ duration: 0.7 }}
  //         className="text-2xl md:text-5xl text-center mb-14 leading-tight font-semibold"
  //       >
  //         Explore Our Best Selling <br /> T-Shirts
  //       </motion.h2>

  //       {/* Product Images */}
  //       <div className="flex justify-center items-end gap-8 md:gap-12 mb-12 flex-wrap md:flex-nowrap">

  //         {/* Left */}
  //         <motion.div
  //           variants={cardVariant}
  //           initial="hidden"
  //           whileInView="visible"
  //           viewport={{ once: false, amount: 0.3 }}
  //           className="w-[260px] md:w-[280px] lg:w-[300px]"
  //         >
  //           <div className="-rotate-6 hover:rotate-0 transition duration-500 hover:scale-105">
  //             <img
  //               src={Polo}
  //               className="w-full h-[380px] md:h-[420px] object-cover rounded-xl shadow-2xl"
  //             />
  //           </div>
  //         </motion.div>

  //         {/* Center */}
  //         <motion.div
  //           variants={cardVariant}
  //           initial="hidden"
  //           whileInView="visible"
  //           viewport={{ once: false, amount: 0.3 }}
  //           transition={{ delay: 0.2 }}
  //           className="w-[280px] md:w-[300px] lg:w-[320px]"
  //         >
  //           <div className="hover:scale-105 transition duration-500">
  //             <img
  //               src={Polotwo}
  //               className="w-full h-[400px] md:h-[440px] object-cover rounded-xl shadow-2xl"
  //             />
  //           </div>
  //         </motion.div>

  //         {/* Right */}
  //         <motion.div
  //           variants={cardVariant}
  //           initial="hidden"
  //           whileInView="visible"
  //           viewport={{ once: false, amount: 0.3 }}
  //           transition={{ delay: 0.4 }}
  //           className="w-[260px] md:w-[280px] lg:w-[300px]"
  //         >
  //           <div className="rotate-6 hover:rotate-0 transition duration-500 hover:scale-105">
  //             <img
  //               src={Polothree}
  //               className="w-full h-[380px] md:h-[420px] object-cover rounded-xl shadow-2xl"
  //             />
  //           </div>
  //         </motion.div>

  //       </div>

  //       {/* Description */}
  //       <motion.p
  //         initial={{ opacity: 0, y: 30 }}
  //         whileInView={{ opacity: 1, y: 0 }}
  //         viewport={{ once: false }}
  //         transition={{ duration: 0.6 }}
  //         className="text-center text-gray-700 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
  //       >
  //         Browse our most popular styles crafted with premium fabric and modern fits.
  //         Perfect for casual days, street style, and everyday comfort.
  //       </motion.p>

  //       {/* Button */}
  //       <motion.div
  //         initial={{ opacity: 0, y: 20 }}
  //         whileInView={{ opacity: 1, y: 0 }}
  //         viewport={{ once: false }}
  //         transition={{ duration: 0.6 }}
  //         className="flex justify-center"
  //       >
  //         <button className="bg-[#E9B824] text-black px-8 md:px-10 py-3 rounded-full hover:bg-[#d4a820] transition-all hover:scale-105">
  //           View Best Sellers
  //         </button>
  //       </motion.div>

  //     </div>
  //   </section>
  // );
}
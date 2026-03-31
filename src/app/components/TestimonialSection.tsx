import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import chief from './figma/chief.png'
import chiefone from './figma/chiefone.png'
import madam from './figma/madam.png'
export function TestimonialSection() {
  const testimonials = [
    {
      image: chief,
      text: "Extremely comfortable and made with outstanding quality.",
      rating: 5,
      name: "Daniel Smith",
    },
    {
      image: madam,
      text: "Soft fabric and perfect fit. I wear it every day and still looks brand new.",
      rating: 5,
      name: "Sophia Lee",
    },
    {
      image: chiefone,
      text: "Great quality and stylish look. Definitely worth the price.",
      rating: 4,
      name: "Michael Brown",
    },
  ];

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-16 md:py-24 bg-[#2D1B3D] text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-center mb-4">
          What Our Customers Say
        </h2>

        <p className="text-center text-gray-300 text-base md:text-lg mb-12 md:mb-16">
          See why thousands of customers trust our t-shirts.
        </p>

        {/* Slider */}
        <div className="flex flex-col items-center text-center">

          {/* Image */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden mb-6 border-4 border-[#8B2E8B] shadow-xl">
            <img
              src={testimonials[current].image}
              alt="customer"
              className="w-full h-full object-cover transition-all duration-500"
            />
          </div>

          {/* Text */}
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mb-6 leading-relaxed transition-all duration-500">
            "{testimonials[current].text}"
          </p>

          {/* Name */}
          <p className="text-[#E9B824] mb-4 font-semibold">
            {testimonials[current].name}
          </p>

          {/* Stars */}
          <div className="flex gap-2 mb-8">
            {Array.from({ length: testimonials[current].rating }).map(
              (_, i) => (
                <Star key={i} size={24} fill="#E9B824" stroke="#E9B824" />
              )
            )}
          </div>

          {/* Arrows */}
          <div className="flex gap-6 mb-8">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-[#8B2E8B] hover:bg-[#a53ea5] transition"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={next}
              className="p-3 rounded-full bg-[#8B2E8B] hover:bg-[#a53ea5] transition"
            >
              <ChevronRight />
            </button>
          </div>

          {/* Dots */}
          <div className="flex gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === index
                    ? "w-10 bg-[#E9B824]"
                    : "w-2 bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export function PromoSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 gap-0 bg-white rounded-2xl overflow-hidden shadow-2xl">
          {/* Left Side - First Promotion */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1630724725269-a0e78771cea0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMHRzaGlydCUyMGN1c3RvbWVyfGVufDF8fHx8MTc3NDc5MDgxNHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Customer with gray t-shirt"
              className="w-full h-[450px] object-cover"
            />
            {/* Text Overlay */}
            <div className="absolute top-12 left-12 max-w-sm">
              <h3 className="text-4xl mb-6 leading-tight">
                Get 20% Off Your First Order
              </h3>
              <p className="text-gray-800 mb-8 leading-relaxed text-lg">
                Upgrade your wardrobe today with premium t-shirts and enjoy an exclusive discount on your first purchase.
              </p>
              <button className="bg-[#E9B824] text-black px-8 py-3 rounded-full hover:bg-[#d4a820] transition-all hover:scale-105">
                Shop Now
              </button>
            </div>
          </div>

          {/* Right Side - Second Model */}
          <div className="relative bg-gray-100">
            <img
              src="https://images.unsplash.com/photo-1631479501467-a46d06c900fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBjdXJseSUyMGhhaXIlMjBibGFjayUyMHRzaGlydHxlbnwxfHx8fDE3NzQ3OTA4MTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Customer with floral t-shirt"
              className="w-full h-[450px] object-cover"
            />
            {/* Sale Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="transform -rotate-12 bg-white/90 px-12 py-8 rounded-lg shadow-2xl">
                <div className="text-black">
                  <div className="text-5xl tracking-wider mb-1" style={{ fontFamily: 'Impact, sans-serif' }}>
                    SALE
                  </div>
                  <div className="text-8xl leading-none font-black" style={{ fontFamily: 'Impact, sans-serif' }}>
                    20%
                  </div>
                  <div className="text-5xl tracking-wider" style={{ fontFamily: 'Impact, sans-serif' }}>
                    OFF
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
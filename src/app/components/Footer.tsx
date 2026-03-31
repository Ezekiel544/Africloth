import logo from './figma/logo.png'
export function Footer() {
  return (
    <footer className="bg-black text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">

          {/* Logo */}
          <div className="">
         <img src={logo} alt="Africloth Logo" width={60} className="logo"/>
            <style>
              {`
                .logo {
                  border-radius: 70%;
                }
              `}
            </style>
          </div>

          {/* Shop */}
          {/* <div>
            <h3 className="text-lg md:text-xl mb-4 md:mb-6">Shop</h3>
            <ul className="space-y-2 md:space-y-3 text-gray-400">
              <li>New Arrivals</li>
              <li>Best Sellers</li>
              <li>All Collection</li>
            </ul>
          </div> */}

          {/* Customer */}
          <div>
            <h3 className="text-lg md:text-xl mb-4 md:mb-6">
              Customer Service
            </h3>
            <ul className="space-y-2 md:space-y-3 text-gray-400">
              <li>Shipping & Delivery</li>
              <li>Returns & Exchanges</li>
              <li>Size Guide</li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg md:text-xl mb-4 md:mb-6">Links</h3>
            <ul className="space-y-2 md:space-y-3 text-gray-400">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Africloth fashion. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
"use client";
import { useState, useEffect, useRef } from "react";
import logo from './figma/logo.png'
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setAtTop(currentScrollY < window.innerHeight - 80);

      if (currentScrollY < 10) {
        setVisible(true);
      } else if (currentScrollY < lastScrollY.current) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mobileTransparent = atTop && !menuOpen;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 text-white py-2 px-4 md:bg-black/20 md:backdrop-blur-sm"
      style={{
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.3s ease, background-color 0.3s ease",
        backgroundColor: mobileTransparent ? "transparent" : "rgba(0,0,0,0.2)",
        backdropFilter: mobileTransparent ? "none" : "blur(8px)",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Left Navigation - hidden on mobile */}
        <nav className="hidden md:flex items-center gap-8">
          {/* <svg width="0" height="60" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="40" r="38" stroke="#C77DFF" strokeWidth="2" fill="none"/>
            <circle cx="40" cy="40" r="35" stroke="#C77DFF" strokeWidth="1" fill="none"/>
            <text x="40" y="35" fontSize="10" fill="white" textAnchor="middle" fontWeight="bold">Afri cloth</text>
            <text x="40" y="48" fontSize="10" fill="white" textAnchor="middle" fontWeight="bold">cloth</text>
            <text x="40" y="58" fontSize="6" fill="white" textAnchor="middle">PREMIUM QUALITY</text>
          </svg> */}
              {/* <svg
              className="w-[80px] h-[80px] md:w-[100px] md:h-[100px]"
              viewBox="0 0 100 100"
              fill="none"
            >
              <circle cx="50" cy="50" r="48" stroke="#C77DFF" strokeWidth="2"/>
              <circle cx="50" cy="50" r="44" stroke="#C77DFF" strokeWidth="1"/>
              <text x="50" y="42" fontSize="12" fill="white" textAnchor="middle" fontWeight="bold">
                Africloth
              </text>
              <text x="50" y="58" fontSize="12" fill="white" textAnchor="middle" fontWeight="bold">
                Version
              </text>
              <text x="50" y="70" fontSize="7" fill="white" textAnchor="middle">
                PREMIUM QUALITY
              </text>
            </svg> */}
            <img src={logo} alt="Africloth Logo" width={60} className="logo"/>
            <style>
              {`
                .logo {
                  border-radius: 70%;
                  margin-top: 7px;
                }
              `}
            </style>
        </nav>
            
        {/* Right Navigation - hidden on mobile */}
        {/* <nav className="hidden md:flex items-center gap-6">
           <a href="#" className="text-white hover:text-[#9D4EDD] font-semibold  transition-colors">Trust</a>
          <a href="#" className="text-white hover:text-[#9D4EDD] font-semibold  transition-colors">Features</a>
          <a href="#" className="text-white hover:text-[#9D4EDD] font-semibold transition-colors">Lifestyle</a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors font-semibold ">Products</a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors font-semibold">Offer</a>
        </nav> */}
        <nav className="hidden md:flex items-center gap-6"> <button className="bg-[#E9B824] text-black px-6 py-2 rounded-full hover:bg-[#d4a820] transition-colors">
            Explore Collection
          </button></nav>

        {/* Mobile Logo + Hamburger */}
        <div className="md:hidden flex items-center justify-between w-full">

          {/* Mobile Logo */}
           <img src={logo} alt="Africloth Logo" width={60} className="logo"/>
            <style>
              {`
                .logo {
                  border-radius: 70%;
                }
              `}
            </style>

          {/* Hamburger */}
          <button
            className="flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`block w-6 h-0.5 bg-[#C77DFF] transition-all duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#C77DFF] transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#C77DFF] transition-all duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-8 pt-4 pb-6 border-t border-gray-800 mt-2">
          <a href="#" className="text-white text-base font-semibold">Home</a>
          <a href="#" className="text-white text-base font-semibold">Trust</a>
          <a href="#" className="text-white text-base font-semibold">Features</a>
          <a href="#" className="ext-white text-base font-semibold">Lifestyle</a>
          <a href="#" className="text-white text-base font-semibold">Products</a>
          <a href="#" className="text-white text-base font-semibold">Offer</a>
          <button className="bg-[#E9B824] text-black px-6 py-2 rounded-full w-fit font-bold">
            Explore Collection
          </button>
        </div>
      )}
    </header>
  );
}
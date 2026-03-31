import { useState, useEffect } from "react";
import headerimg from '../components/figma/header.png'
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
      backgroundColor: scrolled ? "rgba(10,10,10,0.97)" : "rgba(0,0,0,0.35)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.5)" : "none",
        transition: "all 0.3s ease",
        padding: "12px 32px",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        <nav style={{ display: "flex", gap: 32, alignItems: "center" }} className="desktop-nav">
          {["Home", "Trust", "Features", "Lifestyle"].map((item, i) => (
            <a
              key={item}
              href="#"
              style={{
                color: i === 0 ? "#C77DFF" : "#e0e0e0",
                textDecoration: "none",
                fontSize: 15,
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 500,
                letterSpacing: "0.02em",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "#C77DFF"}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = i === 0 ? "#C77DFF" : "#e0e0e0"}
            >
              {item}
            </a>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="logoGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#C77DFF" stopOpacity="0.15"/>
                <stop offset="100%" stopColor="#C77DFF" stopOpacity="0"/>
              </radialGradient>
            </defs>
            <circle cx="41" cy="41" r="39" stroke="#C77DFF" strokeWidth="1.5" fill="url(#logoGlow)"/>
            <circle cx="41" cy="41" r="34" stroke="#C77DFF" strokeWidth="0.8" strokeDasharray="3 4" fill="none"/>
            {Array.from({ length: 16 }).map((_, i) => {
              const angle = (i * 360) / 16;
              const rad = (angle * Math.PI) / 180;
              const x1 = 41 + 27 * Math.cos(rad);
              const y1 = 41 + 27 * Math.sin(rad);
              const x2 = 41 + 32 * Math.cos(rad);
              const y2 = 41 + 32 * Math.sin(rad);
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#C77DFF" strokeWidth="1" opacity="0.6"/>;
            })}
            <text x="41" y="36" fontSize="9.5" fill="white" textAnchor="middle" fontWeight="700" fontFamily="Montserrat, sans-serif" letterSpacing="1.5">COMFY</text>
            <text x="41" y="48" fontSize="9.5" fill="white" textAnchor="middle" fontWeight="700" fontFamily="Montserrat, sans-serif" letterSpacing="1.5">WEAR</text>
            <text x="41" y="58" fontSize="5" fill="#C77DFF" textAnchor="middle" fontFamily="Montserrat, sans-serif" letterSpacing="2">YOUR JOURNEY BEGINS HERE</text>
          </svg>
        </div>

        <nav style={{ display: "flex", gap: 28, alignItems: "center" }} className="desktop-nav">
          {["Products", "Offer"].map(item => (
            <a
              key={item}
              href="#"
              style={{ color: "#e0e0e0", textDecoration: "none", fontSize: 15, fontFamily: "'Montserrat', sans-serif", fontWeight: 500, transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "#C77DFF"}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "#e0e0e0"}
            >
              {item}
            </a>
          ))}
          <button style={{
            background: "linear-gradient(135deg, #E9B824, #f0ca4a)",
            color: "#111",
            border: "none",
            padding: "10px 24px",
            borderRadius: 50,
            fontWeight: 700,
            fontSize: 14,
            fontFamily: "'Montserrat', sans-serif",
            cursor: "pointer",
            letterSpacing: "0.03em",
            boxShadow: "0 4px 15px rgba(233,184,36,0.35)",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.04)"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 6px 20px rgba(233,184,36,0.5)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 15px rgba(233,184,36,0.35)"; }}
          >
            Explore Collection
          </button>
        </nav>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            flexDirection: "column",
            gap: 5,
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 4,
          }}
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: "block",
              width: 26,
              height: 2.5,
              background: "#C77DFF",
              borderRadius: 2,
              transition: "all 0.3s",
              transform: menuOpen
                ? i === 0 ? "translateY(7.5px) rotate(45deg)" : i === 2 ? "translateY(-7.5px) rotate(-45deg)" : "scaleX(0)"
                : "none",
            }}/>
          ))}
        </button>
      </div>

      {menuOpen && (
        <div style={{
          background: "#111",
          padding: "20px 32px",
          display: "flex",
          flexDirection: "column",
          gap: 18,
          borderTop: "1px solid #222",
        }}>
          {["Home", "Trust", "Features", "Lifestyle", "Products", "Offer"].map((item, i) => (
            <a key={item} href="#" style={{ color: i < 4 ? "#C77DFF" : "#e0e0e0", textDecoration: "none", fontSize: 16, fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>{item}</a>
          ))}
          <button style={{ background: "linear-gradient(135deg, #E9B824, #f0ca4a)", color: "#111", border: "none", padding: "12px 24px", borderRadius: 50, fontWeight: 700, fontSize: 15, fontFamily: "'Montserrat', sans-serif", cursor: "pointer", alignSelf: "flex-start" }}>
            Explore Collection
          </button>
        </div>
      )}

      <style>{`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Playfair+Display:wght@700;800&display=swap');

  .desktop-nav {
    display: flex !important;
  }
  .hamburger {
    display: none !important;
  }
  @media (max-width: 768px) {
    .desktop-nav { display: none !important; }
    .hamburger { display: flex !important; }
  }
`}</style>
    </header>
  );
}



export default function App() {
  return (
    <>
      <Header />
      <HeroSection />
    </>
  );
}
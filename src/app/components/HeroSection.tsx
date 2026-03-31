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

        {/* <nav style={{ display: "flex", gap: 28, alignItems: "center" }} className="desktop-nav">
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
        </nav> */}

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

export function HeroSection() {
  const MODEL_IMAGE = headerimg;
  return (
    <section style={{
      position: "relative",
      width: "100%",
      minHeight: "100vh",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
    }}>

      {/* ── Background image: covers full section, anchored left so the model always shows ── */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `url(${MODEL_IMAGE})`,
        backgroundSize: "cover",
        backgroundPosition: "left top",
        backgroundRepeat: "no-repeat",
        zIndex: 0,
      }} />

      {/* ── Gradient overlay: clear on the left (model visible), fades to grey on the right ── */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: [
          "linear-gradient(to right,",
          "  rgba(200,200,200,0.0) 0%,",
          "  rgba(208,208,208,0.5) 38%,",
          "  rgba(205,205,205,0.88) 58%,",
          "  rgba(200,200,200,0.97) 100%",
          ")",
        ].join(""),
        zIndex: 1,
      }} />

      {/* ── On mobile: darker bottom overlay so circle text stays readable ── */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to bottom, transparent 50%, rgba(200,200,200,0.6) 100%)",
        zIndex: 1,
        pointerEvents: "none",
      }} />

     {/* ── Subtle purple tint near the circle ── */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "radial-gradient(circle at 75% 50%, rgba(139,46,139,0.07) 0%, transparent 55%)",
        zIndex: 1,
        pointerEvents: "none",
      }} />

      {/* ── Content: circle floated to the right on desktop, centred on mobile ── */}
      <div
        className="hero-content"
        style={{
          flex: 1,
          maxWidth: 1280,
          margin: "0 auto",
          width: "100%",
          padding: "120px 48px 150px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          position: "relative",
          zIndex: 2,
          boxSizing: "border-box",
        }}
      >
        {/* Animated circle */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ position: "relative", width: "min(460px, 85vw)", height: "min(460px, 85vw)" }}>

            {/* ── Pulsing glow ring (outermost) ── */}
            <div style={{
              position: "absolute",
              inset: -20,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(139,46,139,0.18) 0%, transparent 70%)",
              animation: "pulseGlow 3s ease-in-out infinite",
            }} />

            {/* ── Outer spinning ring with gradient stroke ── */}
            <svg
              style={{
                position: "absolute",
                inset: -12,
                width: "calc(100% + 24px)",
                height: "calc(100% + 24px)",
                animation: "spinRing 10s linear infinite",
              }}
              viewBox="0 0 508 508"
            >
              <defs>
                <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#5a1a5a" stopOpacity="0"/>
                  <stop offset="30%" stopColor="#8B2E8B"/>
                  <stop offset="60%" stopColor="#C77DFF"/>
                  <stop offset="100%" stopColor="#5a1a5a" stopOpacity="0"/>
                </linearGradient>
              </defs>
              <circle
                cx="254" cy="254" r="250"
                fill="none"
                stroke="url(#ringGrad)"
                strokeWidth="5"
                strokeDasharray="180 80 40 80"
                strokeLinecap="round"
              />
            </svg>

            {/* ── Second ring spinning opposite, dashed ── */}
            <svg
              style={{
                position: "absolute",
                inset: 4,
                width: "calc(100% - 8px)",
                height: "calc(100% - 8px)",
                animation: "spinRingReverse 7s linear infinite",
              }}
              viewBox="0 0 472 472"
            >
              <circle
                cx="236" cy="236" r="232"
                fill="none"
                stroke="#C77DFF"
                strokeWidth="1.5"
                strokeDasharray="12 18"
                strokeLinecap="round"
                opacity="0.5"
              />
            </svg>

            {/* ── Orbiting dots ── */}
            {[0, 60, 120, 180, 240, 300].map((deg, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  inset: 0,
                  animation: `spinRing ${8 + i * 0.5}s linear infinite`,
                  animationDelay: `${i * -1.2}s`,
                }}
              >
                <div style={{
                  position: "absolute",
                  width: i % 2 === 0 ? 8 : 5,
                  height: i % 2 === 0 ? 8 : 5,
                  borderRadius: "50%",
                  background: i % 2 === 0 ? "#C77DFF" : "#E9B824",
                  top: "50%",
                  left: "50%",
                  boxShadow: i % 2 === 0
                    ? "0 0 8px 2px rgba(199,125,255,0.8)"
                    : "0 0 6px 2px rgba(233,184,36,0.8)",
                  transform: `rotate(${deg}deg) translateX(${Math.min(460, window.innerWidth * 0.85) / 2 + 14}px) translate(-50%, -50%)`,
                }} />
              </div>
            ))}

            {/* ── Static dark border ── */}
            <div style={{
              position: "absolute",
              inset: 14,
              borderRadius: "50%",
              border: "2px solid rgba(0,0,0,0.15)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.15), inset 0 2px 8px rgba(0,0,0,0.06)",
            }} />

            {/* ── White content circle ── */}
            <div style={{
              position: "absolute",
              inset: 18,
              borderRadius: "50%",
              background: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: "10%",
              boxShadow: "inset 0 4px 24px rgba(139,46,139,0.06)",
            }}>
                  <h1
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(1.2rem, 4vw, 2.2rem)",
            fontWeight: 800,
            color: "#111",
            lineHeight: 1.2,
            marginBottom: 12,
            letterSpacing: "-0.01em",
          }}
          className="hero-title"
        >
          Premium Comfort<br />Wear Tees
        </h1>
              <p style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "clamp(0.75rem, 1.1vw, 0.95rem)",
                color: "#555",
                lineHeight: 1.7,
                marginBottom: 28,
                maxWidth: 260,
              }}>
                Discover premium t-shirts crafted with soft cotton, perfect fit, and timeless style for everyday comfort.
              </p>
            <button
  className="hero-btn"
  style={{
    background: "linear-gradient(135deg, #E9B824, #f5d060)",
    color: "#111",
    border: "none",
    padding: "12px 32px",
    borderRadius: 50,
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 700,
    fontSize: "clamp(0.8rem, 1vw, 0.95rem)",
    cursor: "pointer",
    letterSpacing: "0.03em",
    boxShadow: "0 4px 18px rgba(233,184,36,0.4)",
    transition: "transform 0.2s, box-shadow 0.2s",
  }}
  onMouseEnter={e => {
    (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.06)";
    (e.currentTarget as HTMLButtonElement).style.boxShadow =
      "0 8px 28px rgba(233,184,36,0.55)";
  }}
  onMouseLeave={e => {
    (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
    (e.currentTarget as HTMLButtonElement).style.boxShadow =
      "0 4px 18px rgba(233,184,36,0.4)";
  }}
>
  New Arrivals
</button>
            </div>
          </div>
        </div>
      </div>

      {/* Wavy bottom */}
      <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", lineHeight: 0, zIndex: 3 }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 130" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: 130 }}>
          <defs>
            <linearGradient id="waveGrad1" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#5a1a5a" stopOpacity="0.25"/>
              <stop offset="50%" stopColor="#8B2E8B" stopOpacity="0.35"/>
              <stop offset="100%" stopColor="#5a1a5a" stopOpacity="0.2"/>
            </linearGradient>
          </defs>
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V130H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="url(#waveGrad1)"/>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V130H0Z" fill="#8B2E8B" fillOpacity="0.18"/>
          <path d="M0,60 C200,20 400,100 600,60 C800,20 1000,80 1200,50" fill="none" stroke="#8B2E8B" strokeWidth="2.5" opacity="0.6">
            <animate attributeName="d" dur="4s" repeatCount="indefinite"
              values="M0,60 C200,20 400,100 600,60 C800,20 1000,80 1200,50;
                      M0,50 C200,80 400,20 600,70 C800,30 1000,60 1200,40;
                      M0,60 C200,20 400,100 600,60 C800,20 1000,80 1200,50"/>
          </path>
          <path d="M0,80 C300,40 500,110 800,70 C1000,50 1100,90 1200,65" fill="none" stroke="#C77DFF" strokeWidth="1.5" opacity="0.4">
            <animate attributeName="d" dur="5s" repeatCount="indefinite"
              values="M0,80 C300,40 500,110 800,70 C1000,50 1100,90 1200,65;
                      M0,65 C300,100 500,40 800,85 C1000,65 1100,50 1200,75;
                      M0,80 C300,40 500,110 800,70 C1000,50 1100,90 1200,65"/>
          </path>
        </svg>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Playfair+Display:wght@700;800&display=swap');

        @keyframes spinRing {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spinRingReverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.06); }
        }

        @media (max-width: 768px) {
          .hero-content {
            justify-content: center !important;
            padding: 100px 20px 150px !important;
          }
        }
      `}

      
      </style>
      <style>
{`
  @media (max-width: 480px) {
    .hero-title {
      font-size: 1.05rem !important;
      line-height: 1.15 !important;
      margin-bottom: 8px !important;
    }
  }

  @media (max-width: 360px) {
    .hero-title {
      font-size: 0.9rem !important;
      line-height: 1.1 !important;
      margin-bottom: 6px !important;
    }
  }

  @media (max-width: 340px) {
    .hero-title {
      font-size: 0.85rem !important;
      letter-spacing: -0.02em !important;
    }
  }
`}
</style>
<style>
{`
  @media (max-width: 480px) {
    .hero-btn {
      padding: 10px 22px !important;
      font-size: 0.75rem !important;
      border-radius: 40px !important;
    }
  }

  @media (max-width: 360px) {
    .hero-btn {
      padding: 8px 18px !important;
      font-size: 0.7rem !important;
      letter-spacing: 0.02em !important;
    }
  }

  @media (max-width: 340px) {
    .hero-btn {
      padding: 7px 16px !important;
      font-size: 0.65rem !important;
      box-shadow: 0 3px 10px rgba(233,184,36,0.3) !important;
    }
  }
`}
</style>
    </section>
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
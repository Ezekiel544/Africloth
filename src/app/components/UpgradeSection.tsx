"use client";
import black from './figma/black.png'
export function UpgradeSection() {
  return (
    <section style={{ width: "100%", position: "relative", overflow: "hidden",}}>

      {/* ── Desktop: side by side photos ── */}
      <div className="offer-desktop" style={{ display: "flex", height: 560, position: "relative" }}>

        {/* Left photo */}
        <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1723179754179-61a91b48d702?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBibGFjayUyMHRzaGlydCUyMHN1bmdsYXNzZXMlMjBtb2RlbHxlbnwxfHx8fDE3NzQ3OTA4MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Grey tee model"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
          />
          {/* Subtle dark gradient on left photo so text is readable */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to right, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)",
          }} />

          {/* Text overlay on left photo */}
          <div style={{
            position: "absolute",
            bottom: 80,
            left: 48,
            maxWidth: 340,
          }}>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.15,
              marginBottom: 16,
            }}>
              Get 20% Off Your<br />First Order
            </h2>
            <p style={{
              fontFamily: "'Montserrat', sans-serif",
              color: "rgba(255,255,255,0.85)",
              fontSize: "clamp(0.85rem, 1vw, 0.95rem)",
              lineHeight: 1.75,
              marginBottom: 28,
            }}>
              Upgrade your wardrobe today with premium t-shirts and enjoy an exclusive discount on your first purchase.
            </p>
            <button
              style={{
                background: "linear-gradient(135deg, #E9B824, #f5d060)",
                color: "#111",
                border: "none",
                padding: "12px 32px",
                borderRadius: 50,
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: "0.95rem",
                cursor: "pointer",
                letterSpacing: "0.02em",
                boxShadow: "0 4px 18px rgba(233,184,36,0.45)",
                transition: "transform 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.05)"}
              onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)"}
            >
              Shop Now
            </button>
          </div>
        </div>

        {/* Right photo */}
        <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1626497764746-6dc36546b388?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Floral tee model"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
          />
          {/* Subtle overlay right side */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to left, rgba(0,0,0,0.15) 0%, transparent 60%)",
          }} />
        </div>

        {/* ── SALE badge — center where the two photos meet ── */}
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 10,
          textAlign: "center",
          userSelect: "none",
        }}>
          {/* Dot grid background behind badge */}
          <div style={{
            position: "absolute",
            inset: -20,
            backgroundImage: "radial-gradient(circle, rgba(200,50,50,0.35) 1.5px, transparent 1.5px)",
            backgroundSize: "10px 10px",
            borderRadius: 8,
            zIndex: -1,
          }} />

          <div style={{
            fontFamily: "Impact, 'Arial Black', sans-serif",
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
          }}>
            <div style={{
              fontSize: "clamp(3rem, 5vw, 5rem)",
              color: "#1a0a0a",
              display: "block",
            }}>SALE</div>
            <div style={{
              fontSize: "clamp(3.5rem, 6vw, 6rem)",
              background: "linear-gradient(135deg, #cc2200, #ff4422)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "block",
              marginTop: -8,
            }}>20%</div>
            <div style={{
              fontSize: "clamp(2.8rem, 4.5vw, 4.5rem)",
              color: "#1a0a0a",
              display: "block",
              marginTop: -8,
              border: "4px solid #1a0a0a",
              padding: "0 8px",
              letterSpacing: "0.04em",
            }}>OFF</div>
          </div>

          {/* Slash accent like in screenshot */}
          <div style={{
            position: "absolute",
            top: -12,
            right: -16,
            width: 3,
            height: 40,
            background: "#1a0a0a",
            transform: "rotate(30deg)",
            borderRadius: 2,
          }} />
        </div>
      </div>

      {/* ── Mobile: stacked layout ── */}
      <div className="offer-mobile" style={{ display: "none", flexDirection: "column" }}>

        {/* Top photo with text */}
        <div style={{ position: "relative", height: 380 }}>
          <img
            src="https://images.unsplash.com/photo-1723179754179-61a91b48d702?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBibGFjayUyMHRzaGlydCUyMHN1bmdsYXNzZXMlMjBtb2RlbHxlbnwxfHx8fDE3NzQ3OTA4MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Grey tee model"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.4)" }} />

          {/* Text */}
          <div style={{ position: "absolute", bottom: 32, left: 24, right: 24 }}>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "1.8rem",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.15,
              marginBottom: 12,
            }}>
              Get 20% Off Your First Order
            </h2>
            <p style={{
              fontFamily: "'Montserrat', sans-serif",
              color: "rgba(255,255,255,0.82)",
              fontSize: "0.88rem",
              lineHeight: 1.7,
              marginBottom: 20,
            }}>
              Upgrade your wardrobe with premium t-shirts and enjoy an exclusive first-purchase discount.
            </p>
            <button style={{
              background: "linear-gradient(135deg, #E9B824, #f5d060)",
              color: "#111",
              border: "none",
              padding: "11px 28px",
              borderRadius: 50,
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: "0.9rem",
              cursor: "pointer",
            }}>
              Shop Now
            </button>
          </div>

          {/* Mini SALE badge on mobile */}
          <div style={{
            position: "absolute",
            top: 20,
            right: 20,
            background: "rgba(255,255,255,0.95)",
            borderRadius: 8,
            padding: "8px 14px",
            textAlign: "center",
            fontFamily: "Impact, 'Arial Black', sans-serif",
            lineHeight: 1,
          }}>
            <div style={{ fontSize: "1rem", color: "#1a0a0a" }}>SALE</div>
            <div style={{ fontSize: "1.6rem", color: "#cc2200" }}>20%</div>
            <div style={{ fontSize: "0.9rem", color: "#1a0a0a", border: "2px solid #1a0a0a", padding: "0 4px" }}>OFF</div>
          </div>
        </div>

        {/* Bottom photo */}
        <div style={{ height: 320, overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1626497764746-6dc36546b388?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Floral tee model"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
          />
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Playfair+Display:wght@700;800&display=swap');

        @media (max-width: 768px) {
          .offer-desktop { display: none !important; }
          .offer-mobile { display: flex !important; }
        }
      `}</style>
    </section>
  );
}
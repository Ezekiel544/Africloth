"use client";
import comfortone from './figma/comfortone.png'
import comforttwo from './figma/comforttwo.png'
import comfortthree from './figma/comfortthree.png'
export function ComfortSection() {
  const features = [
    "Soft Touch Fabric",
    "Breathable Material",
    "Perfect Everyday Fit",
    "Minimal Modern Design",
  ];

  return (
    <section style={{ background: "#fff", padding: "80px 0", overflow: "hidden" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>
        <div className="comfort-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>

          {/* ── LEFT: Overlapping image stack ── */}
          <div style={{ position: "relative", height: 560 }} className="comfort-images">

            {/* Image 1 — large, bottom-left, slightly rotated */}
            <div style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "62%",
              height: 520,
              borderRadius: 40,
              overflow: "hidden",
              boxShadow: "0 24px 60px rgba(0,0,0,0.22)",
              zIndex: 1,
              transform: "rotate(-2deg)",
            }}>
              <img
                src={comfortone}
                alt="T-shirt design 1"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
              />
            </div>

            {/* Image 2 — top-right, overlapping image 1 */}
            <div style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "52%",
              height: 260,
              borderRadius: 36,
              overflow: "hidden",
              boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
              zIndex: 3,
              transform: "rotate(1deg)",
            }}>
              <img
                src={comforttwo}
                alt="T-shirt design 2"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
              />
            </div>

            {/* Image 3 — bottom-right, overlapping both */}
            <div style={{
              position: "absolute",
              bottom: 0,
              right: 20,
              width: "50%",
              height: 280,
              borderRadius: 36,
              overflow: "hidden",
              boxShadow: "0 20px 50px rgba(0,0,0,0.28)",
              zIndex: 4,
              transform: "rotate(-1deg)",
            }}>
              <img
                src={comfortthree}
                alt="T-shirt design 3"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
              />
            </div>
          </div>

          {/* ── RIGHT: Text content ── */}
          <div>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.5rem, 3.5vw, 3.2rem)",
              fontWeight: 800,
              color: "#111",
              lineHeight: 1.15,
              marginBottom: 24,
            }}>
              Designed for Comfort and Performance
            </h2>

            <p style={{
              fontFamily: "'Montserrat', sans-serif",
              color: "#555",
              fontSize: "clamp(0.9rem, 1.1vw, 1rem)",
              lineHeight: 1.85,
              marginBottom: 40,
            }}>
              Every t-shirt is carefully crafted with attention to detail, using premium materials to deliver exceptional comfort, long-lasting durability, and modern style that keeps you looking confident and feeling comfortable throughout the day.
            </p>

            {/* Feature list with badge-style check icons */}
            <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
              {features.map((f, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 16 }}>

                  {/* Badge/seal style icon matching screenshot */}
                  <div style={{ flexShrink: 0, position: "relative", width: 30, height: 30 }}>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Seal/badge shape — 8-pointed star-like */}
                      <path
                        d="M15 2L17.8 7.2L23.7 5.3L22.8 11.4L28.2 14L24.5 18.5L26.7 24.3L20.7 24.8L18.5 30.3L13.5 27.4L8.1 29.7L7.3 23.7L1.5 22L4.2 16.5L1 11.5L6.8 9.5L7.2 3.5L12.8 5.2L15 2Z"
                        fill="none"
                        stroke="#C77DFF"
                        strokeWidth="1.5"
                      />
                      {/* Checkmark */}
                      <polyline
                        points="9,15 13,19 21,11"
                        fill="none"
                        stroke="#C77DFF"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <span style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "clamp(1rem, 1.3vw, 1.2rem)",
                    fontWeight: 600,
                    color: "#111",
                  }}>
                    {f}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

     <style>{`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Playfair+Display:wght@700;800&display=swap');

/* Tablet */
@media (max-width: 1024px) {
  .comfort-grid {
    grid-template-columns: 1fr !important;
    gap: 50px !important;
  }

  .comfort-images {
    height: 420px !important;
  }

  .comfort-images > div:nth-child(1) {
    width: 55% !important;
    height: 380px !important;
    left: 10px !important;
  }

  .comfort-images > div:nth-child(2) {
    width: 45% !important;
    height: 220px !important;
    right: 10px !important;
    top: 10px !important;
  }

  .comfort-images > div:nth-child(3) {
    width: 45% !important;
    height: 230px !important;
    right: 0 !important;
    bottom: 10px !important;
  }
}

/* Mobile */
@media (max-width: 600px) {

  .comfort-images {
    height: 340px !important;
  }

  .comfort-images > div:nth-child(1) {
    width: 60% !important;
    height: 300px !important;
    left: 0 !important;
    bottom: 0 !important;
  }

  .comfort-images > div:nth-child(2) {
    width: 50% !important;
    height: 190px !important;
    right: 0 !important;
    top: 0 !important;
  }

  .comfort-images > div:nth-child(3) {
    width: 50% !important;
    height: 200px !important;
    right: 5px !important;
    bottom: 0 !important;
  }
}

/* Small Mobile (340px) */
@media (max-width: 360px) {

  .comfort-images {
    height: 300px !important;
  }

  .comfort-images > div:nth-child(1) {
    width: 65% !important;
    height: 260px !important;
  }

  .comfort-images > div:nth-child(2) {
    width: 52% !important;
    height: 170px !important;
  }

  .comfort-images > div:nth-child(3) {
    width: 52% !important;
    height: 170px !important;
  }
}
`}</style>
    </section>
  );
}
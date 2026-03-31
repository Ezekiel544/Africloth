"use client";
import { useEffect, useRef, useState } from "react";
import Modern from './figma/modern.png'
import fabric from './figma/fabric.png'
import Lightweight from './figma/lightweight.png'

const BG_IMAGE = "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920";

const features = [
  {
    img: fabric,
    alt: "Premium Cotton Fabric",
    title: "Premium Cotton Fabric",
    text1: "Our t-shirts are crafted from premium cotton that feels soft, breathable, and comfortable all day.",
    text2: "Designed for durability, the fabric keeps its shape and quality even after multiple washes.",
    from: "left",
  },
  {
    img: Lightweight,
    alt: "Breathable & Lightweight",
    title: "Breathable & Lightweight",
    text1: "Designed with breathable, lightweight fabric that keeps you cool and comfortable throughout the day.",
    text2: "Making it the perfect choice for everyday wear in any season.",
    from: "right",
  },
  {
    img: Modern,
    alt: "Modern Tailored Fit",
    title: "Modern Tailored Fit",
    text1: "Our t-shirts feature a modern tailored fit that offers a clean, sharp look while maintaining comfort.",
    text2: "Built for the everyday — from the street to the office.",
    from: "left",
  },
];

function useInView(threshold = 0.25) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          // Reset so animation replays every time section re-enters
          setInView(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function FeatureRow({ feature, index }: { feature: typeof features[0]; index: number }) {
  const { ref, inView } = useInView(0.2);
  const isLeft = feature.from === "left";

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
        opacity: inView ? 1 : 0,
        transform: inView
          ? "translateX(0)"
          : isLeft ? "translateX(-80px)" : "translateX(80px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
        transitionDelay: "0.1s",
      }}
      className="feature-row"
    >
      {/* Image */}
      <div style={{
        width: "100%",
        borderRadius: 16,
        overflow: "hidden",
        boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}>
        <img
          src={feature.img}
          alt={feature.alt}
          style={{
            width: "100%",
            height: 280,
            objectFit: "cover",
            objectPosition: "center",
            display: "block",
          }}
        />
      </div>

      {/* Text below image on mobile */}
      <div className="feature-text-mobile">
        <h3 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "1.4rem",
          fontWeight: 700,
          color: "#E9B824",
          marginBottom: 10,
        }}>{feature.title}</h3>
        <p style={{ fontFamily: "'Montserrat', sans-serif", color: "rgba(255,255,255,0.75)", lineHeight: 1.7, fontSize: "0.9rem", marginBottom: 8 }}>{feature.text1}</p>
        <p style={{ fontFamily: "'Montserrat', sans-serif", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, fontSize: "0.9rem" }}>{feature.text2}</p>
      </div>
    </div>
  );
}

function FeatureDesktopRow({ feature, index }: { feature: typeof features[0]; index: number }) {
  const { ref, inView } = useInView(0.2);
  const isLeft = feature.from === "left";

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 48,
        flexDirection: isLeft ? "row" : "row-reverse",
        marginBottom: index < features.length - 1 ? 80 : 0,
        opacity: inView ? 1 : 0,
        transform: inView
          ? "translateX(0)"
          : isLeft ? "translateX(-80px)" : "translateX(80px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
        transitionDelay: "0.1s",
      }}
    >
      {/* Image */}
      <div style={{
        flexShrink: 0,
        width: index === 0 ? 320 : 260,
        height: index === 0 ? 380 : 320,
        borderRadius: 16,
        overflow: "hidden",
        boxShadow: "0 24px 64px rgba(0,0,0,0.6)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}>
        <img
          src={feature.img}
          alt={feature.alt}
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
        />
      </div>

      {/* Text */}
      <div style={{ flex: 1 }}>
        <h3 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(1.5rem, 2vw, 2rem)",
          fontWeight: 700,
          color: "#E9B824",
          marginBottom: 16,
          lineHeight: 1.2,
        }}>{feature.title}</h3>
        <p style={{
          fontFamily: "'Montserrat', sans-serif",
          color: "rgba(255,255,255,0.78)",
          lineHeight: 1.8,
          fontSize: "clamp(0.88rem, 1.1vw, 1rem)",
          marginBottom: 14,
        }}>{feature.text1}</p>
        <p style={{
          fontFamily: "'Montserrat', sans-serif",
          color: "rgba(255,255,255,0.55)",
          lineHeight: 1.8,
          fontSize: "clamp(0.85rem, 1vw, 0.95rem)",
        }}>{feature.text2}</p>
      </div>
    </div>
  );
}

export function QualitySection() {
  return (
    <section style={{ position: "relative", overflow: "hidden", padding: "100px 0" }}>

      {/* Dark background image */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `url(${BG_IMAGE})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        zIndex: 0,
        filter: "brightness(0.22)",
      }} />

      {/* Subtle dark overlay for extra depth */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.6) 100%)",
        zIndex: 1,
      }} />

      <div style={{ position: "relative", zIndex: 2, maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(1.5rem, 4vw, 3.4rem)",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.2,
            marginBottom: 20,
          }}>
            Comfort, Quality, and Style<br />in Every Tee
          </h2>
          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            color: "rgba(255,255,255,0.65)",
            fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)",
            lineHeight: 1.8,
            maxWidth: 560,
            margin: "0 auto",
          }}>
            We focus on premium materials, clean design, and perfect tailoring to create t-shirts that look great and feel even better.
          </p>
        </div>

        {/* Desktop layout */}
        <div className="quality-desktop">
          {features.map((f, i) => (
            <FeatureDesktopRow key={i} feature={f} index={i} />
          ))}
        </div>

        {/* Mobile layout */}
        <div className="quality-mobile" style={{ display: "none", flexDirection: "column", gap: 48 }}>
          {features.map((f, i) => (
            <FeatureRow key={i} feature={f} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Playfair+Display:wght@700;800&display=swap');

        @media (max-width: 768px) {
          .quality-desktop { display: none !important; }
          .quality-mobile { display: flex !important; }
          .feature-text-mobile { display: block !important; }
        }

        .feature-text-mobile {
          display: block;
        }
      `}</style>
    </section>
  );
}
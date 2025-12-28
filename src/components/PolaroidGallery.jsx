import React, { useEffect, useRef } from "react";
import "../styles/PolaroidGallery.css";

const PolaroidGallery = ({ photos = [], position = "top" }) => {
  const galleryRef = useRef(null);

  useEffect(() => {
    let mounted = true;

    async function run() {
      try {
        const { gsap } = await import("gsap");
        if (!mounted) return;

        const items = galleryRef.current.querySelectorAll(".polaroid-item");

        gsap.fromTo(
          items,
          { opacity: 0, y: position === "top" ? 40 : -40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            stagger: 0.12,
            ease: "power3.out",
          }
        );

        items.forEach((item, i) => {
          gsap.to(item, {
            y: position === "top" ? "+=10" : "-=10",
            rotation: Math.random() * 14 - 7,
            duration: 5 + Math.random() * 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: i * 0.2,
          });
        });
      } catch {
        // ignore
      }
    }

    run();

    return () => {
      mounted = false;
    };
  }, [photos, position]);

  return (
    <div className={`polaroid-curve ${position}`} ref={galleryRef}>
      {photos.map((src, index) => (
        <div key={index} className="polaroid-item">
          <div className="polaroid-frame">
            <img src={src} alt={`Polaroid ${index + 1}`} loading="lazy" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PolaroidGallery;

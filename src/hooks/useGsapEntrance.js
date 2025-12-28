import { useEffect } from "react";

export default function useGsapEntrance() {
  useEffect(() => {
    let mounted = true;

    async function run() {
      try {
        const { gsap } = await import("gsap");
        if (!mounted) return;

        // Let CSS + IntersectionObserver handle .reveal entrance/exit animations.
        // Only initialize polaroid animations here (they depend on GSAP transforms).
        const polaroidEls = document.querySelectorAll(".polaroid-curve .polaroid-item");
        if (polaroidEls?.length && gsap?.fromTo) {
          gsap.fromTo(
            polaroidEls,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.9, stagger: 0.04, ease: "power3.out" }
          );
        }
      } catch {
        // fail silently if gsap cannot be loaded
      }
    }

    run();

    return () => {
      mounted = false;
    };
  }, []);
}

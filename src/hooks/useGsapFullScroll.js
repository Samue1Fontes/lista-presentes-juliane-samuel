import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const useGsapFullScroll = (scope) => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".panel");

      panels.forEach((panel, i) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: panel,
            start: "top top",
            end: "bottom top",
            scrub: true,
            pin: true,
            pinSpacing: true, // 👈 ESSENCIAL pro scroll funcionar
            anticipatePin: 1,
            toggleActions: "play reverse play reverse",
          },
        });

        tl.fromTo(
          panel,
          { opacity: 0, yPercent: 20, scale: 1.05 },
          { opacity: 1, yPercent: 0, scale: 1, duration: 1.4, ease: "power2.out" }
        ).to(panel, {
          opacity: 0.6,
          yPercent: -10,
          scale: 0.98,
          duration: 1,
          ease: "power2.inOut",
        });
      });

      // Atualiza o layout e força o GSAP a recalcular o tamanho
      ScrollTrigger.refresh(true);
    }, scope);

    return () => ctx.revert();
  }, [scope]);
};

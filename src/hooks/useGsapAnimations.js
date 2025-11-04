import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const useGsapAnimations = (scope) => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // textos subindo
      gsap.utils.toArray(".fade-up").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );
      });

      // imagens laterais
      gsap.utils.toArray(".fade-left").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: -100 },
          {
            opacity: 1,
            x: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
            },
          }
        );
      });

      gsap.utils.toArray(".fade-right").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: 100 },
          {
            opacity: 1,
            x: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
            },
          }
        );
      });
    }, scope);

    return () => ctx.revert();
  }, [scope]);
};

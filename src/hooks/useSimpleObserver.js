import { useEffect } from "react";

export default function useSimpleObserver() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const opts = {
      root: null,
      rootMargin: "0px",
      threshold: 0.18,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        } else {
          entry.target.classList.remove("in-view");
        }
      });
    }, opts);

    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

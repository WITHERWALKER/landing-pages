import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const DEFAULT_TRIGGER_START = "top 85%";

let isRegistered = false;

function registerGsap() {
  if (isRegistered || typeof window === "undefined") {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  isRegistered = true;
}

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function settleAnimated(element: Element) {
  element.removeAttribute("data-animate");
  element.removeAttribute("data-animate-item");
  gsap.set(element, { clearProps: "all" });
}

function animateReveal(element: Element, delay = 0) {
  gsap.to(element, {
    opacity: 1,
    y: 0,
    duration: 1,
    delay,
    ease: "expo.out",
    overwrite: "auto",
    scrollTrigger: {
      trigger: element,
      start: DEFAULT_TRIGGER_START,
      toggleActions: "play none none none",
      once: true,
    },
    onComplete: () => settleAnimated(element),
  });
}

function initSingleReveals() {
  document.querySelectorAll("[data-animate='fade-up']").forEach((element) => {
    if (prefersReducedMotion()) {
      settleAnimated(element);
      return;
    }
    animateReveal(element);
  });
}

function initStaggerReveals() {
  document.querySelectorAll("[data-animate-stagger]").forEach((container) => {
    const items = container.querySelectorAll("[data-animate-item]");
    if (!items.length) {
      return;
    }

    if (prefersReducedMotion()) {
      items.forEach(settleAnimated);
      return;
    }

    gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 1.1,
      ease: "expo.out",
      stagger: 0.1,
      overwrite: "auto",
      scrollTrigger: {
        trigger: container,
        start: DEFAULT_TRIGGER_START,
        toggleActions: "play none none none",
        once: true,
      },
      onComplete: () => items.forEach(settleAnimated),
    });
  });
}

function initHeroAnimation() {
  const heroContent = document.querySelector("[data-hero-reveal]");
  if (!heroContent) {
    return;
  }

  const heroItems = heroContent.children;
  if (prefersReducedMotion()) {
    Array.from(heroItems).forEach(settleAnimated);
    return;
  }

  gsap.to(heroItems, {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "expo.out",
    stagger: 0.12,
    delay: 0.25,
    overwrite: "auto",
  });

  const heroImage = document.querySelector("[data-hero-image]");
  if (!heroImage) {
    return;
  }

  gsap.to(heroImage, {
    y: 100,
    ease: "none",
    scrollTrigger: {
      trigger: "#hero",
      start: "top top",
      end: "bottom top",
      scrub: 1,
    },
  });
}

export function initAnimations() {
  registerGsap();
  initHeroAnimation();
  initSingleReveals();
  initStaggerReveals();
}

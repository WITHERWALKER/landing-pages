import { initAnimations } from "@/scripts/animations";
import { initCarouselControls } from "@/scripts/carousel";
import { initNavigation } from "@/scripts/navigation";

function initApp() {
  initAnimations();
  initNavigation();
  initCarouselControls();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp, { once: true });
} else {
  initApp();
}

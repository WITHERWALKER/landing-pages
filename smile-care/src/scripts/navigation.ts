const HEADER_SCROLLED_CLASS = "is-scrolled";

function updateActiveLink(sectionId: string) {
  document.querySelectorAll<HTMLElement>("[data-nav-link]").forEach((link) => {
    const isActive = link.getAttribute("href") === `#${sectionId}`;
    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function initHeaderScroll() {
  const header = document.getElementById("site-header");
  if (!header) {
    return;
  }

  const syncHeaderState = () => {
    header.classList.toggle(HEADER_SCROLLED_CLASS, window.scrollY > 40);
  };

  syncHeaderState();
  window.addEventListener("scroll", syncHeaderState, { passive: true });
}

function initMobileMenu() {
  const menuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  if (!menuButton || !mobileMenu) {
    return;
  }

  const closeMenu = () => {
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("block");
    menuButton.setAttribute("aria-expanded", "false");
  };

  menuButton.addEventListener("click", () => {
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isExpanded));
    mobileMenu.classList.toggle("hidden", isExpanded);
    mobileMenu.classList.toggle("block", !isExpanded);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}

function initActiveSectionObserver() {
  const sections = document.querySelectorAll<HTMLElement>(
    "main section[id], #hero",
  );
  if (!sections.length) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          updateActiveLink(entry.target.id);
        }
      });
    },
    {
      rootMargin: "-40% 0px -60% 0px",
      threshold: 0,
    },
  );

  sections.forEach((section) => observer.observe(section));
}

export function initNavigation() {
  initHeaderScroll();
  initMobileMenu();
  initActiveSectionObserver();
}

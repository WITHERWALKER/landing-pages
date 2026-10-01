function getScrollAmount(track: HTMLElement) {
  const card = track.querySelector<HTMLElement>(".testimonial-card");
  if (!card) {
    return 300;
  }

  const gap = parseFloat(getComputedStyle(track).columnGap) || 16;
  return card.offsetWidth + gap;
}

function refreshButtons(track: HTMLElement) {
  const atStart = track.scrollLeft <= 1;
  const atEnd =
    track.scrollLeft + track.clientWidth >= track.scrollWidth - 1;

  document
    .querySelectorAll<HTMLButtonElement>(
      `[data-carousel-target="${track.id}"]`,
    )
    .forEach((button) => {
      if (button.hasAttribute("data-carousel-prev")) {
        button.disabled = atStart;
      }
      if (button.hasAttribute("data-carousel-next")) {
        button.disabled = atEnd;
      }
    });
}

export function initCarouselControls() {
  const wired = new Set<HTMLElement>();

  document
    .querySelectorAll<HTMLButtonElement>("[data-carousel-target]")
    .forEach((button) => {
      button.addEventListener("click", () => {
        const targetId = button.dataset.carouselTarget;
        if (!targetId) {
          return;
        }

        const track = document.getElementById(targetId);
        if (!track) {
          return;
        }

        const direction = button.hasAttribute("data-carousel-prev") ? -1 : 1;
        track.scrollBy({
          left: getScrollAmount(track) * direction,
          behavior: "smooth",
        });
      });

      const targetId = button.dataset.carouselTarget;
      const track = targetId ? document.getElementById(targetId) : null;
      if (track && !wired.has(track)) {
        wired.add(track);
        track.addEventListener("scroll", () => refreshButtons(track), {
          passive: true,
        });
        window.addEventListener("resize", () => refreshButtons(track));
        refreshButtons(track);
      }
    });
}

import gsap from "gsap"

export const heroAnimation = (headingEl, subtitleEl, imageEl) => {
  const heroTl = gsap.timeline();
  heroTl.to(headingEl,
    {
      stagger: 0.2,

    }
  )
}
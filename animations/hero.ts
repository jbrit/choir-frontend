import gsap from "gsap"
import { CustomEase } from "gsap/all";

const heroEase = CustomEase.create(  "custom", "M0,0 C0.482,0 0.447,0.143 0.49,0.252 0.556,0.42 0.458,1 1,1 ")

export const heroAnimation = (headingEl : gsap.TweenTarget, subtitleEl : gsap.TweenTarget, imageEl : gsap.TweenTarget) => {
  const heroTl = gsap.timeline();
  heroTl.fromTo(headingEl,
    {
      stagger: 0.2,
      y: 80,
      ease: heroEase,
    },
    {
      y: 0
    }
  ).fromTo(subtitleEl,
    {
      duraton: 0.3,
      y: 80,
      ease: heroEase,
    },
    {
      y: 0
    }
  ).to(imageEl, {
      stagger: 0.3,
      height: 0,
      ease: heroEase
  })
}
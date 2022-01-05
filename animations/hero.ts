import gsap from "gsap"
// import { CustomEase } from "gsap/all";

// const heroEase = CustomEase.create(  "custom", "M0,0 C0.482,0 0.447,0.143 0.49,0.252 0.556,0.42 0.458,1 1,1 ")

export const heroAnimation = (headingEl : gsap.TweenTarget, subtitleEl : gsap.TweenTarget, imageEl : gsap.TweenTarget, buttonEl : gsap.TweenTarget) => {
  const heroTl = gsap.timeline({});
  heroTl.fromTo(headingEl,
    {
      y: 80,
      skewY: 10
      // ease: heroEase,
    },
    {
      stagger: 0.3,
      y: 0,
      skewY: 0
    }
  ).fromTo(subtitleEl,
    {
      y: 80,
      skewY: 5
      // ease: heroEase,
    },
    {
      duraton: 0.3,
      y: 0,
      skewY: 0
    }
  ).fromTo(buttonEl, 
    {
      opacity: 0
    }, 
    {
      opacity: 1,
      duration: 0.4
    }
  )
  .to(imageEl, {
      stagger: 0.4,
      height: 0,
      // ease: heroEase
  })
}
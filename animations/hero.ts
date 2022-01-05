import gsap from "gsap"

export const heroAnimation = (headingEl : gsap.TweenTarget, subtitleEl : gsap.TweenTarget, boxEl : gsap.TweenTarget, buttonEl : gsap.TweenTarget, imageEl : gsap.TweenTarget) => {
  const heroTl = gsap.timeline({});
  heroTl.fromTo(headingEl,
    {
      y: 80,
      skewY: 10
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
  .to(boxEl, {
      stagger: 0.4,
      height: 0,
  })
  .to(imageEl, {
      stagger: 0.4,
      scale: 1,
  }, "-=1.1")
}
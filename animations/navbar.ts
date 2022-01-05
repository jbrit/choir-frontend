import gsap from "gsap"

export const navAnimation = (navEl : gsap.TweenTarget) => { 
  gsap.fromTo(navEl, 
    {
      y: -100
    }, 
    {
      y: 0,
      duration: 0.6
    }
  )
}
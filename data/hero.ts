interface Image {
  height: number,
  src: string
}

interface Heading {
  text: string
}

export const heroImages: Image[] = [
  {
    height: 500,
    src: "https://res.cloudinary.com/dexg5uy3d/image/upload/v1644112035/choir1_cdq0wx.jpg"

  },
  {
    height: 450,
    src: "https://res.cloudinary.com/dexg5uy3d/image/upload/v1644112277/choir2_untpgx.jpg"

  },
  {
    height: 400,
    src: "https://res.cloudinary.com/dexg5uy3d/image/upload/v1644112302/choir3_kbp7ah.jpg"

  }
]

export const heroHeading: Heading[] = [
  {
    text: "Tabernacle",

  },
  {
    text: "of",

  },
  {
    text: "Psalms",

  }
]

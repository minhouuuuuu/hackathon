"use client"
import Slider from "react-slick"
import Image from "next/image"

// Importez les styles CSS pour react-slick
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const partners = [
  { name: "Adidas", logo: "/logos/adidas.svg" },
  { name: "Nike", logo: "/logos/nike.svg" },
  { name: "Puma", logo: "/logos/puma.svg" },
  { name: "Reebok", logo: "/logos/reebok.svg" },
  { name: "Under Armour", logo: "/logos/under-armour.svg" },
  { name: "New Balance", logo: "/logos/new-balance.svg" },
  { name: "Asics", logo: "/logos/asics.svg" },
  { name: "Fila", logo: "/logos/fila.svg" },
  { name: "Converse", logo: "/logos/converse.svg" },
  { name: "Vans", logo: "/logos/vans.svg" },
  { name: "Lacoste", logo: "/logos/lacoste.svg" },
  { name: "The North Face", logo: "/logos/the-north-face.svg" }
]

const PartnersCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  }

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Nos Partenaires</h2>
        <Slider {...settings}>
          {partners.map((partner, index) => (
            <div key={index} className="px-4">
              <div className="bg-white p-4 h-24 flex items-center justify-center">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={100}
                  height={100}
                  objectFit="contain"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default PartnersCarousel


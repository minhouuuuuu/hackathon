"use client"
import Slider from "react-slick"

// Importez les styles CSS pour react-slick
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const results = [
  { date: "2023-11-15", homeTeam: "Notre Équipe", awayTeam: "Les Aigles", score: "3-2" },
  { date: "2023-11-08", homeTeam: "Les Ours", awayTeam: "Notre Équipe", score: "1-4" },
  { date: "2023-11-01", homeTeam: "Notre Équipe", awayTeam: "Les Loups", score: "5-3" },
  { date: "2023-10-25", homeTeam: "Les Tigres", awayTeam: "Notre Équipe", score: "2-2" },
  { date: "2023-10-18", homeTeam: "Notre Équipe", awayTeam: "Les Lions", score: "4-1" },
]

const ResultsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Derniers Résultats</h2>
        <Slider {...settings}>
          {results.map((result, index) => (
            <div key={index} className="px-2">
              <div className="bg-white rounded-lg shadow-md p-6">
                <p className="text-gray-600 mb-2">{new Date(result.date).toLocaleDateString()}</p>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">{result.homeTeam}</span>
                  <span className="text-2xl font-bold">{result.score}</span>
                  <span className="font-semibold">{result.awayTeam}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default ResultsCarousel


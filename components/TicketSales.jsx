import { useState } from "react"
import Image from "next/image"
import { CreditCard, Wallet, Smartphone, ChevronRight, X } from 'lucide-react'

// Données factices pour les matchs avec de vraies images
const matches = [
  {
    id: 1,
    opponent: "Les Aigles de Glace",
    date: "2023-12-15",
    time: "20:00",
    price: 25,
    image:
      "https://images.unsplash.com/photo-1515703407324-5f753afd8be8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80",
  },
  {
    id: 2,
    opponent: "Les Ours Polaires",
    date: "2023-12-22",
    time: "19:30",
    price: 30,
    image:
      "https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
  },
  {
    id: 3,
    opponent: "Les Pingouins Rapides",
    date: "2023-12-29",
    time: "20:00",
    price: 28,
    image:
      "https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
  },
]

const TicketSales = ({ addToCart }) => {
  const [showPayment, setShowPayment] = useState(false)
  const [selectedMatch, setSelectedMatch] = useState(null)

  const handleAddToCart = (match) => {
    addToCart(match)

    // Ajouter le billet au localStorage
    const cart = JSON.parse(localStorage.getItem("cart") || "[]")
    cart.push(match)
    localStorage.setItem("cart", JSON.stringify(cart))
  }

  const openPayment = (match) => {
    setSelectedMatch(match)
    setShowPayment(true)
  }

  const closePayment = () => {
    setShowPayment(false)
  }

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Prochains Matchs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {matches.map((match) => (
            <div
              key={match.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="relative h-64">
                <Image src={match.image || "/placeholder.svg"} alt={match.opponent} layout="fill" objectFit="cover" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{match.opponent}</h3>
                <p className="text-gray-600 mb-2">
                  {match.date} à {match.time}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-3xl font-bold">{match.price}€</span>
                  <div className="space-x-2">
                    <button
                      onClick={() => handleAddToCart(match)}
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                    >
                      Ajouter au panier
                    </button>
                    <button
                      onClick={() => openPayment(match)}
                      className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                    >
                      Acheter
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showPayment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl max-w-md w-full shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">Récapitulatif</h3>
              <button
                onClick={closePayment}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {selectedMatch && (
              <div className="mb-8 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden">
                    <Image
                      src={selectedMatch.image}
                      alt={selectedMatch.opponent}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg">{selectedMatch.opponent}</h4>
                    <p className="text-gray-600 text-sm">
                      Le {selectedMatch.date} à {selectedMatch.time}
                    </p>
                    <div className="mt-2 flex justify-between items-center">
                      <span className="font-medium">Prix du billet</span>
                      <span className="font-bold text-lg">{selectedMatch.price}€</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Méthode de paiement</h3>

            <div className="space-y-3">
              <button className="w-full flex items-center justify-between p-4 border rounded-lg hover:border-blue-500 transition-all duration-200 group">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-blue-50 rounded-full group-hover:bg-blue-100">
                    <CreditCard className="w-5 h-5 text-blue-500" />
                  </div>
                  <span className="font-medium text-gray-700">Carte bancaire</span>
                </div>
                <ChevronRight className="w-5 h-5 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>

              <button className="w-full flex items-center justify-between p-4 border rounded-lg hover:border-yellow-500 transition-all duration-200 group">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-yellow-50 rounded-full group-hover:bg-yellow-100">
                    <Wallet className="w-5 h-5 text-yellow-500" />
                  </div>
                  <span className="font-medium text-gray-700">PayPal</span>
                </div>
                <ChevronRight className="w-5 h-5 text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>

              <button className="w-full flex items-center justify-between p-4 border rounded-lg hover:border-black transition-all duration-200 group">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-gray-50 rounded-full group-hover:bg-gray-100">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-gray-700">Apple Pay</span>
                </div>
                <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>

            <p className="mt-6 text-sm text-gray-500 text-center">
              Paiement sécurisé et crypté
            </p>
          </div>
        </div>
      )}
    </section>
  )
}

export default TicketSales


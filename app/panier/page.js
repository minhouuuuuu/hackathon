"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ShoppingCart, CreditCard, Wallet, Smartphone, ChevronRight, X } from "lucide-react"

export default function Cart() {
  const [cartItems, setCartItems] = useState([])
  const [showPayment, setShowPayment] = useState(false)

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]")
    setCartItems(cart)
  }, [])

  const removeFromCart = (index) => {
    const newCart = [...cartItems]
    newCart.splice(index, 1)
    setCartItems(newCart)
    localStorage.setItem("cart", JSON.stringify(newCart))
  }

  const total = cartItems.reduce((sum, item) => sum + item.price, 0)

  const handlePayment = () => {
    setShowPayment(true)
  }

  const closePayment = () => {
    setShowPayment(false)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-white shadow-md py-4 px-8">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Hockey Club
          </Link>
          <div className="flex items-center">
            <ShoppingCart size={24} className="text-gray-600 mr-2" />
            <span className="text-lg font-semibold">{cartItems.length} article(s)</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-3xl font-bold mb-8">Votre Panier</h1>
        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingCart size={64} className="text-gray-400 mx-auto mb-4" />
            <p className="text-xl text-gray-600">Votre panier est vide.</p>
            <Link href="/" className="mt-4 inline-block text-blue-500 hover:underline">
              Retourner à la billetterie
            </Link>
          </div>
        ) : (
          <>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {cartItems.map((item, index) => (
                <div key={index} className="flex justify-between items-center border-b p-4">
                  <div>
                    <h2 className="text-xl font-semibold">{item.opponent}</h2>
                    <p className="text-gray-600">
                      {item.date} à {item.time}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xl font-bold mr-4">{item.price}€</span>
                    <button
                      onClick={() => removeFromCart(index)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors"
                    >
                      Supprimer
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-white rounded-lg shadow-md p-6">
              <p className="text-2xl font-bold mb-4">Total: {total}€</p>
              <button
                onClick={handlePayment}
                className="w-full bg-green-500 text-white px-6 py-3 rounded text-lg font-semibold hover:bg-green-600 transition-colors"
              >
                Procéder au paiement
              </button>
            </div>
          </>
        )}

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

              <div className="mb-8 p-4 bg-gray-50 rounded-lg">
                <div className="space-y-4">
                  {cartItems.map((item, index) => (
                    <div key={index} className="flex justify-between items-center border-b last:border-0 pb-4 last:pb-0">
                      <div>
                        <h4 className="font-semibold">{item.opponent}</h4>
                        <p className="text-gray-600 text-sm">
                          Le {item.date} à {item.time}
                        </p>
                      </div>
                      <span className="font-bold">{item.price}€</span>
                    </div>
                  ))}
                  <div className="pt-4 border-t">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-lg">Total</span>
                      <span className="font-bold text-xl">{total}€</span>
                    </div>
                  </div>
                </div>
              </div>

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
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>Copyright &copy; 2025 Etoile Noire de Strasbourg. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}


import TextClip from "@/components/TextClip";
"use client"
import TextClip from "@/components/TextClip"
import TicketSales from "@/components/TicketSales"
import SectionActu from "@/components/SectionActu";

import TeamSection from "@/components/TeamSection"
import TeamHistory from "@/components/TeamHistory"
import UpcomingMatches from "@/components/UpcomingMatches"
import ResultsCarousel from "@/components/ResultsCaroussel"
import Link from "next/link"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { ShoppingCart, User } from "lucide-react"
import Footer from "@/components/Footer"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import PartnersCarousel from "@/components/PartnersCaroussel"
export default function Home() {
  const [cartItems, setCartItems] = useState(0)
  const router = useRouter()

  useEffect(() => {
    // Charger le nombre d'articles du panier depuis le localStorage au chargement de la page
    const cart = JSON.parse(localStorage.getItem("cart") || "[]")
    setCartItems(cart.length)
  }, [])

  const addToCart = (match) => {
    setCartItems((prevItems) => prevItems + 1)
  }

  const handleCartClick = () => {
    router.push("/panier")
  }

  return (
    <main className="">
      <section>
        <TextClip />
      </section>
      <section>
        <TicketSales />
      </section>
      <SectionActu />
    </main>
  );
  <div className="bg-black relative">
    <header className="fixed z-[100] top-4 w-full px-20">
      <div className="flex justify-between items-center bg-white text-black rounded-full p-1 shadow-lg">
        <ShimmerButton>
          <h2>Logo</h2>
        </ShimmerButton>
        <div>
          <ul className="flex gap-8 items-center text-xl">
            <li>
              <Link href="/equipe" className="hover:opacity-70 transition-opacity">
                L'EQUIPE
              </Link>
            </li>
            <li>
              <Link href="/resultats" className="hover:opacity-70 transition-opacity">
                RÉSULTATS
              </Link>
            </li>
            <li>
              <Link href="/formation" className="hover:opacity-70 transition-opacity">
                FORMATION
              </Link>
            </li>
            <li>
              <Link href="/boutique" className="hover:opacity-70 transition-opacity">
                BOUTIQUE
              </Link>
            </li>
            <li>
              <Link href="/photo" className="hover:opacity-70 transition-opacity">
                PHOTO
              </Link>
            </li>
            <li>
              <Link href="/partenaires" className="hover:opacity-70 transition-opacity">
                PARTENAIRES
              </Link>
            </li>
            <li>
              <Link href="/billetterie" className="hover:opacity-70 transition-opacity">
                BILLETTERIE
              </Link>
            </li>
            <li>
              <Link href="/infos" className="hover:opacity-70 transition-opacity">
                INFOS
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={handleCartClick} className="hover:opacity-70 transition-opacity relative">
            <ShoppingCart size={24} className="text-black" />
            {cartItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartItems}
              </span>
            )}
          </button>
          <button className="hover:opacity-70 transition-opacity">
            <User size={24} className="text-black" />
          </button>
          <a
            className="bg-black text-xl text-white px-10 py-3 rounded-full hover:opacity-70 transition-opacity"
            href="#"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
    <main className="">
      <section>
        <TextClip />
      </section>
      <section>
        <UpcomingMatches />
      </section>
      <section>
        <ResultsCarousel />
      </section>
      <section>
        <TeamHistory />
      </section>
      <section>
        <TeamSection />
      </section>
      <section>
        <PartnersCarousel />
      </section>
      <section>
        <TicketSales addToCart={addToCart} />
      </section>
    </main>

    <Footer />
  </div>
  )
}


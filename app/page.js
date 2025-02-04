import Image from "next/image";
import TextClip from "@/components/TextClip";
import TicketSales from "@/components/TicketSales"
import Link from "next/link";
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { ShoppingCart, User } from "lucide-react";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-black relative">
      <header className="fixed z-[100] top-4 w-full px-20">
        <div className="flex justify-between items-center bg-white text-black rounded-full p-1">
          <ShimmerButton>
            <h2>Logo</h2>
          </ShimmerButton>
          <div>
            <ul className="flex gap-8 items-center text-xl">
              <li>
                <Link href="/equipe" className="hover:opacity-70 transition-opacity">L'EQUIPE</Link>
              </li>
              <li>
                <Link href="/resultats" className="hover:opacity-70 transition-opacity">RÉSULTATS</Link>
              </li>
              <li>
                <Link href="/formation" className="hover:opacity-70 transition-opacity">FORMATION</Link>
              </li>
              <li>
                <Link href="/boutique" className="hover:opacity-70 transition-opacity">BOUTIQUE</Link>
              </li>
              <li>
                <Link href="/photo" className="hover:opacity-70 transition-opacity">PHOTO</Link>
              </li>
              <li>
                <Link href="/partenaires" className="hover:opacity-70 transition-opacity">PARTENAIRES</Link>
              </li>
              <li>
                <Link href="/billetterie" className="hover:opacity-70 transition-opacity">BILLETTERIE</Link>
              </li>
              <li>
                <Link href="/infos" className="hover:opacity-70 transition-opacity">INFOS</Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <button className="hover:opacity-70 transition-opacity">
              <ShoppingCart size={24} className="text-black" />
            </button>
            <button className="hover:opacity-70 transition-opacity">
              <User size={24} className="text-black" />
            </button>
            <a className="bg-black text-xl text-white px-8 py-3 rounded-full hover:opacity-70 transition-opacity" href="#">
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
          <TicketSales />
        </section>
      </main>

      <Footer />

    </div>
  );
}

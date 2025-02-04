"use client";

import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";
import { ShimmerButton } from '@/components/ui/shimmer-button';

export default function Header() {

  return (
    <header className="fixed z-[100] top-4 w-full px-20">
      <div className="flex justify-between items-center bg-white text-black rounded-full p-1">
        <Link href="/">
          <ShimmerButton>
            <h2>Logo</h2>
          </ShimmerButton>
        </Link>

        <div>
          <ul className="flex gap-8 items-center text-xl uppercase --font-geist-sans">
            <li>
              <Link href="/equipe" className="hover:text-amber-500 transition">L'équipe</Link>
            </li>
            <li>
              <Link href="/resultats" className="hover:text-amber-500 transition">Résultat</Link>
            </li>
            <li>
              <Link href="/formation" className="hover:text-amber-500 transition">Formation</Link>
            </li>
            <li>
              <Link href="/boutique" className="hover:text-amber-500 transition">Boutique</Link>
            </li>
            <li>
              <Link href="/partenaires" className="hover:text-amber-500 transition">Partenaires</Link>
            </li>
            <li>
              <Link href="/billetterie" className="hover:text-amber-500 transition">Billetterie</Link>
            </li>
            <li>
              <Link href="/infos" className="hover:text-amber-500 transition">Infos</Link>
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
          <Link href="/contact" className="bg-black text-xl text-white px-8 py-3 rounded-full hover:opacity-70 transition-opacity">
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}

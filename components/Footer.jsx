"use client";

import Link from "next/link";
import Image from 'next/image'

export default function Footer() {

  return (
    <footer
      className="bg-black p-5 md:p-20">
      
      <div className="w-full flex flex-col items-center justify-center">
        <img className="w-40" src="/etoileNoireLogo.png" alt="Logo de l'Étoile Noire" />
        <p className="text-gray-200">Étoile Noire<br/>Strasbourg</p>
      </div>

      <div className="my-12">
        <ul className="flex flex-wrap gap-x-8 gap-y-4 justify-center">
          <li>
            <Link href="/billetterie" className="block py-3 px-6 rounded-sm text-3xl text-white bg-amber-500 hover:bg-amber-600 transition">Billetterie</Link>
          </li>
          <li>
            <Link href="/actualites" className="block py-3 px-6 rounded-sm text-3xl text-white bg-amber-500 hover:bg-amber-600 transition">Actualités</Link>
          </li>
        </ul>
      </div>

      <div>
        <ul className="flex flex-wrap gap-x-8 gap-y-4 justify-center text-xl text-amber-400 uppercase">
          <li>
            <Link href="/equipe" className="hover:text-white transition-opacity">L'équipe</Link>
          </li>
          <li>
            <Link href="/resultats" className="hover:text-white transition">Résultat</Link>
          </li>
          <li>
            <Link href="/formation" className="hover:text-white transition">Formation</Link>
          </li>
          <li>
            <Link href="/boutique" className="hover:text-white transition">Boutique</Link>
          </li>
          <li>
            <Link href="/partenaires" className="hover:text-white transition">Partenaires</Link>
          </li>
          <li>
            <Link href="/infos" className="hover:text-white transition">Informations</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-white transition">Contact</Link>
          </li>
        </ul>
      </div>

      <hr className="my-12" />

      <div className="flex flex-wrap justify-between items-center gap-10">
        <ul className="flex flex-wrap items-center gap-4">
          <li>
            <a className="hover:opacity-75" href="https://www.facebook.com/EtoileNoireStrasbourg/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/facebook.svg"
                alt="Logo de Facebook"
                width={40}
                height={40}
              />
            </a>
          </li>
          <li>
            <a className="hover:opacity-75" href="https://www.instagram.com/etoilenoirestrasbourg/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/instagram.svg"
                alt="Logo de Instagram"
                width={40}
                height={40}
              />
            </a>
          </li>
          <li>
            <a className="hover:opacity-75" href="https://www.youtube.com/channel/UCzLI_TtvApNQL0i_wHnojyw" target="_blank" rel="noopener noreferrer">
              <Image
                src="/youtube.svg"
                alt="Logo de You Tube"
                width={40}
                height={40}
              />
            </a>
          </li>
        </ul>
        
        <ul className="flex gap-4 text-white">
          <li>
            <Link href="#" className="hover:opacity-75 transition">Politique de confidentialité</Link>
          </li>
          <li>
            <Link href="#" className="hover:opacity-75 transition">Mentions Légales</Link>
          </li>
        </ul>
      </div>

      <p className="mt-12 text-center text-white">Copyright © 2025 Etoile Noire de Strasbourg. All rights reserved.</p>

    </footer>
  );
}
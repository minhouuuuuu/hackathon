import Image from "next/image";
import TextClip from "@/components/TextClip";
import TicketSales from "@/components/TicketSales"
import Link from "next/link";
import { ShimmerButton } from '@/components/ui/shimmer-button';
import SectionActu from "@/components/SectionActu";
import Footer from "@/components/Footer";
import CardActu from "@/components/CardActu";

const actus = [
    { id: 1, img: "", title: "L'Étoile Noire ne trouve pas la faille à Brest", date: "2025-02-1", resume: "L'Étoile Noire de Strasbourg a subi une défaite frustrante sur la glace des Albatros de Brest, s'inclinant 2-1.", link: '#' },
    { id: 2, img: "", title: "Une semaine contrastée pour les Strasbourgeois", date: "2025-01-18", resume: "L'Étoile Noire de Strasbourg a vécu une semaine contrastée, entre une défaite à Épinal et une belle victoire face à Dunkerque.", link: '#' },
    { id: 3, img: "", title: "L'Étoile Noire ne trouve pas la solution face aux bisons de Neuilly sur Marne", date: "2025-01-11", resume: "Une nouvelle déception enrobe l'Iceberg. L'Étoile Noire a cédé face aux Bisons de Neuilly sur le score de 2-3, lors d'une rencontre où les Strasbourgeois n'ont pas réussi à inverser la tendance.", link: '#' },
    { id: 4, img: "", title: "L'Étoile Noire ne trouve pas la faille à Brest", date: "2025-02-1", resume: "L'Étoile Noire de Strasbourg a subi une défaite frustrante sur la glace des Albatros de Brest, s'inclinant 2-1.", link: '#' },
    { id: 5, img: "", title: "L'Étoile Noire ne trouve pas la solution face aux bisons de Neuilly sur Marne", date: "2025-01-11", resume: "Une nouvelle déception enrobe l'Iceberg. L'Étoile Noire a cédé face aux Bisons de Neuilly sur le score de 2-3, lors d'une rencontre où les Strasbourgeois n'ont pas réussi à inverser la tendance.", link: '#' },
    { id: 6, img: "", title: "Une semaine contrastée pour les Strasbourgeois", date: "2025-01-18", resume: "L'Étoile Noire de Strasbourg a vécu une semaine contrastée, entre une défaite à Épinal et une belle victoire face à Dunkerque.", link: '#' },
  ]

export default function Actualites() {
  return (
    <main className="pt-28 pb-20 px-4 bg-white">
      <span className="block w-full text-center">L'Étoile Noire</span>
      <h1 className="text-amber-400 text-6xl font-bold text-center mb-12">Actualités</h1>
      
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {actus.map((actu) => (
          <CardActu key={actu.id} actu={actu} />
        ))}
      </div>

      <Link href="/" className="block w-fit mt-6 mx-auto bg-amber-400 hover:bg-amber-500 text-white py-3 px-6 text-2xl rounded-sm">
        Accueil
      </Link>
    </main>
  );
}
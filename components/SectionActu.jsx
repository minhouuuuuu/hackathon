// Données factices
const actus = [
  { id: 1, img: "", title: "L'Etoile Noire ne trouve pas la faille à Brest", date: "2025-02-1", resume: "L'Étoile Noire de Strasbourg a subi une défaite frustrante sur la glace des Albatros de Brest, s'inclinant 2-1.", link: '#' },
  { id: 2, img: "", title: "Une semaine contrastée pour les Strasbourgeois", date: "2025-01-18", resume: "L'Étoile Noire de Strasbourg a vécu une semaine contrastée, entre une défaite à Épinal et une belle victoire face à Dunkerque.", link: '#' },
  { id: 3, img: "", title: "L'Etoile Noire ne trouve pas la solution face aux bisons de Neuilly sur Marne", date: "2025-01-11", resume: "Une nouvelle déception enrobe l'Iceberg. L'Étoile Noire a cédé face aux Bisons de Neuilly sur le score de 2-3, lors d'une rencontre où les Strasbourgeois n'ont pas réussi à inverser la tendance.", link: '#' },
]

import Link from "next/link";
import CardActu from "./CardActu";

export default function SectionActu() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 text-black">

        <h2 className="text-3xl font-bold text-center mb-8">Dernières Actualités</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {actus.map((actu) => (
            <CardActu key={actu.id} actu={actu} />
          ))}
        </div>

        <Link href="/actualites" className="block w-fit mt-6 mx-auto bg-amber-500 hover:bg-amber-600 text-white py-3 px-6 text-2xl rounded-sm">
          Voir toutes les actualités
        </Link>

      </div>
    </section>
  )
}
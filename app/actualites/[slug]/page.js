import Link from "next/link";
import Image from 'next/image'
import CardActu from "@/components/CardActu";

const actus = [
    { id: 2, img: "", title: "Une semaine contrastée pour les Strasbourgeois", date: "2025-01-18", resume: "L'Étoile Noire de Strasbourg a vécu une semaine contrastée, entre une défaite à Épinal et une belle victoire face à Dunkerque.", link: 'article-2' },
    { id: 3, img: "", title: "L'Étoile Noire ne trouve pas la solution face aux bisons de Neuilly sur Marne", date: "2025-01-11", resume: "Une nouvelle déception enrobe l'Iceberg. L'Étoile Noire a cédé face aux Bisons de Neuilly sur le score de 2-3, lors d'une rencontre où les Strasbourgeois n'ont pas réussi à inverser la tendance.", link: 'article-3' },
    { id: 4, img: "", title: "L'Étoile Noire ne trouve pas la faille à Brest", date: "2025-02-1", resume: "L'Étoile Noire de Strasbourg a subi une défaite frustrante sur la glace des Albatros de Brest, s'inclinant 2-1.", link: 'article-4' },
  ]

export default function Actu() {
    return (
      <main className="pt-28 pb-20 px-4 bg-white">
        <span className="block w-full text-center">L'Étoile Noire / Actualités</span>
        <h1 className="text-amber-400 text-6xl font-bold text-center">L'Étoile Noire ne trouve pas la faille à Brest</h1>

        <div className="container mx-auto mt-12 mb-20">
            <Image className="sm:float-right w-full sm:w-1/2 aspect-video mb-6 sm:ml-6 bg-gray-300" src="" alt="photo illustrant l'article"/>
            
            <p className="font-sans">Strasbourg, (date) – L'Étoile Noire de Strasbourg a subi une défaite frustrante sur la glace des Albatros de Brest, s'inclinant 2-1. Malgré une multitude d'occasions, les Strasbourgeois n'ont pas réussi à concrétiser et à ramener les deux points de la victoire.</p>

            <h2 className="text-3xl text-amber-500 mt-6">Un début de match idéal</h2>
            
            <p className="font-sans">Les Strasbourgeois ont rapidement pris les commandes de la rencontre, ouvrant le score dès la 7ème minute grâce à Lucas Herrmann. Ce but a permis aux joueurs de l'Étoile Noire d'aborder la suite du match avec confiance.            </p>
            
            <h2 className="text-3xl text-amber-500 mt-6">Le réveil des Albatros</h2>

            <p className="font-sans">Le deuxième tiers a été plus équilibré. Les Albatros de Brest ont rapidement égalisé dès le début de la période, puis ont inversé la tendance en marquant un deuxième but en milieu de période. Les Strasbourgeois ont eu du mal à réagir face à ce retournement de situation.</p>
            
            <h2 className="text-3xl text-amber-500 mt-6">Une fin de match difficile</h2>

            <p className="font-sans">Le troisième tiers a été compliqué. Les Strasbourgeois ont multiplié les occasions de but, mais le gardien brestois a réalisé une bonne performance. Les statistiques parlent d'elles-mêmes : 47 tirs cadrés pour Strasbourg contre 25 pour Brest. Malgré cette domination, les Strasbourgeois n'ont pas réussi à trouver la faille.</p>
            <p className="font-sans">Cette défaite est difficile à digérer pour les joueurs de l'Étoile Noire. Ils ont tout donné sur la glace, mais la réussite n'était pas de leur côté. Il faudra vite se remettre de cette déception et se concentrer sur les prochains matchs.</p>

            <h2 className="text-3xl text-amber-500 mt-6">Les prochains défis</h2>

            <p className="font-sans">Une grosse semaine sportive attend nos joueurs avec un déplacement à Nantes ce mercredi 29 janvier pour la 22 ème journée puis après ce match nos joueurs accueillent Mont-Blanc à domicile pour la 23 ème journée ce samedi 1er février.</p>
        </div>
        
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {actus.map((actu) => (
            <CardActu key={actu.id} actu={actu} />
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center items-center gap-8">
            <Link href="/actualites" className="block w-fit bg-amber-500 hover:bg-amber-600 text-white py-3 px-6 text-2xl rounded-sm">
            Toutes les actualités
            </Link>

            <Link href="/" className="block w-fit bg-amber-400 hover:bg-amber-500 text-white py-3 px-6 text-2xl rounded-sm">
            Accueil
            </Link>
        </div>
      </main>
    );
}
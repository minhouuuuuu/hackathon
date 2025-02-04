import Image from "next/image"

const TeamHistory = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Notre Histoire</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                alt="Équipe de hockey historique"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">Des débuts modestes à la gloire</h3>
            <p className="mb-4">
              Fondée en 1975, notre équipe de hockey est née de la passion d'un groupe d'amis déterminés à créer quelque
              chose de spécial sur la glace. Commençant dans une petite patinoire locale, nous avons rapidement gagné en
              popularité grâce à notre esprit d'équipe et notre détermination.
            </p>
            <p className="mb-4">
              Au fil des années, nous avons gravi les échelons, passant des ligues amateurs aux compétitions
              professionnelles. Chaque victoire, chaque défaite nous a forgés, renforçant notre résolution à exceller
              dans ce sport que nous aimons tant.
            </p>
            <p className="mb-4">
              Aujourd'hui, notre équipe est reconnue comme l'une des meilleures du pays. Nous sommes fiers de notre
              parcours, de nos supporters fidèles, et de l'héritage que nous continuons à construire chaque jour sur la
              glace.
            </p>
            <p>
              Notre histoire est celle de la persévérance, du travail d'équipe et de la passion pour le hockey. C'est
              une histoire qui continue de s'écrire, match après match, saison après saison.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamHistory


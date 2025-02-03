import Link from "next/link";

export default function CardActu({actu}) {
  return (
    <Link key={actu.id} href={`/actualites/` + actu.link} className="bg-white hover:bg-amber-100 rounded-lg shadow-md h-fit overflow-hidden transition">
      <img className="bg-gray-400 w-full h-40" src={actu.img} alt="photo illustrant l'article" />

      <div className="justify-between p-6">
        <h3 className="text-black text-xl font-semibold mb-2">{actu.title}</h3>
        <p>{actu.resume}</p>

        <button className="mt-2 bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded-sm transition">
          Lire l'article
        </button>
      </div>
    </Link>
  )
}
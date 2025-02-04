import Link from "next/link";

const matches = [
    { id: 1, opponent: "Les Aigles de Glace", date: "2023-12-15", time: "20:00", price: 25 },
    { id: 2, opponent: "Les Ours Polaires", date: "2023-12-22", time: "19:30", price: 30 },
    { id: 3, opponent: "Les Pingouins Rapides", date: "2023-12-29", time: "20:00", price: 28 },
  ]

export default function User() {
  return (
    <main className="pt-28 pb-20 px-4 bg-white">
        <span className="block w-full text-center">L'Étoile Noire</span>
        <h1 className="text-amber-400 text-6xl font-bold text-center">Profil</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 container mx-auto'>
            <div className='sm:w-2/3'>
                <h2 className='text-3xl font-bold mt-12 mb-8'>Vos Informations</h2>

                <form className="flex-auto min-w-40">
                    <div className="mt-6 flex flex-col gap-2">
                        <label className="text-2xl">Prénom</label>
                        <input className="border border-black border-solid"/>
                    </div>
                    <div className="mt-6 flex flex-col gap-2">
                        <label className="text-2xl">Nom</label>
                        <input className="border border-black border-solid"/>
                    </div>
                    <div className="mt-6 flex flex-col gap-2">
                        <label className="text-2xl">Mot de Passe</label>
                        <input type='password' className="border border-black border-solid"/>
                    </div>

                    <button className='block w-fit mt-6 bg-black hover:opacity-75 text-white py-2 px-4 rounded-sm'>Se déconnecter</button>
                </form>
            </div>

            <div>
                <h2 className='text-3xl font-bold mt-12 mb-8'>Historique des billets achetés</h2>

                <div className="grid grid-cols-2 gap-6">
                {matches.map((match) => (
                    <div key={match.id} className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-black text-xl font-semibold mb-2">{match.opponent}</h3>
                    <p className="text-black mb-2">Date: {match.date}</p>
                    <p className="text-black mb-4">Heure: {match.time}</p>
                    <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold">{match.price}€</span>
                    </div>
                    </div>
                ))}
                </div>

                <Link href="#" className="block w-fit mt-6 bg-amber-500 hover:bg-amber-600 text-white py-3 px-6 text-2xl rounded-sm">
                    Acheter d'autres billets
                </Link>
            </div>
        </div>
    </main>
  );
}

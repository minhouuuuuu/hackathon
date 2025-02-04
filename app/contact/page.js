import Image from 'next/image'

export default function Contact() {
  return (
    <main className="pt-28 pb-20 px-4 bg-white">
        <span className="block w-full text-center">L'Étoile Noire</span>
        <h1 className="text-amber-400 text-6xl font-bold text-center">Contact</h1>

        <div className="mt-6 flex flex-wrap gap-y-8 gap-x-10 container mx-auto px-4">
            <form className="flex-auto min-w-60 w-1/3">
                <div className="flex flex-col gap-2">
                    <label className="text-2xl">Nom *</label>
                    <input className="border border-black border-solid" required/>
                </div>
                <div className="mt-6 flex flex-col gap-2">
                    <label className="text-2xl">Prénom *</label>
                    <input className="border border-black border-solid" required/>
                </div>
                <div className="mt-6 flex flex-col gap-2">
                    <label className="text-2xl">Email *</label>
                    <input className="border border-black border-solid" type="email" required/>
                </div>
                <div className="mt-6 flex flex-col gap-2">
                    <label className="text-2xl">Message *</label>
                    <textarea className="h-40 border border-black border-solid" required/>
                </div>
            </form>

            <div className="flex-auto min-w-60 w-1/3">
                <p className=" text-xl">L’Iceberg – Patinoire de Strasbourg</p>
                <p className="font-sans">
                    Rue Pierre Nuss
                    <br/>67200 Strasbourg
                </p>

                <p className="mt-6 text-xl">Accès à la patinoire :</p>

                <ul className="font-sans list-disc">
                    <li className="list-outside">En voiture depuis l’autoroute A4/A35, sortie "Cronenbourg", puis direction parking relais "Rotonde".</li>
                    <li className="list-outside">En transports en commun: tram A/D station "Rotonde" – 2 minutes de marche.</li>
                </ul>

                <Image className='w-full mt-6' src="/googlemap.png" alt="google map de la patinoire" width={600} height={600} />
            </div>
        </div>
    </main>
  );
}

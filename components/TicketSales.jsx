// Données factices pour les matchs
const matches = [
  { id: 1, opponent: "Les Aigles de Glace", date: "2023-12-15", time: "20:00", price: 25 },
  { id: 2, opponent: "Les Ours Polaires", date: "2023-12-22", time: "19:30", price: 30 },
  { id: 3, opponent: "Les Pingouins Rapides", date: "2023-12-29", time: "20:00", price: 28 },
]

const TicketSales = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 text-black">
        <h2 className="text-3xl font-bold text-center mb-8">Achetez vos billets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {matches.map((match) => (
            <div key={match.id} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-black text-xl font-semibold mb-2">{match.opponent}</h3>
              <p className="text-black mb-2">Date: {match.date}</p>
              <p className="text-black mb-4">Heure: {match.time}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold">{match.price}€</span>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                  Acheter
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TicketSales


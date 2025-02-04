const upcomingMatches = [
  { date: "2023-12-05", time: "20:00", homeTeam: "Notre Équipe", awayTeam: "Les Panthères" },
  { date: "2023-12-12", time: "19:30", homeTeam: "Les Requins", awayTeam: "Notre Équipe" },
  { date: "2023-12-19", time: "20:00", homeTeam: "Notre Équipe", awayTeam: "Les Faucons" },
  { date: "2023-12-26", time: "19:00", homeTeam: "Les Dragons", awayTeam: "Notre Équipe" },
]

const UpcomingMatches = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Prochains Matchs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {upcomingMatches.map((match, index) => (
            <div key={index} className="bg-gray-100 rounded-lg shadow-md p-6">
              <p className="text-gray-600 mb-2">{new Date(match.date).toLocaleDateString()}</p>
              <p className="text-gray-600 mb-4">{match.time}</p>
              <div className="flex flex-col items-center">
                <span className="font-semibold mb-2">{match.homeTeam}</span>
                <span className="text-2xl font-bold mb-2">VS</span>
                <span className="font-semibold">{match.awayTeam}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UpcomingMatches


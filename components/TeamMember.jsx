import Image from "next/image"

const TeamMember = ({ name, position, number, imageUrl }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-48 h-48 mb-4 overflow-hidden rounded-full">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 transform hover:scale-110"
        />
      </div>
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-gray-600">{position}</p>
      <p className="text-2xl font-bold mt-2">#{number}</p>
    </div>
  )
}

export default TeamMember


import Image from "next/image";

export default function OurTeamComponent() {
  type TeamMember = {
    name: string;
    nim: string;
    universitas: string;
    image: string;
  };

  const ourTeam: TeamMember[] = [
    {
      name: "Merin Ginting",
      nim: "22180064",
      universitas: "Universitas Respati Yogyakarta",
      image: "/assets/icons/profile.svg",
    },
    {
      name: "Andriani Christina Sulu",
      nim: "22180065",
      universitas: "Universitas Respati Yogyakarta",
      image: "/assets/icons/profile.svg",
    },
    {
      name: "Ninis Solihah",
      nim: "22180066",
      universitas: "Universitas Respati Yogyakarta",
      image: "/assets/icons/profile.svg",
    },
    {
      name: "Anggraheni Masyhuroh",
      nim: "22120091",
      universitas: "Universitas Respati Yogyakarta",
      image: "/assets/icons/profile.svg",
    },
    {
      name: "Ummul Khoiroh",
      nim: "22120092",
      universitas: "Universitas Respati Yogyakarta",
      image: "/assets/icons/profile.svg",
    },
    {
      name: "Novita Puput Wati",
      nim: "22120094",
      universitas: "Universitas Respati Yogyakarta",
      image: "/assets/icons/profile.svg",
    },
  ];
  return (
    <div className="mx-auto grid gap-6 md:grid-cols-2 ">
      {ourTeam.map((member) => (
        <div
          key={member.nim}
          className="flex items-center justify-center space-x-4"
        >
          <label htmlFor="profile-image" className="cursor-pointer">
            <Image
              className="h-36 w-36 rounded-full object-cover"
              src={member.image}
              alt={`Profile of ${member.name}`}
              width={500}
              height={500}
            />
          </label>
          <div>
            <h1>{member.name}</h1>
            <p>{member.nim}</p>
            <p>{member.universitas}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

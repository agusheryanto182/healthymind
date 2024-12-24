import Image from "next/image";

export default function OurTeamComponent() {
  type TeamMember = {
    name: string;
    nim: string;
    prodi: string;
    universitas: string;
    image: string;
  };

  const ourTeam: TeamMember[] = [
    {
      name: "Anggraheni Masyhuroh",
      nim: "22120091",
      prodi: "S-1 Gizi",
      universitas: "Universitas Respati Yogyakarta",
      image: "/assets/team/anggraheni.jpg",
    },
    {
      name: "Ummul Khoiroh",
      nim: "22120092",
      prodi: "S-1 Gizi",
      universitas: "Universitas Respati Yogyakarta",
      image: "/assets/team/ummul.jpg",
    },
    {
      name: "Novita Puput Wati",
      nim: "22120094",
      prodi: "S-1 Gizi",
      universitas: "Universitas Respati Yogyakarta",
      image: "/assets/team/novita.jpg",
    },
    {
      name: "Merin Ginting",
      nim: "22180064",
      prodi: "S-1 Kebidanan",
      universitas: "Universitas Respati Yogyakarta",
      image: "/assets/team/merin.jpg",
    },
    {
      name: "Andriani Christina Sulu",
      nim: "22180065",
      prodi: "S-1 Kebidanan",
      universitas: "Universitas Respati Yogyakarta",
      image: "/assets/team/andriani.jpg",
    },
    {
      name: "Ninis Solihah",
      nim: "22180066",
      prodi: "S-1 Kebidanan",
      universitas: "Universitas Respati Yogyakarta",
      image: "/assets/team/ninis.jpg",
    },
  ];
  return (
    <div className="mx-auto mb-8 mt-2 grid w-full max-w-screen-xl gap-6 px-4 md:grid-cols-2">
      {ourTeam.map((member) => (
        <div
          key={member.nim}
          className="flex items-center justify-center space-x-4"
        >
          <label htmlFor="profile-image" className="cursor-pointer">
            <Image
              className=" h-28 w-28 rounded-full object-cover object-top md:h-36 md:w-36"
              src={member.image}
              alt={`Profile of ${member.name}`}
              width={200}
              height={200}
            />
          </label>
          <div>
            <h1>{member.name}</h1>
            <p>{member.nim}</p>
            <p>{member.prodi}</p>
            <p>{member.universitas}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

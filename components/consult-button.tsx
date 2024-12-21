import { useState } from "react";

export default function ConsultButton({ data }: any) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const contacts = [
    {
      title: "Bapak Fx. Joko Krisdiyanto, S.Psi., M.Psi.",
      url: "https://wa.me/6282220006836?text=Selamat%20pagi/siang/sore%2C%20Bapak.%20Mohon%20maaf%20menganggu%20waktunya.%20Saya%20ingin%20bertanya%20terkait%20meal%20plan%20sesuai%20dengan%20kondisi%20kesehatan%20mental%20saya.%20Apakah%20saya%20bisa%20berkonsultasi%20lebih%20lanjut%20mengenai%20hal%20ini%3F%20Terima%20kasih%20sebelumnya.%0A%0ANama%20%3A%20%0ANim%20%20%20%20%20%20%20%3A%20%0AProdi%20%20%20%20%20%20%20%3A%20%0ASemester%20%3A%20",
    },
    {
      title: "Ibu Rini Indriyani, S.Psi, MARS, M.Psi, Psikolog.",
      url: "https://wa.me/6281326001174?text=Selamat%20pagi/siang/sore%2C%20Ibu.%20Mohon%20maaf%20menganggu%20waktunya.%20Saya%20ingin%20bertanya%20terkait%20meal%20plan%20sesuai%20dengan%20kondisi%20kesehatan%20mental%20saya.%20Apakah%20saya%20bisa%20berkonsultasi%20lebih%20lanjut%20mengenai%20hal%20ini%3F%20Terima%20kasih%20sebelumnya.%0A%0ANama%20%3A%20%0ANim%20%20%20%20%20%20%20%3A%20%0AProdi%20%20%20%20%20%20%20%3A%20%0ASemester%20%3A%20",
    },
  ];

  if (data) {
    for (let i = 0; i < data.length; i++) {
      contacts.push({
        title: data[i].title,
        url: data[i].url,
      });
    }
  }

  return (
    <div>
      {/* Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="rounded-lg border border-cyan-500 px-4 py-2 text-[--primary] hover:bg-[--hover] hover:text-white"
      >
        Konsultasi
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-3/4 max-w-lg rounded-lg bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-lg font-bold text-gray-800">
              Pilih Kontak
            </h2>
            <ul>
              {contacts.map((contact, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={contact.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full rounded-lg border border-cyan-500 bg-cyan-100 p-3 text-cyan-700 hover:bg-cyan-200"
                  >
                    {contact.title}
                  </a>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

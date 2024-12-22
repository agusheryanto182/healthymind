import BreadcrumbComponent from "@/components/breadcrumb";
import Image from "next/image";
import ConsultButton from "@/components/consult-button";

export default function Page() {
  return (
    <div className="min-h-screen">
      <BreadcrumbComponent title="Meal Plan" />
      <div className="mx-auto mb-8 flex max-w-3xl flex-col px-4 md:px-0">
        <h1 className="mb-4 px-4 text-center text-2xl font-bold md:px-0">
          Contoh Menu Sehari
        </h1>
        <div>
          <Image
            src="/assets/images/meal-plan.jpeg"
            alt="Meal Plan"
            width={800}
            height={800}
            className="mx-auto rounded-lg"
          />
        </div>

        {/* <table className="mt-16 min-w-full table-auto border-separate border border-gray-300">
          <thead>
            <tr className="bg-cyan-500">
              <th className="border border-gray-300 p-4 text-left text-white">
                Waktu
              </th>
              <th className="border border-gray-300 p-4 text-left text-white">
                Menu
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-cyan-50">
              <td className="border border-gray-300 p-4">Makan Pagi</td>
              <td className="border border-gray-300 p-4">
                <ul>
                  <li>Nasi</li>
                  <li>Telur mata sapi</li>
                  <li>Tumis bayam</li>
                </ul>
              </td>
            </tr>
            <tr className="bg-cyan-50">
              <td className="border border-gray-300 p-4">Cemilan</td>
              <td className="border border-gray-300 p-4">
                <ul>
                  <li>Yogurt</li>
                  <li>Kacang almond</li>
                </ul>
              </td>
            </tr>
            <tr className="bg-cyan-50">
              <td className="border border-gray-300 p-4">Makan Siang</td>
              <td className="border border-gray-300 p-4">
                <ul>
                  <li>Nasi</li>
                  <li>Ikan balanak panggang</li>
                  <li>Sup kacang merah</li>
                  <li>Sayur cap cay</li>
                  <li>Apel</li>
                </ul>
              </td>
            </tr>
            <tr className="bg-cyan-50">
              <td className="border border-gray-300 p-4">Cemilan</td>
              <td className="border border-gray-300 p-4">
                <ul>
                  <li>Bolu pandan</li>
                </ul>
              </td>
            </tr>
            <tr className="bg-cyan-50">
              <td className="border border-gray-300 p-4">Makan Malam</td>
              <td className="border border-gray-300 p-4">
                <ul>
                  <li>Sandwich tuna</li>
                  <li>Susu</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table> */}

        <table className="mt-16 min-w-full table-auto border-separate border border-gray-300">
          <thead>
            <tr className="bg-cyan-500">
              <th className="border border-gray-300 p-4 text-center text-white">
                Makan Pagi
              </th>
              <th className="border border-gray-300 p-4 text-center text-white">
                Cemilan
              </th>
              <th className="border border-gray-300 p-4 text-center text-white">
                Makan Siang
              </th>
              <th className="border border-gray-300 p-4 text-center text-white">
                Cemilan
              </th>
              <th className="border border-gray-300 p-4 text-center text-white">
                Makan Malam
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-cyan-50">
              <td className="border border-gray-300 p-4">
                <ul className="text-center">
                  <li>Nasi</li>
                  <li>Telur mata sapi</li>
                  <li>Tumis bayam</li>
                </ul>
              </td>
              <td className="border border-gray-300 p-4">
                <ul className="text-center">
                  <li>Yogurt</li>
                  <li>Kacang almond</li>
                </ul>
              </td>
              <td className="border border-gray-300 p-4">
                <ul className="text-center">
                  <li>Nasi</li>
                  <li>Ikan balanak panggang</li>
                  <li>Sup kacang merah</li>
                  <li>Sayur cap cay</li>
                  <li>Apel</li>
                </ul>
              </td>
              <td className="border border-gray-300 p-4">
                <ul className="text-center">
                  <li>Bolu pandan</li>
                </ul>
              </td>
              <td className="border border-gray-300 p-4">
                <ul className="text-center">
                  <li>Sandwich tuna</li>
                  <li>Susu</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="mt-16">
          <h2 className="mb-4 text-lg font-semibold">
            Bahan Makanan yang Bersifat Neurotransmitter:
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-separate border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-4 text-center">
                    Neurotransmitter
                  </th>
                  <th className="border border-gray-300 p-4 text-center">
                    Sumber Zat Gizi
                  </th>
                  <th className="border border-gray-300 p-4 text-center">
                    Sumber Pangan
                  </th>
                  <th className="border border-gray-300 p-4 text-center">
                    Metabolisme di Otak
                  </th>
                  <th className="border border-gray-300 p-4 text-center">
                    Efek Terhadap Mood
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-4">Serotonin</td>
                  <td className="border border-gray-300 p-4">
                    Triptofan, B6, B12, asam folat.
                  </td>
                  <td className="border border-gray-300 p-4">
                    Telur, daging, yogurt, pepaya, kacang dan biji-bijian,
                    gandum, keju.
                  </td>
                  <td className="border border-gray-300 p-4">
                    Meningkatkan asupan karbohidrat, menurun dengan asupan omega
                    3.
                  </td>
                  <td className="border border-gray-300 p-4">
                    Meningkatkan mood, toleransi rasa sakit, rasa kantuk,
                    menormalkan temperatur tubuh, menurunkan rasa agresif.
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-4">Dopamin</td>
                  <td className="border border-gray-300 p-4">
                    Fenilalanin diambah B12, asam folat.
                  </td>
                  <td className="border border-gray-300 p-4">
                    Bit, kacang kedelai, almond, daging, telur, gandum.
                  </td>
                  <td className="border border-gray-300 p-4">
                    Meningkatkan dengan asupan tinggi protein
                  </td>
                  <td className="border border-gray-300 p-4">
                    Meningkatkan toleransi, mood, kewaspadaan, kognitif,
                    pemecahan masalah.
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4">Norepinefrin</td>
                  <td className="border border-gray-300 p-4">Tirosin</td>
                  <td className="border border-gray-300 p-4">
                    Daging, susu, ikan dan kacang-kacangan.
                  </td>
                  <td className="border border-gray-300 p-4">
                    Meningkatkan dengan asupan tinggi protein
                  </td>
                  <td className="border border-gray-300 p-4">
                    Terlalu banyak akan berakibat; kecanduan, rasa takut,
                    depresi, kompulsi perubahan mood. Terlalu sedikit akan
                    berakibat paranoid, skizofrenia.
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-4">Histamin</td>
                  <td className="border border-gray-300 p-4">Histadin</td>
                  <td className="border border-gray-300 p-4">
                    Ikan, bayam, teh, tomat, keju, cokelat
                  </td>
                  <td className="border border-gray-300 p-4">
                    Menurun dengan pemberian vitamin C dan B6
                  </td>
                  <td className="border border-gray-300 p-4">
                    Membantu meningkatkan selera makan
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4">Asetilkolin</td>
                  <td className="border border-gray-300 p-4">Kolin</td>
                  <td className="border border-gray-300 p-4">
                    Hati, kacang kedelai, gandum, telur, jagung, kacang, lesitin
                    dan suplementasi kolin
                  </td>
                  <td className="border border-gray-300 p-4">
                    Meningkatkan dengan asupan lemak akan meningkatkan kolin di
                    otak
                  </td>
                  <td className="border border-gray-300 p-4">
                    Meningkatkan memori, pemecahan masalah, menurunkan
                    mania/manik
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td
                    colSpan={5}
                    className="border border-gray-300 p-4 text-center text-sm font-semibold italic"
                  >
                    Sumber: Somer, E. Food and Mood: The Complete Guide to
                    Eating Well and Feeling Your Best 2nd, New York, Henry Holt
                    & Co, 1999
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        {/* <a
          href="https://wa.me/6282226666571?text=Selamat%20pagi/siang/sore%2C%20Ibu.%20Mohon%20maaf%20menganggu%20waktunya.%20Saya%20ingin%20bertanya%20terkait%20meal%20plan%20sesuai%20dengan%20kondisi%20kesehatan%20mental%20saya.%20Apakah%20saya%20bisa%20berkonsultasi%20lebih%20lanjut%20mengenai%20hal%20ini%3F%20Terima%20kasih%20sebelumnya.%0A%0ANama%20%3A%20%0ANim%20%20%20%20%20%20%20%3A%20%0AProdi%20%20%20%20%20%20%20%3A%20%0ASemester%20%3A%20"
          target="_blank"
          className="flex items-center justify-center"
        >
          <button className="mt-8 rounded-lg border border-cyan-500 px-4 py-2 text-[--primary]  hover:bg-[--hover] hover:text-white ">
            Konsultasi
          </button>
        </a> */}

        <div className="mt-4 flex items-center justify-center">
          <ConsultButton
            data={[
              {
                title: "Ibu Inayah, S.Gz., M.Si., RD.",
                url: "https://wa.me/6282226666571?text=Selamat%20pagi/siang/sore%2C%20Ibu.%20Mohon%20maaf%20menganggu%20waktunya.%20Saya%20ingin%20bertanya%20terkait%20meal%20plan%20sesuai%20dengan%20kondisi%20kesehatan%20mental%20saya.%20Apakah%20saya%20bisa%20berkonsultasi%20lebih%20lanjut%20mengenai%20hal%20ini%3F%20Terima%20kasih%20sebelumnya.%0A%0ANama%20%3A%20%0ANim%20%20%20%20%20%20%20%3A%20%0AProdi%20%20%20%20%20%20%20%3A%20%0ASemester%20%3A%20",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

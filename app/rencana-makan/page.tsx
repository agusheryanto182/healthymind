import BreadcrumbComponent from "@/components/breadcrumb";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen">
      <BreadcrumbComponent title="Meal Plan" />
      <div className="mx-auto mb-8 flex max-w-3xl flex-col px-4 md:px-0">
        <h1 className="mb-4 px-4 text-center text-2xl font-bold md:px-0">
          Meal Plan
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
        <p className="mb-6 mt-4">
          Rencana makan yang seimbang dapat membantu meningkatkan kesehatan
          mental Anda. Berikut adalah contoh rencana makan harian yang mendukung
          suasana hati dan fungsi otak:
        </p>
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold">Sarapan</h2>
            <ul className="list-disc pl-6">
              <li>Oatmeal dengan potongan buah segar (pisang, beri-berian).</li>
              <li>
                Kacang-kacangan seperti almond atau kenari untuk asupan omega-3.
              </li>
              <li>Teh hijau atau air putih hangat untuk mengawali hari.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Makan Siang</h2>
            <ul className="list-disc pl-6">
              <li>
                Salad dengan campuran sayuran hijau (bayam, kale) dan protein
                (ayam panggang, tahu, atau tempe).
              </li>
              <li>
                Quinoa atau nasi merah sebagai sumber karbohidrat kompleks.
              </li>
              <li>
                Minyak zaitun sebagai dressing untuk menambah lemak sehat.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Camilan Sore</h2>
            <ul className="list-disc pl-6">
              <li>Buah segar seperti apel atau jeruk.</li>
              <li>Yogurt rendah gula dengan taburan biji chia atau granola.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Makan Malam</h2>
            <ul className="list-disc pl-6">
              <li>
                Ikan salmon panggang atau sumber protein lain kaya omega-3.
              </li>
              <li>Sayuran kukus (brokoli, wortel, atau buncis).</li>
              <li>Ubi jalar sebagai sumber karbohidrat sehat.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Minuman Malam</h2>
            <ul className="list-disc pl-6">
              <li>Susu hangat atau teh chamomile untuk membantu relaksasi.</li>
            </ul>
          </div>
        </div>
        <p className="mt-6">
          Pola makan yang teratur, kaya nutrisi, dan rendah gula dapat membantu
          mengelola stres, meningkatkan suasana hati, dan mendukung kesehatan
          mental secara keseluruhan.
        </p>

        <button className="mt-8 rounded-lg border border-cyan-500 px-4 py-2 text-[--primary]  hover:bg-[--hover] hover:text-white ">
          Konsultasi
        </button>
      </div>
    </div>
  );
}

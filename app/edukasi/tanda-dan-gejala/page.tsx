import Image from "next/image";
import BreadcrumbComponent from "@/components/breadcrumb";

export default function Page() {
  return (
    <div>
      <BreadcrumbComponent title="Tanda dan Gejala" />
      <div className="mx-auto flex max-w-3xl flex-col">
        <h1 className="mb-4 px-4 text-center text-2xl font-bold md:px-0">
          Tanda dan Gejala
        </h1>
        <div className="px-4 md:px-0">
          <Image
            src="/assets/images/educations.jpeg"
            alt="Edukasi Kesehatan Mental"
            width={800}
            height={800}
            className="mx-auto rounded-lg"
          />
        </div>

        <div className="my-6 px-4 md:px-0">
          <section className="mb-6">
            <h2 className="mb-2 text-lg font-semibold">Tanda dan Gejala</h2>
            <p>
              Menurut Savitrie (2022), berikut adalah beberapa gejala atau tanda
              gangguan mental yang mungkin terjadi adalah:
            </p>
            <ol className="mb-4 list-decimal pl-6">
              <li>
                <strong>
                  Perubahan Perilaku <br />
                </strong>
                Seseorang yang sebelumnya tidak sering bertengkar atau kasar
                mungkin mulai menunjukkan perilaku agresif, berkata kasar, atau
                menyakitkan orang lain. Selain itu, mungkin terlihat lebih mudah
                marah dan merasa frustrasi.
              </li>
              <li>
                <strong>
                  Perubahan Mood <br />
                </strong>
                Gangguan mental juga dapat ditandai dengan perubahan suasana
                hati (mood) yang terjadi secara tiba-tiba. Perubahan mood ini
                umumnya dikaitkan dengan depresi, ADHD, atau gangguan bipolar.
              </li>
              <li>
                <strong>
                  Kesulitan Berkonsentrasi <br />
                </strong>
                Seseorang dengan gangguan mental sering kesulitan fokus atau
                memperhatikan dalam waktu lama. Mereka juga mungkin sulit duduk
                diam atau membaca.
              </li>
              <li>
                <strong>
                  Penurunan Berat Badan <br />
                </strong>
                Penurunan berat badan mungkin terjadi akibat gangguan makan,
                stres, atau depresi, yang menyebabkan kehilangan nafsu makan,
                mual, atau muntah secara terus-menerus.
              </li>
              <li>
                <strong>
                  Menyakiti Diri Sendiri <br />
                </strong>
                Seseorang yang mengalami kekhawatiran atau rasa takut berlebihan
                mungkin menunjukkan keinginan untuk menyakiti diri sendiri.
                Kondisi ini sering kali muncul sebagai akumulasi dari perasaan
                stres atau menyalahkan diri sendiri. Gejala ini memerlukan
                perhatian serius karena dapat berujung pada percobaan bunuh
                diri.
              </li>
              <li>
                <strong>
                  Masalah Kesehatan Fisik <br />
                </strong>
                Orang yang mengalami gangguan mental mungkin sering mengeluhkan
                sakit kepala atau sakit perut yang berlangsung terus-menerus
                tanpa penyebab yang jelas.
              </li>
              <li>
                <strong>
                  Perasaan yang Intens <br />
                </strong>
                Beberapa mungkin mengalami perasaan takut yang berlebihan tanpa
                alasan yang jelas. Hal ini dapat terlihat dari perilaku seperti
                menangis, berteriak, atau mual yang disertai perasaan intens.
                Gejala ini juga dapat memengaruhi fungsi tubuh, seperti
                kesulitan bernapas, jantung berdebar kencang, atau napas yang
                cepat, sehingga mengganggu aktivitas sehari-hari.
              </li>
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import BreadcrumbComponent from "@/components/breadcrumb";

export default function Page() {
  return (
    <div>
      <BreadcrumbComponent title="Faktor Penyebab" />
      <div className="mx-auto flex max-w-3xl flex-col">
        <h1 className="mb-4 px-4 text-center text-2xl font-bold md:px-0">
          Faktor dan Penyebab
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
            <h2 className="mb-2 text-lg font-semibold">Faktor Penyebab</h2>
            <p>
              Menurut Daradjat yang dikutip oleh Mafud (2014), terdapat dua
              faktor penyebab utama yang memengaruhi kesehatan mental, yaitu
              faktor internal dan eksternal.
            </p>
            <ol
              type="a"
              className="list-inside list-decimal pl-6"
              style={{ listStyle: "lower-alpha" }}
            >
              <li>
                <strong>
                  Faktor internal <br />
                </strong>{" "}
                Aspek-aspek seperti kepribadian, kondisi fisik, perkembangan dan
                kematangan, kondisi psikologis, keberagamaan, cara menghadapi
                masalah hidup, makna hidup, serta keseimbangan dalam berpikir.
              </li>
              <li>
                <strong>
                  Faktor eksternal <br />
                </strong>{" "}
                Aspek sosial, ekonomi, politik, adat istiadat, lingkungan, dan
                lain sebagainya. Gangguan mental berdampak negatif pada
                mahasiswa, termasuk dalam aspek akademis, sosial, emosional,
                kesehatan fisik, kelanjutan pendidikan, dan pengelolaan waktu.
              </li>
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
}

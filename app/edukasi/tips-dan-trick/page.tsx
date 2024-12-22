import Image from "next/image";
import BreadcrumbComponent from "@/components/breadcrumb";

export default function Page() {
  return (
    <div>
      <BreadcrumbComponent title="Tips dan Trick" />
      <div className="mx-auto flex max-w-3xl flex-col">
        <h1 className="mb-4 px-4 text-center text-2xl font-bold md:px-0">
          Tips dan Trick
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

        <div className="my-6 px-4 text-justify md:px-0">
          <section className="mb-6">
            <h2 className="mb-2 text-lg font-semibold">Tips dan Trick</h2>
            <p>
              Psikolog pada Career and Student Development Unit (CSDU) Fakultas
              Ekonomika dan Bisnis (FEB) UGM, Atikah Dian Rahmawati, M.Psi.,
              Psikolog., menyebutkan cara atau tips dan trik untuk menjaga
              kesehatan mental mahasiswa.
            </p>
            <ol className="mb-4 list-decimal pl-6">
              <li>
                Melakukan kegiatan yang sesuai kemampuan dan minat serta
                mengembangkan hobi.
              </li>
              <li>
                Menjaga kebugaran tubuh dengan melakukan olahraga, tidur yang
                cukup, serta makan makanan bergizi dan teratur.
              </li>
              <li>
                Mengenali perasaan diri sendiri dan mengekspresikan dengan cara
                yang tepat.
              </li>
              <li>
                Bicarakan perasaan dan keluhan yang dirasakan dengan seseorang
                yang dapat dipercaya.
              </li>
              <li>
                Bersosialisasi dan menjalin relasi dengan mengikuti kegiatan
                sosial, seperti UKM, BEM, Volunteer.
              </li>
              <li>
                Kelilingi diri dengan orang-orang yang mendukung. Berada di
                lingkaran pergaulan yang mendukung akan membawa energi positif
                pada diri sehingga berpengaruh pada kondisi mental.
              </li>
              <li>
                Prioritaskan diri sendiri dan selalu memiliki pikiran bahwa diri
                kita berharga.
              </li>
              <li>Luangkan waktu me-time agar lebih rileks.</li>
              <li>
                Mengatur waktu dengan baik. Buatlah jadwal yang terorganisir,
                termasuk waktu untuk belajar, tidur, dan bersosialisasi. Hindari
                melakukan kegiatan yang dapat meningkatkan stres dan mengganggu
                kesehatan mental.
              </li>
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
}

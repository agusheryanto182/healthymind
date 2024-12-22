import Image from "next/image";
export default function NewsComponent() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col">
      {/* <h1 className="mb-4 px-4 text-center text-2xl font-bold md:px-0">
        Pentingnya Kesadaran Akan Kesehatan Mental di Era Modern
      </h1> */}
      <div className="px-4 md:px-0">
        <Image
          src="/assets/images/news-1.jpg"
          alt="news"
          width={800}
          height={800}
          className="mx-auto rounded-lg"
        />
      </div>
      <div className="my-6 px-4 md:px-0">
        <p className="mb-4 text-justify">
          Hasil Asia Care Survey 2024 menunjukkan bahwa masyarakat Indonesia
          memiliki kekhawatiran terhadap gangguan mental, dengan stres dan
          burnout menempati urutan pertama. Diikuti oleh gangguan tidur,
          kecemasan, dan gangguan kognitif. WHO menegaskan bahwa kesehatan
          mental sama pentingnya dengan kesehatan fisik. Gangguan mental yang
          tidak ditangani dapat membawa dampak serius, seperti gangguan fisik,
          penurunan produktivitas, serta hilangnya interaksi sosial.
        </p>
        <h2 className="mb-2 text-xl font-semibold">
          Definisi Kesehatan Mental
        </h2>
        <p className="mb-4 text-justify">
          Menurut Organisasi Kesehatan Dunia (WHO), kesehatan mental adalah
          kondisi optimal di mana individu sadar akan kemampuan diri mereka,
          dapat mengelola stres dengan efektif, mempertahankan pekerjaan yang
          produktif, dan berkontribusi pada komunitas (Pan American Health
          Organization, 2000). Kesehatan mental yang baik memungkinkan seseorang
          menikmati kehidupan dengan perasaan bahagia dan produktif. Sebaliknya,
          gangguan mental mengarah pada perasaan putus asa, penurunan kinerja,
          dan kesulitan dalam mengendalikan emosi.
        </p>
        <h2 className="mb-2 text-xl font-semibold">
          Gangguan Kesehatan Mental di Indonesia
        </h2>
        <p className="mb-4 text-justify">
          Di Indonesia, lebih dari 100 juta orang diperkirakan hidup dengan
          gangguan kesehatan mental, yang mencakup berbagai jenis dan tingkat
          keparahan gangguan (Ditjen P2P, 2020). Hal ini menunjukkan bahwa
          gangguan mental menjadi masalah yang cukup besar di masyarakat dan
          memerlukan perhatian serius.
        </p>
        <h2 className="mb-2 text-xl font-semibold">
          Kasus Bunuh Diri di Kalangan Mahasiswa
        </h2>
        <p className="mb-4 text-justify">
          Kasus bunuh diri di kalangan mahasiswa semakin meningkat dan menjadi
          sorotan. Menurut data dari Asosiasi Pencegahan Bunuh Diri Indonesia
          (INASP), terdapat 670 kasus bunuh diri yang tercatat oleh kepolisian.
          Tekanan yang dihadapi mahasiswa, baik dari faktor sosial, keluarga,
          pertemanan, akademik, hingga suasana kampus, menjadi salah satu
          penyebab utama gangguan mental yang mereka alami.
        </p>
        <h2 className="mb-2 text-xl font-semibold">
          Masalah Kesehatan Mental di Kalangan Mahasiswa
        </h2>
        <p className="mb-4 text-justify">
          Mahasiswa, sebagai kelompok usia yang cenderung belum memiliki
          kemampuan penuh dalam mengendalikan emosi, sering kali mengabaikan
          pentingnya kesehatan mental. Gangguan mental yang dialami dapat
          memengaruhi suasana hati, mengurangikemampuan berpikir, dan
          menyebabkan kesulitan dalam mengelola emosi, yang pada akhirnya
          memengaruhi produktivitas dan kualitas hidup mereka.
        </p>
        <h2 className="mb-2 text-xl font-semibold">Rekomendasi</h2>
        <p className="text-justify">
          Kesehatan mental sangat penting untuk kesejahteraan individu, terutama
          bagi mahasiswa yang rentan terhadap berbagai tekanan. Oleh karena itu,
          penting untuk:
        </p>
        <ol
          type="a"
          className="list-inside list-decimal pl-6 text-justify"
          style={{ listStyle: "lower-alpha" }}
        >
          <li>
            Meningkatkan kesadaran tentang kesehatan mental di kalangan
            mahasiswa melalui edukasi dan penyuluhan.
          </li>
          <li>
            Memberikan dukungan psikologis seperti layanan konseling untuk
            membantu mahasiswa mengelola stres dan gangguan mental.
          </li>
          <li>
            Mengurangi stigma terhadap kesehatan mental agar mahasiswa lebih
            terbuka untuk mencari bantuan.
          </li>
          <li>
            Menyediakan intervensi dini guna mencegah dampak buruk dari gangguan
            mental, seperti bunuh diri.
          </li>
        </ol>
      </div>
    </div>
  );
}

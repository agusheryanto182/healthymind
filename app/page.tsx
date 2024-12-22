import CarouselComponent from "@/components/carousel";
import FooterComponent from "@/components/ui/footer";
import { InfoCard } from "@/components/info-card";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="text-black">
        <h1 className="mt-4 text-center text-4xl font-bold text-cyan-900 md:mt-0">
          HealthyMind Respati
        </h1>
        <p className="mt-2 text-center">
          Selamat Datang di HealthyMind Respati
        </p>
      </header>

      <main className="flex-grow space-y-8 p-4">
        <section>
          {/* <h2 className="text-2xl font-semibold">Jelajahi Fitur Kami</h2> */}
          <CarouselComponent />
        </section>

        <div className="space-y-4  rounded-lg bg-cyan-500 bg-opacity-30 p-4">
          <section className="text-justify">
            <h2 className="mb-2 text-center text-2xl font-semibold">
              Latar Belakang{" "}
            </h2>
            <p>
              Pada era modern saat ini, pemicu stres dalam hidup dapat
              menyebabkan masalah kesehatan mental. Masalah kesehatan mental
              dapat terjadi oleh semua orang atau umum. Namun, gangguan
              kesehatan mental yang saat ini sering terjadi yaitu pada kelompok
              mahasiswa.
            </p>
            <p>
              Kesehatan mental seorang mahasiswa dapat dipengaruhi oleh berbagai
              faktor, seperti genetik, persahabatan, keluarga, lingkungan
              sosial, gaya hidup, dan lain-lain (Rochimah, 2020). Oleh sebab
              itulah, apabila suatu mahasiswa mengalami masalah hidup yang
              ekstrim, akan dapat menimbulkan risiko tinggi gangguan kesehatan
              mental.
            </p>
            <p>
              Menanggapi situasi ini, kami membuat sebuah platform website
              “HealthyMind Respati.” yang bertujuan untuk meningkatkan kesadaran
              dan menyediakan informasi yang mudah diakses tentang kesehatan
              mental menjadi hal yang penting.
            </p>
          </section>
        </div>

        <div className="space-y-4  rounded-lg bg-cyan-500 bg-opacity-30 p-4">
          <section className="text-justify">
            <h2 className="mb-2 text-center text-2xl font-semibold">
              {" "}
              Prevalensi{" "}
            </h2>
            <p>
              Pada tahun 2021, sekitar 20% remaja dan mahasiswa Indonesia
              mengalami masalah kesehatan mental seperti kecemasan, depresi, dan
              stres berlebihan, menurut Kementerian Kesehatan Republik
              Indonesia. Bahkan, angka pravelensi orang dengan gangguan mental
              (depresi dan kecemasan) di Indonesia meningkat dari 6,0 menjadi
              9,8 per 1.000 orang berusia 15 tahun ke atas (Antari & Widyawati,
              2021).
            </p>
          </section>
        </div>

        {/* <section className="text-center">
          <h3 className="text-xl font-semibold">
            Siap memulai perjalanan menuju kesehatan mental yang lebih baik?
          </h3>
          <Button className="mt-4 rounded-full bg-[--primary] px-6 py-3 text-white hover:bg-[--hover]">
            Mulai Sekarang
          </Button>
        </section> */}

        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <InfoCard
            title="Mental Health Detector"
            description="Lakukan penilaian kesehatan mental dengan cepat dan dapatkan umpan balik segera berdasarkan penelitian psikologi terbaru."
            icon="🧠"
          />
          <InfoCard
            title="Mood Tracker"
            description="Pantau perasaan Anda setiap hari dengan mood tracker, dan lacak perubahan suasana hati Anda sepanjang waktu."
            icon="📅"
          />
          <InfoCard
            title="Konsultasi"
            description="Dapatkan saran dan dukungan dari profesional untuk membantu Anda mengelola kesehatan mental Anda."
            icon="💬"
          />
          <InfoCard
            title="Hasil Laporan"
            description="Dapatkan laporan lengkap tentang kesehatan mental Anda berdasarkan penilaian dan konsultasi."
            icon="📊"
          />
        </section>
      </main>

      <FooterComponent />
    </div>
  );
}

import Image from "next/image";
import BreadcrumbComponent from "@/components/breadcrumb";

export default function Page() {
  return (
    <div>
      <BreadcrumbComponent title="Kesehatan Mental" />
      <div className="mx-auto flex max-w-3xl flex-col">
        <h1 className="mb-4 px-4 text-center text-2xl font-bold md:px-0">
          Kesehatan Mental
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
            <h2 className="mb-2 text-lg font-semibold">
              Pengertian Kesehatan Mental
            </h2>
            <p className="text-justify">
              Kesehatan mental mengacu pada cara seseorang berpikir,
              berperasaan, dan bertindak secara efektif saat menghadapi
              tantangan dan stres hidup. Kesehatan mental adalah keadaan
              psikologis atau kejiwaan yang menunjukkan kemampuan seseorang
              untuk menyesuaikan diri atau memecahkan masalah terhadap masalah
              yang ada di dalam dirinya (internal) dan di luar dirinya
              (eksternal) (Hanurawan, 2012).
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

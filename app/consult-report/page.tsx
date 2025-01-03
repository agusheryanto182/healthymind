import BreadcrumbComponent from "@/components/breadcrumb";
import ConsultReport from "@/components/consult-report";

export default function Page() {
  return (
    <div className="mb-8 flex flex-1 flex-col gap-4 pt-0">
      <BreadcrumbComponent title="Laporan Konsultasi" />
      <ConsultReport />
    </div>
  );
}

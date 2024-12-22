import BreadcrumbComponent from "@/components/breadcrumb";
import ReportComponent from "@/components/report";

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-4 pt-0">
      <BreadcrumbComponent title="Laporan" />
      <ReportComponent />
    </div>
  );
}

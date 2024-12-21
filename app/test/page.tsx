import TestComponent from "@/components/test";
import BreadcrumbComponent from "@/components/breadcrumb";

export default function Page() {
  return (
    <div>
      <BreadcrumbComponent title="Tes Sekarang" />
      <TestComponent />
    </div>
  );
}

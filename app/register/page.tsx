import { RegisterComponent } from "@/components/register";
import BreadcrumbComponent from "@/components/breadcrumb";

export default function Page() {
  return (
    <div className="mx-auto h-screen  w-full p-4 md:p-0">
      <BreadcrumbComponent title="Pendaftaran" />
      <RegisterComponent />
    </div>
  );
}

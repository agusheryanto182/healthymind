import { ProfileComponent } from "@/components/profile";
import BreadcrumbComponent from "@/components/breadcrumb";

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <BreadcrumbComponent title="Data Diri" />
      <ProfileComponent />
    </div>
  );
}

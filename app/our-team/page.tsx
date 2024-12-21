import OurTeamComponent from "@/components/our-team";
import BreadcrumbComponent from "@/components/breadcrumb";
export default function Page() {
  return (
    <div>
      <BreadcrumbComponent title="Tim Kami" />
      <OurTeamComponent />
    </div>
  );
}

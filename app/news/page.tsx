import NewsComponent from "@/components/news";
import BreadcrumbComponent from "@/components/breadcrumb";

export default function Page() {
  return (
    <div>
      <BreadcrumbComponent title="Berita" />
      <NewsComponent />
    </div>
  );
}

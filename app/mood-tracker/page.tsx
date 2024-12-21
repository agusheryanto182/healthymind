import BreadcrumbComponent from "@/components/breadcrumb";
import MoodTrackerComponent from "@/components/mood-tracker";

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <BreadcrumbComponent title="Mood Tracker" />
      <MoodTrackerComponent />
    </div>
  );
}

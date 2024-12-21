import ChatRoomComponent from "@/components/chat-room";
import BreadcrumbComponent from "@/components/breadcrumb";

export default function Page() {
  return (
    <div>
      <BreadcrumbComponent title="Konsultasi" />
      <div className="mx-auto h-screen w-full max-w-3xl">
        <ChatRoomComponent />
      </div>
    </div>
  );
}

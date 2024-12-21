import Image from "next/image";
import ChatInputComponent from "./chat-input";
import ChatMessagesComponent from "./chat-messages";

export default function ChatRoomComponent() {
  const currentUser = "John";
  const messages = [
    { sender: "John", text: "Hey there!", timestamp: "10:00 AM" },
    { sender: "Alice", text: "Hello!", timestamp: "10:05 AM" },
    { sender: "John", text: "How are you?", timestamp: "10:10 AM" },
    { sender: "John", text: "How are you?", timestamp: "10:10 AM" },
    { sender: "John", text: "How are you?", timestamp: "10:10 AM" },
    // Add more messages here
  ];

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center bg-[--primary] px-4">
        <Image
          src="/assets/icons/profile.svg"
          alt="Profile"
          width={36}
          height={36}
          style={{ borderRadius: "50%", backgroundColor: "white" }}
        />
        <h1 className="p-4 text-lg font-semibold text-white">Alice</h1>
      </div>
      <div className="flex-grow">
        <ChatMessagesComponent messages={messages} currentUser={currentUser} />
      </div>
      <ChatInputComponent className="sticky bottom-0 z-10" />
    </div>
  );
}

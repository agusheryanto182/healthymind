// ChatMessagesComponent.tsx
import ChatMessage from "./chat-message";

export default function ChatMessagesComponent({
  messages,
  currentUser,
}: {
  messages: { sender: string; text: string; timestamp: string }[];
  currentUser: string;
}) {
  return (
    <div className="flex-grow space-y-4 overflow-y-auto p-4">
      {messages.map((message, index) => (
        <ChatMessage
          key={index}
          sender={message.sender}
          text={message.text}
          timestamp={message.timestamp}
          isSender={message.sender === currentUser} // Determine if the message is from the current user
        />
      ))}
    </div>
  );
}

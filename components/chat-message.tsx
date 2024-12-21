// ChatMessage.tsx
export default function ChatMessage({
  sender,
  text,
  timestamp,
  isSender,
}: {
  sender: string;
  text: string;
  timestamp: string;
  isSender: boolean;
}) {
  return (
    <div
      className={`flex ${isSender ? "justify-end" : "justify-start"} space-x-3`}
    >
      <div
        className={`flex flex-col ${isSender ? "items-end" : "items-start"}`}
      >
        <span className="text-sm font-semibold">{sender}</span>
        <p
          className={`rounded-lg p-2 text-base ${
            isSender ? "bg-cyan-500 text-white" : "bg-gray-200"
          }`}
        >
          {text}
        </p>
        <span className="text-xs text-gray-500">{timestamp}</span>
      </div>
    </div>
  );
}

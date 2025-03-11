import { useState, useRef, useEffect } from "react";
import { Send, User, ArrowLeft } from "lucide-react";

export default function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Olá! Como posso ajudar?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const sendMessage = () => {
    if (input.trim() === "") return;

    const newMessage = { id: messages.length + 1, text: input, sender: "user" };
    setMessages([...messages, newMessage]);
    setInput("");
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-screen bg-white p-6">
      <div className="flex items-center justify-between mb-4">
        <button
          className="flex items-center gap-2 text-gray-500 hover:text-black transition"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="size-5" /> Voltar
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6 bg-white rounded-xl shadow-lg border border-gray-300">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-center gap-3 mb-4 ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.sender === "bot" && (
              <div className="flex items-center justify-center w-10 h-10 bg-gray-300 rounded-full">
                <User className="size-6 text-gray-600" />
              </div>
            )}
            <p
              className={`px-5 py-3 rounded-2xl text-white text-lg shadow-md max-w-xs ${
                msg.sender === "user" ? "bg-yellow-500" : "bg-gray-600"
              }`}
            >
              {msg.text}
            </p>
            {msg.sender === "user" && (
              <div className="flex items-center justify-center w-10 h-10 bg-yellow-500 rounded-full">
                <User className="size-6 text-white" />
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="flex items-center p-4 bg-white rounded-xl shadow-lg mt-6 border border-gray-300">
        <input
          type="text"
          className="flex-1 p-3 border border-gray-300 bg-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-500 text-lg"
          placeholder="Digite sua mensagem..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          className="ml-3 p-4 bg-yellow-500 text-white rounded-xl hover:bg-yellow-400 transition shadow-md"
          onClick={sendMessage}
        >
          <Send className="size-6" />
        </button>
      </div>
    </div>
  );
}
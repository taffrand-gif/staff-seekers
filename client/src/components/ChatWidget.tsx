import { useState, useEffect, useRef } from "react";
import { trpc } from "@/lib/trpc";
import { ACTIVE_CONFIG } from "../../../shared/serviceConfig";

interface Message {
  id: string;
  text: string;
  sender: "user" | "owner";
  timestamp: Date;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [userName, setUserName] = useState("");
  const [showNameInput, setShowNameInput] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const config = ACTIVE_CONFIG;

  const sendMessage = trpc.chat.sendMessage.useMutation({
    onSuccess: (data: { success: boolean }) => {
      if (data.success) {
        // Message envoyé avec succès
        const newMessage: Message = {
          id: Date.now().toString(),
          text: inputText,
          sender: "user",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, newMessage]);
        setInputText("");
        
        // Message automatique de confirmation
        setTimeout(() => {
          const autoReply: Message = {
            id: (Date.now() + 1).toString(),
            text: "Obrigado pela sua mensagem! Entraremos em contacto consigo em breve.",
            sender: "owner",
            timestamp: new Date(),
          };
          setMessages((prev) => [...prev, autoReply]);
        }, 1000);
      }
    },
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Message de bienvenue
      const welcomeMessage: Message = {
        id: "welcome",
        text: `Olá! Bem-vindo ao ${config.businessName}. Como podemos ajudá-lo hoje?`,
        sender: "owner",
        timestamp: new Date(),
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen]);

  const handleStartChat = () => {
    if (userName.trim()) {
      setShowNameInput(false);
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim()) {
      sendMessage.mutate({
        name: userName,
        message: inputText,
      });
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(e);
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 z-[9999]"
          aria-label="Abrir chat"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-lg shadow-2xl flex flex-col z-[9999] border border-gray-200">
          {/* Header */}
          <div className="bg-red-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-red-600 font-bold">
                {config.businessName.charAt(0)}
              </div>
              <div>
                <h3 className="font-bold">{config.businessName}</h3>
                <p className="text-xs text-red-100">Normalmente responde em minutos</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-red-200 transition-colors"
              aria-label="Fechar chat"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Name Input */}
          {showNameInput && (
            <div className="flex-1 flex flex-col items-center justify-center p-6 bg-gray-50">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white text-2xl mb-4">
                👋
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Bem-vindo!</h3>
              <p className="text-gray-600 text-center mb-6">
                Como se chama? Assim podemos personalizar a conversa.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleStartChat();
                }}
                className="w-full"
              >
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="O seu nome"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent mb-4"
                  autoFocus
                />
                <button
                  type="submit"
                  disabled={!userName.trim()}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Iniciar Conversa
                </button>
              </form>
            </div>
          )}

          {/* Messages */}
          {!showNameInput && (
            <>
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.sender === "user"
                          ? "bg-red-600 text-white"
                          : "bg-white text-gray-900 border border-gray-200"
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p
                        className={`text-xs mt-1 ${
                          message.sender === "user" ? "text-red-100" : "text-gray-500"
                        }`}
                      >
                        {new Date(message.timestamp).toLocaleTimeString("pt-PT", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-gray-200">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Escreva a sua mensagem..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    disabled={!inputText.trim() || sendMessage.isPending}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {sendMessage.isPending ? (
                      <svg
                        className="animate-spin h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      )}
    </>
  );
}

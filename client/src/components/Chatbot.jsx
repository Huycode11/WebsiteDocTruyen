import { useState } from "react";

export default function Chatbot({ onBack }) {
  const [messages, setMessages] = useState([
    { text: "Xin chào! Tôi là chatbot của WebsiteDocTruyen. Bạn cần giúp gì?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
      // Mock response
      setTimeout(() => {
        setMessages(prev => [...prev, { text: "Cảm ơn bạn đã hỏi! Tôi sẽ trả lời sau.", sender: "bot" }]);
      }, 1000);
    }
  };

  return (
    <div style={{ backgroundColor: "#131928", minHeight: "100vh", color: "white", padding: "20px" }}>
      <button onClick={onBack} style={{ backgroundColor: "#b3a1ff", color: "white", border: "none", padding: "10px", borderRadius: "5px", cursor: "pointer" }}>
        Quay lại
      </button>
      <h1>Chatbot</h1>
      <div style={{ border: "1px solid #b3a1ff", height: "400px", overflowY: "scroll", padding: "10px", marginBottom: "10px" }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ textAlign: msg.sender === "user" ? "right" : "left", margin: "10px 0" }}>
            <span style={{ backgroundColor: msg.sender === "user" ? "#b3a1ff" : "#333", padding: "5px 10px", borderRadius: "10px" }}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
          style={{ width: "80%", padding: "10px", marginRight: "10px" }}
          placeholder="Nhập tin nhắn..."
        />
        <button onClick={sendMessage} style={{ backgroundColor: "#b3a1ff", color: "white", border: "none", padding: "10px", borderRadius: "5px", cursor: "pointer" }}>
          Gửi
        </button>
      </div>
    </div>
  );
}
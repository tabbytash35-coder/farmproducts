// FarmChatbot.jsx
// Recommended Placement:
// Place this component in App.js or your website layout
// It appears as a floating chatbot in the bottom-right corner

import React, { useState } from "react";

const FarmChatbot = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Welcome to Prido Farm Products 🌿 How can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");

  // BOT RESPONSE LOGIC
  const getBotReply = (message) => {
    const msg = message.toLowerCase();

    if (msg.includes("produce")) {
      return "🥕 Today's fresh produce includes tomatoes, spinach, carrots, onions, and potatoes.";
    }

    if (msg.includes("price")) {
      return "💰 Tomatoes: $3/kg, Potatoes: $2/kg, Eggs: $5/tray.";
    }

    if (msg.includes("tour")) {
      return "🚜 Farm tours are available every Saturday at 10 AM.";
    }

    if (msg.includes("delivery")) {
      return "🚚 We deliver within 24 hours to nearby towns.";
    }

    if (msg.includes("hello") || msg.includes("hi")) {
      return "👋 Hello! Welcome to Green Valley Farm.";
    }

    return "🌱 Sorry, I didn't understand that. Ask about produce, prices, tours, or delivery.";
  };

  // SEND MESSAGE
  const sendMessage = (text = input) => {
    if (!text.trim()) return;

    const userMessage = {
      sender: "user",
      text,
    };

    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      const botMessage = {
        sender: "bot",
        text: getBotReply(text),
      };

      setMessages((prev) => [...prev, botMessage]);
    }, 500);

    setInput("");
  };

  return (
    <div style={styles.container}>
      {/* CHAT HEADER */}
      <div style={styles.header} onClick={() => setIsOpen(!isOpen)}>
        <span>🌱 Farm Assistant</span>
        <span>{isOpen ? "−" : "+"}</span>
      </div>

      {/* CHAT BODY */}
      {isOpen && (
        <>
          <div style={styles.body}>
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  ...styles.message,
                  ...(msg.sender === "bot"
                    ? styles.botMessage
                    : styles.userMessage),
                }}
              >
                {msg.text}
              </div>
            ))}

            {/* QUICK ACTION BUTTONS */}
            <div style={styles.quickButtons}>
              <button onClick={() => sendMessage("Fresh produce")}>
                Fresh Produce
              </button>

              <button onClick={() => sendMessage("Prices")}>
                Prices
              </button>

              <button onClick={() => sendMessage("Farm tours")}>
                Farm Tours
              </button>

              <button onClick={() => sendMessage("Delivery info")}>
                Delivery Info
              </button>
            </div>
          </div>

          {/* INPUT AREA */}
          <div style={styles.footer}>
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" && sendMessage()
              }
              style={styles.input}
            />

            <button onClick={() => sendMessage()} style={styles.sendBtn}>
              Send
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default FarmChatbot;

const styles = {
  // POSITION:
  // Bottom-right floating chatbot
  container: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "340px",
    maxWidth: "90%",
    zIndex: 9999,
    fontFamily: "Arial, sans-serif",
  },

  header: {
    background: "#2e7d32",
    color: "white",
    padding: "15px",
    borderRadius: "15px 15px 0 0",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontWeight: "bold",
  },

  body: {
    background: "white",
    height: "400px",
    overflowY: "auto",
    padding: "15px",
    border: "1px solid #ddd",
  },

  message: {
    padding: "10px",
    borderRadius: "10px",
    marginBottom: "10px",
    maxWidth: "80%",
    lineHeight: "1.5",
  },

  botMessage: {
    background: "#e8f5e9",
    alignSelf: "flex-start",
  },

  userMessage: {
    background: "#c8e6c9",
    marginLeft: "auto",
    textAlign: "right",
  },

  footer: {
    display: "flex",
    border: "1px solid #ddd",
    borderTop: "none",
    background: "white",
    borderRadius: "0 0 15px 15px",
  },

  input: {
    flex: 1,
    border: "none",
    padding: "15px",
    outline: "none",
    fontSize: "14px",
  },

  sendBtn: {
    background: "#2e7d32",
    color: "white",
    border: "none",
    padding: "15px 20px",
    cursor: "pointer",
  },

  quickButtons: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginTop: "15px",
  },
};
import { useState, useEffect, useRef } from "react";
import {
  FiPhone,
  FiVideo,
  FiInfo,
  FiSmile,
  FiPaperclip,
  FiSend,
} from "react-icons/fi";

import chats from "../../data/chats";
import styles from "./ChatArea.module.css";

function ChatArea({ selectedChatId, messages, setMessages }) {
  const [text, setText] = useState("");

  const bottomRef = useRef(null);

  const selectedChat = chats.find((chat) => chat.id === selectedChatId);

  const chatMessages = messages[selectedChatId] || [];

  function handleSend() {
    if (!text.trim()) return;

    const newMessage = {
      id: Date.now(),
      sender: "me",
      text,
    };

    setMessages((prev) => ({
      ...prev,
      [selectedChatId]: [...(prev[selectedChatId] || []), newMessage],
    }));

    setText("");
  }

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [chatMessages]);

  return (
    <main className={styles.chatArea}>
      <header className={styles.header}>
        <div className={styles.userInfo}>
          <div className={styles.avatar}>{selectedChat.name.charAt(0)}</div>

          <div>
            <h2>{selectedChat.name}</h2>
            <span>{selectedChat.status}</span>
          </div>
        </div>

        <div className={styles.actions}>
          <button>
            <FiPhone />
          </button>

          <button>
            <FiVideo />
          </button>

          <button>
            <FiInfo />
          </button>
        </div>
      </header>

      <section className={styles.messages}>
        {chatMessages.map((message) => (
          <div
            key={message.id}
            className={message.sender === "me" ? styles.sent : styles.received}
          >
            {message.text}
          </div>
        ))}

        <div ref={bottomRef}></div>
      </section>

      <footer className={styles.inputArea}>
        <button className={styles.iconButton}>
          <FiSmile />
        </button>

        <button className={styles.iconButton}>
          <FiPaperclip />
        </button>

        <input
          type="text"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
        />

        <button className={styles.sendButton} onClick={handleSend}>
          <FiSend />
        </button>
      </footer>
    </main>
  );
}

export default ChatArea;

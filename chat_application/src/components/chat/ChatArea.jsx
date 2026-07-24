import { useState, useEffect, useRef } from "react";
import EmojiPicker from "emoji-picker-react";
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
  const [showEmoji, setShowEmoji] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const bottomRef = useRef(null);
  const fileInputRef = useRef(null);

  const selectedChat = chats.find((chat) => chat.id === selectedChatId);

  const chatMessages = messages[selectedChatId] || [];

  function handleEmojiClick(emojiData) {
    setText((prev) => prev + emojiData.emoji);
  }

  function openFilePicker() {
    fileInputRef.current.click();
  }

  function handleFileChange(e) {
    const file = e.target.files[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setSelectedImage(imageUrl);
  }

  function handleSend() {
    if (!text.trim() && !selectedImage) return;

    const currentChatId = selectedChatId;
    const currentChat = selectedChat;

    const newMessage = {
      id: Date.now(),
      sender: "Brook",
      text,
      image: selectedImage,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => ({
      ...prev,
      [currentChatId]: [...(prev[currentChatId] || []), newMessage],
    }));

    setText("");
    setSelectedImage(null);
    setShowEmoji(false);

    setTimeout(() => {
      const replies = [
        "Okay 👍",
        "Sounds good!",
        "See you later.",
        "Thanks 😊",
        "No problem!",
        "😂",
        "Awesome!",
        "I'll text you soon.",
        "Sure!",
        "That's great!",
      ];

      const reply = {
        id: Date.now() + 1,
        sender: currentChat.name,
        text: replies[Math.floor(Math.random() * replies.length)],
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => ({
        ...prev,
        [currentChatId]: [...(prev[currentChatId] || []), reply],
      }));
    }, 1500);
  }

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [chatMessages]);

  return (
    <main className={styles.chatArea}>
      {/* Header */}
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

      {/* Messages */}
      <section className={styles.messages}>
        {chatMessages.map((message) => (
          <div
            key={message.id}
            className={
              message.sender === "Brook" ? styles.sent : styles.received
            }
          >
            {message.image && (
              <img
                src={message.image}
                alt="Shared"
                className={styles.messageImage}
              />
            )}

            {message.text && <p>{message.text}</p>}

            <span className={styles.time}>{message.time}</span>
          </div>
        ))}

        <div ref={bottomRef}></div>
      </section>

      {/* Emoji Picker */}
      {showEmoji && (
        <div className={styles.emojiPicker}>
          <EmojiPicker onEmojiClick={handleEmojiClick} theme="dark" />
        </div>
      )}

      {/* Image Preview */}
      {selectedImage && (
        <div className={styles.preview}>
          <img src={selectedImage} alt="Preview" />
        </div>
      )}

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />

      {/* Input */}
      <footer className={styles.inputArea}>
        <button
          className={styles.iconButton}
          onClick={() => setShowEmoji(!showEmoji)}
        >
          <FiSmile />
        </button>

        <button className={styles.iconButton} onClick={openFilePicker}>
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

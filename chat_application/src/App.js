import { useEffect, useState } from "react";

import chats from "./data/chats";
import messagesData from "./data/messages";

import Sidebar from "./components/sidebar/Sidebar";
import ChatArea from "./components/chat/ChatArea";
import Profile from "./components/profile/Profile";

import "./App.css";

function App() {
  // Selected chat
  const [selectedChatId, setSelectedChatId] = useState(chats[0].id);

  // Load saved messages from Local Storage
  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem("messages");

    if (savedMessages) {
      return JSON.parse(savedMessages);
    }

    return messagesData;
  });

  // Save messages whenever they change
  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

  return (
    <div className="app">
      <Sidebar
        selectedChatId={selectedChatId}
        setSelectedChatId={setSelectedChatId}
      />

      <ChatArea
        selectedChatId={selectedChatId}
        messages={messages}
        setMessages={setMessages}
      />

      <Profile selectedChatId={selectedChatId} />
    </div>
  );
}

export default App;

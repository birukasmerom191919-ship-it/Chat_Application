import { useEffect, useState } from "react";

import chats from "./data/chats";
import messagesData from "./data/messages";

import Sidebar from "./components/sidebar/Sidebar";
import ChatArea from "./components/chat/ChatArea";
import Profile from "./components/profile/Profile";

import "./App.css";

function App() {
  const [selectedChatId, setSelectedChatId] = useState(chats[0].id);

  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem("messages");

    return savedMessages ? JSON.parse(savedMessages) : messagesData;
  });

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

  return (
    <div className="app">
      <Sidebar
        selectedChatId={selectedChatId}
        setSelectedChatId={setSelectedChatId}
        messages={messages}
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

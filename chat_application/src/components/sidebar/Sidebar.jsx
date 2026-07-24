import { useState } from "react";

import styles from "./Sidebar.module.css";

import UserProfile from "../common/UserProfile";
import SearchBar from "../common/SearchBar";
import ChatList from "../chat/ChatList";

function Sidebar({ selectedChatId, setSelectedChatId, messages }) {
  const [search, setSearch] = useState("");

  return (
    <aside className={styles.sidebar}>
      <UserProfile />

      <SearchBar search={search} setSearch={setSearch} />

      <ChatList
        search={search}
        selectedChatId={selectedChatId}
        setSelectedChatId={setSelectedChatId}
        messages={messages}
      />
    </aside>
  );
}

export default Sidebar;

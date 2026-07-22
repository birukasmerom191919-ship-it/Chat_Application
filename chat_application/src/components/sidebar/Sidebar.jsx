import { useState } from "react";
import styles from "./Sidebar.module.css";

import UserProfile from "../common/UserProfile";
import SearchBar from "../common/SearchBar";
import ChatList from "../chat/ChatList";
import ChatArea from "../chat/ChatArea";

function Sidebar() {
  const [search, setSearch] = useState("");
  const [selectedChatId, setSelectedChatId] = useState(1);

  return (
    <aside className={styles.sidebar}>
      <UserProfile />

      <SearchBar search={search} setSearch={setSearch} />

      <ChatList
        search={search}
        selectedChatId={selectedChatId}
        setSelectedChatId={setSelectedChatId}
      />
    </aside>
  );
}

export default Sidebar;

import chats from "../../data/chats";
import ChatCard from "./ChatCard";
import styles from "./ChatList.module.css";

function ChatList({ search, selectedChatId, setSelectedChatId }) {
  const filteredChats = chats.filter((chat) =>
    chat.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className={styles.list}>
      <h3>Chats</h3>

      {filteredChats.map((chat) => (
        <ChatCard
          key={chat.id}
          id={chat.id}
          name={chat.name}
          message={chat.message}
          time={chat.time}
          active={selectedChatId === chat.id}
          onSelect={setSelectedChatId}
        />
      ))}
    </div>
  );
}

export default ChatList;

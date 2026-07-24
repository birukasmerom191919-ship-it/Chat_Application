import chats from "../../data/chats";
import ChatCard from "./ChatCard";
import styles from "./ChatList.module.css";

function ChatList({ search, selectedChatId, setSelectedChatId, messages }) {
  const filteredChats = chats.filter((chat) =>
    chat.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className={styles.chatList}>
      <h3>Chats</h3>

      {filteredChats.map((chat) => {
        const chatMessages = messages[chat.id] || [];
        const lastMessage =
          chatMessages.length > 0
            ? chatMessages[chatMessages.length - 1].text
            : chat.lastMessage;

        return (
          <ChatCard
            key={chat.id}
            id={chat.id}
            name={chat.name}
            message={lastMessage}
            time={
              chatMessages.length
                ? chatMessages[chatMessages.length - 1].time
                : chat.time
            }
            unread={chat.unread}
            active={selectedChatId === chat.id}
            onSelect={setSelectedChatId}
          />
        );
      })}
    </div>
  );
}

export default ChatList;

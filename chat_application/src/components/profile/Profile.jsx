import chats from "../../data/chats";
import styles from "./Profile.module.css";

function Profile({ selectedChatId }) {
  const selectedChat = chats.find((chat) => chat.id === selectedChatId);

  return (
    <aside className={styles.profile}>
      <div className={styles.avatar}>{selectedChat.name.charAt(0)}</div>

      <h2>{selectedChat.name}</h2>

      <p className={styles.status}>{selectedChat.status}</p>

      <div className={styles.info}>
        <div className={styles.item}>
          <span>Phone</span>
          <strong>{selectedChat.phone}</strong>
        </div>

        <div className={styles.item}>
          <span>Email</span>
          <strong>{selectedChat.email}</strong>
        </div>

        <div className={styles.item}>
          <span>Location</span>
          <strong>{selectedChat.location}</strong>
        </div>
      </div>
    </aside>
  );
}

export default Profile;

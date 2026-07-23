import styles from "./ChatCard.module.css";

function ChatCard({ id, name, message, time, unread, active, onSelect }) {
  return (
    <div
      className={`${styles.card} ${active ? styles.active : ""}`}
      onClick={() => onSelect(id)}
    >
      <div className={styles.avatar}>{name.charAt(0)}</div>

      <div className={styles.content}>
        <div className={styles.header}>
          <h4>{name}</h4>

          <div className={styles.right}>
            <span className={styles.time}>{time}</span>

            {unread > 0 && <div className={styles.badge}>{unread}</div>}
          </div>
        </div>

        <p>{message}</p>
      </div>
    </div>
  );
}

export default ChatCard;

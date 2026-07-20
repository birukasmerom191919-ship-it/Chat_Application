import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoSection}>
        <div className={styles.avatar}>B</div>

        <div>
          <h2>Brook</h2>
          <p>Online</p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;

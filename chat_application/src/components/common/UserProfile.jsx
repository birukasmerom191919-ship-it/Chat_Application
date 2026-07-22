import styles from "./UserProfile.module.css";

function UserProfile() {
  return (
    <div className={styles.profile}>
      <div className={styles.avatar}>B</div>

      <div className={styles.info}>
        <h2>Brook</h2>
        <p>Online</p>
      </div>
    </div>
  );
}

export default UserProfile;

import Sidebar from "../sidebar/Sidebar";
import ChatArea from "../chat/ChatArea";
import ProfilePanel from "../profile/ProfilePanel";
import styles from "./MainLayout.module.css";

function MainLayout() {
  return (
    <main className={styles.layout}>
      <Sidebar />
      <ChatArea />
      <ProfilePanel />
    </main>
  );
}

export default MainLayout;

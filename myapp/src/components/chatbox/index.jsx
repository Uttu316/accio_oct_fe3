import { BsHeadset as AgentIcon } from "react-icons/bs";
import ChatInput from "./chatInput";
import ChatList from "./chatlist";
import styles from "./chatbox.module.css";

const ChatBox = () => {
  return (
    <div className={styles.chatbox}>
      <div className={styles.chatTopBar}>
        <div className={styles.agentAvatar}>
          <AgentIcon />
        </div>
        <div>
          <div className={styles.agentName}>Lumina Support</div>
          <div className={styles.agentStatus}>
            <span className={styles.statusDot} />
            Online · Typically replies in a few minutes
          </div>
        </div>
      </div>
      <ChatList />
      <ChatInput />
    </div>
  );
};

export default ChatBox;

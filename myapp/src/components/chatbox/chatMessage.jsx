import styles from "./chatbox.module.css";
import Markdown from "react-markdown";
const ChatMessage = ({ message }) => {
  const isBot = message.isBot;
  const time = message.timestamp
    ? new Date(message.timestamp).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })
    : "";

  return (
    <div
      className={`${styles.message} ${
        isBot ? styles.messageBot : styles.messageMe
      }`}
    >
      <div
        className={`${styles.bubble} ${
          isBot ? styles.bubbleBot : styles.bubbleMe
        }`}
      >
        <Markdown>{message.text}</Markdown>
      </div>
      <div className={styles.meta}>
        <span>{message.sender}</span>
        {time && <span>· {time}</span>}
      </div>
    </div>
  );
};
export default ChatMessage;

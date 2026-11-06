import { useContext } from "react";
import { IoSend as SendIcon } from "react-icons/io5";
import { FaRegFaceSmile as EmojiIcon } from "react-icons/fa6";
import { FiPaperclip as AttachIcon } from "react-icons/fi";
import { ChatContext } from "../../contexts/ChatContext";
import styles from "./chatbox.module.css";

const ChatInput = () => {
  const { onType, input, onSend } = useContext(ChatContext);
  return (
    <div className={styles.inputBar}>
      <textarea
        className={styles.textarea}
        rows={1}
        value={input}
        placeholder="Enter your message here..."
        onChange={onType}
      ></textarea>
      <div className={styles.iconActions}>
        <button className={styles.iconBtn} aria-label="Add emoji">
          <EmojiIcon />
        </button>
        <button className={styles.iconBtn} aria-label="Attach file">
          <AttachIcon />
        </button>
        <button
          className={styles.sendBtn}
          onClick={onSend}
          aria-label="Send message"
        >
          <SendIcon />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;

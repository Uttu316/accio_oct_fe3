import { useContext } from "react";
import { BsChatHeart as EmptyIcon } from "react-icons/bs";
import { BiErrorCircle as ErrorIcon } from "react-icons/bi";
import ChatMessage from "./chatMessage";
import { ChatContext } from "../../contexts/ChatContext";
import styles from "./chatbox.module.css";

const ChatList = () => {
  const { messages, listRef, status } = useContext(ChatContext);

  const isEmpty = messages.length === 0;
  const isLoading = status === "loading";
  const isError = status === "error";

  return (
    <div ref={listRef} className={styles.list}>
      {isEmpty && !isLoading && !isError ? (
        <div className={styles.empty}>
          <div className={styles.emptyIcon}>
            <EmptyIcon />
          </div>
          <p className={styles.emptyTitle}>How can we help you today?</p>
          <p className={styles.emptyText}>
            Start a conversation with our support team. Ask about orders,
            returns, shipping, or anything else.
          </p>
        </div>
      ) : (
        messages.map((item) => <ChatMessage key={item.id} message={item} />)
      )}

      {isLoading && (
        <div className={styles.typing}>
          <span className={styles.typingDot} />
          <span className={styles.typingDot} />
          <span className={styles.typingDot} />
        </div>
      )}

      {isError && (
        <div className={styles.error}>
          <span className={styles.errorIcon}>
            <ErrorIcon />
          </span>
          Something went wrong reaching support. Please try sending your message
          again.
        </div>
      )}
    </div>
  );
};

export default ChatList;

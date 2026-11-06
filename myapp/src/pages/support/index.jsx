import ChatBox from "../../components/chatbox";
import Faq from "../../components/chatbox/faq";
import PageWrapper from "../../components/pageWrapper";
import ChatProvider from "../../contexts/ChatContext";
import styles from "./support.module.css";

const SupportPage = () => {
  return (
    <PageWrapper title="Support">
      <div className={styles.page}>
        <div className={styles.head}>
          <span className={styles.kicker}>We're here to help</span>
          <h1 className={styles.title}>Customer Support</h1>
          <p className={styles.subtitle}>
            Chat with our team or browse common questions below. We usually
            reply within a few minutes.
          </p>
        </div>

        <ChatProvider>
          <ChatBox />
        </ChatProvider>

        <Faq />
      </div>
    </PageWrapper>
  );
};
export default SupportPage;

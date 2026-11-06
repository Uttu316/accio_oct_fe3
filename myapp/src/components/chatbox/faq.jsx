import { useState } from "react";
import { FaChevronDown as ChevronIcon } from "react-icons/fa6";
import styles from "./faq.module.css";

const FAQS = [
  {
    q: "How do I track my order?",
    a: "Once your order ships, we'll email you a tracking link. You can also find it in the My Orders section of your profile at any time.",
  },
  {
    q: "What is your return policy?",
    a: "Eligible items can be returned within 30 days of delivery for a full refund. Items should be unused and in their original packaging.",
  },
  {
    q: "How long does shipping take?",
    a: "Standard delivery takes 3–5 business days. Expedited options are available at checkout for faster arrival.",
  },
  {
    q: "Which payment methods do you accept?",
    a: "We accept all major credit and debit cards, along with popular digital wallets, through our secure encrypted checkout.",
  },
  {
    q: "Can I change or cancel my order?",
    a: "You can modify or cancel your order within one hour of placing it. After that, reach out to our support team and we'll do our best to help.",
  },
];

const FaqItem = ({ item }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`${styles.item} ${open ? styles.itemOpen : ""}`}>
      <button className={styles.question} onClick={() => setOpen((p) => !p)}>
        {item.q}
        <span className={`${styles.chevron} ${open ? styles.chevronOpen : ""}`}>
          <ChevronIcon />
        </span>
      </button>
      <div
        className={`${styles.answerWrap} ${open ? styles.answerWrapOpen : ""}`}
      >
        <p className={styles.answer}>{item.a}</p>
      </div>
    </div>
  );
};

const Faq = () => {
  return (
    <div className={styles.faq}>
      <div className={styles.faqHead}>
        <span className={styles.faqKicker}>Need quick answers?</span>
        <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
      </div>
      <div className={styles.list}>
        {FAQS.map((item) => (
          <FaqItem key={item.q} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Faq;

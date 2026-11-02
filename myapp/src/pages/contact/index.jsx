import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "./contact.module.css";

const INFO = [
  {
    icon: "📍",
    label: "Visit Us",
    value: "128 Market Street, Suite 400, San Francisco, CA 94103",
  },
  {
    icon: "✉️",
    label: "Email Us",
    value: "support@lumina.shop",
  },
  {
    icon: "📞",
    label: "Call Us",
    value: "+1 (415) 555-0132 · Mon–Fri, 9am–6pm PT",
  },
];

const ContactPage = () => {
  return (
    <div className={styles.page}>
      <Header title="Lumina" />

      <section className={styles.hero}>
        <span className={styles.kicker}>Get in Touch</span>
        <h1 className={styles.title}>We'd love to hear from you</h1>
        <p className={styles.lead}>
          Questions about an order, a product, or a partnership? Our team is
          here and happy to help.
        </p>
      </section>

      <section className={styles.layout}>
        {/* Info */}
        <div className={styles.infoList}>
          {INFO.map((item) => (
            <div
              key={item.label}
              className={`${styles.glass} ${styles.infoCard}`}
            >
              <div className={styles.infoIcon}>{item.icon}</div>
              <div>
                <div className={styles.infoLabel}>{item.label}</div>
                <div className={styles.infoValue}>{item.value}</div>
              </div>
            </div>
          ))}
          <div className={`${styles.glass} ${styles.mapWrap}`}>
            <img
              className={styles.map}
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80"
              alt="Our location"
            />
          </div>
        </div>

        {/* Form */}
        <div className={`${styles.glass} ${styles.form}`}>
          <h2 className={styles.formTitle}>Send us a message</h2>
          <p className={styles.formText}>
            Fill out the form and we'll get back to you within one business day.
          </p>

          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>First name</label>
              <input className={styles.input} type="text" placeholder="Jane" />
            </div>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>Last name</label>
              <input className={styles.input} type="text" placeholder="Doe" />
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.fieldLabel}>Email address</label>
            <input
              className={styles.input}
              type="email"
              placeholder="jane@example.com"
            />
          </div>

          <div className={styles.field}>
            <label className={styles.fieldLabel}>Subject</label>
            <input
              className={styles.input}
              type="text"
              placeholder="How can we help?"
            />
          </div>

          <div className={styles.field}>
            <label className={styles.fieldLabel}>Message</label>
            <textarea
              className={styles.textarea}
              placeholder="Tell us a little more..."
            />
          </div>

          <button className={styles.submit}>Send Message</button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;

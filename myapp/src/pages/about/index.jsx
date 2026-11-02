import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "./about.module.css";

const VALUES = [
  {
    icon: "🎯",
    title: "Customer First",
    text: "Every decision we make starts with one question: does this make shopping better for you?",
  },
  {
    icon: "🌱",
    title: "Sustainable by Design",
    text: "We partner with brands that care about the planet, from recycled packaging to ethical sourcing.",
  },
  {
    icon: "✨",
    title: "Quality Over Quantity",
    text: "We'd rather carry fewer things done well than endless shelves of noise. Curation is our craft.",
  },
];

const TEAM = [
  {
    name: "Elena Rossi",
    role: "Founder & CEO",
    img: "https://i.pravatar.cc/160?img=5",
  },
  {
    name: "Marcus Lee",
    role: "Head of Product",
    img: "https://i.pravatar.cc/160?img=13",
  },
  {
    name: "Priya Nair",
    role: "Design Director",
    img: "https://i.pravatar.cc/160?img=45",
  },
  {
    name: "David Okafor",
    role: "Operations Lead",
    img: "https://i.pravatar.cc/160?img=59",
  },
];

const AboutPage = () => {
  return (
    <div className={styles.page}>
      <Header title="Lumina" />

      {/* Hero */}
      <section className={styles.hero}>
        <span className={styles.kicker}>Our Story</span>
        <h1 className={styles.title}>Building a calmer way to shop online</h1>
        <p className={styles.lead}>
          Lumina started with a simple belief: buying the things you love
          shouldn't feel overwhelming. We're here to make commerce feel
          considered, human, and genuinely enjoyable.
        </p>
      </section>

      <div className={styles.heroImageWrap}>
        <img
          className={styles.heroImage}
          src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1400&q=80"
          alt="Our team at work"
        />
      </div>

      {/* Story */}
      <section className={styles.section}>
        <div className={styles.story}>
          <img
            className={styles.storyImg}
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
            alt="How we began"
          />
          <div>
            <h2 className={styles.heading}>How it all began</h2>
            <p className={styles.body}>
              In 2019, a small team of designers and makers grew frustrated with
              cluttered, aggressive online stores. So we set out to build the
              opposite, a marketplace that felt like a quiet, well-lit boutique.
            </p>
            <p className={styles.body}>
              Today, Lumina connects hundreds of thoughtful brands with a
              community of a quarter-million shoppers worldwide, without ever
              losing the calm, curated feel we started with.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <span className={styles.kicker}>What We Stand For</span>
          <p className={styles.sectionText}>
            A few principles guide everything we build and every brand we choose
            to work with.
          </p>
        </div>
        <div className={styles.values}>
          {VALUES.map((v) => (
            <div key={v.title} className={`${styles.glass} ${styles.value}`}>
              <div className={styles.valueIcon}>{v.icon}</div>
              <h3 className={styles.valueTitle}>{v.title}</h3>
              <p className={styles.valueText}>{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <span className={styles.kicker}>The People</span>
          <p className={styles.sectionText}>
            A compact, dedicated team obsessed with the details that make
            shopping delightful.
          </p>
        </div>
        <div className={styles.team}>
          {TEAM.map((m) => (
            <div key={m.name} className={`${styles.glass} ${styles.member}`}>
              <img className={styles.memberImg} src={m.img} alt={m.name} />
              <div className={styles.memberName}>{m.name}</div>
              <div className={styles.memberRole}>{m.role}</div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;

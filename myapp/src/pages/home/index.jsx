import styles from "./home.module.css";
import { useNavigate } from "react-router";
import PageWrapper from "../../components/pageWrapper";

const FEATURES = [
  {
    icon: "🚚",
    title: "Free & Fast Delivery",
    text: "Complimentary shipping on every order over $50, delivered to your door in days, not weeks.",
  },
  {
    icon: "🔁",
    title: "Easy 30-Day Returns",
    text: "Changed your mind? Send it back within 30 days for a full, no-questions-asked refund.",
  },
  {
    icon: "🔒",
    title: "Secure Checkout",
    text: "Your payments are protected with bank-grade encryption and trusted payment partners.",
  },
];

const CATEGORIES = [
  {
    label: "Fashion",
    img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80",
  },
  {
    label: "Electronics",
    img: "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=600&q=80",
  },
  {
    label: "Home & Living",
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80",
  },
  {
    label: "Beauty",
    img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80",
  },
];

const STATS = [
  { value: "250K+", label: "Happy Customers" },
  { value: "12K+", label: "Products Listed" },
  { value: "180+", label: "Global Brands" },
  { value: "4.9★", label: "Average Rating" },
];

const TESTIMONIALS = [
  {
    quote:
      "The quality blew me away and delivery was faster than promised. Lumina has become my go-to for everything.",
    name: "Sofia Martinez",
    role: "Verified Buyer",
    avatar: "https://i.pravatar.cc/100?img=47",
  },
  {
    quote:
      "Clean shopping experience, fair prices, and returns that actually just work. Exactly how it should be.",
    name: "James Carter",
    role: "Verified Buyer",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    quote:
      "Beautifully curated catalog. I always find something I love without endless scrolling. Highly recommend.",
    name: "Aisha Khan",
    role: "Verified Buyer",
    avatar: "https://i.pravatar.cc/100?img=32",
  },
];

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <PageWrapper className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div>
          <span className={styles.heroTag}>New Season · 2026 Collection</span>
          <h1 className={styles.heroTitle}>
            Shop smarter.
            <br />
            <span className={styles.heroAccent}>Live beautifully.</span>
          </h1>
          <p className={styles.heroText}>
            Lumina brings together thoughtfully designed products from the
            world's best brands, all in one calm, effortless place to shop.
          </p>
          <div className={styles.heroActions}>
            <button
              onClick={() => navigate("/products")}
              className={styles.btnPrimary}
            >
              Shop the Collection
            </button>
            <button className={styles.btnGhost}>Explore Categories</button>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <img
            className={styles.heroImage}
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80"
            alt="Featured storefront"
          />
          <div className={styles.heroFloat}>
            <div>
              <div className={styles.heroFloatLabel}>Trending now</div>
              <div className={styles.heroFloatValue}>Minimal Essentials</div>
            </div>
            <button className={styles.btnGhost}>View</button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className={styles.section}>
        <div className={styles.features}>
          {FEATURES.map((f) => (
            <div key={f.title} className={`${styles.glass} ${styles.feature}`}>
              <div className={styles.featureIcon}>{f.icon}</div>
              <h3 className={styles.featureTitle}>{f.title}</h3>
              <p className={styles.featureText}>{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <span className={styles.sectionKicker}>Browse</span>
          <h2 className={styles.sectionTitle}>Shop by Category</h2>
          <p className={styles.sectionText}>
            From everyday essentials to statement pieces, find exactly what
            you're looking for across our curated collections.
          </p>
        </div>
        <div className={styles.categories}>
          {CATEGORIES.map((c) => (
            <div key={c.label} className={styles.category}>
              <img className={styles.categoryImg} src={c.img} alt={c.label} />
              <div className={styles.categoryLabel}>{c.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Promo banner */}
      <section className={styles.section}>
        <div className={styles.banner}>
          <img
            className={styles.bannerImg}
            src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1400&q=80"
            alt="Seasonal sale"
          />
          <div className={styles.bannerOverlay}>
            <h2 className={styles.bannerTitle}>The Mid-Season Sale is Here</h2>
            <p className={styles.bannerText}>
              Enjoy up to 40% off selected styles across every category. Limited
              time, unlimited taste.
            </p>
            <button className={styles.btnGhost}>Shop the Sale</button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className={styles.section}>
        <div className={styles.stats}>
          {STATS.map((s) => (
            <div key={s.label} className={`${styles.glass} ${styles.stat}`}>
              <div className={styles.statValue}>{s.value}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <span className={styles.sectionKicker}>Loved by many</span>
          <h2 className={styles.sectionTitle}>What Our Customers Say</h2>
          <p className={styles.sectionText}>
            Real words from real shoppers who've made Lumina part of their
            everyday.
          </p>
        </div>
        <div className={styles.testimonials}>
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className={`${styles.glass} ${styles.testimonial}`}
            >
              <p className={styles.quote}>"{t.quote}"</p>
              <div className={styles.person}>
                <img className={styles.avatar} src={t.avatar} alt={t.name} />
                <div>
                  <div className={styles.personName}>{t.name}</div>
                  <div className={styles.personRole}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className={styles.section}>
        <div className={`${styles.glass} ${styles.cta}`}>
          <h2 className={styles.ctaTitle}>Join the Lumina List</h2>
          <p className={styles.ctaText}>
            Be first to know about new arrivals, exclusive drops, and
            members-only offers.
          </p>
          <div className={styles.ctaForm}>
            <input
              className={styles.input}
              type="email"
              placeholder="Enter your email address"
            />
            <button className={styles.btnPrimary}>Subscribe</button>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default HomePage;

import { useContext, useState } from "react";
import { Link } from "react-router";
import { CartContext } from "../../contexts/CartContext";
import PageWrapper from "../../components/pageWrapper";
import styles from "./cart.module.css";

const FAQS = [
  {
    q: "How long does delivery take?",
    a: "Most orders arrive within 3–5 business days. You'll get a tracking link by email as soon as your order ships.",
  },
  {
    q: "Can I return an item?",
    a: "Yes. Eligible items can be returned within 30 days of delivery for a full refund, no questions asked.",
  },
  {
    q: "Which payment methods do you accept?",
    a: "We accept all major credit and debit cards, as well as popular digital wallets at secure checkout.",
  },
  {
    q: "Is my payment information safe?",
    a: "Absolutely. Every transaction is encrypted and processed through trusted, PCI-compliant payment partners.",
  },
];

const CartItem = ({ item }) => {
  const { incrementQuantity, decrementQuantity, removeFromCart } =
    useContext(CartContext);
  const quantity = item.quantity || 1;
  const lineTotal = (item.price * quantity).toFixed(2);
  const atStockLimit = quantity >= item.stock;
  const lowStock = item.stock <= 10;

  return (
    <div className={`${styles.glass} ${styles.item}`}>
      <div className={styles.itemImageWrap}>
        <img
          className={styles.itemImage}
          src={item.thumbnail}
          alt={item.title}
        />
      </div>

      <div className={styles.itemInfo}>
        <span className={styles.itemBrand}>{item.brand || item.category}</span>
        <p className={styles.itemTitle}>{item.title}</p>
        <p className={styles.itemDesc}>{item.description}</p>
        <div className={styles.itemMeta}>
          <span className={styles.itemPrice}>${item.price}</span>
          <span
            className={`${styles.itemStock} ${
              lowStock ? styles.itemStockLow : ""
            }`}
          >
            {item.stock} in stock
          </span>
        </div>
      </div>

      <div className={styles.qtyColumn}>
        <div className={styles.qtyControls}>
          {quantity === 1 ? (
            <button
              className={`${styles.qtyBtn} ${styles.deleteBtn}`}
              onClick={() => removeFromCart(item.id)}
              aria-label="Remove item"
            >
              🗑
            </button>
          ) : (
            <button
              className={styles.qtyBtn}
              onClick={() => decrementQuantity(item.id)}
              aria-label="Decrease quantity"
            >
              −
            </button>
          )}
          <span className={styles.qtyCount}>{quantity}</span>
          <button
            className={styles.qtyBtn}
            onClick={() => incrementQuantity(item.id)}
            disabled={atStockLimit}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
        <span className={styles.lineTotal}>
          Subtotal: <strong>${lineTotal}</strong>
        </span>
      </div>
    </div>
  );
};

const CartPage = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [coupon, setCoupon] = useState("");
  const [purchased, setPurchased] = useState(false);

  const totalItems = cart.reduce((sum, i) => sum + (i.quantity || 1), 0);

  const originalTotal = cart.reduce(
    (sum, i) =>
      sum +
      (i.price / (1 - (i.discountPercentage || 0) / 100)) * (i.quantity || 1),
    0,
  );
  const finalPrice = cart.reduce(
    (sum, i) => sum + i.price * (i.quantity || 1),
    0,
  );
  const totalDiscount = originalTotal - finalPrice;

  const handlePayNow = () => {
    clearCart();
    setPurchased(true);
  };

  // Success state after purchase
  if (purchased) {
    return (
      <PageWrapper title="Cart">
        <div className={styles.page}>
          <div className={`${styles.glass} ${styles.success}`}>
            <div className={styles.successIcon}>✓</div>
            <h2 className={styles.successTitle}>Purchase Successful!</h2>
            <p className={styles.successText}>
              Thank you for shopping with Lumina. A confirmation email with your
              order details and tracking information is on its way.
            </p>
            <Link className={styles.emptyBtn} to="/products">
              Continue Shopping
            </Link>
          </div>
        </div>
      </PageWrapper>
    );
  }

  // Empty cart state
  if (cart.length === 0) {
    return (
      <PageWrapper title="Cart">
        <div className={styles.page}>
          <div className={`${styles.glass} ${styles.empty}`}>
            <div className={styles.emptyIcon}>🛒</div>
            <h2 className={styles.emptyTitle}>Your cart is empty</h2>
            <p className={styles.emptyText}>
              Looks like you haven't added anything yet. Explore our collection
              and find something you'll love.
            </p>
            <Link className={styles.emptyBtn} to="/products">
              Start Shopping
            </Link>
          </div>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper title="Cart">
      <div className={styles.page}>
        <h1 className={styles.heading}>
          Your Cart <span>· {totalItems} items</span>
        </h1>

        <div className={styles.layout}>
          {/* Left: items */}
          <div className={styles.items}>
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          {/* Right: summary */}
          <aside className={`${styles.glass} ${styles.summary}`}>
            <h2 className={styles.summaryTitle}>Order Summary</h2>

            <div className={styles.summaryRow}>
              <span>Items</span>
              <span>{totalItems}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Total price</span>
              <span>${originalTotal.toFixed(2)}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Total discount</span>
              <span className={styles.discountValue}>
                −${totalDiscount.toFixed(2)}
              </span>
            </div>

            <div className={styles.divider} />

            <div className={styles.finalRow}>
              <span className={styles.finalLabel}>Final price</span>
              <span className={styles.finalValue}>
                ${finalPrice.toFixed(2)}
              </span>
            </div>

            <div className={styles.delivery}>
              🚚 Expected delivery in 3–5 business days
            </div>

            <div className={styles.coupon}>
              <input
                className={styles.couponInput}
                type="text"
                placeholder="Apply coupon code"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
              />
              <button className={styles.couponBtn}>Apply</button>
            </div>

            <button className={styles.payBtn} onClick={handlePayNow}>
              Pay Now · ${finalPrice.toFixed(2)}
            </button>
            <span className={styles.secureNote}>
              🔒 Secure, encrypted checkout
            </span>
          </aside>
        </div>

        {/* FAQ */}
        <div className={`${styles.glass} ${styles.faq}`}>
          <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
          <div className={styles.faqGrid}>
            {FAQS.map((item) => (
              <div key={item.q} className={styles.faqItem}>
                <p className={styles.faqQ}>{item.q}</p>
                <p className={styles.faqA}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default CartPage;

import PracticePage from "./pages/practice";
import ProductsPage from "./pages/products";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";

import { BrowserRouter, Route, Routes } from "react-router";
import ProductPage from "./pages/product";
import NotFoundPage from "./pages/notFound";
import CartPage from "./pages/cart";
import CartProvider from "./contexts/CartContext";
const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/practice" element={<PracticePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;

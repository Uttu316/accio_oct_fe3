import PracticePage from "./pages/practice";
import ProductsPage from "./pages/products";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";

import { BrowserRouter, Route, Routes } from "react-router";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/practice" element={<PracticePage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

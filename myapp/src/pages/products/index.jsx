import Footer from "../../components/footer";
import Header from "../../components/header";
import ProductsContainer from "../../components/productsContainer";

const ProductsPage = () => {
  return (
    <div>
      <Header title={"Products"} />
      <ProductsContainer />
      <Footer />
    </div>
  );
};
export default ProductsPage;

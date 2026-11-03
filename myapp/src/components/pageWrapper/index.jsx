import Footer from "../footer";
import Header from "../header";

const PageWrapper = ({ className, title, children }) => {
  //track(page_visit)
  return (
    <div className={className}>
      <Header title={title || "Lumina"} />
      {children}
      <Footer />
    </div>
  );
};
export default PageWrapper;

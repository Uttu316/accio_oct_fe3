import BannerController from "../../components/bannerController";
import Counter from "../../components/counter";
import Footer from "../../components/footer";
import Header from "../../components/header";
import UserList from "../../components/userlist";

const PracticePage = () => {
  return (
    <div>
      <Header />
      <UserList />
      <Counter />
      <BannerController />
      <Footer />
    </div>
  );
};

export default PracticePage;

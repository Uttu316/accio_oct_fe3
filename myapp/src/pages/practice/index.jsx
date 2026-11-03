import BannerController from "../../components/bannerController";
import Counter from "../../components/counter";
import PageWrapper from "../../components/pageWrapper";
import UserList from "../../components/userlist";

const PracticePage = () => {
  return (
    <PageWrapper>
      <UserList />
      <Counter />
      <BannerController />
    </PageWrapper>
  );
};

export default PracticePage;

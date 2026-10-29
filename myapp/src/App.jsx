import Footer from "./components/footer";
import Header from "./components/header";
import "./App.css";
import UserList from "./components/userlist";
import Counter from "./components/counter";

const App = () => {
  return (
    <div>
      <Header />
      <UserList />
      <Counter />
      <Footer />
    </div>
  );
};

export default App;

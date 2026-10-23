import Footer from "./components/footer";
import Header from "./components/header";
import "./App.css";

import heroImg from "./assets/hero.png";
const App = () => {
  return (
    <div>
      <Header />
      <section className="app_section">
        <h2 className="app_heading">Welcome to React Learning App</h2>
        <img src={heroImg} height={100} width={100} />
        <p>
          By: <code>Utkarsh Gupta</code>
        </p>
        <ul className="app_list">
          <li>Components</li>
          <li>JSX</li>
          <li>List and keys</li>
          <li>Condition Rendering</li>
        </ul>
      </section>
      <Footer />
    </div>
  );
};

export default App;

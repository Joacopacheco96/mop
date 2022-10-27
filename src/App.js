import "./App.css";

import { Element } from "react-scroll";

import Header from "./Components/Header/Header.jsx";
import Main from "./Components/Main/Main.jsx";
import Page from "./Components/Page/Page.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  return (
    <div className="App">
    
      <Element name="top" />
      <Header />
      <Main />
      <Page />
      <Footer />
    </div>
  );
}

export default App;

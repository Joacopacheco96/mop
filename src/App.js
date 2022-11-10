import "./App.css";

import { Element } from "react-scroll";

import Header from "./Components/Header/Header.jsx";
import Main from "./Components/Main/Main.jsx";
import Product from "./Components/Product/Product.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  return (
    <div className="App">
    
      <Element name="top" />
      <Header />
      <Main />
      <Product 
      title="Tecnologias usadas"
      titleColor="black"
      description="Tecnologias que he usado a lo largo de mi carrera"
      descriptionColor="black"  
      background="#2990b7a6"
      imgList={[
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
      "https://www.arsys.es/blog/file/uploads/2017/04/React.jpg"]}
      />
      <Footer />
    </div>
  );
}

export default App;

import React from "react";

import { Link, Element } from "react-scroll";

const Header = () => {
  return (
    <Element name="Header" class="container sticky-top">
      <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom bg-light">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/joaquin-pacheco-techera-02338a157/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <img alt="Linkedin" style={{width: `10%`}} src="https://cdn3.iconfinder.com/data/icons/inficons/512/linkedin.png"/>
        </a>

        <ul class="nav nav-pills">
          <Link
            class="white nav-link p-0"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            to="top"
          >
            <div class="nav-link active">Home</div>
          </Link>
          <Link
            class="white nav-link p-0"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            to="Product"
          >
            <div class="nav-link">Projects</div>
          </Link>
          <Link
            class="white nav-link p-0"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            to="Footer"
          >
            <div class="nav-link">About me</div>
          </Link>
        </ul>
      </header>
    </Element>
  );
};

export default Header;

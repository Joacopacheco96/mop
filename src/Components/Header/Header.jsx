import React from "react";

import { Link, Element } from "react-scroll";

const Header = () => {
  return (
    <Element name="Header" class="container sticky-top">
      <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/joaquin-pacheco-techera-02338a157/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <span class="fs-4">Joaquin Pacheco</span>
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
            to="Page"
          >
            <div class="nav-link">About me</div>
          </Link>
          <Link
            class="white nav-link p-0"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            to="Page"
          >
            <div class="nav-link">Projects</div>
          </Link>
        </ul>
      </header>
    </Element>
  );
};

export default Header;

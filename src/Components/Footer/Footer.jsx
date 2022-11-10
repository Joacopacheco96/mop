import React from "react";
import { Element } from "react-scroll";

const Footer = () => {
  return (
    <footer class="d-flex flex-wrap justify-content-evenly align-items-center py-5 my-4 border-top">
      <Element name="Footer" class="col-md-4 d-flex align-items-center">
        <span class="mb-3 mb-md-0 text-muted">© 2022 Company, Inc</span>
      </Element>
      <ul class=" col-md-4 justify-content-end list-unstyled d-flex flex-row">
        <li >
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/joaquin-pacheco-techera-02338a157/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <img style={{width: `50%`}} src="https://cdn3.iconfinder.com/data/icons/inficons/512/linkedin.png"/>
          </a>
        </li>
        <li >
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Joacopacheco96"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
        <img style={{width: `50%`}} src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>
        </a>
        </li>
        <li >
          <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/joaquin-pacheco-techera-02338a157/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
        <img style={{width: `50%`}} src="https://cdn-icons-png.flaticon.com/512/337/337946.png"/>
        </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;

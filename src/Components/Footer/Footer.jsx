import React from "react";

import { Element } from "react-scroll";

const Footer = () => {
  return (
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <Element class="col-md-4 d-flex align-items-center">
        <a
          href="/"
          class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
        >
          <svg class="bi" width="30" height="24">
            <use xlinkHref="#bootstrap"></use>
          </svg>
        </a>
        <span class="mb-3 mb-md-0 text-muted">© 2022 Company, Inc</span>
      </Element>

      <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li class="ms-3">
          <a class="text-muted" href="#">
            <svg class="bi" width="24" height="24">
              <use xlinkHref="#twitter"></use>
            </svg>
          </a>
        </li>
        <li class="ms-3">
          <a class="text-muted" href="#">
            <svg class="bi" width="24" height="24">
              <use xlinkHref="#instagram"></use>
            </svg>
          </a>
        </li>
        <li class="ms-3">
          <a class="text-muted" href="#">
            <svg class="bi" width="24" height="24">
              <use xlinkHref="#facebook"></use>
            </svg>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;

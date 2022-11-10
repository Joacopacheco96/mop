import React from "react";

import { Element, Link } from "react-scroll";

const Main = () => {
  return (
    <Element name="Main" class="container col-xxl-8 px-4 py-5">
      <div class="row flex-lg-row-reverse justify-content-center align-items-center g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-6">
          <img
            src="https://imgs.search.brave.com/q-ARzSX6Uk8oijIGy8kh0ybw64PQqADWDGIFmRgqth0/rs:fit:948:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5y/TnBkeTAyMVZ0WkJn/ZnpRVDBrNXlBSGFE/dCZwaWQ9QXBp"
            class="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3">
            Joaquin Pacheco
          </h1>
          <p class="lead">
          Hello! My name is Joaquin, I currently reside in Uruguay and I am working as a programmer in the IT field.</p>
          <div class="d-grid gap-2 d-md-flex justify-content-center">
            <a target="_blank" href="https://github.com/Joacopacheco96" rel="noreferrer" type="button" class="btn btn-primary btn-lg px-4 me-md-2">
              Mi Github
            </a>
            <Link duration={500} spy={true} smooth={true}  to="Product" class="btn btn-outline-secondary btn-lg px-4">
              Tecnologias que he usado
            </Link>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Main;

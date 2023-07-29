import React from "react";

function Header() {
  return (
    <>
      <div class="container">
        <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a
            href="/"
            class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <svg class="bi me-2" width="40" height="32">
              {/* <use xlinkHref="#bootstrap"></use> */}
            </svg>
            <span class="fs-4">CSE-AI</span>
          </a>

          <ul class="nav nav-pills">
            <li class="nav-item">
              <a href="#" class="nav-link active" aria-current="page">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                Pricing
              </a>
            </li>
          </ul>
        </header>
      </div>
    </>
  );
}

export default Header;

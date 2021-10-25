import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  const [click, setclick] = useState(false);
  const handleClick = () => setclick(!click);

  const closeMobileMenu = () => setclick(false);
  return (
    <header>
      <div className="logo" onClick={closeMobileMenu}>
        <Link to="/" className="nav-links">
          <h1>
            <i className="fas fa-gem"></i> nuelSBN
          </h1>
        </Link>
      </div>
      <div className="menuIcon">
        <i
          class={click ? "fas fa-times" : "fas fa-bars"}
          onClick={handleClick}
        ></i>
      </div>
      <ul className={click ? "navbar active" : "navbar"}>
        <h4>follow me on:</h4>
        <li>
          <a
            href=" https://web.facebook.com/emmanuel.igwenagu.56"
            className="nav-links"
            onClick={closeMobileMenu}
            target="_blank"
          >
            <i className="fab fa-facebook"></i>
          </a>
        </li>

        <li>
          <a
            href=" http://twitter.com/nuelSBN"
            className="nav-links"
            onClick={closeMobileMenu}
            target="_blank"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a
            href=" https://www.linkedin.com/in/emmanuel-igwenagu-a5918b218/"
            className="nav-links"
            onClick={closeMobileMenu}
            target="_blank"
          >
            <i class="fab fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a
            href=" https://www.instagram.com/nuelsbn/"
            className="nav-links"
            onClick={closeMobileMenu}
            target="_blank"
          >
            <i class="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a
            href=" https://github.com/nuelSBN"
            className="nav-links"
            onClick={closeMobileMenu}
            target="_blank"
          >
            <i class="fab fa-git"></i>
          </a>
        </li>
        <li>
          <a
            href=" https://wa.me/08130927634"
            className="nav-links"
            onClick={closeMobileMenu}
            target="_blank"
          >
            <i class="fab fa-whatsapp"></i>
          </a>
        </li>
      </ul>
      <ul className="thirdBar">
        <li className="telephone">
          <a
            href=" tel:+234-813-092-7634"
            className="nav-links"
            onClick={closeMobileMenu}
            target="_blank"
          >
            telephone: +234 813 092 7634
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;

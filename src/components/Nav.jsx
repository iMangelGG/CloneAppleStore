import React from "react";
import Logo from "../assets/images/logo.svg";
import Search from "../assets/images/search.svg";
import Store from "../assets/images/store.svg";

function Nav() {
  return (
    <nav className="nav-wrapper">
      <div className="nav-content">
        <ul className="list-styled">
          <li>
            <img src={Logo} alt="Apple" />
          </li>
          <li>
            <a className="link-styled"> Tienda </a>
          </li>
          <li>
            <a className="link-styled"> Mac </a>
          </li>
          <li>
            <a className="link-styled"> Ipad </a>
          </li>
          <li>
            <a className="link-styled"> Iphone </a>
          </li>
          <li>
            <a className="link-styled"> Watch </a>
          </li>
          <li>
            <a className="link-styled"> Airpods </a>
          </li>
          <li>
            <a className="link-styled"> Tv y Casa </a>
          </li>
          <li>
            <a className="link-styled"> Entretenimiento </a>
          </li>
          <li>
            <a className="link-styled"> Accesorios </a>
          </li>
          <li>
            <a className="link-styled"> Soporte </a>
          </li>
          <li>
            <img src={Search} alt="Search" />
          </li>
          <li>
            <img src={Store} alt="Store" />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;

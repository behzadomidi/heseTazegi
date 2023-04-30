import React, { useState } from "react";
import "./navbar.css";
import { AiOutlineSearch } from "react-icons/ai";
import { TbLogin } from "react-icons/tb";
import Header from "../header/Header";
import { FaBars, FaTimes } from "react-icons/fa";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <div className="nav">
      <div className="container">
        <div className="nav-right">
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            {showLinks ? <FaTimes /> : <FaBars />}
            {showLinks ? <Sidebar /> : ""}
          </button>
          <div className="nav-logo">
            <a href="/">
              <img src="/src/assets/image/logo.png" alt="" />
            </a>
          </div>
          <div className="nav-logo-mobile">
            <a href="/">
              <img src="/src/assets/image/logo-mobile.png" alt="" />
            </a>
          </div>
          <div className="nav-search">
            <button>
              <i>
                <AiOutlineSearch />
              </i>
            </button>
            <input
              type="search"
              placeholder="         نام غذا ,مواد اولیه , رژیم, بیماری ..."
            />
          </div>
        </div>
        <div className="nav-button">
          <button className="btn-register">
            <i>
              <TbLogin />
            </i>
            ورود | ثبت نام
          </button>
          <button className="btn-subscription">خرید اشتراک</button>
        </div>
      </div>
      <Header />
    </div>
  );
};

export default Navbar;

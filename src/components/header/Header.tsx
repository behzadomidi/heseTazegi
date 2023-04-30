import React from "react";
import "./header.css";
import { BiChevronLeft } from "react-icons/bi";

const Header = () => {
  return (
    <div className="header">
      <ul className="list">
        <li>
          <a href="/" className="active">
            صفحه اصلی
          </a>
        </li>
        <li>
          <a href="/">طرز تهیه</a>
        </li>
        <li>
          <a href="/">ماشین حساب آشپزی</a>
        </li>
        <li>
          <a href="/">
            {" "}
            دانشنامه
            <i>
              <BiChevronLeft />
            </i>
          </a>
        </li>
        <li>
          <a href="/">مجله حس تازگی</a>
        </li>
        <li>
          <a href="/">لیگ حس تازگی</a>
        </li>
        <li>
          <a href="/">درباره ما</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;

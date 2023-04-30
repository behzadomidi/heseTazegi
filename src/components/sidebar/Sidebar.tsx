import React from "react";
import "./sidebar.css";
import { GoHome } from "react-icons/go";
import { HiOutlineDocumentText } from "react-icons/hi";
import { CiCalculator1 } from "react-icons/ci";
import { VscBook } from "react-icons/vsc";
import { GiNewspaper } from "react-icons/gi";
import { BsLightningFill } from "react-icons/bs";
import { SiAboutdotme } from "react-icons/si";
import { BiChevronLeft } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo-mobile">
        <a href="/">
          <img src="/image/logo-mobile.png" alt="" />
        </a>
      </div>

      <ul className="sidebar-list">
        <li>
          <a href="/">
            <i>
              <GoHome />
            </i>
            صفحه اصلی
          </a>
        </li>
        <li>
          <a href="/">
            {" "}
            <i>
              <HiOutlineDocumentText />
            </i>
            طرز تهیه
          </a>
        </li>
        <li>
          <a href="/">
            {" "}
            <i>
              <CiCalculator1 />
            </i>
            ماشین حساب آشپزی
          </a>
        </li>
        <li>
          <a href="/">
            {" "}
            <i>
              <VscBook />
            </i>
            دانشنامه
            <i>
              <BiChevronLeft />
            </i>
          </a>
        </li>
        <li>
          <a href="/">
            {" "}
            <i>
              <GiNewspaper />
            </i>
            مجله حس تازگی
          </a>
        </li>
        <li>
          <a href="/">
            {" "}
            <i>
              <BsLightningFill />
            </i>
            لیگ حس تازگی
          </a>
        </li>
        <li>
          <a href="/">
            {" "}
            <i>
              <SiAboutdotme />
            </i>
            درباره ما
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

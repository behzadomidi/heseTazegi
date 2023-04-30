import React from "react";
import { AiOutlineShareAlt } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import "./main.css";
import AccordionComponent from "../accordion/Accordion";

const Main = () => {
  return (
    <div className="main">
      <div className="content">
        <div>
          <h1>سوالات متداول</h1>
          <span className="page-org">صفحه اصلی</span>
          <span className="page-next">
            <i>
              <AiOutlineLeft />
            </i>
            سوالات متداول
          </span>
        </div>
        <div>
          <button className="btn-share">
            <i>
              <AiOutlineShareAlt />
            </i>
          </button>
        </div>
      </div>
      <AccordionComponent />
    </div>
  );
};

export default Main;

import React, { useEffect, useState } from "react";
import "./accordion.css";
import { BiChevronLeft } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";
import axios from "axios";

const Accordion = () => {
  const [accordionData, setAccordionData] = useState([] as any);
  const [showDescription, setDhowDescription] = useState<boolean>(false);

  interface User {
    id: number
    title:string|number
    description: string |number
  }

  type GetUsersResponse = {
    data: User[];
  };

  const getData = async () => {
    try {
      const data  = await axios.get<GetUsersResponse>("https://api-dev.hesetazegi.com/FAQ/List");
      setAccordionData([data]);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const handleToggle = () => {
    setDhowDescription(!showDescription);
  };

  return (
    <>
      <div className="accordion">
        {accordionData.map((data : any) => (
          <>
            {data.data.content.items.map((item,index) =>(
              <div className="main-accor" key={ item.id}>
                <div className="head-contact">
                  <h4>
                    <span>{index + 1}.</span>
                    {item.title}
                  </h4>
                  <button onClick={handleToggle}>
                    {showDescription ? (
                      <i>
                        <BiChevronDown />
                      </i>
                    ) : (
                      <i>
                        <BiChevronLeft />
                      </i>
                    )}
                  </button>
                </div>
                {showDescription && (
                  <>
                    <hr />
                    <p>{item.description}</p>
                  </>
                )}
              </div>
            ))}
          </>
        ))} 
      </div>
    </>
  );
};

export default Accordion;

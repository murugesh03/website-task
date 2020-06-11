import React, { useState } from "react";
import { GrYoga } from "react-icons/gr";
import { IoIosFitness } from "react-icons/io";
import { GiWeightLiftingDown } from "react-icons/gi";
import { RiRadio2Line } from "react-icons/ri";
import "./Tab.css";
import Yoga from "./Yoga";
import Fitness from "./Fitness";
import Dance from "./Dance";
import Pilates from "./Pilates";

const Tab = () => {
  const [active, setActive] = useState(1);

  const tabMapping = {
    1: <Yoga />,
    2: <Fitness />,
    3: <Dance />,
    4: <Pilates />,
  };

  return (
    <>
      <div className="container is-fluid">
        <div className="columns is-centered ">
          <div className="tabs is-toggle is-fullwidth is-large tab-list">
            <ul>
              <li
                className={active === 1 ? "isactive card-view-hover" : " "}
                onClick={() => setActive(1)}
              >
                <span className="card-view ">
                  <span className="icon icon-width card-view">
                    <GrYoga className="tab-icon" />
                  </span>
                  <span className="tab-text">Yoga</span>
                </span>
              </li>
              <li
                className={active === 2 ? "isactive card-view-hover" : " "}
                onClick={() => setActive(2)}
              >
                <span className="card-view ">
                  <span className="icon icon-width card-view">
                    <IoIosFitness className="tab-icon" />
                  </span>
                  <span className="tab-text">Fitness</span>
                </span>
              </li>
              <li
                className={active === 3 ? "isactive card-view-hover" : " "}
                onClick={() => setActive(3)}
              >
                <span className="card-view  ">
                  <span className="icon-width card-view">
                    <RiRadio2Line className="tab-icon" />
                  </span>
                  <span className="tab-text">Dance</span>
                </span>
              </li>
              <li
                className={active === 4 ? "isactive card-view-hover" : " "}
                onClick={() => setActive(4)}
              >
                <span className="card-view ">
                  <span className="icon-width card-view">
                    <GiWeightLiftingDown className="tab-icon" />
                  </span>
                  <span className="tab-text">Pilates</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {tabMapping[active]}
    </>
  );
};

export default Tab;

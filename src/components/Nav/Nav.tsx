import React, {useState} from "react";
import {NavLink, Link} from "react-router-dom";

import {CoffeeBeansLogo} from "../CoffeeBeansLogo/CoffeeBeansLogo";

interface INav {
  color: string;
}

const Nav: React.FC<INav> = ({color}) => {
  const [stateBurger, setStateBurger] = useState(false);

  const onBurger = () => {
    setStateBurger(stateBurger => !stateBurger);
  }

  const indentDown = {
    marginBottom: "200px",
    transition: "margin-bottom 0.1s",
  };

  const indentUp = {
    marginBottom: "0px",
    transition: "margin-bottom 0.1s",
  };

  return (
    <nav className="nav">
      <div className="container nav__container" style={stateBurger ? indentDown : indentUp}>
        <Link to="/"><CoffeeBeansLogo color={color} /></Link>
        <button className="burger-btn" onClick={onBurger}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={stateBurger ? "nav-list list-reset burger-list" : "nav-list" +
          " list-reset"}>
          <li className="nav-list__item">
            <NavLink to="/">Coffee house</NavLink>
          </li>
          <li className="nav-list__item">
            <NavLink to="/coffee">Our coffee</NavLink>
          </li>
          <li className="nav-list__item">
            <NavLink to="/goods">For your pleasure</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export {Nav};

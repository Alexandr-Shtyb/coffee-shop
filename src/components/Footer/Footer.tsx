import React from "react";

import {Nav} from "../Nav/Nav";
import {CoffeeBeans} from "../CoffeeBeans/CoffeeBeans";


const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <Nav color="#000"/>
        <CoffeeBeans color="#000"/>
      </div>
    </footer>
  );
}

export {Footer};

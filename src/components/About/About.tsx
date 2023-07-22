import React, {ReactNode} from "react";
import {CoffeeBeans} from "../CoffeeBeans/CoffeeBeans";

interface IAbout {
  src: string;
  header: string;
  text: ReactNode;
}

const About: React.FC<IAbout> = ({src, header, text}) => {
  return (
    <>
      <div className="about-cmp about-cmp-block">
        <div className="about-cmp__left left">
          <img src={src} alt="coffee"/>
        </div>
        <div className="about-cmp__right">
          <h2>{header}</h2>
          <CoffeeBeans color="#000"/>
          <div className="about-cmp__info">
            {text}
          </div>
        </div>
      </div>
      <hr className="separator"/>
    </>
  );
}

export {About};

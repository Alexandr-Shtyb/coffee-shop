import React from "react";
import {Link} from "react-router-dom";

interface ICard {
  id: number;
  src: string;
  name: string;
  country: string;
  price: string;
}

const Card: React.FC<ICard> = ({id, src, name, country, price}) => {
  return (
    <Link className="card-item card-item-block" to={`/coffee/${id}`}>
      <div className="card-item__block">
        <img src={src} alt="good"/>
        <div className="card-item__subblock">
          <h3>{name}</h3>
          {country ? <div className="card-item__country">{country}</div> : null}
          <div className="card-item__price">{price}</div>
        </div>
      </div>
    </Link>
  );
}

export {Card};

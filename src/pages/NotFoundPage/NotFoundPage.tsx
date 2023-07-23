import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <div className="container not-found__container">
        <button className="product-card__btn product-card-btn" onClick={() => navigate(-1)}>
          <span>❮</span>
          Back
        </button>
        <img className="not-found__img" src="/coffee-shop/img/404.svg" alt="error" />
      </div>
    </div>
  );
}

export {NotFoundPage};

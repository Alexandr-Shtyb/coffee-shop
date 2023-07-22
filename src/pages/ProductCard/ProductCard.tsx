import React, {FC} from "react";
import { useParams, useNavigate } from 'react-router-dom';

import {Nav} from "../../components/Nav/Nav";
import {Footer} from "../../components/Footer/Footer";
import {About} from "../../components/About/About";
import {NotFoundPage} from "../NotFoundPage/NotFoundPage";

interface IProductCard {
  data: JSX.Element[]
}

const ProductCard: FC<IProductCard> = ({data}) => {
  const { id } = useParams();
  const navigate = useNavigate();

  if (typeof data[Number(id) - 1] === "undefined") {
    return <NotFoundPage />;
  }

  const country = data[Number(id) - 1].props.country;
  const description = "Lorem ipsum dolor sit amet, consectetur adipisicing" +
    " elit. Ab deleniti est eveniet explicabo nulla omnis.";
  const price = data[Number(id) - 1].props.price;

  return (
    <>
      <div className="our-coffee-up">
        <Nav color="#fff"/>
        <h1>Our Coffee</h1>
      </div>

      <main>
        <section className="our-coffee">
          <div className="container our-coffee__container product-card">
            <div className="product-card__wrapper">
              <button className="product-card__btn product-card-btn" onClick={() => navigate(-1)}>
                <span>❮</span>
                Back
              </button>
              <About
                src="/img/product-card-img.jpg"
                header="About it"
                text={
                  <>
                    <div>
                      <span>Country</span>: {country}
                    </div>
                    <div>
                      <span>Description</span>: {description}
                    </div>
                    <div>
                      <span>Price</span>: <span>{price}</span>
                    </div>
                  </>
                }
              />
            </div>
          </div>
        </section>
      </main>

      <Footer/>
    </>
  );
}

export {ProductCard};

import React from "react";
import {Link} from "react-router-dom";

import {CoffeeBeans} from "../../components/CoffeeBeans/CoffeeBeans";
import {Footer} from "../../components/Footer/Footer";
import {Nav} from "../../components/Nav/Nav";
import {CardList} from "../../components/CardList/CardList";

interface IMain {
  data: JSX.Element[]
}

const Main: React.FC<IMain> = ({data}) => {
  return (
    <>
      <div className="app">
        <Nav color="#fff"/>

        <div className="hero">
          <div className="container hero__container">
            <h1>Everything You Love About Coffee</h1>
            <CoffeeBeans color="#fff"/>
            <div className="hero__descr">We makes every day full of energy and taste</div>
            <div className="hero__descr">Want to try our beans?</div>
            <div className="hero__link-wrapper">
              <Link className="hero__more-link" to="/coffee"><button>More</button></Link>
            </div>
          </div>
        </div>
      </div>

      <main className="main">
        <section className="about-us">
          <div className="container about-us__container">
            <div className="about">
              <h2>About Us</h2>
              <CoffeeBeans color="#000"/>
              <p>
                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                Afraid at highly months do things on at. Situation recommend objection do intention
                so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                met spot shy want. Children me laughing we prospect answered followed. At it went
                is song that held help face.
              </p>
              <p>
                Now residence dashwoods she excellent you. Shade being under his bed her, Much
                read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                horrible but confined day end marriage. Eagerness furniture set preserved far
                recommend. Did even but nor are most gave hope. Secure active living depend son
                repair day ladies now.
              </p>
            </div>
          </div>
        </section>

        <section className="best">
          <div className="container best__container">
            <h2>Our best</h2>
            <CardList data={data.slice(0, 3)} />
          </div>
        </section>
      </main>

      <Footer/>
    </>
  );
}

export {Main};

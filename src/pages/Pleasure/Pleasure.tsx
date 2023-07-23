import React from "react";

import {Nav} from "../../components/Nav/Nav";
import {About} from "../../components/About/About";
import {Footer} from "../../components/Footer/Footer";
import {CardList} from "../../components/CardList/CardList";

interface IPleasure {
  data: JSX.Element[]
}

const Pleasure: React.FC<IPleasure> = ({data}) => {
  return (
    <>
      <div className="our-coffee-up our-coffee-up-pleasure">
        <Nav color="#fff"/>
        <h1>For your pleasure</h1>
      </div>

      <main>
        <section className="our-coffee">
          <div className="container our-coffee__container">
            <About src="/coffee-shop/img/pleasure-about.jpg"
                   header="About our goods"
                   text=
                     {
                       <>
                         <p>
                           Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                         </p>
                         <p>
                           Afraid at highly months do things on at. Situation<br/> recommend objection do intention<br/>
                           so questions.<br/>
                           As greatly removed calling pleased improve an.<br/> Last ask him cold feel<br/>
                           met spot shy want. Children me laughing we<br/> prospect answered followed. At it went<br/>
                           is song that held help face.
                         </p>
                       </>
                     }
            />
          </div>
          <div className="container our-coffee__container-down">
            <CardList data={data} />
          </div>
        </section>
      </main>

      <Footer/>
    </>
  );
}

export {Pleasure};

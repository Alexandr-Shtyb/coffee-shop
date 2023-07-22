import React, { useEffect, useState } from "react";

import {Nav} from "../../components/Nav/Nav";
import {About} from "../../components/About/About";
import {Footer} from "../../components/Footer/Footer";
import {CardList} from "../../components/CardList/CardList";

interface IOurCoffee {
  data: JSX.Element[]
}

const OurCoffee: React.FC<IOurCoffee> = ({data}) => {
  const [activeTab, setActiveTab] = useState(-1);
  const [value, setValue] = useState("");
  const [dataArr, setDataArr] = useState(data);

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  const handleTabClick = (index: number) => {
    if (index === activeTab) {
      setActiveTab(-1);
    } else {
      setActiveTab(index);
    }
  };

  const countryFilter = (country: string) => {
    return data.filter(item => item.props.country === `${country}`);
  }

  const tabFilter = () => {
    switch (activeTab) {
      case 0:
        setDataArr(countryFilter("Brazil"));
        break;
      case 1:
        setDataArr(countryFilter("Kenya"));
        break;
      case 2:
        setDataArr(countryFilter("Columbia"));
        break;
      default:
        setDataArr(data);
    }
    setValue("");
  }

  const searchFilter = () => {
    setDataArr(() => {
      if (value.length === 0) {
        tabFilter();
        return data;
      } else {
        return dataArr.filter(item => item.props.name.toLowerCase().includes(value.toLowerCase()));
      }
    });
  }

  useEffect(() => {
    tabFilter();
  }, [activeTab]);

  useEffect(() => {
    searchFilter();
  }, [value]);

  return (
    <>
      <div className="our-coffee-up">
        <Nav color="#fff"/>
        <h1>Our Coffee</h1>
      </div>

      <main>
        <section className="our-coffee">
          <div className="container our-coffee__container">
            <About src="img/our-coffee-about.jpg"
                   header="About our beans"
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
            <div className="filter">
              <div className="filter__left">
                <label className="filter__label label-sort" htmlFor="search">Looking for</label>
                <input id="search" type="text" value={value}
                       onChange={(e) => handleChange(e)} placeholder="start typing here..."/>
              </div>
              <div className="filter__right">
                <label className="filter__label label-tabs">Or filter</label>
                <button className={activeTab === 0 ? "tab" +
                  " active-tab" : "tab"} onClick={() => handleTabClick(0)}>Brazil</button>
                <button className={activeTab === 1 ? "tab" +
                  " active-tab" : "tab"} onClick={() => handleTabClick(1)}>Kenya</button>
                <button className={activeTab === 2 ? "tab" +
                  " active-tab" : "tab"} onClick={() => handleTabClick(2)}>Columbia</button>
              </div>
            </div>
            <CardList data={dataArr} />
          </div>
        </section>
      </main>

      <Footer/>
    </>
  );
}

export {OurCoffee};

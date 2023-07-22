import React from 'react';
import { Routes, Route } from "react-router-dom";

import {Card} from "./components/Card/Card";
import {Main} from "./pages/Main/Main";
import {OurCoffee} from "./pages/OurCoffee/OurCoffee";
import {Pleasure} from "./pages/Pleasure/Pleasure";
import {ProductCard} from "./pages/ProductCard/ProductCard";
import {NotFoundPage} from "./pages/NotFoundPage/NotFoundPage";


function App() {
  const data = [
    <Card id={1} src="img/best-good-1.jpg" name="Solimo Coffee Beans 2 kg" country="Brazil" price="10.73$" />,
    <Card id={2} src="img/best-good-2.jpg" name="Presto Coffee Beans 1 kg" country="Columbia" price="15.20$" />,
    <Card id={3} src="img/best-good-3.jpg" name="AROMISTICO Coffee 1 kg" country="Kenya" price="10.99$" />,
    <Card id={4} src="img/best-good-3.jpg" name="Americano Coffee 1 kg" country="Brazil" price="8.85$"/>,
    <Card id={5} src="img/best-good-3.jpg" name="AROMISTICO Coffee 1 kg" country="Columbia" price="11.55$"/>,
    <Card id={6} src="img/best-good-3.jpg" name="Americano Coffee 1 kg" country="Brazil" price="6.99$"/>
  ];

  return (
    <>
      <Routes>
        <Route path="/" element={<Main data={data} />} />
        <Route path="/coffee" element={<OurCoffee data={data} />} />
        <Route path="/goods" element={<Pleasure data={data} />} />
        <Route path="/coffee/:id" element={<ProductCard data={data} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export {App};

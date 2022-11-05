import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Card from "./components/Card.jsx";
import data from "./cardsData.jsx";

export default function App() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        // item={item}
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
        openSpots={item.openSpots}
      />
    );
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
}

import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import Card from "./card";
import "../../styles/carousel.css";

const imagecharacters = {
  1: "https://starwars-visualguide.com/assets/img/characters/1.jpg",
  2: "https://starwars-visualguide.com/assets/img/characters/2.jpg",
  3: "https://starwars-visualguide.com/assets/img/characters/3.jpg",
  4: "https://starwars-visualguide.com/assets/img/characters/4.jpg",
  5: "https://starwars-visualguide.com/assets/img/characters/5.jpg",
  6: "https://starwars-visualguide.com/assets/img/characters/6.jpg",
  7: "https://starwars-visualguide.com/assets/img/characters/7.jpg",
  8: "https://starwars-visualguide.com/assets/img/characters/8.jpg",
  9: "https://starwars-visualguide.com/assets/img/characters/9.jpg",
  10: "https://starwars-visualguide.com/assets/img/characters/10.jpg",
};
const imageplanets = {
  1: "https://starwars-visualguide.com/assets/img/planets/12.jpg",
  2: "https://starwars-visualguide.com/assets/img/planets/2.jpg",
  3: "https://starwars-visualguide.com/assets/img/planets/3.jpg",
  4: "https://starwars-visualguide.com/assets/img/planets/4.jpg",
  5: "https://starwars-visualguide.com/assets/img/planets/5.jpg",
  6: "https://starwars-visualguide.com/assets/img/planets/6.jpg",
  7: "https://starwars-visualguide.com/assets/img/planets/7.jpg",
  8: "https://starwars-visualguide.com/assets/img/planets/8.jpg",
  9: "https://starwars-visualguide.com/assets/img/planets/9.jpg",
  10: "https://starwars-visualguide.com/assets/img/planets/10.jpg",
};
const imageVh = {
  1: "https://starwars-visualguide.com/assets/img/vehicles/4.jpg",
  2: "https://starwars-visualguide.com/assets/img/vehicles/7.jpg",
  3: "https://starwars-visualguide.com/assets/img/vehicles/6.jpg",
  4: "https://starwars-visualguide.com/assets/img/vehicles/8.jpg",
  5: "https://starwars-visualguide.com/assets/img/vehicles/6.jpg",
  6: "https://starwars-visualguide.com/assets/img/vehicles/6.jpg",
  7: "https://starwars-visualguide.com/assets/img/vehicles/6.jpg",
  8: "https://starwars-visualguide.com/assets/img/vehicles/6.jpg",
  9: "https://starwars-visualguide.com/assets/img/vehicles/6.jpg",
  10: "https://starwars-visualguide.com/assets/img/vehicles/6.jpg",
};

const Carousel = () => {
  const { store } = useContext(Context);
  const { chars } = store;
  const { planets, vehicles } = store;
  return (
    <div>
      <div className="carousel mt-3 mb-3">
        {chars.map((character) => (
          <Card
            key={character.uid}
            character={character}
            imageUrl={imagecharacters[character.uid]}
          />
        ))}
      </div>
      <div className="carousel mt-3 mb-3">
        {planets.map((character) => (
          <Card
            key={character.uid}
            character={character}
            imageUrl={imageplanets[character.uid]}
          />
        ))}
      </div>
      <div className="carousel mt-3 mb-3">
        {vehicles.map((character) => (
          <Card
            key={character.uid}
            character={character}
            imageUrl={imageVh[character.uid]}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

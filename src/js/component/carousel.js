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
  1: "https://starwars-visualguide.com/assets/img/planets/16.jpg",
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
  4: "https://starwars-visualguide.com/assets/img/vehicles/4.jpg",
  7: "https://starwars-visualguide.com/assets/img/vehicles/7.jpg",
  6: "https://starwars-visualguide.com/assets/img/vehicles/6.jpg",
  8: "https://starwars-visualguide.com/assets/img/vehicles/8.jpg",
  14: "https://starwars-visualguide.com/assets/img/vehicles/14.jpg",
  18: "https://starwars-visualguide.com/assets/img/vehicles/18.jpg",
  16: "https://starwars-visualguide.com/assets/img/vehicles/16.jpg",
  19: "https://starwars-visualguide.com/assets/img/vehicles/19.jpg",
  20: "https://starwars-visualguide.com/assets/img/vehicles/20.jpg",
  24: "https://starwars-visualguide.com/assets/img/vehicles/24.jpg",
};

const Carousel = () => {
  const { store } = useContext(Context);
  const { chars, planets, vehicles } = store;
  
  return (
    <div className= "m-3">
      <div className="carousel mt-3 mb-3">
        {chars.map((character) => (
          <Card
            key={character.uid}
            character={character}
            imageUrl={imagecharacters[character.uid]}
            type="character"
          />
        ))}
      </div>
      <div className="carousel mt-3 mb-3">
        {planets.map((character) => (
          <Card
            key={character.uid}
            character={character}
            imageUrl={imageplanets[character.uid]}
            type="planet"
          />
        ))}
      </div>
      <div className="carousel mt-3 mb-3">
        {vehicles.map((character) => (
          <Card
            key={character.uid}
            character={character}
            imageUrl={imageVh[character.uid]}
            type="vehicle"
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

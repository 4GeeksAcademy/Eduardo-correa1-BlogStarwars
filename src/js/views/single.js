import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = () => {
	const { store } = useContext(Context);
	const { type, theid } = useParams();
	const [item, setItem] = useState(null);
	const [imageUrl, setImageUrl] = useState("");
  
	useEffect(() => {
	  let selectedItem;
	  let image;
  
	  if (type === "character") {
		selectedItem = store.chars.find((char) => char.uid === theid);
		image = `https://starwars-visualguide.com/assets/img/characters/${theid}.jpg`;
	  } else if (type === "planet") {
		selectedItem = store.planets.find((planet) => planet.uid === theid);
		image = `https://starwars-visualguide.com/assets/img/planets/${theid}.jpg`;
	  } else if (type === "vehicle") {
		selectedItem = store.vehicles.find((vehicle) => vehicle.uid === theid);
		image = `https://starwars-visualguide.com/assets/img/vehicles/${theid}.jpg`;
	  }
  
	  setItem(selectedItem);
	  setImageUrl(image);
	}, [type, theid, store.chars, store.planets, store.vehicles]);
  
	if (!item) {
	  return <div>Loading...</div>;
	}
  
	return (
	  <div className="single">
		<img src={imageUrl} alt={item.name} />
		<h1>{item.name}</h1>
		<p>UID: {item.uid}</p>
		{/* Añadir más detalles del item según sea necesario */}
	  </div>
	);
  };
  

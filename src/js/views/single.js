import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = () => {
	const { store, actions } = useContext(Context);
	const { type, theid } = useParams();
	const [item, setItem] = useState(null);
	const [imageUrl, setImageUrl] = useState("");
  
	useEffect(() => {
		const fetchData = async () => {
		  let data = null;
		  let image;
	
		  if (type === "character") {
			data = await actions.loadSingleChar(theid);
			image = `https://starwars-visualguide.com/assets/img/characters/${theid}.jpg`;
		  } else if (type === "planet") {
			data = await actions.loadSinglePlanet(theid);
			image = `https://starwars-visualguide.com/assets/img/planets/${theid}.jpg`;
		  } else if (type === "vehicle") {
			data = await actions.loadSingleVehicle(theid);
			image = `https://starwars-visualguide.com/assets/img/vehicles/${theid}.jpg`;
		  }
	
		  if (data) {
			setItem(data);
			setImageUrl(image);
		  }
		};
	
		fetchData();
	  }, []);
	
	  if (!item) {
		return <div>Loading...</div>;
	  }
	
	  return (
		<div className="card">
		  <div className="single">
			<img src={imageUrl} alt={item.properties.name} />
			<h1>{item.properties.name}</h1>
			<p>Gender {item.properties.gender}</p>
			<p>Description: {item.description}</p>
			{/* Añadir más detalles */}
		  </div>
		</div>  
	  );
	};
  

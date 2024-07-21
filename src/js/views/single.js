import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/single.css";

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

            console.log('Fetched data:', data);
            if (data) {
                setItem(data);
                setImageUrl(image);
            } else {
                console.error('Error: No data found or data is null');
            }
        };

        fetchData();
    }, [type, theid]);

    if (!item) {
        return <div>Loading...</div>;
    }

    return (
        <div className="card">
            <div className="single">
                <img className="single-image" src={imageUrl} alt={item.properties.name} />
                <div className="single-info">
                    <h1>{item.properties.name}</h1>
                    <p>Description: {item.description}</p>
                    <div className="single-details">
                        {type === "character" && (
                            <>
                                <div className="single-detail"><strong>Name:</strong> {item.properties.name}</div>
                                <div className="single-detail"><strong>Birth Year:</strong> {item.properties.birth_year}</div>
                                <div className="single-detail"><strong>Gender:</strong> {item.properties.gender}</div>
                                <div className="single-detail"><strong>Height:</strong> {item.properties.height}</div>
                                <div className="single-detail"><strong>Skin Color:</strong> {item.properties.skin_color}</div>
                                <div className="single-detail"><strong>Eye Color:</strong> {item.properties.eye_color}</div>
                            </>
                        )}
                        {type === "planet" && (
                            <>
                                <div className="single-detail"><strong>Name:</strong> {item.properties.name}</div>
                                <div className="single-detail"><strong>Climate:</strong> {item.properties.climate}</div>
                                <div className="single-detail"><strong>Population:</strong> {item.properties.population}</div>
                                <div className="single-detail"><strong>Orbital Period:</strong> {item.properties.orbital_period}</div>
                                <div className="single-detail"><strong>Rotation Period:</strong> {item.properties.rotation_period}</div>
                                <div className="single-detail"><strong>Diameter:</strong> {item.properties.diameter}</div>
                            </>
                        )}
                        {type === "vehicle" && (
                            <>
                                <div className="single-detail"><strong>Name:</strong> {item.properties.name}</div>
                                <div className="single-detail"><strong>Cargo Capacity:</strong> {item.properties.cargo_capacity}</div>
                                <div className="single-detail"><strong>Consumables:</strong> {item.properties.consumables}</div>
                                <div className="single-detail"><strong>Max Speed:</strong> {item.properties.max_atmosphering_speed}</div>
                                <div className="single-detail"><strong>Passengers:</strong> {item.properties.passengers}</div>
                                <div className="single-detail"><strong>Vehicle Class:</strong> {item.properties.vehicle_class}</div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

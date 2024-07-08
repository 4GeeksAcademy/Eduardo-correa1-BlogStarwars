import React from "react";
import { Link } from "react-router-dom";

const Card = ({character, imageUrl, type}) => {
    return (
        <div className="card">
            <img src={imageUrl} alt={character.name} />
            <h2>{character.name}</h2>
            <div className="pie">
            <Link to={`/single/${type}/${character.uid}`}>
                <button className="btn btn-dark">Read more</button>
            </Link>
            <div>
            <i className="fa-regular fa-heart m-3"></i>
            </div>
            </div>
        </div>
    );
};

export default Card

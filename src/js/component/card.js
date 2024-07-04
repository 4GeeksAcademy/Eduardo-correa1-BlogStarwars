import React from "react";

const Card = ({character, imageUrl}) => {
    return (
        <div className="card">
            <img src={imageUrl} alt={character.name} />
            <h2>{character.name}</h2>
            <p>UID: {character.uid}</p>
            

        </div>
    );
};

export default Card

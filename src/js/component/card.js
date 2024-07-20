import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Card = ({character, imageUrl, type}) => {
    const { store, actions } = useContext(Context);
    const uniqueId = `${type}-${character.uid}`;
    const isFavorite = store.favorites.some(fav => fav.uniqueId === uniqueId);

    const handleFavorite = () => {
        if (isFavorite) {
            actions.removeFavorite(uniqueId);
        } else {
            actions.addFavorite({ ...character, type });
        }
    };

    return (
        <div className="card">
            <img src={imageUrl} alt={character.name} />
            <h2>{character.name}</h2>
            <div className="pie">
            <Link to={`/single/${type}/${character.uid}`}>
                <button className="btn btn-dark">Read more</button>
            </Link>
            <div onClick={handleFavorite}>
            <i className={`fa-heart m-3 ${isFavorite ? 'fa fa-solid fa-heart' : 'fa fa-regular fa-heart'} favorite-icon`}></i>
            </div>
            </div>
        </div>
    );
};

export default Card

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/nav.css";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-black mb-3">
			<Link to="/">
				<img className="m-3" src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254" />
			</Link>
			<div className="ml-auto">				
			<div className="dropdown">
  <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    FAVORITES
  </button>
  <ul className="dropdown-menu dropdown-menu-end">
                    {store.favorites.length > 0 ? (
                        store.favorites.map(fav => (
                            <li key={fav.uniqueId} className="dropdown-item d-flex justify-content-between align-items-center">
                                <Link to={`/single/${fav.type}/${fav.uid}`}>{fav.name}</Link>
                                <button className="btn btn-danger btn-sm" onClick={() => actions.removeFavorite(fav.uniqueId)}>
                                    <i className="fa fa-trash"></i>
                                </button>
                            </li>
                        ))
                    ) : (
                        <li className="dropdown-item">No favorites added</li>
                    )}
                </ul>
  
</div>				
			</div>
		</nav>
	);
};

import React from "react";
import { Link } from "react-router-dom";
import "../../styles/nav.css";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-black mb-3">
			<Link to="/">
				<img className="m-3" src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254" />
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary m-3">Favorites</button>
				</Link>
			</div>
		</nav>
	);
};

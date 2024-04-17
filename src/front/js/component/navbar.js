import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo_acciona.png"

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="d-flex justify-content-between align-items-center w-100 px-3">
				<Link to="/">
					<img className="navbar-brand mb-0 " src={Logo} style={{width: '10%'}}/>
				</Link>
				<div className="">
					<Link to="/demo">
						<button className="btn ">Example button</button>
					</Link>
					<Link to="/single">
						<button className="btn ">Another button</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};

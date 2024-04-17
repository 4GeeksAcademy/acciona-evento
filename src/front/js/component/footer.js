import React, { Component } from "react";
import logo from "../../img/logo_acciona.png"
export const Footer = () => (
	<footer className="d-flex flex-wrap justify-content-between align-items-center py-3 px-3 my-4 border-top">
		<div className="col-md-4 d-flex ">
			<a href="/" className="mb-3  mb-md-0 text-muted text-decoration-none">
				<img src={logo} style={{ width: "10%" }} />
			</a>
		</div>
			<span className="col-md-2 mb-3 mb-md-0 text-muted w-25 text-center">© 2024 Company, Inc</span>

		<ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
			<li className="ms-3"><a className="text-muted" href="#"><i className="fa-brands fa-twitter"></i></a></li>
			<li className="ms-3"><a className="text-muted" href="#"><i className="fa-brands fa-facebook"></i></a></li>
			<li className="ms-3"><a className="text-muted" href="#"><i className="fa-brands fa-instagram"></i></a></li>
		</ul>
	</footer>
);

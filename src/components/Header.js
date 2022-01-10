import React from "react";
import { Link } from "react-router-dom";
import "../assets/scss/elements/header.scss";
function Header() {
	return (
		<div className="header container flex flex-ai-c flex-jc-sb">
			<div></div>
			<div>
				<ul className="flex">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/portfolio">Portfolio</Link>
					</li>

					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}
export default Header;

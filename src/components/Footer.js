import React from "react";
import { Link } from "react-router-dom";
import "../assets/scss/elements/footer.scss";
function Footer() {
	return (
		<div className="footer t-c">
			<div className="container">
				<ul>
					<li>
						<a href="https://www.linkedin.com/company/thegenmoney/" target="blank">
							<i class="fab fa-linkedin-in"></i>
						</a>
					</li>
					<li>
						<a href="https://www.instagram.com/genmoneyhq/" target="blank">
							<i class="fab fa-facebook"></i>
						</a>
					</li>
					<li>
						<a href="https://www.instagram.com/genmoneyhq/" target="blank">
							<i class="fab fa-twitter"></i>
						</a>
					</li>
					<li>
						<a href="https://www.instagram.com/genmoneyhq/" target="blank">
							<i class="fab fa-instagram"></i>
						</a>
					</li>
					<li>
						<a href="http://community.gen.money/" target="_blank" rel="noreferrer">
							<i class="fab fa-github"></i>
						</a>
					</li>
				</ul>
				<ul className="flex footer_page--link">
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

			<div className="copyright">
				<small className="t-c" style={{ padding: "2rem 0" }}>
					Copyright © Paul Adebiyi, 2022. All rights reserved.
				</small>
			</div>
		</div>
	);
}
export default Footer;

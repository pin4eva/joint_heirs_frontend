/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";
import { navData } from "../shearing/navData";

function NavbarComp() {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	return (
		<nav className="navbar">
			<div className="container nav-holder">
				<div className="text-center d-flex">
					<img src="/images/logo.png" alt="" />
					<h5 className="text-start mb-0 text-light ms-2">
						Joint Heirs Assembly <br /> International
					</h5>
				</div>
				<ul className={click ? "nav active" : "nav"}>
					{navData.map((nav, i) => (
						<li className="nav-item" key={i}>
							<Link href={nav.link}>
								<a className="nav-link fw-500" onClick={closeMobileMenu}>
									{nav.name}
								</a>
							</Link>
						</li>
					))}
				</ul>
				<div className="nav-active">
					<Link href="/">JOIN US</Link>
				</div>
			</div>
			<div className="menu-icon" onClick={handleClick}>
				<i className={click ? "fas fa-times" : "fas fa-bars"} />
			</div>
		</nav>
	);
}

export default NavbarComp;

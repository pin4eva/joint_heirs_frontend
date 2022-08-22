/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";

const HeaderComp = () => {
	const [open, setOpen] = useState(false);

	return (
		<header>
			<nav className="navbar">
				<div className="container nav-inner">
					<Link href="/">
						<a className="d-flex logo">
							<img src="/images/logo.png" alt="" />
							<span className=" mb-0 ">Joint Heirs Assembly International</span>
						</a>
					</Link>

					<ul className={open ? "nav active" : "nav"}>
						{navList.map((nav, i) => (
							<li className="nav-item" key={i}>
								<Link href={nav.link}>
									<a className="nav-link fw-500" onClick={() => setOpen(false)}>
										{nav.name}
									</a>
								</Link>
							</li>
						))}
					</ul>
					<div className="nav-active">
						<Link href="/">JOIN US</Link>
					</div>
					<div className="menu-icon" onClick={() => setOpen(!open)}>
						<i className={open ? "fas fa-times" : "fas fa-bars"} />
					</div>
				</div>
			</nav>
			{/* <HomePageComp /> */}
		</header>
	);
};

export default HeaderComp;

export const navList = [
	{ name: "Home", link: "/" },
	{ name: "SERMON", link: "/sermon/SermonsPage" },
	{ name: "BRANCHES", link: "/branch/OurBranch" },
	{ name: "ABOUT", link: "/about/About" },
	{ name: "CONTACT", link: "/contact" },
];

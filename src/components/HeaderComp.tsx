/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const HeaderComp = () => {
	const [open, setOpen] = useState(false);
	const router = useRouter();
	return (
		<header className="app-header">
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
									<a
										className={`nav-link fw-500 text-uppercase ${
											router.pathname === nav.link ? "active" : ""
										}`}
										onClick={() => setOpen(false)}
									>
										{nav.name}
									</a>
								</Link>
							</li>
						))}
						<div className="nav-active" onClick={() => setOpen(false)}>
							<Link href="/">JOIN US</Link>
						</div>
					</ul>
					<div className="menu-icon" onClick={() => setOpen(!open)}>
						<i className={open ? "fas fa-times" : "fas fa-bars"} />
					</div>
				</div>
			</nav>
		</header>
	);
};

export default HeaderComp;

export const navList = [
	{ name: "Home", link: "/" },
	{ name: "Sermon", link: "/sermons" },
	{ name: "Events", link: "/events" },
	{ name: "Branches", link: "/branches" },
	{ name: "About", link: "/about" },
	{ name: "Contact", link: "/contact" },
];

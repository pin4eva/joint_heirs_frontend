/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import ClickAwayListener from "react-click-away-listener";

const HeaderComp = () => {
	const [open, setOpen] = useState(false);
	const router = useRouter();
	const handleClickAway = () => {
		setOpen(false);
	};
	return (
		<header className="app-header">
			<ClickAwayListener onClickAway={handleClickAway}>
				<nav className="navbar">
					<div className="container nav-inner">
						<Link href="/" className="d-flex logo">
							<img src="/images/logo.png" alt="" />
							<span className=" mb-0 ">Joint Heirs Assembly International</span>
						</Link>

						<ul className={open ? "nav active" : "nav"}>
							{filteredNavList.map((nav, i) => (
								<li className="nav-item" key={i}>
									<Link
										href={nav.link}
										className={`nav-link fw-500 text-uppercase ${
											router.pathname === nav.link ? "active" : ""
										}`}
										onClick={() => setOpen(false)}
									>
										{nav.name}
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
			</ClickAwayListener>
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

const filteredNavList = navList.filter((item) => item.name !== "About" && item.name !== "Contact");

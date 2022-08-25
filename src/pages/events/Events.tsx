import Link from "next/link";
import React, { useState } from "react";
import HeaderComp from "../../components/HeaderComp";
import FrontLayout from "../../layouts/FrontLayout";

const Events = () => {
	const activeLink = {
		general: false,
		childrenEvents: false,
		men: false,
		women: false,
		youth: false,
	};
	const [currentLink, setCurrentLink] = useState({
		general: false,
		childrenEvents: false,
		men: false,
		women: false,
		youth: false,
	});
	const generalEventsHandler = () => {
		setCurrentLink({ ...activeLink, general: true });
	};
	const childrenEventsHandler = () => {
		setCurrentLink({ ...activeLink, childrenEvents: true });
	};
	const menEventsHandler = () => {
		setCurrentLink({ ...activeLink, men: true });
	};
	const womenEventsHandler = () => {
		setCurrentLink({ ...activeLink, women: true });
	};
	const youthEventsHandler = () => {
		setCurrentLink({ ...activeLink, youth: true });
	};
	return (
		<FrontLayout showHeader={false}>
			<div className="events">
				<section className="events-hero">
					<HeaderComp />
					<div className="container events-hero-inner">
						<h1>Our Annual Events</h1>
						<h4>Joint Heirs Assembly...</h4>
					</div>
				</section>
				<section className="events-content">
					<nav className="events-content-nav">
						<ul className="container">
							<Link href="/events/Events">
								<a className={`event-navlink ${currentLink.general && "active"}`}>
									<li onClick={generalEventsHandler}>General</li>
								</a>
							</Link>
							<Link href="/events/Events">
								<a className={`event-navlink ${currentLink.childrenEvents && "active"}`}>
									<li onClick={childrenEventsHandler}>Children</li>
								</a>
							</Link>
							<Link href="/events/Events">
								<a className={`event-navlink ${currentLink.men && "active"}`}>
									<li onClick={menEventsHandler}>Men</li>
								</a>
							</Link>
							<Link href="/events/Events">
								<a className={`event-navlink ${currentLink.women && "active"}`}>
									<li onClick={womenEventsHandler}>Women</li>
								</a>
							</Link>
							<Link href="/events/Events">
								<a className={`event-navlink ${currentLink.youth && "active"}`}>
									<li onClick={youthEventsHandler}>Youth</li>
								</a>
							</Link>
						</ul>
					</nav>
				</section>
				{currentLink.general && <p>general selected</p>}
				{currentLink.childrenEvents && <p>children selected</p>}
				{currentLink.men && <p>men selected</p>}
				{currentLink.women && <p>women selected</p>}
				{currentLink.youth && <p>youth selected</p>}
			</div>
		</FrontLayout>
	);
};

export default Events;
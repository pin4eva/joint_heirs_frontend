/* eslint-disable @next/next/no-img-element */
import { events } from "components/events/event.data";
import EventCard from "components/events/EventCard";
import Link from "next/link";
import React, { useState } from "react";
import HeaderComp from "../../components/HeaderComp";
// import FrontLayout from "../../layouts/FrontLayout";

const EventsPage = () => {
	const activeLink = {
		general: false,
		childrenEvents: false,
		men: false,
		women: false,
		youth: false,
	};
	const [currentLink, setCurrentLink] = useState({
		general: true,
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
		// <FrontLayout showHeader={false}>
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
						<Link href="/events">
							<a className={`event-navlink ${currentLink.general && "active"}`}>
								<li onClick={generalEventsHandler}>General</li>
							</a>
						</Link>
						<Link href="/events">
							<a className={`event-navlink ${currentLink.childrenEvents && "active"}`}>
								<li onClick={childrenEventsHandler}>Children</li>
							</a>
						</Link>
						<Link href="/events">
							<a className={`event-navlink ${currentLink.men && "active"}`}>
								<li onClick={menEventsHandler}>Men</li>
							</a>
						</Link>
						<Link href="/events">
							<a className={`event-navlink ${currentLink.women && "active"}`}>
								<li onClick={womenEventsHandler}>Women</li>
							</a>
						</Link>
						<Link href="/events">
							<a className={`event-navlink ${currentLink.youth && "active"}`}>
								<li onClick={youthEventsHandler}>Youth</li>
							</a>
						</Link>
					</ul>
				</nav>
				<div className="events-content-cards container">
					{currentLink.general &&
						events.map((item, i) => {
							return <EventCard key={i} event={item} />;
						})}
					{currentLink.childrenEvents &&
						events
							.filter((item) => item.category === "children")
							.map((item, i) => {
								return <EventCard key={i} event={item} />;
							})}
					{currentLink.men &&
						events
							.filter((item) => item.category === "men")
							.map((item, i) => {
								return <EventCard key={i} event={item} />;
							})}
					{/* {currentLink.women &&
						events
							.filter((item) => item.category === "women")
							.map((item, i) => {
								return <EventCard key={i} event={item} />;
							})} */}
					{currentLink.women && (
						<p className="fallback-text">THERE ARE NO UPCOMING EVENTS FOR WOMEN</p>
					)}
					{currentLink.youth &&
						events
							.filter((item) => item.category === "youth")
							.map((item, i) => {
								return <EventCard key={i} event={item} />;
							})}
				</div>
			</section>
			<section className="events-location">
				<div className="events-location-inner">
					<div className="events-location-text">
						<h3 className="rochester">Our Location</h3>
						<h3>Plan a Visit</h3>
						<p>
							Aliquam fringilla, turpis et tempor molestie, urna nunc commodo ex, et finibus diam
							magna a ut tempus odio. In dictum tmetus. Proin ut tempus odio. In dictum tincidunt
							egestm elit, in commodo sem pretium eu.tmetus. Proin ut tempus odio. In dictum
							tincidunt egestm elit, in commodo sem pretium e
						</p>
						<div className="location-info">
							<div className="address">
								<img src="/images/location.png" alt="" />
								<div className="address-text">
									<p>Address:</p>
									<p>23, Aggrey Road, Aba Port Harcourt, Rivers State.</p>
								</div>
							</div>
							<div className="time">
								<img src="/images/location.png" alt="" />
								<div className="time-text">
									<p>Service Time</p>
									<p>Saturdays - 5:30 pm </p>
									<p>Sundays - 9:00 & 10:30 am</p>
								</div>
							</div>
						</div>
					</div>
					<div className="events-location-map"></div>
				</div>
				{/* <img src="/images/events-location-img.png" alt="" /> */}
			</section>
		</div>
		// </FrontLayout>
	);
};

export default EventsPage;
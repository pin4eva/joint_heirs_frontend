/* eslint-disable @next/next/no-img-element */
import { events } from "components/events/event.data";
import EventCard from "components/events/EventCard";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import FrontLayout from "../../layouts/FrontLayout";

const EventsPage = () => {
	const router = useRouter();
	const activeTab = router.query?.tab || ("General" as string | undefined);

	const categoriesObj = new Set(events.map((event) => event.category));

	const tabItems = ["General", ...Array.from(categoriesObj)];
	const stateEvents = useMemo(() => {
		if (activeTab === "General") return events;
		else return events.filter((event) => event.category === String(activeTab)?.toLowerCase());
	}, [activeTab]);

	return (
		<FrontLayout title="Events">
			<div className="events">
				<section className="events-hero">
					<div className="container events-hero-inner">
						<h1>Our Annual Events</h1>
						<h4 className="rochester">Joint Heirs Assembly...</h4>
					</div>
				</section>
				<section className="events-content">
					<nav className="events-content-nav">
						<ul className="container">
							{tabItems.map((tab) => (
								<TabNav key={tab} isActive={Boolean(activeTab === tab)} tab={tab} />
							))}
						</ul>
					</nav>
					<div className="events-content-cards container">
						{stateEvents.length > 0 ? (
							stateEvents?.map((item, i) => <EventCard key={i} event={item} />)
						) : (
							<p className="fallback-text text-uppercase">
								THERE ARE NO UPCOMING EVENTS FOR {activeTab}
							</p>
						)}
					</div>
				</section>
				<section className="events-location">
					<div className="events-location-inner container">
						<div className="events-location-inner_text">
							<h3 className="rochester text-warning">Our Location</h3>
							<h3 className="inner-text-heading">Plan a Visit</h3>
							<p className="text-dark">
								Aliquam fringilla, turpis et tempor molestie, urna nunc commodo ex, et finibus diam
								magna a ut tempus odio. In dictum tmetus. Proin ut tempus odio. In dictum tincidunt
								egestm elit, in commodo sem pretium eu.tmetus. Proin ut tempus odio. In dictum
								tincidunt egestm elit, in commodo sem pretium e
							</p>
							<div className="location-info">
								<div className="address">
									<img src="/images/location.png" alt="" />
									<div className="info-text">
										<h6>Address:</h6>
										<p>
											23, Ordu Avenue Rumuodara, Off Power Encounter East West road, <br /> Port
											Harcourt, Rivers State.
										</p>
									</div>
								</div>
								<div className="time">
									<img src="/images/location.png" alt="" />
									<div className="info-text">
										<h6>Service Time:</h6>
										<p>Saturdays - 5:30 pm </p>
										<p>Sundays - 9:00 & 10:30 am</p>
									</div>
								</div>
							</div>
						</div>
						<div className="events-location-inner_map">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248.4652530003385!2d7.034835007340241!3d4.865018300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069d27198c56a95%3A0x4bf2d3ebd3c1a2dd!2sJoint%20Heirs%20Assembly%20Int&#39;l%20Inc.!5e0!3m2!1sen!2sng!4v1661352144829!5m2!1sen!2sng"
								width="100%"
								height="100%"
								loading="lazy"
							/>
						</div>
						<img src="/images/events-location-img.png" alt="" className="circle-img" />
					</div>
				</section>
			</div>
		</FrontLayout>
	);
};

export default EventsPage;

const TabNav: React.FC<{ isActive: boolean; tab: string }> = ({ isActive, tab }) => {
	return (
		<li>
			<Link
				href={`/events?tab=${tab}`}
				className={`event-navlink text-capitalize ${isActive ? "active" : ""}`}
			>
				{tab}
			</Link>
		</li>
	);
};

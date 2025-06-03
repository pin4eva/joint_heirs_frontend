/* eslint-disable @next/next/no-img-element */
import EventContent from "components/events/EventContent";
import { Metadata } from "next";
import { generatePageMetadata } from "utils/metadata";
import { Suspense } from "react";

export const metadata: Metadata = generatePageMetadata("Events - Joint Heirs Assembly");

const EventsPage = () => {
	return (
		<section className="events">
			<div className="events-hero">
				<div className="container events-hero-inner">
					<h1>Our Annual Events</h1>
					<h4 className="rochester">Joint Heirs Assembly...</h4>
				</div>
			</div>
			<div className="events-content">
				<Suspense fallback={<div className="container text-center py-5">Loading events...</div>}>
					<EventContent />
				</Suspense>
			</div>
			<section className="events-location">
				<div className="events-location-inner container">
					<div className="events-location-inner_text">
						<h3 className="rochester text-warning">Our Location</h3>
						<h3 className="inner-text-heading">Plan a Visit</h3>
						<p className="text-dark">
							Come worship with us at Joint Heirs Assembly! Experience powerful fellowship,
							inspiring messages, and a warm community that welcomes everyone seeking spiritual
							growth and connection.
						</p>
						<div className="location-info">
							<div className="address">
								<img src="/images/location.png" alt="" />
								<div className="info-text">
									<h6>Address:</h6>
									<p>
										23, Ordu Avenue ELiowhani <br /> Port Harcourt, Rivers State.
									</p>
								</div>
							</div>
							<div className="time">
								<img src="/images/location.png" alt="" />
								<div className="info-text">
									<h6>Service Time:</h6>
									<p>Thursdays - 5:00 pm </p>
									<p>Sundays - 9:00am</p>
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
		</section>
	);
};

export default EventsPage;

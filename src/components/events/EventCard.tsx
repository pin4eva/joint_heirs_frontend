import React from "react";
import Link from "next/link";
import { IEvent } from "interfaces/event.interface";

const EventCard: React.FC<{ event: IEvent }> = ({ event }) => {
	return (
		<div className="event-card" style={{ backgroundImage: `url(${event.image})` }}>
			<div className="event-card-content">
				<small className="text-secondary  mt-4">{event?.startDate as string}</small>
				<h4 className="text-dark fs-5 mb-4">{event?.title}</h4>
				<div className="content-box">
					<p className="text-secondary mb-3">{event?.description}</p>
					<Link href="/" className="mb-4 mt-2">
						Read More
					</Link>
				</div>
			</div>
		</div>
	);
};

export default EventCard;

import { events } from "components/events/event.data";
import EventCard from "components/events/EventCard";
import Link from "next/link";
import React from "react";

const CommunityCardComp = () => {
	return (
		<div className="joint-heirs_community">
			<div className="container community-inner">
				<div className="text-center">
					<p className="upcoming">Upcoming Events</p>
					<h1 className="text-secondary fw-bold community-text-bold">Join Our Community</h1>
					<div className="cards">
						{events?.splice(0, 3)?.map((event, i) => (
							<EventCard key={i} event={event} />
						))}
					</div>
					<Link href="/">
						<a className="event-btn">More Events</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default CommunityCardComp;

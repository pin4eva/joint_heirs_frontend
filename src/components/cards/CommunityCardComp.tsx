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
						{events.map((event, i) => (
							<SingleItem key={i} event={event} />
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

const SingleItem: React.FC<{ event: IEvent }> = ({ event }) => {
	return (
		<div className="cards-item" style={{ backgroundImage: `url(${event.image})` }}>
			<div className="cards-item-content">
				<small className="text-secondary  mt-4">{event.date}</small>
				<h4 className="text-dark fs-5 mb-4">{event.title}</h4>
				<div className="content-box">
					<p className="text-secondary mb-3">{event.description}</p>
					<Link href="/">
						<a className="mb-4 mt-2">Read More</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

interface IEvent {
	date: string;
	title: string;
	description: string;
	image: string;
}

const events = [
	{
		date: "May 27th",
		title: "Children Day Celeberation",
		image: "/images/children.png",
		description: `Men only we welcome all men who
wish to spend the breakfast time eating
delicious homemade food and talk
about important things like news
`,
	},
	{
		date: "Friday 15th - 20th August",
		title: "Mens Prayer Week",
		image: "/images/men.png",
		description: `Men only we welcome all men who
wish to spend the breakfast time eating
delicious homemade food and talk
about important things like news
`,
	},
	{
		date: "May 5th",
		title: "Singles All Night",
		image: "/images/singles.png",
		description: `Men only we welcome all men who
wish to spend the breakfast time eating
delicious homemade food and talk
about important things like news
`,
	},
];

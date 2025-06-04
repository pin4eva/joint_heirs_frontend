"use client";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { events } from "./event.data";
import EventCard from "./EventCard";
import Link from "next/link";

export default function EventContent() {
	const query = useSearchParams();
	const activeTab = query?.get("tab") || ("General" as string | undefined);

	const categoriesObj = new Set(events.map((event) => event.category));
	const tabItems = ["General", ...Array.from(categoriesObj)];
	const stateEvents = useMemo(() => {
		if (activeTab === "General") return events;
		else return events.filter((event) => event.category === String(activeTab)?.toLowerCase());
	}, [activeTab]);

	return (
		<>
			<nav className="events-content-nav">
				<ul className="container-modern">
					{tabItems.map((tab) => (
						<TabNav key={tab} isActive={Boolean(activeTab === tab)} tab={tab} />
					))}
				</ul>
			</nav>
			<div className="events-content-cards container-modern">
				{stateEvents.length > 0 ? (
					stateEvents?.map((item, i) => <EventCard key={i} event={item} />)
				) : (
					<p className="fallback-text text-uppercase">
						THERE ARE NO UPCOMING EVENTS FOR {activeTab}
					</p>
				)}
			</div>
		</>
	);
}

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

import Link from "next/link";
import React from "react";

const SermonNavComp = () => {
	return (
		<section className="sermon-section">
			<div className="container">
				<div className="sermon-text">
					<div className="text-start">
						<p className="text-dark mb-0">Upcoming Sermon</p>
						<h4 className="text-secondary">“The Law of Giving” -Rev. Joe Simeon</h4>
					</div>
					<Link href="/">
						<a className="sermon-link">Sermon Details</a>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default SermonNavComp;

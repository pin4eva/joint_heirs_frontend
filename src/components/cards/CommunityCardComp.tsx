import Link from "next/link";
import React from "react";

const CommunityCardComp = () => {
	return (
		<div className="joint-heirs_community">
			<div className="container">
				<div className="text-center mt-5">
					<h5 className="upcoming">Upcoming Events</h5>
					<h1 className="text-secondary">Join Our Community</h1>
					<div className="cards">
						<div className="children">
							<div className="children-content">
								<small className="text-secondary  mt-4">May 27th</small>
								<h4 className="text-dark fs-5 mb-4">Childrens Day Celebration</h4>
								<div>
									<p className="text-secondary mb-3">
										Men only we welcome all men who <br /> wish to spend the breakfast time eating{" "}
										<br />
										delicious homemade food and talk <br /> about important things like news
									</p>
									<Link href="/">
										<a className="mb-4 mt-2">Read More</a>
									</Link>
								</div>
							</div>
						</div>
						<div className="men-week">
							<div className="men-content">
								<small className="text-secondary mt-4">Friday 15th - 20th August</small>
								<h5 className="text mb-4">Mens Prayer Week</h5>
								<div>
									<p className="text-secondary mb-3">
										Men only we welcome all men who <br /> wish to spend the breakfast time eating{" "}
										<br />
										delicious homemade food and talk <br /> about important things like news
									</p>
									<Link href="/">
										<a className="mb-4 mt-2">Read More</a>
									</Link>
								</div>
							</div>
						</div>
						<div className="singles">
							<div className="singles-content">
								<small className="text-secondary mt-4">May 5th</small>
								<h5 className="text-dark mb-4">Singles all Nignt</h5>
								<div>
									<p className="text-secondary mb-3">
										Men only we welcome all men who <br /> wish to spend the breakfast time eating{" "}
										<br />
										delicious homemade food and talk <br /> about important things like news
									</p>
									<Link href="/">
										<a className="mb-4 mt-2">Read More</a>
									</Link>
								</div>
							</div>
						</div>
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

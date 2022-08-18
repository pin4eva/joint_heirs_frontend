/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import CommunityCardComp from "../components/cards/CommunityCardComp";
import SermonNavComp from "../components/SermonNavComp";
import FrontLayout from "../layouts/FrontLayout";

const Home: NextPage = () => {
	return (
		<FrontLayout title="Joint Heirs Assembly Int'l">
			<div className="home">
				<SermonNavComp />
				<section>
					<div className="page-2">
						<div className="container">
							<div className="wraper">
								<div className="left">
									<h5>Welcome</h5>
									<h1 className="text-secondary">
										You Matter To <br /> God. You Matter <br /> to Us
									</h1>
									<p>
										See how we view God, Jesus, the Bible, man, and many <br /> significant aspects
										of our faith. Firmly rooted in Scripture, the <br /> beliefs of Joint Heirs
										Assembly guide our decisions as a church.
									</p>
									<Link href="/">
										<a>Learn More</a>
									</Link>
								</div>
								<div className="right">
									<div className="video">
										<img src="/images/svg/video.svg" alt="" />
										<p className="text-secondary">
											Watch and listen to <br /> Sermons
										</p>
									</div>
									<div className="dates">
										<img src="/images/svg/date.svg" alt="" />
										<p className="text-secondary">Make Donations</p>
									</div>
									<div className="events">
										<img src="/images/svg/events.svg" alt="" />
										<p className="text-secondary">
											Church Up coming <br /> Events
										</p>
									</div>
									<div className="tracker">
										<img src="/images/svg/tracker.svg" alt="" />
										<p className="text-secondary">
											Find a Church <br /> Location/Branch
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section>
					<div className="page-3">
						<div className="container">
							<div className="prayer">
								<h1 className="text-light">
									Need <br /> Prayers ?
								</h1>
								<Link href="/">
									<a>Request</a>
								</Link>
							</div>
						</div>
					</div>
				</section>
				<section>
					<CommunityCardComp />
				</section>
				<section>
					<div className="resurrect">
						<div className="blend-mode">
							<div className="container"></div>
						</div>
					</div>
				</section>
			</div>
		</FrontLayout>
	);
};

export default Home;

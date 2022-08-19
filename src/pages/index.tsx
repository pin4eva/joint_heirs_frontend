/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import CommunityCardComp from "../components/cards/CommunityCardComp";
import SermonAudioComp from "../components/home/SermonAudioComp";
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
						<div className="container">
							<div className="resurect-content">
								<p className="text-light">Latest Sermon</p>
								<h1 className="text-light">
									The Resurrection <br /> of Jesus
								</h1>
								<div className="playlet-list">
									<Link href="/">
										<a className="samon">Watch Sermon</a>
									</Link>
									<Link href="/">
										<a>
											<i className="fa-solid fa-microphone"></i>
										</a>
									</Link>
									<Link href="/">
										<a>
											<img src="/images/book.png"></img>
										</a>
									</Link>
								</div>

								<Link href="/">
									<a className="more-samon">More Sermons</a>
								</Link>
							</div>
						</div>
					</div>
				</section>
				<section>
					<div className="bible-mission">
						<div className="container">
							<div className="mission-content">
								<div className="left">
									<img src="/images/girl.png" alt="" />
								</div>
								<div className="right">
									<h4>Beliefs</h4>
									<h1 className="text-secondary fw-bold">Our Mission</h1>
									<p className="text-secondary mt-4 mb-4 ">
										We are called to eat, drink, speak, think and work to the <br /> glory of God.
										We worship God by remembering the gospel <br /> through preaching, teaching,
										singing, praying and <br /> celebrating baptism and communion.
									</p>
									<div>
										<Link href="/">
											<a>About Us</a>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section>
					<div className="sermons-audio">
						<div className="container">
							<div className="sermon-content">
								<SermonAudioComp />
								<div className="right">
									<img src="/images/man.png" alt="" />
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</FrontLayout>
	);
};

export default Home;

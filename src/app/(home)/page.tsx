import Image from "next/image";
import Link from "next/link";
import BibleVersComp from "../../components/home/BibleVersComp";
import SermonAudioComp from "../../components/home/SermonAudioComp";
import "animate.css";
import { events } from "components/events/event.data";
import EventCard from "components/events/EventCard";
import DonationSwiper from "components/home/DonationSwiper";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Joint Heirs Assembly Int'l",
	description: "Welcome to Joint Heirs Assembly International",
};

const Home = () => {
	return (
		<div className="home">
			<div className="hero">
				<Image
					height={800}
					width={1200}
					src="/images/preaching.png"
					alt="hero background img"
					className="hero-bg"
				/>
				<div className="container hero-inner text-center animate__animated animate__backInDown">
					<div className="welcome-text">
						<h1 className=" text-light">Welcome To Life</h1>
						<h4 className="rochester jhai-text">Joint Heirs Assembly...</h4>
						<Link href="/sermons" className="btn button-animation">
							Check Sermons
						</Link>
					</div>
				</div>
			</div>
			<section className="sermon-section">
				<div className="container">
					<div className="sermon-text">
						<div className="text-start">
							<p className="text-dark fw-semibold mb-0">Recent Sermon</p>
							<h4 className="text-secondary fw-bold">“The Law of Giving” - Apst. Edirhin Eta</h4>
						</div>
						<Link href="/" className="btn button-animation">
							Sermon Details
						</Link>
					</div>
				</div>
			</section>
			<section>
				<div className="page-2">
					<div className="container">
						<div className="wraper">
							<div className="left">
								<div className="left-inner">
									<p className="page-2-welcome  rochester">Welcome</p>
									<p className="text-secondary  page-2-large-text">
										You Matter To God. You Matter to Us
									</p>
									<p className="text-dark">
										See how we view God, Jesus, the Bible, man, and many <br /> significant aspects
										of our faith. Firmly rooted in Scripture, the <br /> beliefs of Joint Heirs
										Assembly guide our decisions as a church.
									</p>
									<Link href="/" className="btn button-animation">
										Learn More
									</Link>
								</div>
							</div>
							<div className="right">
								<div className="video">
									<Image
										src="/images/svg/video.svg"
										width={100}
										height={100}
										className="image-shake"
										alt="video-icon"
										style={{ width: "auto", height: "auto" }}
									/>
									<p className="text-secondary">
										Watch and listen to <br /> Sermons
									</p>
								</div>
								<div className="dates">
									<Image
										src="/images/svg/date.svg"
										width={100}
										height={100}
										className="image-shake"
										alt="date-icon"
										style={{ width: "auto", height: "auto" }}
									/>
									<p className="text-secondary">
										Make <br /> Donations
									</p>
								</div>
								<div className="events">
									<Image
										src="/images/svg/events.svg"
										width={100}
										height={100}
										className="image-shake"
										alt="event-icon"
										style={{ width: "auto", height: "auto" }}
									/>
									<p className="text-secondary">
										Church Up coming <br /> Events
									</p>
								</div>
								<div className="tracker">
									<Image
										src="/images/svg/tracker.svg"
										width={100}
										height={100}
										className="image-shake"
										alt="tracker-icon"
										style={{ width: "auto", height: "auto" }}
									/>
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
				<div className="need-prayer-page">
					<div className=" page-3-inner">
						<div className="prayer container">
							<div>
								<h1 className="text-light huge-text">
									Need <br /> Prayers ?
								</h1>
								<a href="/#contact-us" className="btn mt-4 button-animation">
									Share It
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="joint-heirs_community">
					<div className="container community-inner">
						<div className="text-center">
							<p className="upcoming rochester">Upcoming Events</p>
							<h1 className="text-secondary fw-bold community-text-bold">Join Our Community</h1>
							<div className="cards">
								{[...events]?.splice(0, 3)?.map((event, i) => (
									<EventCard key={i} event={event} />
								))}
							</div>
							<Link href="/events" className="event-btn btn button-animation">
								More Events
							</Link>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="resurrection">
					<div className="container">
						<div className="resurect-content ">
							<p className="text-light">Latest Sermon</p>
							<p className="resurrection-text-big">The Resurrection of Jesus</p>
							<div className="playlet-list">
								<Link href="/" className="samon btn button-animation">
									Watch Sermon
								</Link>
								<Link href="/">
									<i className="fa-solid fa-microphone button-animation"></i>
								</Link>
								<Link href="/">
									<Image
										height={40}
										width={50}
										alt="book-icon"
										src="/images/book.png"
										className="button-animation"
									></Image>
								</Link>
							</div>

							<Link href="/" className="more-samon btn button-animation">
								More Sermons
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
								<Image
									src="/images/girl.png"
									width={529}
									height={379}
									alt="girl-image"
									style={{ width: "auto", height: "auto" }}
								/>
							</div>
							<div className="right">
								<p className="belief-text rochester">Beliefs</p>
								<p className="text-secondary fs-700 fw-bold mission-text">Our Mission</p>
								<p className="text-secondary mt-4 mb-0">
									To reach out and reconcile the people to God through Christ, to reach in and
									develop the people to spiritual, emotional, and social maturity, to reach up in
									intercession for the people and the nation to reach down in love and help those in
									need{" "}
								</p>
								<div>
									<Link href="/" className="button-animation btn">
										About Us
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
								<Image
									src="/images/man.png"
									width={438}
									height={603}
									alt="man-image"
									style={{ width: "auto", height: "auto" }}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="bible-vers">
					<div className="container">
						<div className="text-center">
							<BibleVersComp />
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="church-branchs">
					<div className="container">
						<div className="branch-content">
							<h1 className="text-secondary fw-bold mb-3">Church Branches</h1>
							<div className="branch-holder">
								<div className="children-branch">
									<Image
										src="/images/children.png"
										width={450}
										height={420}
										className="branch-img"
										style={{ width: "auto", height: "auto" }}
										alt="children-image"
									/>
									<h4 className="mb-0 text-dark">Pastor TJ Okoye</h4>
									<p className="mb-0 text-secondary">Rumuokrwusi Branch</p>
								</div>
								<div className="men-branch">
									<Image
										src="/images/men.png"
										width={450}
										height={420}
										className="branch-img"
										alt="men-image"
									/>
									<h4 className="mb-0 text-dark">Pastor Haygan Paul</h4>
									<p className="mb-0 text-secondary">Airforce Branch</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="donation-page">
					<div className="container">
						<div className="donation-content">
							<h4 className="rochester ">Donate</h4>
							<h1 className="fw-bold text-secondary text-center m-0">Support The Mission</h1>
							<DonationSwiper />
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="contact-us" id="contact-us">
					<div className="top">
						<div className="container top-inner">
							<div className="wrapper">
								<h1 className="text-light fw-bold text-center mb-3">Get in Contact with Us</h1>
								<p className="text-light text-center ">
									To reach out and reconcile the people to God through Christ, to reach in and
									develop the people to spiritual, emotional, and social maturity, to reach up in
									intercession for the people and the nation to reach down in love and help those in
									need
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="map-page">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248.4652530003385!2d7.034835007340241!3d4.865018300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069d27198c56a95%3A0x4bf2d3ebd3c1a2dd!2sJoint%20Heirs%20Assembly%20Int&#39;l%20Inc.!5e0!3m2!1sen!2sng!4v1661352144829!5m2!1sen!2sng"
						width="100%"
						height="100%"
						loading="lazy"
					/>
				</div>
			</section>
		</div>
	);
};

export default Home;

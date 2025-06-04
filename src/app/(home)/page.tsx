import "animate.css";
import { events } from "components/events/event.data";
import EventCard from "components/events/EventCard";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Joint Heirs Assembly Int'l",
	description: "Welcome to Joint Heirs Assembly International",
	other: {
		"preload-hero-image": "/images/preaching.png",
	},
};

const Home = () => {
	return (
		<div className="home">
			<section className="hero" role="banner" aria-label="Welcome to Joint Heirs Assembly">
				<picture className="hero-bg">
					<source media="(max-width: 768px)" srcSet="/images/preaching.png" sizes="100vw" />
					<source media="(min-width: 769px)" srcSet="/images/preaching.png" sizes="100vw" />
					<img
						src="/images/preaching.png"
						alt="Joint Heirs Assembly - Welcome to Life - Preaching at the pulpit"
						className="hero-bg-img"
						loading="eager"
						decoding="async"
						fetchPriority="high"
						width="1920"
						height="800"
					/>
				</picture>
				<div className="hero-overlay" aria-hidden="true"></div>
				<div className="container-modern hero-content">
					<div className="hero-inner text-center animate__animated animate__backInDown">
						<div className="welcome-text">
							<h1 className="text-white">Welcome To Life</h1>
							<h4 className="rochester jhai-text" aria-label="Joint Heirs Assembly International">
								Joint Heirs Assembly...
							</h4>
							<Link
								href="/sermons"
								className="btn button-animation"
								aria-label="Explore our sermon collection"
							>
								Check Sermons
							</Link>
						</div>
					</div>
				</div>
			</section>
			<section className="sermon-section">
				<div className="container-modern">
					<div className="sermon-text">
						<div className="text-left">
							<p className="text-gray-900 font-semibold mb-0">Recent Sermon</p>
							<h4 className="text-gray-600 font-bold">
								&ldquo;The Law of Giving&rdquo; - Apst. Edirhin Eta
							</h4>
						</div>
						<Link href="/" className="btn button-animation">
							Sermon Details
						</Link>
					</div>
				</div>
			</section>
			<section>
				<div className="page-2">
					<div className="container-modern">
						<div className="wraper">
							<div className="left">
								<div className="left-inner">
									<p className="page-2-welcome  rochester">Welcome</p>
									<p className="text-gray-600  page-2-large-text">
										You Matter To God. You Matter to Us
									</p>
									<p className="text-gray-900">
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
									<p className="text-gray-600">
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
									<p className="text-gray-600">
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
									<p className="text-gray-600">
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
									<p className="text-gray-600">
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
						<div className="prayer container-modern">
							<div>
								<h1 className="text-white huge-text">
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
					<div className="container-modern community-inner">
						<div className="text-center">
							<p className="upcoming rochester">Upcoming Events</p>
							<h1 className="text-gray-600 font-bold community-text-bold">Join Our Community</h1>
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
				<div className="bible-mission">
					<div className="container-modern">
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
								<p className="text-gray-600 text-4xl font-bold mission-text">Our Mission</p>
								<p className="text-gray-600 mt-4 mb-0">
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
				<div className="contact-us" id="contact-us">
					<div className="top">
						<div className="container-modern top-inner">
							<div className="w-full max-w-4xl mx-auto">
								<h1 className="text-white font-bold text-center text-4xl mb-3">Get in Touch</h1>
								<p className="text-white text-center text-lg">
									To reach out and reconcile the people to God through Christ, to reach in and
									develop the people to spiritual, emotional, and social maturity, to reach up in
									intercession for the people and the nation to reach down in love and help those in
									need
								</p>
							</div>
							<div className="bottom-container">
								<form>
									<div className="form-split mb-6">
										<div className="mb-6">
											<label className="block text-white font-semibold text-sm mb-2" htmlFor="name">
												Your Name*
											</label>
											<input
												name="name"
												type="text"
												placeholder="Enter your name"
												className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-white/20 text-white placeholder-white/70 focus:outline-none focus:border-orange-500 focus:bg-white/15 transition-all duration-300"
											/>
										</div>
										<div className="mb-6">
											<label
												className="block text-white font-semibold text-sm mb-2"
												htmlFor="email"
											>
												Contact Email*
											</label>
											<input
												name="email"
												type="email"
												placeholder="bentucker43@gmail.com"
												className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-white/20 text-white placeholder-white/70 focus:outline-none focus:border-orange-500 focus:bg-white/15 transition-all duration-300"
											/>
										</div>
									</div>
									<div className="form-split mb-6">
										<div className="mb-6">
											<label
												className="block text-white font-semibold text-sm mb-2"
												htmlFor="phoneNo"
											>
												Phone no*
											</label>
											<input
												name="phoneNo"
												type="tel"
												placeholder="9012624162"
												className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-white/20 text-white placeholder-white/70 focus:outline-none focus:border-orange-500 focus:bg-white/15 transition-all duration-300"
											/>
										</div>
										<div className="mb-6">
											<label
												className="block text-white font-semibold text-sm mb-2"
												htmlFor="branch"
											>
												Church Branch*
											</label>
											<select
												name="branch"
												className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-white/20 text-white focus:outline-none focus:border-orange-500 focus:bg-white/15 transition-all duration-300"
											>
												<option value="" className="text-gray-800">
													Select a branch
												</option>
												<option value="main" className="text-gray-800">
													Main Branch
												</option>
												<option value="north" className="text-gray-800">
													North Branch
												</option>
												<option value="south" className="text-gray-800">
													South Branch
												</option>
												<option value="east" className="text-gray-800">
													East Branch
												</option>
											</select>
										</div>
									</div>
									<div className="mb-6">
										<label
											className="block text-white font-semibold text-sm mb-2"
											htmlFor="message"
										>
											Your Message*
										</label>
										<textarea
											className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-white/20 text-white placeholder-white/70 focus:outline-none focus:border-orange-500 focus:bg-white/15 transition-all duration-300 min-h-[120px] resize-y"
											placeholder="Type your Message"
											name="message"
											rows={5}
										/>
									</div>
									<p className="text-white/90 text-sm leading-relaxed mb-6">
										We are called to eat, drink, speak, think and work to the glory of God. We
										worship God by remembering the gospel through preaching, teaching, singing,
										praying and celebrating baptism and communion.
									</p>
									<button
										className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg button-animation"
										type="submit"
									>
										Send Message
									</button>
								</form>
								<div className="bottom">
									<div className="message">
										<Link
											href="/"
											className="block text-center text-white hover:text-orange-500 transition-colors duration-300"
										>
											<i className="fa-solid fa-envelope text-2xl text-orange-500 mb-2"></i>
											<p className="text-white font-bold text-lg mb-3">Email Us</p>
										</Link>
										<p className="text-white/80 text-center text-sm mb-4 leading-relaxed">
											Email us for general Queries including mentorship and spiritual counselling
										</p>
										<Link
											href="mailto:jointheirsng@gmail.com"
											className="text-orange-500 hover:text-orange-400 font-medium transition-colors duration-300"
										>
											jointheirsng@gmail.com
										</Link>
									</div>
									<div className="call">
										<Link
											href="/"
											className="block text-center text-white hover:text-orange-500 transition-colors duration-300"
										>
											<Image
												height={40}
												width={50}
												src="/images/phone.png"
												alt="phone-icon"
												className="mx-auto mb-2"
											/>
											<p className="text-white font-bold text-lg mb-3">Call Us</p>
										</Link>
										<p className="text-white/80 text-center text-sm mb-4 leading-relaxed">
											You can also call us for general Queries including mentorship and spiritual
											counselling
										</p>
										<Link
											href="tel:+234901262162"
											className="text-orange-500 hover:text-orange-400 font-medium transition-colors duration-300"
										>
											+234 901 262 162
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="h-8"></div>
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

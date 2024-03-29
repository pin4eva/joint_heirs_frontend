/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { donations } from "components/home/donate.data";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import BibleVersComp from "../components/home/BibleVersComp";
import SermonAudioComp from "../components/home/SermonAudioComp";
import FrontLayout from "../layouts/FrontLayout";
//animations
import "animate.css";
import { events } from "components/events/event.data";
import EventCard from "components/events/EventCard";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const Home: NextPage = () => {
	const [loaded] = useState(true); // turn it back to false

	// useEffect(() => {
	// 	// toggle loaded if document is ready
	// 	if (document.readyState === "complete") {
	// 		setLoaded(true);
	// 		console.log("document loaded");
	// 	} else {
	// 		if (typeof window !== undefined) {
	// 			window?.addEventListener("load", () => {
	// 				const images = document?.getElementsByTagName("img");
	// 				const imageLength = images.length;
	// 				let loadedImages = 0;
	// 				Array.from(images).forEach((image) => {
	// 					if (image?.complete && image?.naturalHeight != 0) loadedImages += 1;
	// 				});
	// 				if (loadedImages === imageLength) setLoaded(true);
	// 			});
	// 		}
	// 	}
	// }, []);

	return (
		<>
			<div className="loader" style={{ display: loaded ? "none" : "flex" }}>
				<ClipLoader className="loader-component" color="#030ce0" size={90} />
			</div>
			<div style={{ display: loaded ? "block" : "none" }}>
				<FrontLayout title="Joint Heirs Assembly Int'l">
					<div className="home">
						<div className="hero">
							<img src="/images/preaching.png" alt="hero background img" className="hero-bg" />
							<div className="container hero-inner text-center animate__animated animate__backInDown">
								<div className="welcome-text">
									<h1 className=" text-light">
										Welcome To Our <br /> Church
									</h1>
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
										<h4 className="text-secondary fw-bold">
											“The Law of Giving” - Apst. Edirhin Eta
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
								<div className="container">
									<div className="wraper">
										<div
											className="left"
											data-aos="fade-right"
											data-aos-easing="ease-in-out"
											data-aos-delay="100"
											data-aos-duration="1000"
										>
											<div className="left-inner">
												<p className="page-2-welcome  rochester">Welcome</p>
												<p className="text-secondary  page-2-large-text">
													You Matter To God. You Matter to Us
												</p>
												<p className="text-dark">
													See how we view God, Jesus, the Bible, man, and many <br /> significant
													aspects of our faith. Firmly rooted in Scripture, the <br /> beliefs of
													Joint Heirs Assembly guide our decisions as a church.
												</p>
												<Link href="/" className="btn button-animation">
													Learn More
												</Link>
											</div>
										</div>
										<div
											className="right"
											data-aos="fade-left"
											data-aos-easing="ease-in-out"
											data-aos-delay="100"
											data-aos-duration="1000"
										>
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
											<a
												href="/#contact-us"
												className="btn mt-4 button-animation"
												data-aos="flip-left"
												data-aos-easing="ease-in-out"
												data-aos-delay="50"
												data-aos-duration="700"
												data-aos-offset="-5"
											>
												Share It
											</a>
										</div>
									</div>
								</div>
							</div>
						</section>
						<section
							data-aos="zoom-in"
							data-aos-delay="120"
							data-aos-duration="1500"
							data-aos-offset="100"
						>
							<div className="joint-heirs_community">
								<div className="container community-inner">
									<div className="text-center">
										<p className="upcoming rochester">Upcoming Events</p>
										<h1 className="text-secondary fw-bold community-text-bold">
											Join Our Community
										</h1>
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
												<img src="/images/book.png " className="button-animation"></img>
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
										<div
											className="left"
											data-aos="flip-up"
											data-aos-duration="1000"
											data-aos-delay="90"
											data-aos-easing="ease-in-out"
										>
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
												develop the people to spiritual, emotional, and social maturity, to reach up
												in intercession for the people and the nation to reach down in love and help
												those in need{" "}
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
										<div
											className="right"
											data-aos="zoom-in"
											data-aos-duration="1000"
											data-aos-delay="90"
											data-aos-easing="ease-in-out"
										>
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
										<div
											className="branch-holder"
											data-aos="zoom-in"
											data-aos-easing="ease-in-out"
											data-aos-duration="900"
											data-aos-delay="30"
											data-aos-offset="-5"
										>
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
										<Swiper
											modules={[Autoplay, Navigation, Pagination]}
											spaceBetween={0}
											slidesPerView={1}
											pagination={{ clickable: true }}
											loop={true}
											loopFillGroupWithBlank={true}
											autoplay={{
												delay: 3000,
												disableOnInteraction: false,
											}}
										>
											{donations.map((item, i) => (
												<SwiperSlide key={i}>
													<div className="donate">
														<Image
															src={item.image}
															width={646}
															height={419}
															className="branch-img"
															alt="branch-image"
														/>
														<div className="donate-content">
															<h3 className="donate-heading">{item.title}</h3>
															<div className="donate-text">
																<p>{item.text1}</p>
																<p>{item.text2}</p>
															</div>
															<div className="price-donate">
																<div>
																	<h2>{item.price}</h2>
																	<hr />
																</div>
																<Link href="/" className="button-animation btn">
																	Donate
																</Link>
															</div>
														</div>
													</div>
												</SwiperSlide>
											))}
										</Swiper>
									</div>
								</div>
							</div>
						</section>
						<section>
							<div className="contact-us" id="contact-us">
								<div className="top">
									<div className="container top-inner">
										<div className="container">
											<h1 className="text-light fw-bold text-center mb-3">
												Get in Contact with Us
											</h1>
											<p className="text-light text-center ">
												We are called to eat, drink, speak, think and work to the glory of God. We
												worship God by remembering the <br /> gospel through preaching, teaching,
												singing, praying and celebrating baptism and communion.
											</p>
										</div>
										<div className="bottom-container">
											<form>
												<div className="form-split form-group">
													<div className="form-group">
														<label className="mt-4 mb-2" htmlFor="name">
															Your Name*
														</label>
														<input
															name="name"
															type="text"
															placeholder="Enter your name"
															className="form-control shadow-none"
														/>
													</div>
													<div className="form-group">
														<label className="mt-4 mb-2" htmlFor="email">
															Contact Email*
														</label>
														<input
															name="email"
															type="text"
															placeholder="bentucker43@gmail.com"
															className="form-control shadow-none"
														/>
													</div>
												</div>
												<div className="form-split form-group">
													<div className="form-group">
														<label className="mt-4 mb-2" htmlFor="phoneNo">
															Phone no*
														</label>
														<input
															name="phoneNo"
															type="text"
															placeholder="9012624162"
															className="form-control shadow-none"
														/>
													</div>
													<div className="form-group">
														<label className="mt-4 mb-2" htmlFor="branch">
															Church Branch*
														</label>
														<select name="branch" className="form-select">
															<option value=""></option>
															<option value="">First</option>
															<option value="">First</option>
															<option value="">First</option>
															<option value="">First</option>
														</select>
													</div>
												</div>
												<div className="form-group">
													<label className="mt-4 mb-3" htmlFor="message">
														Your Message*
													</label>
													<textarea
														className="form-control message-box"
														placeholder="Type your Message"
														name="message"
													/>
												</div>
												<p className="mt-4">
													We are called to eat, drink, speak, think and work to the glory of God. We
													worship God by remembering the <br /> gospel through preaching, teaching,
													singing, praying and celebrating baptism and communion.
												</p>
												<button
													className="btn btn-warning text-light mt-3 button-animation"
													type="submit"
												>
													Send
												</button>
											</form>
											<div className="botom">
												<div className="message">
													<Link href="/">
														<i className="fa-solid fa-envelope mb-2"></i>
														<p className="text-secondary fw-bold m-0">Email Us</p>
													</Link>
													<p className="text-center">
														Email us for general Queries including mentorship and spiritual
														counselling
													</p>
													<Link href="https://jointheirs5@gmail.com">jointheirsng@gmail.com</Link>
												</div>
												<div className="call">
													<Link href="/">
														<img src="/images/phone.png" alt="" />
														<p className="text-secondary fw-bold m-0">Call Us</p>
													</Link>
													<p className="text-center">
														You can also call us for general Queries including mentorship and
														spiritual counselling
													</p>
													<Link href="https://jointheirs5@gmail.com">jointheirs5@gmail.com</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="placeholder"></div>
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
				</FrontLayout>
			</div>
		</>
	);
};

export default Home;

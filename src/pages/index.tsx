/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import Link from "next/link";
import CommunityCardComp from "../components/cards/CommunityCardComp";
import HeaderComp from "../components/HeaderComp";
import BibleVersComp from "../components/home/BibleVersComp";
import SermonAudioComp from "../components/home/SermonAudioComp";
import FrontLayout from "../layouts/FrontLayout";

const Home: NextPage = () => {
	return (
		<FrontLayout title="Joint Heirs Assembly Int'l">
			<div className="home">
				<div className="hero">
					<div className="container hero-inner text-center">
						<div className="welcome-text">
							<h1 className=" text-light">
								Welcome To Our <br /> Church
							</h1>
							<h4 className="rochester jhai-text">Joint Heirs Assembly...</h4>
							<Link href="/">
								<a className="btn">Im New Here</a>
							</Link>
						</div>
					</div>
				</div>
				<section className="sermon-section">
					<div className="container">
						<div className="sermon-text">
							<div className="text-start">
								<p className="text-dark fw-semibold mb-0">Upcoming Sermon</p>
								<h4 className="text-secondary fw-bold">“The Law of Giving” -Rev. Joe Simeon</h4>
							</div>
							<Link href="/">
								<a className="sermon-link">Sermon Details</a>
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
											See how we view God, Jesus, the Bible, man, and many <br /> significant
											aspects of our faith. Firmly rooted in Scripture, the <br /> beliefs of Joint
											Heirs Assembly guide our decisions as a church.
										</p>
										<Link href="/">
											<a className="btn btn-warning">Learn More</a>
										</Link>
									</div>
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
										<p className="text-secondary">
											Make <br /> Donations
										</p>
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
					<div className="need-prayer-page">
						<div className=" page-3-inner">
							<div className="prayer container">
								<div>
									<h1 className="text-light huge-text">
										Need <br /> Prayers ?
									</h1>
									<Link href="/">
										<a className="btn mt-4 btn-warning fs-5 text-light fw-500">Request</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section>
					<CommunityCardComp />
				</section>
				<section>
					<div className="resurrection">
						<div className="container">
							<div className="resurect-content">
								<p className="text-light">Latest Sermon</p>
								<p className="resurrection-text-big">The Resurrection of Jesus</p>
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
									<p className="belief-text rochester">Beliefs</p>
									<p className="text-secondary fs-700 fw-bold mission-text">Our Mission</p>
									<p className="text-secondary mt-4 mb-4 ">
										We are called to eat, drink, speak, think and work to the glory of God. We
										worship God by remembering the gospel through preaching, teaching, singing,
										praying and celebrating baptism and communion.
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
										<img src="/images/children.png" alt="" />
										<h4 className="mb-0 text-dark">Pastor TJ Okoye</h4>
										<p className="mb-0 text-secondary">Rumuokrwusi Branch</p>
									</div>
									<div className="men-branch">
										<img src="/images/men.png" alt="" />
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
								<div className="donate">
									<img src="/images/donate.png" alt="" />
									<div className="donate-content">
										<h3 className="donate-heading">Your Generousity is Making a Difference</h3>
										<div className="donate-text">
											<p>
												We are happy to get any support from members of this assemblly and the
												community at large!
											</p>
											<p>Thank you so much for staying with us, and for all your help, Donations</p>
										</div>
										<div className="price-donate">
											<div>
												<h2>$ 75.00</h2>
												<hr />
											</div>
											<Link href="/">
												<a>Donate</a>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section>
					<div className="contact-us">
						<div className="top">
							<div className="container">
								<h1 className="text-light fw-bold text-center mb-3">Get in Contact with Us</h1>
								<p className="text-light text-center ">
									We are called to eat, drink, speak, think and work to the glory of God. We worship
									God by remembering the <br /> gospel through preaching, teaching, singing, praying
									and celebrating baptism and communion.
								</p>
							</div>
						</div>
						<div className="container">
							<form>
								<div className="form-split form-group">
									<div className="form-group">
										<label className="mt-4 mb-2" htmlFor="name">
											Your Name*
										</label>
										<input
											id="name"
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
											id="email"
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
											id="phoneNo"
											type="text"
											placeholder="9012624162"
											className="form-control shadow-none"
										/>
									</div>
									<div className="form-group">
										<label className="mt-4 mb-2">Church Branch*</label>
										<select name="" className="form-select">
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
										id="message"
									/>
								</div>
								<p className="mt-4">
									We are called to eat, drink, speak, think and work to the glory of God. We worship
									God by remembering the <br /> gospel through preaching, teaching, singing, praying
									and celebrating baptism and communion.
								</p>
								<button className="btn btn-warning text-light mt-3" type="submit">
									Send
								</button>
							</form>
							<div className="botom">
								<div className="message">
									<Link href="/">
										<a>
											<i className="fa-solid fa-envelope mb-2"></i>
											<p className="text-secondary fw-bold m-0">Email Us</p>
										</a>
									</Link>
									<p className="text-center">
										Email us for general Queries including mentorship and spiritual counselling
									</p>
									<Link href="https://jointheirs5@gmail.com">
										<a>jointheirs5@gmail.com</a>
									</Link>
								</div>
								<div className="call">
									<Link href="/">
										<a>
											<img src="/images/phone.png" alt="" />
											<p className="text-secondary fw-bold m-0">Call Us</p>
										</a>
									</Link>
									<p className="text-center">
										You can also call us for general Queries including mentorship and spiritual
										counselling
									</p>
									<Link href="https://jointheirs5@gmail.com">
										<a>jointheirs5@gmail.com</a>
									</Link>
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
		</FrontLayout>
	);
};

export default Home;

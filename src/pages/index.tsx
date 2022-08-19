/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import CommunityCardComp from "../components/cards/CommunityCardComp";
import BibleVersComp from "../components/home/BibleVersComp";
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
								<h1 className="text-secondary fw-bold">Church Branches</h1>
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
								<h4>Donate</h4>
								<h1 className="fw-bold text-secondary text-center m-0">Support The Mission</h1>
								<div className="donate">
									<img src="/images/donate.png" alt="" />
									<div className="donate-content">
										<h3>
											Your Generousity is Making a <br /> Difference
										</h3>
										<p>
											We are happy to get any support from members of this assemblly <br /> and the
											community at large! <br /> Thank you so much for staying with us, and for all
											your help, <br /> Donations
										</p>
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
							<h1 className="text-light fw-bold text-center ">Get in Contact with Us</h1>
							<p className="text-light text-center ">
								We are called to eat, drink, speak, think and work to the glory of God. We worship
								God by remembering the <br /> gospel through preaching, teaching, singing, praying
								and celebrating baptism and communion.
							</p>
						</div>
						<div className="container">
							<form>
								<div className="form-split form-group">
									<div className="form-group">
										<label className="mt-4 mb-2" htmlFor="name">
											Yourn Name
										</label>
										<input type="text" className="form-control shadow-none" />
									</div>
									<div className="form-group">
										<label className="mt-4 mb-2" htmlFor="email">
											Contact Email
										</label>
										<input type="text" className="form-control shadow-none" />
									</div>
								</div>
								<div className="form-split form-group">
									<div className="form-group">
										<label className="mt-4 mb-2" htmlFor="name">
											Phone no
										</label>
										<input type="text" className="form-control shadow-none" />
									</div>
									<div className="form-group">
										<label className="mt-4 mb-2" htmlFor="email">
											Church Branch
										</label>
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
									<label className="mt-4 mb-3" htmlFor="">
										Your Message
									</label>
									<textarea className="form-control" />
								</div>
								<p className="mt-4">
									We are called to eat, drink, speak, think and work to the glory of God. We worship
									God by remembering the <br /> gospel through preaching, teaching, singing, praying
									and celebrating baptism and communion.
								</p>
								<button className="btn btn-warning mt-3" type="submit">
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
										Email us for general Queries <br /> including mentorship and spiritual <br />
										counselling
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
										Youncan also calll us for general <br /> Queries including mentorship and <br />
										spiritual counselling
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
					<div className="map-page"></div>
				</section>
			</div>
		</FrontLayout>
	);
};

export default Home;

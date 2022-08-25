// import React from "react";
import FrontLayout from "layouts/FrontLayout";

const AboutPage = () => {
	return (
		<FrontLayout>
			<div className="about-page">
				<div className="top-section">
					<h1>About Us</h1>
					<p>Joint Heirs Assembly</p>
					<img src="images/ellipse.png" className="img" alt="" />
				</div>
				{/* ==============SECTION TwO=================== */}
				<div className="section-two container">
					<p>Welcome</p>
					<h2>We exist to connect people to Jesus and each other</h2>

					<div className="section-two-image">
						<div>
							<img src="images/Rectangle76.png" alt="" />
						</div>
						<img className="playButton" src="images/playButton.png" alt="" />
					</div>

					<article>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla, turpis et
						tempor molestie, urna nunc commodo ex, finibus diam magna a metus. Proin ut tempus odio.
						In dictum tincidunt egestas. Quisque egestas enim elit, in commodo sem pretium eu.
						Nullam vestibulum finibus ligula eget feugiat. Phasellus sit amet mi tristique,
						imperdiet ex eu, commodo neque. Phasellus ex felis, laoreet vitae ex ullamcorper.
					</article>
				</div>

				{/* ===============SECTION THREE=============== */}
				<div className="section-three">
					<div className="container">
						<div className="section-three-image">
							<img src="images/Rectangle78.png" alt="" />
						</div>

						<div className="section-three-text">
							<p className="rochester">Spiritual</p>
							<h2>Connect</h2>
							<article>
								Aliquam fringilla, turpis et tempor molestie, urna nunc commodo ex, et finibus diam
								magna a metus. Proin ut tempus odio. In dictum tincidunt egestas. Quisque egestas
								enim elit, in commodo sem pretium eu.
							</article>
						</div>
					</div>
				</div>

				{/* ===============SECTION FOUR================ */}
				<div className="section-four">
					<div className="section-four-images">
						<div className="pastor-john">
							<div className="fit">
								<img src="images/pst-john.png" alt="" />
								<div className="overlay"></div>
							</div>
							<div className="fit-text">
								<p>Pastor John Kingsley </p>
								<p>Senior Pastor</p>
							</div>
						</div>

						<div className="pastor-john">
							<div className="fit">
								<img src="images/pst-john.png" alt="" />
								<div className="overlay"></div>
							</div>
							<div className="fit-text">
								<p>Pastor John Kingsley </p>
								<p>Senior Pastor</p>
							</div>
						</div>
					</div>

					<div className="section-four-text">
						<p className="rochester">Our Team</p>
						<h2>Desciples</h2>
						<p className="team-desc">
							Aliquam fringilla, turpis et tempor molestie, urna nunc commodo ex, et finibus diam
							magna a metus. Proin ut tempus odio. In dictum tincidunt egestas. Quisque egestas enim
							elit, in commodo sem pretium eu.
						</p>
						<button className="btn btn-$warning">view Our Team</button>
					</div>
				</div>
				{/* ===============SECTION FIVE=========== */}

				<div className="section-five ">
					<div className="container">
						<div className="section-five-text">
							<p className="rochester">Sunday</p>
							<h2>Gatherings</h2>
							<p className="description">
								Aliquam fringilla, turpis et tempor molestie, urna nunc commodo ex, et finibus diam
								magna a metus. Proin ut tempus odio. In dictum tincidunt egestas. Quisque egestas
								enim elit, in commodo sem pretium eu.
							</p>
						</div>
						<div className="section-five-image">
							<img src="images/Rectangle79.png" alt="" />
						</div>
					</div>
				</div>

				{/* =============SECTION SIX============ */}
				<div className="section-six">
					<div className="section-six-text">
						<p className="rochester">Whats Next?</p>
						<h2>Next Steps</h2>
						<p className="desc">
							Congratulations! You have decided to dedicate your life to following Jesus. You may be
							wondering what’s next on your journey. We want to help! Join us as we guide you toward
							the next steps in your walk with Christ.
						</p>
					</div>

					<div className="section-six-images">
						<div className="image1">
							<img src="images/Rectangle27.png" alt="" />
							<span className="one">1</span>
							<div>
								<h6>Get Involved</h6>
								<p>
									Congratulations! You have decided to dedicate your life to following Jesus. You
									may be wondering what’s next ant to help! Join us as we guide you toward the next
									steps in your walk with Christ.
								</p>
							</div>
						</div>
						<div className="image1">
							<img src="images/Rectangle28.png" alt="" />
							<span className="two">1</span>
							<div>
								<h6>Attend Services</h6>
								<p>
									Congratulations! You have decided to dedicate your life to following Jesus. You
									may be wondering what’s next ant to help! Join us as we guide you toward the next
									steps in your walk with Christ.
								</p>
							</div>
						</div>
						<div className="image1">
							<img src="images/Rectangle29.png" alt="" />
							<span className="three">1</span>
							<div>
								<h6>Questions</h6>
								<p>
									Congratulations! You have decided to dedicate your life to following Jesus. You
									may be wondering what’s next ant to help! Join us as we guide you toward the next
									steps in your walk with Christ.
								</p>
							</div>
						</div>
					</div>
				</div>

				<section>
					<div className="footer-subscribe">
						<div className="container">
							<div className="footer-sub">
								<div className="sub-text">
									<h2 className="text-secondary mb-0">Subscribe</h2>
									<p className="text-dark mb-0">To Our NewsLetter</p>
								</div>
								<form>
									<input type="text" placeholder="Enter Email" className="form-control" />
									<button className="btn btn-warning text-light">Subscribe Now</button>
								</form>
							</div>
						</div>
					</div>
				</section>
			</div>
		</FrontLayout>
	);
};

export default AboutPage;

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
				{/* ==============SECTION TO=================== */}
				<div className="section-two container">
					<p>Welcome</p>
					<h2>
						We exist to connect people to Jesus and each other
					</h2>

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

				<div>2</div>
				<div>2</div>
				<div>2</div>
				<div>2</div>
				<div>2</div>
			</div>
		</FrontLayout>
	);
};

export default AboutPage;

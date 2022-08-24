import React from "react";
import HeaderComp from "../../HeaderComp";

const AboutTeamHero = ({ heroTitle }: { heroTitle: string }) => {
	return (
		<div className="about-team-hero">
			<HeaderComp />
			<div className="hero-desc">
				<h1>{heroTitle}</h1>
				<p id="rochester-p" style={{ color: "white" }}>
					Joint Heirs Assembly...
				</p>
			</div>
		</div>
	);
};

export default AboutTeamHero;

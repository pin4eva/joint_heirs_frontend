import React from "react";

const TeamHero = ({ heroTitle }: { heroTitle: string }) => {
	return (
		<div className="team-hero">
			<div className="hero-desc">
				<h1>{heroTitle}</h1>
				<p className="rochester fs-3" style={{ color: "white" }}>
					Joint Heirs Assembly...
				</p>
			</div>
		</div>
	);
};

export default TeamHero;

import React from "react";

const BibleVersComp = () => {
	const bibleData = [
		{
			caps: "Bible Verses",
			words:
				"For God did not send his son into the world to condemn the world, but to save the world through Him",
			verses: "-John 3:17",
		},
	];
	return (
		<div className="biles-pages">
			{bibleData.map(({ caps, words, verses }, i) => {
				return (
					<div key={i} className="bible-verses testimonial">
						<h4 className="caps">{caps}</h4>
						<big className="text-start fw-bold fs-2">“</big>
						<p className="the-words">{words}</p>
						<big className="text-end fw-bold fs-2">”</big>
						<h6>{verses}</h6>
					</div>
				);
			})}
		</div>
	);
};

export default BibleVersComp;

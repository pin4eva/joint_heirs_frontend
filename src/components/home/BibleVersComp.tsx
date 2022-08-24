import React from "react";

const BibleVersComp = () => {
	return (
		<div className="biles-pages">
			{bibleData.map((b, i) => {
				return (
					<div key={i} className="bible-verses testimonial">
						<h4 className="caps">{b.caps}</h4>
						<big className="text-start fw-bold fs-2">{b.aposUp}</big>
						<p className="the-words">{b.words}</p>
						<big className="text-end fw-bold fs-2">{b.aposDown}</big>
						<h6>{b.verses}</h6>
					</div>
				);
			})}
		</div>
	);
};

export default BibleVersComp;

const bibleData = [
	{
		caps: "Bible Verses",
		aposUp: "“",
		words:
			"For God did not send his son into the world to condemn the world, but to save the world through Him",
		aposDown: "”",
		verses: "-John 3:17",
	},
];

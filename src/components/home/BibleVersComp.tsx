import React from "react";

const BibleVersComp = () => {
	return (
		<div className="biles-pages">
			{bibleData.map((b, i) => {
				return (
					<div key={i} className="bible-verses testimonial">
						<h4 className="caps rochester">{b.caps}</h4>
						<p className="text-start fw-bold quotation">{b.aposUp}</p>
						<p className="the-words">{b.words}</p>
						<h6 className="b-verse">{b.verses}</h6>
						<p className="text-end fw-bold quotation">{b.aposDown}</p>
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

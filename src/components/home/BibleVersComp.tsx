import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/bundle";

const BibleVersComp = () => {
	return (
		<div className="biles-pages">
			<Swiper
				modules={[Autoplay, Navigation, Pagination]}
				spaceBetween={50}
				slidesPerView={1}
				pagination={{ clickable: true }}
				loop={true}
				loopFillGroupWithBlank={true}
				autoplay={{
					delay: 30000,
					disableOnInteraction: true,
				}}
			>
				{bibleData.map((b, i) => {
					return (
						<SwiperSlide key={i} className="bible-verses testimonial">
							<h4 className="caps rochester">{b.caps}</h4>
							<p className="text-start fw-bold quotation">{b.aposUp}</p>
							<p className="the-words">{b.words}</p>
							<p className="text-end fw-bold quotation">{b.aposDown}</p>
							<h6 className="b-verse">{b.verses}</h6>
						</SwiperSlide>
					);
				})}
			</Swiper>
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
	{
		caps: "Bible Verses",
		aposUp: "“",
		words:
			"For God did not send his son into the world to condemn the world, but to save the world through Him",
		aposDown: "”",
		verses: "-John 3:17",
	},
	{
		caps: "Bible Verses",
		aposUp: "“",
		words:
			"For God did not send his son into the world to condemn the world, but to save the world through Him",
		aposDown: "”",
		verses: "-John 3:17",
	},
];

"use client";
import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const BibleVersComp = () => {
	return (
		<div className="bible-carousel">
			<Swiper
				modules={[Autoplay, Navigation, Pagination]}
				spaceBetween={30}
				slidesPerView={1}
				pagination={{
					clickable: true,
					dynamicBullets: true,
				}}
				navigation={{
					nextEl: ".bible-next",
					prevEl: ".bible-prev",
				}}
				loop={true}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
					reverseDirection: true, // Right to left
				}}
				speed={800}
				effect="slide"
				direction="horizontal"
				className="bible-swiper"
			>
				{bibleData.map((verse, i) => {
					return (
						<SwiperSlide key={i} className="bible-slide">
							<div className="bible-verse-card">
								<div className="verse-header">
									<h4 className="verse-title">{verse.caps}</h4>
								</div>
								<div className="verse-content">
									<span className="quote-mark quote-start">{verse.aposUp}</span>
									<p className="verse-text">{verse.words}</p>
									<span className="quote-mark quote-end">{verse.aposDown}</span>
								</div>
								<div className="verse-reference">
									<h6 className="reference-text">{verse.verses}</h6>
								</div>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>

			{/* Custom Navigation */}
			<div className="bible-navigation">
				<button className="bible-nav-btn bible-prev">
					<i className="fas fa-chevron-left"></i>
				</button>
				<button className="bible-nav-btn bible-next">
					<i className="fas fa-chevron-right"></i>
				</button>
			</div>
		</div>
	);
};

export default BibleVersComp;

const bibleData = [
	{
		caps: "Daily Inspiration",
		aposUp: '"',
		words:
			"For God did not send his Son into the world to condemn the world, but to save the world through Him.",
		aposDown: '"',
		verses: "John 3:17",
	},
	{
		caps: "Word of Hope",
		aposUp: '"',
		words:
			"And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
		aposDown: '"',
		verses: "Romans 8:28",
	},
	{
		caps: "Promise of Peace",
		aposUp: '"',
		words:
			"Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.",
		aposDown: '"',
		verses: "John 14:27",
	},
	{
		caps: "Strength in Faith",
		aposUp: '"',
		words: "I can do all this through him who gives me strength.",
		aposDown: '"',
		verses: "Philippians 4:13",
	},
];

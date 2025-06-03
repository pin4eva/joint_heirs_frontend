"use client";
import { donations } from "components/home/donate.data";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";

export default function DonationSwiper() {
	return (
		<>
			<Swiper
				modules={[Autoplay, Navigation, Pagination]}
				spaceBetween={0}
				slidesPerView={1}
				pagination={{ clickable: true }}
				loop={true}
				loopFillGroupWithBlank={true}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
			>
				{donations.map((item, i) => (
					<SwiperSlide key={i}>
						<div className="donate">
							<Image
								src={item.image}
								width={646}
								height={419}
								className="branch-img"
								alt="branch-image"
							/>
							<div className="donate-content">
								<h3 className="donate-heading">{item.title}</h3>
								<div className="donate-text">
									<p>{item.text1}</p>
									<p>{item.text2}</p>
								</div>
								<div className="price-donate">
									<div>
										<h2>{item.price}</h2>
										<hr />
									</div>
									<Link href="/" className="button-animation btn">
										Donate
									</Link>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}

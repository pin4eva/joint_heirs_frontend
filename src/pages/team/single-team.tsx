/* eslint-disable @next/next/no-img-element */
import AboutTeamHero from "components/team/TeamHero";
import FrontLayout from "layouts/FrontLayout";
import { useRouter } from "next/router";
import React from "react";

const SingleTeam = () => {
	const data = useRouter().query;
	// destructuring all received props
	const { image, name, position, description, email, phone, address, facebook_url, twitter_url } =
		data;

	return (
		<FrontLayout showHeader={false}>
			<div className="team">
				<div className="single-team">
					<AboutTeamHero heroTitle={name as string} />

					<section className="single-team-info p-5">
						<div className="img">
							<img src={image as string} alt="" />
						</div>
						<div className="info">
							<h4>{position}</h4>
							<p>Email: {email}</p>
							<p>Phone: {phone}</p>
							<p>Address: {address}</p>
							<p className="pe-4">{description}</p>
							<div className="socials">
								<a href={facebook_url as string} style={{ marginRight: "2em" }}>
									<img src="/images/Team/fb.png" alt="" />
								</a>
								<a href={twitter_url as string}>
									<img src="/images/Team/tw.png" alt="" />
								</a>
							</div>
						</div>
					</section>
					<h2 className="pt-2 ps-5">Leave a Reply</h2>

					<form className="message-team">
						<div className="d-flex outer-inputs-wrapper">
							<div className="input-wrapper">
								<label htmlFor="name">
									Name<sup className="text-danger">*</sup>
								</label>
								<input type="text" placeholder="Enter your Name" />
							</div>
							<div className="input-wrapper">
								<label htmlFor="email">
									Email<sup className="text-danger">*</sup>
								</label>
								<input type="text" placeholder="example@email.com" />
							</div>
						</div>

						<div>
							<label htmlFor="your-message">
								Your Message<sup className="text-danger">*</sup>
							</label>
							<textarea rows={5} placeholder="Type your Message"></textarea>
						</div>

						<div className="consent d-flex">
							<input type="checkbox" />
							<p>
								By using this form you agree with the storage and handling of your data by this
								website.
							</p>
						</div>

						<button>Send</button>
					</form>
				</div>
			</div>
		</FrontLayout>
	);
};

export default SingleTeam;

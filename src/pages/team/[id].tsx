/* eslint-disable @next/next/no-img-element */
import { departmentsData } from "components/team/team-data";
import { TeamCardI } from "components/team/team-interfaces";
import TeamHero from "components/team/TeamHero";
import FrontLayout from "layouts/FrontLayout";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const SingleTeam = () => {
	const query = useRouter().query;
	const [team, setTeam] = useState<TeamCardI>();

	useEffect(() => {
		if (query?.id) {
			const team = departmentsData.find((department) => department?.id === Number(query?.id));
			setTeam(team);
		}
	}, [query?.id]);

	if (!team) return <p>loading...</p>;

	return (
		<FrontLayout title="Team">
			<div className="team">
				<div className="single-team">
					<TeamHero heroTitle={team?.name} />

					<section className="single-team-info p-5">
						<div className="img">
							<img src={team?.image} alt="" />
						</div>
						<div className="info">
							<h4>{team?.position}</h4>
							<p>Email: {team?.email}</p>
							<p>Phone: {team?.phone}</p>
							<p>Address: {team?.address}</p>
							<p className="pe-4">{team?.description}</p>
							<div className="socials">
								<a href={team?.socials?.facebook_url} style={{ marginRight: "2em" }}>
									<img src="/images/Team/fb.png" alt="" />
								</a>
								<a href={team?.socials?.twitter_url}>
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

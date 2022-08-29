/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Router, useRouter } from "next/router";
import React from "react";
import { TeamCardI } from "./team-interfaces";

const TeamCard: React.FC<TeamCardI> = ({
	image,
	name,
	position,
	description,
	socials,
	email,
	phone,
	address,
}) => {
	const router = useRouter();
	const { facebook_url, twitter_url } = socials;
	// function sends targeted data to targetpath using nextRouter
	function sendSingleTeamProp() {
		router.push({
			pathname: "/team/single-team",
			query: {
				image,
				name,
				position,
				description,
				email,
				phone,
				address,
				facebook_url,
				twitter_url,
			},
		});
	}

	return (
		<div className="team-card">
			<div className="team-card-img">
				<img src={image} alt="" />
			</div>
			<div className="team-card-desc">
				<h5 onClick={sendSingleTeamProp}>
					<a className="link-dark text-decoration-none">{name}</a>
				</h5>
				<h6>{position}</h6>
				<p>{description}</p>
				<div id="underline"></div>
				<div
					className="justify-center
				team-card-socials"
				>
					<div className="icon-holder">
						<a href={socials.facebook_url}>
							<img src="/images/Team/fb.png" alt="" />
						</a>
					</div>

					<div className="icon-holder">
						<a href={socials.twitter_url}>
							<img src="/images/Team/tw.png" alt="" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TeamCard;

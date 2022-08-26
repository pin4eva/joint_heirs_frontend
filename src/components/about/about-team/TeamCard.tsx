/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { TeamCardI } from "./about-team-interfaces";

const TeamCard: React.FC<TeamCardI> = ({ image, name, position, description, socials }) => {
	return (
		<div className="team-card">
			<div className="team-card-img">
				<img src={image} alt="" />
			</div>
			<div className="team-card-desc">
				<h5>
					<Link href="/team/DummyComp">
						<a className="link-dark text-decoration-none">{name}</a>
					</Link>
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
							<img src="/images/About-Team/fb.png" alt="" />
						</a>
					</div>

					<div className="icon-holder">
						<a href={socials.twitter_url}>
							<img src="/images/About-Team/tw.png" alt="" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TeamCard;

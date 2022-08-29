/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { TeamCardI } from "./team-interfaces";

const TeamCard: React.FC<{ team: TeamCardI }> = ({ team }) => {
	return (
		<div className="team-card">
			<div className="team-card-img">
				<img src={team?.image} alt="" />
			</div>
			<div className="team-card-desc">
				<h5>
					<Link href={`/team/${team?.id}`}>
						<a className="link-dark text-decoration-none">{team?.name}</a>
					</Link>
				</h5>
				<h6>{team?.position}</h6>
				<p>{team?.description}</p>
				<div id="underline"></div>
				<div
					className="justify-center
				team-card-socials"
				>
					<div className="icon-holder">
						<a href={team?.socials?.facebook_url}>
							<img src="/images/Team/fb.png" alt="" />
						</a>
					</div>

					<div className="icon-holder">
						<a href={team?.socials?.twitter_url}>
							<img src="/images/Team/tw.png" alt="" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TeamCard;

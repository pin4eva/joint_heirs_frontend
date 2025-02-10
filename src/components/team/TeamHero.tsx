"use client";

import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { departmentsData } from "./team-data";
import { TeamCardI } from "./team-interfaces";

// const TeamHero = ({ heroTitle }: { heroTitle: string }) => {
const TeamHero = ({ heroTitle }: { heroTitle: string }) => {
	const query = useSearchParams();
	const [team, setTeam] = useState<TeamCardI>();

	useEffect(() => {
		if (query.get("id")) {
			const team = departmentsData.find(
				(department) => department?.id === Number(query?.get("id"))
			);
			setTeam(team);
		}
	}, [query?.get("id")]);

	if (!team) return <p>loading...</p>;
	return (
		<div className="team-hero">
			<div className="hero-desc">
				<h1>{heroTitle.length > 0 ? heroTitle : team.name}</h1>
				<p className="rochester fs-3" style={{ color: "white" }}>
					Joint Heirs Assembly...
				</p>
			</div>
		</div>
	);
};

export default TeamHero;

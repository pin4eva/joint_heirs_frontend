import AboutTeamHero from "components/about/about-team/AboutTeamHero";
import FrontLayout from "layouts/FrontLayout";
import { useRouter } from "next/router";
import React from "react";
import { TeamCardI } from "components/about/about-team/about-team-interfaces";
// import { departmentsData } from "components/about/about-team/about-team-data";

const SingleTeam = () => {
	return (
		<FrontLayout showHeader={false}>
			<AboutTeamHero heroTitle="hello" />
		</FrontLayout>
	);
};

export default SingleTeam;

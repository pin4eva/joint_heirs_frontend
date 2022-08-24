/* eslint-disable @next/next/no-img-element */
import React from "react";
import AboutTeamHero from "../../components/about/about-team/AboutTeamHero";
import TeamCard from "../../components/about/about-team/TeamCard";
import { departmentsData } from "../../components/about/about-team/about-team-data";
import FooterComp from "../../components/FooterComp";
import SubscriptionForm from "../../components/about/about-team/SubscriptionForm";
import { DepartmentsEnum } from "components/about/about-team/about-team-interfaces";

const TeamPage = () => {
	return (
		<div className="about-team">
			<AboutTeamHero heroTitle="Our Team" />

			<main className="container-fluid team-categories">
				<div className="strokes">
					<img src="/images/About-Team/Ellipse-right.png" alt="" id="ellipse-right" />
					<img src="/images/About-Team/Ellipse-left.png" alt="" id="ellipse-left" />
				</div>

				<div className="desc">
					<p id="rochester-p">Leadership</p>
					<h4>Pastors & Elders</h4>
				</div>
				<section className="department">
					{departmentsData.map((elem) => {
						if (elem.department == DepartmentsEnum.LEADERSHIP)
							return <TeamCard {...elem} key={elem.id} />;
					})}
				</section>

				<div className="desc">
					<p id="rochester-p">Staff</p>
					<h4>Technicals</h4>
				</div>
				<section className="department">
					{departmentsData.map((elem) => {
						if (elem.department == DepartmentsEnum.TECHNICALS)
							return <TeamCard {...elem} key={elem.id} />;
					})}
				</section>

				<div className="desc">
					<h4>Music Department</h4>
				</div>
				<section className="department">
					{departmentsData.map((elem) => {
						if (elem.department == DepartmentsEnum.MUSIC_DEPARTMENT)
							return <TeamCard {...elem} key={elem.id} />;
					})}
				</section>

				<div className="desc">
					<h4>Workers</h4>
				</div>
				<section className="department">
					{departmentsData.map((elem) => {
						if (elem.department == DepartmentsEnum.WORKERS)
							return <TeamCard {...elem} key={elem.id} />;
					})}
				</section>
			</main>

			<SubscriptionForm />
			<FooterComp />
		</div>
	);
};

export default TeamPage;

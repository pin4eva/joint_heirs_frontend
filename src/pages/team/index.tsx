/* eslint-disable @next/next/no-img-element */
import { DepartmentsEnum } from "components/team/team-interfaces";
import FooterComp from "components/FooterComp";
import { departmentsData } from "components/team/team-data";
import TeamCard from "components/team/TeamCard";
import TeamHero from "components/team/TeamHero";
import FrontLayout from "layouts/FrontLayout";

const TeamPage = () => {
	return (
		<FrontLayout title="Team">
			<div className="team">
				<TeamHero heroTitle="Our Team" />

				<main className="container-fluid team-categories">
					<div className="strokes">
						<img src="/images/Team/Ellipse-right.png" alt="" id="ellipse-right" />
						<img src="/images/Team/Ellipse-left.png" alt="" id="ellipse-left" />
					</div>

					<div className="desc">
						<p id="rochester-p">Leadership</p>
						<h4>Pastors & Elders</h4>
					</div>
					<section className="department container-sm">
						{departmentsData
							.filter((elem) => elem.department == DepartmentsEnum.LEADERSHIP)
							.map((elem) => (
								<TeamCard team={elem} key={elem.id} />
							))}
					</section>

					<div className="desc">
						<p id="rochester-p">Staff</p>
						<h4>Technicals</h4>
					</div>
					<section className="department container-sm">
						{departmentsData
							.filter((elem) => elem.department == DepartmentsEnum.TECHNICALS)
							.map((elem) => (
								<TeamCard team={elem} key={elem.id} />
							))}
					</section>

					<div className="desc">
						<h4>Music Department</h4>
					</div>
					<section className="department container-sm">
						{departmentsData
							.filter((elem) => elem.department == DepartmentsEnum.MUSIC_DEPARTMENT)
							.map((elem) => (
								<TeamCard team={elem} key={elem.id} />
							))}
					</section>

					<div className="desc">
						<h4>Workers</h4>
					</div>
					<section className="department container-sm">
						{departmentsData
							.filter((elem) => elem.department == DepartmentsEnum.WORKERS)
							.map((elem) => (
								<TeamCard team={elem} key={elem.id} />
							))}
					</section>
				</main>
			</div>
		</FrontLayout>
	);
};

export default TeamPage;

/* eslint-disable @next/next/no-img-element */
import { departmentsData } from "components/team/team-data";
import TeamHero from "components/team/TeamHero";

const SingleTeam = async ({ params }: { params: Promise<{ id?: string }> }) => {
	const id = await params;
	let team;
	if (id.id) {
		const data = departmentsData.find((department) => department?.id === Number(id.id));
		team = data;
	}

	return (
		<div className="team">
			<div className="single-team">
				{/* <TeamHero heroTitle={team?.name} /> */}
				<TeamHero heroTitle={""} />

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
	);
};

export default SingleTeam;

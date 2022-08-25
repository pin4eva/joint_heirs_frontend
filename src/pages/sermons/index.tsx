import React from "react";
import FooterComp from "../../components/FooterComp";
import HeaderComp from "../../components/HeaderComp";
import AudioComp from "./aduioComp";
import VideoComp from "./videoComp";
import { useState } from "react";

const SermonsPage = () => {
	const [videos, setVideos] = useState(true);
	const [audios, setAudios] = useState(false);
	const [recordings, setRecording] = useState(false);
	const handleVideos = () => {
		setVideos(!videos);
	};
	const handleAudios = () => {
		setAudios(!audios);
	};
	const handleRecordings = () => {
		setRecording(!recordings);
	};

	return (
		<div className="wrapper">
			<header>
				<HeaderComp />
			</header>

			<div className="sermon">
				<div className="sermon-navi">
					<div className="sermon-flex">
						<div className="sermom-navi-toggle">
							<i onClick={handleVideos} className="fa-solid fa-video"></i>

							<i onClick={handleAudios} className="fa-solid fa-microphone"></i>

							<i onClick={handleRecordings} className="fa-solid fa-book-open"></i>
						</div>

						<div className="sermon-navi-search">
							<i className="fa-solid fa-magnifying-glass"></i>

							<i className="fa-solid fa-magnifying-glass"></i>
						</div>
					</div>
				</div>
				<p style={{ marginLeft: "2rem" }}>All Video Sermons</p>
			</div>
			{videos && <VideoComp />}
			{audios && <AudioComp />}

			<section>
				<div className="footer-subscribe">
					<div className="container">
						<div className="footer-sub">
							<div className="sub-text">
								<h2 className="text-secondary mb-0">Subscribe</h2>
								<p className="text-dark mb-0">To Our NewsLetter</p>
							</div>
							<form>
								<input type="text" placeholder="Enter Email" className="form-control" />
								<button className="btn btn-warning text-light">Subscribe Now</button>
							</form>
						</div>
					</div>
				</div>
			</section>

			<FooterComp />
		</div>
	);
};

export default SermonsPage;

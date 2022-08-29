import React from "react";
import FooterComp from "../../components/FooterComp";
import HeaderComp from "../../components/HeaderComp";
import AudioComp from "./aduioComp";
import VideoComp from "./videoComp";
import { useState } from "react";
import RecordedComp from "./recordededComp";
import FrontLayout from "layouts/FrontLayout";

const SermonsPage = () => {
	const [videos, setVideos] = useState(true);
	const handleVideos = () => setVideos(!videos);

	const [audios, setAudios] = useState(false);
	const handleAudios = () => setAudios(!audios);

	const [recordings, setRecording] = useState(false);
	const handleRecordings = () => setRecording(!recordings);

	const [search, setSearch] = useState(false);
	const handleSearch = () => setSearch(!search);

	const [filter, setFilter] = useState(false);
	const handleFilter = () => setFilter(!filter);
	return (
		<FrontLayout title="Sermon">
			<div id="sermon">
				<header className="sermon-header">
					<div className="sermon-header-inner">
						<p className="top-text">Our Sermons</p>
						<p className=" text-style">Joint Heirs Assembly...</p>
					</div>
				</header>

				<div className="sermon">
					<div className="sermon-navi">
						<div className="sermon-flex">
							{" "}
							<div className="sermom-navi-toggle">
								<i onClick={handleVideos} className="fa-solid fa-video"></i>

								<i onClick={handleRecordings} className="fa-solid fa-microphone"></i>

								<i onClick={handleAudios} className="fa-solid fa-book-open"></i>
							</div>
							<div className="sermon-navi-search">
								<i onClick={handleSearch} className="fa-solid fa-magnifying-glass"></i>

								<i onClick={handleFilter} className="fa-solid fa-sliders"></i>
							</div>
							{search && (
								<form action="" className="search">
									<input type="text" placeholder="search here... " />
									<i onClick={handleSearch} className="fa-solid fa-search"></i>
								</form>
							)}
							{filter && (
								<div className="sort">
									<div className="sort-close">
										<span>Sort</span>
										<i onClick={handleFilter} className="fa-solid fa-times "></i>
									</div>
									<ul onClick={handleFilter}>
										<li>Names</li>
										<li>Date</li>
										<li>Size</li>
									</ul>
								</div>
							)}
						</div>
					</div>
				</div>
				{videos && <VideoComp />}
				{audios && <AudioComp />}
				{recordings && <RecordedComp />}

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
			</div>
		</FrontLayout>
	);
};

export default SermonsPage;

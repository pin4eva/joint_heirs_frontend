import React from "react";

import WrittenComp from "./writtenComp";
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

				<div className="sermon-navigation">
					<div className="sermon-navigation-wrapper">
						<div className="sermon-toggle">
							<div className="sermon-toggle-flex">
								<i onClick={handleVideos} className="fa-solid fa-video"></i>

								<i onClick={handleRecordings} className="fa-solid fa-microphone"></i>

								<i onClick={handleAudios} className="fa-solid fa-book-open"></i>
							</div>
							<div className="sermon-navi-search">
								<i onClick={handleSearch} className="fa-solid fa-magnifying-glass"></i>

								<i onClick={handleFilter} className="fa-solid fa-sliders"></i>
							</div>
							{search && (
								<form action="" className="sermon-search">
									<input type="text" placeholder="search here... " />
									<i onClick={handleSearch} className="fa-solid fa-search"></i>
								</form>
							)}
							{filter && (
								<div className="sermon-sort">
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
				{audios && <WrittenComp />}
				{recordings && <RecordedComp />}
			</div>
		</FrontLayout>
	);
};

export default SermonsPage;

import React from "react";

import WrittenComp from "./writtenComp";
import VideoComp from "./videoComp";
import { useState } from "react";
import RecordedComp from "./recordededComp";
import FrontLayout from "layouts/FrontLayout";
import Link from "next/link";
import { useRouter } from "next/router";

const SermonsPage = () => {
	const router = useRouter();
	const activeTab = router.query?.tab || "videos";

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
					<div className="sermon-navigation-wrapper container">
						<div></div>
						<div className="sermon-toggle ">
							<div className="tab">
								<TabComp isActive={activeTab === SermonTabEnum.VIDEOS} tab={SermonTabEnum.VIDEOS} />
								<TabComp isActive={activeTab === SermonTabEnum.AUDIO} tab={SermonTabEnum.AUDIO} />
								<TabComp isActive={activeTab === SermonTabEnum.TEXT} tab={SermonTabEnum.TEXT} />
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
				{activeTab === SermonTabEnum.VIDEOS && <VideoComp />}
				{activeTab === SermonTabEnum.TEXT && <WrittenComp />}
				{activeTab === SermonTabEnum.AUDIO && <RecordedComp />}
			</div>
		</FrontLayout>
	);
};

export default SermonsPage;

enum SermonTabEnum {
	VIDEOS = "videos",
	AUDIO = "audio",
	TEXT = "text",
}

const TabComp: React.FC<{ tab: SermonTabEnum; isActive: boolean }> = ({ tab, isActive }) => {
	return (
		<Link href={`/sermons?tab=${tab}`} className={`sermon-tab-item ${isActive ? "active" : ""}`}>
			{tab === SermonTabEnum.VIDEOS ? (
				<i className="fa-solid fa-video "></i>
			) : tab === SermonTabEnum.AUDIO ? (
				<i className="fa-solid fa-microphone"></i>
			) : (
				<i className="fa-solid fa-book-open"></i>
			)}
		</Link>
	);
};

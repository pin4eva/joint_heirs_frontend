import React from "react";
import FooterComp from "../../components/FooterComp";
import HeaderComp from "../../components/HeaderComp";
import AudioComp from "./aduioComp";
import VideoComp from "./videoComp";

const SermonsPage = () => {
	return (
		<div className="wrapper">
			<header>
				<HeaderComp />
			</header>

			<div className="sermon">
				<div className="sermon-navi">
					<div className="sermon-flex">
						<div className="sermom-navi-toggle">
							<div className="video">vedio</div>
							<div className="video">record</div>
							<div className="video">text</div>
						</div>

						<div className="sermon-navi-search">
							<div className="video">sreach</div>
							<div className="video">filter</div>
						</div>
					</div>
				</div>
				<p>All Video Sermons</p>
			</div>

			<VideoComp />
			<AudioComp />

			<FooterComp />
		</div>
	);
};

export default SermonsPage;

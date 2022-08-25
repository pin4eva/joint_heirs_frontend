import React from "react";

const RecordedComp = () => {
	return (
		<div className="recording">
			<p className="text-style" style={{ paddingLeft: "2rem" }}>
				All Recorded Sermons
			</p>
			<div className="recording-container">
				<div className="recording-container-wrapper">
					<p className="febuary-text">Febuary</p>
					<div className="record">
						<div className="record-wrapper">
							<div className="record-icon">
								<i className="fa-solid fa-microphone"></i>

								<div className="record-text">
									<p className="pastor">Sermon By Pastor Eric</p>
									<p className="Feb">Feb 5 -The Ressurrection of Jesus (Part One)</p>
								</div>
							</div>
							<div className="record-space">
								<i className="fa-solid fa-pause"></i>

								<p className="record-space-time">55:13</p>
								<div className="record-space-line">
									<div className="colored-line"></div>
									<div className="colored-rounded"></div>
									<div className="colored-light"></div>
								</div>
								<div className="record-space-duration"></div>
								<div className="record-space-icon"></div>
								<div className="record-space-shortline">
									<div></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RecordedComp;

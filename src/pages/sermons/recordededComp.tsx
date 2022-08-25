import React from "react";

const RecordedComp = () => {
	return (
		<div className="recording">
			<p className="text-style" style={{ paddingLeft: "2rem" }}>
				All Recorded Sermons
			</p>

			<div className="recording-container">
				{recordDatas.map((recordData, i) => (
					<div className="recording-container-wrapper" key={i}>
						<p className="febuary-text">{recordData.month}</p>
						<div className="record">
							<div className="record-wrapper">
								<div className="record-icon">
									<i className="fa-solid fa-microphone"></i>

									<div className="record-text">
										<p className="pastor">{recordData.pastor}</p>
										<p className="Feb">{recordData.title}</p>
									</div>
								</div>
								<div className="record-space">
									<div className="record-space-icon">
										<i className="fa-solid fa-pause"></i>
									</div>
									<div className="record-space-cont">
										<p className="record-space-time">{recordData.time}</p>
										<input type="range" name="" id="" />

										<p className="record-space-duration">{recordData.duration}</p>

										<i className="fa-solid fa-volume-high"></i>

										<div className="record-space-shortline">
											<div className="blue-rgb"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
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
									<div className="record-space-icon">
										<i className="fa-solid fa-pause"></i>
									</div>
									<div className="record-space-cont">
										<p className="record-space-time">55:13</p>
										<input type="range" name="" id="" />

										<p className="record-space-duration">1:39:13</p>

										<i className="fa-solid fa-volume-high"></i>

										<div className="record-space-shortline">
											<div className="blue-rgb"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default RecordedComp;

export interface IRecord {
	month: string;
	pastor: string;
	title: string;
	time: string;
	duration: string;
}

export const recordDatas = [
	{
		month: "Febuary",
		pastor: "Sermon By Pastor Eric",
		title: "Feb 5 -The Ressurrection of Jesus (Part One)",
		time: "55:13",
		duration: "1:39:13",
	},
	{
		month: "March",
		pastor: "Sermon By Pastor Eric",
		title: "Feb 5 -The Ressurrection of Jesus (Part One)",
		time: "55:13",
		duration: "1:39:13",
	},
	{
		month: "April",
		pastor: "Sermon By Pastor Eric",
		title: "Feb 5 -The Ressurrection of Jesus (Part One)",
		time: "55:13",
		duration: "1:39:13",
	},
	{
		month: "May",
		pastor: "Sermon By Pastor Eric",
		title: "Feb 5 -The Ressurrection of Jesus (Part One)",
		time: "55:13",
		duration: "1:39:13",
	},
];

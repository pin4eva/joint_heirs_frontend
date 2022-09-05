import React from "react";

const RecordedComp = () => {
	return (
		<div className="recording">
			<div className="recording-container container">
				<p className="text-style">All Recorded Sermons</p>
				{recordDatas.map((recordData, id) => (
					<div className="recording-container-wrapper " key={id}>
						<p className="month-text">{recordData.month}</p>
						<div className="record ">
							<div className="record-wrapper">
								<div className="record-icon">
									<i className="fa-solid fa-microphone record-mic"></i>

									<div className="record-text">
										<p className="record-text-pastor">{recordData.pastor}</p>
										<p className="record-text-title">{recordData.title}</p>
									</div>
								</div>
								<div className="record-space">
									<i className="fa-solid fa-pause record-pause"></i>

									<div className="record-space-cont">
										<p className="record-space-time">{recordData.time}</p>
										<input type="range" name="" id="" />

										<p className="record-space-time">{recordData.duration}</p>

										<i className="fa-solid fa-volume-high record-vol"></i>

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
		id: 1,
		month: "Febuary",
		pastor: "Sermon By Pastor Eric",
		title: "Feb 5 -The Ressurrection of Jesus (Part One)",
		time: "55:13",
		duration: "1:39:13",
	},
	{
		id: 2,
		month: "March",
		pastor: "Sermon By Pastor Eric",
		title: "Feb 5 -The Ressurrection of Jesus (Part One)",
		time: "55:13",
		duration: "1:39:13",
	},
	{
		id: 3,
		month: "April",
		pastor: "Sermon By Pastor Eric",
		title: "Feb 5 -The Ressurrection of Jesus (Part One)",
		time: "55:13",
		duration: "1:39:13",
	},
	{
		id: 4,
		month: "May",
		pastor: "Sermon By Pastor Eric",
		title: "Feb 5 -The Ressurrection of Jesus (Part One)",
		time: "55:13",
		duration: "1:39:13",
	},
];

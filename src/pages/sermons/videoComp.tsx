/* eslint-disable @next/next/no-img-element */

const VideoComp = () => {
	return (
		<div className="Videos">
			<p className="text-style" style={{ paddingLeft: "2rem" }}>
				All Recorded Sermons
			</p>
			<div className="videos-wrapper">
				<div className="febuary">
					<p className="febuary-txt">February, 2020</p>
					<div className="febuary-cont">
						{sermonDatas.map((sermonData, i) => (
							<div className="febuary-videos" key={i}>
								<div className="overlay">
									<div className="image">
										<i className="fa-solid fa-play"></i>
									</div>

									<div className="txtflex">
										<p className="bold">{sermonData.topic}</p>
										<p>{sermonData.text}</p>
									</div>
									<p>{sermonData.name}</p>
									<p>{sermonData.date}</p>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="febuary">
					<p className="febuary-txt">March, 2020</p>
					<div className="febuary-cont">
						{sermonDatas.map((sermonData, i) => (
							<div className="febuary-videos" key={i}>
								<div className="overlay">
									<div className="image">
										<i className="fa-solid fa-play"></i>
									</div>

									<div className="txtflex">
										<p className="bold">{sermonData.topic}</p>
										<p>{sermonData.text}</p>
									</div>
									<p>{sermonData.name}</p>
									<p>{sermonData.date}</p>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="febuary">
					<p className="febuary-txt">April, 2020</p>
					<div className="febuary-cont">
						{sermonDatas.map((sermonData, i) => (
							<div className="febuary-videos" key={i}>
								<div className="overlay">
									<div className="image">
										<i className="fa-solid fa-play"></i>
									</div>

									<div className="txtflex">
										<p className="bold">{sermonData.topic}</p>
										<p>{sermonData.text}</p>
									</div>
									<p>{sermonData.name}</p>
									<p>{sermonData.date}</p>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="febuary">
					<p className="febuary-txt">May, 2020</p>
					<div className="febuary-cont">
						{sermonDatas.map((sermonData, i) => (
							<div className="febuary-videos" key={i}>
								<div className="overlay">
									<div className="image">
										<i className="fa-solid fa-play"></i>
									</div>

									<div className="txtflex">
										<p className="bold">{sermonData.topic}</p>
										<p>{sermonData.text}</p>
									</div>
									<p>{sermonData.name}</p>
									<p>{sermonData.date}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default VideoComp;

interface ISermon {
	img: string;
	topic: string;
	text: string;
	name: string;
	date: string;
}

const sermonDatas = [
	{
		img: "/public/images/logo.png",
		topic: "The Resurrecton of Jesus",
		text: "Part One",
		name: "Pastor John Emmanuel",
		date: "10/02/2022",
	},
	{
		img: "/public/images/logo.png",
		topic: "The Resurrecton of Jesus",
		text: "-Part Two",
		name: "Pastor John Emmanuel",
		date: "10/02/2022",
	},
	{
		img: "/public/images/logo.png",
		topic: "The Resurrecton of Jesus",
		text: "-Part Three",
		name: "Pastor John Emmanuel",
		date: "10/02/2022",
	},
	{
		img: "/public/images/logo.png",
		topic: "The Resurrecton of Jesus",
		text: "-Part Four",
		name: "Pastor John Emmanuel",
		date: "10/02/2022",
	},
	{
		img: "/public/images/logo.png",
		topic: "The Resurrecton of Jesus",
		text: "-Part Five",
		name: "Pastor John Emmanuel",
		date: "10/02/2022",
	},
	{
		img: "/public/images/logo.png",
		topic: "The Resurrecton of Jesus",
		text: "-Part Six",
		name: "Pastor John Emmanuel",
		date: "10/02/2022",
	},
];

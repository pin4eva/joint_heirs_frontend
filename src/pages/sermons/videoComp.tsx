/* eslint-disable @next/next/no-img-element */

const VideoComp = () => {
	return (
		<div className="videos">
			<p className="text-style" style={{ paddingLeft: "2rem" }}>
				All Sermons Videos
			</p>
			<div className="videos-wrapper">
				<div className="febuary">
					<p className="febuary-txt">Febuary, 2020</p>
					<div className="febuary-cont">
						{sermonDatas.map((sermonData, id) => (
							<div className="febuary-videos" key={id}>
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
						{sermonDatas.map((sermonData, id) => (
							<div className="febuary-videos" key={id}>
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
	month: string;
}

const sermonDatas = [
	{
		id: 1,
		month: "Febuary",
		img: "/public/images/logo.png",
		topic: "The Resurrecton of Jesus",
		text: "Part One",
		name: "Pastor John Emmanuel",
		date: "10/02/2022",
	},
	{
		id: 2,
		month: "March",
		img: "/public/images/logo.png",
		topic: "The Resurrecton of Jesus",
		text: "-Part Two",
		name: "Pastor John Emmanuel",
		date: "10/02/2022",
	},
	{
		id: 3,
		month: "April",
		img: "/public/images/logo.png",
		topic: "The Resurrecton of Jesus",
		text: "-Part Three",
		name: "Pastor John Emmanuel",
		date: "10/02/2022",
	},
	{
		id: 4,
		month: "May",
		img: "/public/images/logo.png",
		topic: "The Resurrecton of Jesus",
		text: "-Part Four",
		name: "Pastor John Emmanuel",
		date: "10/02/2022",
	},
	{
		id: 5,
		month: "june",
		img: "/public/images/logo.png",
		topic: "The Resurrecton of Jesus",
		text: "-Part Five",
		name: "Pastor John Emmanuel",
		date: "10/02/2022",
	},
	{
		id: 6,
		month: "july",
		img: "/public/images/logo.png",
		topic: "The Resurrecton of Jesus",
		text: "-Part Six",
		name: "Pastor John Emmanuel",
		date: "10/02/2022",
	},
];

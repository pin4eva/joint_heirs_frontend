/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const VideoComp = () => {
	return (
		<div className="videos container">
			<p className="video-text">All Sermon Videos</p>
			<div className="videos-wrapper ">
				{sermonDatas.map((sermonData, id) => (
					<div className="videos-wrapper-months" key={id}>
						<p className="videos-wrapper-months-txt">{sermonData.month}, 2020</p>
						<div className="months-container">
							<div className="videos-poster">
								<div className="overlay">
									<div className="image">
										<Link href="https://www.youtube.com/watch?v=i0Ks7yIeXFA" target="_blank">
											<i className="fa-solid fa-play"></i>
										</Link>
									</div>

									<div className="overlay-text">
										<p className="bold">{sermonData.topic}</p>
										<p className="overlay-text-word">{sermonData.text}</p>
									</div>
									<p className="overlay-text-word">{sermonData.name}</p>
									<p className="overlay-text-word">{sermonData.date}</p>
								</div>
							</div>
							<div className="videos-poster">
								<div className="overlay">
									<div className="image">
										<Link href="https://www.youtube.com/watch?v=i0Ks7yIeXFA" target="_blank">
											<i className="fa-solid fa-play"></i>
										</Link>
									</div>

									<div className="overlay-text">
										<p className="bold">{sermonData.topic}</p>
										<p className="overlay-text-word">{sermonData.text}</p>
									</div>
									<p className="overlay-text-word">{sermonData.name}</p>
									<p className="overlay-text-word">{sermonData.date}</p>
								</div>
							</div>
							<div className="videos-poster">
								<div className="overlay">
									<div className="image">
										<Link href="https://www.youtube.com/watch?v=i0Ks7yIeXFA" target="_blank">
											<i className="fa-solid fa-play"></i>
										</Link>
									</div>

									<div className="overlay-text">
										<p className="bold">{sermonData.topic}</p>
										<p className="overlay-text-word">{sermonData.text}</p>
									</div>
									<p className="overlay-text-word">{sermonData.name}</p>
									<p className="overlay-text-word">{sermonData.date}</p>
								</div>
							</div>
							<div className="videos-poster">
								<div className="overlay">
									<div className="image">
										<Link href="https://www.youtube.com/watch?v=i0Ks7yIeXFA" target="_blank">
											<i className="fa-solid fa-play"></i>
										</Link>
									</div>

									<div className="overlay-text">
										<p className="bold">{sermonData.topic}</p>
										<p>{sermonData.text}</p>
									</div>
									<p className="overlay-text-word">{sermonData.name}</p>
									<p className="overlay-text-word">{sermonData.date}</p>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default VideoComp;

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

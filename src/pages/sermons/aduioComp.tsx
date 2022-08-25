import Link from "next/link";

const AudioComp = () => {
	return (
		<div className="audio">
			<p className="text-style" style={{ paddingLeft: "2rem" }}>
				All Written Sermons
			</p>
			<div className="audio-container">
				{audioDatas.map((audioData, i) => (
					<div className="audio-container-wrapper" key={i}>
						<p className="febuary-text">{audioData.month}</p>
						<div className="audio-container-flex">
							<div className="audio-container-left">
								<h6>Bible Text</h6>
								<p>{audioData.txet}</p>
							</div>

							<div className="audio-container-right">
								<p className="bold">{audioData.title}</p>
								<hr />

								<div className="audio-bibletext">
									<p>{audioData.txet}</p>

									{audioData.verse}
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default AudioComp;
export interface IAudio {
	month: string;
	txet: string;
	title: string;
	verse: string;
}

export const audioDatas = [
	{
		month: "Febuary",
		txet: "Act. 20 vs 1 - 30",
		title: "The Resurrecton of Jesus - Part one",
		verse: (
			<p>
				20 When the uproar had ended, Paul sent for the disciples and, after encouraging them, said
				goodbye and set out for Macedonia. 2 He traveled through that area, speaking many words of
				encouragement to the people <Link href="#">Read more</Link>
			</p>
		),
	},
	{
		month: "March",
		txet: "John 10 vs 16",
		title: "The Resurrecton of Jesus - Part one",
		verse: (
			<p>
				confidence When the uproar had ended, Paul sent for the disciples and, after encouraging
				them, said goodbye and set out for Macedonia. 2 He traveled through that area, speaking many
				words of encouragement to the people, Read more
			</p>
		),
	},
	{
		month: "April",
		txet: "Mat. 3 vs 16 - 17",
		title: "The Resurrecton of Jesus - Part one",
		verse: (
			<p>
				barbie When the uproar had ended, Paul sent for the disciples and, after encouraging them,
				said goodbye and set out for Macedonia. 2 He traveled through that area, speaking many words
				of encouragement to the people, Read more
			</p>
		),
	},
];

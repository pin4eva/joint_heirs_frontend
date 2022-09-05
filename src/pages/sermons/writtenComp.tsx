import Link from "next/link";

const WrittenComp = () => {
	return (
		<div className="written ">
			<div className="written-main  ">
				<p className="text-style container">All Written Sermons</p>
			</div>
			<div className="written-container  container ">
				{audioDatas.map((audioData, id) => (
					<div className="written-container-wrapper  " key={id}>
						<p className="month-text">{audioData.month}</p>
						<div className="written-container-flex ">
							<div className="written-container-left">
								<h6>Bible Text</h6>
								<p>{audioData.txet}</p>
								<p>{audioData.txet}</p>
								<p>{audioData.txet}</p>
							</div>

							<div className="written-container-right">
								<h6 className="written-bold">{audioData.title}</h6>

								<div className="written-bibletext">
									<p className="written-bibletext-blue">{audioData.txet}</p>

									<p className="written-bibletext-verse">{audioData.verse}</p>
								</div>
								<div className="written-bibletext">
									<p className="written-bibletext-blue">{audioData.txet}</p>

									<p className="written-bibletext-verse">{audioData.verse}</p>
								</div>
								<div className="written-bibletext">
									<p className="written-bibletext-blue">{audioData.txet}</p>

									<p className="written-bibletext-verse">{audioData.verse}</p>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default WrittenComp;
export interface IAudio {
	id: number;
	month: string;
	txet: string;
	title: string;
	verse: string;
}

export const audioDatas = [
	{
		id: 1,
		month: "Febuary",
		txet: "Act. 20 vs 1 - 30",
		title: "The Resurrecton of Jesus - Part one",
		verse: (
			<p>
				20 When the uproar had ended, Paul sent for the disciples and, after encouraging them, said
				goodbye and set out for Macedonia. 2 He traveled through that area, speaking many words of
				encouragement to the people, <Link href="#"> Read more</Link>.
			</p>
		),
	},
	{
		id: 2,
		month: "March",
		txet: "John 10 vs 16",
		title: "The Resurrecton of Jesus - Part one",
		verse: (
			<p>
				When the uproar had ended, Paul sent for the disciples and, after encouraging them, said
				goodbye and set out for Macedonia. 2 He traveled through that area, speaking many words of
				encouragement to the people, <Link href="#"> Read more</Link>.
			</p>
		),
	},
	{
		id: 3,
		month: "April",
		txet: "Mat. 3 vs 16 - 17",
		title: "The Resurrecton of Jesus - Part one",
		verse: (
			<p>
				When the uproar had ended, Paul sent for the disciples and, after encouraging them, said
				goodbye and set out for Macedonia. 2 He traveled through that area, speaking many words of
				encouragement to the people, <Link href="#"> Read more</Link>.
			</p>
		),
	},
];

/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

interface SermonItem {
	id: number;
	title: string;
	date: string;
	pastor: string;
	duration: string;
}

const sermonItems: SermonItem[] = [
	{
		id: 1,
		title: "The Law of Giving",
		date: "28.05.24",
		pastor: "Apostle Edirhin Eta",
		duration: "45:32",
	},
	{
		id: 2,
		title: "Walking in Divine Purpose",
		date: "21.05.24",
		pastor: "Pastor John Emmanuel",
		duration: "52:18",
	},
	{
		id: 3,
		title: "The Power of Faith",
		date: "14.05.24",
		pastor: "Pastor Sarah Whyte",
		duration: "38:47",
	},
];

const SermonAudioComp = () => {
	return (
		<section className="left sermon-audio-wrapper" aria-labelledby="sermons-heading">
			<div className="sermon-header">
				<h1 id="sermons-heading" className="sermon-title">
					Recent Sermons
				</h1>
				<p className="sermon-subtitle">Listen to our latest messages and grow in faith</p>
			</div>

			<div className="sermon-list" role="list">
				{sermonItems.map((sermon) => (
					<article key={sermon.id} className="sermon-item" role="listitem">
						<div
							className="sermon-controls"
							role="group"
							aria-label={`Controls for ${sermon.title}`}
						>
							<Link
								href={`/sermons/${sermon.id}`}
								className="control-btn play-btn"
								aria-label={`Play ${sermon.title} by ${sermon.pastor}`}
								title="Play sermon"
							>
								<img src="/images/SAplay.png" alt="" role="presentation" />
							</Link>
							<Link
								href={`/sermons/${sermon.id}?tab=audio`}
								className="control-btn audio-btn"
								aria-label={`Listen to audio version of ${sermon.title}`}
								title="Audio version"
							>
								<img src="/images/SAvoice.png" alt="" role="presentation" />
							</Link>
							<Link
								href={`/sermons/${sermon.id}?tab=transcript`}
								className="control-btn read-btn"
								aria-label={`Read transcript of ${sermon.title}`}
								title="Read transcript"
							>
								<img src="/images/SAread.png" alt="" role="presentation" />
							</Link>
						</div>

						<div className="sermon-content">
							<h3 className="sermon-content-title">{sermon.title}</h3>
							<div className="sermon-meta">
								<time className="sermon-date" dateTime={sermon.date.replace(/\./g, "-")}>
									{sermon.date}
								</time>
								<span className="sermon-pastor">{sermon.pastor}</span>
								<span className="sermon-duration" aria-label={`Duration: ${sermon.duration}`}>
									{sermon.duration}
								</span>
							</div>
						</div>
					</article>
				))}
			</div>

			<Link href="/sermons" className="view-more-btn" aria-label="View all sermons">
				<span>View All Sermons</span>
				<svg
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
				>
					<path
						d="M5 12H19M19 12L12 5M19 12L12 19"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</Link>
		</section>
	);
};

export default SermonAudioComp;

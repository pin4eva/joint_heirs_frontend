/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const SermonAudioComp = () => {
	return (
		<div className="left">
			<h1 className="text-dark text-center mt-4 fw-bold">Sermons</h1>
			<div className="audios">
				<div className="audio-hold">
					<div className="audio-play-icons">
						<Link href="/">
							<a>
								<img src="/images/SAplay.png" alt="" />
							</a>
						</Link>
						<hr />
						<Link href="/">
							<a>
								<img src="/images/SAvoice.png" alt="" />
							</a>
						</Link>
						<hr />
						<Link href="/">
							<a>
								<img src="/images/SAread.png" alt="" />
							</a>
						</Link>
					</div>
					<div className="audio-playing">
						<h6 className="text-secondary fw-semibold mb-0 ms-2">The Death of Jesus - Part One</h6>
						<p className="mb-0 ms-2">
							<big className="fs-6 fw-bold text-dark pe-2">20.05.28</big>Pastor John Mark
						</p>
					</div>
				</div>
				<div className="audio-hold">
					<div className="audio-play-icons">
						<Link href="/">
							<a>
								<img src="/images/SAplay.png" alt="" />
							</a>
						</Link>
						<hr />
						<Link href="/">
							<a>
								<img src="/images/SAvoice.png" alt="" />
							</a>
						</Link>
						<hr />
						<Link href="/">
							<a>
								<img src="/images/SAread.png" alt="" />
							</a>
						</Link>
					</div>
					<div className="audio-playing">
						<h6 className="text-secondary fw-semibold mb-0 ms-2">The Death of Jesus - Part One</h6>
						<p className="mb-0 ms-2">
							<big className="fs-6 fw-bold text-dark pe-2">20.05.28</big>Pastor John Mark
						</p>
					</div>
				</div>
				<div className="audio-hold">
					<div className="audio-play-icons">
						<Link href="/">
							<a>
								<img src="/images/SAplay.png" alt="" />
							</a>
						</Link>
						<hr />
						<Link href="/">
							<a>
								<img src="/images/SAvoice.png" alt="" />
							</a>
						</Link>
						<hr />
						<Link href="/">
							<a>
								<img src="/images/SAread.png" alt="" />
							</a>
						</Link>
					</div>
					<div className="audio-playing">
						<h6 className="text-secondary fw-semibold mb-0 ms-2">The Death of Jesus - Part One</h6>
						<p className="mb-0 ms-2">
							<big className="fs-6 fw-bold text-dark pe-2">20.05.28</big>Pastor John Mark
						</p>
					</div>
				</div>
			</div>

			<Link href="/">
				<a className=" pd-2 text-decoration-none btn button-animation">View More</a>
			</Link>
		</div>
	);
};

export default SermonAudioComp;

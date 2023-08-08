/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { navList } from "./HeaderComp";

const FooterComp = () => {
	return (
		<footer>
			<section>
				<div className="footer-subscribe">
					<div className="container">
						<div className="footer-sub">
							<div className="sub-text">
								<h2 className="text-secondary mb-0">Subscribe</h2>
								<p className="text-dark mb-0">To Our NewsLetter</p>
							</div>
							<form>
								<input type="text" placeholder="Enter Email" className="form-control" />
								<button className="btn btn-warning text-light button-animation">
									Subscribe Now
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>
			<div className="footer-main">
				<div className="container">
					<div className="footer-main-content">
						<div className="text-centa">
							<ul className="nav">
								{navList.map((nav, i) => (
									<li className="nav-item" key={i}>
										<Link href={nav.link} className="nav-link fw-500">
											{nav.name}
										</Link>
									</li>
								))}
							</ul>
							<div className="nav-active">
								<Link href="/">JOIN US</Link>
							</div>
						</div>
						<div className="text-center d-flex">
							<img src="/images/logo.png" alt="" />
							<h5 className="text-start mb-0 text-light ms-2">
								Joint Heirs Assembly <br /> International
							</h5>
						</div>
						<div className="requests">
							<button className="btn btn-outline-light fw-bold">PRAYER REQUEST</button>
							<button className="btn btn-outline-light fw-bold">BIBLE READING </button>
							<button className="btn btn-outline-light fw-bold">TESTIMONY</button>
						</div>
						<div className="footer-icons">
							<Link href="/" className="facebook">
								<i className="fa-brands fa-facebook-f"></i>
							</Link>
							<Link href="/" className="twitter">
								<i className="fa-brands fa-twitter"></i>
							</Link>
							<Link href="/" className="insta">
								<i className="fa-brands fa-instagram"></i>
							</Link>
							<Link href="/" className="youtube">
								<i className="fa-brands fa-youtube"></i>
							</Link>
						</div>
					</div>
					<hr className="text-light mt-4" />
					<div className="text-center">
						<p className="text-light mb-0 ">
							<big className="fw-bold">Joint Heirs Assembly International </big>{" "}
							{new Date().getFullYear()}. All Rights Reserved
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default FooterComp;

import Link from "next/link";
import React from "react";
import NavbarComp from "../NavbarComp";

const HomePageComp = () => {
	return (
		<div className="main">
			<NavbarComp />
			<div className="container page1 text-center">
				<div className="  welcome-text">
					<h1 className=" text-light mt-5">
						Welcome To Our <br /> Church
					</h1>
					<h4 className="text-light jhai-text mt-2">Joint Heirs Assembly...</h4>
					<Link href="/">
						<a className="welcome">Im New Here</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default HomePageComp;

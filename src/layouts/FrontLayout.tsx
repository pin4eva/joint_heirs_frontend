import Head from "next/head";
import React, { Fragment } from "react";
import FooterComp from "../components/FooterComp";
import HeaderComp from "../components/HeaderComp";

const FrontLayout: React.FC<{ children: React.ReactElement; title?: string }> = ({
	children,
	title,
}) => {
	return (
		<Fragment>
			<Head>
				<title>{title}</title>
			</Head>
			<div className="front">
				<HeaderComp />
				<main>{children}</main>
				<FooterComp />
			</div>
		</Fragment>
	);
};

export default FrontLayout;

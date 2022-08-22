import Head from "next/head";
import React, { Fragment } from "react";
import FooterComp from "../components/FooterComp";
import HeaderComp from "../components/HeaderComp";

const FrontLayout: React.FC<{
	children: React.ReactElement;
	title?: string;
	showHeader?: boolean;
}> = ({ children, title, showHeader = true }) => {
	return (
		<Fragment>
			<Head>
				<title>{title}</title>
			</Head>
			<div className="front">
				{showHeader && <HeaderComp />}
				<main>{children}</main>
				<FooterComp />
			</div>
		</Fragment>
	);
};

export default FrontLayout;

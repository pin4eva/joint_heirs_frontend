import { NextPage } from "next";
import React from "react";
import FrontLayout from "../layouts/FrontLayout";

const Home: NextPage = () => {
	return (
		<FrontLayout title="Joint Heirs Assembly Int'l">
			<div className="home">
				<h1>
					<i className="fas fa-home"></i> Home
				</h1>
			</div>
		</FrontLayout>
	);
};

export default Home;

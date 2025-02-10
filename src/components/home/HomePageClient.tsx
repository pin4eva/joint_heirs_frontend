"use client";
import React, { ReactNode, useState } from "react";
import { ClipLoader } from "react-spinners";
import FrontLayout from "layouts/FrontLayout";

interface FrontLayoutClientProps {
	children: ReactNode;
}

const HomePageclient: React.FC<FrontLayoutClientProps> = ({ children }) => {
	const [loaded] = useState(true);
	const childType = (children as React.ReactElement)?.type;

	const isTeam = childType === ClipLoader;
	const isBranch = childType === FrontLayout;

	return (
		<div
			// className="loader"
			style={
				loaded && isBranch
					? { display: loaded ? "block" : "none" }
					: !isTeam
					? { display: loaded ? "none" : "flex" }
					: {}
			}
		>
			{children}
		</div>
	);
};

export default HomePageclient;

import FrontLayout from "layouts/FrontLayout";
import { useRouter } from "next/router";
import React from "react";

const SingleTeam = () => {
	const param = useRouter();

	return (
		<FrontLayout>
			<h2>SingleTeam</h2>
		</FrontLayout>
	);
};

export default SingleTeam;

import React from "react";
import styled from "styled-components";

const PastorBranchComp = () => {
	return (
		<div>
			<div className="branch-pastors container">
				{pastors.map((pastor) => (
					<SinglePastor
						key={pastor.pastorsName}
						image={pastor.image}
						pastorsName={pastor.pastorsName}
						branch={pastor.branch}
						branchAddress={pastor.branchAddress}
						designation={pastor?.designation}
					/>
				))}
			</div>
		</div>
	);
};

export default PastorBranchComp;

interface IPastorProp {
	image: string;
	pastorsName: string;
	branch: string;
	branchAddress: string;
	designation?: string;
}

const SinglePastor: React.FC<IPastorProp> = ({
	image,
	pastorsName,
	branch,
	branchAddress,
	designation,
}) => {
	return (
		<Wrapper className="branch-pastors-item">
			<div className="branch-pastors-item-img" style={{ backgroundImage: `url(${image})` }}></div>
			<h3 className="text-center mt-4">{pastorsName}</h3>
			<small className="text-center fw-bold text-primary d-block">{designation}</small>
			<div className="address-wrapper">
				<p className="text-center mt-4">{branchAddress}</p>
			</div>
			<h4 className="text-center">{branch}</h4>
			<div className="text-center mt-4">
				<button className="btn btn-warning text-light">Contact Branch</button>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.div``;

const pastors: IPastorProp[] = [
	{
		pastorsName: "Apst. Edirhin Eta",
		image: "/images/daddy-1.jpg",
		branch: "Head Quater",
		branchAddress: "23 Ordu Avenue, Eliowhani Port Harcourt, Rivers State",
		designation: "General Overseer",
	},
	{
		pastorsName: "Pst. Roselin Eta",
		image: "/images/mummy-1.jpg",
		branch: "Head Quater",
		branchAddress: "23 Ordu Avenue, Eliowhani Port Harcourt, Rivers State",
	},
];

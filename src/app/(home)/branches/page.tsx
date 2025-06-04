import PastorBranchComp from "components/branches/PastorBranchComp";

const OurBranch = () => {
	return (
		<div className="branches">
			<div className="branches-hero">
				<div className="branches-inner ">
					<h1 className="text-white">Our Branches</h1>
					<h4 className="rochester text-white">Joint Heirs Assembly...</h4>
					{/* <div className="branches-inner-text">

				</div> */}
				</div>
			</div>

			<div className="pst-branch ">
				<PastorBranchComp />
			</div>
		</div>
	);
};

export default OurBranch;

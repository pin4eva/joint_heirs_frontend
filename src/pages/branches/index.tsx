import PastorBranchComp from "../../components/branches/PastorBranchComp";

import FrontLayout from "../../layouts/FrontLayout";

const OurBranch = () => {
	return (
		<FrontLayout title="Joint Heirs Assembly Int'l">
			<div className="branches">
				<div className="branches-hero">
					<div className="branches-inner ">
						<h1 className="text-light">Our Branches</h1>
						<h4 className="rochester text-light">Joint Heirs Assembly...</h4>
						{/* <div className="branches-inner-text">

						</div> */}
					</div>
				</div>

				<div className="pst-branch ">
					<PastorBranchComp />
				</div>
			</div>
		</FrontLayout>
	);
};

export default OurBranch;

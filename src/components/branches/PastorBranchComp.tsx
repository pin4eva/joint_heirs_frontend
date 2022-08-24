import React from "react";

const PastorBranchComp = () => {
	return (
		<div>
			<div className="branch-pastor container">
				<div className="branch-pastor-ken">
					<div className="branch-pastor-ken-img"></div>
					<div className="container ">
						<h3 className=" text-center mt-4">
							Pastor Kenneth <br /> Emmanuel
						</h3>
						<div className="address-wrapper">
							<p className=" text-center mt-4">
								23, Aggrey Road, Aba <br /> Port Harcourt, Rivers State.
							</p>
						</div>
						<h4 className=" text-center">Lagos Branch</h4>
						<div className="text-center mt-4 ">
							<button className="btn btn-warning text-light">Contact Branch</button>
						</div>
					</div>
				</div>
				<div className="branch-pastor-john">
					<div className="branch-pastor-john-img"></div>
					<h3 className="text-center mt-4">
						Pastor John <br /> Kingsley
					</h3>
					<div className="address-wrapper">
						<p className="text-center mt-4">
							23, Aggrey Road, Aba <br /> Port Harcourt, Rivers State.
						</p>
					</div>
					<h4 className="text-center">Owerri Branch</h4>
					<div className="text-center mt-4">
						<button className="btn btn-warning text-light">Contact Branch</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PastorBranchComp;

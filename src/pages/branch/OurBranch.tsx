import Link from "next/link";
import React from "react";

import HeaderComp from "../../components/HeaderComp";
import FrontLayout from "../../layouts/FrontLayout";

const OurBranch = () => {
	return (
		<FrontLayout title="Joint Heirs Assembly Int'l" showHeader={false}>
			<div className="branches">
				<div className="branches-hero">
				<HeaderComp  />
				
                <div className="branches-text ">
					<div className="branches-text-inner">
					<h1 className="text-light">Our Branches</h1>
					<h4 className="jhai-text">Joint Heirs Assembly...</h4>
					</div>
				</div>



				</div>

				
				
				
				
				
				
				
					<div className="footer-subscribe">
						<div className="container">
							<div className="footer-sub">
								<div className="sub-text">
									<h2 className="text-secondary mb-0">Subscribe</h2>
									<p className="text-dark mb-0">To Our NewsLetter</p>
								</div>
								<form>
									<input type="text" placeholder="Enter Email" className="form-control" />
									<button className="btn btn-warning text-light">Subscribe Now</button>
								</form>
							</div>
						</div>
					</div>
				</div>
		
		</FrontLayout>
	);
};

export default OurBranch;



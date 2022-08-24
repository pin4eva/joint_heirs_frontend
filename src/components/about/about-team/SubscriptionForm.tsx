import React from "react";

const SubscriptionForm = () => {
	return (
		<div
			style={{ padding: "0 2.5em" }}
			className="justify-center subscription-wrapper container-fluid"
		>
			<div className="text">
				<h1>Subscribe</h1>
				<h5>To Our Newsletter</h5>
			</div>
			<form>
				<input type="email" placeholder="Enter Email" />
				<button>Subscribe Now</button>
			</form>
		</div>
	);
};

export default SubscriptionForm;

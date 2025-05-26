import FooterComp from "components/FooterComp";
import HeaderComp from "components/HeaderComp";

const FrontLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<div className="front">
			<HeaderComp />
			<main>{children}</main>
			<FooterComp />
		</div>
	);
};

export default FrontLayout;

import FrontLayout from "layouts/FrontLayout";
import RecordedComp from "./recordededComp";
import VideoComp from "./videoComp";
import WrittenComp from "./writtenComp";
import { SermonTabEnum, TabComp } from "components/sermons/TabComp";

const SermonsPage = async ({ searchParams }: { searchParams: Promise<{ tab?: string }> }) => {
	const params = await searchParams;
	const activeTab = params.tab || "videos";
	return (
		<FrontLayout title="Sermon">
			<div id="sermon">
				<header className="sermon-header">
					<div className="sermon-header-inner">
						<p className="top-text">Our Sermons</p>
						<p className=" text-style">Joint Heirs Assembly...</p>
					</div>
				</header>

				<div className="sermon-navigation">
					<div className="sermon-navigation-wrapper container">
						<div></div>
						<div className="sermon-toggle ">
							<div className="tab">
								<TabComp isActive={activeTab === SermonTabEnum.VIDEOS} tab={SermonTabEnum.VIDEOS} />
								<TabComp isActive={activeTab === SermonTabEnum.AUDIO} tab={SermonTabEnum.AUDIO} />
								<TabComp isActive={activeTab === SermonTabEnum.TEXT} tab={SermonTabEnum.TEXT} />
							</div>
						</div>
					</div>
				</div>
				{activeTab === SermonTabEnum.VIDEOS && <VideoComp />}
				{activeTab === SermonTabEnum.TEXT && <WrittenComp />}
				{activeTab === SermonTabEnum.AUDIO && <RecordedComp />}
			</div>
		</FrontLayout>
	);
};

export default SermonsPage;

// import { SermonTabEnu } from "@/constants";
// import FrontLayout from "layouts/FrontLayout";
// import { TabComp, SermonTabEnum } from "components/sermons/TabComp";
// import VideoComp from "./videoComp";
// import WrittenComp from "./writtenComp";
// import RecordedComp from "./recordededComp";
// import { Suspense } from "react";
// import SermonControls from "components/sermons/SermonControls"; // ✅ Moved interactive elements to a client component

// interface SermonsPageProps {
// 	searchParams?: { tab?: string };
// }

// export default async function SermonsPage({ searchParams }: SermonsPageProps) {
// 	const activeTab = searchParams?.tab || "videos"; // ✅ Read from props, no client hooks

// 	return (
// 		<FrontLayout title="Sermon">
// 			<div id="sermon">
// 				<header className="sermon-header">
// 					<div className="sermon-header-inner">
// 						<p className="top-text">Our Sermons</p>
// 						<p className="text-style">Joint Heirs Assembly...</p>
// 					</div>
// 				</header>

// 				<div className="sermon-navigation">
// 					<div className="sermon-navigation-wrapper container">
// 						<div></div>
// 						<div className="sermon-toggle">
// 							<div className="tab">
// 								<TabComp isActive={activeTab === SermonTabEnum.VIDEOS} tab={SermonTabEnum.VIDEOS} />
// 								<TabComp isActive={activeTab === SermonTabEnum.AUDIO} tab={SermonTabEnum.AUDIO} />
// 								<TabComp isActive={activeTab === SermonTabEnum.TEXT} tab={SermonTabEnum.TEXT} />
// 							</div>

// 							{/* ✅ Move Interactive Elements to Client Component */}
// 							<Suspense fallback={<div>Loading filters...</div>}>
// 								<SermonControls />
// 							</Suspense>
// 						</div>
// 					</div>
// 				</div>

// 				{/* ✅ Render Components Based on Active Tab */}
// 				{activeTab === SermonTabEnum.VIDEOS && <VideoComp />}
// 				{activeTab === SermonTabEnum.TEXT && <WrittenComp />}
// 				{activeTab === SermonTabEnum.AUDIO && <RecordedComp />}
// 			</div>
// 		</FrontLayout>
// 	);
// }

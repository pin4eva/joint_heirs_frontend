import Link from "next/link";

export enum SermonTabEnum {
	VIDEOS = "videos",
	AUDIO = "audio",
	TEXT = "text",
}

export const TabComp: React.FC<{ tab: SermonTabEnum; isActive: boolean }> = ({ tab, isActive }) => {
	return (
		<Link href={`/sermons?tab=${tab}`} className={`sermon-tab-item ${isActive ? "active" : ""}`}>
			{tab === SermonTabEnum.VIDEOS ? (
				<i className="fa-solid fa-video "></i>
			) : tab === SermonTabEnum.AUDIO ? (
				<i className="fa-solid fa-microphone"></i>
			) : (
				<i className="fa-solid fa-book-open"></i>
			)}
		</Link>
	);
};

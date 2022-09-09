export interface ISermon {
	id?: string;
	title: string;
	date: Date | string;
	body?: string;
	thumbnail: string;
	audioLink: string;
	videoLink: string;
	sermonBy: string;
}

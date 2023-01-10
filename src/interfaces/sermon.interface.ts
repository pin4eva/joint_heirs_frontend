import { Iimage } from "./image.interface";

export interface ISermon {
	id?: string;
	title: string;
	date: Date | string;
	body?: string;
	thumbnail: Iimage;
	audioLink: string;
	videoLink: string;
	sermonBy: string;
}

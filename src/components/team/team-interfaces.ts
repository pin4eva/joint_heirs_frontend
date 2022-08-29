export interface TeamCardI {
	id: number;
	image: string;
	name: string;
	department?: DepartmentsEnum;
	position: string;
	description: string;
	socials: {
		facebook_url: string;
		twitter_url: string;
	};
	email: string;
	phone: string;
	address: string;
}

export enum DepartmentsEnum {
	LEADERSHIP = "Leadership",
	TECHNICALS = "Technicals",
	MUSIC_DEPARTMENT = "Music Department",
	WORKERS = "Workers",
}

export interface IEvent {
	id?: string;
	startDate: Date | string;
	endDate?: Date | string;
	title: string;
	venue: string;
	category: string;
	description: string;
	image: string;
	isSingleDate?: boolean;
}

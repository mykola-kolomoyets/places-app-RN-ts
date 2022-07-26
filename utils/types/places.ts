export type Location = {
	lat: number;
	lng: number;
}

export interface IPlace {
	id: string;
	title: string;
	imageUri: string;
	address: string;
	location: Location | undefined;
}

export type PlaceResponse = {
	id: string;
	title: string;
	imageUri: string;
	address: string;
	lat: number;
	lng: number;
}

export type PlacesListItems = Place[];

export default class Place implements IPlace {
	public id: string = "";
	public title: string = "";
	public address: string = "";
	public imageUri: string = "";
	public location: Location | undefined;
	
	
	constructor(item: IPlace) {
		Object.assign(this, item);
	}
}


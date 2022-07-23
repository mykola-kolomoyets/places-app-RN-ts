import {Location} from "./types/places";

const API_KEY = "AIzaSyCIMwajXvdXzYDOCGGMKnl61hDlTlkzBWc";

export const createId = () => new Date().toString() + Math.random().toString();

export const getMapPreview = ({
		lat,
		lng
}: Location) => {
	const width = 400;
	const height = 200;
	const markerColor = "red";
	
	return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=${width}x${height}&maptype=roadmap&markers=color:${markerColor}%7Clabel:S%7C${lat},${lng}&key=${API_KEY}`
};

export const getAddress = async ({
	 lat,
	 lng
 }: Location) => {
	const URL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${API_KEY}`;
	
	const response = await fetch(URL);
	
	if (!response.ok) throw new Error("Failed to fetch address");
	
	const data = await response.json();

	return data.results[0].formatted_address;
}
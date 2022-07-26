import Place, {PlaceResponse} from "../../utils/types/places";

import Database from './../';

export default class PlacesService {
	public static addPlace = (place: Place) => {
		const {title, address, imageUri, location} = place;
		
		return new Promise((res, rej) => {
			Database.database.transaction((tx) => {
				tx.executeSql(`INSERT INTO places(title, imageUri, address, lat, lng) VALUES (?, ?, ?, ?, ?)`,
					[
						title,
						imageUri,
						address,
						location!.lat,
						location!.lng
					],
					(_, result) => res(result),
					(_, error) => {
						rej(error);
						return false;
					});
			});
		});
	}
	
	public static getPlaces = () => {
		return new Promise<Place[]>((res, rej) => {
			Database.database.transaction((tx) => {
				tx.executeSql(`SELECT * FROM places`,
					[],
					(_, result) => res(result.rows._array.map(({lng, lat, ...other}) => new Place({
						location: {lat, lng},
						...other
					}))),
					(_, err) => {
						rej(err);
						return false;
					}
				);
			})
		});
	}
	
	public static getPlace = (id: string) => {
		return new Promise<Place>((res, rej) => {
			Database.database.transaction((tx) => {
				tx.executeSql(`SELECT * FROM places WHERE id = ?`,
					[id],
					(_, result) => {
						const {lng, lat, ...other} = result.rows.item(0);
						
						res(new Place({
							location: {lat, lng},
							...other
						}))
						
					}
				);
			})
		})
	}
}
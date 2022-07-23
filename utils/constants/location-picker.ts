import {LocationAccuracy, LocationOptions} from "expo-location";
import {Region} from "react-native-maps";

export const locationPickerOptions: LocationOptions = {
	accuracy: LocationAccuracy.Balanced
};

export const mapRegionOptions: Region = {
	latitude: 50.450001,
	longitude: 30.523333,
	latitudeDelta: 0.0922,
	longitudeDelta: 0.0421
}
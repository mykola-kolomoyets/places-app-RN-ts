import {LocationAccuracy, LocationOptions} from "expo-location";
import {Region} from "react-native-maps";
import {Location} from "../types/places";

export const locationPickerOptions: LocationOptions = {
	accuracy: LocationAccuracy.Balanced
};

export const mapRegionOptions = (initialLocation?: Location): Region => ({
	latitude: initialLocation?.lat || 50.450001,
	longitude:  initialLocation?.lng || 30.523333,
	latitudeDelta: 0.0922,
	longitudeDelta: 0.0421
});
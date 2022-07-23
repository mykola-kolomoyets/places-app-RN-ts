import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {ScreensList, StackParamsList, StackScreens} from "./stack";

import Places from "../../screens/places";
import AddPlace from "../../screens/add-place";
import PlaceDetails from "../../screens/place-details";
import Map from "../../screens/map";

export const Stack = createNativeStackNavigator<StackParamsList>();

export const screens: ScreensList = {
	[StackScreens.all]: Places,
	[StackScreens.addPlace]: AddPlace,
	[StackScreens.placeDetails]: PlaceDetails,
	[StackScreens.map]: Map
};
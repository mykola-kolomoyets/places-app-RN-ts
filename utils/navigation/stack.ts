import {FunctionComponent} from "react";
import {RouteProp, useNavigation, useRoute} from "@react-navigation/native";
import {
	NativeStackNavigationOptions,
	NativeStackNavigationProp,
	NativeStackScreenProps
} from "@react-navigation/native-stack";

import Place, {Location} from "../types/places";

import {Colors} from "../styles/colors";

export enum StackScreens {
	all = "All places",
	addPlace = "Add Place",
	placeDetails = "Place details",
	map = "Map"
}

export type StackParamsList = {
	[StackScreens.all]: { place: Place } | undefined,
	[StackScreens.addPlace]: { location: Location } | undefined,
	[StackScreens.placeDetails]: { id: string },
	[StackScreens.map]: { initialLocation: Location } | undefined
};

export type ScreensList = {
	[key in StackScreens]: FunctionComponent<{}> | FunctionComponent<StackScreen<key>>;
};

export type ScreenProps<T extends StackScreens> = {
	navigation: NativeStackNavigationProp<StackParamsList, T>
};


export type ScreenOptions = {
	[key in StackScreens]:
	NativeStackNavigationOptions | ((props: ScreenProps<key>) => NativeStackNavigationOptions)
};

export const initialScreenProps: ScreenOptions = {
	[StackScreens.all]: {
		title: "Your favourite places"
	},
	[StackScreens.placeDetails]: {
		title: 'Loading...'
	},
	[StackScreens.addPlace]: {
		title: "Add a new place"
	},
	[StackScreens.map]: {
		title: "Pick the location"
	}
};

export const initialStackNavigatorProps: NativeStackNavigationOptions = {
	headerStyle: {
		backgroundColor: Colors.primary500
	},
	headerTintColor: Colors.gray700,
	contentStyle: {
		backgroundColor: Colors.gray700
	}
};

export type StackScreen<ScreenName extends StackScreens> = NativeStackScreenProps<StackParamsList, ScreenName>

export const useStackedNavigation = () => useNavigation<NativeStackNavigationProp<StackParamsList>>();

export const useStackedRoute = <ScreenName extends StackScreens>() => useRoute<RouteProp<StackParamsList, ScreenName>>()
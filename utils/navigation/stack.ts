import {useNavigation} from "@react-navigation/native";
import {
	NativeStackNavigationOptions,
	NativeStackNavigationProp,
	NativeStackScreenProps
} from "@react-navigation/native-stack";
import {FunctionComponent} from "react";
import {Colors} from "../styles/colors";

export enum StackScreens {
	all = "All places",
	addPlace = "Add Place",
	placeDetails = "Place details"
}

export type StackParamsList = {
	[StackScreens.all]: undefined,
	[StackScreens.addPlace]: undefined,
	[StackScreens.placeDetails]: { id: string }
};

export type ScreensList = {
	[key in StackScreens]: FunctionComponent<{}>;
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
	[StackScreens.placeDetails]: {},
	[StackScreens.addPlace]: {
		title: "Add a new place"
	}
};

export const initialStackNavigatorProps: NativeStackNavigationOptions = {
	headerStyle: {
		backgroundColor: Colors.primary500,
	},
	headerTintColor: Colors.gray700,
	contentStyle: {
		backgroundColor: Colors.gray700
	}
};

export type StackScreen<ScreenName extends StackScreens> = NativeStackScreenProps<StackParamsList, ScreenName>

export const useStackedNavigation = () => useNavigation<NativeStackNavigationProp<StackParamsList>>();

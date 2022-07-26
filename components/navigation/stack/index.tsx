import {
	ScreenOptions,
	initialScreenProps,
	StackScreens, initialStackNavigatorProps,
} from "../../../utils/navigation/stack";

import IconButton from "../../ui/button/icon-button";
import {screens, Stack} from "../../../utils/navigation/constants";

const StackNavigator = () => {
	const screenOptions: ScreenOptions = {
		[StackScreens.all]: ({navigation}) => ({
			...initialScreenProps[StackScreens.all],
			headerRight: ({tintColor}) => (
				<IconButton
					name="add"
					color={tintColor || "white"}
					size={24}
					onPress={() => navigation.navigate(StackScreens.addPlace)}
				/>
			)
		}),
		[StackScreens.addPlace]: {
			...initialScreenProps[StackScreens.addPlace]
		},
		[StackScreens.placeDetails]: {
			...initialScreenProps[StackScreens.placeDetails]
		},
		[StackScreens.map]: {...initialScreenProps[StackScreens.map]}
	};
	
	return (
		<Stack.Navigator screenOptions={initialStackNavigatorProps}>
			{Object.entries(screens).map(([name, component]) => (
				<Stack.Screen key={name} {...{name: name as StackScreens, component, options: screenOptions[name as StackScreens]}}/>
			))}
		</Stack.Navigator>
	);
}

export default StackNavigator;
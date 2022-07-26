import {FC} from 'react';
import {View, Text} from "react-native";
import * as Notifications from 'expo-notifications';

import PlacesService from "../../db/places";

import {StackScreen, StackScreens} from "../../utils/navigation/stack";
import Place from "../../utils/types/places";

import PlaceForm from "../../components/layout/places-form";

const AddPlace: FC<StackScreen<StackScreens.addPlace>> = ({navigation}) => {
	const scheduleNotification = () => {
		return Notifications.scheduleNotificationAsync({
			content: {
				title: 'Place was added',
				body: 'You can see this details on All-Places page'
			},
			trigger: {
				seconds: 5
			}
		});
	};
	
	const onPlaceAdd = async (place: Place) => {
		await scheduleNotification();
		
		PlacesService.addPlace(place).then(() => {
			navigation.navigate(StackScreens.all, {place});
		});
		
	}
	
	return (
		<View>
			<PlaceForm onPlaceAdd={onPlaceAdd}/>
		</View>
	);
}

export default AddPlace;

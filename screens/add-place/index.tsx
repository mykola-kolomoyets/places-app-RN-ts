import {FC} from 'react';
import {View, Text} from "react-native";

import PlacesService from "../../db/places";

import {StackScreen, StackScreens} from "../../utils/navigation/stack";
import Place from "../../utils/types/places";

import PlaceForm from "../../components/layout/places-form";

const AddPlace: FC<StackScreen<StackScreens.addPlace>> = ({navigation}) => {
	const onPlaceAdd = async (place: Place) => {
		await PlacesService.addPlace(place).then(() => {
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

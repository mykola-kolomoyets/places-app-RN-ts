import {FC} from 'react';
import {View, Text} from "react-native";
import PlaceForm from "../../components/layout/places-form";
import {StackScreen, StackScreens} from "../../utils/navigation/stack";

const AddPlace: FC<StackScreen<StackScreens.addPlace>> = () => (
	<View>
		<PlaceForm/>
	</View>
);

export default AddPlace;

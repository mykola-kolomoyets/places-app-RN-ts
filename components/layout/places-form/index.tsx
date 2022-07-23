import {FC, useState} from 'react';
import {View, Text, ScrollView, TextInput} from "react-native";

import ImagePicker from "../../ui/image-picker";
import LocationPicker from "../../ui/location-picker";
import Button from "../../ui/button";

import styles from "./places-form.styles";
import {Location} from "../../../utils/types/places";

const PlaceForm: FC = () => {
	const [title, setTitle] = useState("");
	const [imageUri, setImageUri] = useState("");
	
	const [location, setLocation] = useState<Location | null>(null);
	const [locationAddress, setLocationAddress] = useState("");
	
	const onTitleChange = (value: string) => setTitle(value);
	
	const omImagePick = (uri: string) => setImageUri(uri);
	
	const onLocationPick = (location: Location, address: string) => {
		setLocation(location);
		setLocationAddress(address);
	}
	
	const onSavePlacePress = () => {
		console.log({title, imageUri, locationAddress, location});
	};
	
	return (
		<ScrollView>
			<View style={styles.form}>
				<Text style={styles.label}>Title</Text>
				<TextInput style={styles.input} value={title} onChangeText={onTitleChange}/>
				
				<ImagePicker onPick={omImagePick}/>
				
				<LocationPicker onPick={onLocationPick}/>
				
				<Button.Primary title="Add place" onPress={onSavePlacePress}/>
			</View>
		</ScrollView>
	)
};

export default PlaceForm;
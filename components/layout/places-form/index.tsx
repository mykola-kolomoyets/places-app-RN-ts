import {FC, useState} from 'react';
import {View, Text, ScrollView, TextInput} from "react-native";

import styles from "./places-form.styles";
import ImagePicker from "../../ui/image-picker";

const PlaceForm: FC = () => {
	const [title, setTitle] = useState("");
	
	const onTitleChange = (value: string) => setTitle(value);
	
	return (
		<ScrollView>
			<View style={styles.form}>
				<Text style={styles.label}>Title</Text>
				<TextInput style={styles.input} value={title} onChangeText={onTitleChange}/>
				
				<ImagePicker />
			</View>
		</ScrollView>
	)
};

export default PlaceForm;
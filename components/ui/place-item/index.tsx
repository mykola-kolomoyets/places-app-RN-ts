import {FC} from 'react';
import {View, Text, Image, Pressable} from 'react-native';

import Place from "../../../utils/types/places";

import styles from './place-item.styles';

type PlaceItemProps = {
	item: Place;
	onSelect: (id: string) => void;
};
const PlaceItem: FC<PlaceItemProps> = ({item, onSelect}) => {
	
	return (
		<Pressable style={({pressed}) => [styles.container, pressed && styles.pressed]} onPress={() => onSelect(item.id)}>
			<Image style={styles.image} source={{uri: item.imageUri}}/>
			<View style={styles.textContainer}>
				<Text style={styles.title}>{item.title}</Text>
				<Text style={styles.address}>{item.address}</Text>
			</View>
		</Pressable>
	)
};

export default PlaceItem;
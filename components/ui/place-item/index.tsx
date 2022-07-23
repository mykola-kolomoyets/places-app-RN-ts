import {FC} from 'react';
import {View, Text, Image, Pressable} from 'react-native';

import Place from "../../../utils/types/places";

type PlaceItemProps = {
	item: Place;
	onSelect: (id: string) => void;
};
const PlaceItem: FC<PlaceItemProps> = ({item, onSelect}) => {
	
	return (
		<Pressable onPress={() => onSelect(item.id)}>
			<Image source={{uri: item.imageUri}}/>
			<View>
				<Text>{item.title}</Text>
				<Text>{item.address}</Text>
			</View>
		</Pressable>
	)
};

export default PlaceItem;
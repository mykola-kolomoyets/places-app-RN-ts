import {FC} from "react";
import {View, FlatList, Text} from "react-native";

import {PlacesListItems} from "../../../utils/types/places";

import PlaceItem from "../../ui/place-item";

import styles from './places-list.styles';

type PlacesListProps = {
	places: PlacesListItems;
};
const PlacesList: FC<PlacesListProps> = ({places}) => {
	if (!places.length) return (
		<View style={styles.emptyContainer}>
			<Text style={styles.emptyText}>No places to show...</Text>
		</View>
	);
	
	const onPlaceItemPress = (id: string) => {
	}
	
	return (
		<FlatList
			data={places}
			renderItem={({item, index}) => <PlaceItem {...{item, onSelect: onPlaceItemPress}}/>}
			keyExtractor={item => item.id}
		/>
	);
};

export default PlacesList;
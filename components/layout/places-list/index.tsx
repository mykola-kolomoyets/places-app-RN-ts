import {FC} from "react";
import {View, FlatList, Text} from "react-native";

import {PlacesListItems} from "../../../utils/types/places";
import {StackScreens, useStackedNavigation} from "../../../utils/navigation/stack";

import PlaceItem from "../../ui/place-item";

import styles from './places-list.styles';

type PlacesListProps = {
	places: PlacesListItems;
};
const PlacesList: FC<PlacesListProps> = ({places}) => {
	const navigation = useStackedNavigation();
	
	if (!places.length) return (
		<View style={styles.emptyContainer}>
			<Text style={styles.emptyText}>No places to show...</Text>
		</View>
	);
	
	const onPlaceItemPress = (id: string) => navigation.navigate(StackScreens.placeDetails, {id});
	
	return (
		<View style={styles.container}>
			<FlatList
				data={places}
				renderItem={({item, index}) => <PlaceItem {...{item, onSelect: onPlaceItemPress}}/>}
				keyExtractor={item => item.id}
			/>
		</View>
	);
};

export default PlacesList;
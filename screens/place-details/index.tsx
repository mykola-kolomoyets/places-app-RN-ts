import {FC, useEffect, useLayoutEffect, useState} from "react";
import {View, Text, ScrollView, Image} from "react-native";

import PlacesService from "../../db/places";

import {StackScreen, StackScreens} from "../../utils/navigation/stack";
import Place from "../../utils/types/places";

import Button from "../../components/ui/button";

import styles from './place-details.styles';

const PlaceDetails: FC<StackScreen<StackScreens.placeDetails>> = ({route, navigation}) => {
	const {id} = route.params;
	
	const [placeData, setPlaceData] = useState<Place>();
	
	const onMapView = () => {
		navigation.navigate(StackScreens.map, { initialLocation: placeData?.location! });
	};
	
	useEffect(() => {
		PlacesService.getPlace(id).then(place => setPlaceData(place));
		
		navigation.setOptions({
			title: 'loading...'
		});
		
	}, [id]);
	
	useLayoutEffect(() => {
		navigation.setOptions({
			title: placeData?.title
		});
	}, [placeData])
	
	return (
		<ScrollView>
			<Image style={styles.image} source={{uri: placeData?.imageUri}}/>
			
			<View style={styles.locationContainer}>
				<View style={styles.addressContainer}>
					<Text style={styles.address}>{placeData?.address}</Text>
				</View>
				
				<Button.Outlined leftAddon="map" title="View on map" onPress={onMapView} />
			</View>
		</ScrollView>
	)
};

export default PlaceDetails;
import {FC, useCallback, useEffect, useLayoutEffect, useState} from 'react';
import {Alert} from "react-native";
import MapView, {MapEvent, Marker} from 'react-native-maps';

import {Location} from "../../utils/types/places";
import {mapRegionOptions} from "../../utils/constants/location-picker";
import {StackScreen, StackScreens} from "../../utils/navigation/stack";

import Button from "../../components/ui/button";

import styles from './map.styles';

const Map: FC<StackScreen<StackScreens.map>> = ({navigation, route}) => {
	const [location, setLocation] = useState<Location | null>(null);
	
	const initialLocation = route.params?.initialLocation;
	
	const onMapPress = (event: MapEvent) => {
		const {latitude: lat, longitude: lng} = event.nativeEvent.coordinate;
		
		setLocation({lat, lng});
	}
	
	const onLocationSubmit = useCallback(() => {
		if (!location) return Alert.alert(
			"No location picked!",
			"Yu have to pick the location first (by tapping on the map)"
		);
		
		navigation.navigate(StackScreens.addPlace, {location});
	}, [navigation, location]);
	
	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: !initialLocation ? ({tintColor}) => (
				<Button.Icon name="save" size={24} color={tintColor || "black"} onPress={onLocationSubmit}/>
			) : undefined,
			title: initialLocation ? 'View the location' : 'Pick the location'
		});
	}, [navigation, onLocationSubmit, initialLocation]);
	
	useEffect(() => {
		initialLocation && setLocation(initialLocation);
	}, [initialLocation]);
	
	return (
		<MapView
			style={styles.map}
			initialRegion={mapRegionOptions(initialLocation)}
			onPress={!initialLocation ? onMapPress : () => {}}
		>
			{location && (
				<Marker coordinate={{latitude: location.lat, longitude: location.lng}}/>
			)}
		</MapView>
	)
};

export default Map;
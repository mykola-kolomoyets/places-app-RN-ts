import {FC, useCallback, useLayoutEffect, useState} from 'react';
import MapView, {MapEvent, Marker} from 'react-native-maps';

import {Location} from "../../utils/types/places";
import {mapRegionOptions} from "../../utils/constants/location-picker";

import styles from './map.styles';
import {Alert} from "react-native";
import {StackScreen, StackScreens} from "../../utils/navigation/stack";
import Button from "../../components/ui/button";

const Map: FC<StackScreen<StackScreens.map>> = ({navigation}) => {
	const [location, setLocation] = useState<Location | null>(null);
	
	const onMapPress = (event: MapEvent) => {
		const {latitude: lat, longitude: lng} = event.nativeEvent.coordinate;
		
		setLocation({lat, lng});
	}
	
	const onLocationSubmit = useCallback(() => {
		if (!location) return Alert.alert(
			"No location picked!",
			"Yu have to pick the location first (by tapping on the map)"
		);
		
		navigation.navigate(StackScreens.addPlace, { location });
	}, [navigation, location]);
	
	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: ({tintColor}) => (
				<Button.Icon name="save" size={24} color={tintColor || "black"} onPress={onLocationSubmit}/>
			)
		})
	}, [navigation, onLocationSubmit]);
	
	return (
		<MapView
			style={styles.map}
			initialRegion={mapRegionOptions}
			onPress={onMapPress}
		>
			{location && (
				<Marker coordinate={{latitude: location.lat, longitude: location.lng}}/>
			)}
		</MapView>
	)
};

export default Map;
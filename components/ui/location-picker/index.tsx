import {FC, useEffect, useState} from "react";
import {View, Text, Alert, Image} from "react-native";
import {getCurrentPositionAsync, PermissionStatus, useForegroundPermissions} from "expo-location";

import {locationPickerOptions} from "../../../utils/constants/location-picker";
import {Location} from "../../../utils/types/places";

import Button from "../button";

import {getAddress, getMapPreview} from "../../../utils/functions";
import {StackScreens, useStackedNavigation, useStackedRoute} from "../../../utils/navigation/stack";

import styles from './location-picker.styles';

type LocationPickerProps = {
	onPick: (location: Location, address: string) => void;
}
const LocationPicker: FC<LocationPickerProps> = ({onPick}) => {
	const [locationPermissionStatus, requestPermission] = useForegroundPermissions();
	
	const [location, setLocation] = useState<Location | null>(null);
	
	const navigation = useStackedNavigation();
	const route = useStackedRoute<StackScreens.addPlace>();
	
	const pickedLocation = route.params?.location;
	
	const verifyLocationPermissions = async () => {
		if (locationPermissionStatus?.status === PermissionStatus.UNDETERMINED) {
			const permissionsResponse = await requestPermission();
			
			return permissionsResponse.granted;
		}
		
		if (locationPermissionStatus?.status === PermissionStatus.DENIED) {
			Alert.alert(
				"Insufficient Permissions!",
				"You need to grant location permissions to use this app"
			);
		}
		
		return true;
	};
	
	const onGetLocation = async () => {
		const isLocationAllowed = await verifyLocationPermissions();
		
		if (!isLocationAllowed) return;
		
		const location = await getCurrentPositionAsync(locationPickerOptions);
		
		const locationToSave: Location = {lat: location.coords.latitude, lng: location.coords.longitude};
		
		setLocation(locationToSave);
	};
	
	const onPickOnMap = () => {
		navigation.navigate(StackScreens.map);
	};
	
	useEffect(() => {
		if (pickedLocation) setLocation(pickedLocation);
	}, [pickedLocation]);
	
	useEffect(() => {
		const getFullAddress = async () => {
			if (location) {
				const fullAddress = await getAddress(location);
				
				onPick(location, fullAddress);
			}
		}
		
		getFullAddress();
	}, [location]);
	
	return (
		<View>
			<View style={styles.preview}>
				{Boolean(location)
					? <Image style={styles.mapPreview} source={{uri: getMapPreview(location!)}}/>
					: <Text>No location chosen</Text>
				}
			</View>
			
			<View style={styles.actions}>
				<Button.Outlined
					style={styles.actionButton}
					title="Locate user"
					leftAddon="location"
					onPress={onGetLocation}
				/>
				
				<Button.Outlined
					style={styles.actionButton}
					title="Pick on map"
					leftAddon="map"
					onPress={onPickOnMap}
				/>
			</View>
		</View>
	)
};

export default LocationPicker;
import {FC, useState} from "react";
import {Alert, View, Image, Text} from "react-native";
import {launchCameraAsync, PermissionStatus, useCameraPermissions} from "expo-image-picker";

import {imagePickerOptions} from "../../../utils/constants/image-picker";

import styles from './image-picker.styles';
import Button from "../button";

type ImagePickerProps = {
	onPick: (imageUri: string) => void;
}
const ImagePicker: FC<ImagePickerProps> = ({onPick}) => {
	const [cameraPermissionStatus, requestCameraPermission] = useCameraPermissions();
	
	const [image, setImage] = useState("");
	
	
	const verifyCameraPermissions = async () => {
		if (cameraPermissionStatus?.status === PermissionStatus.UNDETERMINED) {
			const permissionResponse = await requestCameraPermission();
			
			return permissionResponse.granted;
		}
		
		if (cameraPermissionStatus?.status === PermissionStatus.DENIED) {
			Alert.alert(
				"Insufficient Permissions!",
				"You need to grant camera permissions"
			);
			
			return false;
		}
		
		return true;
	}
	
	
	const onTakeImagePress = async () => {
		const isCameraAllowed = await verifyCameraPermissions();
		
		if (!isCameraAllowed) return;
		
		const image = await launchCameraAsync(imagePickerOptions);
		
		if(!image.cancelled) {
			setImage(image.uri);
			
			onPick(image.uri);
		}
		
	};
	
	return (
		<View>
			<View style={styles.preview}>
				{image ? <Image style={styles.image} source={{uri: image}}/> : (
					<Text>No image chosen</Text>
				)}
			</View>
			
			<Button.Outlined title="Take image" leftAddon="camera" onPress={onTakeImagePress}/>
		</View>
	)
};

export default ImagePicker;
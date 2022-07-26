import {Alert} from "react-native";
import {ExpoPushToken} from "expo-notifications";
import * as Notifications from "expo-notifications";
import {PermissionStatus} from "expo-modules-core";

export const sendPushNotification = async (expoPushToken: ExpoPushToken) => {
	const message = {
		to: expoPushToken.data,
		sound: 'default',
		title: 'Original Title',
		body: 'And here is the body!',
		data: { someData: 'goes here' },
	};
	
	console.log('sending', expoPushToken)
	
	await fetch('https://exp.host/--/api/v2/push/send', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Accept-encoding': 'gzip, deflate',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(message),
	});
}

export const configurePushNotifications = async () => {
	const { status } = await Notifications.getPermissionsAsync();
	
	if (status !== PermissionStatus.GRANTED) {
		const { status: requestStatus } = await Notifications.requestPermissionsAsync();
		
		if (requestStatus !== PermissionStatus.GRANTED) {
			Alert.alert('Permissions required');
		}
		
	}
}

export const allowsNotificationsAsync = async () => {
	const settings = await Notifications.getPermissionsAsync();
	return (
		settings.granted || settings.ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL
	);
}

export const requestPermissionsAsync = async () => {
	return await Notifications.requestPermissionsAsync({
		ios: {
			allowAlert: true,
			allowBadge: true,
			allowSound: true,
			allowAnnouncements: true,
		},
	});
}
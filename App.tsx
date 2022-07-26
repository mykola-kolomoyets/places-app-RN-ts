import {Fragment, useEffect, useState} from "react";
import {Platform} from "react-native";
import {StatusBar} from 'expo-status-bar';
import AppLoading from "expo-app-loading";
import * as Notifications from 'expo-notifications';
import {ExpoPushToken} from "expo-notifications";

import Database from './db';

import useTokenStore from "./store/token";

import {allowsNotificationsAsync, configurePushNotifications, requestPermissionsAsync} from "./utils/notifications";

import Navigation from "./components/navigation";


Notifications.setNotificationHandler({
	handleNotification: async () => {
		return {
			shouldPlaySound: false,
			shouldShowAlert: true,
			shouldSetBadge: false
		}
	}
});

export default function App() {
	const { setToken } = useTokenStore();
	
	const [dbInitialized, setDbInitialized] = useState(false);
	
	useEffect(() => {
		Database.init().then(() => {
			setDbInitialized(true);
		});
		
		if (!allowsNotificationsAsync()) {
			requestPermissionsAsync();
		}
		
		const submission = Notifications.addNotificationReceivedListener((notification) => {
			console.log(notification);
		});
		
		let tokenData: ExpoPushToken;
		Notifications.getExpoPushTokenAsync().then((data) => {
			tokenData = data;
			console.log(data);
			setToken(data);
		});
		
		if (Platform.OS === 'android') {
			Notifications.setNotificationChannelAsync('default', {
				name: 'default',
				importance: Notifications.AndroidImportance.DEFAULT
			});
		}
		
		configurePushNotifications();
		
		return () => {
			submission.remove();
		}
	}, []);
	
	if (!dbInitialized) return <AppLoading/>;
	
	return (
		<Fragment>
			<StatusBar style="auto"/>
			
			<Navigation/>
		</Fragment>
	);
}

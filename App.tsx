import {Fragment, useEffect, useState} from "react";
import {StatusBar} from 'expo-status-bar';
import AppLoading from "expo-app-loading";
import * as Notifications from 'expo-notifications';

import Navigation from "./components/navigation";

import Database from './db';

Notifications.setNotificationHandler({
	handleNotification: async () => {
		return {
			shouldPlaySound: false,
			shouldShowAlert: true,
			shouldSetBadge: false
		}
	}
});

const allowsNotificationsAsync = async () => {
	const settings = await Notifications.getPermissionsAsync();
	return (
		settings.granted || settings.ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL
	);
}

const requestPermissionsAsync = async () => {
	return await Notifications.requestPermissionsAsync({
		ios: {
			allowAlert: true,
			allowBadge: true,
			allowSound: true,
			allowAnnouncements: true,
		},
	});
}

export default function App() {
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

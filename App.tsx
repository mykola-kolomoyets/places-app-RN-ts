import {Fragment, useEffect, useState} from "react";
import {StatusBar} from 'expo-status-bar';
import AppLoading from "expo-app-loading";

import Navigation from "./components/navigation";

import Database from './db';

export default function App() {
	const [dbInitialized, setDbInitialized] = useState(false);
	
	useEffect(() => {
		Database.init().then(() => {
			setDbInitialized(true);
		});
	}, []);
	
	if (!dbInitialized) return <AppLoading/>;
	
	return (
		<Fragment>
			<StatusBar style="auto"/>
			
			<Navigation/>
		</Fragment>
	);
}

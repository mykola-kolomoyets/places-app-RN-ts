import {FC, useEffect, useState} from "react";
import {View, Text} from 'react-native';
import {useIsFocused} from "@react-navigation/native";

import PlacesService from "../../db/places";

import {StackScreen, StackScreens} from "../../utils/navigation/stack";
import Place from "../../utils/types/places";

import PlacesList from "../../components/layout/places-list";

const Places: FC<StackScreen<StackScreens.all>> = () => {
	const [places, setPlaces] = useState<Place[]>([]);
	
	const isFocused = useIsFocused();
	
	useEffect(() => {
		isFocused && PlacesService.getPlaces().then(
			response => setPlaces(response)
		);
	}, [isFocused]);
	
	return (
		<PlacesList places={places}/>
	)
};

export default Places;
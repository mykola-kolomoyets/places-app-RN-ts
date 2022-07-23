import {FC} from "react";
import {View, Text, Pressable} from "react-native";
import {Ionicons} from "@expo/vector-icons";

import {Colors} from "../../../../utils/styles/colors";

import styles from './outlined-button.styles';

type OutlinedButtonProps = {
	title: string;
	leftAddon: string;
	onPress: () => void;
};
const OutlinedButton: FC<OutlinedButtonProps> = ({title, onPress, leftAddon}) => {
	return (
		<Pressable
			style={({pressed}) => [styles.container, pressed && styles.pressed]}
			onPress={onPress}
		>
			<Ionicons
				style={styles.icon}
				name={leftAddon as any}
				size={18}
				color={Colors.primary500}
			/>
			<Text style={styles.title}>{title}</Text>
		</Pressable>
	)
};

export default OutlinedButton;
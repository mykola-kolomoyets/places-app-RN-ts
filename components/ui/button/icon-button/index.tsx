import {FC} from "react";
import {Pressable, View} from "react-native";
import { Ionicons  } from "@expo/vector-icons";

import styles from './icon-button.styles';

export type IconButtonProps = {
	name: string;
	color: string;
	size: number;
	onPress?: () => void;
}

const IconButton: FC<IconButtonProps> = ({onPress, ...iconParams}) => (
	<Pressable
		style={({pressed}) => pressed && styles.pressed}
		{...{onPress}}
	>
		<View style={styles.container}>
			<Ionicons {...iconParams as any} />
		</View>
	</Pressable>
);

export default IconButton;
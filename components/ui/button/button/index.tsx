import {FC} from "react";
import {Pressable, StyleProp, Text, ViewStyle} from "react-native";
import {Ionicons} from "@expo/vector-icons";

import {ButtonView} from "../../../../utils/enums/button";
import {Colors} from "../../../../utils/styles/colors";

import styles from './button.styles';

export type ButtonProps = {
	view: ButtonView;
	title: string;
	leftAddon?: string;
	onPress: () => void;
	style?: StyleProp<ViewStyle>
};
const Button: FC<ButtonProps> = ({view, title, onPress, leftAddon, style}) => {
	
	const buttonStyles = ({pressed}: {pressed: boolean}) => [
		pressed && styles.pressed,
		styles.container,
		view === ButtonView.outlined && styles.outlined,
		view === ButtonView.primary && styles.primary,
		style && style,
	];
	
	const buttonTitleStyles = [
		styles.title,
		view === ButtonView.outlined && styles.outlinedTitle,
		view === ButtonView.primary && styles.primaryTitle
	]
	
	return (
		<Pressable
			style={buttonStyles}
			onPress={onPress}
		>
			{leftAddon && (
				<Ionicons
					style={styles.icon}
					name={leftAddon as any}
					size={18}
					color={Colors.primary500}
				/>
			)}
			<Text style={buttonTitleStyles}>{title}</Text>
		</Pressable>
	)
};

export default Button;
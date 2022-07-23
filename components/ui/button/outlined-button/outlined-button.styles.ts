import {StyleSheet} from "react-native";
import {Colors} from "../../../../utils/styles/colors";

export default StyleSheet.create({
	container: {
		paddingHorizontal: 12,
		paddingVertical: 6,
		margin: 4,
		
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		
		borderWidth: 1,
		borderColor: Colors.primary500
	},
	
	pressed: {
		opacity: 0.7
	},
	
	icon: {
		marginRight: 6,
	},
	
	title: {
		color: Colors.primary500
	}
});
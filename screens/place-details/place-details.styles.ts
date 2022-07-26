import {StyleSheet} from "react-native";
import {Colors} from "../../utils/styles/colors";

export default StyleSheet.create({
	container: {
		alignItems: "center",
	},
	
	image: {
		width: "100%",
		height: "35%",
		minHeight: 300,
	},
	
	locationContainer: {
		justifyContent: "center",
		alignItems: "center",
	},
	
	addressContainer: {
		padding: 20,
	},
	
	address: {
		color: Colors.primary500,
		
		textAlign: "center",
		
		fontWeight: "bold",
		fontSize: 16
	}
});
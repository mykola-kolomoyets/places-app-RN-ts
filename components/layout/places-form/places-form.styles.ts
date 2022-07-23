import {StyleSheet} from "react-native";
import {Colors} from "../../../utils/styles/colors";

export default StyleSheet.create({
	form: {
		flex: 1,
		
		padding: 24
	},
	
	label: {
		marginBottom: 4,
		
		fontWeight: "bold",
		
		color: Colors.primary500
	},
	
	input: {
		marginVertical: 8,
		paddingHorizontal: 4,
		paddingVertical: 8,
		
		fontSize: 16,
		
		borderBottomWidth: 2,
		borderBottomColor: Colors.primary700,
		
		backgroundColor: Colors.primary100
	}
});
import {StyleSheet} from "react-native";
import {Colors} from "../../../utils/styles/colors";

export default StyleSheet.create({
	container: {
		marginVertical: 12,
		
		flexDirection: "row",
		alignItems: "flex-start",
		
		borderRadius: 6,
		
		backgroundColor: Colors.primary500,
		
		elevation: 2,
		shadowColor: Colors.gray700,
		shadowOpacity: 0.5,
		shadowOffset: {
			width: 1,
			height: 1
		},
		shadowRadius: 2,
	},
	
	pressed: {
		opacity: 0.8
	},
	
	image: {
		flex: 1,
		
		height: 100,
		
		borderBottomLeftRadius: 4,
		borderTopLeftRadius: 4
	},
	
	textContainer: {
		flex: 2,
		
		padding: 12,
	},
	
	title: {
		fontWeight: "bold",
		fontSize: 18,
		
		color: Colors.gray700
	},
	
	address: {
		fontSize: 12,
		
		color: Colors.gray700
	}
	
});
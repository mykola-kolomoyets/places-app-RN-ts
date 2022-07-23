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
		
	},
	
	outlined: {
		borderWidth: 1,
		borderColor: Colors.primary500
	},
	
	primary: {
		paddingHorizontal: 12,
		paddingVertical: 8,
		margin: 4,
		
		backgroundColor: Colors.primary800,
		
		elevation: 2,
		shadowColor: Colors.gray700,
		shadowOpacity: 0.5,
		shadowOffset: {
			width: 1,
			height: 1
		},
		shadowRadius: 2,
		
		borderRadius: 4
	},
	
	pressed: {
		opacity: 0.7
	},
	
	icon: {
		marginRight: 6,
	},
	
	title: {
		fontSize: 16,
		
		textAlign: "center"
	},
	
	outlinedTitle: {
		color: Colors.primary500
	},
	
	primaryTitle: {
		color: Colors.primary50
	}
});
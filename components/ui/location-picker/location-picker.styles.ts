import {StyleSheet} from "react-native";
import {Colors} from "../../../utils/styles/colors";

export default StyleSheet.create({
	preview: {
		width: "100%",
		height: 200,
		
		marginVertical: 8,
		
		alignItems: "center",
		justifyContent: "center",
		
		backgroundColor: Colors.primary100,
		
		borderRadius: 4,
		
		overflow: "hidden"
	},
	
	actions: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	
	actionButton: {
		flex: 1,
	},
	
	mapPreview: {
		width: "100%",
		height: "100%",
		borderRadius: 4,
	}
	
});
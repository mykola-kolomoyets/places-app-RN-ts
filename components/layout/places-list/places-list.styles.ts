import {StyleSheet} from "react-native";
import {Colors} from "../../../utils/styles/colors";

export default StyleSheet.create({
	emptyContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	
	emptyText: {
		fontSize: 16,
		
		color: Colors.primary200
	},
	
	container: {
		padding: 18
	}
});
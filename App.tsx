import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Alert,
} from "react-native";
import { theme } from "./theme";

export default function App() {
	const handleDelete = () => {
		// Title, subtitle, array of objects of buttons u want to display
		Alert.alert(
			"Are you sure that you want to delete this?",
			"It will be gone for good",
			[
				{
					text: "Yes",
					onPress: () => console.log("Deleted"),
					//destructive - color is red
					style: "destructive",
				},
				{
					text: "Cancel",
					onPress: () => console.log("Canceled"),
					style: "cancel",
				},
			]
		);


	}
	return (
		<View style={styles.container}>
			<View style={styles.itemContainer}>
				<Text style={{ fontSize: 18, fontWeight: "300" }}>Coffee</Text>
				<TouchableOpacity
				style = {styles.button}
					onPress={handleDelete}
					activeOpacity={0.8}
				>
					<Text style={styles.buttonText}>Delete</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		justifyContent: "center",
	},
	itemContainer: {
		paddingVertical: 16,
		paddingHorizontal: 8,
		borderBottomWidth: 1,
		borderBottomColor: "cadetblue",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between"
	},
	button: {
		backgroundColor: theme.colorBlack,
		padding: 8,
		borderRadius: 6	
	},
	buttonText: {
		color: theme.colorWhite,
		fontWeight: "bold",
		textTransform: "uppercase",
		letterSpacing: 1
	}
});

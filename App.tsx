import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Pressable } from "react-native";

export default function App() {
	return (
		<View style={styles.container}>
      <TouchableOpacity onPress={() => console.log("Pressed")} activeOpacity={0.8}>
        <Text>
          Delete
        </Text>
        </TouchableOpacity>
			<View style={styles.itemContainer}>
				<Text style={{fontSize: 18, fontWeight: "300"}}>Coffee</Text>
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
	},
});

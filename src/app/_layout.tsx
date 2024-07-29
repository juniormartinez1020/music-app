import { StyleSheet, View, Text } from 'react-native'

export default function HomeScreen() {
	return (
		<View style={styles.titleContainer}>
			<Text>welcome to my app music 🔊🎵.</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	titleContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		gap: 8,
	},
})

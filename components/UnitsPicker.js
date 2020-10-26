import { Picker } from "@react-native-community/picker"
import React from "react"
import { View, Text, StyleSheet, Platform } from "react-native"

const UnitsPicker = ({ unitsSystem, setUnitsSystem }) => {
	return (
		<View style={styles.unitsSystem}>
			<Picker
				selectedValue={unitsSystem}
				onValueChange={(item) => setUnitsSystem(item)}
				itemStyle={{ fontSize: 12 }}>
				<Picker.Item label="c°" value="metric" />
				<Picker.Item label="F°" value="imperial" />
			</Picker>
		</View>
	)
}

export default UnitsPicker

const styles = StyleSheet.create({
	unitsSystem: {
		position: "absolute",
		...Platform.select({
			ios: {
				top: -20,
			},
			android: {
				top: 20,
			},
		}),
		height: 50,
		width: 100,
		left: 20,
	},
})

import React from "react";
import Slider from "@react-native-community/slider";
import { StyleSheet, Text, TextInput, View } from "react-native";

const CustomSlider = ({label, inputValue, onChange, min, max}) => (
  <View style={styles.container}>
    <View style={styles.flexRow}>
      <Text>{label}</Text>
      <TextInput style={styles.input} value={inputValue + ""} onSubmitEditing={onChange} keyboardType="numeric" />
    </View>
    <Slider
      style={styles.slider}
      minimumValue={min}
      maximumValue={max}
      value={inputValue}
      onSlidingComplete={onChange}
    />
    <View style={styles.flexRow}>
    <Text>{min}</Text>
    <Text>{max}</Text>
    </View>
  </View>
);

export default CustomSlider;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  slider: {
    padding: 25,
  },
  flexRow: {
    marginHorizontal: 25,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    borderWidth: 2,
    borderColor: "black",
    paddingHorizontal: 20,
    paddingVertical: 1,
    color: "black",
  },
});

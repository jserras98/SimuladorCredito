import React from "react";
import Slider from "@react-native-community/slider";
import { StyleSheet, Text, TextInput, View } from "react-native";

const CustomSlider = ({label, inputValue, onChange, min, max, isCurrency}) => (
  <View style={styles.container}>
    <View style={styles.flexRow}>
      <Text style={{color: 'white', fontSize: 15}}>{label}</Text>
      {isCurrency ?
      <Text style={styles.input}>$ {inputValue}</Text> :
      <Text style={styles.input}>{inputValue}</Text>}
    </View>
    <Slider
      style={styles.slider}
      minimumValue={min}
      maximumValue={max}
      value={inputValue}
      onSlidingComplete={onChange}
    />
    <View style={styles.flexRow}>
    {isCurrency ?
    <Text style={{color: 'white', fontSize: 15}}>$ {max}</Text> :
    <Text style={{color: 'white', fontSize: 15}}>{max}</Text>}
    {isCurrency ?
    <Text style={{color: 'white', fontSize: 15}}>$ {min}</Text>:
    <Text style={{color: 'white', fontSize: 15}}>{min}</Text>}
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
    borderColor: "white",
    paddingHorizontal: 20,
    color: 'white',
    fontSize: 25,
    width: 140,
    textAlign: 'center'
  },
});

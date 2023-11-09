import React from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";

const Button = ({ action, texto1, texto2 }) => (
  <View style={styles.flexRow}>
    <TouchableHighlight
      underlayColor="#efefef"
      onPress={action}
      style={[styles.button, styles.flexGrow]}
    >
      <Text style={[styles.text1]}>{texto1}</Text>
    </TouchableHighlight>
    <TouchableHighlight
      underlayColor="#efefef"
      onPress={action}
      style={[styles.button, styles.flexShrink]}
    >
      <Text style={[styles.text2]}>{texto2}</Text>
    </TouchableHighlight>
  </View>
);
//La view que se le mete a todo es para que se desacople de la tabla justo superior
export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#333",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    textAlign: 'center',
    justifyContent: 'center'
  },
  text1: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  text2: {
    fontSize: 12,
    fontWeight: "bold",
    color: "white",
    textAlign: 'center'
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10
  },
  flexGrow: {
    flexBasis:'auto',
    flexShrink: 0,
    flexGrow: 1,
    backgroundColor: '#00ad91'
  },
  flexShrink: {
    flexBasis: 'auto',
    flexShrink: 1,
    flexGrow: 0,
    backgroundColor: '#00558b'
  },
});

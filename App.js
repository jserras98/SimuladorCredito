import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CustomSlider from "./components/slider";
import React, { useState } from "react";

export default function App() {
  const [monto, setMonto] = useState(5000);
  const [plazo, setPlazo] = useState(3);

  inputMontoChange = (value) => {
    
    if (typeof value === "string") {
      console.log(value);
      if (value === "") {
        return;
      }
      const numeroLimpio = value.replace(/[^0-9]/g, "");
      setMonto(parseInt(numeroLimpio).toFixed(0));
    } else {
      setMonto(value.toFixed(0));
    }
  };

  inputPlazoChange = (value) => {
    if (typeof value === "string") {
      if (value === "") {
        return;
      }
      const numeroLimpio = value.replace(/[^0-9]/g, "");
      setPlazo(parseInt(numeroLimpio).toFixed(0));
    } else {
      setPlazo(value.toFixed(0));
    }
  };

  return (
    <View style={styles.container}>
      <CustomSlider
        label="Monto total"
        inputValue={monto}
        onChange={(value) => {
          inputMontoChange(value);
        }}
        min={5000}
        max={50000}
      />
      <CustomSlider
        label="Plazo"
        inputValue={plazo}
        onChange={(value) => {
          inputPlazoChange(value);
        }}
        min={3}
        max={24}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

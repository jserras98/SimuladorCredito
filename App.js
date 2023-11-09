import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CustomSlider from "./components/slider";
import React, { useState } from "react";
import Button from "./components/button";

export default function App() {
  const [monto, setMonto] = useState(5000);
  const [plazo, setPlazo] = useState(3);
  const [cuota, setCuota] = useState(0);

  const changeMonto = (value) => {
    setMonto(value)
    calcularCuota()
  }

  const changePlazo = (value) => {
    setPlazo(value)
    calcularCuota()
  }

  const calcularCuota = () => {
    let montoInt = parseInt(monto)
    let plazoInt = parseInt(plazo)
    let interes = montoInt*0.9798
    let devolver = montoInt + interes
    let total = devolver / plazoInt
    setCuota(total.toFixed(2))
  }

  return (
    <View style={styles.container}>
      <CustomSlider
        label="Monto total"
        inputValue={monto}
        onChange={(value) => changeMonto(value.toFixed(0))}
        min={5000}
        max={50000}
        isCurrency={true}
        step={500}
      />
      <CustomSlider
        label="Plazo"
        inputValue={plazo}
        onChange={(value) => changePlazo(value.toFixed(0))}
        min={3}
        max={24}
        isCurrency={false}
        step={1}
      />
      <View style={[styles.flexRow, {backgroundColor: '#00355d', padding: 10, alignItems: 'center', borderRadius: 5}]}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>CUATO FIJA POR MES</Text>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 35}}>$ {cuota}</Text>
      </View>
        <Button
          action={() => console.log("")}
          texto1="OBTENER CRÉDITO"
          texto2="VER DETALLES DE CUOTAS" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    gap: 50,
    backgroundColor: '#013c68',
    padding: 10
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  
});

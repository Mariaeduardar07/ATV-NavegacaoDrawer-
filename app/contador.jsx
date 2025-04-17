import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, StatusBar } from "react-native";

export default function App() {
  const [contador, setContador] = useState(0);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.counter}>{contador}</Text>

      <View style={styles.buttonContainer}>
        <Pressable
          style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
          onPress={() => setContador(contador + 1)}
        >
          <Text style={styles.buttonText}>+ Incrementar</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [styles.button, styles.resetButton, pressed && styles.buttonPressed]}
          onPress={() => setContador(0)}
        >
          <Text style={styles.buttonText}>↺ Reset</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff0f6", 
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#c2185b",
    marginBottom: 10,
  },
  counter: {
    fontSize: 70,
    fontWeight: "bold",
    color: "#880e4f",
    marginBottom: 30,
    textShadowColor: "rgba(0,0,0,0.2)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 12,
  },
  button: {
    backgroundColor: "#f06292",
    paddingVertical: 14,
    paddingHorizontal: 22,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
  },
  resetButton: {
    backgroundColor: "#c2185b",
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

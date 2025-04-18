
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.openDrawer()}
      >
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.welcomeText}>Seja Bem-Vindo!</Text>
        <Text style={styles.descriptionText}>
          Aqui temos uma tela Home
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff0f6", 
  },
  textContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#af0d7b", 
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 18,
    color: "#880e4f",

    textAlign: "center",
    paddingHorizontal: 20,
  },
});
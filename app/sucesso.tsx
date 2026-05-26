import { router } from "expo-router";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { CheckCheck } from "lucide-react-native";

export default function Sucesso() {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>
        <CheckCheck size={90} color={"#71d171"} />
      </Text>

      <Text style={styles.title}>Cartão criado com sucesso!</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.replace("/")}
      >
        <Text style={styles.buttonText}>Criar outro cartão</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8F5FF",
    padding: 24,
  },

  emoji: {
    fontSize: 80,
    marginBottom: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
    color: "#71d171",
  },

  button: {
    backgroundColor: "#56a056",
    padding: 18,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 60,
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 18,
  },
});

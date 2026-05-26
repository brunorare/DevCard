import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { IdCard, Plus } from "lucide-react-native";

import { router } from "expo-router";

export default function TelaBoasVindas() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <IdCard style={styles.icon} size={140} />
        <Text style={styles.title}>DevCard</Text>
        <Text style={styles.subtitle}>
          Seu cartão de visita digital de dev mobile
        </Text>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => router.push("/cadastro")}
        >
          <Plus color={"#FFF"} style={styles.buttonText} />
          <Text style={styles.buttonText}>Criar meu cartão</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  icon: {
    width: 400,
    height: 400,
    color: "#9ee193",
  },

  card: {
    width: "100%",
    height: "80%",
    justifyContent: "center",
    backgroundColor: "#f4fafa",
    opacity: 0.9,
    borderRadius: 24,
    padding: 28,
    alignItems: "center",
    shadowColor: "#34f571ca",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  image: {
    width: 220,
    height: 180,
    marginBottom: 10,
  },

  title: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#9ee193",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 35,
    lineHeight: 25,
    marginHorizontal: 18,
    color: "#9ee193",
  },

  buttonContainer: {
    width: "100%",
    backgroundColor: "#9ee193",
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
  },

  buttonText: {
    width: "auto",
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
    textAlignVertical: "center",
    justifyContent: "center",
  },
});

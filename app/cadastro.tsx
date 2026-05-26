import { StatusBar } from "expo-status-bar";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { useState } from "react";
import { router } from "expo-router";

export default function TelaCadastro() {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [anos, setAnos] = useState("");
  const [tecnologia, setTecnologia] = useState("");
  const [cor, setCor] = useState("Roxo");

  const [erroNome, setErroNome] = useState("");
  const [erroCargo, setErroCargo] = useState("");
  const [erroAnos, setErroAnos] = useState("");
  const [erroTecnologia, setErroTecnologia] = useState("");

  function validar() {
    let valido = true;

    setErroNome("");
    setErroCargo("");
    setErroAnos("");
    setErroTecnologia("");

    if (nome.trim().length < 3) {
      setErroNome("Nome deve ter no mínimo 3 caracteres");
      valido = false;
    }

    if (!cargo.trim()) {
      setErroCargo("Cargo obrigatório");
      valido = false;
    }

    if (!anos || Number(anos) <= 0) {
      setErroAnos("Informe um número maior que 0");
      valido = false;
    }

    if (!tecnologia.trim()) {
      setErroTecnologia("Tecnologia obrigatória");
      valido = false;
    }

    if (valido) {
      router.push({
        pathname: "/preview",
        params: {
          nome,
          cargo,
          empresa,
          anos,
          tecnologia,
          cor,
        },
      });
    }
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Cadastro DevCard</Text>

        <View style={styles.card}>
          <View style={styles.inputsContainer}>
            <Text style={styles.label}>Nome completo</Text>

            <TextInput
              style={styles.input}
              placeholder="Digite seu nome"
              value={nome}
              onChangeText={setNome}
            />

            {erroNome ? <Text style={styles.error}>{erroNome}</Text> : null}
          </View>

          <View style={styles.inputsContainer}>
            <Text style={styles.label}>Cargo</Text>

            <TextInput
              style={styles.input}
              placeholder="Ex: Dev Mobile"
              value={cargo}
              onChangeText={setCargo}
            />

            {erroCargo ? <Text style={styles.error}>{erroCargo}</Text> : null}
          </View>

          <View style={styles.inputsContainer}>
            <Text style={styles.label}>Empresa</Text>

            <TextInput
              style={styles.input}
              placeholder="Empresa (opcional)"
              value={empresa}
              onChangeText={setEmpresa}
            />
          </View>

          <View style={styles.inputsContainer}>
            <Text style={styles.label}>Anos de experiência</Text>

            <TextInput
              style={styles.input}
              placeholder="Ex: 3"
              keyboardType="numeric"
              value={anos}
              onChangeText={setAnos}
            />

            {erroAnos ? <Text style={styles.error}>{erroAnos}</Text> : null}
          </View>

          <View style={styles.inputsContainer}>
            <Text style={styles.label}>Tecnologia favorita</Text>

            <TextInput
              style={styles.input}
              placeholder="Ex: React Native"
              value={tecnologia}
              onChangeText={setTecnologia}
            />

            {erroTecnologia ? (
              <Text style={styles.error}>{erroTecnologia}</Text>
            ) : null}
          </View>

          <Text style={styles.titleSectionColors}>Escolha a cor do cartão</Text>

          <View style={styles.colorContainer}>
            <TouchableOpacity
              style={[
                styles.colorButton,
                cor === "Azul" && styles.selectedBlue,
              ]}
              onPress={() => setCor("Azul")}
            >
              <Text style={styles.colorText}>Azul</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.colorButton,
                cor === "Verde" && styles.selectedGreen,
              ]}
              onPress={() => setCor("Verde")}
            >
              <Text style={styles.colorText}>Verde</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.colorButton,
                cor === "Roxo" && styles.selectedPurple,
              ]}
              onPress={() => setCor("Roxo")}
            >
              <Text style={styles.colorText}>Roxo</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.button} onPress={validar}>
            <Text style={styles.buttonText}>Gerar Cartão</Text>
          </TouchableOpacity>
        </View>

        <StatusBar style="light" />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 25,
  },

  card: {
    width: "100%",
    backgroundColor: "#FFF",
    borderRadius: 24,
    padding: 24,
  },

  inputsContainer: {
    marginBottom: 15,
  },

  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#111827",
  },

  input: {
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 12,
    padding: 14,
    fontSize: 16,
  },

  error: {
    color: "#DC2626",
    marginTop: 5,
  },

  titleSectionColors: {
    marginTop: 10,
    marginBottom: 15,
    fontSize: 16,
    fontWeight: "bold",
  },

  colorContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },

  colorButton: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 12,
    backgroundColor: "#CBD5E1",
  },

  selectedBlue: {
    backgroundColor: "#3B82F6",
  },

  selectedGreen: {
    backgroundColor: "#22C55E",
  },

  selectedPurple: {
    backgroundColor: "#7E22CE",
  },

  colorText: {
    color: "#FFF",
    fontWeight: "bold",
  },

  button: {
    backgroundColor: "#71d171",
    padding: 18,
    borderRadius: 16,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 18,
  },
});

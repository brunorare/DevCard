import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { router, useLocalSearchParams } from "expo-router";

export default function TelaPreview() {
  const { nome, cargo, empresa, anos, tecnologia, cor } = useLocalSearchParams<{
    nome: string;
    cargo: string;
    empresa: string;
    anos: string;
    tecnologia: string;
    cor: string;
  }>();

  function temaCartao() {
    switch (cor) {
      case "Azul":
        return {
          card: "#738fbb",
          details: "#3B82F6",
        };

      case "Verde":
        return {
          card: "#65c372",
          details: "#22C55E",
        };

      default:
        return {
          card: "#9a54d0",
          details: "#A855F7",
        };
    }
  }

  function nivelDev() {
    const anosNumero = Number(anos);

    if (anosNumero <= 2) {
      return {
        nivel: "Júnior",
        cor: "#9CA3AF",
      };
    }

    if (anosNumero <= 5) {
      return {
        nivel: "Pleno",
        cor: "#3B82F6",
      };
    }

    return {
      nivel: "Sênior",
      cor: "#D4AF37",
    };
  }

  const tema = temaCartao();
  const nivel = nivelDev();

  return (
    <View style={[styles.container]}>
      <Text style={styles.pageTitle}>Preview do Cartão</Text>

      <View
        style={[
          styles.card,
          {
            backgroundColor: tema.card,
          },
        ]}
      >
        {/* LADO ESQUERDO */}
        <View style={styles.leftSide}>
          <View
            style={[
              styles.avatarContainer,
              {
                borderColor: tema.details,
              },
            ]}
          >
            <Text style={styles.avatarText}>
              {nome?.charAt(0).toUpperCase()}
            </Text>
          </View>

          <Text style={styles.nome}>{nome}</Text>

          <View
            style={[
              styles.badge,
              {
                backgroundColor: nivel.cor,
              },
            ]}
          >
            <Text style={styles.badgeText}>{nivel.nivel}</Text>
          </View>
        </View>

        {/* DIVISÓRIA */}
        <View style={styles.divider} />

        {/* LADO DIREITO */}
        <View style={styles.rightSide}>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>CARGO</Text>

            <Text style={styles.info}>{cargo}</Text>
          </View>

          {empresa ? (
            <View style={styles.infoContainer}>
              <Text style={styles.label}>EMPRESA</Text>

              <Text style={styles.info}>{empresa}</Text>
            </View>
          ) : null}

          <View style={styles.infoContainer}>
            <Text style={styles.label}>TECNOLOGIA FAVORITA</Text>

            <Text
              style={[
                styles.tech,
                {
                  color: "white",
                },
              ]}
            >
              {tecnologia}
            </Text>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.label}>EXPERIÊNCIA</Text>

            <Text style={styles.info}>{anos} anos</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={[
          styles.buttonSecondary,
          {
            borderColor: tema.details,
          },
        ]}
        onPress={() => router.back()}
      >
        <Text
          style={[
            styles.buttonSecondaryText,
            {
              color: tema.details,
            },
          ]}
        >
          Editar dados
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: tema.details,
          },
        ]}
        onPress={() => router.replace("/sucesso")}
      >
        <Text style={styles.buttonText}>Finalizar cartão</Text>
      </TouchableOpacity>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },

  pageTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 24,
  },

  card: {
    width: "100%",
    flexDirection: "row",
    borderRadius: 28,
    padding: 22,
    marginBottom: 30,

    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 10,
  },

  leftSide: {
    width: "38%",
    alignItems: "center",
    justifyContent: "center",
  },

  rightSide: {
    width: "58%",
    justifyContent: "center",
    paddingLeft: 18,
  },

  divider: {
    width: 1,
    marginHorizontal: 10,
  },

  avatarContainer: {
    width: 90,
    height: 90,
    borderRadius: 999,
    borderWidth: 3,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 14,
  },

  avatarText: {
    color: "#FFF",
    fontSize: 38,
    fontWeight: "bold",
  },

  nome: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 14,
  },

  infoContainer: {
    marginBottom: 16,
  },

  label: {
    color: "#fff",
    fontSize: 11,
    letterSpacing: 1.5,
    marginBottom: 4,
  },

  info: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: "600",
  },

  tech: {
    fontSize: 20,
    fontWeight: "bold",
  },

  badge: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 999,
  },

  badgeText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 14,
  },

  buttonSecondary: {
    borderWidth: 2,
    padding: 18,
    borderRadius: 18,
    alignItems: "center",
    marginBottom: 15,
  },

  buttonSecondaryText: {
    fontSize: 18,
    fontWeight: "bold",
  },

  button: {
    padding: 18,
    borderRadius: 18,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

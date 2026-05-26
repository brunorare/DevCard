import { Stack } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: "#A8DCAB",
        },
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
  },
});

import { View, Text, StyleSheet } from "react-native";

export default function Ventas() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página de Ventas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 20, fontWeight: "bold" },
});

import { View, TextInput, StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";

export default function BuscarInventario() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buscar Producto</Text>
      <TextInput placeholder="Ingrese el nombre del producto" style={styles.input} />
      <Button mode="contained">Buscar</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
  input: { width: "100%", height: 40, borderWidth: 1, marginBottom: 10, padding: 8, borderRadius: 5 },
});

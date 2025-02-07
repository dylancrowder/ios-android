import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido al Dashboard</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold" },
});

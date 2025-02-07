import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";
import { PaperProvider } from "react-native-paper";

export default function Layout() {
  return (
    <PaperProvider>
      <Drawer>
        <Drawer.Screen
          name="index"
          options={{
            title: "Inicio",
            drawerIcon: ({ color }: { color: string }) => (
              <Ionicons name="home" size={24} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="inventario"
          options={{
            title: "Inventario",
            drawerIcon: ({ color }: { color: string }) => (
              <Ionicons name="cube" size={24} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="ventas"
          options={{
            title: "Ventas",
            drawerIcon: ({ color }: { color: string }) => (
              <Ionicons name="cart" size={24} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="suppliers"
          options={{
            title: "Proveedores",
            drawerIcon: ({ color }: { color: string }) => (
              <Ionicons name="people" size={24} color={color} />
            ),
          }}
        />
      </Drawer>
    </PaperProvider>
  );
}

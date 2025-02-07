import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Redirect } from "expo-router";

export default function InventarioLayout() {
  return (
    <Tabs initialRouteName="buscar">

      <Tabs.Screen
        name="buscar"
        options={{
          title: "Buscar",
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="crear"
        options={{
          title: "Crear",
          tabBarIcon: ({ color }) => (
            <Ionicons name="add-circle" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

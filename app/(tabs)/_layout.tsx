import AntDesign from "@expo/vector-icons/AntDesign";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveBackgroundColor: "coral",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="home"
              size={24}
              color={focused ? "white" : "black"}
            />
          ),
        }}
      />
      <Tabs.Screen name="login" options={{ title: "Login" }} />
    </Tabs>
  );
}

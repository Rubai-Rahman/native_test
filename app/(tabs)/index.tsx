import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link href="/login" style={styles.link}>
        Login
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    width: 100,
    height: 20,
    backgroundColor: "coral",
    color: "white",
    textAlign: "center",
    lineHeight: 20,
    borderRadius: 10,
  },
});

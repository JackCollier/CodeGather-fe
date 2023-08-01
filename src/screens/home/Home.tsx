import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { styles } from "../../styles/Styling";

export default function Home() {
  return (
    <SafeAreaView style={styles.outerContainer}>
      <View>
        <View style={homeStyles.nav_container}>
          <Text>Nav</Text>
        </View>
        <View style={homeStyles.horizontal_list_container}>
          <Text>Horizonatal FlatList</Text>
        </View>
        <View style={homeStyles.vertical_list_container}>
          <Text>Vertical FlatList</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const homeStyles = StyleSheet.create({
  nav_container: {
    flex: 0.1,
    borderColor: "orange",
    borderWidth: 2,
    minWidth: "100%",
  },
  horizontal_list_container: {
    flex: 0.3,
    borderColor: "orange",
    borderWidth: 2,
  },
  vertical_list_container: {
    flex: 1,
    borderColor: "orange",
    borderWidth: 2,
  },
});

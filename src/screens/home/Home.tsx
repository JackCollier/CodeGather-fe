import { View, Text, SafeAreaView, StyleSheet } from "react-native";
// import {SafeAreaView} from 'react-native-safe-area-context'
import React from "react";
import { styles } from "../../styles/Styling";

export default function Home() {
  return (
    <SafeAreaView>
      <View style={styles.outerContainer}>
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
  },
  horizontal_list_container: {
    flex: 0.5,
    borderColor: "orange",
    borderWidth: 2,
  },
  vertical_list_container: {
    flex: 0.5,
    borderColor: "orange",
    borderWidth: 2,
  },
});

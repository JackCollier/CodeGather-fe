import { View, Text, StyleSheet, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faMapLocationDot,
  faFilter,
  faUser,
  faHome,
  faTicket,
  faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { styles } from "../../styles/Styling";

export default function Home() {
  return (
    <SafeAreaView style={styles.outerContainer}>
      <View>
        <View style={homeStyles.nav_container}>
          <FontAwesomeIcon icon={faMapLocationDot} size={35} />
          <TextInput style={styles.text_input} placeholder="Search" />
          <FontAwesomeIcon icon={faFilter} size={35} />
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
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

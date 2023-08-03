import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../styles/Styling";

export default function HostEvents() {
  return (
    <SafeAreaView style={styles.outerContainer}>
      <Text>HostEvents</Text>
    </SafeAreaView>
  );
}

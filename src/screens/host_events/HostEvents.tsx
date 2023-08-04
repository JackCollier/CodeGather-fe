import { View, Text, TextInput, Image, Button } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../styles/Styling";
import DateTimePicker from "@react-native-community/datetimepicker";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function HostEvents() {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDate(date.toLocaleDateString());
    setTime(date.toLocaleTimeString().slice(0, -3));
    hideDatePicker();
  };

  return (
    <SafeAreaView style={styles.outerContainer}>
      <Text>Host your Events</Text>
      <Text>Event Title</Text>
      <View>{/* <Image src={} /> */}</View>
      <Button title="Event Date and Time" onPress={showDatePicker} />
      <Text>{date}</Text>
      <Text>{time}</Text>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        display="inline"
        mode="datetime"
        isDarkModeEnabled={true}
      />
    </SafeAreaView>
  );
}

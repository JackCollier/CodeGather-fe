import { View, Text, TextInput, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../styles/Styling";

import DateTimePicker from "@react-native-community/datetimepicker";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

export default function HostEvents() {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);

  const onChangeDate = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setShowDate(false);
    setDate(currentDate);
  };

  const onChangeTime = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setShowTime(false);
    setTime(currentDate);
  };

  return (
    <SafeAreaView style={styles.outerContainer}>
      <Text>Host your event!</Text>
      <Text>Event Title</Text>
      <View>{/* <Image src={}/> */}</View>

      <View style={{ flexDirection: "row", gap: 20 }}>
        <Text onPress={() => setShowDate(!showDate)}>Select Date</Text>
        <Text>{date.toLocaleDateString()}</Text>
      </View>
      {showDate && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={true}
          onChange={onChangeDate}
        />
      )}
      <View style={{ flexDirection: "row", gap: 20, marginTop: 20 }}>
        <Text onPress={() => setShowTime(!showTime)}>Selet Time</Text>
        <Text>{time.toLocaleTimeString().slice(0, -3)}</Text>
      </View>
      {showTime && (
        <DateTimePicker
          testID="dateTimePicker"
          value={time}
          mode="time"
          is24Hour={true}
          onChange={onChangeTime}
        />
      )}
    </SafeAreaView>
  );
}

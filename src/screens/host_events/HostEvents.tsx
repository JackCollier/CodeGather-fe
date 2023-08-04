import { View, Text, TextInput, Image, Button } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../styles/Styling";
import DateTimePicker from "@react-native-community/datetimepicker";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import * as ImagePicker from "expo-image-picker";

export default function HostEvents() {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [topics, setTopics] = useState([]);
  const [topic, setTopic] = useState("");

  console.log(topics);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: any) => {
    setDate(date.toLocaleDateString());
    setTime(date.toLocaleTimeString().slice(0, -3));
    hideDatePicker();
  };

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result: any = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={styles.outerContainer}>
      <Text>Host your Events</Text>
      <Text>Event Title</Text>

      <View style={{ flex: 0, alignItems: "center", justifyContent: "center" }}>
        <Button title="Pick an image from camera roll" onPress={pickImage} />
        {image && (
          <Image source={{ uri: image }} style={{ width: 340, height: 200 }} />
        )}
      </View>

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
      <View>
        <Text>Add you Topics</Text>

        <TextInput
          onChange={(e) => setTopic(e.target.value)}
          style={styles.text_input}
          placeholder="your topic"
        />

        <Button
          onPress={() => {
            setTopics((currenTopics) => {
              return [...currenTopics, topic];
            });
          }}
          title="Add Topic"
        />
      </View>
    </SafeAreaView>
  );
}

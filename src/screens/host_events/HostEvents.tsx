import {
  View,
  Text,
  TextInput,
  Image,
  Button,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Pressable,
  Platform,
} from "react-native";
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
  const [topics, setTopics] = useState<string[]>([]);
  const [topic, setTopic] = useState("");
  const [limit, setLimit] = useState(false);
  const [description, setDescription] = useState("");

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
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 120 : 90}
    >
      <ScrollView>
        <SafeAreaView
          style={{
            flex: 0,
            justifyContent: "center",
            alignItems: "center",
            width: "80%",
            alignSelf: "center",
            marginTop: 20,
            padding: 0,
            gap: 10,
          }}
        >
          <Text style={hostStyles.host_header}>Host your Event</Text>
          <View>
            <Text>Event Title</Text>
            <TextInput
              style={styles.text_input}
              placeholder="add event title"
            />
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#8cb3d9",
              borderRadius: 3,
              width: "75%",
            }}
          >
            <Pressable
              style={{
                width: "100%",
                paddingHorizontal: 0,
                backgroundColor: "#8cb3d9",
                alignItems: "center",
                paddingVertical: 5,
              }}
              onPress={pickImage}
            >
              <Text style={{ fontSize: 16, fontWeight: "500", color: "white" }}>
                Upload Image
              </Text>
            </Pressable>
            {image && (
              <Image
                source={{ uri: image }}
                style={{ width: 340, height: 200 }}
              />
            )}
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#8cb3d9",
              borderRadius: 3,
              width: "75%",
            }}
          >
            <Button title="Event Date and Time" onPress={showDatePicker} />
          </View>
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
              onChangeText={(text) => {
                setTopic(text);
              }}
              style={styles.text_input}
              placeholder={
                !limit ? "add your topic (Limit is 4)" : "limit reached"
              }
            />
            <Text>{topics}</Text>
            <Button
              onPress={() => {
                if (topics.length > 3) {
                  setLimit(true);
                  return;
                }
                setTopics((currenTopics) => {
                  return [...currenTopics, topic];
                });
              }}
              title="Add Topic"
              disabled={limit}
            />
          </View>
          <View style={{ width: "100%" }}>
            <Text style={{ textAlign: "center" }}>Description</Text>
            <TextInput
              multiline
              numberOfLines={10}
              style={{
                height: 100,
                width: "100%",
                borderColor: "gray",
                borderWidth: 1,
                paddingHorizontal: 8,
              }}
              onChangeText={(text) => setDescription(text)}
            />
          </View>
          <View style={{ width: "100%" }}>
            <Text style={{ width: "100%" }}>Size Limit</Text>
            <TextInput
              keyboardType="numeric"
              placeholder="size limit ..."
              style={{ borderWidth: 1, paddingLeft: 10 }}
            />
          </View>
          <View>
            <Button title="Create Event"></Button>
          </View>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const hostStyles = StyleSheet.create({
  host_header: {
    fontSize: 20,
  },
});

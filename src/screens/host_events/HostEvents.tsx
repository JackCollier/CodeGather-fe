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
import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../styles/Styling";
import DateTimePicker from "@react-native-community/datetimepicker";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { SelectList } from "react-native-dropdown-select-list";

import * as ImagePicker from "expo-image-picker";
import { convertAddressToLongAndLat, getCityData } from "../../utils/CityApi";
import { postEvent } from "../../utils/CodeGatherApi";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MyContext from "../../contexts/Context";

export default function HostEvents() {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [topics, setTopics] = useState<string[]>([]);
  const [topic, setTopic] = useState("");
  const [limit, setLimit] = useState(false);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [eventData, setEventData] = useState({
    user_id: "",
    event_title: "",
    location: {
      lat: 0,
      long: 0,
    },
    size_limit: 0,
    image: "",
    date_time: "",
    topics: "",
    attending: [],
    description: "",
  });
  const [address, setAddress] = useState("");
  const { setIsEventPosted } = useContext(MyContext);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  useEffect(() => {
    AsyncStorage.getItem("profileId").then((id) => {
      const res = JSON.parse(id);
      setEventData((currenValue) => {
        return { ...currenValue, user_id: res.profile_id };
      });
    });
  }, []);

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: any) => {
    setDate(date.toLocaleDateString());
    setTime(date.toLocaleTimeString().slice(0, -3));
    hideDatePicker();

    setEventData((currentData) => {
      return { ...currentData, date_time: String(date) };
    });
  };

  const pickImage = async () => {
    let result: any = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);

      setEventData((currentData) => {
        return { ...currentData, image: result.assets[0].uri };
      });
    }
  };

  const handlerPostEvent = async () => {
    setEventData((currentData) => {
      return { ...currentData, topics: topics };
    });

    postEvent(eventData)
      .then((response) => {
        setAddress("");
        setTopic("");
        setEventData({
          user_id: "",
          event_title: "",
          location: {
            lat: 0,
            long: 0,
          },
          size_limit: 0,
          image: "",
          date_time: "",
          topics: "",
          attending: [],
          description: "",
        });
      })
      .catch((err) => console.log("error---->>", err));

    setIsEventPosted((currentValue) => {
      return !currentValue;
    });
  };

  return (
    <SafeAreaView style={hostStyles.host_contaier}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 120}
      >
        <ScrollView
          contentContainerStyle={{
            flex: 0,
            justifyContent: "flex-start",
            alignItems: "center",
            alignSelf: "center",
            alignContent: "center",
            width: "90%",
            overflow: "hidden",
          }}
        >
          <View style={{ marginBottom: 10 }}>
            <Text>Event Title:</Text>
            <TextInput
              style={styles.text_input}
              placeholder="event title... "
              value={eventData.event_title}
              onChangeText={(text) => {
                setEventData((currentData) => {
                  return { ...currentData, event_title: text };
                });
              }}
            />
          </View>
          <TextInput
            placeholder="add location"
            style={styles.text_input}
            value={address}
            onChangeText={(text) => setAddress(text)}
          />
          <Pressable
            style={{ ...hostStyles.pressable_btn, width: "75%" }}
            onPress={() => {
              convertAddressToLongAndLat(address)
                .then((data) => {
                  setEventData((prev) => {
                    return {
                      ...prev,
                      location: { lat: data[0].lat, long: data[0].lon },
                    };
                  });
                })
                .catch((err) => console.log(err));
            }}
          >
            <Text style={hostStyles.btn_text}>Add Location</Text>
          </Pressable>

          <View style={hostStyles.image_area_container}>
            <Pressable style={hostStyles.pressable_btn} onPress={pickImage}>
              <Text style={hostStyles.btn_text}>Upload Image</Text>
            </Pressable>
            {image && (
              <Image source={{ uri: image }} style={hostStyles.upload_image} />
            )}
          </View>
          <View
            style={{
              borderRadius: 3,
              width: "75%",
            }}
          >
            <Pressable
              style={hostStyles.pressable_btn}
              onPress={showDatePicker}
            >
              <Text style={hostStyles.btn_text}>Event Date and Time</Text>
            </Pressable>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "75%",
              marginVertical: 5,
            }}
          >
            <Text>{date}</Text>
            <Text>{time}</Text>
          </View>
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
              value={topic}
              placeholder={
                !limit ? "add your topic (Limit is 4)" : "limit reached"
              }
            />
            <Text>{topics}</Text>

            <Pressable
              onPress={() => {
                if (topics.length > 3) {
                  setLimit(true);
                  return;
                }
                setTopics((currenTopics) => {
                  return [...currenTopics, topic];
                });
              }}
              disabled={limit}
              style={{ ...hostStyles.pressable_btn, width: 255 }}
            >
              <Text style={{ color: "white" }}>Add Topic</Text>
            </Pressable>
          </View>
          <View style={{ width: "75%", alignSelf: "center" }}>
            <Text style={{ textAlign: "center" }}>Description</Text>
            <TextInput
              multiline
              numberOfLines={10}
              value={eventData.description}
              style={hostStyles.description_input_text}
              onChangeText={(text) => {
                setDescription(text);
                setEventData((currenValue) => {
                  return { ...currenValue, description: text };
                });
              }}
            />
          </View>
          <View style={{ width: "75%", marginVertical: 5 }}>
            <Text style={{ width: "100%" }}>Size Limit</Text>
            <TextInput
              keyboardType="numeric"
              placeholder="size limit ..."
              style={{
                borderWidth: 1,
                borderColor: "#8cb3d9",
                paddingLeft: 10,
              }}
              onChangeText={(text) => {
                setEventData((currenValue) => {
                  return { ...currenValue, size_limit: text };
                });
              }}
            />
          </View>
          <View>
            <Pressable
              onPress={handlerPostEvent}
              style={{
                ...hostStyles.pressable_btn,
                width: 255,
                marginBottom: 60,
              }}
            >
              <Text style={{ color: "white" }}>Create Event</Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const hostStyles = StyleSheet.create({
  host_contaier: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    alignSelf: "center",
    padding: 0,
    gap: 10,
  },
  image_area_container: {
    borderRadius: 3,
    width: "75%",
  },
  pressable_btn: {
    width: "100%",
    paddingHorizontal: 0,
    backgroundColor: "#8cb3d9",
    alignItems: "center",
    paddingVertical: 5,
    marginVertical: 5,
    alignSelf: "center",
  },
  btn_text: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
  },
  upload_image: {
    width: "100%",
    height: 200,
  },
  description_input_text: {
    height: 100,
    width: "100%",
    borderColor: "#8cb3d9",
    borderWidth: 1,
    paddingHorizontal: 8,
  },
});

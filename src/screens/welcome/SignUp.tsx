import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { styles } from "../../styles/Styling";
import { useEffect, useState } from "react";
import { getCityData } from "../../utils/CityApi";
import DateTimePicker from "@react-native-community/datetimepicker";
import RNDateTimePicker from "@react-native-community/datetimepicker";

import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

export default function SignUp() {
  const [selected, setSelected] = useState("");
  const [cityList, setCityList] = useState([]);

  // const [date ,setDate] = useState(new Date())
  // const [showPicker, setShowPicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState<string>("date");
  const [show, setShow] = useState(false);

  const onChange = (selectedDate: any) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(new Date(currentDate.nativeEvent.timestamp));
  };

  const showMode = (currentMode: string) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  //   DateTimePickerAndroid.open(params: AndroidNativeProps)
  // DateTimePickerAndroid.dismiss(mode: AndroidNativeProps['mode'])

  useEffect(() => {
    getCityData().then((res) => {
      const formattedCities = res.results.map(
        (item: { name: string }, index: number) => {
          return { key: index, value: item.name };
        }
      );
      setCityList(formattedCities);
    });
  }, []);

  return (
    <SafeAreaView
      style={{
        ...styles.outerContainer,
        backgroundColor: "#8cb3d9",
      }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
      >
        <ScrollView>
          <View style={{ ...styles.form, padding: 10, width: "100%" }}>
            {/* Your Details*/}
            <View>
              <Text style={{ ...styles.text_input_label }}>Your Details</Text>
              <View style={{ flexDirection: "row" }}>
                <TextInput
                  style={{ ...styles.text_input, minWidth: "50%" }}
                  placeholder="Firstname..."
                />

                <TextInput
                  style={{ ...styles.text_input, minWidth: "50%" }}
                  placeholder="Lastname..."
                />
              </View>
              <View>
                <TextInput
                  style={styles.text_input}
                  placeholder="Username..."
                />
              </View>
              <View
                style={{ ...styles.row_space_around, alignItems: "center" }}
              >
                <TouchableOpacity onPress={() => setShow(!show)}>
                  <Text>Date Of Birth:</Text>
                </TouchableOpacity>
                {/* <RNDateTimePicker
                  mode="date"
                  value={new Date()}
                  minimumDate={new Date(1940, 0, 1)}
                  maximumDate={new Date(2023, 10, 20)}
                /> */}
                {show && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    onChange={onChange}
                  />
                )}
                <Text>{date.toLocaleDateString()}</Text>
              </View>
            </View>
            {/* */}
            <View>
              <Text style={{ ...styles.text_input_label }}>
                Create Your Email and password
              </Text>
              <TextInput style={styles.text_input} placeholder="Email..." />
              <TextInput style={styles.text_input} placeholder="Password..." />
            </View>
            <View>
              <Text style={{ ...styles.text_input_label }}>Your Location</Text>
              <SelectList
                setSelected={(val: string) => setSelected(val)}
                data={cityList}
                save="value"
                boxStyles={{ borderColor: "#8cb3d9" }}
                dropdownStyles={{ borderColor: "#8cb3d9" }}
                maxHeight={110}
              />
            </View>
            <Pressable style={styles.btn}>
              <Text style={styles.btn_text}>Sign up</Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
const SignInStyles = StyleSheet.create({});

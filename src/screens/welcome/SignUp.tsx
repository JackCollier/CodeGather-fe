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
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { styles } from "../../styles/Styling";
import { useEffect, useState } from "react";
import { getCityData } from "../../utils/CityApi";

export default function SignUp() {
  const [selected, setSelected] = useState("");
  const [cityList, setCityList] = useState([]);

  const mockLocationData = [
    { key: 1, value: "London" },
    { key: 2, value: "Liverpool" },
    { key: 3, value: "Manchester" },
    { key: 4, value: "Manchester" },
    { key: 5, value: "Manchester" },
    { key: 6, value: "Manchester" },
    { key: 7, value: "Manchester" },
    { key: 8, value: "Manchester" },
    { key: 9, value: "Manchester" },
    { key: 10, value: "Mewport" },
  ];

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
              <Text style={{ ...styles.text_input_label }}>Your Detail</Text>
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
                <TextInput style={styles.text_input} placeholder="Email..." />
              </View>
            </View>
            {/* */}
            <View>
              <Text style={{ ...styles.text_input_label }}>
                Creat Your username and password
              </Text>
              <TextInput style={styles.text_input} placeholder="Username..." />
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

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
import { postSingup } from "../../utils/CodeGatherApi";
import Navigation from "../../navigation/Navigation";

export default function SignUp({ navigation }: { navigation: any }) {
  const [selected, setSelected] = useState("");
  const [cityList, setCityList] = useState([]);
  const [signUpDetail, setSignUpDetail] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    username: "",
    date_of_birth: "",
    location: "",
    avatar: "",
    bio: "",
  });

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

  const handleSingUp = () => {
    postSingup(signUpDetail).then((data) => {
      console.log("--------------", data);
      console.log(signUpDetail);

      // navigation.navigate("Signin")
    });
  };

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
                  onChangeText={(text) => {
                    setSignUpDetail((currentDetail) => {
                      return { ...currentDetail, first_name: text };
                    });
                  }}
                />

                <TextInput
                  style={{ ...styles.text_input, minWidth: "50%" }}
                  placeholder="Lastname..."
                  onChangeText={(text) => {
                    setSignUpDetail((currentDetail) => {
                      return { ...currentDetail, last_name: text };
                    });
                  }}
                />
              </View>
              <View>
                <TextInput
                  style={styles.text_input}
                  placeholder="Username..."
                  onChangeText={(text) => {
                    setSignUpDetail((currentDetail) => {
                      return { ...currentDetail, username: text };
                    });
                  }}
                />
              </View>
              <View
                style={{ ...styles.row_space_around, alignItems: "center" }}
              ></View>
            </View>
            {/* */}
            <View>
              <Text style={{ ...styles.text_input_label }}>
                Create Your Email and password
              </Text>
              <TextInput
                style={styles.text_input}
                placeholder="Email..."
                onChangeText={(text) => {
                  setSignUpDetail((currentDetail) => {
                    return { ...currentDetail, email: text };
                  });
                }}
              />
              <TextInput
                style={styles.text_input}
                placeholder="Password..."
                onChangeText={(text) => {
                  setSignUpDetail((currentDetail) => {
                    return { ...currentDetail, password: text };
                  });
                }}
              />
            </View>
            <View>
              <Text style={{ ...styles.text_input_label }}>Your Location</Text>
              <SelectList
                setSelected={(val: string) => {
                  setSelected(val);
                  setSignUpDetail((currentDetail) => {
                    return { ...currentDetail, location: val };
                  });
                }}
                data={cityList}
                save="value"
                boxStyles={{ borderColor: "#8cb3d9" }}
                dropdownStyles={{ borderColor: "#8cb3d9" }}
                maxHeight={110}
              />
            </View>
            <Pressable
              style={styles.btn}
              onPress={() => {
                handleSingUp();
              }}
            >
              <Text style={styles.btn_text}>Sign up</Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
const SignInStyles = StyleSheet.create({});

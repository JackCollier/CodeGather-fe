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
import { Picker } from "@react-native-picker/picker";
import { styles } from "../../styles/Styling";

export default function SignUp() {
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
              <Picker>
                <Picker.Item label="London" value="London" />
                <Picker.Item label="Mancheser" value="Manchester" />
                <Picker.Item label="Liverpool" value="Liverpool" />
                <Picker.Item label="Sheffield" value="Sheffield" />
              </Picker>
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

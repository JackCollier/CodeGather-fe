import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { styles } from "../../styles/Styling";

export default function SignIn() {
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
        <View style={styles.form}>
          <View>
            <Text style={{ ...styles.text_input_label }}>Email</Text>
            <TextInput style={styles.text_input} placeholder="Email..." />
          </View>
          <View>
            <Text style={{ ...styles.text_input_label }}>Password</Text>
            <TextInput style={styles.text_input} placeholder="Password..." />
          </View>
          <Pressable style={styles.btn}>
            <Text style={styles.btn_text}>Sign in</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const SignInStyles = StyleSheet.create({});

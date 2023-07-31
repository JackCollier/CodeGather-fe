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
    <SafeAreaView style={styles.outerContainer}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 120 : 0}
      >
        <View style={SignInStyles.signin_form}>
          <View>
            <Text style={styles.text_input_label}>Email</Text>
            <TextInput style={styles.text_input} placeholder="Email..." />
          </View>
          <View>
            <Text style={styles.text_input_label}>Password</Text>
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

const SignInStyles = StyleSheet.create({
  signin_form: {
    borderWidth: 1,
    gap: 30,
    padding: 30,
    borderColor: "#8cb3d9",
    borderRadius: 2,
    marginBottom: 50,
  },
});

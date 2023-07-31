import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  TextInput,
} from "react-native";
import { styles } from "../../styles/Styling";

export default function SignIn() {
  return (
    <SafeAreaView style={styles.outerContainer}>
      <View style={SignInStyles.signin_form}>
        <View>
          <Text style={styles.text_input_label}>Email</Text>
          <TextInput
            style={styles.text_input}
            placeholder="FakeEmail@Fmail.com"
          />
        </View>
        <View>
          <Text style={styles.text_input_label}>Password</Text>
          <TextInput
            style={styles.text_input}
            placeholder="NotARealPassword..."
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const SignInStyles = StyleSheet.create({
  signin_form: {
    borderWidth: 1,
    gap: 30,
    padding: 20,
    borderColor: "#8cb3d9",
    borderRadius: 2,
  },
});

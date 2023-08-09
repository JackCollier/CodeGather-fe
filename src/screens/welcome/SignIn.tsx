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
import { useEffect, useState } from "react";
import { postLogin } from "../../utils/CodeGatherApi";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SignIn({ navigation }: any) {
  const [signInDetails, setSignInDetails] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(false);

  const handleLogin = (email: string, password: string) => {
    postLogin(email, password).then((res) => {
      console.log(res);
      if (res.success) {
        setError(false);
        navigation.replace("Tab");
        console.log("resID", res.profile_id);
        AsyncStorage.setItem(
          "profileId",
          JSON.stringify({ profile_id: res.profile_id })
        );
      } else {
        setError(true);
      }
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
        <View style={styles.form}>
          <View>
            <Text style={{ ...styles.text_input_label }}>Email</Text>
            <TextInput
              onChangeText={(text) =>
                setSignInDetails((currentValue) => {
                  {
                    setError(false);
                    return { ...currentValue, email: text };
                  }
                })
              }
              style={{ ...styles.text_input, width: 200 }}
              placeholder="Email..."
              keyboardType="email-address"
              autoCapitalize="none"
              maxLength={100}
            />
          </View>
          <View>
            <Text style={{ ...styles.text_input_label }}>Password</Text>
            <TextInput
              style={{ ...styles.text_input, width: 200 }}
              placeholder="Password..."
              onChangeText={(text) => {
                setError(false);
                setSignInDetails((currentValue) => {
                  return { ...currentValue, password: text };
                });
              }}
              secureTextEntry={true}
              autoCapitalize="none"
              maxLength={100}
            />
          </View>
          {error && <Text style={{ color: "red" }}>Error Logging in</Text>}
          <Pressable
            style={styles.btn}
            onPress={() => {
              handleLogin(signInDetails.email, signInDetails.password);
            }}
          >
            <Text style={styles.btn_text}>Sign in</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const SignInStyles = StyleSheet.create({});

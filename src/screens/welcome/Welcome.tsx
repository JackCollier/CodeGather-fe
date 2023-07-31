import { View, Text, SafeAreaView, StyleSheet, Pressable } from "react-native";
import { styles } from "../../styles/Styling";

const Welcome = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.outerContainer}>
      <View style={WelcomeStyles.welcome_logo_container}>
        <Text style={WelcomeStyles.logo}>{"<CodeGather/>"}</Text>
      </View>
      <View style={WelcomeStyles.welcome_btn_container}>
        <Pressable
          style={WelcomeStyles.welcome_btn}
          onPress={() => navigation.navigate("Signin")}
        >
          <Text style={WelcomeStyles.welcome_btn_text}>Sign in</Text>
        </Pressable>

        <Pressable
          style={WelcomeStyles.welcome_btn}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text style={WelcomeStyles.welcome_btn_text}>Sign up</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const WelcomeStyles = StyleSheet.create({
  container: styles.outerContainer,
  logo: {
    fontSize: 45,
    fontWeight: "bold",
    letterSpacing: 2,
  },

  welcome_logo_container: {
    marginTop: -80,
    marginBottom: 30,
  },

  welcome_btn_container: {
    gap: 15,
  },
  welcome_btn: {
    paddingHorizontal: 45,
    paddingVertical: 9,
    backgroundColor: "#8cb3d9",
    borderRadius: 2,
  },
  welcome_btn_text: {
    fontSize: 20,
    textAlign: "center",
  },
});

export default Welcome;

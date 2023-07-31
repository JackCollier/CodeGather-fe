import { View, Text, SafeAreaView, StyleSheet, Pressable } from "react-native";
import { styles } from "../../styles/Styling";

const Welcome = () => {
    return (
        <SafeAreaView style={styles.outerContainer}>
            <View>
                <Text style={WelcomeStyles.logo}>{"<CodeGather/>"}</Text>
            </View>
            <View style={WelcomeStyles.welcome_btn_container}>
                <Pressable style={WelcomeStyles.welcome_btn}>
                    <Text style={WelcomeStyles.welcome_btn_text}>Login</Text>
                </Pressable>

                <Pressable style={WelcomeStyles.welcome_btn}>
                    <Text style={WelcomeStyles.welcome_btn_text}>Signup</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

const WelcomeStyles = StyleSheet.create({
    container: styles.outerContainer,
    logo: {
        fontSize: 40,
        fontWeight: "bold",
        letterSpacing: 2,
    },
    welcome_logo_container: {},
    welcome_btn_container: {
        backgroundColor: "red",
    },
    welcome_btn: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        backgroundColor: "#8cb3d9",
        borderRadius: 4,
    },
    welcome_btn_text: {
        fontSize: 20,
        textAlign: "center",
    },
});

export default Welcome;

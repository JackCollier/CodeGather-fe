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
                <View style={SignInStyles.signin_form}>
                    <View>
                        <Text style={{ ...styles.text_input_label }}>
                            Email
                        </Text>
                        <TextInput
                            style={{
                                ...styles.text_input,
                                backgroundColor: "white",
                            }}
                            placeholder="Email..."
                        />
                    </View>
                    <View>
                        <Text style={{ ...styles.text_input_label }}>
                            Password
                        </Text>
                        <TextInput
                            style={{
                                ...styles.text_input,
                                borderWidth: 0.5,
                                borderRadius: 1,
                            }}
                            placeholder="Password..."
                        />
                    </View>
                    <Pressable
                        style={{
                            ...styles.btn,
                            backgroundColor: "#8cb3d9",
                            borderWidth: 0.5,
                            width: "75%",
                            alignSelf: "center",
                            borderColor: "#8cb3d9",
                        }}
                    >
                        <Text style={styles.btn_text}>Sign in</Text>
                    </Pressable>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
const SignInStyles = StyleSheet.create({
    signin_form: {
        borderWidth: 0.2,
        gap: 30,
        padding: 50,
        paddingVertical: 70,
        borderColor: "black",
        borderRadius: 2,
        marginBottom: 50,

        backgroundColor: "white",
    },
});

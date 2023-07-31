import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { styles } from "../../styles/Styling";

const Welcome = () => {
    return (
        <SafeAreaView style={styles.outerContainer}>
            <View>
                <Text>CodeGather</Text>
            </View>
            <View>
                
            </View>
        </SafeAreaView>
    );
};

const WelcomeStyles = StyleSheet.create({
    container: styles.outerContainer,
});

export default Welcome;

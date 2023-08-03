import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  StyleSheet,
  Image,
  FlatList,
  Linking,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCode, faBug } from "@fortawesome/free-solid-svg-icons";
import { styles } from "../../styles/Styling";

function Profile() {
  interface profile {
    avatar: string;
    fullName: string;
    userName: string;
    rating: number;
    preferences: [];
    bio: string;
    socials: [];
  }

  const userData = {
    fullName: "Jack Collier",
    userName: "IknowREGEX",
    avatar: "https://avatars.githubusercontent.com/u/121406496?v=4",
    location: "Manchester",
    date_of_birth: "02/02/23",
    codding_lang: ["Javascript", "Python"],
    interests: ["robotic", "codding", "footi"],
    rating: 5,
    bio: "Junior Developer, Currently studying Full Stack developement through Northcoders. React React React",
    socials: [
      "https://github.com/JackCollier",
      "https://www.codewars.com/users/ackC",
      "https://www.linkedin.com/in/",
    ],
  };

  const renderSocials = ({ item }: { item: any }) => {
    const handleLinkPress = async () => {
      try {
        await Linking.openURL(item);
      } catch (error) {
        console.error("Couldn't open the link", error);
      }
    };
    return (
      <View style={profileStyles.links}>
        <Text
          style={{ textDecorationLine: "underline", color: "blue" }}
          onPress={handleLinkPress}
        >
          {item}
        </Text>
      </View>
    );
  };

  const renderLangs = ({ item }: { item: any }) => {
    return <Text>{item}</Text>;
  };

  return (
    <SafeAreaView style={styles.outerContainer}>
      <View style={profileStyles.container}>
        <View style={profileStyles.profileContainer}>
          <View style={profileStyles.topOfProfile}>
            <View style={profileStyles.row}>
              <Image
                style={profileStyles.avatar}
                source={{
                  uri: userData.avatar,
                }}
              />
              <View style={profileStyles.profileText}>
                <Text style={profileStyles.fullname}>{userData.fullName}</Text>
                <Text style={profileStyles.userName}>@{userData.userName}</Text>
                <Text> Rating: {userData.rating}</Text>
                <Text> {userData.location}</Text>
              </View>
            </View>

            <Text style={profileStyles.bio}>{userData.bio}</Text>

            <Text style={profileStyles.social_media_title}>
              Social Media links
            </Text>
            <View>
              <FlatList data={userData.socials} renderItem={renderSocials} />
            </View>
          </View>

          <View style={profileStyles.bottomOfProfile}>
            <View style={{ marginRight: 30 }}>
              <Text style={{ fontSize: 16 }}>Programming languages</Text>
              <FlatList data={userData.codding_lang} renderItem={renderLangs} />
            </View>

            <View>
              <Text style={{ fontSize: 16 }}>Interests</Text>
              <FlatList data={userData.interests} renderItem={renderLangs} />
            </View>
          </View>
        </View>
        <View style={profileStyles.eventContainer}>
          <Text>Events Hosting</Text>
          <Text>Events atteding</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const profileStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingRight: 60,
    paddingTop: 10,
  },
  profileContainer: {
    flex: 1.4,
    width: "100%",
    padding: 10,
  },
  eventContainer: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  topOfProfile: {
    flex: 1.95,
    width: "100%",
  },
  profileText: {
    gap: 10,
    textAlign: "center",
  },
  bottomOfProfile: {
    flex: 1,
    width: 360,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignSelf: "center",

    marginTop: 100,
    paddingHorizontal: 20,
    fontSize: 20,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 50,
  },
  fullname: {
    fontSize: 30,
  },
  userName: {
    fontSize: 15,
  },
  bio: {
    paddingTop: 20,
    paddingLeft: 20,
    fontSize: 15,
  },
  social_media_title: {
    marginLeft: 20,
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  links: {
    paddingLeft: 20,
    paddingTop: 2,
  },
});

export default Profile;

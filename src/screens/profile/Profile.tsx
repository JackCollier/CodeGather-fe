import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  StyleSheet,
  Image,
  FlatList,
  Linking,
  TextInput,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCode, faBug } from "@fortawesome/free-solid-svg-icons";
import { styles } from "../../styles/Styling";
import { useContext, useEffect, useState } from "react";
import MyContext from "../../contexts/Context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { patchProfile } from "../../utils/CodeGatherApi";
import DefaultImage from "../../assets/avatar.png";
// import DefaultImage from '../assets/image.png';

function Profile() {
  const [profileStorage, setProfileStorage] = useState(null);
  const {
    profileData: { profile },
    setIsProfileUpdated,
  } = useContext(MyContext);

  const [editPressed, setEditPressed] = useState(false);
  const [editSaved, setEditSaved] = useState(false);

  const [proLang, setProLang] = useState("");

  console.log("profile---------", profile?.avatar);
  console.log("profile---------", profile?.avatar);
  const DEFAULT_IMAGE = Image.resolveAssetSource(DefaultImage).uri;

  useEffect(() => {
    setProfileStorage(profile);
  }, [editPressed]);

  // useEffect(() => {
  //   setProfileStorage(profile);
  //   AsyncStorage.getItem("profileId").then((data) => {});
  // }, []);

  useEffect(() => {
    patchProfile(profileStorage)
      .then((res) => {})
      .catch((err) => {});
  }, [editSaved]);

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
    <>
      {profile ? (
        <SafeAreaView style={{ ...styles.outerContainer }}>
          <View style={profileStyles.container}>
            <View style={profileStyles.profileContainer}>
              <View
                style={{
                  ...profileStyles.topOfProfile,
                  backgroundColor: "#8cb3d9",
                  width: "100%",
                }}
              >
                <View style={profileStyles.row}>
                  <Image
                    style={profileStyles.avatar}
                    source={
                      profile.avatar
                        ? {
                            uri: profile.avatar,
                          }
                        : require("../../assets/avatar.png")
                    }
                  />
                  <View style={profileStyles.profileText}>
                    {editPressed ? (
                      <>
                        <TextInput
                          style={{ ...profileStyles.fullname, borderWidth: 1 }}
                          onChangeText={(text) =>
                            setProfileStorage((prev) => {
                              return { ...prev, first_name: text };
                            })
                          }
                        >
                          Enter First Name
                        </TextInput>
                        <TextInput
                          style={{ ...profileStyles.fullname, borderWidth: 1 }}
                          onChangeText={(text) =>
                            setProfileStorage((prev) => {
                              return { ...prev, last_name: text };
                            })
                          }
                        >
                          Enter First Name
                        </TextInput>
                      </>
                    ) : (
                      <Text style={{ fontSize: 25 }}>
                        {profile.first_name + " " + profile.last_name}
                      </Text>
                    )}
                    <Text style={profileStyles.userName}>
                      @{profile.username}
                    </Text>
                    <Text> Rating: {profile.host_rating}</Text>
                    <Text> {profile.location}</Text>
                  </View>
                </View>
                {editPressed ? (
                  <TextInput
                    style={{ ...profileStyles.bio, borderWidth: 1 }}
                    onChangeText={(text) =>
                      setProfileStorage((prev) => {
                        return { ...prev, bio: text };
                      })
                    }
                  >
                    Enter Bio
                  </TextInput>
                ) : (
                  <Text style={{ ...profileStyles.bio, marginLeft: 130 }}>
                    {profile.bio}
                  </Text>
                )}
                <Text
                  style={{
                    ...profileStyles.social_media_title,
                    marginLeft: 150,
                  }}
                >
                  Social Media links
                </Text>
                <View>
                  {/* <FlatList data={profile.socials} renderItem={renderSocials} /> */}
                </View>
              </View>

              <View style={profileStyles.bottomOfProfile}>
                <View style={{ marginRight: 30 }}>
                  {editPressed ? (
                    <TextInput
                      style={{ ...profileStyles.bio, borderWidth: 1 }}
                      onChangeText={(text) => setProLang(text)}
                      placeholder="name, name, ...."
                    />
                  ) : null}

                  <Text style={{ fontSize: 16 }}>Programming languages</Text>

                  <FlatList
                    data={profile.coding_languages}
                    renderItem={renderLangs}
                  />
                </View>
                <View
                  style={{
                    width: 0.5,
                    height: "100%",
                    backgroundColor: "black",
                    opacity: 0.2,
                    marginLeft: -30,
                  }}
                ></View>
                <View>
                  <Text style={{ fontSize: 16 }}>Interests</Text>
                  {/* <FlatList data={userData.interests} renderItem={renderLangs} /> */}
                </View>
              </View>
            </View>
            <View style={profileStyles.eventContainer}>
              <Text>Events Hosting</Text>
              <View
                style={{
                  width: 0.5,
                  height: "100%",
                  backgroundColor: "black",
                  opacity: 0.2,
                }}
              ></View>
              <Text>Events atteding</Text>
              <Pressable onPress={() => setEditPressed((prev) => !prev)}>
                <Text>Edit</Text>
              </Pressable>

              {editPressed && (
                <Pressable
                  onPress={() => {
                    setProfileStorage((prev) => {
                      return {
                        ...prev,
                        coding_languages: [...prev.coding_languages, proLang],
                      };
                    });

                    setEditSaved((prev) => !prev);
                    setIsProfileUpdated((prev) => !prev);
                  }}
                >
                  <Text>Save Profile</Text>
                </Pressable>
              )}
            </View>
          </View>
        </SafeAreaView>
      ) : (
        <Text>Loading....</Text>
      )}
    </>
  );
}

const profileStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
    marginTop: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    // paddingRight: 60,
    paddingTop: 10,
  },
  profileContainer: {
    flex: 1.4,
    width: "100%",
    // padding: 10,
    backgroundColor: "orange",
  },
  eventContainer: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  topOfProfile: {
    flex: 1.95,
    width: "100%",
  },
  profileText: {
    gap: 10,
    textAlign: "center",
    marginRight: 50,
  },
  bottomOfProfile: {
    flex: 1,
    width: 360,
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",

    marginTop: 10,
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

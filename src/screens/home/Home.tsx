import { View, StyleSheet, TextInput, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMapLocationDot, faFilter } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { styles } from "../../styles/Styling";
import { useState, useEffect } from "react";
import {
  renderHorizontalItems,
  renderVerticalItems,
  Article,
  Profile,
} from "../../utils/RenderFunctions";

export default function Home({ navigation }: any) {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    setArticles([
      {
        event_id: 1,
        title: "React Study Group",
        username: "jeffTheOnlyCodeGod",
        event_img_url:
          "https://solguruz.com/wp-content/uploads/2022/09/ReactJS-Framework-Benefits.png",
        location: "Manchester",
        date: "26/09/2023",
        description:
          "Join our React Study Group to learn and discuss React concepts and best practices.",
        topics: ["React", "Frontend", "Web Development"],
        attending: [{ userName: "ben" }],
      },
      {
        event_id: 2,
        title: "Python Coders Conference",
        username: "python_master",
        event_img_url:
          "https://i.natgeofe.com/n/7fef9761-077c-45d0-9cca-78a984b9d614/burmese-python_thumb_4x3.jpg",
        location: "San Francisco",
        date: "15/10/2023",
        description:
          "The Python Coders Conference is a gathering of Python enthusiasts to share knowledge and experiences.",
        topics: ["Python", "Programming", "Software Development"],
        attending: [
          { userName: "alice" },
          { userName: "bob" },
          { userName: "charlie" },
        ],
      },
      {
        event_id: 3,
        title: "JavaScript Workshop",
        username: "js_guru",
        event_img_url:
          "https://miro.medium.com/v2/resize:fit:1200/1*BPSx-c--z6r7tY29L19ukQ.png",
        location: "New York City",
        date: "05/11/2023",
        description:
          "Enhance your JavaScript skills at our interactive JavaScript Workshop.",
        topics: ["JavaScript", "Frontend", "Web Development"],
        attending: [
          { userName: "david" },
          { userName: "emma" },
          { userName: "frank" },
          { userName: "grace" },
        ],
      },
      {
        event_id: 4,
        title: "Data Science Symposium",
        username: "data_ninja",
        event_img_url:
          "https://uswfoxtail.blob.core.windows.net/foxtail-prod-uploads/images/Thinks.8dd35e85.fill-1366x700.format-jpeg.jpegquality-80.jpg",
        location: "Chicago",
        date: "20/11/2023",
        description:
          "Explore the latest trends and breakthroughs in Data Science at our Symposium.",
        topics: ["Data Science", "Machine Learning", "Artificial Intelligence"],
        attending: [
          { userName: "hannah" },
          { userName: "ian" },
          { userName: "jack" },
          { userName: "kate" },
        ],
      },
      {
        event_id: 5,
        title: "AI and Machine Learning Expo",
        username: "ml_wizard",
        event_img_url:
          "https://assetsio.reedpopcdn.com/the-making-of-system-shock-2s-best-level-1504277832620.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp",
        location: "Seattle",
        date: "08/12/2023",
        description:
          "Experience the cutting-edge advancements in AI and Machine Learning at our Expo.",
        topics: ["Artificial Intelligence", "Machine Learning", "Technology"],
        attending: [
          { userName: "lily" },
          { userName: "mike" },
          { userName: "natalie" },
          { userName: "oliver" },
          { userName: "penny" },
        ],
      },
    ]);
  }, []);

  return (
    <SafeAreaView style={styles.outerContainer}>
      <View>
        <View style={homeStyles.nav_container}>
          <FontAwesomeIcon icon={faMapLocationDot} size={35} />
          <TextInput style={styles.text_input} placeholder="Search" />
          <FontAwesomeIcon icon={faFilter} size={35} />
        </View>
        <View style={homeStyles.horizontal_list_container}>
          <FlatList
            data={articles}
            renderItem={({ item }) =>
              renderHorizontalItems({ item, navigation })
            }
            keyExtractor={(item) => item.title}
            horizontal={true}
          ></FlatList>
        </View>
        <View style={homeStyles.vertical_list_container}>
          <FlatList
            data={articles}
            renderItem={({ item }) => renderVerticalItems({ item, navigation })}
            keyExtractor={(item) => item.title}
            horizontal={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export const homeStyles = StyleSheet.create({
  nav_container: {
    flex: 0.1,
    minWidth: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  horizontal_list_container: {
    flex: 0.35,
    padding: 2,
  },
  vertical_list_container: {
    flex: 1,
    padding: 2,
  },
  horizontalCard: {
    borderWidth: 1,
    borderColor: "#8cb3d9",
    padding: 3,
    alignItems: "center",
    margin: 2,
    minWidth: 200,
    borderRadius: 2,
  },
  smallImg: {
    width: "80%",
    height: 90,
  },
  verticalCard: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 220,
    paddingVertical: 10,
    maxWidth: 385,
    paddingHorizontal: 2,
    borderBottomWidth: 1,
    borderColor: "#8cb3d9",
  },
  bigImgContainer: {
    width: 160,
    height: "100%",
    borderWidth: 1,
    marginRight: 20,
    borderRadius: 2,
  },
  bigImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});

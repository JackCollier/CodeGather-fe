import {
  View,
  Text,
  Image,
  FlatList,
  Pressable,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "../../styles/Styling";
import { Article, Profile } from "../../utils/RenderFunctions";

export default function SingleEventPage({ route }: { route: any }) {
  const [article, setArticle] = useState<Article>({});
  const eventParam = route.params;

  useEffect(() => {
    const articles = [
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
        size_limit: 6,
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
        size_limit: 6,
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

        size_limit: 6,
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
        size_limit: 6,
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
        size_limit: 6,
      },
    ];
    const articleById: any = articles.find(
      (article) => article.event_id === eventParam.event_id
    );
    setArticle(articleById);
  }, []);

  const renderTopics = ({ item }: { item: string[] }) => {
    return <Text style={{ fontSize: 20 }}>{item}</Text>;
  };

  return (
    <View style={SingleEventStyles.event_container}>
      <View style={SingleEventStyles.event_header}>
        <Text style={{ fontSize: 20 }}>{article.title}</Text>
        <Text>{article.date}</Text>
      </View>
      <View>
        <Image
          source={{ uri: article.event_img_url }}
          style={{ height: 200 }}
        />
      </View>
      <View
        style={{
          ...styles.row_space_between,
          flexDirection: "row",
          marginTop: 10,
        }}
      >
        <Text style={{ fontSize: 20 }}>{article.username}</Text>
        <Text style={{ fontSize: 16 }}>{article.location}</Text>
        <Text style={{ fontSize: 16 }}>
          Attending:{article.attending?.length + "/" + article.size_limit}
        </Text>
      </View>
      <View style={SingleEventStyles.topics_container}>
        <View>
          <FlatList
            data={article.topics}
            renderItem={renderTopics}
            horizontal={true}
          />
        </View>
      </View>
      <View style={SingleEventStyles.description_container}>
        <Text style={{ fontSize: 18, textAlign: "left" }}>
          {article.description}
        </Text>
      </View>
      <Pressable style={SingleEventStyles.attend_event_btn}>
        <Text>Attend Event</Text>
      </Pressable>
    </View>
  );
}

const SingleEventStyles = StyleSheet.create({
  event_container: {
    padding: 5,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  event_header: {
    justifyContent: "space-between",
    alignItems: "flex-end",
    flexDirection: "row",
    borderWidth: 1,
    marginBottom: 2,
  },
  topics_container: {
    flexDirection: "row",
    marginTop: 10,
    width: "100%",
    justifyContent: "space-between",
    padding: 2,
  },
  description_container: {
    width: "99%",
    alignSelf: "center",
    marginBottom: 10,
  },
  attend_event_btn: {
    alignSelf: "center",
    borderColor: "#8cb3d9",
    backgroundColor: "#8cb3d9",
    paddingHorizontal: 10,
    paddingVertical: 9,
    borderRadius: 2,
    borderWidth: 0.5,
  },
});

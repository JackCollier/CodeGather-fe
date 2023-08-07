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
import { getEventData, getEventDataById } from "../../utils/CodeGatherApi";
import { convertLongAndLat } from "../../utils/CityApi";

export default function SingleEventPage({ route }: { route: any }) {
  const [article, setArticle] = useState<Article>({});
  const [isLoading, setIsLoading] = useState(true);
  const [locationData, setLocationData] = useState();
  const eventParam = route.params;

  useEffect(() => {
    getEventDataById(eventParam.event_id)
      .then((res) => {
        setArticle(res.event);
        setIsLoading(false);
        return res.event.location;
      })
      .then((location) => {
        return convertLongAndLat(location.lat, location.long);
      })
      .then((data) => {
        setLocationData(data.address.city);
      });
  }, []);

  const renderTopics = ({ item }: { item: string[] }) => {
    return <Text style={{ fontSize: 20 }}>{item}</Text>;
  };

  return (
    <>
      {isLoading ? (
        <Text>...</Text>
      ) : (
        <View style={SingleEventStyles.event_container}>
          <View style={SingleEventStyles.event_header}>
            <Text style={{ fontSize: 20 }}>{article.event_title}</Text>
            <Text>{new Date(article.date_time).toLocaleDateString()}</Text>
            <Text>
              {new Date(article.date_time).toLocaleTimeString().slice(0, -3)}
            </Text>
          </View>
          <View>
            <Image source={{ uri: article.image }} style={{ height: 200 }} />
          </View>
          <View
            style={{
              ...styles.row_space_between,
              flexDirection: "row",
              marginTop: 10,
            }}
          >
            <Text style={{ fontSize: 20 }}>{article.username}</Text>
            <Text style={{ fontSize: 16 }}>{locationData}</Text>
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
      )}
    </>
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

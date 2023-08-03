import {
  View,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  Text,
} from "react-native";
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
import { getEventData } from "../../utils/CodeGatherApi";

export default function Home({ navigation }: any) {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    getEventData().then((res) => {
      setArticles(res);
    });
  }, []);

  return (
    <SafeAreaView style={styles.outerContainer}>
      <View>
        <View style={homeStyles.nav_container}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Location");
            }}
          >
            <FontAwesomeIcon icon={faMapLocationDot} size={35} />
          </TouchableOpacity>
          <TextInput style={styles.text_input} placeholder="Search" />
          <FontAwesomeIcon icon={faFilter} size={35} />
        </View>
        <View style={homeStyles.horizontal_list_container}>
          <Text>Popular Events</Text>
          <FlatList
            data={articles}
            renderItem={({ item }) =>
              renderHorizontalItems({ item, navigation })
            }
            keyExtractor={(item) => item._id}
            horizontal={true}
          ></FlatList>
        </View>
        <View style={homeStyles.vertical_list_container}>
          <Text>Events Near You</Text>
          <FlatList
            data={articles}
            renderItem={({ item }) => renderVerticalItems({ item, navigation })}
            keyExtractor={(item) => item._id}
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
    flex: 0.4,
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

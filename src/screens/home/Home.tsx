import {
  View,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMapLocationDot, faFilter } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "../../styles/Styling";
import { useState, useEffect } from "react";
import { getEventData } from "../../utils/CodeGatherApi";
import { convertLongAndLat } from "../../utils/CityApi";

export type Article = {
  _id: string;
  user_id: string;
  event_title: string;
  username?: string;
  image: string;
  location?: any;
  date_time: string;
  description: string;
  topics: string[];
  attending: Profile[];
  size_limit: number;
};

export type Profile = {
  userName: string;
};

const LocationText = ({ lat, long }) => {
  const [city, setCity] = useState("");

  useEffect(() => {
    const getCityFromCoordinates = async (lat, long) => {
      try {
        const data = await convertLongAndLat(lat, long);
        setCity(data.address.city);
      } catch (error) {
        console.error(error);
        setCity("");
      }
    };

    getCityFromCoordinates(lat, long);
  }, [lat, long]);

  return <Text>{city}</Text>;
};

export default function Home({ navigation }: any) {
  const [events, setEvents] = useState<Article[]>([]);

  useEffect(() => {
    getEventData().then((res) => {
      setEvents(res);
    });
  }, []);

  const handlerClick = (event_id: string) => {
    navigation.navigate("SingleEventPage", { event_id });
  };

  const renderHorizontalItems = ({ item }: { item: Article }) => {
    return (
      <TouchableOpacity onPress={() => handlerClick(item._id)}>
        <View style={homeStyles.horizontalCard}>
          <Text>{item.event_title}</Text>
          <Image source={{ uri: item.image }} style={homeStyles.smallImg} />
          <Text>{item.date_time}</Text>
          <LocationText lat={item.location.lat} long={item.location.long} />
          <Text>Attending: {item.attending.length}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderVerticalItems = ({ item }: { item: Article }) => {
    return (
      <View style={homeStyles.verticalCard}>
        <TouchableOpacity onPress={() => handlerClick(item._id)}>
          <View style={homeStyles.bigImgContainer}>
            <Image source={{ uri: item.image }} style={homeStyles.bigImg} />
          </View>
        </TouchableOpacity>
        <View style={{ gap: 4 }}>
          <TouchableOpacity onPress={() => handlerClick(item._id)}>
            <Text style={{ fontSize: 20, maxWidth: 200 }}>
              {item.event_title}
            </Text>
          </TouchableOpacity>
          <View style={{ ...styles.row_space_between, maxWidth: 185 }}>
            <Text>{item.date_time}</Text>
          </View>
          <LocationText lat={item.location.lat} long={item.location.long} />
          <View style={styles.row_flex_start}>
            <View style={{ width: 180 }}>
              <Text style={{}}>{item.topics[0] + " " + item.topics[1]}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => handlerClick(item._id)}>
            <Text style={{ maxWidth: 200 }}>
              {item.description.slice(0, 60) + "..."}
            </Text>
            <Text>Attending: {item.attending.length}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.outerContainer}>
      <View>
        <View style={homeStyles.nav_container}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Location");
            }}
          >
            <FontAwesomeIcon
              icon={faMapLocationDot}
              color="#3c8eba"
              size={32}
            />
          </TouchableOpacity>
          <TextInput style={styles.text_input} placeholder="Search" />
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="filter-menu"
              size={32}
              color="#3c8eba"
            />
          </TouchableOpacity>
        </View>
        <View style={homeStyles.horizontal_list_container}>
          <Text
            style={{
              backgroundColor: "#cacfcc",
              padding: 6,
            }}
          >
            Popular Events
          </Text>
          <FlatList
            data={events}
            renderItem={({ item }) => renderHorizontalItems({ item })}
            keyExtractor={(item) => item._id}
            horizontal={true}
          />
        </View>
        <View style={homeStyles.vertical_list_container}>
          <Text
            style={{
              backgroundColor: "#cacfcc",
              padding: 6,
            }}
          >
            Events Near You
          </Text>
          <FlatList
            data={events}
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

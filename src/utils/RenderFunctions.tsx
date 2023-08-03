import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "../styles/Styling";
import { homeStyles } from "../screens/home/Home";

export type Article = {
  event_id: number;
  title: string;
  username: string;
  event_img_url: string;
  location: string;
  date: string;
  description: string;
  topics: string[];
  attending: Profile[];
};

export type Profile = {
  userName: string;
};

export const renderHorizontalItems = ({
  item,
  navigation,
}: {
  item: Article;
  navigation: any;
}) => {
  const handlerClick = (event_id: number) => {
    navigation.navigate("SingleEventPage", { event_id });
  };
  return (
    <TouchableOpacity onPress={() => handlerClick(item.event_id)}>
      <View style={homeStyles.horizontalCard}>
        <Text>{item.title}</Text>
        <Image
          source={{ uri: item.event_img_url }}
          style={homeStyles.smallImg}
        />
        <Text>{item.date}</Text>
        <View style={{ flexDirection: "row", gap: 5 }}>
          <Text>{item.location}</Text>
          <Text>Attending: {item.attending.length}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const renderVerticalItems = ({
  item,
  navigation,
}: {
  item: Article;
  navigation: any;
}) => {
  const handlerClick = (event_id: number) => {
    navigation.navigate("SingleEventPage", { event_id });
  };
  return (
    <View style={homeStyles.verticalCard}>
      <TouchableOpacity onPress={() => handlerClick(item.event_id)}>
        <View style={homeStyles.bigImgContainer}>
          <Image
            source={{ uri: item.event_img_url }}
            style={homeStyles.bigImg}
          />
        </View>
      </TouchableOpacity>
      <View style={{ gap: 4 }}>
        <TouchableOpacity onPress={() => handlerClick(item.event_id)}>
          <Text style={{ fontSize: 20, maxWidth: 200 }}>{item.title}</Text>
        </TouchableOpacity>
        <View style={{ ...styles.row_space_between, maxWidth: 185 }}>
          <Text>{item.date}</Text>
          <Text>{item.location}</Text>
        </View>
        <View style={styles.row_flex_start}>
          <View style={{ width: 180 }}>
            <Text style={{}}>{item.topics[0] + " " + item.topics[1]}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => handlerClick(item.event_id)}>
          <Text style={{ maxWidth: 200 }}>
            {item.description.slice(0, 60) + "..."}
          </Text>
          <Text>Attending: {item.attending.length}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// import { View, Text, Image, TouchableOpacity } from "react-native";
// import { styles } from "../styles/Styling";
// import { homeStyles } from "../screens/home/Home";

// export type Article = {
//   _id: string;
//   user_id: string;
//   event_title: string;
//   username?: string;
//   image: string;
//   location?: any;
//   date_time: string;
//   description: string;
//   topics: string[];
//   attending: Profile[];
//   size_limit: number;
// };

// export type Profile = {
//   userName: string;
// };

// const renderHorizontalItems = ({
//   item,
//   navigation,
// }: {
//   item: Article;
//   navigation: any;
// }) => {
//   const handlerClick = (event_id: string) => {
//     navigation.navigate("SingleEventPage", { event_id });
//   };
//   return (
//     <TouchableOpacity onPress={() => handlerClick(item._id)}>
//       <View style={homeStyles.horizontalCard}>
//         <Text>{item.event_title}</Text>
//         <Image source={{ uri: item.image }} style={homeStyles.smallImg} />
//         <Text>{item.date_time}</Text>
//         <View style={{ flexDirection: "row", gap: 5 }}>
//           <Text>{item.location}</Text>
//           <Text>Attending: {item.attending.length}</Text>
//         </View>
//       </View>
//     </TouchableOpacity>
//   );
// };

// export const renderVerticalItems = ({
//   item,
//   navigation,
// }: {
//   item: Article;
//   navigation: any;
// }) => {
//   const handlerClick = (event_id: string) => {
//     navigation.navigate("SingleEventPage", { event_id });
//   };
//   return (
//     <View style={homeStyles.verticalCard}>
//       <TouchableOpacity onPress={() => handlerClick(item._id)}>
//         <View style={homeStyles.bigImgContainer}>
//           <Image source={{ uri: item.image }} style={homeStyles.bigImg} />
//         </View>
//       </TouchableOpacity>
//       <View style={{ gap: 4 }}>
//         <TouchableOpacity onPress={() => handlerClick(item._id)}>
//           <Text style={{ fontSize: 20, maxWidth: 200 }}>
//             {item.event_title}
//           </Text>
//         </TouchableOpacity>
//         <View style={{ ...styles.row_space_between, maxWidth: 185 }}>
//           <Text>{item.date_time}</Text>
//           <Text>{item.location}</Text>
//         </View>
//         <View style={styles.row_flex_start}>
//           <View style={{ width: 180 }}>
//             <Text style={{}}>{item.topics[0] + " " + item.topics[1]}</Text>
//           </View>
//         </View>
//         <TouchableOpacity onPress={() => handlerClick(item._id)}>
//           <Text style={{ maxWidth: 200 }}>
//             {item.description.slice(0, 60) + "..."}
//           </Text>
//           <Text>Attending: {item.attending.length}</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

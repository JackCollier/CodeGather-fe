import { StyleSheet, Text, View, Dimensions, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SelectList } from "react-native-dropdown-select-list";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { FontAwesome } from "@expo/vector-icons";
import { getCityData } from "../../utils/CityApi";
import { useEffect, useState } from "react";

const eventRegions = [
  {
    name: "Piccadilly Railway",
    latitude: 53.483135,
    longitude: -2.200941,
    color: "orange",
  },
  {
    name: "Museum Football",
    latitude: 53.483959,
    longitude: -2.244644,
    color: "green",
  },
  {
    name: "Etihad Stadium",
    latitude: 53.47740289999999,
    longitude: -2.2309324999999944,
  },
];

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function Map() {
  const [selected, setSelected] = useState("");
  const [cityList, setCityList] = useState([]);
  const [longAndLat, setLongAndLat] = useState({
    latitude: 53.483959,
    longitude: -2.244644,
    latitudeDelta: 0.1922,
    longitudeDelta: 0.0421,
  });

  const findLongAndLat = (name: string) => {
    const LL = cityList.find((location) => location.value === name);
    setLongAndLat({
      latitude: LL.latitude,
      longitude: LL.longitude,
      latitudeDelta: 0.1922,
      longitudeDelta: 0.0421,
    });
  };

  console.log(longAndLat);

  useEffect(() => {
    getCityData().then((res) => {
      const formattedCities = res.results.map(
        (item: { name: string; location: any }, index: number) => {
          return {
            key: index,
            value: item.name,
            latitude: item.location.latitude,
            longitude: item.location.longitude,
          };
        }
      );
      setCityList(formattedCities);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Event</Text>
      <SelectList
        setSelected={(val: string) => {
          setSelected(val);
          findLongAndLat(val);
        }}
        data={cityList}
        save="value"
        boxStyles={{ borderColor: "#8cb3d9" }}
        dropdownStyles={{ borderColor: "#8cb3d9" }}
        maxHeight={110}
      />
      <View style={styles.map_container}>
        <MapView
          style={styles.map}
          initialRegion={longAndLat}
          scrollEnabled={true}
          region={longAndLat}
        >
          {/* {eventRegions.map(({ latitude, longitude, color = "red", name }) => {
            return (
              <Marker
                key={latitude}
                coordinate={{ latitude, longitude }}
                pinColor={color}
                title={name}
              >
                <FontAwesome name="map-pin" size={43} color={color} />
              </Marker>
            );
          })} */}
        </MapView>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
    marginBottom: 10,
  },
  map_container: {
    width: width / 1.1,
    height: height / 2,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "grey",
    overflow: "hidden",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

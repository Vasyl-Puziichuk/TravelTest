import {
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import reusable from "../Reusable/reusable.style";
import ReusableText from "../Reusable/ReusableText";
import { TEXT, COLORS, SIZES } from "../../constants/theme";
import { Feather } from "@expo/vector-icons";
import ReusableTile from "../Reusable/ReusableTile";
import fetchRecommendations from "../../hook/fetchRecommendations";

const Recommendations = () => {
  const navigation = useNavigation();
  const { recommendations, isLoading, error, refetch } =
    fetchRecommendations(1);
  console.log(recommendations);

  // const recommendations = [
  //   {
  //     _id: "64c631650298a05640539adc",
  //     country_id: "64c62bfc65af9f8c969a8d04",
  //     title: "Hagia Sophia Cathedral",
  //     location: "Zhytomyr",
  //     imageUrl:
  //       "https://ua.igotoworld.com/frontend/webcontent/websites/50/images/gallery/19249_370x246_Screenshot_2.jpg",
  //     rating: 4.7,
  //     review: "1204 Reviews",
  //   },
  //   {
  //     _id: "64d062a3de20d7c932f1f70a",
  //     country_id: "64c62bfc65af9f8c969a8d04",
  //     title: "Chatsky's head",
  //     location: "Zhytomyr",
  //     imageUrl:
  //       "https://ua.igotoworld.com/frontend/webcontent/websites/1/images/65994_800x600_zhitomir2.jpg",
  //     rating: 4.8,
  //     review: "1452 Reviews",
  //   },
  //   {
  //     _id: "64d09e3f364e1c37c8b4b13c",
  //     country_id: "64c62bfc65af9f8c969a8d04",
  //     title: "Spaso-Preobrazhensky Cathedral",
  //     location: "Zhytomyr",
  //     imageUrl:
  //       "https://ua.igotoworld.com/frontend/webcontent/websites/1/images/gallery/2692619_370x246_sobor_big_12.jpg",
  //     rating: 4.6,
  //     review: "2145 Reviews",
  //   },
  //   {
  //     _id: "64d09f90364e1c37c8b4b140",
  //     country_id: "64c62bfc65af9f8c969a8d04",
  //     title: "Flat house",
  //     location: "Zhytomyr",
  //     imageUrl:
  //       "https://ua.igotoworld.com/frontend/webcontent/websites/50/images/gallery/19330_370x246_Screenshot_15.jpg",
  //     rating: 4.8,
  //     review: "24455 Reviews",
  //   },
  // ];

  if (isLoading) {
    return <ActivityIndicator size={SIZES.xxLarge} color={COLORS.lightBlue} />;
  }

  return (
    <View style={styles.container}>
      <View
        style={[reusable.rowWithSpace("space-between"), { paddingBottom: 20 }]}
      >
        <ReusableText
          text={"Recommendations"}
          family={"medium"}
          size={TEXT.large}
          color={COLORS.black}
        />

        <TouchableOpacity onPress={() => navigation.navigate("Recommended")}>
          <Feather name="list" size={20} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={recommendations}
        horizontal
        keyExtractor={(item) => item._id}
        contentContainerStyle={{ columnGap: SIZES.medium }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <ReusableTile
            item={item}
            onPress={() => navigation.navigate("PlaceDetails", item._id)}
          />
        )}
      />
    </View>
  );
};

export default Recommendations;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
});

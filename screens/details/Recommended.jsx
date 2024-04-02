import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import AppBar from "../../components/Reusable/AppBar";
import { COLORS, SIZES } from "../../constants/theme";
import ReusableTile from "../../components/Reusable/ReusableTile";
import fetchRecommendations from "../../hook/fetchRecommendations";
import { ActivityIndicator } from "react-native";

const Recommended = ({ navigation }) => {
  const { recommendations, isLoading, error, refetch } = fetchRecommendations();

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

  return (
    <SafeAreaView style={{ marginHorizontal: 15 }}>
      <View style={{ height: 80 }}>
        <AppBar
          top={40}
          left={0}
          right={0}
          title={"Recommendation"}
          color={COLORS.white}
          icon={"search1"}
          color1={COLORS.white}
          onPress={() => navigation.goBack()}
          onPress1={() => navigation.navigate("Search")}
        />
      </View>

      {isLoading ? (
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.lightBlue} />
      ) : (
        <View style={{ paddingTop: 20 }}>
          <FlatList
            data={recommendations}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <View style={{ marginBottom: 15 }}>
                <ReusableTile
                  item={item}
                  onPress={() => navigation.navigate("PlaceDetails", item._id)}
                />
              </View>
            )}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Recommended;

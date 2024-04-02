import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ReusableTile from "../../components/Reusable/ReusableTile";
import { COLORS, SIZES } from "../../constants/theme";
import reusable from "../../components/Reusable/reusable.style";
import { HeightSpacer, ReusableBtn } from "../../components";

const TopTrips = ({ navigation }) => {
  const places = [
    {
      _id: "64c631650298a05640539adc",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Hagia Sophia Cathedral",
      location: "Zhytomyr",
      imageUrl:
        "https://ua.igotoworld.com/frontend/webcontent/websites/50/images/gallery/19249_370x246_Screenshot_2.jpg",
      rating: 4.7,
      review: "1204 Reviews",
    },
    {
      _id: "64d062a3de20d7c932f1f70a",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Chatsky's head",
      location: "Zhytomyr",
      imageUrl:
        "https://ua.igotoworld.com/frontend/webcontent/websites/1/images/65994_800x600_zhitomir2.jpg",
      rating: 4.8,
      review: "1452 Reviews",
    },
    {
      _id: "64d09e3f364e1c37c8b4b13c",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Spaso-Preobrazhensky Cathedral",
      location: "Zhytomyr",
      imageUrl:
        "https://ua.igotoworld.com/frontend/webcontent/websites/1/images/gallery/2692619_370x246_sobor_big_12.jpg",
      rating: 4.6,
      review: "2145 Reviews",
    },
    {
      _id: "64d09f90364e1c37c8b4b140",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Flat house",
      location: "Zhytomyr",
      imageUrl:
        "https://ua.igotoworld.com/frontend/webcontent/websites/50/images/gallery/19330_370x246_Screenshot_15.jpg",
      rating: 4.8,
      review: "24455 Reviews",
    },
  ];
  return (
    <View style={{ margin: 20 }}>
      <FlatList
        data={places}
        showVerticalScrollIndicator={false}
        keyExtractor={(item) => item._id}
        renderItem={({ item, index }) => (
          <View
            style={{
              backgroundColor: COLORS.lightWhite,
              marginBottom: index === places.length - 1 ? 80 : 10,
              borderRadius: 16,
            }}
          >
            <ReusableTile
              item={item}
              onPress={() => navigation.navigate("PlaceDetails", item._id)}
            />
          </View>
        )}
      />
    </View>
  );
};

export default TopTrips;

const styles = StyleSheet.create({});

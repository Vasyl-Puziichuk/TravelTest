import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import AppBar from "../../components/Reusable/AppBar";
import { COLORS, SIZES } from "../../constants/theme";
import ReusableTile from "../../components/Reusable/ReusableTile";
import { ScrollView } from "react-native";
import reusable from "../../components/Reusable/reusable.style";
import { VirtualizedList } from "react-native";
import Cities from "../../components/Tiles/City/Cities";
import fetchHotels from "../../hook/fetchHotels";

const HotelList = ({ navigation }) => {
  const { hotels, isLoading, error, refetch } = fetchHotels();

  // const hotels = [
  //   {
  //     _id: "64c674d23cfa5e847bcd5430",
  //     country_id: "64c62bfc65af9f8c969a8d04",
  //     title: "Seaside Resort",
  //     imageUrl:
  //       "https://d326fntlu7tb1e.cloudfront.net/uploads/f5cae706-9e63-4a7d-9fdd-f63f34b93f37-seaside.jpeg",
  //     rating: 4.9,
  //     review: "1204 Reviews",
  //     location: "Zhytomyr",
  //   },
  //   {
  //     _id: "64c675183cfa5e847bcd5433",
  //     country_id: "64c62bfc65af9f8c969a8d04",
  //     title: "Mountain Lodge",
  //     imageUrl:
  //       "https://d326fntlu7tb1e.cloudfront.net/uploads/5da4db00-e83f-449a-a97a-b7fa80a5bda6-aspen.jpeg",
  //     rating: 4.5,
  //     review: "12024 Reviews",
  //     location: "Zhytomyr",
  //   },
  //   {
  //     _id: "64d0b5a4d3cb4985a76ac1aa",
  //     country_id: "64c62bfc65af9f8c969a8d04",
  //     title: "Hotel Alpha",
  //     imageUrl:
  //       "https://d326fntlu7tb1e.cloudfront.net/uploads/28266df3-1578-4d0d-8015-c5480f64a73d-hotel-alpha.jpeg",
  //     rating: 4.7,
  //     review: "1204 Reviews",
  //     location: "Zhytomyr",
  //   },
  //   {
  //     _id: "64c675be3cfa5e847bcd5439",
  //     country_id: "64c62bfc65af9f8c969a8d04",
  //     title: "Family-Friendly Resort",
  //     imageUrl:
  //       "https://d326fntlu7tb1e.cloudfront.net/uploads/3e6222dc-6b79-4031-914b-60c220782b72-ff.jpeg",
  //     rating: 4.6,
  //     review: "12854 Reviews",
  //     location: "Zhytomyr",
  //   },
  //   {
  //     _id: "64c67442776ed29f19727fd7",
  //     country_id: "64c62bfc65af9f8c969a8d04",
  //     title: "Luxury Hotel 1",
  //     imageUrl:
  //       "https://d326fntlu7tb1e.cloudfront.net/uploads/4fdc30c2-08c5-4bca-b05c-d8b8a60b020f-luxury1.webp",
  //     rating: 4.7,
  //     review: "1204 Reviews",
  //     location: "Zhytomyr",
  //   },
  // ];
  return (
    <SafeAreaView style={{ marginHorizontal: 15 }}>
      <View style={{ height: 80 }}>
        <AppBar
          top={40}
          left={0}
          right={0}
          title={"Best Hotel"}
          color={COLORS.white}
          icon={"search1"}
          color1={COLORS.white}
          onPress={() => navigation.goBack()}
          onPress1={() => navigation.navigate("HotelSearch")}
        />
      </View>

      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={{ paddingTop: 20 }}>
          <FlatList
            data={hotels}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <View style={{ marginBottom: 15 }}>
                <ReusableTile
                  item={item}
                  onPress={() => navigation.navigate("HotelDetails", item._id)}
                />
              </View>
            )}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default HotelList;

const styles = StyleSheet.create({});

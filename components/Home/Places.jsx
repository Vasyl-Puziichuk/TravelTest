import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  View,
  VirtualizedList,
} from "react-native";
import { COLORS, SIZES } from "../../constants/theme";
import HeightSpacer from "../Reusable/HeightSpacer";
import Cities from "../Tiles/City/Cities";
import fetchCities from "../../hook/fetchCities";

const Places = () => {
  const { cities, isLoading, error, refetch } = fetchCities();
  // console.log(cities);
  // const cities = [
  //   {
  //     _id: "64c62bfc65af9f8c969a8d04",
  //     city: "Kyiv",
  //     description:
  //       "Kyiv, the capital city of Ukraine, is an enchanting destination that captivates visitors with its rich history, vibrant culture, and diverse attractions. Nestled along the banks of the majestic Dnipro River, Kyiv offers a compelling blend of ancient landmarks, modern amenities, and a lively atmosphere.",
  //     imageUrl:
  //       "https://kyivpastfuture.com.ua/wp-content/uploads/2020/04/kyev-s-v%D1%8Bsot%D1%8B-1.jpg",
  //     region: "North",
  //   },
  //   {
  //     _id: "64cf2c565d14628d0ac0a2b7",
  //     city: "Zhytomyr",
  //     description:
  //       "Zhytomyr, a gem nestled in the heart of Ukraine, beckons travelers with its captivating blend of history, culture, and natural beauty. Situated along the tranquil banks of the Teteriv River, this charming city offers a captivating journey through time, adorned with ancient landmarks, vibrant traditions, and a warm, welcoming atmosphere.",
  //     imageUrl:
  //       "https://aws-travel-guide.s3.eu-west-1.amazonaws.com/default_image_size/609d04a09ea45_%D0%96%D0%B8%D1%82%D0%BE%D0%BC%D0%B8%D1%80.jpg",
  //     region: "North",
  //   },
  //   {
  //     _id: "64cf2c935d14628d0ac0a2b9",
  //     city: "Lviv",
  //     description:
  //       "Lviv, a jewel of Western Ukraine, enchants visitors with its enchanting blend of history, culture, and architectural splendor. Nestled in the picturesque Carpathian foothills, this vibrant city is a treasure trove of ancient landmarks, cobblestone streets, and charming squares, offering a captivating glimpse into its rich heritage and cosmopolitan ambiance.",
  //     imageUrl:
  //       "https://planetofhotels.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/Lviv-1_0.jpg",
  //     region: "Western",
  //   },
  //   {
  //     _id: "64cf2d095d14628d0ac0a2bd",
  //     city: "Odesa",
  //     description:
  //       "Odesa, a coastal gem nestled along the Black Sea, beckons travelers with its unique blend of maritime charm, cultural richness, and architectural splendor. This bustling port city, often referred to as the 'Pearl of the Black Sea,' captivates visitors with its vibrant atmosphere, historic landmarks, and lively waterfront promenades.",
  //     imageUrl: "https://omr.gov.ua/images/news/midi/233591.jpg",
  //     region: "South",
  //   },
  //   {
  //     _id: "64cf2d4d5d14628d0ac0a2bf",
  //     city: "Vinnytsia",
  //     description:
  //       "Vinnytsia, a hidden gem nestled in the heart of Ukraine, beckons travelers with its unique blend of historical charm, cultural richness, and scenic beauty. Situated along the banks of the picturesque Southern Bug River, this vibrant city offers a captivating journey through time, adorned with ancient landmarks, verdant parks, and a warm, welcoming atmosphere.",
  //     imageUrl:
  //       "https://as1.ftcdn.net/v2/jpg/02/82/84/78/1000_F_282847832_oWoLj59J4GMCdwMu0vpsuYyQglduFHFu.jpg",
  //     region: "Center",
  //   },
  // ];

  if (isLoading) {
    return <ActivityIndicator size={SIZES.xxLarge} color={COLORS.lightBlue} />;
  }

  return (
    <View>
      <HeightSpacer height={20} />
      <VirtualizedList
        data={cities}
        horizontal
        keyExtractor={(item) => item._id}
        showsHorizontalScrollIndicator={false}
        getItemCount={(data) => data.length}
        getItem={(data, index) => data[index]}
        renderItem={({ item, index }) => (
          <View style={{ marginRight: SIZES.medium }}>
            <Cities item={item} />
          </View>
        )}
      />
    </View>
  );
};

export default Places;

const styles = StyleSheet.create({});

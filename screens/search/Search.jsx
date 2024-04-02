import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import reusable from "../../components/Reusable/reusable.style";
import styles from "./search.style";
import { TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import { COLORS } from "../../constants/theme";
import { HeightSpacer } from "../../components";
import { FlatList } from "react-native";
import ReusableTile from "../../components/Reusable/ReusableTile";
import { ScrollView } from "react-native";

const Search = ({ navigation }) => {
  const [searchKey, setSearchKey] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const search = [
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
    <SafeAreaView style={{ flex: 1 }}>
      <View style={reusable.container}>
        <View style={styles.searchContainer}>
          <View style={styles.searchWrapper}>
            <TextInput
              style={styles.input}
              value={searchKey}
              onChangeText={setSearchKey}
              placeholder="Search input"
            />
          </View>

          <TouchableOpacity style={styles.searchBtn}>
            <Feather name="search" size={24} color={COLORS.white} />
          </TouchableOpacity>
        </View>

        {search.length === 0 ? (
          <View>
            <HeightSpacer height={"20%"} />
            <Image
              source={require("../../assets/images/search.png")}
              style={styles.searchImage}
            />
          </View>
        ) : (
          <FlatList
            data={search}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <View style={styles.tile}>
                <ReusableTile
                  item={item}
                  onPress={() => navigation.navigate("PlaceDetails", item._id)}
                />
              </View>
            )}
          />
        )}
        <HeightSpacer height={20} />
      </View>
    </SafeAreaView>
  );
};

export default Search;

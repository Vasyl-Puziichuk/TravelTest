import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import AssetImage from "../../components/Reusable/AssetImage";
import { COLORS, SIZES } from "../../constants/theme";
import { AppBar, HeightSpacer, ReusableBtn } from "../../components";
import ReusableTile from "../../components/Reusable/ReusableTile";

const SelectRoom = ({ navigation }) => {
  const rooms = [
    {
      _id: "64c631650298a05640539adc",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Hagia Sophia Cathedral",
      location: "Zhytomyr",
      imageUrl:
        "https://ua.igotoworld.com/frontend/webcontent/websites/50/images/gallery/19249_370x246_Screenshot_2.jpg",
      rating: 4.7,
      review: "1204",
    },
    {
      _id: "64d062a3de20d7c932f1f70a",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Chatsky's head",
      location: "Zhytomyr",
      imageUrl:
        "https://ua.igotoworld.com/frontend/webcontent/websites/1/images/65994_800x600_zhitomir2.jpg",
      rating: 4.8,
      review: "1452",
    },
    {
      _id: "64d09e3f364e1c37c8b4b13c",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Spaso-Preobrazhensky Cathedral",
      location: "Zhytomyr",
      imageUrl:
        "https://ua.igotoworld.com/frontend/webcontent/websites/1/images/gallery/2692619_370x246_sobor_big_12.jpg",
      rating: 4.6,
      review: "2145",
    },
    {
      _id: "64d09f90364e1c37c8b4b140",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Flat house",
      location: "Zhytomyr",
      imageUrl:
        "https://ua.igotoworld.com/frontend/webcontent/websites/50/images/gallery/19330_370x246_Screenshot_15.jpg",
      rating: 4.8,
      review: "24455",
    },
    {
      _id: "64c631650298a05640539adc",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Hagia Sophia Cathedral",
      location: "Zhytomyr",
      imageUrl:
        "https://ua.igotoworld.com/frontend/webcontent/websites/50/images/gallery/19249_370x246_Screenshot_2.jpg",
      rating: 4.7,
      review: "1204",
    },
    {
      _id: "64d062a3de20d7c932f1f70a",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Chatsky's head",
      location: "Zhytomyr",
      imageUrl:
        "https://ua.igotoworld.com/frontend/webcontent/websites/1/images/65994_800x600_zhitomir2.jpg",
      rating: 4.8,
      review: "1452",
    },
    {
      _id: "64d09e3f364e1c37c8b4b13c",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Spaso-Preobrazhensky Cathedral",
      location: "Zhytomyr",
      imageUrl:
        "https://ua.igotoworld.com/frontend/webcontent/websites/1/images/gallery/2692619_370x246_sobor_big_12.jpg",
      rating: 4.6,
      review: "2145",
    },
    {
      _id: "64d09f90364e1c37c8b4b140",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Flat house",
      location: "Zhytomyr",
      imageUrl:
        "https://ua.igotoworld.com/frontend/webcontent/websites/50/images/gallery/19330_370x246_Screenshot_15.jpg",
      rating: 4.8,
      review: "24455",
    },
  ];

  return (
    <View style={{ backgroundColor: COLORS.gray, flex: 1 }}>
      <View style={{ height: 100 }}>
        <AppBar
          top={50}
          left={20}
          right={20}
          title={"Select Room"}
          color={COLORS.white}
          onPress={() => navigation.goBack()}
        />
      </View>

      <FlatList
        data={rooms}
        showVerticalScrollIndicator={false}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.tileColumn}>
            <View style={styles.tile}>
              <ReusableTile item={item} />
              {/* <HeightSpacer height={2} /> */}

              <View style={styles.btnStyle}>
                <ReusableBtn
                  onPress={() => navigation.navigate("SelectedRoom", { item })}
                  btnText={"Select Room"}
                  width={SIZES.width - 60}
                  backgroundColor={COLORS.green}
                  borderColor={COLORS.green}
                  borderWidth={0}
                  textColor={COLORS.white}
                />
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default SelectRoom;

const styles = StyleSheet.create({
  tileColumn: {
    marginHorizontal: 20,
    marginBottom: 10,
  },
  tile: {
    backgroundColor: COLORS.lightWhite,
    borderRadius: 12,
  },
  btnStyle: {
    margin: 10,
    alignItems: "center",
  },
});

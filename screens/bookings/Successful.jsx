import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  AssetImage,
  HeightSpacer,
  ReusableBtn,
  ReusableText,
} from "../../components";
import { COLORS, SIZES, TEXT } from "../../constants/theme";
import ReusableTile from "../../components/Reusable/ReusableTile";

const Successful = ({ navigation }) => {
  const hotel = {
    _id: "64c674d23cfa5e847bcd5430",
    country_id: "64c62bfc65af9f8c969a8d04",
    title: "Seaside Resort",
    imageUrl:
      "https://d326fntlu7tb1e.cloudfront.net/uploads/f5cae706-9e63-4a7d-9fdd-f63f34b93f37-seaside.jpeg",
    rating: 4.9,
    review: "1204 Reviews",
    location: "Zhytomyr",
  };

  return (
    <View>
      <View style={{ marginTop: "20%" }}>
        <AssetImage
          data={require("../../assets/images/checked.png")}
          width={"100%"}
          height={200}
          mode={"contain"}
        />

        <HeightSpacer height={40} />

        <View style={{ alignItems: "center" }}>
          <ReusableText
            text={"Booking Successful"}
            fontFamily={"medium"}
            size={TEXT.xLarge}
            color={COLORS.black}
          />
          <HeightSpacer height={20} />
          <ReusableText
            text={"You can find your booking details below"}
            fontFamily={"medium"}
            size={SIZES.medium}
            color={COLORS.gray}
          />
          <HeightSpacer height={20} />
        </View>
        <View style={{ margin: 20 }}>
          <ReusableText
            text={"Room Details"}
            fontFamily={"bold"}
            size={SIZES.medium}
            color={COLORS.dark}
          />
          <HeightSpacer height={20} />

          <ReusableTile item={hotel} />

          <HeightSpacer height={40} />

          <ReusableBtn
            onPress={() => navigation.navigate("Bottom")}
            btnText={"Done"}
            width={SIZES.width - 40}
            backgroundColor={COLORS.green}
            borderColor={COLORS.green}
            borderWidth={0}
            textColor={COLORS.white}
          />
        </View>
      </View>
    </View>
  );
};

export default Successful;

const styles = StyleSheet.create({});

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native";
import {
  DescriptionText,
  HeightSpacer,
  NetworkImage,
  PopularList,
  ReusableBtn,
  ReusableText,
} from "../../components";
import AppBar from "../../components/Reusable/AppBar";
import { COLORS, SIZES, TEXT } from "../../constants/theme";
import reusable from "../../components/Reusable/reusable.style";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import fetchCity from "../../hook/fetchCity";

const CitiesDetails = ({ navigation }) => {
  const route = useRoute();
  const id = route.params;
  console.log(id);
  const { city, isLoading, error, refetch } = fetchCity(id);

  // const city = {
  //   _id: "64c62bfc65af9f8c969a8d04",
  //   city: "Zhytomyr",
  //   description:
  //     "Zhytomyr, a gem nestled in the heart of Ukraine, beckons travelers with its captivating blend of history, culture, and natural beauty. Situated along the tranquil banks of the Teteriv River, this charming city offers a captivating journey through time, adorned with ancient landmarks, vibrant traditions, and a warm, welcoming atmosphere.",
  //   imageUrl:
  //     "https://kyivpastfuture.com.ua/wp-content/uploads/2020/04/kyev-s-v%D1%8Bsot%D1%8B-1.jpg",
  //   popular: [
  //     {
  //       _id: "64c631650298a05640539adc",
  //       title: "Hagia Sophia Cathedral",
  //       imageUrl:
  //         "https://ua.igotoworld.com/frontend/webcontent/websites/50/images/gallery/19249_370x246_Screenshot_2.jpg",
  //       rating: 4.7,
  //       review: "1204 Reviews",
  //       location: "Zhytomyr",
  //     },
  //     {
  //       _id: "64d062a3de20d7c932f1f70a",
  //       title: "Chatsky's head",
  //       imageUrl:
  //         "https://ua.igotoworld.com/frontend/webcontent/websites/1/images/65994_800x600_zhitomir2.jpg",
  //       rating: 4.8,
  //       review: "1452 Reviews",
  //       location: "Zhytomyr",
  //     },
  //   ],
  //   region: "North",
  // };
  return (
    <ScrollView>
      <View>
        <NetworkImage
          source={city.imageUrl}
          width={"100%"}
          height={350}
          radius={30}
        />

        <AppBar
          top={40}
          left={20}
          right={20}
          title={city.city}
          color={COLORS.white}
          icon={"search1"}
          color1={COLORS.white}
          onPress={() => navigation.goBack()}
          onPress1={() => {}}
        />
      </View>
      <View style={styles.description}>
        <ReusableText
          text={city.region}
          fontFamily={"medium"}
          size={TEXT.xLarge}
          color={COLORS.black}
        />

        <DescriptionText text={city.description} />
        <View style={{ alignContent: "center" }}>
          <View style={reusable.rowWithSpace("space-between")}>
            <ReusableText
              text={"Popular Destinations"}
              fontFamily={"medium"}
              size={TEXT.large}
              color={COLORS.black}
            />

            <TouchableOpacity
              onPress={() => navigation.navigate("Recommended")}
            >
              <Feather name="list" size={20} />
            </TouchableOpacity>
          </View>

          <HeightSpacer height={20} />

          <PopularList data={city.popular} />
          <HeightSpacer height={15} />
          <ReusableBtn
            onPress={() => navigation.navigate("HotelSearch")}
            btnText={"Find Best Hotel"}
            width={SIZES.width - 40}
            backgroundColor={COLORS.green}
            borderColor={COLORS.green}
            borderWidth={0}
            textColor={COLORS.white}
          />
          <HeightSpacer height={30} />
        </View>
      </View>
    </ScrollView>
  );
};

export default CitiesDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3f4f5",
    marginHorizontal: 20,
  },
  description: {
    marginHorizontal: 20,
    paddingTop: 20,
  },
});

import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import {
  NetworkImage,
  AppBar,
  HeightSpacer,
  ReusableText,
  DescriptionText,
  ReusableBtn,
  PopularList,
} from "../../components/index";
import { COLORS, TEXT, SIZES } from "../../constants/theme";
import reusable from "../../components/Reusable/reusable.style";
import { Feather } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import fetchPlace from "../../hook/fetchPlace";

const PlaceDetails = ({ navigation }) => {
  const route = useRoute();
  const id = route.params;
  const { place, isLoading, error, refetch } = fetchPlace(id);

  // const place = {
  //   _id: "64d062a3de20d7c932f1f70a",
  //   country_id: "64c62bfc65af9f8c969a8d04",
  //   title: "Chatsky's head",
  //   description:
  //     "The `Chatsky's Head` rock is one of the most popular places among tourists and townspeople and a true symbol of Zhytomyr. This rock can be safely called a real miracle of nature, because its top looks like a human head. In 1967, the rock received the status of a geological monument of nature. It is located on the banks of the Teteriv River and is only one of the elements of high granite rocks that stand on both sides, forming a small canyon. You can admire and admire the local scenery for a very long time. Therefore, it is not surprising that this place is so popular, especially among newlyweds during the wedding season.",
  //   contact_id: "64c5d95adc7efae2a45ec376",
  //   imageUrl:
  //     "https://ua.igotoworld.com/frontend/webcontent/websites/1/images/65994_800x600_zhitomir2.jpg",
  //   rating: 4.8,
  //   review: "1452 Reviews",
  //   latitude: 40.689247,
  //   longitude: -74.044502,
  //   location: "2nd Crooked Lane, Zhytomyr",
  //   popular: [
  //     {
  //       _id: "64c675be3cfa5e847bcd5439",
  //       title: "Family-Friendly Resort",
  //       imageUrl:
  //         "https://d326fntlu7tb1e.cloudfront.net/uploads/3e6222dc-6b79-4031-914b-60c220782b72-ff.jpeg",
  //       rating: 4.6,
  //       review: "12854 Reviews",
  //       location: "Town",
  //     },
  //     {
  //       _id: "64c675793cfa5e847bcd5436",
  //       title: "Urban Chic Boutique Hotel",
  //       imageUrl:
  //         "https://d326fntlu7tb1e.cloudfront.net/uploads/5da4db00-e83f-449a-a97a-b7fa80a5bda6-aspen.jpeg",
  //       rating: 4.8,
  //       review: "2312 Reviews",
  //       location: "Town",
  //     },
  //   ],
  // };
  return (
    <ScrollView>
      <View>
        <NetworkImage
          source={place.imageUrl}
          width={"100%"}
          height={350}
          radius={30}
        />

        <AppBar
          top={40}
          left={20}
          right={20}
          title={place.title}
          color={COLORS.white}
          icon={"search1"}
          color1={COLORS.white}
          onPress={() => navigation.goBack()}
          onPress1={() => {}}
        />
      </View>

      <View style={styles.description}>
        <HeightSpacer height={15} />
        <ReusableText
          text={place.location}
          family={"medium"}
          size={TEXT.large}
          color={COLORS.black}
        />

        <DescriptionText text={place.description} />

        <View style={{ alignContent: "center" }}>
          <HeightSpacer height={20} />

          <View style={reusable.rowWithSpace("space-between")}>
            <ReusableText
              text={"Popular Hotels"}
              family={"medium"}
              size={TEXT.large}
              color={COLORS.black}
            />

            <TouchableOpacity onPress={() => navigation.navigate("HotelList")}>
              <Feather name="list" size={20} />
            </TouchableOpacity>
          </View>

          <HeightSpacer height={20} />

          <PopularList data={place.popular} />

          <ReusableBtn
            onPress={() => navigation.navigate("HotelSearch")}
            btnText={"Find Best Hotels"}
            width={SIZES.width - 40}
            backgroundColor={COLORS.green}
            borderColor={COLORS.green}
            borderWidth={0}
            textColor={COLORS.white}
          />
          <HeightSpacer height={50} />
        </View>
      </View>
    </ScrollView>
  );
};

export default PlaceDetails;

const styles = StyleSheet.create({
  description: {
    marginHorizontal: 20,
  },
});

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import reusable from "../../components/Reusable/reusable.style";
import { HeightSpacer, Recommendation, ReusableText } from "../../components";
import Places from "../../components/Home/Places";
import { COLORS, SIZES, TEXT } from "../../constants/theme";
import { AntDesign } from "@expo/vector-icons";
import styles from "./home.style";
import { ScrollView } from "react-native";
import BestHotels from "../../components/Home/BestHotels";

const Home = ({ navigation }) => {
  return (
    <ScrollView style={reusable.theme}>
      <SafeAreaView style={reusable.container}>
        <View>
          <View style={reusable.rowWithSpace("space-between")}>
            <ReusableText
              text={"Hello, User!"}
              fontFamily={"medium"}
              size={TEXT.large}
              color={COLORS.black}
            />

            <TouchableOpacity
              style={styles.box}
              onPress={() => navigation.navigate("Search")}
            >
              <AntDesign name="search1" size={26} />
            </TouchableOpacity>
          </View>
          <HeightSpacer height={SIZES.xLarge} />
          <ReusableText
            text={"Places"}
            fontFamily={"medium"}
            size={TEXT.large}
            color={COLORS.black}
          />

          <Places />

          <HeightSpacer height={15} />

          <Recommendation />

          <HeightSpacer height={30} />

          <BestHotels />

          <HeightSpacer height={120} />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Home;

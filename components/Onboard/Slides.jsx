import { View, Image } from "react-native";
import React from "react";
import styles from "./slides.style";
import { COLORS, SIZES } from "../../constants/theme";
import { useNavigation } from "@react-navigation/native";
import {
  HeightSpacer,
  ReusableBtn,
  ReusableText,
} from "../../components/index";

const Slides = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View>
      <Image source={item.image} style={styles.image} />

      <View style={styles.stack}>
        <ReusableText
          text={item.title}
          fontFamily={"bold"}
          size={SIZES.xxLarge}
          color={COLORS.white}
        />

        <HeightSpacer height={SIZES.height / 25} />

        <ReusableBtn
          onPress={() => navigation.navigate("Bottom")}
          btnText={"Let`s start"}
          width={(SIZES.width - 50) / 2.2}
          backgroundColor={COLORS.red}
          borderColor={COLORS.lightRed}
          borderWidth={0}
          textColor={COLORS.white}
        />
      </View>
    </View>
  );
};

export default Slides;

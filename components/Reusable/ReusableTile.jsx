import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import reusable from "./reusable.style";
import { COLORS, SHADOWS, SIZES, TEXT } from "../../constants/theme";
import {
  HeightSpacer,
  NetworkImage,
  Raiting,
  ReusableText,
  WidthSpacer,
} from "../../components/index";

const ReusableTile = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={reusable.rowWithSpace("flex-start")}>
        <NetworkImage
          source={item.imageUrl}
          width={80}
          height={80}
          radius={12}
        />
        <WidthSpacer width={15} />
        <View>
          <View style={styles.box}>
            <ReusableText
              text={item.title}
              fontFamily={"medium"}
              size={SIZES.medium}
              color={COLORS.black}
            />
          </View>
          <HeightSpacer height={8} />

          <ReusableText
            text={item.location}
            fontFamily={"medium"}
            size={14}
            color={COLORS.gray}
          />

          <HeightSpacer height={8} />

          <View style={reusable.rowWithSpace("flex-start")}>
            <Raiting raiting={item.rating} />
            <WidthSpacer width={5} />
            <ReusableText
              text={`(${item.review})`}
              fontFamily={"medium"}
              size={14}
              color={COLORS.gray}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ReusableTile;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: COLORS.white,
    borderRadius: 12,
  },
  box: {
    width: SIZES.width / 2.2,
  },
});

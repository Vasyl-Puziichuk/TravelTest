import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { TEXT, COLORS } from "../../../constants/theme";

import { useNavigation } from "@react-navigation/native";
import {
  HeightSpacer,
  ReusableText,
  NetworkImage,
} from "../../../components/index";

const Cities = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("CitiesDetails", item._id)}
    >
      <View>
        <NetworkImage
          source={item.imageUrl}
          width={85}
          height={85}
          radius={12}
        />

        <HeightSpacer height={5} />

        <ReusableText
          text={item.city}
          fontFamily={"medium"}
          size={TEXT.medium}
          color={COLORS.black}
          align={"center"}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Cities;

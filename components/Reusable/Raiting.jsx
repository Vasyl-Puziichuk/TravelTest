import { StyleSheet, Text, View } from "react-native";
import React from "react";
import reusable from "./reusable.style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import WidthSpacer from "./WidthSpacer";
import ReusableText from "./ReusableText";
import { COLORS } from "../../constants/theme";

const Raiting = ({ raiting }) => {
  return (
    <View style={reusable.rowWithSpace("flex-start")}>
      <MaterialCommunityIcons name="star" size={20} color={"#FD8945"} />

      <WidthSpacer width={5} />
      <ReusableText
        text={raiting}
        fontFamily={"medium"}
        size={15}
        color={"#FD8945"}
      />
    </View>
  );
};

export default Raiting;

const styles = StyleSheet.create({});

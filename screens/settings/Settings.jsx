import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants/theme";
import {
  AppBar,
  HeightSpacer,
  ReusableText,
  SettingTile,
} from "../../components";
import { ScrollView } from "react-native";

const Settings = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: COLORS.lightWhite, flex: 1 }}>
      <View>
        <View style={{ height: 100 }}>
          <AppBar
            top={50}
            left={20}
            right={20}
            color={COLORS.white}
            onPress={() => navigation.goBack()}
          />
        </View>
        <View style={{ marginHorizontal: 20 }}>
          <ReusableText
            text={"Account Settings"}
            family={"regular"}
            size={SIZES.xLarge}
            color={COLORS.black}
          />
          <HeightSpacer height={10} />
          <SettingTile title={"Language"} />
          <HeightSpacer height={5} />
          <SettingTile title={"Country"} title1={"United Kingdom"} />
          <HeightSpacer height={5} />
          <SettingTile title={"Currency"} title1={"GBP"} />
          <HeightSpacer height={40} />

          <ReusableText
            text={"Support"}
            family={"regular"}
            size={SIZES.xLarge}
            color={COLORS.black}
          />
          <HeightSpacer height={10} />
          <SettingTile title={"Get Help"} title1={""} />
          <HeightSpacer height={5} />
          <SettingTile title={"Give a feedback"} title1={""} />
          <HeightSpacer height={40} />

          <ReusableText
            text={"Legal"}
            family={"regular"}
            size={SIZES.xLarge}
            color={COLORS.black}
          />
          <HeightSpacer height={10} />
          <SettingTile title={"Terms of Service"} title1={""} />
          <HeightSpacer height={5} />
          <SettingTile title={"Privacy Policy"} title1={""} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Settings;

const styles = StyleSheet.create({});

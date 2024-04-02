import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import {
  AppBar,
  AssetImage,
  Counter,
  HeightSpacer,
  NetworkImage,
  Raiting,
  ReusableBtn,
  ReusableText,
  WidthSpacer,
} from "../../components";
import { COLORS, SIZES } from "../../constants/theme";
import reusable from "../../components/Reusable/reusable.style";

const SelectedRoom = ({ navigation }) => {
  const router = useRoute();
  const { item } = router.params;
  console.log(item);
  return (
    <View>
      <View style={{ height: 100 }}>
        <AppBar
          top={50}
          left={20}
          right={20}
          title={item.title}
          color={COLORS.white}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ backgroundColor: COLORS.lightWhite, borderRadius: 16 }}>
          <NetworkImage
            source={item.imageUrl}
            width={"100"}
            height={200}
            radius={16}
          />

          <HeightSpacer height={20} />

          <View style={{ marginHorizontal: 10 }}>
            <View style={reusable.rowWithSpace("space-between")}>
              <View style={{ width: 200 }}>
                <ReusableText
                  text={item.title}
                  fontFamily={"medium"}
                  size={SIZES.medium}
                  color={COLORS.black}
                />
              </View>
              <View style={reusable.rowWithSpace("flex-start")}>
                <Raiting raiting={item.rating} />

                <WidthSpacer width={10} />

                <ReusableText
                  text={`(${item.review})`}
                  fontFamily={"regular"}
                  size={SIZES.medium}
                  color={COLORS.gray}
                />
              </View>
            </View>
            <HeightSpacer height={10} />

            <ReusableText
              text={item.location}
              fontFamily={"medium"}
              size={SIZES.medium}
              color={COLORS.gray}
            />

            <View
              style={{
                borderWidth: 0.5,
                borderColor: COLORS.lightGrey,
                marginVertical: 15,
              }}
            ></View>
            <ReusableText
              text={"Room Requirements"}
              fontFamily={"regular"}
              size={SIZES.medium}
              color={COLORS.black}
            />

            <HeightSpacer height={20} />
            <View style={reusable.rowWithSpace("space-between")}>
              <ReusableText
                text={"Price per night"}
                fontFamily={"regular"}
                size={SIZES.medium}
                color={COLORS.black}
              />

              <ReusableText
                text={"$ 400"}
                fontFamily={"regular"}
                size={SIZES.medium}
                color={COLORS.black}
              />
            </View>
            <HeightSpacer height={15} />
            <View style={reusable.rowWithSpace("space-between")}>
              <ReusableText
                text={"Payment Method"}
                fontFamily={"regular"}
                size={SIZES.medium}
                color={COLORS.black}
              />
              <View style={reusable.rowWithSpace("flex-start")}>
                <View
                  style={{
                    // backgroundColor: COLORS.gray,
                    paddingRight: SIZES.width / 40,
                  }}
                >
                  {/* <WidthSpacer width={SIZES.width / 20} /> */}
                  <AssetImage
                    mode={"contain"}
                    width={20}
                    height={20}
                    data={require("../../assets/images/card.png")}
                  />
                </View>
                <ReusableText
                  text={"Visa Card"}
                  fontFamily={"regular"}
                  size={SIZES.medium}
                  color={COLORS.black}
                />
              </View>
            </View>
            <HeightSpacer height={15} />
            <View style={reusable.rowWithSpace("space-between")}>
              <ReusableText
                text={"4 Guest"}
                fontFamily={"regular"}
                size={SIZES.medium}
                color={COLORS.black}
              />

              <Counter />
            </View>
            <HeightSpacer height={20} />
            <ReusableBtn
              onPress={() => navigation.navigate("Successful", { item })}
              btnText={"Book Now"}
              width={SIZES.width - 60}
              backgroundColor={COLORS.green}
              borderColor={COLORS.green}
              borderWidth={0}
              textColor={COLORS.white}
            />
            <HeightSpacer height={20} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SelectedRoom;

const styles = StyleSheet.create({});

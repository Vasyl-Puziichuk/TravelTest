import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { TopBookings, TopInfo, TopTrips } from "../screens";
import { COLORS, SIZES } from "../constants/theme";
import {
  AppBar,
  HeightSpacer,
  NetworkImage,
  ReusableText,
} from "../components";
import styles from "./topTab.style";

const Tab = createMaterialTopTabNavigator();

const TopTab = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: COLORS.lightWhite }}>
        <View>
          {/* <HeightSpacer height={"35%"} /> */}
          <NetworkImage
            source={
              "https://images.pexels.com/photos/705778/pexels-photo-705778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            width={"100%"}
            height={300}
            radius={0}
          />

          <AppBar
            top={40}
            left={20}
            right={20}
            color={COLORS.white}
            icon={"logout"}
            color1={COLORS.white}
            onPress={() => navigation.goBack()}
            onPress1={() => {}}
          />

          <View style={styles.profile}>
            <Image
              source={{
                uri: "https://images.pexels.com/photos/5601086/pexels-photo-5601086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              }}
              style={styles.image}
            />

            <HeightSpacer height={5} />

            <View style={styles.name}>
              <View style={{ alignItems: "center" }}>
                <ReusableText
                  text={"Ulfreack Ragnar"}
                  fontFamily={"medium"}
                  size={SIZES.medium}
                  color={COLORS.black}
                />
              </View>
            </View>

            <HeightSpacer height={5} />
            {/* <View style={styles.name}> */}
            <View style={{ alignItems: "center" }}>
              <ReusableText
                text={"test1test2@gmail.com"}
                fontFamily={"medium"}
                size={SIZES.medium}
                color={COLORS.white}
              />
              {/* </View> */}
            </View>
          </View>
        </View>
      </View>
      <Tab.Navigator>
        <Tab.Screen name="Bookings" component={TopBookings} />
        <Tab.Screen name="Trips" component={TopTrips} />
        <Tab.Screen name="Info" component={TopInfo} />
      </Tab.Navigator>
    </View>
  );
};

export default TopTab;

import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ReusableText = ({ text, fontFamily, size, color, align }) => {
  return (
    <Text style={styles.textStyle(fontFamily, size, color, align)}>{text}</Text>
  );
};

export default ReusableText;

const styles = StyleSheet.create({
  textStyle: (fontFamily, size, color, align) => ({
    fontFamily: fontFamily,
    fontSize: size,
    color: color,
    textAlign: align,
  }),
});

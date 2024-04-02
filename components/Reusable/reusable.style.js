import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

const reusable = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 10,
  },
  theme: {
    backgroundColor: COLORS.lightGrey,
  },
  rowWithSpace: (justifyContent) => ({
    flexDirection: "row",
    alignItems: "center",
    justifyContent: justifyContent,
  }),
});

export default reusable;

import { StyleSheet } from "react-native";

import { colors } from "../../constants";
import { Dimensions } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
    width: Dimensions.get('window').width
  },
  title: {
    fontSize: 20,
    // fontFamily: "Karma-Bold",
    color: colors.white,
  },
});

import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SIZES = {
  width: windowWidth,
  height: windowHeight,
  "8xl": 24,
  "7xl": 23,
  "6xl": 22,
  "5xl": 21,
  "4xl": 20,
  "3xl": 19,
  "2xl": 18,
  xl: 17,
  lg: 16,
  md: 15,
  base: 14,
  sm: 13,
  xs: 12,
  roundness: 0,
};

export default SIZES;

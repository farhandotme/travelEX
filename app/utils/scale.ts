import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const scale = (size: number) => (width / 375) * size;

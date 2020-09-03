import React from "react";
import { View, StyleSheet } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import styles from "./style";
const images = [
  "https://source.unsplash.com/1024x768/?nature",
  "https://source.unsplash.com/1024x768/?water",
  "https://source.unsplash.com/1024x768/?girl",
  "https://source.unsplash.com/1024x768/?tree", // Network image
  require("./images/Super_banner.jpg"), // Local image
];

export default function BannerSlider() {
  return (
    <View style={styles.BannerBox}>
      <SliderBox images={images} style={styles.BannerImg} />
    </View>
  );
}

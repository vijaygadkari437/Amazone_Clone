import React from "react";
import { View, StyleSheet } from "react-native";

import HeaderComponent from "../../components/HeaderComponent";
import BannerSlider from "../../components/BannerSilder";
import CategorySlider from "../../components/CategorySlider";
const HomeScreen = (props) => {
  return (
    <View>
      <HeaderComponent />
      <CategorySlider />
      <BannerSlider />
    </View>
  );
};

export default HomeScreen;

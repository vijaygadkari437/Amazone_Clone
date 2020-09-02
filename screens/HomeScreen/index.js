import React from "react";
import { View, StyleSheet } from "react-native";

import RootComponent from "../components/RootComponent";
import BodyBold from "../components/UI/BodyBold";

const HomeScreen = (props) => {
  return (
    <RootComponent>
      <View style={styles.screen}>
        <BodyBold>Home Screen</BodyBold>
      </View>
    </RootComponent>
  );
};

export default HomeScreen;

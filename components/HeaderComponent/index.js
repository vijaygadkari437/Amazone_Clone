import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight, Button } from "react-native";
import styles from "./style";
export default function HeaderComponent() {
  return (
    <View>
      <View style={styles.HeadBox}>
        <View style={styles.LeftBox}>
          <Image style={styles.MenuImg} source={require("./images/menu.png")} />
          <Image style={styles.LogoImg} source={require("./images/Logo.png")} />
        </View>
        <View style={styles.RightBox}>
          <Image style={styles.RightImg} source={require("./images/cart.png")} />
        </View>
      </View>
      <View style={styles.SubHead}>
        <View style={styles.SearchBar}>
          <View style={styles.SearchBox}>
            <TouchableHighlight style={styles.IconBox} onPress={() => console.log("hii")}>
              <Image style={styles.SearchImg} source={require("./images/search.png")} />
            </TouchableHighlight>
            <View style={styles.IconBox}>
              <Text style={styles.SearchText}>Search</Text>
            </View>
          </View>
          <TouchableHighlight style={styles.CameraBox} onPress={() => console.log("hii")}>
            <Image style={styles.CameraImg} source={require("./images/camera.jpg")} />
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}

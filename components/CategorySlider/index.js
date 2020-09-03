import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight, Button } from "react-native";
import styles from "./style";
export default function CategorySlider() {
  return (
    <View style={styles.Category}>
      <View style={styles.CategoryItem}>
        <View style={styles.CategoryFig}>
          <Image style={styles.CategoryImg} source={require("./images/babycare.png")} />
        </View>
        <Text style={styles.CategoryText}>Babycare</Text>
      </View>
      <View style={styles.CategoryItem}>
        <View style={[styles.CategoryFig, styles.BackColorGreen]}>
          <Image style={styles.CategoryImg} source={require("./images/beauty.png")} />
        </View>
        <Text style={styles.CategoryText}>Beauty</Text>
      </View>
      <View style={styles.CategoryItem}>
        <View style={[styles.CategoryFig, styles.BackColorPink]}>
          <Image style={styles.CategoryImg} source={require("./images/bread.png")} />
        </View>
        <Text style={styles.CategoryText}>Bread</Text>
      </View>
      <View style={styles.CategoryItem}>
        <View style={[styles.CategoryFig, styles.BackColorYellow]}>
          <Image style={styles.CategoryImg} source={require("./images/cheese.png")} />
        </View>
        <Text style={styles.CategoryText}>Cheese</Text>
      </View>
      <View style={styles.CategoryItem}>
        <View style={[styles.CategoryFig, styles.BackColorPink]}>
          <Image style={styles.CategoryImg} source={require("./images/drinks.png")} />
        </View>
        <Text style={styles.CategoryText}>Drinks</Text>
      </View>
    </View>
  );
}

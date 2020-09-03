import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight, Button } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import styles from "./style";
export default function App() {
  return (
    <View style={styles.PaddingBottom}>
      <Text style={styles.BlueLink}>Create an account</Text>
    </View>
  );
}

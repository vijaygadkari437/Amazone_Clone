import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { AppLoading } from "expo";
import { NativeRouter, Switch, Route } from "react-router-native";
import HomeScreen from "./screens/HomeScreen";
// const loadFonts = () => {
//   return Font.loadAsync({
//     "NunitoSans-Bold": require("./assets/fonts/NunitoSans-Bold.ttf"),
//     "NunitoSans-Regular": require("./assets/fonts/NunitoSans-Regular.ttf"),
//   });
// };
export default function App() {
  // const [fontLoaded, setFontloaded] = useState(false);
  // if (!fontLoaded) {
  //   return <AppLoading startAsync={loadFonts} onFinish={() => setFontloaded(true)} onError={(err) => console.log(err)} />;
  // }

  return (
    <SafeAreaView>
      <NativeRouter>
        <View>
          <Switch>
            <Route path="/" component={HomeScreen} />
          </Switch>
        </View>
      </NativeRouter>
    </SafeAreaView>
  );
}

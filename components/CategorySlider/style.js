import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Category: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#fff",
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: "#d3dcdb",
    borderBottomWidth: 5,
    borderTopWidth: 5,
  },
  CategoryItem: {
    alignItems: "center",
  },
  CategoryFig: {
    backgroundColor: "#c9eaef",
    borderRadius: 60 / 2,
    padding: 10,
    height: 60,
    width: 60,
  },
  CategoryImg: {
    height: 40,
    width: 40,
    zIndex: 2,
  },
  BackColorGreen: {
    backgroundColor: "#edf7d5",
  },
  BackColorPink: {
    backgroundColor: "#ffe1df",
  },
  BackColorYellow: {
    backgroundColor: "#f9edb3",
  },
  CategoryText: {
    textAlign: "center",
    zIndex: 2,
    backgroundColor: "#fff",
    fontSize: 12,
  },
});
export default styles;

import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  HeadBox: {
    backgroundColor: "#232f3f",
    height: 60,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  LeftBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  MenuImg: {
    marginLeft: 10,
    height: 15,
    width: 20,
    resizeMode: "contain",
  },
  LogoImg: {
    marginLeft: 15,
    height: 25,
    width: 100,
    resizeMode: "contain",
  },
  IconBox: {
    color: "#fff",
  },
  RightBox: {
    marginRight: 15,
    height: 30,
    width: 30,
  },
  RightImg: {
    height: 20,
    width: 30,
    resizeMode: "contain",
  },
  SubHead: {
    backgroundColor: "#232f3f",
    height: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#757575",
  },
  SearchBar: {
    backgroundColor: "#fff",
    borderRadius: 3,
    marginRight: 10,
    marginLeft: 10,
    height: 35,
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  SearchImg: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    zIndex: 2,
    marginLeft: 10,
  },
  IconBox: {
    display: "flex",
    justifyContent: "space-around",
  },
  SearchBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  SearchText: {
    color: "#868686",
    fontWeight: 500,
    fontSize: 17,
    marginLeft: 10,
    marginBottom: 3,
  },
  CameraBox: {
    display: "flex",
    alignItems: "center",
    marginRight: 5,
    borderLeftColor: "#868686",
    borderLeftWidth: 1,
    height: 25,
  },
  CameraItem: {
    display: "flex",
    justifyContent: "center",
  },
  CameraImg: {
    width: 25,
    height: 25,
    resizeMode: "contain",
    zIndex: 2,
    marginLeft: 5,
  },
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
    borderRadius: "50%",
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
  BannerBox: {
    borderBottomWidth: 10,
    borderBottomColor: "#d3dcdb",
  },
  BannerImg: {
    height: 145,
    resizeMode: "contain",
  },
  MarginBottom: {
    padding: 10,
  },
  SignInText: {
    fontWeight: 400,
    fontSize: 18,
    color: "#171717",
  },
  SignIn: {
    borderRadius: 3,
    padding: 12,
    color: "#171717",
    backgroundColor: "#faa419",
    textAlign: "center",
  },
  BlueLink: {
    color: "#39658c",
    fontWeight: 500,
  },
  PaddingBottom: {
    paddingLeft: 10,
    paddingBottom: 10,
  },
  Payment: {
    marginBottom: -10,
    overflow: "hidden",
  },
});
export default styles;

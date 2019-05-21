import React, { Component } from "react";
import {
  Text,
  View,
  Dimensions,
  Platform,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export class MenuDrawer extends Component {
  navLink(nav, text) {
    return (
      <TouchableOpacity
        style={{ height: 50 }}
        onPress={() => this.props.navigation.navigate(nav)}
      >
        <Text>{text}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topLinks}>
          <View style={styles.profile}>
            <View style={styles.imgView}>
              <Image style={styles.img} source={require("../assets/dp.jpg")} />
            </View>
            <View style={styles.profileText}>
              <Text style={styles.name}>Jaffar Raza</Text>
            </View>
          </View>
        </View>
        <View style={styles.bottomLinks}>
          {this.navLink("Home", "Home")}
          {this.navLink("Settings", "Settings")}
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>MenuDrawer</Text>
        </View>
      </View>
    );
  }
}

export default MenuDrawer;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  topLinks: {
    height: 160,
    backgroundColor: "lightgray"
  },
  bottomLinks: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 10,
    paddingBottom: 450
  },
  profileText: {
    flex: 3,
    flexDirection: "column",
    justifyContent: "center"
  },
  name: {
    fontSize: 20,
    paddingBottom: 5,
    color: "white",
    textAlign: "left"
  },
  link: {
    flex: 1,
    fontSize: 20,
    padding: 6,
    paddingLeft: 14,
    margin: 5,
    textAlign: "left"
  },
  profile: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 25,
    borderBottomWidth: 1,
    borderBottomColor: "#777777"
  },
  imgView: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20
  },
  img: {
    height: 70,
    width: 70,
    borderRadius: 50
  },
  footer: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "lightgray",
    justifyContent: "center"
  },
  footerText: {
    fontSize: 20
  }
});

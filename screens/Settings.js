import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import MenuButton from "../components/MenuButton";

export class Settings extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MenuButton navigation={this.props.navigation} />

        <Text> This is Settings Page </Text>
      </View>
    );
  }
}

export default Settings;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

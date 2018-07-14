import React from "react";
import { ScrollView, Text } from "react-native";

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: "Dad & Mom Msgs"
  };

  render() {
    return (
      <ScrollView>
        <Text>Baby Setting</Text>
      </ScrollView>
    );
  }
}

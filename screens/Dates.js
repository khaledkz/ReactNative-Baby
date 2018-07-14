import React from "react";
import {
  ScrollView,
   Text,
 
} from 'react-native';
export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: "Dates"
  };

  render() {
    return (
      <ScrollView>
        <Text>Important Dates</Text>
      </ScrollView>
    );
  }
}

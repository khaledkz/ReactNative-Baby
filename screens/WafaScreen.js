import React from 'react';
import { ScrollView, StyleSheet,Text } from 'react-native';
 
export default class WafaScreen extends React.Component {
  static navigationOptions = {
    title: 'father',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>His mother Is wafaa</Text>
       </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

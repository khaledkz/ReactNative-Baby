import React from 'react';
import { ScrollView, StyleSheet,Text,Button } from 'react-native';
 
export default class KhaledScreen extends React.Component {
  static navigationOptions = {
    title: 'father',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>His father Is khaled</Text>
        <Button
            title="Mam"
            color="red"
            onPress={() => this.props.navigation.navigate("WafaScreen")}
          />
       </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
   },
});

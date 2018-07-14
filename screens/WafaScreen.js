import React from 'react';
import { ScrollView, StyleSheet,Text,Button } from 'react-native';
 
export default class WafaScreen extends React.Component {
  static navigationOptions = {
    title: 'Mam',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>His mother Is wafaa</Text>
        <Button
          title="Go to wafa... again"
          onPress={() => this.props.navigation.push('wafa')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home',{w:'sas'})}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
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

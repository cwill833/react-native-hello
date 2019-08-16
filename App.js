import React, {Component}from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Does this also change the app text?</Text>
        <Text>Liza come check out my app!!!!!</Text>
        <Text>Still work?</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from 'react';
import {StyleSheet,Text,View} from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welocome',
  };

  render() {
    return (
      <Text>Deepak Chaudhary</Text>
    );
      
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  });

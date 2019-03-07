import React from 'react';
import {View,Text,Button} from 'react-native';
import * as firebase from 'firebase';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  onSignoutPress = () => {
    firebase.auth().signOut();
  }

  render() {
    return (
      <View>
      <Text>Setting Screen</Text>
      <Text>Coming Soon</Text>
      < Button title='Signout' onPress={this.onSignoutPress}/>

      </View>
    );
  }
}


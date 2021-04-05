import 'react-native-gesture-handler';
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

import EmailPasswordLogin from './App/Auth/EmailPasswordLogin';
// import { database } from './App/Database/firebase.database';
import BottomNavigator from './App/components/BootomNavigator';
import { NavigationContainer } from '@react-navigation/native';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = { loggedIn: false }
  }

  onLogPress = {
    In: () => {
      EmailPasswordLogin.logUserIn("sahilrathee.55@gmail.com", "incorr348");
      this.setState({ loggedIn: this.checkLoggedIn() })
    },
    Out: () => {
      EmailPasswordLogin.logUserOut();
      this.setState({ loggedIn: this.checkLoggedIn() })
    }
  }
  checkLoggedIn = () => EmailPasswordLogin.checkUserLoggedIn()

  render() {
    return (
      <NavigationContainer>
        <BottomNavigator />
      </NavigationContainer>
    )
  }
}



export default App;
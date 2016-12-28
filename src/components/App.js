import React, { Component } from 'react';
import { View, Text } from 'react-native';
// Components
import Header from './Header';

class App extends Component {
  render() {
    return (
      <View>
        <Text>This is View</Text>
        <Header />
      </View>
    );
  }
}

export default App;

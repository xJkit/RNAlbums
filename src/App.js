import React, { Component } from 'react';
import { View } from 'react-native';
// Components
import Header from './components/Header';
import CardSection from './components/CardSection';

class App extends Component {
  render() {
    return (
      <View>
        <Header />
        <CardSection />
      </View>
    );
  }
}

export default App;

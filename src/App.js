import React, { Component } from 'react';
import { View } from 'react-native';
// Components
import Header from './components/Header';
import CardSection from './components/CardSection';

class App extends Component {
  render() {
    return (
      <View style={styles}>
        <Header />
        <CardSection />
      </View>
    );
  }
}

const styles = {
  display: 'flex',
  flexDirection: 'column',
};

export default App;

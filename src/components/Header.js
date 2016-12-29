import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Header extends Component {
  render() {
    return (
      <View style={styles.viewStyles}>
        <Text style={styles.textStyles}>Albums</Text>
      </View>
    );
  }
}

const styles = {
  textStyles: {
    fontSize: 36,
    color: 'red',
    margin: 20,
  },
  viewStyles: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  }
};

export default Header;

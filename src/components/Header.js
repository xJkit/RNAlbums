import React, { Component } from 'react';
import { Text } from 'react-native';

class Header extends Component {
  render() {
    return (
      <Text style={styles.textStyles}>This is Header</Text>
    );
  }
}

const styles = {
  textStyles: {
    fontSize: 72,
    color: 'red',
    paddingTop: 25,
    marginLeft: 25,
  },
};

export default Header;

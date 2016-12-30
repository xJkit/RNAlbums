import React, { Component, PropTypes } from 'react';
import { Text, View } from 'react-native';

class Header extends Component {

  static propTypes = {
    albumTitle: PropTypes.string.isRequired,
  };


  render() {
    const { albumTitle } = this.props;
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>{albumTitle}</Text>
      </View>
    );
  }
}

const styles = {
  textStyle: {
    fontSize: 36,
    color: 'red',
    margin: 20,
  },
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8E8E8',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    elevation: 2,
    position: 'relative',
  }
};

export default Header;

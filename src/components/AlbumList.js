import React, { Component } from 'react';
import { View, Text } from 'react-native';

// const APIAlbums = 'http://rallycoding.herokuapp.com/api/music_albums';

class AlbumList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      albums: [],
    };
  }

  componentWillMount() {
    fetch('http://localhost:3000/albums')
      .then(response => response.json())
      .then(json => {
        this.setState({
          albums: json,
        });
      })
      .catch(err => {
        console.error('Fetch 失敗！');
        console.error(err);
      });
  }

  render() {
    return (
      <View>
        <Text>Album List!</Text>
      </View>
    );
  }
}

export default AlbumList;

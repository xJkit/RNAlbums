import React, { Component } from 'react';
import { View } from 'react-native';
// import fetch from 'isomorphic-fetch';
// Components
import Header from './components/Header';
import AlbumList from './components/AlbumList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      albums: [],
    };
  }

  render() {
    return (
      <View>
        <Header albumTitle="Beatles" />
        <AlbumList />
      </View>
    );
  }
}

// const APIAlbums = 'http://rallycoding.herokuapp.com/api/music_albums';

export default App;

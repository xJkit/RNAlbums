import React, { Component } from 'react';
import { View } from 'react-native';
import AlbumDetail from './AlbumDetail';
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
    const { albums } = this.state;
    return (
      <View>
        {albums.map(album => (
          <AlbumDetail
            key={album.title}
            {...album}
          />
        ))}
      </View>
    );
  }
}

export default AlbumList;

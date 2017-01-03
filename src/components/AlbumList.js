import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      albums: [],
    };
  }

  componentWillMount() {
    fetch('http://localhost:3001/albums')
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
      <ScrollView>
        {albums.map(album => (
          <AlbumDetail
            key={album.title}
            {...album}
          />
        ))}
      </ScrollView>
    );
  }
}

export default AlbumList;

import React, { PropTypes } from 'react';
import { Text, View, Image } from 'react-native';

const AlbumDetail = props => (
  <View>
    <Text>Artist: {props.artist}</Text>
    <Text>Title: {props.title}</Text>
  </View>
);

AlbumDetail.propTypes = {
  artist: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail_image: PropTypes.string.isRequired,
};

export default AlbumDetail;

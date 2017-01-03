import React, { PropTypes } from 'react';
import { Text } from 'react-native';
import Card from './Card';

const AlbumDetail = props => (
  <Card>
    <Text>Artist: {props.artist}</Text>
    <Text>Title: {props.title}</Text>
  </Card>
);

AlbumDetail.propTypes = {
  artist: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail_image: PropTypes.string.isRequired,
};

export default AlbumDetail;

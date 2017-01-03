import React, { PropTypes } from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = props => (
  <Card>
    <CardSection>
      <View>
        <Image
          style={styles.thumbnailStyle}
          source={{ uri: props.thumbnail_image }}
        />
      </View>
      <View style={styles.headerContentStyle}>
        <Text>Artist: {props.artist}</Text>
        <Text>Title: {props.title}</Text>
      </View>
    </CardSection>
  </Card>
);

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  thumbnailStyle: {
    width: 50,
    height: 50,
  },
};


AlbumDetail.propTypes = {
  artist: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail_image: PropTypes.string.isRequired,
};

export default AlbumDetail;

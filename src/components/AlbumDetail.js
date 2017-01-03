import React, { PropTypes } from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = props => (
  <Card>

    <CardSection>
      <View style={styles.thumbnailContainerStyle}>
        <Image
          style={styles.thumbnailStyle}
          source={{ uri: props.thumbnail_image }}
        />
      </View>
      <View style={styles.headerContentStyle}>
        <Text style={styles.headerTextStyle}>{props.title}</Text>
        <Text>{props.artist}</Text>
      </View>
    </CardSection>

    <CardSection style={styles.imageContainerStyle}>
      <Image
        source={{ uri: props.image }}
        style={styles.imageStyle}
      />
    </CardSection>

    <CardSection>
      <Button />
    </CardSection>

  </Card>
);

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 18,
  },
  thumbnailStyle: {
    width: 50,
    height: 50,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
  },
  imageContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
};


AlbumDetail.propTypes = {
  artist: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail_image: PropTypes.string.isRequired,
};

export default AlbumDetail;

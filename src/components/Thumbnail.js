import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground
} from 'react-native';
import Title from './Title';

const Thumbnail = ({ url, titleText, accentColor, style }) => {
  const imageStyle = {
    backgroundColor: `${accentColor}77`
  };
  const TitleComponent = <Title style={styles.title}>{titleText}</Title>;

  return (
    <View style={[styles.container, { borderColor: accentColor }, style]}>
      <ImageBackground
        style={[styles.image, imageStyle]}
        source={{
          uri: url
        }}
      >
        {TitleComponent}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 100,
    justifyContent: 'flex-end'
  },
  title: {
    padding: 5
  },
  container: {
    borderBottomWidth: 3,
    borderStyle: 'solid'
  }
});

export default Thumbnail;

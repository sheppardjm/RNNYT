import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NewsItem from './src/components/NewsItem';

export default function App() {
  return (
    <View style={styles.container}>
      <NewsItem imageUrl={"https://static.packt-cdn.com/products/9781785885785/cover/smaller"} title={"Mastering React Native"} author={"Eric Marotte"} location={null} date={"Today"} description={"How to master RN."} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

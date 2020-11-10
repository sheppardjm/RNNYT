import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Modal,
  TouchableOpacity
} from 'react-native';
import WebView from 'react-native-webview';
import NewsItem from './NewsItem';
import SmallText from './SmallText';
import * as globalStyles from '../styles/global';

export default class NewsFeed extends Component {
  constructor(props){
    super(props)
    this.state = {
      modalVisible: false
    };
    
    this.onModalOpen = this.onModalOpen.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
  }

  renderModal() {
    return (
      <Modal 
        animationType="slide"
        visible={this.state.modalVisible}
        onRequestClose={this.onModalClose}
      >
        <View style={styles.modalContent}>
          <TouchableOpacity
            onPress={this.onModalClose}
            style={styles.closeButton}
          >
            <SmallText>Close</SmallText>
          </TouchableOpacity>
          <WebView 
            scalesPageToFit
            source={{ uri: this.state.modalUrl }}
          />
        </View>
      </Modal>
    );
  }

  onModalOpen(url) {
    this.setState({
      modalVisible: true,
      modalUrl: url
    });
  }

  onModalClose() {
    this.setState({
      modalVisible: false
    });
  }

  render() {
    return (
      <View style={globalStyles.COMMON_STYLES.pageContainer}>
        <FlatList
          enableEmptySections
          data={this.props.news}
          renderItem={({item, index}) => <NewsItem 
            onPress={() => this.onModalOpen(item.url)}
            key={item.title}
            style={styles.newsItem}
            imageUrl={item.imageUrl}
            title={item.title}
            description={item.description}
            date={"Today"}
            locatioin={item.location}
            author={item.author}
          />
          }
          style={this.props.listStyles}
        />
        {this.renderModal()}
      </View>
    );
  }
}

NewsFeed.defaultProps = { 
  news: [ 
    { 
      title: 'React Native', 
      imageUrl: 'https://facebook.github.io/react/img/logo_og.png', 
      description: 'Build Native Mobile Apps using JavaScript and React', 
      date: new Date(), 
      author: 'Facebook', 
      location: 'Menlo Park, California', 
      url: 'https://facebook.github.io/react-native' 
    }, 
    { 
      title: 'Packt Publishing', 
      imageUrl: 'https://www.packtpub.com/sites/default/files/packt_logo.png', 
      description: 'Stay Relevant', 
      date: new Date(), 
      author: 'Packt Publishing', 
      location: 'Birmingham, UK', 
      url: 'https://www.packtpub.com/' 
    } 
  ] 
};

const styles = StyleSheet.create({
  newsItem: {
    marginBottom: 20
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 20,
    backgroundColor: globalStyles.BG_COLOR
  },
  closeButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row'
  }
});

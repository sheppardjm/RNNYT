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
const RCTNetworking = require('react-native/Libraries/Network/RCTNetworking');

export default class NewsFeed extends Component {
  constructor(props){
    super(props)
    this.state = {
      modalVisible: false
    };
    
    this.onModalOpen = this.onModalOpen.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  componentWillMount() {
    this.refresh();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      //dataSource: this.state.dataSource.cloneWithRows(nextProps.news)
    });
  }

  refresh() {
    if (this.props.loadNews) {
      this.props.loadNews();
    } else if (this.props.loadWorldNews) {
      this.props.loadWorldNews();
    } else if (this.props.loadOpinion) {
      this.props.loadOpinion();
    }
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
    RCTNetworking.clearCookies(() => {});

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
            index={index}
            key={item.title}
            style={styles.newsItem}
            imageUrl={item.imageUrl}
            title={item.title}
            description={item.description}
            date={item.date}
            location={item.location}
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

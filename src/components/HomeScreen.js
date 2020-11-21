import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  Container,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
  Badge
} from 'native-base';
import NewsFeedContainer from '../containers/NewsFeedContainer';
import SearchContainer from '../containers/SearchContainer';
import * as globalStyles from '../styles/global';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'news'
    };
  }

  render() {
    return (
      <Container>
        <NewsFeedContainer />
      <Footer>
        <FooterTab>
          <Button style={styles.button} badge vertical active={this.state.active === 'news'}
            onPress={ ()=> this.setState({ active: 'news' })}
          >
            <Icon name="md-grid" />
            <Text>News</Text>
          </Button>
          <Button style={styles.button} badge vertical active={this.state.active === 'search'}
            onPress={ ()=> this.setState({ active: 'search' })}
          >
            <Icon name="md-search" />
            <Text>Search</Text>
          </Button>
          <Button style={styles.button} badge vertical active={this.state.active === 'bookmarks'}
            onPress={ ()=> this.setState({ active: 'bookmarks' })}
          >
            <Icon name="md-bookmark" />
            <Text>Bookmarks</Text>
          </Button>
        </FooterTab>
      </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignSelf: "stretch",
    justifyContent: "center",
    paddingTop: 18
  }
});

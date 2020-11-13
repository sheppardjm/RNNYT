import React, { Component } from 'react';
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
          <Button badge vertical active={this.state.active === 'news'}
            onPress={ ()=> this.setState({ active: 'news' })}
          >
            <Icon name="md-print" />
            <Text>News</Text>
          </Button>
          <Button badge vertical active={this.state.active === 'search'}
            onPress={ ()=> this.setState({ active: 'search' })}
          >
            <Icon name="md-search" />
            <Text>Search</Text>
          </Button>
          <Button badge vertical active={this.state.active === 'bookmarks'}
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

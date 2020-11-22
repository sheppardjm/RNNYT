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
      active: 'us'
    };
  }

  render() {
    return (
      <Container>
        <NewsFeedContainer />
      <Footer>
        <FooterTab>
          <Button style={styles.button} badge vertical active={this.state.active === 'us'}
            onPress={ ()=> this.setState({ active: 'us' })}
          >
            <Icon name="ios-star" />
            <Text>U.S.</Text>
          </Button>
          <Button style={styles.button} badge vertical active={this.state.active === 'world'}
            onPress={ ()=> this.setState({ active: 'world' })}
          >
            <Icon name="md-globe" />
            <Text>World</Text>
          </Button>
          <Button style={styles.button} badge vertical active={this.state.active === 'opinion'}
            onPress={ ()=> this.setState({ active: 'opinion' })}
          >
            <Icon name="ios-quote" />
            <Text>Opinion</Text>
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

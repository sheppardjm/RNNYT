import React from 'react';
import { Provider } from 'react-redux';
import createStore from './createStore';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NewsFeedContainer from './containers/NewsFeedContainer';
import WorldNewsContainer from './containers/WorldNewsContainer';
import OpinionContainer from './containers/OpinionContainer';

const store = createStore();

const Tab = createBottomTabNavigator();

export default () => (
  <Provider store={store}>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="US" component={NewsFeedContainer} />
        <Tab.Screen name="World" component={WorldNewsContainer} />
        <Tab.Screen name="Opinion" component={OpinionContainer} />
      </Tab.Navigator>
    </NavigationContainer>
  </Provider>
);

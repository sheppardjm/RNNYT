import React from 'react';
import { Provider } from 'react-redux';
import createStore from './createStore';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import NewsFeedContainer from './containers/NewsFeedContainer';
import WorldNewsContainer from './containers/WorldNewsContainer';
import OpinionContainer from './containers/OpinionContainer';
import * as globalStyles from './styles/global';

const store = createStore();

const Tab = createBottomTabNavigator();

export default () => (
  <Provider store={store}>
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            
            if (route.name === 'US') {
              iconName = "ios-star";
            } else if (route.name === 'World') {
              iconName = "md-globe";
            } else if (route.name === 'Opinion') {
              iconName = "ios-quote";
            }

            color = focused ? globalStyles.ACTIVE : globalStyles.MUTED_COLOR;

            return <Ionicons name={iconName} color={color} size={24} />;
          }
        })}
      >
        <Tab.Screen name="US" component={NewsFeedContainer} />
        <Tab.Screen name="World" component={WorldNewsContainer} />
        <Tab.Screen name="Opinion" component={OpinionContainer} />
      </Tab.Navigator>
    </NavigationContainer>
  </Provider>
);

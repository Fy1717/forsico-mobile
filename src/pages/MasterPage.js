import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import Search from '../modals/Search';
import Workspaces from '../modals/Workspaces';
import Notifications from '../modals/Notifications';
import Profile from '../modals/Profile';
import Header from '../components/Header';

const MasterPage = () => {
    const Tab = createBottomTabNavigator();
   
    return (
      <View style={{ flex: 1 }}>
        <Header />
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Search" component={Search} />
          <Tab.Screen name="Workspaces" component={Workspaces} />
          <Tab.Screen name="Notifications" component={Notifications} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </View>
    );
}

export default MasterPage;

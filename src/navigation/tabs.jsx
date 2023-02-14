import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ElementsNavigator from './elements';
import { THEME } from '../constants/theme';
import HomeNavigator from './home';
import CookNavigator from './cook';
import AppsNavigator from './apps';

const BottomTab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="ShopTab"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: 'Bitter-Regular',
          fontSize: 12,
        },
        tabBarActiveTintColor: THEME.colors.primary,
        tabBarInactiveTintColor: THEME.colors.gray,
      }}>
      
      <BottomTab.Screen
        name="HomeTab"
        component={HomeNavigator}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={22}
              color={THEME.colors.primary}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="ElementsTab"
        component={ElementsNavigator}
        options={{
          title: 'Elements',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'file-tray' : 'file-tray-outline'}
              size={22}
              color={THEME.colors.primary}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="AppsTab"
        component={AppsNavigator}
        options={{
          title: 'Apps',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'construct' : 'construct-outline'}
              size={22}
              color={THEME.colors.primary}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="CookTab"
        component={CookNavigator}
        options={{
          title: 'New Cook',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'add-circle' : 'add-circle-outline'}
              size={22}
              color={THEME.colors.primary}
            />
          ),
        }}
      />
      
      
    </BottomTab.Navigator>
  );
};

export default Tabs;

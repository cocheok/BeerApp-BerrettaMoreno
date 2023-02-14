import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { THEME } from '../constants/theme';
import Apps from '../screens/apps';

const Stack = createNativeStackNavigator();

const AppsNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Apps"
      screenOptions={{
        headerStyle: {
          backgroundColor: THEME.colors.white,
        },
        headerTintColor: THEME.colors.primary,
        navigationBarColor: THEME.colors.secondary,
        headerTitleStyle: {
          fontFamily: 'Bitter-Bold',
          fontSize: 18,
          color: THEME.colors.title,
        }
      }}>
      <Stack.Screen name="Apps" component={Apps} />
    </Stack.Navigator>
  );
};

export default AppsNavigator;

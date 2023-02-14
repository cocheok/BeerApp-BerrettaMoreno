import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { THEME } from '../constants/theme';
import { Elements } from '../screens';

const Stack = createNativeStackNavigator();

const ElementsNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Elements"
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
        },
      }}>
      <Stack.Screen name="Elements" component={Elements} />
    </Stack.Navigator>
  );
};

export default ElementsNavigator;

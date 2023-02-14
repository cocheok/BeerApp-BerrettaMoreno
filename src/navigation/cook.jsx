import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { THEME } from '../constants/theme';
import NewCook from '../screens/cook';

const Stack = createNativeStackNavigator();

const CookNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Cook"
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
      <Stack.Screen name="Cook" component={NewCook} />
    </Stack.Navigator>
  );
};

export default CookNavigator;

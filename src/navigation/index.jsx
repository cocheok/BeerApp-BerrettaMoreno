import { NavigationContainer } from '@react-navigation/native';
import TabsNavigator from './tabs';
import { View } from 'react-native'
import Header from '../components/header';

const AppNavigator = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header title={`My App`}/>
      <NavigationContainer>
        <TabsNavigator />
      </NavigationContainer>
    </View>
  );
};

export default AppNavigator;

import React, { useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import Header from './components/header';
import HomeMenu from './screens/home';
import Elements from './screens/elements';
import { HOME, ELEMENTS, colors } from './constants';
import AppNavigator from './navigation';
import { useFonts } from 'expo-font';


const App = () => {
  const [loaded] = useFonts({
    'Bitter-Regular': require('../assets/fonts/Bitter-Regular.ttf'),
    'Bitter-Bold': require('../assets/fonts/Bitter-Bold.ttf'),
    'Bitter-Light': require('../assets/fonts/Bitter-Light.ttf'),
    'Bitter-Medium': require('../assets/fonts/Bitter-Medium.ttf'),
  });
  if (!loaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }
  return <AppNavigator />;
}


export default App;
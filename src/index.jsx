import React, { useState } from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import Header from './components/header';
import HomeMenu from './screens/home';
import Ingredients from './screens/ingredients';
import { HOME, INGREDIENTS } from './constants';

const App = () => {
  const [selection, setSelection] = useState(HOME);
  const Content = () => {
     switch(selection) {
      case INGREDIENTS:
        return <Ingredients setSelection={setSelection}/>;
      default:
        return <HomeMenu setSelection={setSelection}/>;
     }};

  return (
    <View style={styles.container}>
      <Header title="Beer App" />
      <Content />
    </View>
  );
}


export default App;
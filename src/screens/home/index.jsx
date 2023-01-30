import React from 'react'
import { View, Button  } from 'react-native'
import { INGREDIENTS } from '../../constants';
import { styles } from '../../styles';
const HomeMenu = ({setSelection}) => {
  return (
    <View style={styles.container}>
        <Button
          onPress={ () => setSelection(INGREDIENTS)}
          title="Ingredients"
          color="#841584"
          accessibilityLabel="Go to ingredients page"
        />
    </View>
    
  )
}

export default HomeMenu;
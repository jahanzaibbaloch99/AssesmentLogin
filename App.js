import React from 'react';
import MainNavigation from './src/Navigations/MainNavigation';
import {View} from 'react-native';
import ThemeContextProvider from './src/Context/ThemeContext';
const App = () => {
  return (
    <View style={{flex: 1}}>
      <ThemeContextProvider>
        <MainNavigation />
      </ThemeContextProvider>
    </View>
  );
};

export default App;

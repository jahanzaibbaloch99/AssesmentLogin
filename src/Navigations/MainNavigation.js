import React, {useContext} from 'react';
import LoginStep1 from '../Screens/LoginStep1';
import {useColorScheme} from 'react-native';
import {DarkTheme, DefaultTheme} from '../Theme/index';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ThemeContext} from '../Context/ThemeContext';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <NavigationContainer theme={theme ? DarkTheme : DefaultTheme}>
      <Stack.Navigator initialRouteName="LoginStep1">
        <Stack.Screen
          name="LoginStep1"
          component={LoginStep1}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;

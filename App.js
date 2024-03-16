import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import qrlogin from './qrlogin'; // Your home screen component
import login from './login'; // The page you want to navigate to

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="qrlogin" component={qrlogin} options={{ headerShown: false }} />
        <Stack.Screen name="login" component={login}  options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
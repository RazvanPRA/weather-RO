import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/Screens/HomeScreen';
import SevenDayForcast from './src/Screens/SevenDayForcast';
import CustomBtn from './src/Components/CustomBtn';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="SevenDayForcast"
          options={{headerLeft: () => <CustomBtn />}}
          component={SevenDayForcast}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

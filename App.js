import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/Screens/HomeScreen';
import SevenDaysForcast from './src/Screens/SevenDaysForcast';
import CustomBtn from './src/Components/CustomBtn';
import {COLORS} from './src/Const/COLORS';
import Notice from './src/Screens/Notice';

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
          name="SevenDaysForcast"
          options={{
            headerLeft: () => <CustomBtn />,
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
              color: COLORS.textDark,
            },
            headerStyle: {
              backgroundColor: COLORS.primary,
              elevation: 10,
            },
          }}
          component={SevenDaysForcast}
        />
        <Stack.Screen
          name="Notice"
          options={{
            headerLeft: () => <CustomBtn />,
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
              color: COLORS.textDark,
            },
            headerStyle: {
              backgroundColor: COLORS.primary,
              elevation: 10,
            },
          }}
          component={Notice}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

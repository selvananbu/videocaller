
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import MessageScreen from './messagescreen';
import Message from './message';


const Stack = createStackNavigator();
export const MessageRoot= () => {
    return(
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
          <Stack.Screen name="MessageScreen" component={MessageScreen} type="reset"/>
          <Stack.Screen name="Message" component={Message} />
          
      </Stack.Navigator>
    )
}
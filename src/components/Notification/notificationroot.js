
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import NotificationScreen from "./NotificationScreen"
import Notification from "./Notification"


const Stack = createStackNavigator();
export const NotificationRoot= () => {
    return(
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
          <Stack.Screen name="NotificationScreen" component={NotificationScreen} type="reset"/>
          <Stack.Screen name="Notification" component={Notification} />
          
      </Stack.Navigator>
    )
}
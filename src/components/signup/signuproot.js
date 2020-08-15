
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import UserDetails from './userdetails';
import ConfirmMobile from './confirmmobile';
import UserData from './userdata';

const Stack = createStackNavigator();

export const SigUpScreen = () => {
    return(
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
          <Stack.Screen name="UserDetails" component={UserDetails} type="reset"/>
          <Stack.Screen name="ConfirmMobile" component={ConfirmMobile} />
          <Stack.Screen name="UserData" component={UserData} />
      </Stack.Navigator>
    )
}



import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import UserDetails from './userdetails';
import ConfirmMobile from './confirmmobile';
import UserData from './userdata';
import UploadPic from './uploadpic';
import UserInterests from './userinterests';

const Stack = createStackNavigator();

export const SigUpScreen = () => {
    return(
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
          <Stack.Screen name="UserDetails" component={UserDetails} type="reset"/>
          <Stack.Screen name="ConfirmMobile" component={ConfirmMobile} />
          <Stack.Screen name="UserData" component={UserData} />
          <Stack.Screen name="UploadPic" component={UploadPic} />
          <Stack.Screen name="UserInterests" component={UserInterests} />
          
      </Stack.Navigator>
    )
}


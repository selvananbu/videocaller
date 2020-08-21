
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import SettingsList from './settingslist';
import SettingsManageAccount from './settingsmanageaccount';

const Stack = createStackNavigator();

export const Settings = () => {
    return(
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
          <Stack.Screen name="SettingsList" component={SettingsList} type="reset"/>
          <Stack.Screen name="SettingsManageAccount" component={SettingsManageAccount} type="reset"/>
          
      </Stack.Navigator>
    )
}


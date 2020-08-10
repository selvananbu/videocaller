import * as React from 'react';
import { View, Text, TouchableOpacity,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { SafeAreaView } from 'react-native-safe-area-context';
import Chat from './src/screens/Chat';
import New from './src/screens/New/New';
import Calendar from './src/screens/Calendar';
import Notification from './src/screens/Notification';
import Search from './src/screens/Search';
import Test from './src/screens/Test';


import { width, height, totalSize } from 'react-native-dimension';
import NewGroup from './src/screens/Group/NewGroup';
import EditGroup from './src/screens/Group/EditGroup';
import CreateVideo from './src/Video/CreateVideo';
import NewVideo from './src/Video/NewVideo';


function getTabIcon(label,isFocused) {
  return(
    label === "Search"
    ?
    <Image source={require("./src/image/search.png")} style={{width:width(8),height:height(8)}} resizeMode="contain"/>
    :
    label === "Calendar"
    ?
    <Image source={require("./src/image/calendar.png")} style={{width:width(8),height:height(8)}} resizeMode="contain"/>
    :
    label === "CreateNewScreen"
    ?
    <Image source={require("./src/image/plus.png")} style={{width:width(8),height:height(8)}} resizeMode="contain"/>
    :
    label === "Notification"
    ?
    <Image source={require("./src/image/notification.png")} style={{width:width(8),height:height(8)}} resizeMode="contain"/>
    :
    <Image source={require("./src/image/chat.png")} style={{width:width(8),height:height(8)}} resizeMode="contain"/>
    
  )
}
function MyTabBar({ state, descriptors, navigation }) {
  return (
    <SafeAreaView style={{ flexDirection: 'row',height:height(8),backgroundColor:"whitesmoke"}}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex:1,alignItems:"center",justifyContent:"center"}}
            key={index}
          >
          
           {getTabIcon(label,isFocused)}
          </TouchableOpacity>
        );
      })}
    </SafeAreaView>
  );
}

const Stack = createStackNavigator();

function ChatStack(){
  return(
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Test" component={Test} />
    </Stack.Navigator>
  )
}

function CreateNewScreen(){
  return(
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
        <Stack.Screen name="New" component={New} type="reset"/>
        <Stack.Screen name="NewGroup" component={NewGroup} />
        <Stack.Screen name="EditGroup" component={EditGroup} />
        <Stack.Screen name="CreateVideo" component={CreateVideo} />
        <Stack.Screen name="NewVideo" component={NewVideo} />
    </Stack.Navigator>
  )
}
 
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={props => <MyTabBar {...props} />} tabBarOptions={style={height:height(5)}} >
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Calendar" component={Calendar} />
        <Tab.Screen name="CreateNewScreen" component={CreateNewScreen} />
        <Tab.Screen name="Notification" component={Notification} />
        <Tab.Screen name="Chat" component={ChatStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

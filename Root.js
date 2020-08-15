import * as React from 'react';
import { View, Text, TouchableOpacity,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { SafeAreaView } from 'react-native-safe-area-context';
import Chat from './src/components/Chat';
import New from './src/components/New/New';
import Calendar from './src/components/Calendar';
import Notification from './src/components/Notification';
import SearchHome from './src/components/Search/SearchHome';
import Test from './src/components/Test';


import { width, height, totalSize } from 'react-native-dimension';
import NewGroup from './src/components/Group/NewGroup';
import EditGroup from './src/components/Group/EditGroup';
import CreateVideo from './src/components/Video/CreateVideo';
import NewVideo from './src/components/Video/NewVideo';
import EditVideo from './src/components/Video/EditVideo';
import Login from './src/components/Login/Login';
import {SigUpScreen} from './src/components/signup/signuproot';

import { appTheme } from './src/utils/Themes/appTheme';


function getTabIcon(label,isFocused) {
  return(
    label === "Search"
    ?
    <Image source={require("./src/assets/icons/search.png")} style={{width:width(8),height:height(8)}} resizeMode="contain"/>
    :
    label === "Calendar"
    ?
    <Image source={require("./src/assets/icons/calendar.png")} style={{width:width(8),height:height(8)}} resizeMode="contain"/>
    :
    label === "CreateNewScreen"
    ?
    <Image source={require("./src/assets/icons/plus.png")} style={{width:width(8),height:height(8)}} resizeMode="contain"/>
    :
    label === "Notification"
    ?
    <Image source={require("./src/assets/icons/notification.png")} style={{width:width(8),height:height(8)}} resizeMode="contain"/>
    :
    <Image source={require("./src/assets/icons/chat.png")} style={{width:width(8),height:height(8)}} resizeMode="contain"/>
    
  )
}
function MyTabBar({ state, descriptors, navigation }) {
  return (
    <SafeAreaView style={{ flexDirection: 'row',height:height(8),backgroundColor:appTheme().darkerBackgroundColor}}>
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

function CreateSearchScreen(){
  return(
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
        <Stack.Screen name="SearchHome" component={SearchHome} type="reset"/>
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
        <Stack.Screen name="EditVideo" component={EditVideo} />
    </Stack.Navigator>
  )
}

const getGroupIcon = (navigation) => {
  // console.log("klmlkmlkm",navigation);
  return(
    <TouchableOpacity style={{width:width(12),alignItems:"center",justifyContent:"center",backgroundColor:appTheme().darkerBackgroundColor}} onPress={() => navigation.navigate("Setting")}>
    <Image source={require("./src/assets/icons/group.png")} style={{width:width(8),height:height(6)}} resizeMode="contain"/>
    </TouchableOpacity>
  )
}

const getUserIcon = (navigation) => {
  // console.log("klmlkmlkm",navigation);
  return(
    <TouchableOpacity style={{width:width(12),alignItems:"center",justifyContent:"center",backgroundColor:appTheme().darkerBackgroundColor}} onPress={() => navigation.navigate("Setting")}>
    <Image source={require("./src/assets/icons/user.png")} style={{width:width(8),height:height(6)}} resizeMode="contain"/>
    </TouchableOpacity>
  )
}
 
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
      <Tab.Navigator tabBar={props => <MyTabBar {...props} />} tabBarOptions={style={height:height(5)}} >
        <Tab.Screen name="Search" component={CreateSearchScreen} />
        <Tab.Screen name="Calendar" component={Calendar} />
        <Tab.Screen name="CreateNewScreen" component={CreateNewScreen}/>
        <Tab.Screen name="Notification" component={Notification} />
        <Tab.Screen name="Chat" component={ChatStack} />
      </Tab.Navigator>
  );
}



export default function App() {
  
  return (
    
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login}  options={{headerShown:false}} type="reset"/>
      <Stack.Screen name="SigUpScreen" component={SigUpScreen}  options={{headerShown:false}} type="reset"/>

      <Stack.Screen name="Home" component={HomeTabs}  options={{headerShown:false}} type="reset" options={({ navigation, route }) => ({
        headerLeft: props => getGroupIcon(navigation),
        headerRight: props => getUserIcon(navigation),
        headerTitle:"",
        headerStyle:{backgroundColor:appTheme().darkerBackgroundColor,borderBottomWidth:0,elevation:0}
      })}/>
      

    </Stack.Navigator>
    </NavigationContainer>
  );
}

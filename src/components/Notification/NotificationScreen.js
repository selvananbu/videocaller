//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,TouchableOpacity } from 'react-native';
import NotificationScreenStyle from './NotificationScreenStyle';
import { notificationData } from '../../utils/staticData';

// create a component
class NotificationScreen extends Component {
    render() {
        return (
            <TouchableOpacity style={NotificationScreenStyle.container}>
                <View style={NotificationScreenStyle.descriptionContainer}>
                <Text style={NotificationScreenStyle.descriptiontext}>Notifications</Text>
                </View>
                <View style={NotificationScreenStyle.bottomcontainer}>
                    {notificationData.notification.map((notification,idx) => {
                        return(
                            <TouchableOpacity key={idx} style={NotificationScreenStyle.notificationContainer}>
                                <View style={NotificationScreenStyle.notificationImageContainer}>
                                    <Image source={require("../../assets/icons/user.png")} style={NotificationScreenStyle.notificationImage} resizeMode="contain"/>
                                </View>
                                <View style={NotificationScreenStyle.notificationLabelContainer}>
                                    <Text style={NotificationScreenStyle.notificationText}>
                                        {notification.content}
                                    </Text>
                                    <Text style={NotificationScreenStyle.notificationText}>
                                    {notification.username}
                                    </Text>
                                </View>
                                <View style={NotificationScreenStyle.notificationTimeContainer}>
                                    <Text style={NotificationScreenStyle.notificationText}>
                                        {notification.time}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </TouchableOpacity>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default NotificationScreen;

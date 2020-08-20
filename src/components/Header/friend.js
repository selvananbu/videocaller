//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity,Image } from 'react-native';
import friendStyle from './friendstyle';

// create a component
class Friend extends Component {
    render() {
        var friend = this.props.friend;
        return (
            <TouchableOpacity style={friendStyle.friendContainer}>
            <View style={friendStyle.friendImageContainer}>
                <Image source={friend.status ?require("../../assets/icons/online.png") :require("../../assets/icons/offline.png")} style={friendStyle.friendImage} resizeMode="contain"/>
            </View>
            <View style={friendStyle.friendLabelContainer}>
                <Text style={friendStyle.friendText}>
                    {friend.name}
                </Text>
            </View>
            <View style={friendStyle.friendTimeContainer}>
                <Text style={friendStyle.friendText}>
                    {friend.status === 0 ? 'unfriend' : 'request'}
                </Text>
            </View>
        </TouchableOpacity>
        );
    }
}

//make this component available to the app
export default Friend;

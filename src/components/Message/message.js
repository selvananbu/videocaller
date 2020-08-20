//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity,Image } from 'react-native';
import messagescreenstyle from './messagescreenstyle';
import MessageScreenStyle from './messagescreenstyle';
import { messageData } from '../../utils/staticData';
import MessageScreen from './messagescreen';

// create a component
class Message extends Component {
    render() {
        var message = this.props.message;
        return (
            <TouchableOpacity style={MessageScreenStyle.messageContainer}>
            <View style={MessageScreenStyle.messageImageContainer}>
                <Image source={message.avatar} style={MessageScreenStyle.messageImage} resizeMode="contain"/>
            </View>
            <View style={MessageScreenStyle.messageLabelContainer}>
                <Text style={MessageScreenStyle.messageText}>
                    {message.name}
                </Text>
                <Text style={MessageScreenStyle.messageText}>
                    {message.content}
                </Text>
            </View>
            <View style={MessageScreenStyle.messageTimeContainer}>
                <Text style={MessageScreenStyle.messageText}>
                    {message.count}
                </Text>
            </View>
        </TouchableOpacity>
        );
    }
}

//make this component available to the app
export default Message;

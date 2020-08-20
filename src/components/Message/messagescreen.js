//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MessageScreenStyle from './messagescreenstyle';
import { messageData } from '../../utils/staticData';
import Message from './message';

// create a component
class MessageScreen extends Component {
    render() {
        return (
            <View style={MessageScreenStyle.container}>
                    <View style={MessageScreenStyle.messageContainer}>
                    <Text style={MessageScreenStyle.messagetext}>Messages</Text>
                    </View>
                    <View style={MessageScreenStyle.bottomcontainer}>
                    {messageData.messages.map((message,idx) => {
                        return(
                            <Message message={message} key={idx}/>
                        )
                    })}
                </View>
            </View>
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
export default MessageScreen;

//import liraries
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button,Text,Input } from 'react-native-elements';
import { height, width } from 'react-native-dimension';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// create a component
class EditVideo extends Component {
    render() {
        return (
            <KeyboardAwareScrollView>
            <View style={styles.container}>
                 <View style={{height:height(12),width:width(95),alignItems:"center",justifyContent:"center"}}>
                    <Text h3>Video Call</Text>
                </View>
            </View>
            </KeyboardAwareScrollView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'whitesmoke',
    },
});

//make this component available to the app
export default EditVideo;

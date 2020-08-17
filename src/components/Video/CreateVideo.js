//import liraries
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button,Text } from 'react-native-elements';
import { height, width } from 'react-native-dimension';

import CreateVideoStyle from './CreateVideoStyle';

// create a component
class CreateVideo extends Component {
    render() {
        return (
            <View style={CreateVideoStyle.container}>
                <View style={{height:height(8),width:width(95),alignItems:"center",justifyContent:"center"}}>
                    <Text h3>Create</Text>
                </View>
                <View style={{height:height(70),width:width(95),alignItems:"center",justifyContent:"center"}}>
                <View style={{width:width(65),alignItems:"center",justifyContent:"center",marginBottom:height(5)}}>
                        <Button
                         title="Video Call"
                         buttonStyle={{width:width(65),height:height(4),backgroundColor:"whi=tesmoke",borderWidth:1,borderColor:"#000"}}
                         titleStyle={{color:"#000"}}
                         onPress={() => this.props.navigation.navigate("NewVideo")}
                         />
                    </View>
                    <View style={{width:width(65),alignItems:"center",justifyContent:"center",marginBottom:height(15)}}>
                        <Button
                         title="LiveStream"
                         buttonStyle={{width:width(65),height:height(4),backgroundColor:"whi=tesmoke",borderWidth:1,borderColor:"#000"}}
                         titleStyle={{color:"#000"}}
                         />
                    </View>
                    <View style={{width:width(65),alignItems:"center",justifyContent:"center"}}>
                        <Button
                         title="LiveStream"
                         buttonStyle={{width:width(65),height:height(4),backgroundColor:"whi=tesmoke",borderWidth:1,borderColor:"#000"}}
                         titleStyle={{color:"#000"}}
                         />
                    </View>
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
        // backgroundColor: '#fff',
    },
});

//make this component available to the app
export default CreateVideo;

//import liraries
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button,Text,Input } from 'react-native-elements';
import { height, width } from 'react-native-dimension';

// create a component
class NewVideo extends Component {
    constructor(props){
        super(props)
        this.state={
            avatarSource:'',
            name:'',
            description:'',
            hashtag:''
        }
    }
    render() {
        return (
            <View style={styles.container}>
                 <View style={{height:height(12),width:width(95),alignItems:"center",justifyContent:"center"}}>
                    <Text h3>New Video Call</Text>
                </View>
                <View style={{width:width(85),height:height(12),alignItems:"center",justifyContent:"center"}}>
                <Input placeholder="Name" inputContainerStyle={{borderWidth:1}}  onChangeText={(text) => this.setState({name:text})}/>
                </View>

                <View style={{width:width(85),height:height(14),alignItems:"center",justifyContent:"center"}}>
                <Input placeholder="Description (max 300 characters)" inputContainerStyle={{borderWidth:1,height:height(18),alignItems:"flex-start",justifyContent:"flex-start"}} multiline={true} maxLength={300}  onChangeText={(text) => this.setState({description:text})}/>
                </View>

                <View style={{width:width(85),height:height(12),alignItems:"center",justifyContent:"center"}}>
                <Input placeholder="#hashtags" inputContainerStyle={{borderWidth:1}} onChangeText={(text) => this.setState({hashtag:text})}/>
                </View>
                {/* <View style={{width:width(95),height:height(12),alignItems:"center",justifyContent:"center",flexDirection:"row",backgroundColor:"red"}}>
                    <View style={{width:width(20),alignItems:"center",justifyContent:"center"}}>
                <Text>
                    Topica ( optional )
                </Text>
                </View>
                <Input placeholder="#hashtags" inputContainerStyle={{borderWidth:1,width:width(45)}} onChangeText={(text) => this.setState({hashtag:text})}/>
                </View> */}
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
        backgroundColor: 'whitesmoke',
    },
});

//make this component available to the app
export default NewVideo;

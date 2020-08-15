//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { width, height } from 'react-native-dimension';

// create a component
class Member extends Component {
    constructor(props){
        super(props)
        this.state={
            index:0
        }
    }
    render() {
        return (
            <View style={{width:width(99),height:height(8),alignItems:"center",justifyContent:"center",flexDirection:"row"}}>
                <View style={{width:width(15),height:height(8),alignItems:"center",justifyContent:"center"}}>
                    <Image source={require("../../assets/icons/user.png")} resizeMode="contain" style={{width:width(10),height:height(6)}}/>
                </View>
                <View style={{width:width(10),height:height(8),alignItems:"center",justifyContent:"center"}}>
                    <Text>
                        {this.props.member.name}
                    </Text>
                </View>
                <View style={{width:width(60),height:height(8),alignItems:"center",justifyContent:"center"}}>
                <View style={{width:width(55),height:height(6),alignItems:"flex-start",justifyContent:"center",flexDirection:"row"}}>
               <TouchableOpacity style={{width:width(26),height:height(4),alignItems:"center",justifyContent:'center',backgroundColor:this.state.index === 0 ? "#94bdf2" :"#fff",borderWidth:1}} onPress={() => this.setState({index:0})}>
                <Text>
                    RSVPs
                </Text>
               </TouchableOpacity>
               <TouchableOpacity style={{width:width(26),height:height(4),alignItems:"center",justifyContent:'center',backgroundColor:this.state.index === 1 ? "#94bdf2" :"#fff",borderWidth:1,borderLeftWidth:0}} onPress={() => this.setState({index:1})}>
                <Text>
                   Waiting List
                </Text>
               </TouchableOpacity>
               
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
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Member;

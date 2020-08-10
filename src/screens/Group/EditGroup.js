//import liraries
import React, { Component } from 'react';
import { Button,Text } from 'react-native-elements';
import { View, StyleSheet, Image } from 'react-native';
import { height, width } from 'react-native-dimension';

// create a component
class EditGroup extends Component {
    render() {
        var group = this.props.route.params.param
        return (
            <View style={styles.container}>
                <View style={{height:height(6),width:width(95),alignItems:"flex-start",justifyContent:"center"}}>
                    <Text h3>{group.name}</Text>
                </View>
                <View style={{height:height(5),width:width(95),alignItems:"flex-start",justifyContent:"center",flexDirection:"row"}}>
                    <View style={{width:width(70)}}>
                    <Text h4>{group.description.length > 8 ? group.description.substring(0,7) + "..." :group.description}</Text>
                    </View>
                    <View style={{width:width(25),alignItems:"center",justifyContent:"center"}}>
                        <Button
                         title="Join"
                         buttonStyle={{width:width(20),height:height(4),backgroundColor:"#fff",borderWidth:1,borderColor:"#000"}}
                         titleStyle={{color:"#000"}}
                         />
                    </View>
                </View>
                <View style={{height:height(5),width:width(93),alignItems:"flex-start",justifyContent:"center"}}>

                    <Text style={{fontSize:26}}>{group.hashtag}</Text>
                </View>
                <View style={{width:width(95),height:height(40),alignItems:"center",justifyContent:"center"}}>
                    <Image source={group.avatar} style={{width:width(90),height:height(35)}} resizeMode="cover"/>
                </View>

                <View style={{width:width(93),height:height(12),alignItems:"flex-start",justifyContent:"center"}}>
                <Text style={{fontSize:18,fontWeight:"bold"}}>
                        Description
                    </Text>
                    <Text style={{fontSize:18}}>
                        {group.description}
                    </Text>
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
        backgroundColor: '#fff',
    },
});

//make this component available to the app
export default EditGroup;

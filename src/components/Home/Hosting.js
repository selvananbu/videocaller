//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { width, height } from 'react-native-dimension';
import { TouchableOpacity } from 'react-native-gesture-handler';

// create a component
class Hosting extends Component {
    render() {
        var hostingData = this.props.hostingData;
        return (
            <View style={styles.container}>
                <View style={{width:width(30),height:height(14),alignItems:"flex-start",justifyContent:"flex-start"}}>
                    <Text>
                        {hostingData.count}
                    </Text>
                </View>
                <View style={{width:width(30),height:height(14),alignItems:"flex-start",justifyContent:"flex-start"}}>
                    <Text>
                        {hostingData.time}
                    </Text>
                    <Text>
                        {hostingData.type}
                    </Text>
                    <Text>
                        {hostingData.desc}
                    </Text>
                    <Text>
                        {hostingData.Description}
                    </Text>

                </View>
                <TouchableOpacity style={{width:width(30),height:height(14),alignItems:"flex-end",justifyContent:"flex-start"}}>
                    <Image source={require('../../assets/icons/more.png')} style={{width:width(8),height:height(8)}} resizeMode="contain"/>

                </TouchableOpacity>
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
        flexDirection:"row"
        // backgroundColor: '#fff',
    },
});

//make this component available to the app
export default Hosting;

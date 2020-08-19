//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import ProfileStyle from './ProfileStyle';
import { Button } from 'react-native-elements';
import { Localized } from '../../utils';

// create a component
class Profile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            avatar: require("../../assets/icons/user.png")
        }
    }

    openList(){
        this.props.navigation.navigate("Settings", {screen: 'SettingsList'})
    }

    render() {
        return (
            <View style={ProfileStyle.container}>
                <View style={ProfileStyle.topContainer}>
                    <Button
                        title={Localized.t("profile.addfriend")}
                        type="outline"
                        containerStyle={ProfileStyle.friendButton}
                        titleStyle={ProfileStyle.friendButtonText}
                    />
                    <View style={ProfileStyle.heartContainer}>
                        <Image source={require("../../assets/icons/heart.png")} style={ProfileStyle.heartImage} resizeMode="contain" />
                    </View>
                    <View style={ProfileStyle.heartContainer}>
                        <Image source={require("../../assets/icons/email.png")} style={ProfileStyle.heartImage} resizeMode="contain" />
                    </View>
                    <View style={ProfileStyle.giftContainer}>
                        <Button
                            title={Localized.t("profile.gift")}
                            type="outline"
                            containerStyle={ProfileStyle.friendButton}
                            titleStyle={ProfileStyle.friendButtonText}
                        />
                    </View>

                </View>
                <View style={ProfileStyle.avatarContainer}>
                    <Image source={this.state.avatar} style={ProfileStyle.image} resizeMode="contain" />
                </View>
                <View key = {'1'} >
                                
                        <TouchableOpacity style={ProfileStyle.settingsList} onPress={this.openList.bind(this)}>
                            <Text style={ProfileStyle.interestStyle}>
                                Settings
                            </Text>
                            
                                <Image source={require('../../assets/icons/righticon.png')} style={ProfileStyle.iconStyle} resizeMode='contain' />
                            
                        </TouchableOpacity>
                </View>
                <View style={ProfileStyle.bottomContainer}>

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
export default Profile;
